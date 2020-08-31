import { Injectable } from '@angular/core';
import { Engine, Render, Runner } from 'matter-js';
import { HelperService } from 'src/app/helpers/helper.service';

@Injectable({
	providedIn: 'root'
})
export class MatterLibService {
	private helper = new HelperService('MatterLibService');

	constructor() { }

	percentX(percent) {
		return Math.round(percent / 100 * window.innerWidth);
	}

	percentY(percent) {
		return Math.round(percent / 100 * window.innerHeight);
	}

	init() {
		const body = document.body;
		const html = document.documentElement;

		const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
		const width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

		const canvasWidth = this.percentX(80);
		const canvasHeight = this.percentY(90);

		const canvas = document.getElementById('world');
		const engine = Engine.create();
		const world = engine.world;

		const render = Render.create({
			canvas,
			engine,
			options: {
				width: canvasWidth,
				height: canvasHeight,
				background: 'lightgray', // 'transparent',
				wireframes: false,
				showAngleIndicator: false,
				showCollisions: false,
				showVelocity: false
			}
		});

		Render.run(render);

		// create runner
		const runner = Runner.create();
		Runner.run(runner, engine);

		return {
			world, canvas, engine, render, runner
		};
	}
}
