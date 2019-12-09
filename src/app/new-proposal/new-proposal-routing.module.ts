import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProposalPage } from './new-proposal.page';

const routes: Routes = [
  {
    path: '',
    component: NewProposalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProposalPageRoutingModule {}
