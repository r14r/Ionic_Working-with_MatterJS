import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompoundPage } from './compound.page';

describe('CompoundPage', () => {
  let component: CompoundPage;
  let fixture: ComponentFixture<CompoundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
