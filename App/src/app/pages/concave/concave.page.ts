import { Component, OnInit } from '@angular/core';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';


import { Body, Engine, Render, World, Common, Bodies, Runner, Composites, Vertices, Mouse, MouseConstraint } from 'matter-js'; import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-concave',
	templateUrl: './concave.page.html',
	styleUrls: ['./concave.page.scss'],
})
export class ConcavePage implements OnInit {
	private helper = new HelperService('AirFrictionPage');

	constructor() {
		this.helper.log('ngOnInit');
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

		const arrow = Vertices.fromPath('40 0 40 20 100 20 100 80 40 80 40 100 0 50');
		const chevron = Vertices.fromPath('100 0 75 50 100 100 25 100 0 50 25 0');
		const star = Vertices.fromPath('50 0 63 38 100 38 69 59 82 100 50 75 18 100 31 59 0 38 37 38');
		const horseShoe = Vertices.fromPath('35 7 19 17 14 38 14 58 25 79 45 85 65 84 65 66 46 67 34 59 30 44 33 29 45 23 66 23 66 7 53 7');

		const stack = Composites.stack(50, 50, 6, 4, 10, 10, (x, y) => {
			const color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);
			return Bodies.fromVertices(x, y, Common.choose([arrow, chevron, star, horseShoe]), {
				render: {
					fillStyle: color,
					strokeStyle: color,
					lineWidth: 1
				}
			}, true);
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
