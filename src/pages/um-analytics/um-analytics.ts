import { XviewSdk } from "@xiaheng/xview";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the UmAnalyticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-um-analytics",
  templateUrl: "um-analytics.html"
})
export class UmAnalyticsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad UmAnalyticsPage");
  }
  /**
   * 进入页面 时调用
   */
  onPageStart() {
    let data = {
      pageName: "UmAnalyticsPage"
    };
    XviewSdk.getInstance()
      .ComponentAnalytics.OnPageStart(data)
      .callNativeXView().then(_result => {
        alert(JSON.stringify(_result));
      });
  }

  /**
   *离开页面时调用
   */
  onPageEnd() {
    let data = {
      pageName: "UmAnalyticsPage"
    };
    XviewSdk.getInstance()
      .ComponentAnalytics.OnPageEnd(data)
      .callNativeXView().then(_result => {
        alert(JSON.stringify(_result));
      });
  }

  /**
 多参数类型事件
使用时需要在后台添加事件时选择 “多参数类型事件”。
 SDK8.0下0以上onEvent和onEvent Value下的统计场景。
在您希望跟踪的代码部分，调用onEventObject接口，参数值可以是如下几种类型之一：String、Long、Integer、Float、Double、Short。
eventId	为当前统计的事件ID。
map	对当前事件的参数描述，定义为“参数名:参数值”的HashMap“<键-值>对”。
如果事件不需要参数，传递null即可。(参数值目前仅支持以下数据类型: String，Integer，Long，Short，Float，Double)
示例：


   label 非必填  如果填 为json 对象
   */
  onEvent() {
    let data = {
      eventID: "umengtest",
      label: {
        buy: "apple"
      }
    };
    XviewSdk.getInstance()
      .ComponentAnalytics.OnEvent(data)
      .callNativeXView().then(_result => {
        alert(JSON.stringify(_result));
      });
  }

  /**
   * 账号登陆事件
   * ID	用户账号ID，长度小于64字节
   * 账号来源。如果用户通过第三方账号登陆，可以调用此接口进行统计。支持自定义，
不能以下划线”_”开头，使用大写字母和数字标识，长度小于32 字节; 如果是上市
公司，建议使用股票代码。
    能以下划线”_”开头，使用大写字母和数字标识，长度小于32 字节; 如果是上市
     * 公司，建议使用股票代码。
*/

  onProfileSignIn() {
    let data = {
      id: "userID",
      provider: "WeChat"
    };
    XviewSdk.getInstance()
      .ComponentAnalytics.OnProfileSignIn(data)
      .callNativeXView().then(_result => {
        alert(JSON.stringify(_result));
      });
  }

  /**
   * 账号退出事件
   */
  onProfileSignOff() {
    XviewSdk.getInstance()
      .ComponentAnalytics.OnProfileSignOff()
      .callNativeXView().then(_result => {
        alert(JSON.stringify(_result));
      });
  }
}
