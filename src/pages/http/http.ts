import { XviewData, XviewSdk } from "@xiaheng/xviewsdk";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the HttpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-http",
  templateUrl: "http.html"
})
export class HttpPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad HttpPage");
  }

  xviewResult = {
    code: 2,
    message: "回调数据"
  };

  url = "http://192.168.2.222/xiaxun/api/app/coldUpdate/";
  /**
   *  data 中 默认 字段
   * data = {
   *  headers:(json),
   *  params:(json),
   *  url:http*******
   * }
   */
  get() {
    let params = {
      testget: "sdfsdf",
      test1get: "sdfsdf",
      test2get: "sdfsdf"
    };

    let data = {
      url: this.url,
      params: params,
      headers: null
    };
    XviewSdk.getInstance()
      .ComponentNet.HttpGet(data)
      .callNativeXView()
      .then(_result => {
        this.xviewResult = _result;
        alert(JSON.stringify(_result));
      });
  }
  post() {
    let params = {
      testPost: "dfdsfds",
      test1Post: "adfsd",
      test2Post: "我是破石头"
    };

    let data = {
      url: this.url,
      params: params
    };
    XviewSdk.getInstance()
      .ComponentNet.HttpPost(data)
      .callNativeXView()
      .then(_result => {
        this.xviewResult = _result;
        alert(JSON.stringify(_result));
      });
  }
  image() {}

  files = ["得到的原生 文件路径1 ", "得到的原生 文件路径2 "];
  /**
   * 注意 所有文件 上传 字段 均用 files[] 为了兼容多文件上传
   */

  upload() {
    let data = {
      url: this.url,
      params: {
        files: this.files,
        other: "自己接口要求可以其它参数 服务端定义 爱啥啥"
      }
    };
    XviewSdk.getInstance()
      .ComponentNet.FileUpload(data)
      .callNativeXView()
      .then(_result => {
        alert(JSON.stringify(_result));
      });
  }

  /**
   * 下载成功 失败均回调
   */
  download() {
    /**
     * 下载成功 返回参数
     */
    let fileResult = {
      fileName: "下载的文件名字带类型 可以提示前端显示",
      filePath: "下载的文件路径 可能后面会用",
      fileSize: "下载的文件大小 单位 MB"
    };

    let data = {
      url: this.url + "/upload/testandroid.apk"
    };

    XviewSdk.getInstance()
      .ComponentNet.FileDownload(data)
      .callNativeXView()
      .then(_result => {
        if(_result.code == 0){
          fileResult = _result.data;
        }
        alert(JSON.stringify(_result));
      });
  }
}
