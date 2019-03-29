import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ReviewAddressPage } from '../review-address/review-address';
import { Http } from '@angular/http';
import { Global } from '../../Global';


/**
 * Generated class for the BookNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-now',
  templateUrl: 'book-now.html',
})
export class BookNowPage {
data: any;
serviceName: any;
time: any;
day: any;
  constructor(private modalController:ModalController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: Http) {
      const x= localStorage.getItem('mobile');
      const mno = Number(x);
      const id = localStorage.getItem('id');
      this.http.get(`${Global.url}`+'customerbookings/'+id)
      .subscribe(
        getData =>{
          const data = getData.json();
          this.data = data.result[0];
          this.serviceName = this.data.service_name;
          this.time = this.data.time_slot;
          this.day = this.data.day_slot;
        })
  }

  getData(data){
      
  }

  openFilterModal(){
    let openFilterModal = this.modalController.create(ReviewAddressPage);
    openFilterModal.present();

  }
}
