import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConstraintsPage } from './constraints.page';

describe('ConstraintsPage', () => {
  let component: ConstraintsPage;
  let fixture: ComponentFixture<ConstraintsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstraintsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConstraintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
