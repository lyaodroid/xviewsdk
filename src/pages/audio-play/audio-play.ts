import { Component } from "@angular/core";
import { XviewSdk } from "@xiaheng/xviewsdk";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the AudioPlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-audio-play",
  templateUrl: "audio-play.html"
})
export class AudioPlayPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AudioPlayPage");
  }

  audio = {
    audioPath: "音频文件路径",
    audioDuration: "音频时长 单位 秒",
    audioSize: "文件大小 KB"
  };
  audioRecord() {
    let data = {
      maxTime: 30, // 默认最长 60 秒
      minTime: 5 // 默认最短 5 秒
    };

    XviewSdk.getInstance()
      .ComponentAudio.Record(data)
      .callNativeXView()
      .then(_result => {
        if (_result.code == 0) {
          this.audio.audioPath = _result.data["audioPath"];
        }
        alert( this.audio.audioPath);
      });
  }
  /**
   * 播放 audioPath
   */
  audioStart() {

    let data = {
      audioPath: this.audio.audioPath
    };
    alert(data.audioPath);

    XviewSdk.getInstance()
      .ComponentAudio.Start(data)
      .callNativeXView()
      .then(_result => {
        /**
         * 播放失败 可能 此视频路径有问题 前端提示 调用删除代码 移除此音
         */
        if (_result.code == -1) {
          alert(_result.message);
        }
      });
  }
  /**
   * 停止 audioPath
   */
  audioStop() {
    let data = {
      audioPath: " 播放音频获得的路径"
    };

    XviewSdk.getInstance()
      .ComponentAudio.Stop(data)
      .callNativeXView();
  }
}
