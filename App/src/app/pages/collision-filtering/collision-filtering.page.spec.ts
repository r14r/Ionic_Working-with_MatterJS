import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CollisionFilteringPage } from './collision-filtering.page';

describe('CollisionFilteringPage', () => {
  let component: CollisionFilteringPage;
  let fixture: ComponentFixture<CollisionFilteringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollisionFilteringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CollisionFilteringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
