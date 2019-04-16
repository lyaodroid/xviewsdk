import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";
import { XviewSdk } from "@xiaheng/xviewsdk";
import { INIT_ZINDEX } from "ionic-angular/umd/navigation/nav-util";
import { listener } from "@angular/core/src/render3/instructions";
import { AlertServiceProvider } from "../../providers/alert-service/alert-service";

/**
 * Generated class for the AmapLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-amap-location",
  templateUrl: "amap-location.html"
})
export class AmapLocationPage {
  xviewResult = {
    code: 2,
    message: "回调数据"
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alterService: AlertServiceProvider
  ) { }

  ionViewDidLoad() {

    console.log("ionViewDidLoad AmapLocationPage");
  }
  ionViewDidLeave() {
    XviewSdk.getInstance().ComponentLocation.SetKeepLocationCallback(null);
  }

  /*
  *
 返回结果  参数
 {"code":0,"data":{"longitude":118.729317(经度 ),"latitude":31.993877(纬度),"accuracy":29(精度),"speed":0(速度),"bearing":0(角度)
 ,"country":"中国(国家 )","province":"江苏省(省)","city":"南京市(市)",
 "cityCode":"025(城市编码)","district":"建邺区(区)","adCode":"320105(区域 码)","address":"江苏省南京市建邺区恒山路41号靠近南京师范大学附属中学新城小学(地址)",
 "poiName":"南京师范大学附属中学新城小学(兴趣点)"},"message":"success"}

  */
  onceLocation() {
    XviewSdk.getInstance()
      .ComponentLocation.OnceLocation()
      .callNativeXView()
      .then(_result => {
        this.alterService.alert(JSON.stringify(_result));
      });
  }


  listener() {
    XviewSdk.getInstance().ComponentLocation.SetKeepLocationCallback(
      _result => {
        alert(JSON.stringify(_result));
      }
    );
  }

  /*
   * 持续定位
   */
  lastLocation() {

    let data = {
      refreshTime: 5,
      locationUrl: "http://192.168.2.222/xiaxun/api/app/coldUpdate/",
      params: {
        username: "liuyao",
        pwd: "123456"
      }
    };
    XviewSdk.getInstance()
      .ComponentLocation.KeepLocation(data)
      .callNativeXView()
      .then(
        _result => {
          this.listener();
        });
  }

  /*
   * 关闭持续定位
   */
  closeLast() {
    XviewSdk.getInstance()
      .ComponentLocation.StopKeep()
      .callNativeXView()
      .then(
        _result => {
          this.xviewResult = _result;
          alert(JSON.stringify(_result.data));
        },
        _error => {
          this.xviewResult = _error;
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }

  /*
   * 关闭持续定位交互
   */
  closeSend() {
    XviewSdk.getInstance()
      .ComponentLocation.StopSend()
      .callNativeXView()
      .then(
        _result => {
          this.xviewResult = _result;
          alert(JSON.stringify(_result.data));
        }
      );
  }
}
