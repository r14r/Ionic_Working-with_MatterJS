import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MixedShapesPage } from './mixed-shapes.page';

describe('MixedShapesPage', () => {
  let component: MixedShapesPage;
  let fixture: ComponentFixture<MixedShapesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixedShapesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MixedShapesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
