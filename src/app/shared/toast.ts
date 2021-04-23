import { NgModule } from '@angular/core';
import { ToastController } from '@ionic/angular';

@NgModule({})
export class ToastExample {
  private isToastPresent = false;
  constructor(public toastController: ToastController) {}

  async displayToast(message: string) {
    if (!this.isToastPresent) {
      this.isToastPresent = true;
      const toast = await this.toastController.create({
        message,
        position: 'top',
        duration: 1000,
        color: 'primary',
      });
      toast.present();
      toast.onDidDismiss().then(() => (this.isToastPresent = false));
    }
  }
}
