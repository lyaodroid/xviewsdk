


## 第三方 登录(友盟 SDK) ， 分享(友盟 SDK) ， 支付

#### 支付宝

- **登录** 示例代码

```
返回参数：
{
    code: -1
    message:授权登陆失败
    data:memo = "取消登陆";
    result = "";
    resultStatus = 6001;
}
```
```
{
    code: 0
    message:授权登陆成功
    data: {
    "alipay_open_id" = 20881039069624319509684802318855;
    "app_id" = 2018102961963255;
    "auth_code" = 92c24a0724414c1aac97c03a5578UX55;
    "result_code" = 200;
    scope = kuaijie;
    success = true;
    "target_id" = 201811121147;
    "user_id" = 2088512292857557;
};
```

- **支付** 示例代码

```
{
    code: -1
    message:支付失败
    data:{
    memo = "取消支付";
    result = "";
    resultStatus = 6001;
}
```
```
{
    code: 0
    message:支付成功
    data: {
    memo = "支付成功";
    result = "";
    resultStatus = 9000;
}
```

#### 微信

- **登录** 示例代码

```
{
    code: -1
    message:授权登陆失败
}
```
```
{
    code: 0
    message:授权登陆成功
    data: {
    "openId":,
    "uid":,
    "accessToken":,
    "refreshToken":,
    "name":,
    "iconurl":,
    "gender":,
    "city":,
    "accessToken":,
    "country":,
    "language":,
    "province":,
    "unionid":, 
}
```

- **支付** 示例代码



- **打开小程序** 示例代码


- **分享** 示例代码


#### 腾讯 QQ

- **登录** 示例代码

```
{
    code: 0
    message:授权登陆成功
    data: {
    "openId":,
    "uid":,
    "accessToken":,
    "refreshToken":,
    "name":,
    "iconurl":,
    "gender":,
    "city":,
    "constellation":,
    "figureurl":,
    "figureurl_1":,
    "figureurl_2":,
    "figureurl_qq":,
    "figureurl_qq_1":,
    "figureurl_qq_2":,
    "figureurl_type":,
    "figureurl_type":,
    "is_lost":,
    "is_yellow_vip":,
    "is_yellow_year_vip":,
    "level":,
    "nickname":,
    "province":,
    "vip":,
    "year":,
    "yellow_vip_level":,
}
```

- **分享** 示例代码



#### 新浪微博 Sina

- **登录** 示例代码

```
{
    code: 0
    message:授权登陆成功
    data: {
    "openId":,
    "uid":,
    "accessToken":,
    "refreshToken":,
    "name":,
    "iconurl":,
    "gender":,
}
```

- **分享** 示例代码


#### 推送 Push

- **设置监听** 示例代码
收到推送

```
{
    code:0,
    message:收到推送
    data:{
        body = 123123;
        category = 123;
        subtitle = 123;
        title = 12;
        url =     {
            1 = 21;
        };
        userInfo =     (
        {
            123123 = 12312;
        })
    }
}
```

点击推送
```
{
    code:0,
    message:点击推送
    data:{
        body = 123123;
        category = 123;
        subtitle = 123;
        title = 12;
        url =     {
        1 = 21;
        };
        userInfo =     (
        {
        123123 = 12312;
        })
    }
}
```
- **设置 别名** 示例代码

```
{
    code = 0;
    data =     {
        interval = 0;
        success = ok;
    };
    message = "设置成功";
}
```

删除别名
```
{
    code = 0;
    data =     {
        interval = 0;
        success = ok;
    };
    message = "删除成功";
}
```

- **设置 标签** 示例代码
```
{
    code = 0;
    data =     {
        interval = 0;
        remain = 1021;
        success = ok;
    };
    message = "设置成功";
}
```

删除标签
```
{
    code = 0;
    data =     {
    interval = 0;
    remain = 1023;
    success = ok;
    };
    message = "删除成功";
}

```

获取所有标签
```
{
    code = 0;
    data =     {
        [123456]
    };
    message = "获取成功";
}
```

#### 统计 Analytics


## 高德地图 SDK 定位 导航

#### 定位

- **单次定位** 示例代码

```
{
    code = 0;
    data =     {
        AOIName = "\U7f24\U6da6\U6c47";
        POIName = "";
        address = "";
        city = "\U5357\U4eac\U5e02";
        country = "\U4e2d\U56fd";
        district = "\U5efa\U90ba\U533a";
        latitude = "31.993945";
        longitude = "118.729439";
        number = "41\U53f7";
        province = "\U6c5f\U82cf\U7701";
        state = "\U6c5f\U82cf\U7701";
        street = "\U6052\U5c71\U8def41\U53f7";
        subLocality = "\U5efa\U90ba\U533a";
    };
    message = "定位成功"; 
}

```

- **持续定位** 示例代码

```
{
    code = 0;
    data =     {
        AOIName = "\U7f24\U6da6\U6c47";
        POIName = "";
        address = "";
        city = "\U5357\U4eac\U5e02";
        country = "\U4e2d\U56fd";
        district = "\U5efa\U90ba\U533a";
        latitude = "31.993945";
        longitude = "118.729439";
        number = "41\U53f7";
        province = "\U6c5f\U82cf\U7701";
        state = "\U6c5f\U82cf\U7701";
        street = "\U6052\U5c71\U8def41\U53f7";
        subLocality = "\U5efa\U90ba\U533a";
    };
    message = "定位成功";
}
```


#### 导航 (注意 货车 收费 根据项目需求而定 后加)



## 连连支付

#### 支付

- **快捷支付（正式环境）** 示例代码

```
{
    code: -1
    message:支付失败
    data:{
        "ret_code" = 0114;
        "ret_msg" = "失败原因";
    }
}

```
```
{
    code: 0
    message:支付成功
    data: {

    };
}
```

- **签约** 示例代码

```
{
    code: -1
    message:签约失败
    data:{
        "ret_code" = 0114;
        "ret_msg" = "失败原因";
    }
}

```

```
{
    code: 0
    message:签约成功
    data: {

    };
}
```
## 多媒体

#### 相机 相册 

- **拍照** 示例代码

```
{
    code: 0
    message:拍照成功
    data: {
        "imagePrefix":"data:image/png;base64,"
        imageBase64:""
    };
}
```

- **图片选择** 示例代码

```
{
    code: 0
    message:选择成功
    data: ({
            "imagePrefix":"data:image/png;base64,"
            imageBase64:""
        },{
            "imagePrefix":"data:image/png;base64,"
            imageBase64:""
        });
}

```

- **视频（MP4）选择** 示例代码

```
{
    code: 0
    message:选择成功
    data: ({
        "videoPath":
    },{
        "videoPath":
    });
}

```
#### 音频
```
{
    code: 0
    message:录音完成
    data: {
        "time":,
        avdioPath:
    }
}
```
#### 视频
```
{
    code: 0
    message:录制成功
    data: {
        "imagePrefix":"data:image/png;base64,"
        imageBase64:""
        videoPath:
    }
}
```

#### 基础
截屏
```
{
    code: 0
    message:截屏成功
    data: {
        "imagePrefix":"data:image/png;base64,"
        imageBase64:""
    }
}
```
获取手机通讯录
```
{
code: 0
message:获取成功
data: ({
        "name":""
        phone:""
    },{
        "name":""
        phone:""  
    })  
}
```
