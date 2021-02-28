import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { SiteProvider } from '../../providers/site/site';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
name:string="";
email:string="";
service:string="";
datet:string="";
message:string="";
loacations:string="Chennai";
fdata:any=[];
  constructor(public toastCtrl:ToastController,public loadCtrl:LoadingController,public http:HttpClient,public navCtrl: NavController, public navParams: NavParams,public site:SiteProvider) {
	  	  	   this.fdata.service = this.navParams.get("service");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }
  
  
  submiturform(){
	  
	  const loader = this.loadCtrl.create({
      content: "Please wait..."
    });
    loader.present();
	     if(this.fdata.names !="" && this.fdata.email !="" && this.fdata.service !="" && this.fdata.date !="" && this.fdata.message !="" && this.fdata.location !=""  ){
			     let formData = new FormData();
console.log(this.fdata.names);
formData.append("names",this.fdata.names);
formData.append("email",this.fdata.email);
formData.append("service",this.fdata.service);
formData.append("date",this.fdata.date);
formData.append("message",this.fdata.message);
formData.append("location",this.fdata.location);
let result=[];
console.log(formData);
 this.http.post(' http://localhost/veeapp/wp-json/contact-form-7/v1/contact-forms/12/feedback?_locale=user',formData).subscribe(result => {
    console.log(result);
   if(result.status == "mail_sent"){
	   			 loader.dismiss();
this.toast("Thanks for submiting");
this.navCtrl.pop()
	   
   }
   
    else{
	   			 loader.dismiss();
this.toast(result.message);
   }
  });
  
		 }
		 else{
			 loader.dismiss();
			 console.log("ffff");
		 }

	  
  }


  toast(message){
          this.toastCtrl.create({
            message: message,
            duration: 2000,
          }).present();

        }
		 ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }
}
