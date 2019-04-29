//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  jumpphoto: function(){
    wx.navigateTo({
      url: '../take-photo/take-photo',
      success: (result) => {
        console.log("navigate to take-photo success")
      },
      fail:(e)=>{
        console.log("jump to photo err",e)
      }
    }); 
  },
  onShareAppMessage: function () {
    let that =this;
      return {
        title: '搜题利器', // 转发后 所显示的title
        path: '/pages/index/index', // 相对的路径
        success: (res)=>{    // 成功后要做的事情
          console.log(res.shareTickets[0])     
          wx.getShareInfo({
            shareTicket: res.shareTickets[0],
            success: (res)=> { 
              that.setData({
                isShow:true
              }) 
              console.log(that.setData.isShow)
             },
            fail: function (res) { console.log(res) },
            complete: function (res) { console.log(res) }
          })
        },
        fail: function (res) {
          // 分享失败
          console.log(res)
        }
      }
    }
})
