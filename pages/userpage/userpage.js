
var app = getApp()

Page({
  data:{
    //
    userInfo: {},
    show:1,
    off:0,
    hiddenLoading: true,
    bottomshow:1,
    bottomoff:0,
    nickName:'',
    avatarUrll:'',
    ilikecountt:'',

    firstPageSongName:'',
    firstPageSongimgUrl:'',

    userrid:'',
    usersign:'',

    userbottomshhow:0,
    userSongName:'',
    userSongimgUrl:'',
    currentplaysongIndex:'',

    pplayorpause:1,
    pplayorpause22:0,

    bottomlinetexxt:'---我也是有底线的---',

    loveorrnolove:'/images/xinshou.png',


    ilikedata:[],

    recentplaydata:[],
    userinfoo:["user"],

    moreseq:'',
    botoommlinee:0,
    lovestatuss:'',
    loveornotlove11:1,
    loveornotlove22:0,
    recentmsicid:'',

    nolovedatashow:0,
    norecenttdatashow:0,
    loadnewdata:0,







  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var that = this

    console.log("---firstpage----onLoad-------")
 //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      
    });




    ///获取缓存中的数据
    wx.getStorage({
      key: 'usernickName',
      success: function(res) {

      that.setData({
        nickName: res.data,
      })

      } 
      
    })

     wx.getStorage({
      key: 'useravatarUrl',
      success: function(res) {

      that.setData({
        avatarUrll: res.data,
      })

      } 
    })




    
    // console.log("onLoad全局全局.." + app.globalData.songName);


    // that.data.firstPageSongName = app.globalData.songName;




    // ///获取缓存中的数据
    wx.getStorage({
      key: 'user_id',
      success: function(res) {

      console.log( "用户 id "+ res.data)

      that.setData({
        userrid: res.data,
      })

      //console.log( "用户 id "+ that.data.userrid)

      } 
      
    })

     wx.getStorage({
      key: 'sign',
      success: function(res) {

      console.log( "用户 sign "+ res.data)

      that.setData({
        usersign: res.data,
      })

      }
     })





//     var userridd = app.globalData.user_id;
//     var signn = app.globalData.sign;

//     console.log("onload----userid..." + userridd)
//     console.log("onload----sign..." + signn)


//     that.setData({
     
//       hiddenLoading: !that.data.hiddenLoading

//     })

// //////////////////////请求我喜欢列表数据
//     ///////////////
//     wx.request({
//          url:     'https://xcx.zhongmengkeji.com/xcx/search_song/get_user_love_list.php',
//         header: {  
//           "Content-Type": "application/json"  
//         }, 
//         data: {
//           user_id:userridd,
//           sign:signn,
//           action_update_his:'1',
//           per_page:'30',
//           start_seq:'0',
//           end_seq:'1'

//         },
//         method: 'GET', 
//         success: function(res){
//           // success
//           // console.log(userridd)
//           // console.log(signn)


//           console.log(res.data)
// ///////////////////////数据格式格式
// //////////id
//         //music_mp3_url
//         //music_pic
//         //singer_name
//         //song_name
//         //
         
//         that.setData({
//             ilikedata:res.data.data.user_love_list,
//             ilikecountt:res.data.data.user_love_info.love_num
// ,
//             hiddenLoading:true

//           })

//           // console.log("请求的数组 :" + that.data.ilikedata[0].song_name)


//           if(that.data.ilikedata.length == 0){

//             that.setData({
//               bottomlinetexxt:'---还没有喜欢的歌曲---'

//             })
            
//           }
         


//         },
//         fail: function() {
//           // fail
//           console.error( '网络请求失败' );  


//         }
//       })







       /**
         * 监听音乐播放
         */
        wx.onBackgroundAudioPlay(function() {
          console.log('onBackgroundAudioPlay')


          that.setData({
            
            userbottomshhow:1,

          })
          
        })
      
        /**
         * 监听音乐暂停
         */
        wx.onBackgroundAudioPause(function() {
          console.log('onBackgroundAudioPause')
        })
      
        /**
         * 监听音乐停止
         */
        wx.onBackgroundAudioStop(function() {
          console.log('onBackgroundAudioStop')

          /////////////////////////

             var that = this

             

         
              // console.log("我喜欢")

          //     console.log("当前 index: " + that.data.currentplaysongIndex)

          //     console.log("数组 count : " + that.data.ilikedata.length)

          


          //     let nextindexx = that.data.currentplaysongIndex;
          // ////////////////////////////////////////////
          // //////////////////数组防越界判断
          //     if(nextindexx < that.data.ilikedata.length - 1){
                  
          //         nextindexx++;

          //         that.data.currentplaysongIndex = nextindexx;

          //     } else {

          //       nextindexx = 0;

          //       //nextindexx++;

          //       that.data.currentplaysongIndex = nextindexx;


          //     }



              


          //     console.log("下一首 index: " + nextindexx)



          //     that.setData({
                
          //       userSongName:that.data.ilikedata[nextindexx].song_name,
          //       userSongimgUrl:that.data.ilikedata[nextindexx].music_pic,
                
                

          //   })



          //     wx.playBackgroundAudio({
          //       dataUrl: that.data.ilikedata[nextindexx].music_mp3_url,
          //       title: that.data.ilikedata[nextindexx].song_name,
          //       coverImgUrl:  that.data.ilikedata[nextindexx].music_pic

          //     })






        })






    



  },





  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    //
    var that = this

    var userridd = app.globalData.user_id;
    var signn = app.globalData.sign;

    console.log("onReady----userid..." + userridd)
    console.log("onReady----sign..." + signn)


    // console.log( "用户 id "+ that.data.userrid)
    // console.log( "用户 sign "+ that.data.usersign)


    // that.setData({
     
    //   hiddenLoading: !that.data.hiddenLoading

    // })

