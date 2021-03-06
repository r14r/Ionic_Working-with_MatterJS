import { Component, OnInit } from '@angular/core';

import { HelperService } from 'src/app/helpers/helper.service';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';

import { Body, Render, World, Bodies, Runner, Composite, Composites, Constraint, Mouse, MouseConstraint } from 'matter-js';

@Component({
	selector: 'app-chains',
	templateUrl: './chains.page.html',
	styleUrls: ['./chains.page.scss'],
})
export class ChainsPage implements OnInit {
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
		let group = Body.nextGroup(true);

		const ropeA = Composites.stack(100, 50, 8, 1, 10, 10, (x, y) => {
			return Bodies.rectangle(x, y, 50, 20, { collisionFilter: { group } });
		});

		Composites.chain(ropeA, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 2, render: { type: 'line' } });
		Composite.add(ropeA, Constraint.create({
			bodyB: ropeA.bodies[0],
			pointB: { x: -25, y: 0 },
			pointA: { x: ropeA.bodies[0].position.x, y: ropeA.bodies[0].position.y },
			stiffness: 0.5
		}));

		group = Body.nextGroup(true);

		const ropeB = Composites.stack(350, 50, 10, 1, 10, 10, (x, y) => {
			return Bodies.circle(x, y, 20, { collisionFilter: { group } });
		});

		Composites.chain(ropeB, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 2, render: { type: 'line' } });
		Composite.add(ropeB, Constraint.create({
			bodyB: ropeB.bodies[0],
			pointB: { x: -20, y: 0 },
			pointA: { x: ropeB.bodies[0].position.x, y: ropeB.bodies[0].position.y },
			stiffness: 0.5
		}));

		group = Body.nextGroup(true);

		const ropeC = Composites.stack(600, 50, 13, 1, 10, 10, (x, y) => {
			return Bodies.rectangle(x - 20, y, 50, 20, { collisionFilter: { group }, chamfer: 5 });
		});

		Composites.chain(ropeC, 0.3, 0, -0.3, 0, { stiffness: 1, length: 0 });
		Composite.add(ropeC, Constraint.create({
			bodyB: ropeC.bodies[0],
			pointB: { x: -20, y: 0 },
			pointA: { x: ropeC.bodies[0].position.x, y: ropeC.bodies[0].position.y },
			stiffness: 0.5
		}));

		World.add(world, [
			ropeA,
			ropeB,
			ropeC,
			Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true })
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
			max: { x: 700, y: 600 }
		});


	}
}
