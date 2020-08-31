import { Component, OnInit } from '@angular/core';

import { HelperService } from 'src/app/helpers/helper.service';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';

import { Render, World, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js';

@Component({
	selector: 'app-car',
	templateUrl: './car.page.html',
	styleUrls: ['./car.page.scss'],
})
export class CarPage implements OnInit {
	private helper = new HelperService('CarPage');

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
		World.add(world, [
			// walls
			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
		]);

		let scale = 0.9;
		World.add(world, Composites.car(150, 100, 150 * scale, 30 * scale, 30 * scale));

		scale = 0.8;
		World.add(world, Composites.car(350, 300, 150 * scale, 30 * scale, 30 * scale));

		World.add(world, [
			Bodies.rectangle(200, 150, 400, 20, { isStatic: true, angle: Math.PI * 0.06 }),
			Bodies.rectangle(500, 350, 650, 20, { isStatic: true, angle: -Math.PI * 0.06 }),
			Bodies.rectangle(300, 560, 600, 20, { isStatic: true, angle: Math.PI * 0.04 })
		]);

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
