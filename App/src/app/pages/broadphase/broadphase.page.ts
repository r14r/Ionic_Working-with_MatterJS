import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/helpers/helper.service';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';

import { Body, Engine, Render, World, Common, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js';


@Component({
	selector: 'app-broadphase',
	templateUrl: './broadphase.page.html',
	styleUrls: ['./broadphase.page.scss'],
})
export class BroadphasePage implements OnInit {
	private helper = new HelperService('BroadphasePage');

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

		const stack = Composites.stack(20, 20, 12, 5, 0, 0, (x, y) => {
			switch (Math.round(Common.random(0, 1))) {

				case 0:
					if (Common.random() < 0.8) {
						return Bodies.rectangle(x, y, Common.random(20, 50), Common.random(20, 50));
					} else {
						return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(20, 30));
					}
				case 1:
					return Bodies.polygon(x, y, Math.round(Common.random(1, 8)), Common.random(20, 50));

			}
		});

		World.add(world, stack);

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
