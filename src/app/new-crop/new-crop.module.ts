import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewCropPageRoutingModule } from './new-crop-routing.module';

import { NewCropPage } from './new-crop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewCropPageRoutingModule
  ],
  declarations: [NewCropPage]
})
export class NewCropPageModule {}
