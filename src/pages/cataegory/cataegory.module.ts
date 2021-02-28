import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CataegoryPage } from './cataegory';

@NgModule({
  declarations: [
    CataegoryPage,
  ],
  imports: [
    IonicPageModule.forChild(CataegoryPage),
  ],
})
export class CataegoryPageModule {}
