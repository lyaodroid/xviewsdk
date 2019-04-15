import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoPlayPage } from './video-play';

@NgModule({
  declarations: [
    VideoPlayPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoPlayPage),
  ],
})
export class VideoPlayPageModule {}
