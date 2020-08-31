import { Component, OnInit } from '@angular/core';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';


import { Body, Engine, Render, World, Common, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js'; import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-newtons-cradle',
	templateUrl: './newtons-cradle.page.html',
	styleUrls: ['./newtons-cradle.page.scss'],
})
export class NewtonsCradlePage implements OnInit {
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
		let cradle = Composites.newtonsCradle(280, 100, 5, 30, 200);
		World.add(world, cradle);
		Body.translate(cradle.bodies[0], { x: -180, y: -100 });

		cradle = Composites.newtonsCradle(280, 380, 7, 20, 140);
		World.add(world, cradle);
		Body.translate(cradle.bodies[0], { x: -140, y: -100 });

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
			min: { x: 0, y: 50 },
			max: { x: 800, y: 600 }
		});

	}
}