//////////////////////请求我喜欢列表数据
    ///////////////

    if(signn == ''){

        that.setData({
     
          loadnewdata: 1,


        })

    } else {

         that.setData({
     
          hiddenLoading: !that.data.hiddenLoading

        })


        //////////////////////////////////

          wx.request({
         url:     'https://xcx.zhongmengkeji.com/xcx/search_song/get_user_love_list.php',
        header: {  
          "Content-Type": "application/json"  
        }, 
        data: {
          user_id:userridd,
          sign:signn,
          action_update_his:'1',
          per_page:'30',
          start_seq:'0',
          end_seq:'1'

        },
        method: 'GET', 
        success: function(res){
          // success
          // console.log(userridd)
          // console.log(signn)


          console.log(res.data)
///////////////////////数据格式格式
//////////id
        //music_mp3_url
        //music_pic
        //singer_name
        //song_name
        //
         
        that.setData({
            ilikedata:res.data.data.user_love_list,
            ilikecountt:res.data.data.user_love_info.love_num
,
            hiddenLoading:true

          })

          // console.log("请求的数组 :" + that.data.ilikedata[0].song_name)


          if(that.data.ilikedata.length == 0){

            that.setData({
              nolovedatashow:1,

            })
            
          } else {

            that.setData({
              nolovedatashow:0,

            })

          }
         


        },
        fail: function() {
          // fail
          console.error( '网络请求失败' );  


        }
      })



    }
  





    

  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    //
    var that = this

    console.log("传递的歌曲名 " + app.globalData.usersongName);

    
    if(app.globalData.usersongName) {

        that.setData({
          userSongName:app.globalData.usersongName,
          userSongimgUrl:app.globalData.usersongimage ,

        })
    }
    

    var loveshoww = app.globalData.isloveed;
    var songgidd = app.globalData.usersongidd;

    console.log("是否点击了搜索页面的喜欢 " + loveshoww);
    console.log("搜索页面的 music_id " + songgidd);
   
    
    if(loveshoww) {

       that.setData({
          loveornotlove11:0,
          loveornotlove22:1,

        })

    } else {
      that.setData({
        loveornotlove11:1,
        loveornotlove22:0,

      })

    }


    // console.log("onShow全局全局 " + app.globalData.songName);

    // that.data.firstPageSongName = app.globalData.songName;

    // console.log("onShow firstPageSongName " + that.data.firstPageSongName);


    // var userridd = app.globalData.user_id;
    // var signn = app.globalData.sign;

    // console.log("onShow----userid..." + userridd)
    // console.log("onShow----sign..." + signn)


    


   


  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    //
    console.log("-----userpage----onHide-----")

     ////设置底部播放栏
    // that.setData({
        
    //     userbottomshhow:0,
        
    // })

  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    //
    console.log("-----userpage----onUnload-----")
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    //
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    //
    var that = this

     if(that.data.show == 1 & that.data.off == 0) {
      console.log("我喜欢__加载更多")


      // that.setData({
     
      //   hiddenLoading: !that.data.hiddenLoading

      // })

      //  var userridd = app.globalData.user_id;
        
      //   var signn = app.globalData.sign;

//////////////////////请求我喜欢列表数据
    ///////////////
//     wx.request({
//          url:     'https://xcx.zhongmengkeji.com/xcx/search_song/get_user_love_list.php',
//         header: {  
//           "Content-Type": "application/json"  
//         }, 
//         data: {
//           user_id:userridd,
//           sign:signn,
//           action_update_his:'1',
//           per_page:'20',
//           start_seq:'0',
//           end_seq:'1'

//         },
//         method: 'GET', 
//         success: function(res){
//           // success
//           console.log(res.data)
// ///////////////////////数据格式格式
// //////////id
//         //music_mp3_url
//         //music_pic
//         //singer_name
//         //song_name
//         //
         
//         that.setData({
//             ilikedata:res.data.data.user_love_list,
//             ilikecountt:res.data.data.user_love_info.love_num
// ,
//             hiddenLoading:true

//           })

//           console.log("请求的数组 :" + that.data.ilikedata[0].song_name)


//           if(that.data.ilikedata.length == 0){

//             that.setData({
//               bottomlinetexxt:'---还没有喜欢的歌曲---'

//             })
            
//           }
         


//         },
//         fail: function() {
//           // fail
//           console.error( '网络请求失败' );  


//         }
//       })



     } else {

       console.log("最近播放__加载更多")
       console.log("最近播放__加载更多 moreseq " + that.data.moreseq)

        if(that.data.botoommlinee == 0){
            that.setData({
         
              hiddenLoading: !that.data.hiddenLoading

            })

        }
        
        var userridd = app.globalData.user_id;
        var signn = app.globalData.sign;

        // console.log("userid..." + userridd)
        // console.log("sign..." + signn)


    ////////////////////////请求数据
     wx.request({
         url:     'https://xcx.zhongmengkeji.com/xcx/search_song/search/get_play_history.php',
        header: {  
          "Content-Type": "application/json"  
        }, 
        data: {
          
          user_id:userridd,
          sign:signn,
          per_page:'30',
          seq:that.data.moreseq,
          action_update_his:'2'

        },
        method: 'GET', 
        success: function(res){
          // success
          console.log(res.data)
////////////////////数据格式
          //.data.play_his
          //mp3_url
          //music_id
          //music_pic
          //play_time_1st
          //singer_name
          //song_name

          that.setData({
            hiddenLoading:true
          })


          ///赋值赋值
          var newarray = res.data.data.play_his;

          that.setData({
            // recentplaydata:res.data.data.play_his,

            'recentplaydata':that.data.recentplaydata.concat(newarray),

          })

          // console.log("加载更多更多__请求的数组 :" + that.data.recentplaydata[0].song_name)

          ///////////////////赋值
          if(that.data.recentplaydata.length > 5 & res.data.data.play_his.length == 0){
              console.log("无更多数据---")

              

              that.setData({
                botoommlinee:1,
                // hiddenLoading:true

              })



          } else {

            that.data.moreseq = res.data.data.play_his[res.data.data.play_his.length - 1].music_id;


            that.setData({
                botoommlinee:0,

            })


          }
           







        },
        fail: function() {
          // fail
          console.error( '网络请求失败' );  

          that.setData({
            hiddenLoading:true
          })


        }
      })

     }




  },

