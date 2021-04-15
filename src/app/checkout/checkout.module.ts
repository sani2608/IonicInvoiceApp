import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations:[CheckoutComponent],
  exports: [CheckoutComponent]
})
export class CheckoutModule { }
