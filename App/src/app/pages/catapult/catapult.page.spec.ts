import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatapultPage } from './catapult.page';

describe('CatapultPage', () => {
  let component: CatapultPage;
  let fixture: ComponentFixture<CatapultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatapultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatapultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
