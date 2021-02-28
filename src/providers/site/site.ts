import {Http} from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SiteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl = {"site":"https://e9509dffaa6d.ngrok.io/veeapp/"};
@Injectable()
export class SiteProvider {
post_res:any;
get_res:any;
  constructor(public http: Http) {
    console.log('Hello SiteProvider Provider');
  }




  postData(credentials,url, type,) {
    return new Promise((resolve, reject) => {

      this.http.post(apiUrl[url] + type, JSON.stringify(credentials))
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }


 postDataf(credentials,url, type,) {
    return new Promise((resolve, reject) => {

      this.http.post(apiUrl[url] + type, credentials)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }
  getData(type,url) {

    return new Promise((resolve, reject) => {

      this.http.get(apiUrl[url] + type)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }
}
