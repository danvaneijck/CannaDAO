import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProposalDetailsPageRoutingModule } from './proposal-details-routing.module';

import { ProposalDetailsPage } from './proposal-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProposalDetailsPageRoutingModule
  ],
  declarations: [ProposalDetailsPage]
})
export class ProposalDetailsPageModule {}
