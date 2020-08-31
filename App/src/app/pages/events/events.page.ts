import { Component, OnInit } from '@angular/core';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';


import { Body, Events, Render, World, Common, Bodies, Runner, Composite, Composites, Mouse, MouseConstraint } from 'matter-js'; import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-events',
	templateUrl: './events.page.html',
	styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
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
		const shakeScene = (e) => {
			const bodies = Composite.allBodies(e.world);

			for (const body of bodies) {
				if (!body.isStatic && body.position.y >= 500) {
					const forceMagnitude = 0.02 * body.mass;

					Body.applyForce(body, body.position, {
						x: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([1, -1]),
						y: -forceMagnitude + Common.random() * -forceMagnitude
					});
				}
			}
		};

		// an example of using composite events on the world
		Events.on(world, 'afterAdd', (event) => {
			console.log('added to world:', event.object);
		});

		// an example of using beforeUpdate event on an engine
		Events.on(engine, 'beforeUpdate', (event) => {
			const e = event.source;

			// apply random forces every 5 secs
			if (event.timestamp % 5000 < 50) {
				shakeScene(e);
			}
		});

		// an example of using collisionStart event on an engine
		Events.on(engine, 'collisionStart', (event) => {
			const pairs = event.pairs;

			// change object colours to show those starting a collision
			for (const pair of pairs) {
				pair.bodyA.render.fillStyle = '#333';
				pair.bodyB.render.fillStyle = '#333';
			}
		});

		// an example of using collisionActive event on an engine
		Events.on(engine, 'collisionActive', (event) => {
			const pairs = event.pairs;

			// change object colours to show those in an active collision (e.g. resting contact)
			for (const pair of pairs) {
				pair.bodyA.render.fillStyle = '#333';
				pair.bodyB.render.fillStyle = '#333';
			}
		});

		// an example of using collisionEnd event on an engine
		Events.on(engine, 'collisionEnd', (event) => {
			const pairs = event.pairs;

			// change object colours to show those ending a collision
			for (const pair of pairs) {
				pair.bodyA.render.fillStyle = '#222';
				pair.bodyB.render.fillStyle = '#222';
			}
		});

		const bodyStyle = { fillStyle: '#222' };

		// scene code
		World.add(world, [
			Bodies.rectangle(400, 0, 800, 50, { isStatic: true, render: bodyStyle }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true, render: bodyStyle }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true, render: bodyStyle }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true, render: bodyStyle })
		]);

		const stack = Composites.stack(70, 100, 9, 4, 50, 50, (x, y) => {
			return Bodies.circle(x, y, 15, { restitution: 1, render: bodyStyle });
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

		// an example of using mouse events on a mouse
		Events.on(mouseConstraint, 'mousedown', (event) => {
			const mousePosition = event.mouse.position;
			console.log('mousedown at ' + mousePosition.x + ' ' + mousePosition.y);
			shakeScene(engine);
		});

		// an example of using mouse events on a mouse
		Events.on(mouseConstraint, 'mouseup', (event) => {
			const mousePosition = event.mouse.position;
			console.log('mouseup at ' + mousePosition.x + ' ' + mousePosition.y);
		});

		// an example of using mouse events on a mouse
		Events.on(mouseConstraint, 'startdrag', (event) => {
			console.log('startdrag', event);
		});

		// an example of using mouse events on a mouse
		Events.on(mouseConstraint, 'enddrag', (event) => {
			console.log('enddrag', event);
		});

		// fit the render viewport to the scene
		Render.lookAt(render, {
			min: { x: 0, y: 0 },
			max: { x: 800, y: 600 }
		});


	}
}
