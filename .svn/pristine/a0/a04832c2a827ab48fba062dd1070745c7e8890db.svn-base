import { SplashScreen } from "@ionic-native/splash-screen";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { XviewSdk } from "@xiaheng/xview";

/**
 * Generated class for the UtilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-util",
  templateUrl: "util.html"
})
export class UtilPage {
  xviewResult = {
    code: 2,
    message: "回调数据"
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UtilPage");
  }
  /**
   * ------------------------mobile 组件 ----------------------------------------
   */

  /**
   * 获取联系人 array
   * return[{name:"姓名",phone;"电话号码"}]
   */
  contacts() {
    XviewSdk.getInstance()
      .ComponentMobile.Contacts()
      .callNativeXView()
      .then(_result => {
        alert(JSON.stringify(_result.data));
      });
  }
  /**
   * 打电话
   */
  CallPhone() {
    let data = {
      tel: "18612249039"
    };
    XviewSdk.getInstance()
      .ComponentMobile.CallPhone(data)
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
   * 发送短信
   */
  SendSMS() {
    let data = {
        number: "18612249039",
        body: "dsflsdjfdlsjfl"

    };
    XviewSdk.getInstance()
      .ComponentMobile.SendSMS(data)
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
   * 复制到剪切板
   */
  Clipboard() {
    let data = {
      label: "18612249039"
    };
    XviewSdk.getInstance()
      .ComponentMobile.Clipboard(data)
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
   * 跳转 浏览器
   */
  JumpBrowser() {
    let data = {
      url: "https://www.2345.com/"
    };
    XviewSdk.getInstance()
      .ComponentMobile.JumpBrowser(data)
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
   * ---------------------------------------- app 组件 ---------------------
   */

  /**
   * SaveImage
   * 保存 图片 可以家水印功能
   *       text: "水印",

   */
  /**
   * 跳转app 界面网页
   */
  SaveImage() {
    let data = {
      text: "xview",
      url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg"
    };

    XviewSdk.getInstance()
      .ComponentApp.SaveImage(data)
      .callNativeXView()
      .then(_result => {
        alert(JSON.stringify(_result));
      });
  }

  /**
   * 跳转app 界面网页
   */
  JumpWeb() {
    let data = {
      title: "好123",
      url: "https://www.2345.com/"
    };
    XviewSdk.getInstance()
      .ComponentApp.JumpWeb(data)
      .callNativeXView()
      .then(_result => {
        this.xviewResult = _result;
        alert(JSON.stringify(_result.data));
      });
  }

  /*
    截屏
  */
  ScreenShot() {
    /**
     * 返回参数
     */
    let image = {
      imagePrefix: "base64前缀 前端展示 需要拼接使用",
      imageBase64: "base64实际值  可以与imagePrefix 拼接使用 展示"
    };

    XviewSdk.getInstance()
      .ComponentMobile.ScreenShot()
      .callNativeXView()
      .then(_result => {
        alert(JSON.stringify(_result));
      });
  }

  /*
    打开闪光灯
  */
  FlashLamp() {
    XviewSdk.getInstance()
      .ComponentMobile.FlashLamp()
      .callNativeXView()
      .then(_result => {
        alert(JSON.stringify(_result));
      });
  }

  /*
    清除缓存
  */
  CleanCache() {
    XviewSdk.getInstance()
      .ComponentApp.CleanCache()
      .callNativeXView()
      .then(_result => {
        alert(JSON.stringify(_result));
      });
  }

  /*
   *获取缓存大小
   */
  getCacheSize() {
    XviewSdk.getInstance()
      .ComponentApp.GetCacheSize()
      .callNativeXView()
      .then(_result => {
        alert(JSON.stringify(_result.data));
      });
  }
  /*========================安卓独有====================*/
  /**
   * 退出app 杀死 app
   */
  Exit() {
    XviewSdk.getInstance()
      .ComponentApp.Exit()
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
   * app 只是退到后台 常用退出方式
   */
  Hide() {
    XviewSdk.getInstance()
      .ComponentApp.Hide()
      .callNativeXView()
      .then(
        _result => {
          this.xviewResult = _result;
          alert(JSON.stringify(_result.data));
        }
      );
  }
  /**
   * Android返回键 注册监听
   */
  appOnBack() {
    XviewSdk.getInstance().ComponentApp.OnBack(() => {
      alert("关闭当前页面");
    });
  }


  /**
   * D:\>certutil -hashfile md5test.txt MD5
MD5 哈希(文件 md5test.txt):
d6 f6 bb 38 b5 6b 67 8f 34 9b e4 d6 2f 52 73 1f
CertUtil: -hashfile 命令成功完成。
   */
  xviewUpdateApp() {
    let data = {
      mHasUpdate: true,
      mIsForce: false,
      mIsIgnorable: false,
      mVersionCode: 301,
      mVersionName: "1.0.1",
      apkUrl: "http://192.168.2.222/xiaxun/xiaxun.apk",
      apkSize: 32877,
      apkMd5: "3f0ba0a3d5b510b49412bdfaab289bd2",
      mUpdateContent: "优化更新提示界面"
    };
    XviewSdk.getInstance()
      .ComponentUpdate.APK(data)
      .callNativeXView().then((result) => {
        alert(JSON.stringify(result))
      });
  }

  /**
   * 获取versionName
   * 前端展示使用
   */
  updateAppVersionName() {
    XviewSdk.getInstance()
      .ComponentUpdate.VersionName()
      .callNativeXView().then((_result) => {
        alert(JSON.stringify(_result));
      });
  }

  /**
 * 获取versionCode
 * 前端一般在首页界面
 * 获取versionCode 请求自己服务器器接口
 * 如果比服务器最新的小
 * 返回如下参数
 *  let data = {
    mHasUpdate: true,// 是否更新                     前端 收到这个为 true 展示更新的弹框
    mIsForce: false, // 是否强制                     如果要求 强制更新 前端 显示一个按钮 升级 是否强制升级  false 可以展示两个按钮 取消  和 升级按钮
    mIsIgnorable: false,//是否可以忽略               如果 为true 显示  显示忽略 按钮 和升级按钮 点击忽略 今天 不再 请求 升级 接口 具体看自己需求
    mVersionCode: 301,//新版的版本versioncode
    mVersionName: "1.0.1",//新版本的versionName
    mUpdateContent: "优化更新提示界面"             //前端升级弹框展示本次更新内容
    apkSize: 32877, kb前端 展示的本次升级大小 前端展示 MB 自己转换下
    apkUrl: "http://192.168.2.222/xiaxun/xiaxun.apk",//新版本的apk下载地址
    apkMd5: "3f0ba0a3d5b510b49412bdfaab289bd2",//新版本的apk  文件md5值 windows cmd ： certutil -hashfile test.apk(文件路径) MD5
  };
 *
 */
  updateAppVersionCode() {
    XviewSdk.getInstance()
      .ComponentUpdate.VersionCode()
      .callNativeXView().then((_result) => {
        alert(JSON.stringify(_result));
      });
  }
}
