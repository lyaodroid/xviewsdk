import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AudioPlayPage } from './audio-play';

@NgModule({
  declarations: [
    AudioPlayPage,
  ],
  imports: [
    IonicPageModule.forChild(AudioPlayPage),
  ],
})
export class AudioPlayPageModule {}
