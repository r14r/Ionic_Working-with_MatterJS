import { Component, OnInit } from '@angular/core';

import { MatterLibService } from 'src/app/helpers/matter-lib.service';
import { HelperService } from 'src/app/helpers/helper.service';

import { Body, Events, Example, Render, World, Common, Bodies, Composite, Composites, Constraint, Mouse, MouseConstraint } from 'matter-js';

@Component({
	selector: 'app-ragdoll',
	templateUrl: './ragdoll.page.html',
	styleUrls: ['./ragdoll.page.scss'],
})
export class RagdollPage implements OnInit {
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

		// create stairs
		const stairCount = (render.bounds.max.y - render.bounds.min.y) / 50;

		const stack = Composites.stack(0, 0, stairCount + 2, 1, 0, 0, (x, y, column) => {
			return Bodies.rectangle(x - 50, y + column * 50, 100, 1000, {
				isStatic: true,
				render: {
					fillStyle: '#222'
				}
			});
		});

		// create obstacles
		const obstacles = Composites.stack(300, 0, 15, 3, 10, 10, (x, y, column) => {
			const sides = Math.round(Common.random(1, 8)),
				options = {
					render: {
						fillStyle: Common.choose(['#006BA6', '#0496FF', '#D81159', '#8F2D56'])
					}
				};

			switch (Math.round(Common.random(0, 1))) {
				case 0:
					if (Common.random() < 0.8) {
						return Bodies.rectangle(x, y, Common.random(25, 50), Common.random(25, 50), options);
					} else {
						return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(25, 30), options);
					}
				case 1:
					return Bodies.polygon(x, y, sides, Common.random(25, 50), options);
			}
		});

		const ragdolls = Composite.create();

		for (let i = 0; i < 1; i += 1) {
			const ragdoll = Example.ragdoll.ragdoll(200, -1000 * i, 1.3);

			Composite.add(ragdolls, ragdoll);
		}

		World.add(world, [stack, obstacles, ragdolls]);

		let timeScaleTarget = 1,
			counter = 0;

		// add mouse control and make the mouse revolute
		const mouse = Mouse.create(render.canvas);
		const mouseConstraint = MouseConstraint.create(engine, {
			mouse,
			constraint: {
				stiffness: 0.6,
				length: 0,
				angularStiffness: 0,
				render: {
					visible: false
				}
			}
		});

		World.add(world, mouseConstraint);

		// keep the mouse in sync with rendering
		render.mouse = mouse;

		Events.on(engine, 'afterUpdate', (event) => {
			// tween the timescale for slow-mo
			if (mouse.button === -1) {
				engine.timing.timeScale += (timeScaleTarget - engine.timing.timeScale) * 0.05;
			} else {
				engine.timing.timeScale = 1;
			}

			counter += 1;

			// every 1.5 sec
			if (counter >= 60 * 1.5) {
				// flip the timescale
				if (timeScaleTarget < 1) {
					timeScaleTarget = 1;
				} else {
					timeScaleTarget = 0.05;
				}

				// reset counter
				counter = 0;
			}

			stack.bodies.forEach(body => {
				// animate stairs
				Body.translate(body, {
					x: -0.5 * engine.timing.timeScale,
					y: -0.5 * engine.timing.timeScale
				});

				// loop stairs when they go off screen
				if (body.position.x < -50) {
					Body.setPosition(body, {
						x: 50 * (stack.bodies.length - 1),
						y: 25 + render.bounds.max.y + (body.bounds.max.y - body.bounds.min.y) * 0.5
					});

					Body.setVelocity(body, {
						x: 0,
						y: 0
					});
				}
			});

			for (const ragdoll of ragdolls.composites) {
				const bounds = Composite.bounds(ragdoll);

				// move ragdolls back to the top of the screen
				if (bounds.min.y > render.bounds.max.y + 100) {
					Composite.translate(ragdoll, {
						x: -bounds.min.x * 0.9,
						y: -render.bounds.max.y - 400
					});
				}
			}

			obstacles.bodies.forEach(b => {
				const bounds = b.bounds;

				// move obstacles back to the top of the screen
				if (bounds.min.y > render.bounds.max.y + 100) {
					Body.translate(b, {
						x: -bounds.min.x,
						y: -render.bounds.max.y - 300
					});
				}
			});
		});

		// fit the render viewport to the scene
		Render.lookAt(render, {
			min: { x: 0, y: 0 },
			max: { x: 800, y: 600 }
		});

	}

	ragdoll(x, y, scale, options) {
		scale = typeof scale === 'undefined' ? 1 : scale;

		const headOptions = Common.extend({
			label: 'head',
			collisionFilter: {
				group: Body.nextGroup(true)
			},
			chamfer: {
				radius: [15 * scale, 15 * scale, 15 * scale, 15 * scale]
			},
			render: {
				fillStyle: '#FFBC42'
			}
		}, options);

		const chestOptions = Common.extend({
			label: 'chest',
			collisionFilter: {
				group: Body.nextGroup(true)
			},
			chamfer: {
				radius: [20 * scale, 20 * scale, 26 * scale, 26 * scale]
			},
			render: {
				fillStyle: '#E0A423'
			}
		}, options);

		const leftArmOptions = Common.extend({
			label: 'left-arm',
			collisionFilter: {
				group: Body.nextGroup(true)
			},
			chamfer: {
				radius: 10 * scale
			},
			render: {
				fillStyle: '#FFBC42'
			}
		}, options);

		const leftLowerArmOptions = Common.extend({}, leftArmOptions, {
			render: {
				fillStyle: '#E59B12'
			}
		});

		const rightArmOptions = Common.extend({
			label: 'right-arm',
			collisionFilter: {
				group: Body.nextGroup(true)
			},
			chamfer: {
				radius: 10 * scale
			},
			render: {
				fillStyle: '#FFBC42'
			}
		}, options);

		const rightLowerArmOptions = Common.extend({}, rightArmOptions, {
			render: {
				fillStyle: '#E59B12'
			}
		});

		const leftLegOptions = Common.extend({
			label: 'left-leg',
			collisionFilter: {
				group: Body.nextGroup(true)
			},
			chamfer: {
				radius: 10 * scale
			},
			render: {
				fillStyle: '#FFBC42'
			}
		}, options);

		const leftLowerLegOptions = Common.extend({}, leftLegOptions, {
			render: {
				fillStyle: '#E59B12'
			}
		});

		const rightLegOptions = Common.extend({
			label: 'right-leg',
			collisionFilter: {
				group: Body.nextGroup(true)
			},
			chamfer: {
				radius: 10 * scale
			},
			render: {
				fillStyle: '#FFBC42'
			}
		}, options);

		const rightLowerLegOptions = Common.extend({}, rightLegOptions, {
			render: {
				fillStyle: '#E59B12'
			}
		});

		const head = Bodies.rectangle(x, y - 60 * scale, 34 * scale, 40 * scale, headOptions);
		const chest = Bodies.rectangle(x, y, 55 * scale, 80 * scale, chestOptions);
		const rightUpperArm = Bodies.rectangle(x + 39 * scale, y - 15 * scale, 20 * scale, 40 * scale, rightArmOptions);
		const rightLowerArm = Bodies.rectangle(x + 39 * scale, y + 25 * scale, 20 * scale, 60 * scale, rightLowerArmOptions);
		const leftUpperArm = Bodies.rectangle(x - 39 * scale, y - 15 * scale, 20 * scale, 40 * scale, leftArmOptions);
		const leftLowerArm = Bodies.rectangle(x - 39 * scale, y + 25 * scale, 20 * scale, 60 * scale, leftLowerArmOptions);
		const leftUpperLeg = Bodies.rectangle(x - 20 * scale, y + 57 * scale, 20 * scale, 40 * scale, leftLegOptions);
		const leftLowerLeg = Bodies.rectangle(x - 20 * scale, y + 97 * scale, 20 * scale, 60 * scale, leftLowerLegOptions);
		const rightUpperLeg = Bodies.rectangle(x + 20 * scale, y + 57 * scale, 20 * scale, 40 * scale, rightLegOptions);
		const rightLowerLeg = Bodies.rectangle(x + 20 * scale, y + 97 * scale, 20 * scale, 60 * scale, rightLowerLegOptions);

		const chestToRightUpperArm = Constraint.create({
			bodyA: chest,
			pointA: {
				x: 24 * scale,
				y: -23 * scale
			},
			pointB: {
				x: 0,
				y: -8 * scale
			},
			bodyB: rightUpperArm,
			stiffness: 0.6,
			render: {
				visible: false
			}
		});

		const chestToLeftUpperArm = Constraint.create({
			bodyA: chest,
			pointA: {
				x: -24 * scale,
				y: -23 * scale
			},
			pointB: {
				x: 0,
				y: -8 * scale
			},
			bodyB: leftUpperArm,
			stiffness: 0.6,
			render: {
				visible: false
			}
		});

		const chestToLeftUpperLeg = Constraint.create({
			bodyA: chest,
			pointA: {
				x: -10 * scale,
				y: 30 * scale
			},
			pointB: {
				x: 0,
				y: -10 * scale
			},
			bodyB: leftUpperLeg,
			stiffness: 0.6,
			render: {
				visible: false
			}
		});

		const chestToRightUpperLeg = Constraint.create({
			bodyA: chest,
			pointA: {
				x: 10 * scale,
				y: 30 * scale
			},
			pointB: {
				x: 0,
				y: -10 * scale
			},
			bodyB: rightUpperLeg,
			stiffness: 0.6,
			render: {
				visible: false
			}
		});

		const upperToLowerRightArm = Constraint.create({
			bodyA: rightUpperArm,
			bodyB: rightLowerArm,
			pointA: {
				x: 0,
				y: 15 * scale
			},
			pointB: {
				x: 0,
				y: -25 * scale
			},
			stiffness: 0.6,
			render: {
				visible: false
			}
		});

		const upperToLowerLeftArm = Constraint.create({
			bodyA: leftUpperArm,
			bodyB: leftLowerArm,
			pointA: {
				x: 0,
				y: 15 * scale
			},
			pointB: {
				x: 0,
				y: -25 * scale
			},
			stiffness: 0.6,
			render: {
				visible: false
			}
		});

		const upperToLowerLeftLeg = Constraint.create({
			bodyA: leftUpperLeg,
			bodyB: leftLowerLeg,
			pointA: {
				x: 0,
				y: 20 * scale
			},
			pointB: {
				x: 0,
				y: -20 * scale
			},
			stiffness: 0.6,
			render: {
				visible: false
			}
		});

		const upperToLowerRightLeg = Constraint.create({
			bodyA: rightUpperLeg,
			bodyB: rightLowerLeg,
			pointA: {
				x: 0,
				y: 20 * scale
			},
			pointB: {
				x: 0,
				y: -20 * scale
			},
			stiffness: 0.6,
			render: {
				visible: false
			}
		});

		const headContraint = Constraint.create({
			bodyA: head,
			pointA: {
				x: 0,
				y: 25 * scale
			},
			pointB: {
				x: 0,
				y: -35 * scale
			},
			bodyB: chest,
			stiffness: 0.6,
			render: {
				visible: false
			}
		});

		const legToLeg = Constraint.create({
			bodyA: leftLowerLeg,
			bodyB: rightLowerLeg,
			stiffness: 0.01,
			render: {
				visible: false
			}
		});

		return Composite.create({
			bodies: [
				chest, head, leftLowerArm, leftUpperArm,
				rightLowerArm, rightUpperArm, leftLowerLeg,
				rightLowerLeg, leftUpperLeg, rightUpperLeg
			],
			constraints: [
				upperToLowerLeftArm, upperToLowerRightArm, chestToLeftUpperArm,
				chestToRightUpperArm, headContraint, upperToLowerLeftLeg,
				upperToLowerRightLeg, chestToLeftUpperLeg, chestToRightUpperLeg,
				legToLeg
			]
		});
	}
}
