import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProposalDetailsPage } from './proposal-details.page';

const routes: Routes = [
  {
    path: '',
    component: ProposalDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProposalDetailsPageRoutingModule {}
