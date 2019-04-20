import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Http, RequestOptions, Headers} from '@angular/http';
import {Global}  from '../../Global';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  mobile: number;
   profile = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: Http,
    private alertCtrl: AlertController,
    private toast: ToastController
    ) {
      
  }
  ngOnInit(){
    var x = localStorage.getItem('mobile');
    this.mobile = Number(x);
    this.http.get(`${Global.url}customer/myProfile/`+this.mobile).subscribe(
      getData =>{
        var data = getData.json().response;
        this.profile.push(data);
        console.log("this is Data: "+JSON.stringify(data))
      })
  }

  update(item){
    console.log("this is Item: "+JSON.stringify(item.full_name))
    const headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let obj = {
      full_name:item.full_name,
      email:item.email,
      mobile_number:item.mobile_number,
      dob:item.dob,
      gender:item.gender,
      pincode:item.pincode
    }
    console.log("this is edit Profile: "+JSON.stringify(obj))
    this.http.put(Global.url+'customer/updateProfile/'+item.id_user,JSON.stringify(obj), options)
    .subscribe(data => {
      const data1 =  data.json()
      if (data1.status === 200) {
        const toast = this.toast.create({
          message: data1.Message,
          duration: 2000
        });
        toast.present();
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
