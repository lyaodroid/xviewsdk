## Xview 介绍

Xview SDK 是一个基于 Android 和 iOS 组件化框架 封装的数据交互, 为了使前端调用更方便,采用了组件功能模块划分。

## 统一调用方式 和 返回参数

- 前端调用 两种方式 回调

  ```typescript
  示例代码 1 支付宝支付 Promise 回调

  let data = {
     aliPay:'partner="2088131569212'
      };

   XviewSdk.getInstance()
           .ComponentAliPay     // 【ComponentAliPay】( 支付宝组件 名称)
           .Pay(data)           // 【Pay】(支付宝组件方法) [data](支付数据 注意 key = "payData")
           .callNativeXView()   //  调用原生xview 方法 返回 Promise 对象
           .then(_result => {
              // 这里 可以 把 _result 结果通过方法传递 自己的方法中 处理结果
              alert(JSON.stringify(_result));
             },
            _error => {
             alert("_error:" + JSON.stringify(_error));
            });
  ```

  ```typescript
      示例代码 2 推送通知点击事件 自定义 callback 回调 监听 移动端主动回调

      let notificationClick = (_result) => {

            alert(JSON.stringify(_result));

          }

  XviewSdk.getInstance()
          .ComponentPush
          .NotificationClick(notificationClick);

  ```

- 返回参数统一格式

  ```
  let result = {

        code    : 0 (成功) , 1 (取消) , -1(失败)  (number  类型)

        message ：(查看错误信息 排查错误)

        data    : string(普通字符串) ,JSON(对象类型) , Array(数组类型)

  }
  ```

## 功能查看

- [ionic-Xview]()

## 第三方 登录(友盟 SDK) ， 分享(友盟 SDK) ， 支付

#### 支付宝

- **登录** 示例代码

