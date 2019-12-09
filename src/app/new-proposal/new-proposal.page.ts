import { Component, OnInit } from '@angular/core';
import {Proposal} from '../../models/proposal/proposal';
import {ProposalProvider} from '../../providers/proposals/proposals';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-proposal',
  templateUrl: './new-proposal.page.html',
  styleUrls: ['./new-proposal.page.scss'],
})
export class NewProposalPage implements OnInit {

  constructor(public pp: ProposalProvider, public router: Router) { }

  title;
  description;
  funds;
  rep;

  addProp(){
    if(this.title != null && this.description != null && this.funds != null && this.rep != null){
      let c = new Proposal(this.title, "Me", this.description, this.funds, this.rep, true);
      this.pp.add(c);
      this.router.navigate(['/tabs/tab4']);
    }
  }

  ngOnInit() {
  }

}
