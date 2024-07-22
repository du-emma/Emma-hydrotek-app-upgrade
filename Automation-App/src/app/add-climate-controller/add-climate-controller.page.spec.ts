import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddClimateControllerPage } from './add-climate-controller.page';

describe('AddClimateController', () => {
  let component: AddClimateControllerPage;
  let fixture: ComponentFixture<AddClimateControllerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClimateControllerPage ],
      imports: [IonicModule] //.forRoot()
    }).compileComponents();

    fixture = TestBed.createComponent(AddClimateControllerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
