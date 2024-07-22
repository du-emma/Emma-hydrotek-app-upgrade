import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoseSettingsComponent } from './dose-settings.component';

describe('DoseSettingsComponent', () => {
  let component: DoseSettingsComponent;
  let fixture: ComponentFixture<DoseSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoseSettingsComponent ],
      imports: [IonicModule] //.forRoot() Emma
    }).compileComponents();

    fixture = TestBed.createComponent(DoseSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
