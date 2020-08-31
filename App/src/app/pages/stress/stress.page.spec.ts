import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StressPage } from './stress.page';

describe('StressPage', () => {
  let component: StressPage;
  let fixture: ComponentFixture<StressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
