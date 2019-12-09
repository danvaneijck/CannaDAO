import { Component } from '@angular/core';
import {ProposalProvider} from '../../providers/proposals/proposals';
import {Proposal} from '../../models/proposal/proposal';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  proposals: Proposal[];
  myProposals: Proposal[];

  constructor(public pp: ProposalProvider, public router: Router) {
    this.load();
  }

  ionViewWillEnter (){
    this.load();
  }

  load(){
    this.proposals = this.pp.getProps();
    this.myProposals = [];
    let props = [];
    for(const p of this.proposals){
      if(p.owner == true){
        this.myProposals.push(p);
      }
      else{
        props.push(p)
      }
    }
    this.proposals = props;
  }

  newProp(){
    this.router.navigate(['/new-proposal']);
  }

  viewProp(a){
    let navigationExtras: NavigationExtras = {
      state: {
        prop: a
      }
    };
    this.router.navigate(['/proposal-details'], navigationExtras);
  }

}
