import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClothPage } from './cloth.page';

describe('ClothPage', () => {
  let component: ClothPage;
  let fixture: ComponentFixture<ClothPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClothPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
