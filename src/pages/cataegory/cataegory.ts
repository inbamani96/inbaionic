import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SiteProvider } from '../../providers/site/site';
import { ServicePage } from '../../pages/service/service';

/**
 * Generated class for the CataegoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cataegory',
  templateUrl: 'cataegory.html',
})
export class CataegoryPage {
heading:string="";
id:string="";
firstlenth:any=[];
posts:any=[];
slideslist:any=[];
networksetting:boolean=true;
  constructor(public site:SiteProvider,public navCtrl: NavController, public navParams: NavParams) {
	   this.id = this.navParams.get("cat");
	   this.heading = this.navParams.get("name");
	   this.getlist();
	   this.loadslide();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CataegoryPage');
  }
  
  
   loadslide(){
	  
	          this.site.getData('/api/slide.php',"site").then((result) => {
          console.log(result);
          this.slideslist=result;


             }, (err) => {
               // Error log
             });
	  
  }
  
     getlist(){
    if(this.networksetting==true){
    this.site.getData('/wp-json/wp/v2/categories/?parent='+this.id,"site").then((result) => {
console.log(result);
this.firstlenth=result;
this.posts=result;

   }, (err) => {
     // Error log
   });
  }
 }
 nexcat(id,name){
	console.log(id);
this.navCtrl.push(ServicePage, {"cat": id,"name":name})
}

}
