import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemComponent } from './add-item.component';

@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, IonicModule],
  declarations: [AddItemComponent],
  exports: [AddItemComponent]
})
export class AddItemComponentModule {}
