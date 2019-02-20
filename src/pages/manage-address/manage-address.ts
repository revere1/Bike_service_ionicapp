import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AddAddressPage } from '../add-address/add-address';
import { EditAddressPage } from '../edit-address/edit-address';

/**
 * Generated class for the ManageAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-address',
  templateUrl: 'manage-address.html',
})
export class ManageAddressPage {
  addresses = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
  }

  ngOnInit(){
    let mno = '9700443084';
    this.http.get('http://localhost:3000/customer/myProfile/'+mno).subscribe(
      getData =>{
        var data = getData.json().response;
        this.addresses.push(data);
        console.log("this is Data: "+JSON.stringify(this.addresses[0].full_name))
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageAddressPage');
  }

  viewAA(){
    this.navCtrl.push(AddAddressPage)
  }
  viewEA(){
    this.navCtrl.push(EditAddressPage)
  }
}
