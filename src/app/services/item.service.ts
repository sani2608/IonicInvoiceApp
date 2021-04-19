import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // FIXME: Avoid using 'public'
  // public items: Array<Item> = [];
  //Array of Strings to store the itemName;
  // FIXME: Avoid using extra variables to hold the state information.
  //  nameOfItems: Array<string> = [];

  private items: Array<Item> = [];

  constructor() { }
  //function to add item
  add(item: Item) {
    // this.items.push(item);
    // console.log('from service items list', this.items);
    const itemData = new Item(
      item.itemName,
      item.itemQuantity,
      item.itemUom,
      item.itemPrice
    );
    // itemData.itemName = item.itemName;
    // itemData.itemQuantity = item.quantity;
    // itemData.itemUom = item.uom;
    // itemData.itemPrice = item.price;
    // console.log(itemData.itemName);
    this.items.push(itemData);
    console.log('got from add item component -\n');
    console.log(item.itemName,item.itemQuantity,item.itemUom,item.itemPrice);
    console.log('got value from itemlist from service -', this.items);
  }
  /***
    search(itemName: string) {
      this.items.filter((value, index, array) => {
        // FIXME: Implement the search
      })
    }
  ***/
}
