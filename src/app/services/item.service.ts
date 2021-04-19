import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // FIXME: Avoid using 'public'
  public items: Array<Item>=[];
   //Array of Strings to store the itemName;
   // FIXME: Avoid using extra variables to hold the state information.
   nameOfItems: Array<string> = [];

  constructor() { }
  //function to add item
  add(item: Item){
    this.items.push(item);
    // console.log('from service items list', this.items);
  }

  search(itemName: string) {
    this.items.filter( (value, index, array) => {
      // FIXME: Implement the search
    })
  }
}
