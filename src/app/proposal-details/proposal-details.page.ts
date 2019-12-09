import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-proposal-details',
  templateUrl: './proposal-details.page.html',
  styleUrls: ['./proposal-details.page.scss'],
})
export class ProposalDetailsPage implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.prop;
      }
    });
  }


  ngOnInit() {
  }

}
