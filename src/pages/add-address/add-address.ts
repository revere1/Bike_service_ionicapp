import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers} from '@angular/http';
import {Global}  from '../../Global';
import { ManageAddressPage } from '../manage-address/manage-address';

/**
 * Generated class for the AddAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-address',
  templateUrl: 'add-address.html',
})
export class AddAddressPage {
   profile=[];
   userId: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: Http,
    private toast: ToastController
    ) {
      this.userId =localStorage.getItem('userId')
  }

  addAddress(full_name,full_address,city,pincode){
    const headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let obj = {
      full_name:full_name,
      full_address:full_address,
      city:city,
      pincode:pincode,
      id_user:this.userId,
      status:"Active" 
    }
    console.log("this is edit Profile: "+JSON.stringify(obj))
    this.http.post(Global.url+'customeraddress/create',JSON.stringify(obj), options)
    .subscribe(data => {
      const data1 =  data.json()
      if (data1.status === 201) {
        const toast = this.toast.create({
          message: data1.Message,
          duration: 2000
        });
        toast.present();
        this.navCtrl.push(ManageAddressPage)
      } else if (data1.status === 400) {
        const toast = this.toast.create({
          message: data1.Message,
          duration: 2000
        });
        toast.present();
      }
    },(err) =>{
      alert(err)
    })
  }

}
