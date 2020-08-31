import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewtonsCradlePage } from './newtons-cradle.page';

describe('NewtonsCradlePage', () => {
  let component: NewtonsCradlePage;
  let fixture: ComponentFixture<NewtonsCradlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtonsCradlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewtonsCradlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
