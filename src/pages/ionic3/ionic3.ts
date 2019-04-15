
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-ionic",
  templateUrl: "ionic3.html"
})
export class IonicPage {
  mComopents: Array<ComponentXview> = new Array<ComponentXview>();

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.initData();
  }
  /**
   * 组件模块
   */
  initData() {
    this.mComopents.push(new ComponentXview("基础工具", "UtilPage"));
    this.mComopents.push(new ComponentXview("支付宝", "AliPayPage"));
    this.mComopents.push(new ComponentXview("微信", "WeChatPage"));
    this.mComopents.push(new ComponentXview("QQ", "QqPage"));
    this.mComopents.push(new ComponentXview("新浪微博", "SinaPage"));
    this.mComopents.push(
      new ComponentXview("连连支付", "LianLianPayPage")
    );
    this.mComopents.push(
      new ComponentXview("Ping++SDk", "PingPPlusPage")
    );
    this.mComopents.push(
      new ComponentXview("友盟统计", "UmAnalyticsPage")
    );
    this.mComopents.push(new ComponentXview("友盟推送", "UmPushPage"));
    this.mComopents.push(
      new ComponentXview("高德定位", "AmapLocationPage")
    );
    this.mComopents.push(
      new ComponentXview("高德导航", "AmapNaviPage")
    );
    this.mComopents.push(new ComponentXview("扫二维码", "QrCodePage"));
    this.mComopents.push(new ComponentXview("网络请求", "HttpPage"));
    this.mComopents.push(new ComponentXview("相机相册", "MediaPage"));
    this.mComopents.push(
      new ComponentXview("音频录播", "AudioPlayPage")
    );
    this.mComopents.push(
      new ComponentXview("视频录播", "VideoPlayPage")
    );
    this.mComopents.push(
      new ComponentXview("网易云信", "NeteaseImPage")
    );
  }
  /**
   * 选择组件
   * @param _component
   */
  componentSelected(_component: ComponentXview): void {
    this.navCtrl.push(_component.mComPonentPage);
  }
}

export class ComponentXview {
  mComPonentName: string;
  mComPonentPage: string;
  constructor(_comPonentName: string, _comPonentPage: string) {
    this.mComPonentName = _comPonentName;
    this.mComPonentPage = _comPonentPage;
  }
}
