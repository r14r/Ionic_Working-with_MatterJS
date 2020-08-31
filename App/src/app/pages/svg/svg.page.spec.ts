import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SvgPage } from './svg.page';

describe('SvgPage', () => {
  let component: SvgPage;
  let fixture: ComponentFixture<SvgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SvgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
