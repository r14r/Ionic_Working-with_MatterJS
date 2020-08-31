import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CircleStackPage } from './circle-stack.page';

describe('CircleStackPage', () => {
  let component: CircleStackPage;
  let fixture: ComponentFixture<CircleStackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleStackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CircleStackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
