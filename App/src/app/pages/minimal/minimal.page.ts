import { Component, OnInit } from '@angular/core';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';


import { Body, Engine, Render, World, Common, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js'; import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-minimal',
	templateUrl: './minimal.page.html',
	styleUrls: ['./minimal.page.scss'],
})
export class MinimalPage implements OnInit {
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


		const ground = Bodies.rectangle(200, 710, 810, 100, { isStatic: true });

		World.add(engine.world, [
			Bodies.rectangle(400, 200, 80, 80),
			Bodies.rectangle(400, 200, 80, 80),
			Bodies.rectangle(450, 50, 80, 80),

			Bodies.circle(380, 100, 40, 10),
			Bodies.circle(460, 10, 40, 10),
			Bodies.circle(100, 100, 50, {
				density: 0.04,
				friction: 0.01,
				frictionAir: 0.00001,
				restitution: 0.8,
				render: { fillStyle: '#F35e66', strokeStyle: 'black', lineWidth: 1 }
			}),
			ground
		]);

		const mouseConstraint = MouseConstraint.create(engine, {
			element: canvas,
			constraint: {
				render: {
					visible: false
				},
				stiffness: 0.8
			}
		});
		World.add(engine.world, mouseConstraint);

	}
}
