import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public items: Array<Item>=[];
   //Array of Strings to store the itemName;
   nameOfItems: Array<string> = [];

  constructor() { }
  //function to add item
  add(item: Item){
    this.items.push(item);
    console.log('from service items list', this.items);
  }
  // function to update the item quantity
  updateItem(){

  }

}
