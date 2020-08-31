import { Component, OnInit } from '@angular/core';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';

import * as $ from 'jquery';

import { Body, Engine, Render, World, Query, Svg, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js'; import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-terrain',
	templateUrl: './terrain.page.html',
	styleUrls: ['./terrain.page.scss'],
})
export class TerrainPage implements OnInit {
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
		let terrain;

		if (typeof $ !== 'undefined') {
			$.get('./svg/terrain.svg').done((data) => {
				const vertexSets = [];

				$(data).find('path').each((i, path) => {
					vertexSets.push(Svg.pathToVertices(path, 30));
				});

				terrain = Bodies.fromVertices(400, 350, vertexSets, {
					isStatic: true,
					render: {
						fillStyle: '#2e2b44',
						strokeStyle: '#2e2b44',
						lineWidth: 1
					}
				}, true);

				World.add(world, terrain);

				const bodyOptions = {
					frictionAir: 0,
					friction: 0.0001,
					restitution: 0.6
				};

				World.add(world, Composites.stack(80, 100, 20, 20, 10, 10, (x, y) => {
					if (Query.point([terrain], { x, y }).length === 0) {
						return Bodies.polygon(x, y, 5, 12, bodyOptions);
					}
				}));
			});
		}

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
