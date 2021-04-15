import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { AddItemComponentModule } from '../addItem/add-item.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { CheckoutComponent } from '../checkout/checkout.component';
import { CheckoutModule } from '../checkout/checkout.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CheckoutModule,
    Tab2PageRoutingModule,
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule { }

//*! note */
//! To view the angular component
//! inside the ionic page
//! Donot import the compontne
//! Import the module.

