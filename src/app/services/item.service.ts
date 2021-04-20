import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  //// FIXME: Avoid using 'public'
  //// public items: Array<Item> = [];
  ////Array of Strings to store the itemName;
  //// FIXME: Avoid using extra variables to hold the state information.
  // // nameOfItems: Array<string> = [];

  private items: Array<Item> = [];
  private userDataSource: BehaviorSubject<Array<Item>> = new BehaviorSubject(
    []
  );
  private userData$ = this.userDataSource.asObservable();
  // private totalCartValue: number;
  constructor() {}

  updateUserData(data) {
    this.userDataSource.next(data);
  }
  addData(newItem) {
    //create a new object
    const newItemData = new Item();
    // newItem.quantity, newItem.price,newItem.uom,newItem.name
    newItemData.itemName = newItem.name;
    newItemData.itemQuantity = newItem.quantity;
    newItemData.itemUom = newItem.uom;
    newItemData.itemPrice = newItem.price;
    console.log(typeof newItemData.itemTotalPrice);
    const currentValue = this.userDataSource.value;
    const updatedValue = [...currentValue, newItemData];
    this.userDataSource.next(updatedValue);
    console.log('userDataSource - \n', this.userDataSource.value);
  }
  get userdata() {
    return this.userData$;
  }

  //function to add item
  add(item: any) {
    //console.log(item);
    // const newItemData = new Item(
    //   item.name,
    //   item.quantity,
    //   item.uom,
    //   item.price,
    //   item.totalPrice
    // );
  }
  //function to calculate total cart value
//TODO add total cart value
  // get totalPrice(): number {
  //   this.totalCartValue = 100;
  //   return this.totalCartValue;
  // }
  //getter all the items in the list
  get itemsList() {
    return this.items;
  }

  //check if item is already present in cart
  checkDuplicateItems(itemName): boolean {
    console.log(this.userDataSource.value);
    console.log(this.userDataSource.value.includes(itemName));
    if (this.userDataSource.value.includes(itemName)) {
      return true;
    } else {
      return false;
    }
  }

  increaseItemQuantity(i: number) {
    console.log(this.userDataSource.value[i]);
    this.userDataSource.value[i].itemQuantity += 1;
  }
  decreaseItemQuantity(i: number) {
    const value = (this.userDataSource.value[i].itemQuantity -= 1);
    if (value === 0) {
      //if the value becomes zero delete from the items list
      this.userDataSource.value.splice(i, 1);
    }
    console.log(this.userDataSource.value[i]);
  }
  //check if itemsList is empty
  isEmpty(): boolean {
    if (this.userDataSource.value.length === 0) {
      console.log('cart is empty');
      return true;
    }
  }
  //search for item
  search(itemName: string) {
    this.items.filter((value, index, array) => {
      // FIXME: Implement the search
      //TODO search functionality
    });
  }
}
