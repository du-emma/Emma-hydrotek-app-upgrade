import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdentifyDevicePage } from './identify-device.page';

describe('IdentifyDevicePage', () => {
  let component: IdentifyDevicePage;
  let fixture: ComponentFixture<IdentifyDevicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyDevicePage ],
      imports: [IonicModule] //.forRoot() Emma
    }).compileComponents();

    fixture = TestBed.createComponent(IdentifyDevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
