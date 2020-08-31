import { Component, OnInit } from '@angular/core';

import { HelperService } from 'src/app/helpers/helper.service';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';

import { Body, Engine, Render, World, Common, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js';

@Component({
	selector: 'app-air-friction',
	templateUrl: './air-friction.page.html',
	styleUrls: ['./air-friction.page.scss'],
})
export class AirFrictionPage implements OnInit {

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

		World.add(world, [
			Bodies.rectangle(200, 100, 60, 60, { frictionAir: 0.001 }),
			Bodies.rectangle(400, 100, 60, 60, { frictionAir: 0.05 }),
			Bodies.rectangle(600, 100, 60, 60, { frictionAir: 0.1 }),

			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
		]);
		this.helper.log('demo', 'world = ' + world);

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

		render.mouse = mouse;

		Render.lookAt(render, {
			min: { x: 0, y: 0 },
			max: { x: 800, y: 600 }
		});

	}

}
