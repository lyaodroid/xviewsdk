import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { XviewSdk } from "@xiaheng/xview";

/**
 * Generated class for the LianLianPayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lian-lian-pay',
  templateUrl: 'lian-lian-pay.html',
})
export class LianLianPayPage  {

  xviewResult = {
    code: 2,
    message: "回调数据"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LianLianPayPage');
  }
  /**
   * 连连签约
   */
  Sign() {
    let data = {
      gatewayUrl:"12312"
    };
    XviewSdk.getInstance()
      .ComponentLianLian.Sign(data)
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
  /**
   * 连连支付
   */
  Pay() {
    let data = {
      gatewayUrl:"12312"
    };
    XviewSdk.getInstance()
      .ComponentLianLian.Pay(data)
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
  /**
   * 连连 银联支付
   */
  bankPay() {
    let data = {
      gatewayUrl:"12312"
    };
    XviewSdk.getInstance()
      .ComponentLianLian.BankPay(data)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result.data));
        });
  }

}
