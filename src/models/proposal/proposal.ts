import { Injectable } from '@angular/core';

@Injectable()
export class Proposal {
    title;
    author;
    description;
    requestedFunds;
    requestedRep;
    owner;

    constructor(t: string, auth: string, desc: string, reqF: number, reqR: number, own: boolean) {
        this.title = t;
        this.author = auth;
        this.description = desc;
        this.requestedFunds = reqF;
        this.requestedRep = reqR;
        this.owner = own;
    }

}
