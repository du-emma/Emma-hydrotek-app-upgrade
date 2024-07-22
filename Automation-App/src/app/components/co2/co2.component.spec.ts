import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Co2Component } from './co2.component';

describe('Co2Component', () => {
  let component: Co2Component;
  let fixture: ComponentFixture<Co2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Co2Component ],
      imports: [IonicModule] //.forRoot() Emma
    }).compileComponents();

    fixture = TestBed.createComponent(Co2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
