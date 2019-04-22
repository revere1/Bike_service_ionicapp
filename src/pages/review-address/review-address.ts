import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, App, Nav, ViewController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Global } from '../../Global';
import { MyOrderPage } from '../my-order/my-order';
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
  profile= [];
  mobile: number;
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
  }

  ngOnInit(){
    var x = localStorage.getItem('mobile');
    this.mobile = Number(x);
    this.http.get(`${Global.url}customer/myProfile/`+this.mobile).subscribe(
      getData =>{
        var data = getData.json().response;
        this.profile.push(data);
        console.log("this is Data: "+JSON.stringify(data))
      })
  }

  confirmIn(item) {
    const obj = {
      full_name:item.full_name,
      full_address:item.full_address,
      city:item.city,
      pincode:item.pincode,
      id_user: item.id_user,
      status: "Active"
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
