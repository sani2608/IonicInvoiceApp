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
  private userDataSource: BehaviorSubject<Array<Item>> = new BehaviorSubject([]);
  private userData$ = this.userDataSource.asObservable();
  private totalCartPrice: number;
  constructor() { }


  updateUserData(data) {
    this.userDataSource.next(data);
  }
  addData(newItem) {
    //create a new object
    const newItemData = new Item(newItem.quantity, newItem.price);
    newItemData.itemName = newItem.name;
    newItemData.itemQuantity = newItem.quantity;
    newItemData.itemUom = newItem.uom;
    newItemData.itemPrice = newItem.price;
    // console.log(newItemData);
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
    // const newItemData = new Item();
    // newItemData.itemName =item.name;
    // newItemData.itemQuantity =item.quantity;
    // newItemData.itemUom =item.uom;
    // newItemData.itemPrice =item.price;
    // const total = newItemData.itemTotalPrice;



    //push the new item Object to items array in the service
    // const totalPrice = newItemData.itemTotalPrice;
    // this.items.push(newItemData);
    // this.totalCartPrice = this.totalCartValue();
    //check the items in array
    //console.log('got value from itemlist from service -\n', this.items);
  }
  //function to calculate total cart value
  totalCartValue(): any {
    // let sum = 0;
    // for (const x of this.items) {
    //   sum += x.itemTotalPrice;
    // }
    // return sum;
  }
  get totalPrice() {
    return this.totalCartPrice;
  }
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
    const value = this.userDataSource.value[i].itemQuantity -= 1;
    if (value === 0) {
      //if the value becomes zero delete from the items list
      this.userDataSource.value.splice(i, 1);
    }
    console.log(this.userDataSource.value[i]);

  }
  //check if itemsList is empty
  isEmpty() {

  }

  //search for item
  search(itemName: string) {
    this.items.filter((value, index, array) => {
      // FIXME: Implement the search
    });
  }

}
