import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
private signInForm: FormGroup;
  result: any;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public http: Http,
    private formBuilder: FormBuilder,
    public navParams: NavParams,
    private storage: Storage
    ) {
    this.signInForm = this.formBuilder.group({
      user_name: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(20)]],
    });
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
signIn(userName, Password) {
    let Obj = {
      "user_name": this.signInForm.get('user_name').value,
      "password": this.signInForm.get('password').value,
      "api_code": '6209232b45aea869fb846a89d263fb3a'
    }
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
 }
  newAcoount() {
    //this.navCtrl.setRoot('SignupPage')
  }
}