////////////////////////////////////////////
/////////////////////点击刷新
  loadnewdataisclicked:function(){
    var that = this

    this.setData({
      show:1,
      off:0,
      hiddenLoading: !that.data.hiddenLoading

    })

    var userridd = app.globalData.user_id;
    var signn = app.globalData.sign;

  
   
//////////////////////请求我喜欢列表数据
    ///////////////
    wx.request({
         url:     'https://xcx.zhongmengkeji.com/xcx/search_song/get_user_love_list.php',
        header: {  
          "Content-Type": "application/json"  
        }, 
        data: {
          user_id:userridd,
          sign:signn,
          action_update_his:'1',
          per_page:'30',
          start_seq:'0',
          end_seq:'1'

        },
        method: 'GET', 
        success: function(res){
          // success
          console.log(res.data)

          that.setData({
            hiddenLoading:true
          })

         
        that.setData({
            ilikedata:res.data.data.user_love_list,
            ilikecountt:res.data.data.user_love_info.love_num,
            loadnewdata: 0,

          })

          // console.log("请求的数组 :" + that.data.ilikedata[0].song_name)

           if(that.data.ilikedata.length == 0){

            that.setData({
              nolovedatashow:1,

            })
            
          } else {

              that.setData({
              nolovedatashow:0,

            })

          }


          if(that.data.ilikedata.length < 6){

            that.setData({
                botoommlinee:0,

            })
          }





        },
        fail: function() {
          // fail
          console.error( '网络请求失败' );  

          that.setData({
            hiddenLoading:true
          })

        }
      })


  },
  


