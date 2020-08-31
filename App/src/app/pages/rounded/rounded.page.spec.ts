import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoundedPage } from './rounded.page';

describe('RoundedPage', () => {
  let component: RoundedPage;
  let fixture: ComponentFixture<RoundedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoundedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
