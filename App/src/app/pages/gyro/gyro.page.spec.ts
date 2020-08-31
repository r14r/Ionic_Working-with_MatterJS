import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GyroPage } from './gyro.page';

describe('GyroPage', () => {
  let component: GyroPage;
  let fixture: ComponentFixture<GyroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GyroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GyroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