//自定义点击
  showToday:function(){
    var that = this

    this.setData({
      show:1,
      off:0,
      hiddenLoading: !that.data.hiddenLoading

    })

    var userridd = app.globalData.user_id;
    var signn = app.globalData.sign;

    //console.log("onShow----userid..." + userridd)
    //console.log("onShow----sign..." + signn)


   
//////////////////////请求我喜欢列表数据
    ///////////////
    wx.request({
         url:     'https://xcx.zhongmengkeji.com/xcx/search_song/get_user_love_list.php',
        header: {  
          "Content-Type": "application/json"  
        }, 
        data: {
          user_id:userridd,
          sign:signn,
          action_update_his:'1',
          per_page:'30',
          start_seq:'0',
          end_seq:'1'

        },
        method: 'GET', 
        success: function(res){
          // success
          console.log(res.data)

          that.setData({
            hiddenLoading:true
          })

///////////////////////数据格式格式
//////////id
        //music_mp3_url
        //music_pic
        //singer_name
        //song_name
        //
         
        that.setData({
            ilikedata:res.data.data.user_love_list,
            ilikecountt:res.data.data.user_love_info.love_num,
            loadnewdata: 0,

          })

          // console.log("请求的数组 :" + that.data.ilikedata[0].song_name)

           if(that.data.ilikedata.length == 0){

            that.setData({
              nolovedatashow:1,

            })
            
          } else {

              that.setData({
              nolovedatashow:0,

            })

          }


          if(that.data.ilikedata.length < 6){

            that.setData({
                botoommlinee:0,

            })
          }





        },
        fail: function() {
          // fail
          console.error( '网络请求失败' );  

          that.setData({
            hiddenLoading:true
          })

        }
      })








  },


  lovesongtapedoff:function(){
    var that = this

    console.log("从喜欢列表中去掉...")

    console.log("当前播放歌曲 id " + that.data.currentplaysongIndex)

    var arrayindex = that.data.currentplaysongIndex;

    console.log( that.data.ilikedata[arrayindex])

    







    


  },

  showMonth:function(){

    var that = this

    that.setData({
      show:0,
      off:1,
      hiddenLoading: !that.data.hiddenLoading,
      botoommlinee:0,

    })
 
    console.log("最近播放...")
    console.log("userid..." + that.data.userrid)
    console.log("sign..." + that.data.usersign)
/////////////上面的失效了了

    var userridd = app.globalData.user_id;
    var signn = app.globalData.sign;

    console.log("userid..." + userridd)
    console.log("sign..." + signn)


    ////////////////////////请求数据
     wx.request({
         url:     'https://xcx.zhongmengkeji.com/xcx/search_song/search/get_play_history.php',
        header: {  
          "Content-Type": "application/json"  
        }, 
        data: {
          
          user_id:userridd,
          sign:signn,
          per_page:'30',
          seq:'1',
          action_update_his:'1'

        },
        method: 'GET', 
        success: function(res){
          // success
          console.log(res.data)
////////////////////数据格式
          //.data.play_his
          //mp3_url
          //music_id
          //music_pic
          //play_time_1st
          //singer_name
          //song_name
          //love_status
          that.setData({
            hiddenLoading:true
          })


          that.setData({
            recentplaydata:res.data.data.play_his,
            

          })

          // console.log("请求的数组 :" + that.data.recentplaydata[that.data.recentplaydata.length - 1].music_id)


///////////////////赋值

          //  that.data.moreseq =  that.data.recentplaydata[that.data.recentplaydata.length - 1].music_id;




           if(that.data.recentplaydata.length == 0){

            that.setData({
              // bottomlinetexxt:'---还没有播放过的歌曲---'
              norecenttdatashow:1,

            })
            
          } else {

              ///////////////////赋值
              that.data.moreseq =  that.data.recentplaydata[that.data.recentplaydata.length - 1].music_id;

              that.setData({
             
                norecenttdatashow:0,

              })

          }







        },
        fail: function() {
          // fail
          console.error( '网络请求失败' );  

          that.setData({
            hiddenLoading:true
          })


        }
      })



  },


  showSearch:function(){
    
	  wx.navigateTo({
	    url: '../search/search'
	  
	  })




  },

