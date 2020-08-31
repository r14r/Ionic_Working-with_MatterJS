import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PyramidPage } from './pyramid.page';

describe('PyramidPage', () => {
  let component: PyramidPage;
  let fixture: ComponentFixture<PyramidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyramidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PyramidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
