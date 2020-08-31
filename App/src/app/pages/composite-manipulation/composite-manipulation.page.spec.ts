import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompositeManipulationPage } from './composite-manipulation.page';

describe('CompositeManipulationPage', () => {
  let component: CompositeManipulationPage;
  let fixture: ComponentFixture<CompositeManipulationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositeManipulationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompositeManipulationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
