import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { Http } from '@angular/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Global } from '../../Global';
import { MyorderDetailsPage } from '../myorder-details/myorder-details';

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
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public http: Http,
    private formBuilder: FormBuilder,
    public navParams: NavParams,
    private toast: ToastController
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
        console.log('orderuser result: ',this.myorders);
        if (this.myorders.length === 0 || this.myorders === 'no records found') {
          this.myOrderData = true;
          return false;
        }
        this.myOrderData = true;
      })
  }

  viewSP(bookId,userId){
    console.log("Thi jds")
    this.navCtrl.push(MyorderDetailsPage,{bid: bookId, uid: userId})
  }
}
