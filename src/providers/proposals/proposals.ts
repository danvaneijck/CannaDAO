import {Injectable} from "@angular/core";
import {Proposal} from '../../models/proposal/proposal';

@Injectable()
export class ProposalProvider {
    proposals: Proposal[] = [];

    constructor() {
        this.generateProps();
    }

    generateProps(){
        let title = "New lighting setup";
        let author = "PrimeGrowers";
        let description = "I am requesting funds for purchasing new and more efficient LED lights for my growing setup";
        let reqF = 5;
        let reqR = 2;
        let p = new Proposal(title, author, description, reqF, reqR, false);
        this.proposals.push(p);

        title = "New packaging machine";
        author = "THC Foods";
        description = "We are requesting funds for a new packaging system that is more sustainable";
        reqF = 5;
        reqR = 2;
        p = new Proposal(title, author, description, reqF, reqR, true);
        this.proposals.push(p);

        title = "Give me reputation";
        author = "High Grows";
        description = "I am new to the community and need some reputation!";
        reqF = 1;
        reqR = 2;
        p = new Proposal(title, author, description, reqF, reqR, false);
        this.proposals.push(p);
    }

    getProps() {
        return this.proposals;
    }

    add(a) {
        this.proposals.push(a);
    }

}
