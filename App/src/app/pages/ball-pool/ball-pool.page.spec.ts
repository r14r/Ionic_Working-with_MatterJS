import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BallPoolPage } from './ball-pool.page';

describe('BallPoolPage', () => {
  let component: BallPoolPage;
  let fixture: ComponentFixture<BallPoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallPoolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BallPoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
