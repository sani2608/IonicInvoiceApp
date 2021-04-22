import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  //used behaviorsubject because the itemList value is changing frequently and need to show in other components
  private itemDataSource: BehaviorSubject<Array<Item>> = new BehaviorSubject(
    []
  );
  private itemData$ = this.itemDataSource.asObservable();
  private cartValue: number;
  constructor(private toastController: ToastController) {}

  /**
   *
   * @param newItem is the formData(item Details) which we get from the add item component.
   */
  addData(newItem: any): void {
    if (this.isItemPresent(newItem.name)) {
      //TODO add toast to show the message.
      console.log(newItem.name, ' is already added go to cart');
      this.displayToast( `${newItem.name} is already added go to cart`);
      return;
    } else {
      //create a new object
      const newItemData = new Item();
      newItemData.itemName = newItem.name;
      newItemData.itemQuantity = newItem.quantity;
      newItemData.itemUom = newItem.uom;
      newItemData.itemPrice = newItem.price;
      const currentValue = this.itemDataSource.value;
      const updatedValue = [...currentValue, newItemData];
      this.itemDataSource.next(updatedValue);
      //TODO toast bar
      console.log(newItem.name, ' is added successfully');
      this.displayToast(`${newItem.name}  added successfully`);

    }
  }
  get totalValue() {
    return this.cartValue;
  }

  /**
   * this is a getter for the itemData to which we can subscribe from other component and get latest values
   */
  get userdata() {
    return this.itemData$;
  }

  /**
   * @param itemName is passed to the function to check if it is present in the list using filter()
   * @returns boolean value if item is already present in the list
   */
  isItemPresent(itemName: string): boolean {
    let value: boolean;
    this.itemDataSource.value.filter((element) => {
      if (element.itemName === itemName) {
        value = true;
        return value;
      }
    });
    return value;
  }
  /**
   * @param i is the position of the item.
   */
  increaseItemQuantity(i: number) {
    this.itemDataSource.value[i].itemQuantity += 1;
  }
  /**
   *
   * @param i is the position of the item. If it is zero delete the item from the list.
   * if the item quantity becomes zero it will delete that item from the cart
   */
  decreaseItemQuantity(i: number) {
    const value = (this.itemDataSource.value[i].itemQuantity -= 1);
    if (value === 0) {
      this.itemDataSource.value.splice(i, 1);
    }
  }
  /**
   * @returns true or false if cart is empty
   */
  isEmpty(): boolean {
    if (this.itemDataSource.value.length === 0) {
      return true;
    }
  }
  //TODO Total Cart value.
  totalCartValue() {
    const initialValue = 0;
    const sum = this.itemDataSource.value.reduce(
      (accumulator, currentValue) => accumulator + currentValue.itemTotalPrice,
      initialValue
    );
    this.cartValue = sum;
    // return sum;
  }
  /**
   * Display toas on top of the screen
   */
  displayToast(message: string) {
    this.toastController
      .create({
        message,
        position: 'top',
        duration: 1000,
        color: 'primary',
      })
      .then((toast) => {
        toast.present();
      });
  }
}
