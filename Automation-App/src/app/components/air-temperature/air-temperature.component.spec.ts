import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AirTemperatureComponent } from './air-temperature.component';

describe('AirTemperatureComponent', () => {
  let component: AirTemperatureComponent;
  let fixture: ComponentFixture<AirTemperatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirTemperatureComponent ],
      imports: [IonicModule] //.forRoot() Emma
    }).compileComponents();

    fixture = TestBed.createComponent(AirTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
