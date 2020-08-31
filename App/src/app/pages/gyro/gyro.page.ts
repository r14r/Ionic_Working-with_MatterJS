import { Component, OnInit } from '@angular/core';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';


import { Body, Engine, Render, World, Common, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js'; import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-gyro',
	templateUrl: './gyro.page.html',
	styleUrls: ['./gyro.page.scss'],
})
export class GyroPage implements OnInit {
	private helper = new HelperService('AirFrictionPage');

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

		// add bodies
		const stack = Composites.stack(20, 20, 10, 5, 0, 0, (x, y) => {
			let sides = Math.round(Common.random(1, 8));

			// triangles can be a little unstable, so avoid until fixed
			sides = (sides === 3) ? 4 : sides;

			// round the edges of some bodies
			let chamfer = null;
			if (sides > 2 && Common.random() > 0.7) {
				chamfer = {
					radius: 10
				};
			}

			switch (Math.round(Common.random(0, 1))) {
				case 0:
					if (Common.random() < 0.8) {
						return Bodies.rectangle(x, y, Common.random(25, 50), Common.random(25, 50), { chamfer });
					} else {
						return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(25, 30), { chamfer });
					}
				case 1:
					return Bodies.polygon(x, y, sides, Common.random(25, 50), { chamfer });
			}
		});

		World.add(world, [
			stack,
			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
		]);

		// add gyro control
		let updateGravity = (event) => {
		};

		if (typeof window !== 'undefined') {
			updateGravity = (event) => {
				const orientation = typeof window.orientation !== 'undefined' ? window.orientation : 0;
				const gravity = engine.world.gravity;

				if (orientation === 0) {
					gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
					gravity.y = Common.clamp(event.beta, -90, 90) / 90;
				} else if (orientation === 180) {
					gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
					gravity.y = Common.clamp(-event.beta, -90, 90) / 90;
				} else if (orientation === 90) {
					gravity.x = Common.clamp(event.beta, -90, 90) / 90;
					gravity.y = Common.clamp(-event.gamma, -90, 90) / 90;
				} else if (orientation === -90) {
					gravity.x = Common.clamp(-event.beta, -90, 90) / 90;
					gravity.y = Common.clamp(event.gamma, -90, 90) / 90;
				}
			};

			window.addEventListener('deviceorientation', updateGravity);
		}

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

		// fit the render viewport to the scene
		Render.lookAt(render, {
			min: { x: 0, y: 0 },
			max: { x: 800, y: 600 }
		});
	}
}
