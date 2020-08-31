import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MinimalPage } from './minimal.page';

describe('MinimalPage', () => {
  let component: MinimalPage;
  let fixture: ComponentFixture<MinimalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MinimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
