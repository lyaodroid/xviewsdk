import { XviewSdk } from '@xiaheng/xviewsdk';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the VideoPlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-video-play",
  templateUrl: "video-play.html"
})
export class VideoPlayPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad VideoPlayPage");
  }

  /**
   *
   */
  pic = "";
  videoRecord() {
     /**
     * 返回结果 用于前端 判断 时长展示 大小 控制 是否允许上传
     */
    let video = {
      imagePath: "图片实际路径原生上传使用",
      // imageBase64: "直接展示使用 固定前缀（data:image/png;base64,）",
      videoPath: "视频文件路径",
      videoDuration: "视频时长 单位 秒",
      videoSize: "视频大小 MB"
    };

    /**
     * 调用参数 非必传参数  原生 注意判断
     */
    let data = {
      maxTime:15,// 默认最长 15 秒
      minTime:4,// 默认最短 5 秒
      wide:720,// 默认视频分辨率 宽  720
      high:1280,// 默认视频分辨率 高 1280
    }

    XviewSdk.getInstance()
    .ComponentVideo
    .Record(data)
    .callNativeXView()
    .then((_result)=>{
      if(_result.code == 0){
        video = _result.data
        this.pic = video['imageBase64']
        this.data.videoPath = video.videoSize;
        alert(JSON.stringify(video.videoSize))
      }

    });

  }
   data = {
    videoPath:" 录制 视频 或者 选择视频 获得 路径"
  }
  /**
   * videoPath
   */
   videoPlay() {

    let data = {
      videoPath:"/private/var/mobile/Containers/Data/Application/F1689295-45D7-49F2-875F-FC6842A3B847/tmp/myMovie.mov"
    }


    XviewSdk.getInstance()
    .ComponentVideo
    .Play(this.data)
    .callNativeXView()
    .then((_result)=>{
      /**
       * 播放失败 可能 此视频路径有问题 前端提示 调用删除代码 移除此视频
       */
      if(_result.code == -1){
          alert(_result.message)
      }
    });

   }
}
