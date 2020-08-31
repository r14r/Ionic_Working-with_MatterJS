import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RagdollPage } from './ragdoll.page';

describe('RagdollPage', () => {
  let component: RagdollPage;
  let fixture: ComponentFixture<RagdollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RagdollPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RagdollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
