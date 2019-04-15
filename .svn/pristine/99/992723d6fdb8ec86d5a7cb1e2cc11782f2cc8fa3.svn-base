import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IonicPage } from '../pages/ionic3/ionic3';
import { IosPage } from '../pages/ios/ios';
import { AndroidPage } from '../pages/android/android';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    IosPage,
    IonicPage,
    AndroidPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: "返回",
      iconMode: 'ios',
      mode: 'ios', // 修改此处使用ios的样式，若使用android，就写md
    }),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IonicPage,
    IosPage,
    AndroidPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
