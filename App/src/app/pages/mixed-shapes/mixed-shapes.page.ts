import { Component, OnInit } from '@angular/core';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';


import { Body, Engine, Render, World, Common, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js'; import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-mixed-shapes',
	templateUrl: './mixed-shapes.page.html',
	styleUrls: ['./mixed-shapes.page.scss'],
})
export class MixedShapesPage implements OnInit {
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

		// add Bodies
		const stack = Composites.stack(20, 20, 10, 5, 0, 0, (x, y) => {
			let sides = Math.round(Common.random(1, 8));

			// triangles can be a little unstable, so avoid until fixed
			sides = (sides === 3) ? 4 : sides;

			// round the edges of some Bodies
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
		World.add(world, stack);

		const walls = [
			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
		];

		World.add(world, [
			walls
		]);

		// add mouse control
		const mouse = Mouse.create(Render.canvas),
			mouseConstraint = MouseConstraint.create(engine, {
				mouse,
				constraint: {
					stiffness: 0.2,
					Render: {
						visible: false
					}
				}
			});

		World.add(World, mouseConstraint);

		// keep the mouse in sync with Rendering
		Render.mouse = mouse;

		// fit the Render viewport to the scene
		Render.lookAt(Render, {
			min: { x: 0, y: 0 },
			max: { x: 800, y: 600 }
		});

	}
}