```typescript
 login() {
    let loginData = {
      //入参: key = aliLogin
      aliLogin:
        "apiname=com.alipay.account.auth&app_id=201901096286390frkR%2bbg4%3d"
    };

XviewSdk.getInstance()
        .ComponentAliPay.Login(loginData)
        .callNativeXView()
        .then(
        _result => {
          //返回参数: code == 0 , data ={ uid : "user ID"}
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

- **支付** 示例代码

```typescript
 pay() {
    let payData = {
      //入参: key = payData
      aliPay:
        "partner=20881315692193&seller_id=3208"
    };

XviewSdk.getInstance()
        .ComponentAliPay.Pay(payData)
        .callNativeXView()
        .then(
        _result => {
          //返回参数: code == 0 , message = "支付成功“
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

#### 微信

- **登录** 示例代码

```typescript
 login() {
   let wechatLogin = {
      appId: "微信appid",
      appKey: "微信appsecret"
    };

XviewSdk.getInstance()
        .ComponentWeChat.Login(wechatLogin)
        .callNativeXView()
        .then(
        _result => {
          //返回参数: code == 0 , data ={ uid : "user ID"}
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

- **支付** 示例代码

```typescript
 pay() {
    let payData = {
     let wechatData = {
      appId: "wxf873788d8c789de",
      packageValue: "Sign=WXPay",
      sign: "A759DFE0ACBD175885A737AA15A6E3",
      partnerId: "1579421",
      prepayId: "wx021125597dd2bf24d3459405671",
      nonceStr: "cF9FvPE0wjcs5FGU5gFGooJ3SKdLQ",
      timeStamp: "1546129"
    };

XviewSdk.getInstance()
        .ComponentWeChat.Pay(aliPay)
        .callNativeXView()
        .then(
        _result => {
          //返回参数: code == 0 , message = "支付成功“
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

- **打开小程序** 示例代码

```typescript
   let miniData = {
      appId: "wx2fc7d5cbb98919",
      userName: "gh_f5981082a4c 原始id",
      path: "小程序路径",
      miniType: "0" //0 正式 ， 1 测试 2 预览版
    };

    XviewSdk.getInstance()
      .ComponentWeChat.Program(miniData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

- **分享** 示例代码

```typescript
   1. 分享文字
/**
   *
   * @param platform
   * WEIXIN_CIRCLE 朋友圈
   * WEIXIN 微信
   * @param _type text
   */
  shareText() {
    let shareData = {
      appId: "微信AppID",
      appKey: "微信AppSecret",
      platform: "WEIXIN",
      shareData:{
        shareType:"text",
        text: "xview 组件化 测试 shareText"
      }
    };

    XviewSdk.getInstance()
      .ComponentWeChat
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

```typescript
   2. 分享图片

/**
   *
   * @param platform
   * WEIXIN_CIRCLE 朋友圈
   * WEIXIN 微信
   * @param _type image
   */
  shareImage() {
    let shareData = {
      appId: "微信AppID",
      appKey: "微信AppSecret",
      platform: "WEIXIN",
      shareData:{
        shareType:"image",
          image:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          title: "xview 组件化 分享 图片",
          description: "网络图片测试"
      }
    };

    XviewSdk.getInstance()
      .ComponentWeChat
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

```typescript

   3. 分享网页
/**
   *
   * @param platform
   * WEIXIN_CIRCLE 朋友圈
   * WEIXIN 微信
   * @param _type webPage
   */
  shareWebPage() {
    let shareData = {
      appId: "微信AppID",
      appKey: "微信AppSecret",
      platform: "WEIXIN",
      shareData:{
        shareType:"webPage",
        webUrl: "http://www.baidu.com",
        thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
        title: "身轻如燕",
         description: "自动打包 组件化"
      }
    };

    XviewSdk.getInstance()
      .ComponentWeChat
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

```typescript

   4. 分享音乐
/**
   *
   * @param platform
   * WEIXIN_CIRCLE 朋友圈
   * WEIXIN 微信
   * @param _type music
   */
  shareMusic() {
    let shareData = {
      appId: "微信AppID",
      appKey: "微信AppSecret",
      platform: "WEIXIN",
      shareData:{
        shareType:"music",
          musicUrl: "www.baidu.com",
          thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          title: "音乐",
          description: "音乐分享",
          targetUrl: "http://music.taihe.com/song/565263868"
      }
    };

    XviewSdk.getInstance()
      .ComponentWeChat
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

```typescript

   5. 分享视频
/**
   *
   * @param platform
   * WEIXIN_CIRCLE 朋友圈
   * WEIXIN 微信
   * @param _type video
   */
  shareVideo() {
    let shareData = {
      appId: "微信AppID",
      appKey: "微信AppSecret",
      platform: "WEIXIN",
      shareData:{
        shareType:"video",
          videoUrl: "www.baidu.com",
          thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          title: "视频",
          description: "测试 视频分享 "
      }
    };

    XviewSdk.getInstance()
      .ComponentWeChat
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

```typescript

   6. 分享小程序
/**
   *
   * @param platform
   * WEIXIN_CIRCLE 朋友圈
   * WEIXIN 微信
   * @param _type video
   */
  shareMinApp() {
    let shareData = {
      appId: "微信AppID",
      appKey: "微信AppSecret",
      platform: "WEIXIN",
      shareData:{
          shareType:"minApp",
          minAppUrl: "123",
          thumb: "hahaha",
          title: "123",
          description: "123123",
          path: "小程序路径 默认打开首页",
          userName: "小程序原始appid不要搞混了",
          miniType: "0" //0 正式 ， 1 测试 2 预览版
      }
    };

    XviewSdk.getInstance()
      .ComponentWeChat
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

#### 腾讯 QQ

- **登录** 示例代码

```typescript
 login() {
   let wechatLogin = {
      appId: "QQappid",
      appKey: "QQappKey"
    };

XviewSdk.getInstance()
        .ComponentQQ.Login(wechatLogin)
        .callNativeXView()
        .then(
        _result => {
          //返回参数: code == 0 , data ={ uid : "user ID"}
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

- **分享** 示例代码

```typescript
   1. 分享文字
/**
   *
   * @param platform
   * QZONE 空间
   * QQ
   * @param _type text
   */
  shareText() {
    let shareData = {
      appId: "QQAppID",
      appKey: "QQAppKey",
      platform: "QQ",
      shareData:{
        shareType:"text",
        text: "xview 组件化 测试 shareText"
      }
    };

    XviewSdk.getInstance()
      .ComponentQQ
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

```typescript
   2. 分享图片
/**
   *
   * @param platform
   * QZONE 空间
   * QQ
   * @param _type image
   */
  shareImage() {
    let shareData = {
      appId: "QQAppID",
      appKey: "QQappKey",
      platform: "QQ",
      shareData:{
        shareType:"image",
          image:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          title: "xview 组件化 分享 图片",
          description: "网络图片测试"
      }
    };

    XviewSdk.getInstance()
      .ComponentQQ
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

```typescript

   3. 分享网页
/**
   *
   * @param platform
   * QZONE 空间
   * QQ
   * @param _type webPage
   */
  shareWebPage() {
    let shareData = {
      appId: "QQAppID",
      appKey: "QQappKey",
      platform: "QQ",
      shareData:{
        shareType:"webPage",
        webUrl: "http://www.baidu.com",
        thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
        title: "身轻如燕",
        description: "自动打包 组件化"
      }
    };

    XviewSdk.getInstance()
      .ComponentQQ
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

```typescript

   4. 分享音乐
/**
   *
   * @param platform
   * QZONE 空间
   * QQ
   * @param _type music
   */
  shareMusic() {
    let shareData = {
      appId: "QQAppID",
      appKey: "QQappKey",
      platform: "QQ",
      shareData:{
          shareType:"music",
          musicUrl: "www.baidu.com",
          thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          title: "音乐",
          description: "音乐分享",
          targetUrl: "http://music.taihe.com/song/565263868"
      }
    };

    XviewSdk.getInstance()
      .ComponentQQ
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

```typescript

   5. 分享视频
/**
   *
   * @param platform
   * QZONE 空间
   * QQ
   * @param _type video
   */
  shareVideo() {
    let shareData = {
      appId: "QQAppID",
      appKey: "QQappKey",
      platform: "QQ",
      shareData:{
          shareType:"video",
          videoUrl: "www.baidu.com",
          thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          title: "视频",
          description: "测试 视频分享 "
      }
    };

    XviewSdk.getInstance()
      .ComponentQQ
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

#### 新浪微博 Sina

- **登录** 示例代码

```typescript
 login() {
    let sinaLogin = {
      appId: "应用 App Key",
      appKey: "App Secret",
      redirectUrl: "https://api.weibo.com/oauth2/default.html(默认回调地址)",
    }

XviewSdk.getInstance()
        .ComponentSina.Login(wechatLogin)
        .callNativeXView()
        .then(
        _result => {
          //返回参数: code == 0 , data ={ uid : "user ID"}
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

- **分享** 示例代码

```typescript
   1. 分享文字
/**
   *
   * @param platform
   * SINA
   * @param _type text
   */
  shareText() {
    let shareData = {
      appId: "应用 App Key",
      appKey: "App Secret",
      platform: "SINA",
      shareData:{
        shareType:"text",
        text: "xview 组件化 测试 shareText"
      }
    };

    XviewSdk.getInstance()
      .ComponentSina
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

```typescript
   2. 分享图片
/**
   * @param platform
   *SINA
   * @param _type image
   */
  shareImage() {
    let shareData = {
      appId: "应用 App Key",
      appKey: "App Secret",
      redirectUrl: "https://api.weibo.com/oauth2/default.html",
      platform: "SINA",
      shareData:{
        shareType:"image",
          image:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          title: "xview 组件化 分享 图片",
          description: "网络图片测试"
      }
    };

    XviewSdk.getInstance()
      .ComponentSina
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

```typescript

   3. 分享网页
/**
   *
   * @param platform
   * SIAN
   * @param _type webPage
   */
  shareWebPage() {
    let shareData = {
      appId: "应用 App Key",
      appKey: "App Secret",
      redirectUrl: "https://api.weibo.com/oauth2/default.html",
      platform: "SINA",
      shareData:{
        shareType:"webPage",
        webUrl: "http://www.baidu.com",
        thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
        title: "身轻如燕",
        description: "自动打包 组件化"
      }
    };

    XviewSdk.getInstance()
      .ComponentSina
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

```typescript

   4. 分享音乐
/**
   *
   * @param platform
   * SINA
   * @param _type music
   */
  shareMusic() {
    let shareData = {
      appId: "应用 App Key",
      appKey: "App Secret",
      redirectUrl: "https://api.weibo.com/oauth2/default.html",
      platform: "SINA",
      shareData:{
          shareType:"music",
          musicUrl: "www.baidu.com",
          thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          title: "音乐",
          description: "音乐分享",
          targetUrl: "http://music.taihe.com/song/565263868"
      }
    };

    XviewSdk.getInstance()
      .ComponentSina
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

```typescript

   5. 分享视频
/**
   * @param platform
   * SIna
   * @param _type video
   */
  shareVideo() {
    let shareData = {
      appId: "应用 App Key",
      appKey: "App Secret",
      redirectUrl: "https://api.weibo.com/oauth2/default.html",
      platform: "SINA",
      shareData:{
          shareType:"video",
          videoUrl: "www.baidu.com",
          thumb:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1507999582,2516368025&fm=26&gp=0.jpg",
          title: "视频",
          description: "测试 视频分享 "
      }
    };

    XviewSdk.getInstance()
      .ComponentSina
      .Share(shareData)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }
```

#### 推送 Push

- **设置监听** 示例代码

```typescript

    1 . 示例代码 处理通知点击自定义回调 (全局 监听 处理)

    let notificationClick = (_result)=>{
      alert(JSON.stringify(_result));// 返回 推送的附加参数
    }

    XviewSdk.getInstance()
    .ComponentPush
    .NotificationClick(notificationClick);
```

```typescript

    2 . 示例代码 处理通知来了没点击 显示 前端UI提示 （全局 监听 处理）

    let notificationClick = (_result)=>{
      alert(JSON.stringify(_result));// 返回 推送的附加参数
    }

    XviewSdk.getInstance()
    .ComponentPush
    .NotificationClick(notificationClick);
```

- **设置 别名** 示例代码

```typescript

    1 . 示例代码  设置别名  别名类型 详细了解查看 umeng 文档

  setAlias() {
    let alias = {
      alias: "用户唯一标识",
      aliasType: "不同身份用户如没有需求可以可以统一使用一个字段"
    };
    XviewSdk.getInstance()
      .ComponentPush.SetAlias(alias)
      .callNativeXView()
      .then(_result => {
        // return:code:0/-1
        //message:设置成功/设置失败 注意设置失败要 定时 10s 一次 再重试 2 次 并保存 状态
        alert(JSON.stringify(_result));
      });
  }
```

```typescript

    2 . 示例代码  删除别名  别名类型 回调同设置别名一样处理

  deleteAlias() {
    let alias = {
      alias: "用户唯一标识",
      aliasType:"同设置别名时 的字段值"
    };
    XviewSdk.getInstance()
      .ComponentPush.DeleteAlias(alias)
      .callNativeXView()
      .then(_result => {
        alert(JSON.stringify(_result));
      });
  }
```

- **设置 标签** 示例代码

```typescript

    1 . 添加标签 标签使用详细见文档

  addTags() {

    let tag = { tags: ["1234", "12345", "123456"] };

    XviewSdk.getInstance()
      .ComponentPush.AddTag(tag)
      .callNativeXView()
      .then(_result => {
        //回调 成功后可以保存到接口
        alert(JSON.stringify(_result));
      });
  }
```

```typescript

    2 . 删除几个标签

  deleteTags() {
    //标签一定是 成功添加到服务器 后 接口获取的
    let tag = { tags: ["1234", "12345"] };

    XviewSdk.getInstance()
      .ComponentPush.DeleteTag(tag)
      .callNativeXView()
      .then(_result => {
        //删除成功后 提交服务器
        alert(JSON.stringify(_result));

      });
  }

```

```typescript

    3 . 获取所有标签 一般用于 登录时 从本地更新提交到服务器(看需求操作)

  getAllTags() {

    XviewSdk.getInstance()
      .ComponentPush.GetTags()
      .callNativeXView()
      .then(_result => {
        // data 中[1,1223,21321,....]
        alert(JSON.stringify(_result));
      });

  }

```

#### 统计 Analytics

- **账户统计 示例代码如下** (默认统计用户 启动 如果上架不同渠道包 默认统计来源)

```typescript

    1 .  账号登录 统计 可以统计 账号来源 定义 好 比如 微信登录 定义 provider = WeChat

 onProfileSignIn() {

    let data = {
      id: "userID",
      provider: "WeChat"
    };

    XviewSdk.getInstance()
      .ComponentAnalytics.OnProfileSignIn(data)
      .callNativeXView();
  }

   2 . 用户 退出当前 账号 时 调用 方法（仅限于 调用 统计账号的方法之后）

  onProfileSignOff() {

    XviewSdk.getInstance()
      .ComponentAnalytics.OnProfileSignOff()
      .callNativeXView();
  }
```

- **页面访问统计 示例代码如下** (页面访问 时长统计 成对出现)

```typescript

    1 . 进入页面 时调用 最好封装 基类使用  根据页面生命周期 进入时 离开时 调用

  onPageStart() {

    let data = {
      pageName: "当前页面的名字"
    };

    XviewSdk.getInstance()
      .ComponentAnalytics.OnPageStart(data)
      .callNativeXView();
  }

    2 . 离开页面时调用

  onPageEnd() {

    let data = {
      pageName: "当前页面的名字"
    };

    XviewSdk.getInstance()
      .ComponentAnalytics.OnPageEnd(data)
      .callNativeXView();
  }
```

- **事件统计 示例代码如下** (具体需求参考友盟 统计文档 需要提前注册 事件)

```typescript

 多参数类型事件 使用时需要在后台添加事件时选择 “多参数类型事件”。
  /**
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
      .callNativeXView();
  }
```

## 高德地图 SDK 定位 导航

#### 定位

- **单次定位** 示例代码

```typescript
  onceLocation() {

    XviewSdk.getInstance()
    .ComponentLocation.OnceLocation()
    .callNativeXView()
    .then(
      _result=>{
        alert(JSON.stringify(_result));
      },
      _error=>{
          alert("_error:" + JSON.stringify(_error));
      }
    )

  }
```

- **持续定位** 示例代码

```typescript
   1 .  开启持续定位

  keepLocation() {
    let data = {
      refreshTime : 2,// 刷新 请求时间
      url:"http:www.test.com/keepLocation",// 后端接收定位上报接口
      params:{// 后台需要的上报参数 key
        testData:"后台接口需要数据",
        testData:"后台接口需要数据"
      }
    }
    XviewSdk.getInstance()
    .ComponentLocation.KeepLocation(data)
    .callNativeXView()
    .then(
      _result=>{
        alert(JSON.stringify(_result));
      },
      _error=>{
          alert("_error:" + JSON.stringify(_error));
      }
    )
  }
```

```typescript
   2 .  关闭持续定位交互 (不再向前端发送定位数据 离开地图页面时调用 定位还运行)

  stopSendLocation() {

    XviewSdk.getInstance()
    .ComponentLocation.StopSend()
    .callNativeXView()
    .then(
      _result=>{
        alert(JSON.stringify(_result));
      },
      _error=>{
          alert("_error:" + JSON.stringify(_error));
      });
   }
```

```typescript
   3 .  关闭持续定位 (定位停止运行 不再定位 销毁定位服务)

  stopSendLocation() {

    XviewSdk.getInstance()
    .ComponentLocation.StopKeep()
    .callNativeXView()
    .then(
      _result=>{
        alert(JSON.stringify(_result));
      },
      _error=>{
          alert("_error:" + JSON.stringify(_error));
      });
  }
```

#### 导航 (注意 货车 收费 根据项目需求而定 后加)

- **步行** 示例代码(注意距离 参考 高德地图文档)

```typescript

  walking() {

    let  naviData =
        { mapData:{
         endLatitude: 32.056094,
         endLongitude: 118.788012,
         startLatitude: 32.081696,
         startLongitude: 118.634204
         } };

    XviewSdk.getInstance()
      .ComponentNavi.Walking(naviData)
      .callNativeXView()
      .then(   _result=>{
        alert(JSON.stringify(_result));
      },
      _error=>{
          alert("_error:" + JSON.stringify(_error));
      });
  }

```

- **骑行** 示例代码(注意距离 参考 高德地图文档)

```typescript

  reding() {

    let  naviData =
        { mapData:{
         endLatitude: 32.056094,
         endLongitude: 118.788012,
         startLatitude: 32.081696,
         startLongitude: 118.634204
         } };

    XviewSdk.getInstance()
      .ComponentNavi.Riding(naviData)
      .callNativeXView()
      .then(   _result=>{
        alert(JSON.stringify(_result));
      },
      _error=>{
          alert("_error:" + JSON.stringify(_error));
      });
  }

```

- **驾车** 示例代码

```typescript

  driving() {

    let  naviData =
        { mapData:{
         endLatitude: 32.056094,
         endLongitude: 118.788012,
         startLatitude: 32.081696,
         startLongitude: 118.634204
         } };

    XviewSdk.getInstance()
      .ComponentNavi.Driving(naviData)
      .callNativeXView()
      .then(   _result=>{
        alert(JSON.stringify(_result));
      },
      _error=>{
          alert("_error:" + JSON.stringify(_error));
      });
  }

```

## 连连支付

#### 支付

- **快捷支付（正式环境）** 示例代码

```typescript
  pay() {
    let data = {
      gatewayUrl:"服务端获取参数 为了防止出错 一律采用正式环境测试"
    };

    XviewSdk.getInstance()
      .ComponentLianLian.Pay(data)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }

```

- **签约** 示例代码

```typescript
  sign() {

    let data = {
      gatewayUrl:"服务端获取参数"
    };

    XviewSdk.getInstance()
      .ComponentLianLian.Sign(data)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        },
        _error => {
          alert("_error:" + JSON.stringify(_error));
        }
      );
  }

```

## 多媒体

#### 相机 相册

- **拍照** 示例代码

```typescript
  /**
   * 这个 array  array  array ！！！
   */
   images = [
     {imageIndex:"图片位置数",
     imagePath:"图片实际路径原生上传使用",
     imageType:"图片格式类型 比如 png  jpg",
     imagePrefix:"base64前缀 前端展示 需要拼接使用",
     imageBase64:"base64实际值  可以与imagePrefix 拼接使用 展示",}
    ];// 返回结果

   pics = [];// 前端 展示使用 base64 图片

   files = []// 使用原生 http 上传文件 固定参数 存放 文件路径

  takeImage() {
    XviewSdk.getInstance()
      .ComponentMedia.Camera(null)
      .callNativeXView()
      .then(result => {
        //下面代码 可以 放到自己方法中处理 这里 是示例 写在这里
        if(result.code == 0){
          this.images = result.data;
          for (let i = 0; i < this.images.length; i++) {

            // base64 分前缀 和 实际值
            this.pics.push(
              this.images[i].imagePrefix + this.images[i].imageBase64
            );

            this.files.push(this.images[i]["imagePath"]);

          }
        }
      });
  }

```

- **图片选择** 示例代码

```typescript
  /**
   * 这个 array  array  array ！！！
   */
  images = [
    {
      imageIndex: "图片位置数",
      imagePath: "图片实际路径原生上传使用",
      imageType: "图片格式类型 比如 png  jpg",
      imagePrefix: "base64前缀 前端展示 需要拼接使用",
      imageBase64: "base64实际值  可以与imagePrefix 拼接使用 展示"
    }
  ]; // 返回结果

  pics = []; // 前端 展示使用 base64 图片

  files = []; // 使用原生 http 上传文件 固定参数 存放 文件路径

  uploadImage() {
    let photo = {
      maxNum: 9// 最大选择图片个数
    };

    XviewSdk.getInstance()
      .ComponentMedia.Photo(photo)
      .callNativeXView()
      .then(result => {
        if (result.code == 0) {
          this.images = result.data;
          for (let i = 0; i < this.images.length; i++) {
            this.pics.push(
              this.images[i].imagePrefix + this.images[i].imageBase64
            );
            this.files.push(this.images[i]["imagePath"]);
          }
        }
      });
  }

```

- **视频（默认 MP4）选择** 示例代码

```typescript

  pics = []; // 前端 展示使用 base64 图片

  files = []; // 使用原生 http 上传文件 固定参数 存放 文件路径

  uploadVideo() {
    /**
     * 返回结果 用于前端 判断 时长展示 大小 控制 是否允许上传
     */
    let video = {
      imagePath: "图片实际路径原生上传使用",
      imageBase64: "直接展示使用 固定前缀（data:image/png;base64,）",
      videoPath: "视频文件路径",
      videoDuration: "视频时长 单位 秒",
      videoSize: "视频大小 MB"
    };

    XviewSdk.getInstance()
      .ComponentMedia.Video(null)
      .callNativeXView()
      .then(result => {
        if (result.code == 0) {
          video = result.data;
          this.pics.push(video.imageBase64);
          //使用原生上传文件时 用到
          this.files.push(video.imagePath);
          this.files.push(video.videoPath);
          alert(
            "--imagePath" +
              video.imagePath +
              "--vedioPath" +
              video.videoPath
          );
        }
      });
  }

```

**利用 原生网络请求 测试 以上文件上传 示例代码**

```typescript

 uploadFile() {
    let data = {
      url: url + "/upload/",//注意接口组后 /
      headers:"接口是否需要 非必须参数",
      params: {
         test:"这里可以追加 其它参数",
         test1:"这里可以追加 接口需要参数",
         files: "上传文件必须参数 数组[]" }
    };

    XviewSdk.getInstance()
      .ComponentNet.FileUpload(data)
      .callNativeXView()
      .then(_result => {
        alert(JSON.stringify(_result));
      });
  }

```

#### 二维码，条形码（扫一扫 解析 创建二维码）

- **扫一扫** 示例代码

```typescript
  scanCode() {

    XviewSdk.getInstance().ComponentQR.Scan()
    .callNativeXView()
    .then((_result)=>{
      alert(JSON.stringify(_result));
    });

  }

```

- **解析二维码(base64)** 示例代码

```typescript
  1. 前端传入base64 二维码图片 原生进行解析回调

  parse() {
    let data = {
      base64 : "(不要前缀) iVBORw0KGgoAAAANSUhEUgAAAMgAAADICA"
    }
    XviewSdk.getInstance().ComponentQR.Parse(data)
    .callNativeXView()
    .then((_result)=>{
      alert(JSON.stringify(_result));
    });
  }

```

- **生成二维码** 示例代码

```typescript
  1. 前端传入生成二维码的内容

  create() {
    //返回结果
    let qrImage = {
      imagePrefix: "base64前缀 前端展示 需要拼接使用",
      imageBase64: "base64实际值  可以与imagePrefix 拼接使用 展示"
    }

    let data = {
      qrData : "内容前端自己定义 扫出来后 使用规则"
    }
    XviewSdk.getInstance().ComponentQR.Create(data)
    .callNativeXView()
    .then((_result)=>{
      qrImage = _result.data;
      alert(JSON.stringify(_result));
    });
  }
```

#### 小视频

- **录制** 示例代码

```typescript
 videoRecord() {
     /**
     * 返回结果 用于前端 展示 调用原生 网络请求到服务器保存
     */
    let video = {
      imagePath: "图片实际路径原生上传使用",
      imageBase64: "直接展示使用 固定前缀（data:image/png;base64,）",
      videoPath: "视频文件路径",
      videoDuration: "视频时长 单位 秒",
      videoSize: "视频大小 MB"
    };

    /**
     * 调用参数 非必传参数  原生 注意判断
     */
    let data = {
      maxTime:15,// 默认最长 15 秒
      minTime:5,// 默认最短 5 秒
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
      }

    })

  }
```

- **预览播放** 示例代码

```typescript
  注意： 此播放 需要 选择视频 或者 录制视频 拿到的本地视频路径

  videoPlay() {

    let data = {
      videoPath:" 录制 视频 或者 选择视频 获得 路径"
    }

    XviewSdk.getInstance()
    .ComponentVideo
    .Play(data)
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

```

#### 音频

- **录制** 示例代码

```typescript
  audioRecord() {
    /**
     * 本地 操作
     * 返回参数
     */
    let audio = {
      audioPath: "音频文件路径",
      audioDuration: "音频时长 单位 秒",
      audioSize: "文件大小 KB"
    };


    let data = {
      maxTime: 60, // 默认最长 60 秒
      minTime: 5 // 默认最短 5 秒
    };

    XviewSdk.getInstance()
      .ComponentAudio.Record(data)
      .callNativeXView()
      .then(_result => {
        if(_result.code == 0){
          audio = _result.data;
        }
        alert(_result);
      });
  }
```

- **播放** 示例代码

```typescript
  注意： 此播放 需要 录制音频的路径( 非网路音频地址)

  audioStart() {

    let data = {
      audioPath:" 录制音频  获得的路径"
    }

    XviewSdk.getInstance()
    .ComponentAudio
    .Start(data)
    .callNativeXView()
    .then((_result)=>{
      /**
       * 播放失败 可能 此视频路径有问题 前端提示 调用删除代码 移除此音
       */
      if(_result.code == -1){
          alert(_result.message)
      }
    });

  }

```

- **停止播放** 示例代码

```typescript
  注意： 此操作 是 先调用了 播放 方法

  audioStop() {
   let data = {
      audioPath:" 播放音频获得的路径"
    }

    XviewSdk.getInstance()
    .ComponentAudio
    .Stop(data)
    .callNativeXView();

  }

```

#### 网络请求（原生方法）

- **Get && Post 请求** 示例代码

```typescript

    url = "http://192.168.0.103/ (示例接口 最后'/' 不可少)";

    params = {
      testgetpost: "sdfsdf",
      test1getpost: "sdfsdf",
      test2getpost: "sdfsdf"
    };

    headers = {
      testheaders: "sdfsdf",
      test1headers: "sdfsdf",
      test2headers: "sdfsdf"
    };

 1 . get() {

    let data = {
      url: this.url,(必穿)
      params: this.params,(必传)
      headers: this.headers(可选参数 可为 null 或者不传)
    };
    XviewSdk.getInstance()
      .ComponentNet.HttpGet(data)
      .callNativeXView()
      .then(_result => {
        _result.data // 接口返回的 data 中 参数
        alert(JSON.stringify(_result));
      });
  }

2 .  post() {

    let data = {
      url: this.url,(必穿)
      params: this.params,(必传)
      headers: this.headers(可选参数 可为 null 或者不传)
    };
    XviewSdk.getInstance()
      .ComponentNet.HttpPost(data)
      .callNativeXView()
      .then(_result => {
        _result.data // 接口返回的 data 中 参数
        alert(JSON.stringify(_result));
      });
  }
```

- **文件上传 && 下载文件** 示例代码

```typescript
    注意 files[]  使用

    url = "http://192.168.0.103/ (示例接口 最后'/' 不可少)";

    files = ["得到的原生 文件路径1 ", "得到的原生 文件路径2 "];
  /**
   * 注意 所有文件 上传 字段 均用 files[] 为了兼容多文件上传
   */

  1 . upload() {
       let data = {
            url: this.url + "upload/",
            headers: this.headers(可选参数 可为 null 或者不传 根据自己后台需要),
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

2 .  下载成功 失败均回调

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
```

#### 工具（Utils）

- **手机功能（ComponentMobile ）** 示例代码

```typescript

  1 . 获取联系人 array

  /**
   * return[{name:"姓名",phone;"电话号码"}]
   */
  contacts() {
    XviewSdk.getInstance()
      .ComponentMobile.Contacts()
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        });
  }
```

```typescript

  2 . 打电话

 callPhone() {
    let data = {
      tel: "186XXXX9039"
    };
    XviewSdk.getInstance()
      .ComponentMobile.CallPhone(data)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result.data));
        });
  }
```

```typescript

  3 . 发送短信

 sendSMS() {
    let data = {
      sms: {
        number: "186xxxx9039",(不可为空)
        body: "dsflsdjfdlsjfl"
      }
    };
    XviewSdk.getInstance()
      .ComponentMobile.SendSMS(data)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        });
  }
```

```typescript

  4 . 跳转 浏览器

 jumpBrowser() {
    let data = {
      url: "https://www.2345.com/"(不可为空)
    };
    XviewSdk.getInstance()
      .ComponentMobile.JumpBrowser(data)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        });
  }
```

```typescript

  5 . 复制到剪切板

 clipboard() {
    let data = {
      label: "沾我我就黏贴了"
    };
    XviewSdk.getInstance()
      .ComponentMobile.Clipboard(data)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        });
  }
```

```typescript

  6 . 打开闪光灯

 flashLamp() {
    XviewSdk.getInstance()
      .ComponentMobile.FlashLamp()
      .callNativeXView();
  }
```

```typescript

  6 . 截屏

  screenShot() {
    /**
     * 返回参数 图片统一 png
     */
    let image = {
      imagePrefix: "base64前缀 前端展示 需要拼接使用",
      imageBase64: "base64实际值  可以与imagePrefix 拼接使用 展示"
    };

    XviewSdk.getInstance()
      .ComponentMobile.ScreenShot()
      .callNativeXView()
      .then(_result => {
        // 数据太大 不要alter base64的值
      });
  }
```

- **App (ComponentApp)** 示例代码

```typescript

  1 . 第一次加载成功 回调  Android 有刘海屏高度 参数

   appInitSuccess() {
    XviewSdk.getInstance().ComponentApp.InitSuccess(_result => {
      alert("Exception " + JSON.stringify(_result));
    });
  }
```

```typescript

  2 . 保存图片可以加水印

  saveImage() {
    let data = {
      text: "水印",(没内容时 正常保存图片到相册)
      url: "https://www.2345.com/png"
    };

    XviewSdk.getInstance()
      .ComponentApp.SaveImage(data)
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        });
  }
```

```typescript

  3 . 跳转app 界面网页

  jumpWeb() {
    let data = {
      title: "好123",
      url: "https://www.2345.com/"
    };
    XviewSdk.getInstance()
      .ComponentApp.JumpWeb(data)
      .callNativeXView()
      .then(
        _result => {
          this.xviewResult = _result;
          alert(JSON.stringify(_result));
        });
  }
```

```typescript

  4 . 获取缓存大小 单位 MB

  getCacheSize() {

    XviewSdk.getInstance()
      .ComponentApp.GetCacheSize()
      .callNativeXView()
      .then(_result => {
        alert(JSON.stringify(_result.data));
      });

  }
```

```typescript

  5 . 清除缓存

 cleanCache() {

    XviewSdk.getInstance()
      .ComponentApp.CleanCache()
      .callNativeXView()
      .then(
        _result => {
          alert(JSON.stringify(_result));
        });

  }
```

```typescript

  6 . 调用组件异常监听方法 调试期使用

 appException() {
    XviewSdk.getInstance().ComponentApp.Exception(_result => {
      alert("Exception " + JSON.stringify(_result));
    });
  }

```

- **Android 特有方法 （ComponentApp）** 示例代码

```typescript

  1 . Android返回键 注册监听

  appOnBack() {

    XviewSdk.getInstance().ComponentApp.OnBack(() => {
      //在这里关闭当前页面
      alert("关闭当前页面");
    });

  }
```
