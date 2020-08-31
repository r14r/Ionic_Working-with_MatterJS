import { Component, OnInit } from '@angular/core';
import { MatterLibService } from 'src/app/helpers/matter-lib.service';


import { Body, Engine, Render, World, Common, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js'; import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-gravity',
	templateUrl: './gravity.page.html',
	styleUrls: ['./gravity.page.scss'],
})
export class GravityPage implements OnInit {
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

	}
}