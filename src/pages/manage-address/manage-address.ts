import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AddAddressPage } from '../add-address/add-address';
import { EditAddressPage } from '../edit-address/edit-address';
import { Global } from '../../Global';

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
  manageAddress: any;
  mobile: number;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private http: Http) {
  }

  ngOnInit(){
    const userId = localStorage.getItem('userId');
    console.log('user',userId);
    this.http.get(`${Global.url}customeraddress/`+userId).subscribe(
      getData =>{
        this.manageAddress = getData.json().response;
        console.log('stat',this.manageAddress.status)
        console.log("this is Data for Manage Address: "+JSON.stringify(this.manageAddress))
      })
  }
  viewAA(){
    this.navCtrl.push(AddAddressPage)
  }
  viewEA(addressId){
    localStorage.setItem('addId', JSON.stringify(addressId))
    this.navCtrl.push(EditAddressPage)
  }
  deleteAdd(addressId){
    this.http.delete(`${Global.url}customeraddress/`+addressId).subscribe(
      getData =>{
        this.manageAddress = getData.json().response;
        console.log('stat',this.manageAddress)
        // console.log("this is Data for Manage Address: "+JSON.stringify(this.manageAddress))
      })
  }
}
