import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConcavePage } from './concave.page';

describe('ConcavePage', () => {
  let component: ConcavePage;
  let fixture: ComponentFixture<ConcavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConcavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
