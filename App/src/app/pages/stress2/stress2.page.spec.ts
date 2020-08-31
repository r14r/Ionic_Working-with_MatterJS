import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Stress2Page } from './stress2.page';

describe('Stress2Page', () => {
  let component: Stress2Page;
  let fixture: ComponentFixture<Stress2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stress2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Stress2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
