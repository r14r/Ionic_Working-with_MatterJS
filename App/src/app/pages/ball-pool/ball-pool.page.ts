import { Component, OnInit } from '@angular/core';

import { HelperService } from 'src/app/helpers/helper.service';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';

import { Body, Engine, Render, World, Common, Bodies, Runner, Composite, Composites, Mouse, MouseConstraint } from 'matter-js';

@Component({
	selector: 'app-ball-pool',
	templateUrl: './ball-pool.page.html',
	styleUrls: ['./ball-pool.page.scss'],
})
export class BallPoolPage implements OnInit {
	private helper = new HelperService('BallPoolPage');


	ngOnInit() {
		this.helper.log('ngOnInit');
		this.demo();
	}

	demo() {
		this.helper.log('demo');

		const { world, canvas, engine, render, runner } = new MatterLibService().init();

		// add bodies
		World.add(world, [
			Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true })
		]);

		const stack = Composites.stack(100, 0, 10, 8, 10, 10, (x, y) => {
			return Bodies.circle(x, y, Common.random(15, 30), { restitution: 0.6, friction: 0.1 });
		});

		World.add(world, [
			stack,
			Bodies.polygon(200, 460, 3, 60),
			Bodies.polygon(400, 460, 5, 60),
			Bodies.rectangle(600, 460, 80, 80)
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

		// wrapping using matter-wrap plugin
		const allBodies = Composite.allBodies(world);

		for (const body of allBodies) {
			body.plugin.wrap = {
				min: { x: render.bounds.min.x - 100, y: render.bounds.min.y },
				max: { x: render.bounds.max.x + 100, y: render.bounds.max.y }
			};
		}

	}
}
