import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SelectPackagePage } from '../select-package/select-package';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Global } from '../../Global';
import { BikeServicePage } from '../bike-service/bike-service';
import { Toast } from '@ionic-native/toast/ngx';
/**
 * Generated class for the ViewPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-package',
  templateUrl: 'view-package.html',
})
export class ViewPackagePage {
  data: any;
  package = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private toast: ToastController) {
  }

  viewP(a, b, c) {
    if (!a) {
      const toast = this.toast.create({
        message: 'Please Enter Capcity',
        duration: 1000
      });
      toast.present();
    } else if (!b) {
      const toast = this.toast.create({
        message: 'Please Enter Service Day',
        duration: 1000
      });
      toast.present();
    }
    else if (b === 'Today') {
      b = new Date().toISOString().slice(0, 10);
    }
    else if (b === 'Tomorrow') {
      b = new Date();
      b = new Date(b.getTime() + (1000 * 60 * 60 * 24));
      b = b.toISOString().slice(0, 10);
    }
    if (!c) {
      const toast = this.toast.create({
        message: 'Please Enter Service Slot',
        duration: 1000
      });
      toast.present();
    } else
      this.navCtrl.push(SelectPackagePage, { sName: a, dSlot: b, tSlot: c })
  }
}
