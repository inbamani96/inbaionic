import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import { SiteProvider } from '../../providers/site/site';
import { CataegoryPage } from '../../pages/cataegory/cataegory';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
slideslist:any=[];
firstlenth:any=[];
posts:any=[];
networksetting:boolean=true;
  constructor(public site:SiteProvider,public navCtrl: NavController,public menu: MenuController) {
 this.menu.enable(true);
this.loadslide();
this.getlist();
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
    this.site.getData('/wp-json/wp/v2/categories/?parent=0',"site").then((result) => {
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
this.navCtrl.setRoot(CataegoryPage, {"cat": id,"name":name})
}
}
