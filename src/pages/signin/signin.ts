import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { Http } from '@angular/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
//import { Global } from '../../Global';


/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  orders: boolean = false;
  order1: any;
  pet: string = "order";
  list: string = "list1";
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public http: Http,
    private formBuilder: FormBuilder,
    public navParams: NavParams,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  order(){
    alert("hii")
  this.order1 = "No Order Found...."
  this.orders = true;
  }
  
}
