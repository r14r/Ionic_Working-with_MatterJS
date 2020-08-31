import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AirFrictionPage } from './air-friction.page';

describe('AirFrictionPage', () => {
  let component: AirFrictionPage;
  let fixture: ComponentFixture<AirFrictionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirFrictionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AirFrictionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
