import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

import { Http } from '@angular/http';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Global } from '../../Global';
import { MyOrderPage } from '../my-order/my-order';

/**
 * Generated class for the MyorderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myorder-details',
  templateUrl: 'myorder-details.html',
})
export class MyorderDetailsPage {
   bookId: any;
   userId: any;
   details: any;
   detailsArray = [];
   status: any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private http: Http,
    private toast: ToastController) {
     this.bookId = this.navParams.get('bid')
     this.userId = this.navParams.get('uid')
     this.http.get(`${Global.url}customerbookings/details/${this.userId}/${this.bookId}`).subscribe(
      getData =>{
         this.details = getData.json().result;
         this.status = this.details.status;
         this.detailsArray.push(this.details);
        if(this.detailsArray[0].status === 200){
        const toast = this.toast.create({
          message: this.details.Message,
          duration: 2000
        });
        toast.present();
      }
      }, err =>{
        alert(this.details.Message)
      })
  }
  cancelOrder(){
    this.http.patch(`${Global.url}customerbookings/cancel/${this.details.id_user}/${this.details.id_book_services}`).subscribe(
      getData =>{
        var cancelOrder = getData.json().result;
        console.log('orderuser result: ',JSON.stringify(cancelOrder));
        if(cancelOrder.status === 200){
        const toast = this.toast.create({
          message: cancelOrder.Message,
          duration: 2000
        });
        toast.present();
        this.navCtrl.setRoot(MyOrderPage)
      }
      })
  }
}
