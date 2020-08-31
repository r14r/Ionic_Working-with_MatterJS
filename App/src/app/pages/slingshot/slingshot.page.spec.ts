import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlingshotPage } from './slingshot.page';

describe('SlingshotPage', () => {
  let component: SlingshotPage;
  let fixture: ComponentFixture<SlingshotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlingshotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlingshotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
