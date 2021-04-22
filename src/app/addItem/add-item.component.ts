import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-additem-component',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  public itemForm: FormGroup;
  // public itemNametoSearch;
  constructor(private service: ItemService, private formBuilder: FormBuilder) {}
  //TODO show message on adding duplicate items
  ngOnInit(): void {
    /**
     * Reactive Form
     */
    this.itemForm = this.formBuilder.group({
      name: ['onion', [Validators.required]],
      quantity: [5, [Validators.required]],
      uom: ['kg', [Validators.required]],
      price: [50, [Validators.required]],
    });
  }

  /**
   * This method is used to pass formData to service.
   */
  addItem() {
    this.service.addData(this.itemForm.value);
  }
}
