import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GravityPage } from './gravity.page';

describe('GravityPage', () => {
  let component: GravityPage;
  let fixture: ComponentFixture<GravityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GravityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
