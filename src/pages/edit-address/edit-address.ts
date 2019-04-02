import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Global } from '../../Global';

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
  addresses = [];
  mobile: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http

  ) {
  }
  ngOnInit() {
    var x = localStorage.getItem('mobile');
    this.mobile = Number(x);
    this.http.get(`${Global.url}customer/myProfile/`+ this.mobile).subscribe(
      getData => {
        var data = getData.json().response;
        this.addresses.push(data);
        console.log("this is Data: " + JSON.stringify(this.addresses[0].full_name))
        console.log("this is Data: " + JSON.stringify(this.addresses[0]))
      })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditAddressPage');
  }
  update(address) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let obj = {
      "full_name": address.full_name,
      "full_address": address.full_address,
      "city": address.city,
      "addresstype": address.gender,
      "zip": address.zip
    }
    alert("This is parameter: " + JSON.stringify(obj))
    this.http.put(`${Global.url}customeraddress/`+ address.id + '/'+address.userid,JSON.stringify(obj), options)
      .subscribe(data => {
        const data1 = data.json()
        alert("This is Result: " + JSON.stringify(data1));
      }, (err) => {
        alert(err)
      })

  }

}
