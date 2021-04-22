import { Component, OnInit } from '@angular/core';
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
  public cartValue: number;
  constructor(private service: ItemService) {}

  ngOnInit(): void {
    //?always get updated value from service
    this.service.userdata.subscribe((data) => (this.itemList = data));
    this.totalCartValue();
  }
  increaseQuantity(i: number) {
    this.service.increaseItemQuantity(i);
    this.totalCartValue();
  }
  decreaseQuantity(i: number) {
    this.service.decreaseItemQuantity(i);
    this.totalCartValue();
  }
  totalCartValue() {
    console.log('calculated cart value....', this.service.totalValue);
    this.cartValue = this.service.totalValue;
  }
  isCartEmpty(): boolean {
    return this.service.isEmpty();
  }
}
