import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  // FIXME: Avoid using 'public'
  // public items: Array<Item> = [];
  //Array of Strings to store the itemName;
  // FIXME: Avoid using extra variables to hold the state information.
  //  nameOfItems: Array<string> = [];

  private items: Array<Item> = [];

  constructor() {}
  //function to add item
  add(item: any) { //what type should I put for item?
    //console.log(item);
    const newItemData = new Item(
      item.name,
      item.quantity,
      item.uom,
      item.price
    );
    //push the new item Object to items array in the service
    this.items.push(newItemData);
    //!note:- we can use getters and setters without braces in js.
    console.log(
      'using getters to get the values - \n',
      newItemData.itemName,
      newItemData.itemQuantity,
      newItemData.itemUom,
      newItemData.itemPrice,
      newItemData.itemTotalPrice
    );
    //check the items in array
    console.log('got value from itemlist from service -\n', this.items);

  }
  /***
    search(itemName: string) {
      this.items.filter((value, index, array) => {
        // FIXME: Implement the search
      })
    }
  ***/
}
