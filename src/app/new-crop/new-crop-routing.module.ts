import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCropPage } from './new-crop.page';

const routes: Routes = [
  {
    path: '',
    component: NewCropPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewCropPageRoutingModule {}
