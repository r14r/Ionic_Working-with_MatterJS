import { Component, OnInit } from '@angular/core';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';


import { Body, Engine, Render, World, Common, Bodies, Runner, Svg, Vertices, Composites, Mouse, MouseConstraint } from 'matter-js'; import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-svg',
	templateUrl: './svg.page.html',
	styleUrls: ['./svg.page.scss'],
})
export class SvgPage implements OnInit {
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
		const svgs = [
			'iconmonstr-check-mark-8-icon',
			'iconmonstr-paperclip-2-icon',
			'iconmonstr-puzzle-icon',
			'iconmonstr-user-icon'
		];

		if (typeof $ !== 'undefined') {
			for (let i = 0; i < svgs.length; i += 1) {
				((index) => {
					$.get('./svg/' + svgs[index] + '.svg').done((data) => {
						const vertexSets = [];
						const color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);

						$(data).find('path').each((index, path) => {
							const points = Svg.pathToVertices(path, 30);
							vertexSets.push(Vertices.scale(points, 0.4, 0.4));
						});

						World.add(world, Bodies.fromVertices(100 + index * 150, 200 + index * 50, vertexSets, {
							render: {
								fillStyle: color,
								strokeStyle: color,
								lineWidth: 1
							}
						}, true));
					});
				})(i);
			}

			$.get('./svg/svg.svg').done((data) => {
				const vertexSets = [];
				const color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);

				$(data).find('path').each((i, path) => {
					vertexSets.push(Svg.pathToVertices(path, 30));
				});

				World.add(world, Bodies.fromVertices(400, 80, vertexSets, {
					render: {
						fillStyle: color,
						strokeStyle: color,
						lineWidth: 1
					}
				}, true));
			});
		}

		World.add(world, [
			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
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
