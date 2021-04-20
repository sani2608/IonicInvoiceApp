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
  // @Input() name: string;
  //if I make this private then how can I access it template?
  public itemForm: FormGroup;
  // isItemPresent = false;
  //isEmpt = false;
  private message: string;


  constructor(
    private service: ItemService,
    private formBuilder: FormBuilder,
    // private toastController: ToastController

  ) { }
  //TODO show message on adding duplicate items
  ngOnInit(): void {
    //reactive forms
    this.itemForm = this.formBuilder.group({
      name: ['onion', [Validators.required]],
      quantity: [5, [Validators.required]],
      uom: ['kg', [Validators.required]],
      price: [50, [Validators.required]]
    });
  }

  //function to add new Item to cart.
  // addItem() {
  //     this.service.add(this.itemForm.value);
  // }
  addItem() {
    console.log(this.itemForm.value.name);

    if (!this.service.checkDuplicateItems(this.itemForm.value.name)) {
        this.service.addData(this.itemForm.value);
    }else{
      console.log('item already present in cart');
    }

  }



  //to display toast
  // displayToast() {
  //   this.toastController.create({
  //     message: this.message,
  //     position: 'top',
  //     duration: 1500,
  //     color: 'primary'
  //   }).then((toast) => {
  //     toast.present();
  //   });
  // }
}
