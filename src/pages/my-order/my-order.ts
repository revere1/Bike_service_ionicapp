import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { Http } from '@angular/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Global } from '../../Global';
import { MyorderDetailsPage } from '../myorder-details/myorder-details';
import moment from 'moment';

/**
 * Generated class for the MyOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-order',
  templateUrl: 'my-order.html',
})
export class MyOrderPage {
  orders: boolean = false;
  myOrderData: boolean = false;
  order1: any;
  pet: string = "order";
  list: string = "list1";
  myorders: any;
  kesava: any;
  Rupees: any;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public http: Http,
    private formBuilder: FormBuilder,
    public navParams: NavParams,
    private toast: ToastController
    ) {
  }

  ngOnInit(){
    this.Rupees = Global.Rupees;
    console.log("This is Rupees:", this.Rupees);
    this.order();
  }
  order(){
    const userId = Global.userId;
    console.log('orderuser',userId);
    this.http.get(`${Global.url}customerbookings/`+userId).subscribe(
      getData =>{
        this.myorders = getData.json().result;
        console.log('>>>>bbbbbbb',this.myorders)
        console.log('orderuser result length: ',this.myorders.length);
        // for(let i=0; i<this.myorders.length; i++) {
           //this.kesava = moment(this.myorders.day_slot).format("Do MMM, YYYY"); 
           console.log(this.kesava);
          //}
        if (this.myorders.length === 0 || this.myorders === 'no records found') {
          this.myOrderData = true;
          return false;
        }
        this.myOrderData = true;
      })
  }

  viewSP(bookId,userId){
    this.navCtrl.push(MyorderDetailsPage,{bid: bookId, uid: userId})
  }
}
