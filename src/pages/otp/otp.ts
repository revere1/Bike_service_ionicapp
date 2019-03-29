import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Global } from '../../Global';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {
  private otpForm: FormGroup;
  result: any;
  mobile: any;
  otp: any;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public http: Http,
    private formBuilder: FormBuilder,
    public navParams: NavParams,
    private toast: ToastController) {
    this.otp = localStorage.getItem('otp');
    var x= localStorage.getItem('mobile');
    this.mobile = Number(x);
    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required]],
    });
  }

  otpIn() {
    this.http.get(`${Global.url}customer/otp/` + this.otpForm.get('otp').value+"/"+this.mobile)
      .subscribe(data => {
        const result = data.json()
        if (result.status === 200) {
          const toast = this.toast.create({
            message: result.Message,
            duration: 2000
          });
          toast.present();
          localStorage.setItem('otp', JSON.stringify(result.Messages))
          this.navCtrl.setRoot(TabsPage);
          toast.present();
        }
      },
        err => {
          const alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'Something went wrong ,Please try again!',
            buttons: ['OK']
          });
          alert.present();
        }
      );
  }

}
