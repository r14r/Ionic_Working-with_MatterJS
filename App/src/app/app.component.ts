import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {

	public appPages = [
		{ title: 'Home', url: '/home', icon: 'home' },
		{ title: 'List', url: '/list', icon: 'list' },

		{ title: 'air-friction', url: '/air-friction', icon: 'list' },
		{ title: 'avalanche', url: '/avalanche', icon: 'list' },
		{ title: 'ball-pool', url: '/ball-pool', icon: 'list' },
		{ title: 'bridge', url: '/bridge', icon: 'list' },
		{ title: 'broadphase', url: '/broadphase', icon: 'list' },
		{ title: 'car', url: '/car', icon: 'list' },
		{ title: 'catapult', url: '/catapult', icon: 'list' },
		{ title: 'chains', url: '/chains', icon: 'list' },
		{ title: 'circle-stack', url: '/circle-stack', icon: 'list' },
		{ title: 'cloth', url: '/cloth', icon: 'list' },
		{ title: 'collision-filtering', url: '/collision-filtering', icon: 'list' },
		{ title: 'composite-manipulation', url: '/composite-manipulation', icon: 'list' },
		{ title: 'compound', url: '/compound', icon: 'list' },
		{ title: 'compound-stack', url: '/compound-stack', icon: 'list' },
		{ title: 'concave', url: '/concave', icon: 'list' },
		{ title: 'constraints', url: '/constraints', icon: 'list' },
		{ title: 'double-pendulum', url: '/double-pendulum', icon: 'list' },
		{ title: 'events', url: '/events', icon: 'list' },
		{ title: 'friction', url: '/friction', icon: 'list' },
		{ title: 'gravity', url: '/gravity', icon: 'list' },
		{ title: 'gyro', url: '/gyro', icon: 'list' },
		{ title: 'manipulation', url: '/manipulation', icon: 'list' },
		{ title: 'minimal', url: '/minimal', icon: 'list' },
		{ title: 'mixed', url: '/mixed', icon: 'list' },
		{ title: 'mixed-shapes', url: '/mixed-shapes', icon: 'list' },
		{ title: 'mixedshapes', url: '/mixedshapes', icon: 'list' },
		{ title: 'newtons-cradle', url: '/newtons-cradle', icon: 'list' },
		{ title: 'pyramid', url: '/pyramid', icon: 'list' },
		{ title: 'ragdoll', url: '/ragdoll', icon: 'list' },
		{ title: 'raycasting', url: '/raycasting', icon: 'list' },
		{ title: 'restitution', url: '/restitution', icon: 'list' },
		{ title: 'rounded', url: '/rounded', icon: 'list' },
		{ title: 'sensors', url: '/sensors', icon: 'list' },
		{ title: 'sleeping', url: '/sleeping', icon: 'list' },
		{ title: 'slingshot', url: '/slingshot', icon: 'list' },
		{ title: 'soft-body', url: '/soft-body', icon: 'list' },
		{ title: 'sprites', url: '/sprites', icon: 'list' },
		{ title: 'stack', url: '/stack', icon: 'list' },
		{ title: 'static-friction', url: '/static-friction', icon: 'list' },
		{ title: 'stress', url: '/stress', icon: 'list' },
		{ title: 'stress2', url: '/stress2', icon: 'list' },
		{ title: 'svg', url: '/svg', icon: 'list' },
		{ title: 'terrain', url: '/terrain', icon: 'list' },
		{ title: 'timescale', url: '/timescale', icon: 'list' },
		{ title: 'views', url: '/views', icon: 'list' },
		{ title: 'wrecking-ball', url: '/wrecking-ball', icon: 'list' },
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// this.statusBar.styleDefault();
			// this.splashScreen.hide();
		});
	}
}
