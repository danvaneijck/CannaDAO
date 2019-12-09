import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewProposalPageRoutingModule } from './new-proposal-routing.module';

import { NewProposalPage } from './new-proposal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewProposalPageRoutingModule
  ],
  declarations: [NewProposalPage]
})
export class NewProposalPageModule {}
