import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StokDurumuPage } from './stok-durumu.page';

describe('StokDurumuPage', () => {
  let component: StokDurumuPage;
  let fixture: ComponentFixture<StokDurumuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StokDurumuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StokDurumuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
