import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpritesPage } from './sprites.page';

describe('SpritesPage', () => {
  let component: SpritesPage;
  let fixture: ComponentFixture<SpritesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpritesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpritesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
