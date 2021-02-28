import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SiteProvider } from '../../providers/site/site';
import { DetailPage } from '../../pages/detail/detail';

/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {
heading:string="";
id:string="";
firstlenth:any=[];
posts:any=[];
networksetting:boolean=true;
  constructor(public site:SiteProvider,public navCtrl: NavController, public navParams: NavParams) {
	  	   this.id = this.navParams.get("cat");
	   this.heading = this.navParams.get("name");
	   this.getlist();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
  }
  
   getlist(){
    if(this.networksetting==true){
    this.site.getData('/wp-json/wp/v2/posts/?categories='+this.id,"site").then((result) => {
console.log(result);
this.firstlenth=result;
this.posts=result;

   }, (err) => {
     // Error log
   });
  }
 }
 
 nexcat(post){
	 this.navCtrl.push(DetailPage, {"post":post})

 }
 

}
