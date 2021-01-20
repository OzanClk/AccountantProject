import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GelirGiderPage } from './gelir-gider.page';

describe('GelirGiderPage', () => {
  let component: GelirGiderPage;
  let fixture: ComponentFixture<GelirGiderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GelirGiderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GelirGiderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
