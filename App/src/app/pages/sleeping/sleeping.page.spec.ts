import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepingPage } from './sleeping.page';

describe('SleepingPage', () => {
  let component: SleepingPage;
  let fixture: ComponentFixture<SleepingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
