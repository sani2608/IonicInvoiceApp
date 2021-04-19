import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.page.html',
  styleUrls: ['./total.page.scss'],
})
export class TotalPage implements OnInit {
  public itemList: Array<Item> = [];
  constructor(
    private service: ItemService
  ) { }

  ngOnInit() {
    this.itemList = this.service.items; //*get the list of items from the service
  }
  //*will increase the quantity of the item
  increaseItemQuantity(index: number) {
    const value = Number(this.itemList[index].quantity) + 1;
    this.service.items[index].quantity = value;
  }
  //*will decrease the quantity of the item
  decreaseItemQuantity(index: number) {
    const value = Number(this.itemList[index].quantity) - 1;
    if (value === 0) {
      this.service.items.splice(index, 1);
      this.service.nameOfItems.splice(index, 1);
    } else {
      this.service.items[index].quantity = value;
    }
  }
    // FIXME: Move this function to a service.
     //*this is to check if the cart is empty. if empty it will show
    //* message to add items to cart
    isEmpty(): boolean{
      if (this.service.items.length === 0) {
        return true;
      }
    }
    totalCartValue(): number{
      const initialValue = 0;
      const sum = this.itemList.reduce(
        (
          (accumulator, currentValue) =>
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          accumulator + (<number>currentValue.quantity * <number>currentValue.price)
        ), initialValue);
      return sum;
    }

}
