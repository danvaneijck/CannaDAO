import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Crop } from "../../models/crop/crop"
import {CropProvider} from "../../providers/crops/crops"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  crops: Crop[];
  completedCrops: Crop[];

  constructor(public router: Router, public cp: CropProvider) {
    this.load();
  }

  load(){
    this.crops =  this.cp.getCrops();
    this.completedCrops = [];
    let inCrops = [];
    for(const crop of this.crops){
      if(crop.completed){
        this.completedCrops.push(crop);
      }
      else{
        inCrops.push(crop)
      }
    }
    this.crops = inCrops;
  }

  ionViewWillEnter(){
    this.load();
  }

  newCrop() {
    this.router.navigate(['/new-crop']);
  }

  viewCrop(a){
    let navigationExtras: NavigationExtras = {
      state: {
        crop: a
      }
    };
    this.router.navigate(['/crop-details'], navigationExtras);
  }

}
