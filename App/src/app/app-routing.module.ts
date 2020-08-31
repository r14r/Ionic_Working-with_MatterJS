import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/index', pathMatch: 'full' },
	{ path: 'home', loadChildren: () => import('./pages.base/home/home.module').then(m => m.HomePageModule) },
	{ path: 'list', loadChildren: () => import('./pages.base/list/list.module').then(m => m.ListPageModule) },
	{ path: 'index', loadChildren: () => import('./pages/index/index.module').then(m => m.IndexPageModule) },
	{ path: 'air-friction', loadChildren: () => import('./pages/air-friction/air-friction.module').then(m => m.AirFrictionPageModule) },
	{ path: 'avalanche', loadChildren: () => import('./pages/avalanche/avalanche.module').then(m => m.AvalanchePageModule) },
	{ path: 'ball-pool', loadChildren: () => import('./pages/ball-pool/ball-pool.module').then(m => m.BallPoolPageModule) },
	{ path: 'bridge', loadChildren: () => import('./pages/bridge/bridge.module').then(m => m.BridgePageModule) },
	{ path: 'broadphase', loadChildren: () => import('./pages/broadphase/broadphase.module').then(m => m.BroadphasePageModule) },
	{ path: 'car', loadChildren: () => import('./pages/car/car.module').then(m => m.CarPageModule) },
	{ path: 'catapult', loadChildren: () => import('./pages/catapult/catapult.module').then(m => m.CatapultPageModule) },
	{ path: 'chains', loadChildren: () => import('./pages/chains/chains.module').then(m => m.ChainsPageModule) },
	{ path: 'circle-stack', loadChildren: () => import('./pages/circle-stack/circle-stack.module').then(m => m.CircleStackPageModule) },
	{ path: 'cloth', loadChildren: () => import('./pages/cloth/cloth.module').then(m => m.ClothPageModule) },
	{ path: 'collision-filtering', loadChildren: () => import('./pages/collision-filtering/collision-filtering.module').then(m => m.CollisionFilteringPageModule) },
	{ path: 'composite-manipulation', loadChildren: () => import('./pages/composite-manipulation/composite-manipulation.module').then(m => m.CompositeManipulationPageModule) },
	{ path: 'compound', loadChildren: () => import('./pages/compound/compound.module').then(m => m.CompoundPageModule) },
	{ path: 'compound-stack', loadChildren: () => import('./pages/compound-stack/compound-stack.module').then(m => m.CompoundStackPageModule) },
	{ path: 'concave', loadChildren: () => import('./pages/concave/concave.module').then(m => m.ConcavePageModule) },
	{ path: 'constraints', loadChildren: () => import('./pages/constraints/constraints.module').then(m => m.ConstraintsPageModule) },
	{ path: 'double-pendulum', loadChildren: () => import('./pages/double-pendulum/double-pendulum.module').then(m => m.DoublePendulumPageModule) },
	{ path: 'events', loadChildren: () => import('./pages/events/events.module').then(m => m.EventsPageModule) },
	{ path: 'friction', loadChildren: () => import('./pages/friction/friction.module').then(m => m.FrictionPageModule) },
	{ path: 'gravity', loadChildren: () => import('./pages/gravity/gravity.module').then(m => m.GravityPageModule) },
	{ path: 'gyro', loadChildren: () => import('./pages/gyro/gyro.module').then(m => m.GyroPageModule) },
	{ path: 'manipulation', loadChildren: () => import('./pages/manipulation/manipulation.module').then(m => m.ManipulationPageModule) },
	{ path: 'minimal', loadChildren: () => import('./pages/minimal/minimal.module').then(m => m.MinimalPageModule) },
	{ path: 'mixed', loadChildren: () => import('./pages/mixed/mixed.module').then(m => m.MixedPageModule) },
	{ path: 'mixed-shapes', loadChildren: () => import('./pages/mixed-shapes/mixed-shapes.module').then(m => m.MixedShapesPageModule) },
	{ path: 'newtons-cradle', loadChildren: () => import('./pages/newtons-cradle/newtons-cradle.module').then(m => m.NewtonsCradlePageModule) },
	{ path: 'pyramid', loadChildren: () => import('./pages/pyramid/pyramid.module').then(m => m.PyramidPageModule) },
	{ path: 'ragdoll', loadChildren: () => import('./pages/ragdoll/ragdoll.module').then(m => m.RagdollPageModule) },
	{ path: 'raycasting', loadChildren: () => import('./pages/raycasting/raycasting.module').then(m => m.RaycastingPageModule) },
	{ path: 'restitution', loadChildren: () => import('./pages/restitution/restitution.module').then(m => m.RestitutionPageModule) },
	{ path: 'rounded', loadChildren: () => import('./pages/rounded/rounded.module').then(m => m.RoundedPageModule) },
	{ path: 'sensors', loadChildren: () => import('./pages/sensors/sensors.module').then(m => m.SensorsPageModule) },
	{ path: 'sleeping', loadChildren: () => import('./pages/sleeping/sleeping.module').then(m => m.SleepingPageModule) },
	{ path: 'slingshot', loadChildren: () => import('./pages/slingshot/slingshot.module').then(m => m.SlingshotPageModule) },
	{ path: 'soft-body', loadChildren: () => import('./pages/soft-body/soft-body.module').then(m => m.SoftBodyPageModule) },
	{ path: 'sprites', loadChildren: () => import('./pages/sprites/sprites.module').then(m => m.SpritesPageModule) },
	{ path: 'stack', loadChildren: () => import('./pages/stack/stack.module').then(m => m.StackPageModule) },
	{ path: 'static-friction', loadChildren: () => import('./pages/static-friction/static-friction.module').then(m => m.StaticFrictionPageModule) },
	{ path: 'stress', loadChildren: () => import('./pages/stress/stress.module').then(m => m.StressPageModule) },
	{ path: 'stress2', loadChildren: () => import('./pages/stress2/stress2.module').then(m => m.Stress2PageModule) },
	{ path: 'svg', loadChildren: () => import('./pages/svg/svg.module').then(m => m.SvgPageModule) },
	{ path: 'terrain', loadChildren: () => import('./pages/terrain/terrain.module').then(m => m.TerrainPageModule) },
	{ path: 'timescale', loadChildren: () => import('./pages/timescale/timescale.module').then(m => m.TimescalePageModule) },
	{ path: 'views', loadChildren: () => import('./pages/views/views.module').then(m => m.ViewsPageModule) },
	{ path: 'wrecking-ball', loadChildren: () => import('./pages/wrecking-ball/wrecking-ball.module').then(m => m.WreckingBallPageModule) },


];

@NgModule({
	imports: [RouterModule.forRoot(routes, { enableTracing: false })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
