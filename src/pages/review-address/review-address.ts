import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, App, Nav, ViewController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Global } from '../../Global';
import { SigninPage } from '../signin/signin';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the ReviewAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-address',
  templateUrl: 'review-address.html',
})
export class ReviewAddressPage {
  private conBookForm: FormGroup;
  result: any;
  constructor(
    public alertCtrl: AlertController,
    public http: Http,
    private formBuilder: FormBuilder,
    public navParams: NavParams,
    private toast: ToastController,
    private appCtrl: App,
    private nav: NavController,
    private viewCtrl: ViewController
    //private storage: Storage
  ) {
    this.conBookForm = this.formBuilder.group({
      full_name: ['', [Validators.required, , Validators.maxLength(20)]],
      full_address: ['', [Validators.required, Validators.maxLength(100)]],
      city: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.maxLength(6)]]
    });
  }
  confirmIn() {
    console.log("This is csc: "+this.conBookForm.get('full_name').value)
    const obj = {
      full_name: this.conBookForm.get('full_name').value,
      full_address: this.conBookForm.get('full_address').value,
      city: this.conBookForm.get('city').value,
      pincode: this.conBookForm.get('pincode').value
    }
    this.http.post(`${Global.url}customeraddress`+"/"+'create', obj)
      .subscribe(data => {
        this.result = JSON.parse(data["_body"])
        if (this.result.status === 201) {
          const toast = this.toast.create({
            message: 'Your Booking Order Confirmation Succeessfully.',
            duration: 4000
          });
          toast.present();
          this.nav.pop();
          this.appCtrl.getRootNav().setRoot(TabsPage);
          // this.app.getRootNav().push(SigninPage);
        } else {
          const toast = this.toast.create({
            message: this.result.Message,
            duration: 2000
          });
          toast.present();
        }
        //   // this.signInForm.reset();
        //   //this.navCtrl.setRoot(SideMenuPage);
        //   // this.storage.set('UserDetails', this.result.data);
        //   // this.storage.set('token', this.result.token)
        // } else {
        //   alert(this.result.message);
        // }
      },
        err => {
          //this.navCtrl.setRoot(SideMenuPage);
          const alert = this.alertCtrl.create({
            title: 'Alert',
            subTitle: 'Something went wrong ,Please try again!',
            buttons: ['OK']
          });
          alert.present();
        }
      );
  }
  newAcoount() {
    //this.navCtrl.setRoot('SignupPage')
  }

  closeModal() {
    this.nav.pop();
  }
}
