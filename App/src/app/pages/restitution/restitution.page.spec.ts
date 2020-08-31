import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestitutionPage } from './restitution.page';

describe('RestitutionPage', () => {
  let component: RestitutionPage;
  let fixture: ComponentFixture<RestitutionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestitutionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestitutionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
