import { Component, OnInit } from '@angular/core';

import { HelperService } from 'src/app/helpers/helper.service';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';

import { Bounds, Engine, Events, Render, World, Common, Bodies, Runner, Composites, Vector, Mouse, MouseConstraint } from 'matter-js';

@Component({
	selector: 'app-wrecking-ball',
	templateUrl: './wrecking-ball.page.html',
	styleUrls: ['./wrecking-ball.page.scss'],
})
export class WreckingBallPage implements OnInit {
	private helper = new HelperService('WreckingBallPage');

	constructor() {
		this.helper.log('constructor');
	}
	ngOnInit() {
		this.helper.log('ngOnInit');
		this.demo();
	}

	demo() {
		this.helper.log('demo');

		const { world, canvas, engine, render, runner } = new MatterLibService().init();

		// add mouse control
		const mouse = Mouse.create(render.canvas);
		const mouseConstraint = MouseConstraint.create(engine, {
			mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false
				}
			}
		});

		World.add(world, mouseConstraint);

		// keep the mouse in sync with rendering
		render.mouse = mouse;

		// add bodies
		const stack = Composites.stack(20, 20, 15, 4, 0, 0, (x, y) => {
			switch (Math.round(Common.random(0, 1))) {

				case 0:
					if (Common.random() < 0.8) {
						return Bodies.rectangle(x, y, Common.random(20, 50), Common.random(20, 50));
					} else {
						return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(20, 30));
					}
				case 1:
					let sides = Math.round(Common.random(1, 8));
					sides = (sides === 3) ? 4 : sides;
					return Bodies.polygon(x, y, sides, Common.random(20, 50));
			}
		});

		World.add(world, [
			stack,
			// walls
			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
		]);

		// get the centre of the viewport
		const viewportCentre = {
			x: render.options.width * 0.5,
			y: render.options.height * 0.5
		};

		// make the world bounds a little bigger than the render bounds
		world.bounds.min.x = -300;
		world.bounds.min.y = -300;
		world.bounds.max.x = 1100;
		world.bounds.max.y = 900;

		// keep track of current bounds scale (view zoom)
		let boundsScaleTarget = 1;
		const boundsScale = {
			x: 1,
			y: 1
		};

		// use the engine tick event to control our view
		Events.on(engine, 'beforeTick', () => {
			const w = engine.world;
			const m = mouseConstraint.m;
			let translate;

			// mouse wheel controls zoom
			let scaleFactor = m.wheelDelta * -0.1;
			if (scaleFactor !== 0) {
				if ((scaleFactor < 0 && boundsScale.x >= 0.6) || (scaleFactor > 0 && boundsScale.x <= 1.4)) {
					boundsScaleTarget += scaleFactor;
				}
			}

			// if scale has changed
			if (Math.abs(boundsScale.x - boundsScaleTarget) > 0.01) {
				// smoothly tween scale factor
				scaleFactor = (boundsScaleTarget - boundsScale.x) * 0.2;
				boundsScale.x += scaleFactor;
				boundsScale.y += scaleFactor;

				// scale the render bounds
				render.bounds.max.x = render.bounds.min.x + render.options.width * boundsScale.x;
				render.bounds.max.y = render.bounds.min.y + render.options.height * boundsScale.y;

				// translate so zoom is from centre of view
				translate = {
					x: render.options.width * scaleFactor * -0.5,
					y: render.options.height * scaleFactor * -0.5
				};

				Bounds.translate(render.bounds, translate);

				// update mouse
				Mouse.setScale(m, boundsScale);
				Mouse.setOffset(m, render.bounds.min);
			}

			// get vector from mouse relative to centre of viewport
			const deltaCentre = Vector.sub(m.absolute, viewportCentre);
			const centreDist = Vector.magnitude(deltaCentre);

			// translate the view if mouse has moved over 50px from the centre of viewport
			if (centreDist > 50) {
				// create a vector to translate the view, allowing the user to control view speed
				const direction = Vector.normalise(deltaCentre);
				const speed = Math.min(10, Math.pow(centreDist - 50, 2) * 0.0002);

				translate = Vector.mult(direction, speed);

				// prevent the view moving outside the world bounds
				if (render.bounds.min.x + translate.x < world.bounds.min.x) {
					translate.x = world.bounds.min.x - render.bounds.min.x;
				}

				if (render.bounds.max.x + translate.x > world.bounds.max.x) {
					translate.x = world.bounds.max.x - render.bounds.max.x;
				}

				if (render.bounds.min.y + translate.y < world.bounds.min.y) {
					translate.y = world.bounds.min.y - render.bounds.min.y;
				}

				if (render.bounds.max.y + translate.y > world.bounds.max.y) {
					translate.y = world.bounds.max.y - render.bounds.max.y;
				}

				// move the view
				Bounds.translate(render.bounds, translate);

				// we must update the mouse too
				Mouse.setOffset(m, render.bounds.min);
			}
		});


	}
}
