import { XviewSdk, XviewResult, XviewData } from "@xiaheng/xviewsdk";
import { Component, ChangeDetectorRef } from "@angular/core";

import { IonicPage } from "../ionic3/ionic3";
import { IosPage } from "../ios/ios";
import { AndroidPage } from "../android/android";
import { AlertController, Alert } from "ionic-angular";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = AndroidPage;
  tab2Root = IonicPage;
  tab3Root = IosPage;

  permissionResult = (_xviewData: XviewData) => {
    this.confirm("请允许使用权限才能正常使用功能", () => {
      XviewSdk.getInstance().exeNativeXViewFromNative(_xviewData);
    });
  };
  constructor(public alertCtrl: AlertController) {
    this.initPermissionsCallback();
  }
  initPermissionsCallback() {
    XviewSdk.getInstance().ComponentApp.Permission(this.permissionResult);
  }

  /**
   * 打开确认取消弹出框
   */
  confirm(message: any, okFun: any, cancelFun?: any) {
    let alert = this.alertCtrl.create({
      title: "提示信息",
      message: message || "确认操作吗?",
      buttons: [
        {
          text: "取消",
          role: "cancel",
          handler: () => {
            cancelFun && cancelFun();
          }
        },
        {
          text: "确认",
          handler: () => {
            okFun && okFun();
          }
        }
      ]
    });
    alert.present();
  }
}
