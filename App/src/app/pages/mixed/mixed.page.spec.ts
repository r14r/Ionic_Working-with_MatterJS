import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MixedPage } from './mixed.page';

describe('MixedPage', () => {
  let component: MixedPage;
  let fixture: ComponentFixture<MixedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MixedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
