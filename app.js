//app.js
var util = require('/utils/util.js')

var appConfig = {


  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)




    //调用接口获取登录凭证（code）
    // wx.login({
    //   success: function(res) {
    //     if (res.code) {
    //       //发起网络请求
    //       wx.request({
    //         url: 'https://xcx.zhongmengkeji.com/',
    //         data: {
    //           code: res.code
              
    //         }
    //       })
    //     } else {
    //       console.log('获取用户登录态失败！' + res.errMsg)
    //     }
    //   }
    // });





    console.log ("-----onLaunch-----")

  },


  onShow:function () {

    console.log ("-----onShow-----")

  },

  onHide:function () {

    console.log ("-----onHide-----")

  },




  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {

          // console.log (res)


          //   //获取用户信息
          // wx.getUserInfo({
          //   success: function (res) {

          //     console.log (res.userInfo.nickName)
          //     console.log (res.userInfo.avatarUrl)


          //     that.globalData.userInfo = res.userInfo
          //     typeof cb == "function" && cb(that.globalData.userInfo)




          //   }

          // })



          if (res.code) {
          //发起网络请求
      
              

            

                //获取用户信息
              wx.getUserInfo({
                success: function (resss) {

                  console.log (res.code)
                  console.log (resss.userInfo.nickName)
                  console.log (resss.userInfo.avatarUrl)


                   ///本地缓存
                try {
                    wx.setStorageSync('usernickName',resss.userInfo.nickName );
                    wx.setStorageSync('useravatarUrl',resss.userInfo.avatarUrl )

                } catch (e) {  
                }
                 

                 


                  that.globalData.userInfo = resss.userInfo
                  typeof cb == "function" && cb(that.globalData.userInfo)





              wx.request({
               url: 'https://xcx.zhongmengkeji.com/xcx/search_song/get_user_session.php',
               header: {  
        "Content-Type": "application/json"  
      }, 
               data: {
                 code:res.code,
                 avatar:resss.userInfo.nickName,
                 user_nickname:resss.userInfo.avatarUrl



               },

              
               method: 'GET', 
               success: function(res){
                 // success
                 console.log(res.data)
                 console.log(res.data.data.user_id)
                 console.log(res.data.data.sign)



                // 只能在 function 中设置 this.globalData.user_id=res.data.user_id;

                //  console.log(this.globalData.user_id)




                //that.setGlobalData({
                  that.globalData.user_id= res.data.data.user_id;
                  that.globalData.sign=res.data.data.sign;

                //})



                ///本地缓存
                try {
                    wx.setStorageSync('user_id',res.data.data.user_id );
                    wx.setStorageSync('sign',res.data.data.sign )

                } catch (e) {  
                }



                console.log("app.js...sign "+ that.globalData.sign)
                

               },
               fail: function() {
                 // fail
                 console.error( '网络请求失败' );  

               }
             })




              


























                }

              })





        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }



        }
      })
    }
  },

   



  globalData:{
    userInfo:null,
    user_id:'',
    sign:'',
    songName:'',
    songimgUrl:'',
    songerNaame:'',
    usersongName:'',
    usersongimage:'',
    usersongidd:'',
    isloveed:''

  }



}





App(appConfig)