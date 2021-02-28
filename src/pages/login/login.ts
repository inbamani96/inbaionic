import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { SiteProvider } from '../../providers/site/site';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {HomePage } from '../../pages/home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  mail:string;
  otp:string;
  sendingtop:boolean=false;
  loginstate:boolean=false;
  loginres:any=[];
  constructor(public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,public menu: MenuController,public site:SiteProvider,public load:LoadingController,public storage: Storage) {
	  this.loginres.mail="";
 this.menu.enable(false);
 
 }

  ionViewDidLoad() {
	   this.storage.get("login").then((data) => {
   console.log(data);
   if(data == "success"){
	       this.navCtrl.setRoot(HomePage);


this.loginstate=true
   }
  
});
	  
    console.log('ionViewDidLoad LoginPage');
  }
  sendotp(){
	  
	    const loader = this.load.create({
      content: "Please wait..."
    });
    loader.present();
	
	  let myph=this.mail;
	  let otp=this.gerateotp();
	  let postd={"otp":otp,"mailid":myph};
	      console.log(postd);

	    this.site.postData(postd,"site",'/api/sendotp.php').then((result) => {
    console.log(result);
    this.loginres=result;
 if(this.loginres.mail == 'sent')
  {
let data=otp;
this.storage.set("otp", data).then((data) => {

});

   loader.dismiss();

this.sendingtop=true;

  }
else{
  loader.dismiss();
  this.toast(result.error);
  // this.mytosting(this.loginres.error);

}
  });
  }
  
  submitotp(){
		  
		  
  this.storage.get("otp").then((data) => {
   console.log(data);
   if(data){
	  	  let myph=this.otp;

		  if(data == myph){
			  console.log("otp is mathed");
			  this.storage.set("login", "success").then((data) => {
this.ionViewDidLoad();

});
		  }
		  else{
			  			  console.log("otp not bad");
  this.toast("Please Enter Valid OTP");

		  }


   }
});
		
  }
  
  
  
  backtomail(){
	  this.sendingtop=false;

  }
  gerateotp(){
	  
	     var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   console.log(result);
   return result;
  }
  
    toast(message){
          this.toastCtrl.create({
            message: message,
            duration: 2000,
          }).present();

        }


}
