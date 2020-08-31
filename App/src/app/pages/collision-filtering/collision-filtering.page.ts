import { Component, OnInit } from '@angular/core';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';


import { Body, Engine, Render, World, Common, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js'; import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-collision-filtering',
	templateUrl: './collision-filtering.page.html',
	styleUrls: ['./collision-filtering.page.scss'],
})
export class CollisionFilteringPage implements OnInit {
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

		/**/
		const defaultCategory = 0x0001,
			redCategory = 0x0002,
			greenCategory = 0x0004,
			blueCategory = 0x0008;

		const redColor = '#C44D58',
			blueColor = '#4ECDC4',
			greenColor = '#C7F464';

		// add floor
		World.add(world, Bodies.rectangle(400, 600, 900, 50, {
			isStatic: true,
			render: {
				fillStyle: 'transparent',
				lineWidth: 1
			}
		}));

		// create a stack with varying body categories (but these bodies can all collide with each other)
		World.add(world,
			Composites.stack(275, 100, 5, 9, 10, 10, (x, y, column, row) => {
				let category = redCategory,
					color = redColor;

				if (row > 5) {
					category = blueCategory;
					color = blueColor;
				} else if (row > 2) {
					category = greenCategory;
					color = greenColor;
				}

				return Bodies.circle(x, y, 20, {
					collisionFilter: {
						category
					},
					render: {
						strokeStyle: color,
						fillStyle: 'transparent',
						lineWidth: 1
					}
				});
			})
		);

		// this body will only collide with the walls and the green bodies
		// let mask = defaultCategory | greenCategory;

		World.add(world,
			Bodies.circle(310, 40, 30, {
				collisionFilter: {
					mask: greenCategory
				},
				render: {
					fillStyle: greenColor
				}
			})
		);

		// this body will only collide with the walls and the red bodies
		// let mask = defaultCategory | redCategory;

		World.add(world,
			Bodies.circle(400, 40, 30, {
				collisionFilter: {
					mask: redCategory
				},
				render: {
					fillStyle: redColor
				}
			})
		);

		// this body will only collide with the walls and the blue bodies
		World.add(world,
			Bodies.circle(480, 40, 30, {
				collisionFilter: {
					mask: blueCategory
				},
				render: {
					fillStyle: blueColor
				}
			})
		);

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

		// red category objects should not be draggable with the mouse
		// mouseConstraint.collisionFilter.mask = defaultCategory | blueCategory | greenCategory;
		mouseConstraint.collisionFilter.mask = greenCategory;

		// fit the render viewport to the scene
		Render.lookAt(render, {
			min: { x: 0, y: 0 },
			max: { x: 800, y: 600 }
		});

	}
}
