import { XviewSdk } from "@xiaheng/xviewsdk";
import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { TabsPage } from "../pages/tabs/tabs";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.initStatusBar();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  /**
   * 初始化安卓状态栏
   */
  private initStatusBar() {
    let statusBar = _statusBarHeight => {
      let statusBarHeight = _statusBarHeight.data['statusBarHeight'] || 20;
      let styleDom = document.styleSheets[0];
      styleDom["addRule"](
        "ion-navbar.toolbar-ios",
        "padding-top:" + statusBarHeight + "px !important;"
      );
      styleDom["addRule"](
        ".toolbar-ios ion-title",
        "padding-top:" + (statusBarHeight - 5) + "px !important;"
      );
      styleDom["addRule"](
        "ion-navbar.toolbar-ios",
        "min-height:" + (statusBarHeight + 44) + "px !important;"
      );
    };
    XviewSdk.getInstance().ComponentApp.getStatusBarHeight()
      .callNativeXView().then(statusBar);

  }

  /**
   * 收到 通知 未点击 展示 UI 使用
   */
  private pushNotificationCallback = (_pushResult) => {
    // 自行处理逻辑 一般通过事件 处理

  }
  /**
    * 收到 通知 点击处理
    */
  private pushNotificationClickCallback = (_pushResult) => {
    //根据 后端推送 附加参数 自行处理逻辑 一般通过事件 处理

  }

  /**
    * android  返回键 监听
    * 这里处理 页面返回逻辑
    */
  private onAndroidBackCallback = () => {


  }
  ngOnInit() {
    // 监听 极光推送
    XviewSdk.getInstance().ComponentPush
      .Notification(this.pushNotificationCallback);

    // 监听 极光推送点击事件
    XviewSdk.getInstance().ComponentPush
      .NotificationClick(this.pushNotificationCallback);
    // android 返回键 处理
    XviewSdk.getInstance().ComponentApp
      .OnBack(this.onAndroidBackCallback);

  }
}
