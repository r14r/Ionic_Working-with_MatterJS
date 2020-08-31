import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrictionPage } from './friction.page';

describe('FrictionPage', () => {
  let component: FrictionPage;
  let fixture: ComponentFixture<FrictionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrictionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrictionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
