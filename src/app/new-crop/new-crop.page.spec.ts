import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewCropPage } from './new-crop.page';

describe('NewCropPage', () => {
  let component: NewCropPage;
  let fixture: ComponentFixture<NewCropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCropPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewCropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
