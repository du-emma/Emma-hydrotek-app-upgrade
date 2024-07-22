import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EcComponent } from './ec.component';

describe('EcComponent', () => {
  let component: EcComponent;
  let fixture: ComponentFixture<EcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcComponent ],
      imports: [IonicModule] //.forRoot() Emma
    }).compileComponents();

    fixture = TestBed.createComponent(EcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
