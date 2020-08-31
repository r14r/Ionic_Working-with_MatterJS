import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RaycastingPage } from './raycasting.page';

describe('RaycastingPage', () => {
  let component: RaycastingPage;
  let fixture: ComponentFixture<RaycastingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaycastingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RaycastingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
