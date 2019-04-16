import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { XviewSdk } from '@xiaheng/xviewsdk';

/**
 * Generated class for the AmapNaviPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-amap-navi',
  templateUrl: 'amap-navi.html',
})
export class AmapNaviPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmapNaviPage');
  }
  naviData = { mapData:{
    endLatitude: 32.056094,
    endLongitude: 118.788012,
    startLatitude: 32.081696,
    startLongitude: 118.634204
  }};
  walking() {
    XviewSdk.getInstance()
      .ComponentNavi.Walking(this.naviData)
      .callNativeXView()
      .then(() => {});
  }
  driving() {
    XviewSdk.getInstance()
      .ComponentNavi.Driving(this.naviData)
      .callNativeXView()
      .then(() => {});
  }
  reding() {
    XviewSdk.getInstance()
      .ComponentNavi.Riding(this.naviData)
      .callNativeXView()
      .then(() => {});
  }
}
