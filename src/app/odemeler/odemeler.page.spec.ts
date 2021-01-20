import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OdemelerPage } from './odemeler.page';

describe('OdemelerPage', () => {
  let component: OdemelerPage;
  let fixture: ComponentFixture<OdemelerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdemelerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OdemelerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
