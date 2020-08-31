import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoublePendulumPage } from './double-pendulum.page';

describe('DoublePendulumPage', () => {
  let component: DoublePendulumPage;
  let fixture: ComponentFixture<DoublePendulumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublePendulumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoublePendulumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
