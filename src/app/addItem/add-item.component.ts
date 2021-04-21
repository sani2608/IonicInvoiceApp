import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-additem-component',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {

  public itemForm: FormGroup;
  constructor(
    private service: ItemService,
    private formBuilder: FormBuilder,
  ) { }
  //TODO show message on adding duplicate items
  ngOnInit(): void {
    /**
     * Reactive Form
     */
    this.itemForm = this.formBuilder.group({
      name: ['onion', [Validators.required]],
      quantity: [5, [Validators.required]],
      uom: ['kg', [Validators.required]],
      price: [50, [Validators.required]]
    });
  }

  /**
   * This method is used to pass form data to service.
   */
  addItem() {
    if (this.service.isItemPresent(this.itemForm.value.name)) {
      console.log('item already present in cart \n Add another Item or Go to Cart...');
      return;
    } else {
      this.service.addData(this.itemForm.value);
      console.log(this.itemForm.value.name, ' added successfully');
    }
  }
}
