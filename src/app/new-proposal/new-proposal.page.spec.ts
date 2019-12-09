import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewProposalPage } from './new-proposal.page';

describe('NewProposalPage', () => {
  let component: NewProposalPage;
  let fixture: ComponentFixture<NewProposalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProposalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewProposalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
