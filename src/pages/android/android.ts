import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-android",
  templateUrl: "android.html"
})
export class AndroidPage {
  constructor(public navCtrl: NavController) {
    this.init()
  }
  init(){
    // let style = window.getComputedStyle("ion-navbar.toolbar-ios", "null");
    // console.log(style)
  }
}
