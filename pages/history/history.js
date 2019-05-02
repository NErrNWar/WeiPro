// pages/history/history.js
const app= getApp();
  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self=this
    wx.showLoading({
      title: "加载中...",
      mask: true,
    });
    var reqTask = wx.request({
      url: app.globalData.host+'/itemlist',
      data: {"open_id":app.globalData.openid},
      header: {'content-type':'application/x-www-form-urlencoded'},
      method: 'POST',
      success: (result) => {
        wx.hideLoading();
        console.log(result)
        self.setData({
          answers:result.data.context
        })
      },
      fail: (e) => {
        console.log("request fail",e)
      }
    });
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  detial:(e)=>{
    let id=e.currentTarget.dataset.id
    let path=e.currentTarget.dataset.path
    let answer=e.currentTarget.dataset.answer
    wx.navigateTo({
      url: '/pages/answer/answer?answer='+answer+'&path='+path,
      success: (result) => {
        console.log("navigate to answer success",result)
      },
      fail: (e) => {
        console.log("navigate to answer fail",e)
      }
    }); 
  }
})