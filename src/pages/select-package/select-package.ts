import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookNowPage } from '../book-now/book-now';

/**
 * Generated class for the SelectPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-package',
  templateUrl: 'select-package.html',
})
export class SelectPackagePage {
  sName: any;
  dSlot: any;
  tSlot: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sName = this.navParams.get('sName');
    this.dSlot = this.navParams.get('dSlot');
    this.tSlot = this.navParams.get('tSlot');
    console.log("This is bookNavParams: "+this.sName, this.dSlot, this.tSlot)
  }
  viewSP(){
    console.log("This is bookNavParams: "+this.sName, this.dSlot, this.tSlot)
    this.navCtrl.push(BookNowPage,{serName: this.sName, daySlot: this.dSlot, timeSlot: this.tSlot})
  }
}
