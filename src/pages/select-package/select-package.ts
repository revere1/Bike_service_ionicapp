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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPackagePage');
  }
  viewSP(){
    this.navCtrl.push(BookNowPage)
  }
}
