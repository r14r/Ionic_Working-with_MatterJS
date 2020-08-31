import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimescalePage } from './timescale.page';

describe('TimescalePage', () => {
  let component: TimescalePage;
  let fixture: ComponentFixture<TimescalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimescalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimescalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
