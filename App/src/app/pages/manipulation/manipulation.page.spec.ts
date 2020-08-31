import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManipulationPage } from './manipulation.page';

describe('ManipulationPage', () => {
  let component: ManipulationPage;
  let fixture: ComponentFixture<ManipulationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipulationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManipulationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
