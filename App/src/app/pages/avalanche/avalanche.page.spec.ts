import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvalanchePage } from './avalanche.page';

describe('AvalanchePage', () => {
  let component: AvalanchePage;
  let fixture: ComponentFixture<AvalanchePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvalanchePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvalanchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
