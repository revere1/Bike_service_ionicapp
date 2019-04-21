import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { Http } from '@angular/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Global } from '../../Global';


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
  myOrderData: boolean = false;
  order1: any;
  pet: string = "order";
  list: string = "list1";
  myorders: any;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public http: Http,
    private formBuilder: FormBuilder,
    public navParams: NavParams,
    ) {
  }

  ngOnInit(){
    this.order();
  }
  order(){
    const userId = localStorage.getItem('userId');
    console.log('orderuser',userId);
    this.http.get(`${Global.url}customerbookings/`+userId).subscribe(
      getData =>{
        this.myorders = getData.json().result;
        if (this.myorders.length === 0 || this.myorders === 'no records found') {
          this.myOrderData = true;
          return false;
        }
        this.myOrderData = true;
      })
  }
  
}
