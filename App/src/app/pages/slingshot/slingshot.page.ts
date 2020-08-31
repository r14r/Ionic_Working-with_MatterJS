import { Component, OnInit } from '@angular/core';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';


import { Body, Events, Render, World, Constraint, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js'; import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-slingshot',
	templateUrl: './slingshot.page.html',
	styleUrls: ['./slingshot.page.scss'],
})
export class SlingshotPage implements OnInit {
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
		const ground = Bodies.rectangle(395, 600, 815, 50, { isStatic: true });
		const rockOptions = { density: 0.004 };
		let rock = Bodies.polygon(170, 450, 8, 20, rockOptions);
		const anchor = { x: 170, y: 450 };
		const elastic = Constraint.create({
			pointA: anchor,
			bodyB: rock,
			stiffness: 0.05
		});

		const pyramid = Composites.pyramid(500, 300, 9, 10, 0, 0, (x, y) => {
			return Bodies.rectangle(x, y, 25, 40);
		});

		const ground2 = Bodies.rectangle(610, 250, 200, 20, { isStatic: true });

		const pyramid2 = Composites.pyramid(550, 0, 5, 10, 0, 0, (x, y) => {
			return Bodies.rectangle(x, y, 25, 40);
		});

		World.add(engine.world, [ground, pyramid, ground2, pyramid2, rock, elastic]);

		//
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

		//
		Events.on(engine, 'afterUpdate', () => {
			if (mouseConstraint.mouse.button === -1 && (rock.position.x > 190 || rock.position.y < 430)) {
				rock = Bodies.polygon(170, 450, 7, 20, rockOptions);
				World.add(engine.world, rock);
				elastic.bodyB = rock;
			}
		});

		// fit the render viewport to the scene
		Render.lookAt(render, {
			min: { x: 0, y: 0 },
			max: { x: 800, y: 600 }
		});

	}
}