///////////////////////////////////////
////////////开始播放我喜欢列表音乐音乐

  startplayilikesong:function(event){
    console.log("开始播放音乐音乐...")

    var that = this


    console.log("我喜欢")

        let inxx = event.currentTarget.id;
        console.log("音乐indexx" + inxx)

        ////设置底部播放栏
          that.setData({
            
            userbottomshhow:1,
            userSongName:that.data.ilikedata[inxx].song_name,
            userSongimgUrl:that.data.ilikedata[inxx].music_pic,
            currentplaysongIndex:inxx,
            loveorrnolove:'/images/xinshou.png',

            

        })

              //music_mp3_url
              //music_pic
              //singer_name
              //song_name
              //
        //////////////后台播放
          wx.playBackgroundAudio({
            dataUrl: that.data.ilikedata[inxx].music_mp3_url,
            title: that.data.ilikedata[inxx].song_name,
            coverImgUrl:  that.data.ilikedata[inxx].music_pic

          })



          console.log("我喜欢__music url "+ that.data.ilikedata[inxx].music_mp3_url)


          //  var lovestatuss = that.data.recentplaydata[inxx].love_status;
/////////////设置 music_id 
          var recentmusiciidd = that.data.ilikedata[inxx].song_id;

           that.setData({
                recentmsicid:recentmusiciidd,

            })


            console.log("我喜欢列表 "+ recentmusiciidd)



          that.setData({
            loveornotlove11:0,
            loveornotlove22:1,

          })


////////////////////////////////////////////

      var lovestatussd = that.data.ilikedata[inxx].love_status;

      console.log("我喜欢列表__是否喜欢 "+ lovestatussd)
      console.log(that.data.ilikedata)





  },

