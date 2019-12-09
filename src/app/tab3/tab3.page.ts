import { Component } from '@angular/core';
import {OrderProvider} from '../../providers/orders/orders';
import {ListingProvider} from '../../providers/listings/listings';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  orders;
  completedOrders;
  listings;

  constructor(public op: OrderProvider, public lp: ListingProvider) {
    this.load();
  }

  load(){
    this.orders = this.op.getOrders();
    this.completedOrders = [];
    let inCrops = [];
    for(const order of this.orders){
      if(order.completed){
        this.completedOrders.push(order);
      }
      else{
        inCrops.push(order)
      }
    }
    this.orders = inCrops;

    this.listings = this.lp.getListings();
  }

}
