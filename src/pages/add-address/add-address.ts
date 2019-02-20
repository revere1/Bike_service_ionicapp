import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

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
   name: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: Http
    ) {
  }
  ngOnInit(){
    let mno = '9700443084';
    this.http.get('http://localhost:3000/customer/myProfile/'+mno).subscribe(
      getData =>{
        var data = getData.json().response;
        this.profile.push(data);
        console.log("this is Data: "+JSON.stringify(this.profile[0].full_name))
        this.name = this.profile[0].full_name;
      })
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAddressPage');
  }

}
