import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BridgePage } from './bridge.page';

describe('BridgePage', () => {
  let component: BridgePage;
  let fixture: ComponentFixture<BridgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BridgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
