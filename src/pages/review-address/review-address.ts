import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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
  private signInForm: FormGroup;
  result: any;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public http: Http,
    private formBuilder: FormBuilder,
    public navParams: NavParams,
    //private storage: Storage
    ) {
    this.signInForm = this.formBuilder.group({
      user_name: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(20)]],
    });
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
//signIn(userName, Password) {
//this.http.post(`${Global.SERVER_URL}login`, Obj)
      // .subscribe(data => {
      //   this.result = JSON.parse(data["_body"])
      //   if ('') {
      //     this.signInForm.reset();
      //     //this.navCtrl.setRoot(SideMenuPage);
      //     this.storage.set('UserDetails',this.result.data);
      //    this.storage.set('token',this.result.token)
      //   } else 
      //   { 
      //    alert(this.result.message);
      //   }
      // },
      //   err => {
      //     //this.navCtrl.setRoot(SideMenuPage);
      //     const alert = this.alertCtrl.create({
      //       title: 'Alert',
      //       subTitle: 'Something went wrong ,Please try again!',
      //       buttons: ['OK']
      //     });
      //     alert.present();
      //   }
      // );
 //}
  newAcoount() {
    //this.navCtrl.setRoot('SignupPage')
  }

  closeModal(){
  	this.navCtrl.pop();
  }
}
