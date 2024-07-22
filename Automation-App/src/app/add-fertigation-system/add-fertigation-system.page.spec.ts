import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFertigationSystemPage } from './add-fertigation-system.page';

describe('AddFertigationSystemPage', () => {
  let component: AddFertigationSystemPage;
  let fixture: ComponentFixture<AddFertigationSystemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFertigationSystemPage ],
      imports: [IonicModule] //.forRoot() Emma
    }).compileComponents();

    fixture = TestBed.createComponent(AddFertigationSystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
