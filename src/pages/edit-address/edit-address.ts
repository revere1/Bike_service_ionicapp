import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Global } from '../../Global';
import { ManageAddressPage } from '../manage-address/manage-address';

/**
 * Generated class for the EditAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-address',
  templateUrl: 'edit-address.html',
})
export class EditAddressPage {
  addresses: any;
  mobile: number;
  userId: any;
  addId: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http
  ) {
  }
  ngOnInit() {
    this.userId=localStorage.getItem('userId');
    this.addId = localStorage.getItem('addId')
    console.log("This is userId: "+JSON.stringify(this.addId))    
    this.http.get(`${Global.url}customeraddress/`+this.userId+"/"+this.addId).subscribe(
      getData => {
        this.addresses = getData.json().response;
        console.log("this is Data: " + JSON.stringify(this.addresses))
      })
  }

  update(address) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let obj = {
      full_name:address.full_name,
      full_address:address.full_address,
      city:address.city,
      pincode:address.pincode,
    }
    console.log("This is parameter: " + JSON.stringify(obj))
    this.http.put(`${Global.url}customeraddress/`+ this.addId + '/'+this.userId,JSON.stringify(obj), options)
      .subscribe(data => {
        const data1 = data.json()
        console.log("This is Result: " + JSON.stringify(data1));
        this.navCtrl.push(ManageAddressPage)
      }, (err) => {
        alert(err)
      })

  }

}
