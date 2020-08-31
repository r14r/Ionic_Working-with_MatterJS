import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompoundStackPage } from './compound-stack.page';

describe('CompoundStackPage', () => {
  let component: CompoundStackPage;
  let fixture: ComponentFixture<CompoundStackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundStackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompoundStackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