//////////////////////////////////////
//////////////开始播放最近播放列表音乐音乐

  startplayrecentdatasong:function(event){
    console.log("开始播放音乐音乐...")

    var that = this


      console.log("最近播放")
      console.log(event)
      let inxx = event.currentTarget.id;
      console.log("音乐indexx" + inxx)


        ////设置底部播放栏
        that.setData({
            
            userbottomshhow:1,
            userSongName:that.data.recentplaydata[inxx].song_name,
            userSongimgUrl:that.data.recentplaydata[inxx].music_pic,
            currentplaysongIndex:inxx,
            // loveorrnolove:'/images/xin.png',
            // lovestatuss:that.data.recentplaydata[inxx].love_status,

        })

              //mp3_url
              //music_pic
              //singer_name
              //song_name
              //
      //////////////后台播放
          wx.playBackgroundAudio({
            dataUrl: that.data.recentplaydata[inxx].mp3_url,
            title: that.data.recentplaydata[inxx].song_name,
            coverImgUrl:  that.data.recentplaydata[inxx].music_pic

          })




          console.log("最近播放__music url "+ that.data.recentplaydata[inxx].mp3_url)



          var lovestatuss = that.data.recentplaydata[inxx].love_status;
/////////////设置 music_id 
          var recentmusiciid = that.data.recentplaydata[inxx].music_id;

           that.setData({
                recentmsicid:recentmusiciid,

            })


          
          if(lovestatuss == '1'){
              console.log("喜欢的 ")

              that.setData({
                loveornotlove11:0,
                loveornotlove22:1,

              })


          } else {
              console.log("不喜欢 ")

              that.setData({
                loveornotlove11:1,
                loveornotlove22:0,

              })

          }




          wx.playBackgroundAudio({
            dataUrl: that.data.recentplaydata[inxx].mp3_url,
            title: '',
            coverImgUrl: ''

          })




  },

 


  loveimmageshoowtaped:function(){
    console.log("最近播放__收藏...")
    var that = this

    console.log("音乐 id..." + that.data.recentmsicid)

    var userridd = app.globalData.user_id;
    var signn = app.globalData.sign;

    var musiccidd = that.data.recentmsicid;

    /////////////////请求接口记录喜欢的
    wx.request({
         url:     'https://xcx.zhongmengkeji.com/xcx/search_song/user_love_song.php',
        header: {  
          "Content-Type": "application/json"  
        }, 
        data: {
          
          user_id:userridd,
          sign:signn,
          song_id:musiccidd,
          type:'1'

        },
        method: 'GET', 
        success: function(res){
          // success
          console.log(res.data)

///////////改变图片
          that.setData({
            loveornotlove11:0,
            loveornotlove22:1,

          })


        },
        fail: function() {
          // fail
          console.error( '网络请求失败' );  


        }
      })




///////////////////////////////////////////////
///////////////////////////////////////////////
  


  },

   lovesongtapedoff:function(){
    console.log("最近播放__取消收藏...")
    var that = this

    console.log("音乐 id..." + that.data.recentmsicid)

    var userridd = app.globalData.user_id;
    var signn = app.globalData.sign;

    var musicciddd = that.data.recentmsicid;
    
       /////////////////
    wx.request({
         url:     'https://xcx.zhongmengkeji.com/xcx/search_song/user_love_song.php',
        header: {  
          "Content-Type": "application/json"  
        }, 
        data: {
          
          user_id:userridd,
          sign:signn,
          song_id:musicciddd,
          type:'2'

        },
        method: 'GET', 
        success: function(res){
          // success
          console.log(res.data)

          that.setData({
            loveornotlove11:1,
            loveornotlove22:0,

          })


        

        },
        fail: function() {
          // fail
          console.error( '网络请求失败' );  


        }
      })

/////////////////////////////////////////////
/////////////////////////////////////////////




  },


 ////////////////暂停按钮
  playstopimagetaped:function(){

    console.log("暂停播放...")

    var that = this

    /////改变按钮图片
    that.setData({
      pplayorpause:0,
      pplayorpause22:1
    })

    wx.pauseBackgroundAudio()



  },


  ////////////////播放按钮
  playstopimagetaped22:function(event){
    var that = this

    var currentt = that.data.currentplaysongIndex;

    if( that.data.show == 1 & that.data.off == 0){


        console.log("我喜欢__列表点击点击 " + currentt)

      ///////我喜欢列表
        if(currentt == ''){

            wx.playBackgroundAudio({
                dataUrl: that.data.ilikedata[0].music_mp3_url,
                title: '',
                coverImgUrl:  ''

            })

        }else {

            wx.playBackgroundAudio({
                dataUrl: that.data.ilikedata[currentt].music_mp3_url,
                title: '',
                coverImgUrl:  ''

            })

        }
      



    } else {


          console.log("最近播放__列表点击点击 " + currentt)

        if(currentt == ''){

            wx.playBackgroundAudio({
                dataUrl: that.data.recentplaydata[0].mp3_url,
                title: '',
                coverImgUrl:  ''

            })

        }else {
             wx.playBackgroundAudio({
                dataUrl: that.data.recentplaydata[currentt].mp3_url,
                title: '',
                coverImgUrl:  ''

            })

        }
       


    }


    

    console.log("继续播放.1..")
    /////改变按钮图片
    that.setData({
      pplayorpause:1,
      pplayorpause22:0

    })

    

  },



  nextsongimagetaped:function(){
    console.log("下一首...")

     var that = this


     if(that.data.show == 1 & that.data.off == 0){
        console.log("我喜欢")

         console.log("当前 index: " + that.data.currentplaysongIndex)

        console.log("数组 count : " + that.data.ilikedata.length)

    


        let nextindexx = that.data.currentplaysongIndex;
    ////////////////////////////////////////////
    //////////////////数组防越界判断
        if(nextindexx < that.data.ilikedata.length - 1){
            
            nextindexx++;

            that.data.currentplaysongIndex = nextindexx;

        } else {

          nextindexx = 0;

          //nextindexx++;

          that.data.currentplaysongIndex = nextindexx;


        }


        // nextindexx++;

        // that.data.currentplaysongIndex = nextindexx;



        


        console.log("下一首 index: " + nextindexx)



        that.setData({
          
          userSongName:that.data.ilikedata[nextindexx].song_name,
          userSongimgUrl:that.data.ilikedata[nextindexx].music_pic,
          // loveorrnolove:'/images/xinshou.png',
          
          

      })



        wx.playBackgroundAudio({
          dataUrl: that.data.ilikedata[nextindexx].music_mp3_url,
          title: that.data.ilikedata[nextindexx].song_name,
          coverImgUrl:  that.data.ilikedata[nextindexx].music_pic

        })


//////////////////////////////////////////////

       that.setData({
          loveornotlove11:0,
          loveornotlove22:1,

        })





     }else {
        console.log("最近播放")


         console.log("当前 index: " + that.data.currentplaysongIndex)

         console.log("数组 count : " + that.data.recentplaydata.length)

    


        let nextindexx = that.data.currentplaysongIndex;
    ////////////////////////////////////////////
    //////////////////数组防越界判断
        if(nextindexx < that.data.recentplaydata.length - 1){
            
            nextindexx++;

            that.data.currentplaysongIndex = nextindexx;

        } else {

          nextindexx = 0;

          //nextindexx++;

          that.data.currentplaysongIndex = nextindexx;


        }


        console.log("下一首 index: " + nextindexx)



        that.setData({
          
          userSongName:that.data.recentplaydata[nextindexx].song_name,
          userSongimgUrl:that.data.recentplaydata[nextindexx].music_pic,
          loveorrnolove:'/images/xin.png',
          
          

      })


//////////////////////////////////////
      
      var lovestatuss = that.data.recentplaydata[nextindexx].love_status;
/////////////设置 music_id 
          var recentmusiciid = that.data.recentplaydata[nextindexx].music_id;

           that.setData({
                recentmsicid:recentmusiciid,

            })


          
          if(lovestatuss == '1'){
              console.log("喜欢的 ")

              that.setData({
                loveornotlove11:0,
                loveornotlove22:1,

              })


          } else {
              console.log("不喜欢 ")

              that.setData({
                loveornotlove11:1,
                loveornotlove22:0,

              })

          }



/////////////////////////////////////


        wx.playBackgroundAudio({
          dataUrl: that.data.recentplaydata[nextindexx].mp3_url,
          title: that.data.recentplaydata[nextindexx].song_name,
          coverImgUrl:  that.data.recentplaydata[nextindexx].music_pic

        })



     }

   




  },




  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '快来这里搜你喜欢的歌了啦~', // 分享标题
      desc: '歌曲点播台,新歌、热歌、老歌、情歌,百万歌曲任你搜,想听就听听!', // 分享描述
      path: '/pages/userpage/userpage' // 分享路径

    }

  }


  
})