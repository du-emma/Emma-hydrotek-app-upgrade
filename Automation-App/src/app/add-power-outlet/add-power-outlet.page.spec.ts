import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPowerOutletPage } from './add-power-outlet.page';

describe('AddPowerOutletPage', () => {
  let component: AddPowerOutletPage;
  let fixture: ComponentFixture<AddPowerOutletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPowerOutletPage ],
      imports: [IonicModule] //.forRoot() Emma
    }).compileComponents();

    fixture = TestBed.createComponent(AddPowerOutletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
