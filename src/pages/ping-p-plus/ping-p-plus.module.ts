import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PingPPlusPage } from './ping-p-plus';

@NgModule({
  declarations: [
    PingPPlusPage,
  ],
  imports: [
    IonicPageModule.forChild(PingPPlusPage),
  ],
})
export class PingPPlusPageModule {}
