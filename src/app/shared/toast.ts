import { NgModule } from '@angular/core';
import { ToastController } from '@ionic/angular';

@NgModule({})
export class ToastExample {
  constructor(public toastController: ToastController) {}

  async displayToast(message: string) {
    const toast = await this.toastController.create({
      message,
      position: 'top',
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }
}
