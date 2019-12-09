import { Component, OnInit } from '@angular/core';
import {CropProvider} from '../../providers/crops/crops';
import {Crop} from "../../models/crop/crop"
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-crop',
  templateUrl: './new-crop.page.html',
  styleUrls: ['./new-crop.page.scss'],
})
export class NewCropPage implements OnInit {

  constructor(public cp: CropProvider, public router: Router) { }

  title: string;
  numPlants: number;
  genetics: string;


  addCrop(){
    if(this.title != null && this.genetics != null && this.numPlants != null){
      let c = new Crop(this.title, this.genetics, this.numPlants, "./assets/nug2.png", false);
      this.cp.add(c);
      this.router.navigate(['/tabs/tab1']);
    }
  }

  ngOnInit() {
  }

}
