import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StaticFrictionPage } from './static-friction.page';

describe('StaticFrictionPage', () => {
  let component: StaticFrictionPage;
  let fixture: ComponentFixture<StaticFrictionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticFrictionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StaticFrictionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
