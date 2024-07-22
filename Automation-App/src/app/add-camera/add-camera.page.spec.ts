import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCameraPage } from './add-camera.page';

describe('AddCameraPage', () => {
  let component: AddCameraPage;
  let fixture: ComponentFixture<AddCameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCameraPage ],
      imports: [IonicModule] //Emma .forRoot
    }).compileComponents();

    fixture = TestBed.createComponent(AddCameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
