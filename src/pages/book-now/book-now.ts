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
serviceName: any;
daySlot: any;
timeSlot: any;
  constructor(private modalController:ModalController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private http: Http) {
      this.serviceName = this.navParams.get('serName');
      this.daySlot = this.navParams.get('daySlot');
      this.timeSlot = this.navParams.get('timeSlot');
  }

  openFilterModal(){
    console.log('dayslot', this.daySlot)
    let openFilterModal = this.modalController.create(ReviewAddressPage, {serName: this.serviceName, dSlot:this.daySlot, tSlot: this.timeSlot});
    openFilterModal.present();

  }
}
