import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../services/item.service';
import { ToastExample } from '../shared/toast';

@Component({
  selector: 'app-additem-component',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  private itemForm: FormGroup;
  constructor(
    private service: ItemService,
    private formBuilder: FormBuilder,
    private toast: ToastExample
  ) {}
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
  get formData() {
    return this.itemForm;
  }

  /**
   * This method is used to pass formData to service.
   */
  addItem(): void {
    this.service.addData(this.itemForm.value);
  }
}
