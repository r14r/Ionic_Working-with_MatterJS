import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TerrainPage } from './terrain.page';

describe('TerrainPage', () => {
  let component: TerrainPage;
  let fixture: ComponentFixture<TerrainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TerrainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
