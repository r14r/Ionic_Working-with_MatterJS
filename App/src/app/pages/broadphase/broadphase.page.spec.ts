import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BroadphasePage } from './broadphase.page';

describe('BroadphasePage', () => {
  let component: BroadphasePage;
  let fixture: ComponentFixture<BroadphasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadphasePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BroadphasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
