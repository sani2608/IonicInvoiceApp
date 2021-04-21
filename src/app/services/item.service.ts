import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items: Array<Item> = [];
  private userDataSource: BehaviorSubject<Array<Item>> = new BehaviorSubject([]);
  private userData$ = this.userDataSource.asObservable();
  // private totalCartValue: number;
  constructor() { }

  // updateUserData(data) {
  //   this.userDataSource.next(data);
  // }
  addData(newItem) {
    //create a new object
    const newItemData = new Item();
    newItemData.itemName = newItem.name;
    newItemData.itemQuantity = newItem.quantity;
    newItemData.itemUom = newItem.uom;
    newItemData.itemPrice = newItem.price;
    const currentValue = this.userDataSource.value;
    const updatedValue = [...currentValue, newItemData];
    this.userDataSource.next(updatedValue);
    console.log('userDataSource - \n', this.userDataSource.value);
  }

  get userdata() {
    return this.userData$;
  }



  //!Total Cart value.
  // totalCartValue(): number{
  // let temporary = 0;
  // const sum = this.userDataSource.value.
  // forEach(element => {
  //   temporary += element
  // });
  // // reduce(
  // //   (accumulator, currentValue) =>
  // //      accumulator + (currentValue.itemQuantity * currentValue.itemPrice), initialValue);
  // // console.log('this sum is from services', sum);
  // return sum;
  //}


  /**
   * @param itemName -is passed to the function
   * @returns - boolean value if item is already present in the list
   */
  //!is Item present already
  isItemPresent(itemName: string): boolean {
    let value: boolean;
    this.userDataSource.value.forEach((element) => {
      if (element.itemName === itemName) {
        value = true;
      } else {
        console.log('Item is not present');
        value = false;
      }
    });
    return value;
  }

  /**
   * @param i is the position of the item.
   */
  increaseItemQuantity(i: number) {
    this.userDataSource.value[i].itemQuantity += 1;
  }
  /**
   *
   * @param i is the position of the item. If it is zero delete te item from the list
   */
  decreaseItemQuantity(i: number) {
    const value = (this.userDataSource.value[i].itemQuantity -= 1);
    if (value === 0) {
      //if the value becomes zero delete from the items list
      //delete at i only 1 element
      this.userDataSource.value.splice(i, 1);
    }
  }
  /**
   * @returns true or false if cart is empty
   */
  isEmpty(): boolean {
    if (this.userDataSource.value.length === 0) {
      return true;
    }
  }
  //!search for item
  search(itemName: string) {
    let values: Item;
    this.userDataSource.value.filter((value) => {
      // FIXME: Implement the search
      console.log(value);
      values= value;
    });
    return values;
  }
}
