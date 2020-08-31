import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoftBodyPage } from './soft-body.page';

describe('SoftBodyPage', () => {
  let component: SoftBodyPage;
  let fixture: ComponentFixture<SoftBodyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftBodyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoftBodyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
