import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WreckingBallPage } from './wrecking-ball.page';

describe('WreckingBallPage', () => {
  let component: WreckingBallPage;
  let fixture: ComponentFixture<WreckingBallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WreckingBallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WreckingBallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
