import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddItemComponent } from './add-item.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [AddItemComponent],
  exports: [AddItemComponent]
})
export class AddItemComponentModule {}
