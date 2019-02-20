import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ReviewAddressPage } from '../review-address/review-address';

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

  constructor(private modalController:ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookNowPage');
  }
 
  // viewSP(){    
  //   this.navCtrl.push(ReviewAddressPage)
  // }
  openFilterModal(){
    let openFilterModal = this.modalController.create(ReviewAddressPage);
    openFilterModal.present();

  }
}
