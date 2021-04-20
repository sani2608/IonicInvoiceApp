import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.page.html',
  styleUrls: ['./total.page.scss'],
})
export class TotalPage implements OnInit {
  //itemList stores all the items;
  public itemList: Array<Item>;
  public cartValue = 100;
  constructor(private service: ItemService) {}

  ngOnInit(): void {
    //?always get updated value from service
    this.service.userdata.subscribe((data) => (this.itemList = data));
  }

  increaseQuantity(i: number) {
    this.service.increaseItemQuantity(i);
  }
  decreaseQuantity(i: number) {
    this.service.decreaseItemQuantity(i);
  }
  // totalCartValue() {
  //   this.cartValue = this.service.totalPrice;
  //   console.log(this.cartValue);
  // }
  isCartEmpty(): boolean {
    return this.service.isEmpty();
  }
}
