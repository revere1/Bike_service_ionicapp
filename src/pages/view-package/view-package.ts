import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SelectPackagePage } from '../select-package/select-package';
import { Http, RequestOptions, Headers} from '@angular/http';
import {Global}  from '../../Global';
import { BikeServicePage } from '../bike-service/bike-service';
import { Toast } from '@ionic-native/toast/ngx';
/**
 * Generated class for the ViewPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-package',
  templateUrl: 'view-package.html',
})
export class ViewPackagePage {
  package = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,   
    private http: Http, private toast: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPackagePage');
  }

  // 
  ngOnInit(){
    let mno = '9700443084';
    this.http.get(Global.url+'/customer/myProfile/'+mno).subscribe(
      getData =>{
        const data = getData.json().response;
        this.package.push(data);
        console.log("this is Data: "+JSON.stringify(this.package))
      })
    
  }

 async viewP(a,b,c){   
    if(b === 'Today'){
       b = new Date().toISOString().slice(0,10);
       console.log("This is date: "+b)
    } else if(b=== 'Tomorrow') {
      b = new Date();
      b = new Date(b.getTime() + (1000 * 60 * 60 * 24));
      b = b.toISOString().slice(0,10);
      console.log("This is date tomorrow1: "+b)
    } else {
      console.log("This is else"+b)
    }
 
    const headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let obj = { 
      "id_user":this.package[0].id_user,
      "user_mobile_number":this.package[0].mobile_number,
      "payment":false,
      "user_emailid":this.package[0].email,
      "service_name":a,      
       "day_slot": b,
       "time_slot":c
    }
  
    this.http.post(Global.url+'/customerbookings/',obj ,options)
  .subscribe(data => {
      const data1 =  data.json()
      if(data1.status === 201){
      this.navCtrl.push(SelectPackagePage)
      const toast = this.toast.create({
        message: data1.Message,
        duration: 2000
      });
      toast.present();
    } else {
      const toast = this.toast.create({
        message: data1.Message,
        duration: 2000
      });
      toast.present();
    }
    },(err) =>{
      const toast = this.toast.create({
        message: 'Network Error',
        duration: 2000
      });
      toast.present();
    })
  }

  // async presentToastWithOptions() {
  //   const toast = await this.toast.create({
  //     message: 'Click to Close',
  //     showCloseButton: true,
  //     position: 'top',
  //     closeButtonText: 'Done'
  //   });
  //   toast.present();
  // }
}
