import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookPage } from '../../pages/book/book';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
post:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  	   this.post = this.navParams.get("post");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
    presentPopover(title) {
		    console.log('ddd DetailPage');

  this.navCtrl.push(BookPage,{"service":title});
  }

}
