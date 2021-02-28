import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { CataegoryPage } from '../pages/cataegory/cataegory';
import { ServicePage } from '../pages/service/service';
import { DetailPage } from '../pages/detail/detail';
import { BookPage } from '../pages/book/book';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SiteProvider } from '../providers/site/site';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
	LoginPage,
	CataegoryPage,
	ServicePage,
	DetailPage,
	BookPage
  ],
  imports: [
    BrowserModule,
	IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
	HttpModule,
	HttpClientModule
	
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
	LoginPage,
	CataegoryPage,
	ServicePage,
	DetailPage,
	BookPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SiteProvider,
	Storage
	]
})
export class AppModule {}
