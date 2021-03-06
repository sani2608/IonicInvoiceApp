export class Item {
  private name: string;
  private quantity: number;
  private uom: string;
  private price: number;
  private totalPrice: number;
  constructor(name: string, quantity: number, uom: string, price: number) {
    this.name = name;
    this.quantity = quantity;
    this.uom = uom;
    this.price = price;
  }

  get itemName(): string {
    return this.name;
  }
  set itemName(name: string) {
    this.name = name;
  }

  get itemQuantity(): number {
    return this.quantity;
  }
  set itemQuantity(quantity: number) {
    this.quantity = quantity;
   // this.totalPrice = this.quantity * this.price;
  }

  get itemUom(): string {
    return this.uom;
  }
  set itemUom(uom: string) {
    this.uom = uom;
  }

  get itemPrice(): number {
    return this.price;
  }
  set itemPrice(price: number) {
    this.price = price;
   // this.totalPrice = this.quantity * this.price;
  }

  get itemTotalPrice(): number {
    this.totalPrice = this.quantity * this.price;
    return this.totalPrice;
  }
}


/**
 *? When to use a Class -
 * If we wish to create an instance or a custom object whilst
 * getting the benefits of type-checking things such as arguments,
 * return types or generics we use class.
 */

/**
 *?When to use Interface -
 * If we are not creating instances and just want to type check
 * then we can use interfaces
 */
