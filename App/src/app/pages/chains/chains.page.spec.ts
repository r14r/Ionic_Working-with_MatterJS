import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChainsPage } from './chains.page';

describe('ChainsPage', () => {
  let component: ChainsPage;
  let fixture: ComponentFixture<ChainsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChainsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
