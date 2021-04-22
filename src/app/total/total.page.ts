import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.page.html',
  styleUrls: ['./total.page.scss'],
})
export class TotalPage implements OnInit {
  constructor(private service: ItemService) {}

  ngOnInit(): void {}
  increaseQuantity(i: number): void {
    this.service.increaseItemQuantity(i);
  }
  decreaseQuantity(i: number): void {
    this.service.decreaseItemQuantity(i);
  }
  isCartEmpty(): boolean {
    return this.service.isEmpty();
  }
  /**
   * this subscribes to the latest data.
   * no need to use subscribe as async pipe is used in template
   * it will also automatically unsubscribe after work is done.
   */
  get listOfItems(): Observable<Item[]> {
    return this.service.userdata;
  }
  get cartVal(): Observable<number> {
    return this.service.totalValue;
  }
}
