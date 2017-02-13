//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '点击进入',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../userpage/userpage'
    })
  },
  comeintouserpagetaped: function() {
    wx.navigateTo({
      url: '../userpage/userpage'
    })

  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  onShow:function(){
    // 生命周期函数--监听页面显示
    //
    // wx.redirectTo({
    //   url: '../userpage/userpage'
    // })




    // var userridd = app.globalData.user_id;
    // var signn = app.globalData.sign;

    // console.log("index__onShow----userid..." + userridd)
    // console.log("index__onShow----sign..." + signn)





  }




})

