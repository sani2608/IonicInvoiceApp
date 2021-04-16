import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-additem-component',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  @Input() name: string;
  itemForm: FormGroup;
  isItemPresent = false;
  isEmpt = false;
  private message: string;


  constructor(
    private service: ItemService,
    private formBuilder: FormBuilder,
    public toastController: ToastController

  ) { }

  ngOnInit(): void {
    //reactive forms
    this.itemForm = this.formBuilder.group({
      itemName: ['onion', [Validators.required]],
      quantity: [5, [Validators.required]],
      uom: ['kg', [Validators.required]],
      price: [50, [Validators.required]]
    });
  }
  addItem() {
    const itemName = this.itemForm.value.itemName;

    if (this.checkDuplicateItems(itemName)) {
      // console.log('item already exists in the cart..');
      this.message = 'Item already added, goto cart section';
      this.displayToast();
      this.isItemPresent = true;
    } else {
      this.service.nameOfItems.push(itemName);
      this.service.add(this.itemForm.value);
    }
  }
  //check if item is already present in cart
  checkDuplicateItems(item): boolean {
    if (this.service.nameOfItems.includes(item)) {
      return true;
    } else {
      return false;
    }
  }

  //to display toast
  displayToast() {
    this.toastController.create({
      message: this.message,
      position: 'top',
      buttons: [
        {
          side: 'end',
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('');
          }
        }
      ]
    }).then((toast) => {
      toast.present();
    });
  }
}
