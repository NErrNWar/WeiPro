//app.js
App({
  onLaunch: function () {
    let self=this
    // 登录
    wx.login({
      timeout:10000,
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log("login success",res.code)
        wx.request({
          url: self.globalData.host+"/userinfo",
          data: {"code":res.code},
          header: {'content-type':'application/x-www-form-urlencoded'},
          method: 'POST',
          responseType: 'text',
          success: (result) => {
            console.log("request user code success")
            let data=result.data
            if (data.code!=0){
              console.log(data.code,data.message)
            }
            else{
              let oid=data.context.openid
              console.log("openid",oid)
              self.globalData.openid=oid
            }
          },
          fail: () => {
            console.log("request user coe fail")
          },
        });
          
      },
      fail: e=>{
        console.log("login fail",e)
      }
    });
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    host: "http://localhost:8888",
    openid:""
  }
})