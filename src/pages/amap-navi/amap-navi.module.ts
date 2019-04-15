import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmapNaviPage } from './amap-navi';

@NgModule({
  declarations: [
    AmapNaviPage,
  ],
  imports: [
    IonicPageModule.forChild(AmapNaviPage),
  ],
})
export class AmapNaviPageModule {}
