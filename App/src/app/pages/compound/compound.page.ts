import { Component, OnInit } from '@angular/core';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';


import { Body, Engine, Render, World, Constraint, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js'; import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-compound',
	templateUrl: './compound.page.html',
	styleUrls: ['./compound.page.scss'],
})
export class CompoundPage implements OnInit {
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
		let size = 200;
		let x = 200;
		let y = 200;

		const partA = Bodies.rectangle(x, y, size, size / 5);
		const partB = Bodies.rectangle(x, y, size / 5, size, { render: partA.render });

		const compoundBodyA = Body.create({
			parts: [partA, partB]
		});

		size = 150;
		x = 400;
		y = 300;

		const partC = Bodies.circle(x, y, 30);
		const partD = Bodies.circle(x + size, y, 30);
		const partE = Bodies.circle(x + size, y + size, 30);
		const partF = Bodies.circle(x, y + size, 30);

		const compoundBodyB = Body.create({
			parts: [partC, partD, partE, partF]
		});

		const constraint = Constraint.create({
			pointA: { x: 400, y: 100 },
			bodyB: compoundBodyB,
			pointB: { x: 0, y: 0 }
		});

		World.add(world, [
			compoundBodyA,
			compoundBodyB,
			constraint,
			Bodies.rectangle(400, 600, 800, 50.5, { isStatic: true })
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
