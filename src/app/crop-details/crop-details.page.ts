import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crop-details',
  templateUrl: './crop-details.page.html',
  styleUrls: ['./crop-details.page.scss'],
})
export class CropDetailsPage implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.crop;
      }
    });
  }

  ngOnInit() {
  }

}
