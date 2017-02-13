
var app = getApp()

Page({
  data:{
    //
    userInfo: {},
    hiddenLoading: true,
    searchshow:1,
    searchoff:0,
    blockbgshow:1,
    blockbgoff:0,
    searchbottomshhow:0,
    searchSongName:'',
    searchSongimgUrl:'',
    playpauseimge:'/images/播放.png',
    pplayorpause:1,
    pplayorpause22:0,
    currentplaysongIndex:'',
    searchSongArrayCount:'',
    recentttSearch:'',
    lovesongshoow:1,
    lovesongofff:0,



    searchkeysdata:[],
    searchkey:'',
    userrid:'',
    usersign:'',


    /////再次搜索搜索
    searchtypee:'1',
    searchppage:'2',
    searchtiime:'',
    
    recentplaydata:[
      {
      avatar:'/images/avatar_1副本.png',
      songName:'小幸运22',
      songerName:'田馥甄22'
        },
      {
      avatar:'/images/avatar_2副本.png',
      songName:'小幸运22',
      songerName:'田馥甄22'
        },
        {
      avatar:'/images/avatar_1副本.png',
      songName:'wu22',
      songerName:'田馥甄22'
        }
    ],

    searchsongArray:[]






  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var that = this

 //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });


///获取缓存中的数据
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

      //console.log( "用户 sign "+ that.data.usersign)




      ////////////////////请求最近搜索数据

    wx.request({
         url:     'https://xcx.zhongmengkeji.com/xcx/search_song/get_user_search_key.php',
        header: {  
          "Content-Type": "application/json"  
        }, 
        data: {
         
          user_id:that.data.userrid,
          sign:that.data.usersign



        },
        method: 'GET', 
        success: function(res){
          // success
          console.log(res.data)

          that.setData({
            hiddenLoading:true
          })

          ///赋值赋值

          that.setData({
            searchkeysdata:res.data.data,

          })

          //console.log("请求的数组 :" + that.data.searchsongArray[0].song_name)








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
    })







  },





  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    //
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    //
  },
  onHide:function(event){
    // 生命周期函数--监听页面隐藏
    //
    var that = this

   


  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    //
    //////////////////歌曲停止停止
    //  wx.stopBackgroundAudio({

    // })

    //  ////设置底部播放栏
    // that.setData({
        
    //     userbottomshhow:0,
        
    // })



  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    //
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    //
    //开始加载下一页

    var that = this
    that.setData({
        
      hiddenLoading: !that.data.hiddenLoading

    })

    //搜歌请求请求
    wx.request({
         url:     'https://xcx.zhongmengkeji.com/xcx/search_song/search/search.php',
        header: {  
          "Content-Type": "application/json"  
        }, 
        data: {
          unique_id:'1',
          start_time:'1/18 15:00',
          music_src_type:that.data.searchtypee,
          keyword:that.data.searchkey,
          page:that.data.searchppage,
          user_id:that.data.userrid,
          sign:that.data.usersign



        },
        method: 'GET', 
        success: function(res){
          // success
          console.log(res.data)

          that.setData({
            hiddenLoading:true
          })

          ///赋值赋值
          var newarray = res.data.data.search;


          that.setData({
            // searchsongArray:res.data.data.search,
            'searchsongArray':that.data.searchsongArray.concat(newarray),
            searchtypee:res.data.data.other.music_src_type,

            searchppage:res.data.data.other.page,

          })

          // console.log("第二次请求的数组 :" + that.data.searchsongArray[0].song_name)
          // console.log(that.data.searchsongArray)

          console.log("第二次请求 :" + res.data.data.other.music_src_type)
           console.log("第二次请求 :" + res.data.data.other.page)
           console.log("第二次请求 :" + res.data.data.other.start_time)





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
  wxSearchKeyTap:function(event){
    var that = this

    let inxx = event.currentTarget.id;

    console.log(event)
    
    console.log("点击最近搜索..." + inxx)

    
    //that.setData({
     var recentttSearch = that.data.searchkeysdata[inxx];

    //})

    console.log("点击最近搜索..." + recentttSearch)

    that.setData({
      searchkey:recentttSearch

    })




    ///////////////////////////////////
     that.setData({
        
        hiddenLoading: !that.data.hiddenLoading

      })

      /////页面切换
      that.setData({
        searchshow:0,
        searchoff:1
      })



       //搜歌请求请求
    wx.request({
         url:     'https://xcx.zhongmengkeji.com/xcx/search_song/search/search.php',
        header: {  
          "Content-Type": "application/json"  
        }, 
        data: {
          unique_id:'1',
          start_time:'1/18 14:00',
          music_src_type:'1',
          keyword:recentttSearch,
          page:'1',
          user_id:that.data.userrid,
          sign:that.data.usersign



        },
        method: 'GET', 
        success: function(ress){
          // success
           console.log(ress)

          that.setData({
            hiddenLoading:true
          })

          ///赋值赋值

          that.setData({
            searchsongArray:ress.data.data.search,
 

          })

          //console.log("请求的数组 :" + that.data.searchsongArray[0].song_name)








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

  listenSearchkeyInput:function(e){

    var that = this


    that.data.searchkey= e.detail.value;

    if(e.detail.value){

    } else {

      /////改变显示的页面
      that.setData({
        searchshow:1,
        searchoff:0
      })

    }
    
    
  },


/////////点击列表播放音乐
startplayssearchsong:function(event){
	  console.log("开始播放音乐音乐...")

    var that = this

    console.log(event)

    ////////////////////////////////////////////
///先停止播放播放
      ////////////////歌曲停止停止
    //  wx.stopBackgroundAudio({

    // })

    //////////////////////////////////
   

    //////////////////////////////////

    let inxx = event.currentTarget.id;

    console.log(inxx)

    console.log("点击的音乐名字 :" + that.data.searchsongArray[inxx].song_name)


    var musiccidd = that.data.searchsongArray[inxx].music_id;

    console.log("点击的音乐id :" + musiccidd)




/////////////////////////////////
////////设置全局变量
    // app.globalData.songName = that.data.searchsongArray[inxx].song_name;
    // app.globalData.songimgUrl = that.data.searchsongArray[inxx].music_pic;


    
    

    /////播放音乐🎵
//mp3_url
//music_pic
//singer_name
//song_name
//

////改变 item 背景色色
   that.setData({
      blockbgshow:0,
      blockbgoff:1,
      searchbottomshhow:1,
      searchSongName:that.data.searchsongArray[inxx].song_name,
      searchSongimgUrl:that.data.searchsongArray[inxx].music_pic,
      currentplaysongIndex:inxx,
      

  })


//////////////后台播放
    wx.playBackgroundAudio({
      dataUrl: that.data.searchsongArray[inxx].mp3_url,
      title: that.data.searchsongArray[inxx].song_name,
      coverImgUrl:  that.data.searchsongArray[inxx].music_pic,
      success: function () {
        console.log('搜索页页__播放成功!');
      },
      fail: function () {
          console.log('搜索页页__播放失败!');
      }

    })



    //////////////////////////////////////////
    ////是否喜欢状态状态 //user_love_status

    var lovestatuss = that.data.searchsongArray[inxx].user_love_status;

          
          if(lovestatuss == '1'){
              console.log("喜欢的 ")

               /////改变按钮图片
              that.setData({
                lovesongshoow:0,
                lovesongofff:1

              })
               ///
              app.globalData.isloveed = 'isloveed';
              

          } else {
              console.log("不喜欢 ")

              /////改变按钮图片
              that.setData({
                lovesongshoow:1,
                lovesongofff:0

              })

               ///清掉首页喜欢标记
              app.globalData.isloveed = '';


          }


    /////////////////////////////////////////
    //////向首页传递参数
    app.globalData.usersongName = that.data.searchsongArray[inxx].song_name;
    app.globalData.usersongimage = that.data.searchsongArray[inxx].music_pic;
    app.globalData.usersongidd =musiccidd;

///////////////////////////////////////////


    ////////////////记录播放过的音乐
     wx.request({
         url:     'https://xcx.zhongmengkeji.com/xcx/search_song/search/play.php',
        header: {  
          "Content-Type": "application/json"  
        }, 
        data: {
          
          user_id:that.data.userrid,
          sign:that.data.usersign,
          music_id:musiccidd

        },
        method: 'GET', 
        success: function(res){
          // success
          console.log(res.data)

          that.setData({
            hiddenLoading:true
          })


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


////////////////暂停按钮
  playstopimagetaped:function(event){
    var that = this

    // that.setData({
    //     playpauseimge:'/images/暂停.png',
    //     pplayorpause:false,

    // })



    /////改变按钮图片
    that.setData({
      pplayorpause:0,
      pplayorpause22:1
    })

    wx.pauseBackgroundAudio({

    })

    
    



    // if(pplayorpause){
    //   //////暂停播放
    //   wx.pauseBackgroundAudio({

    //   })

    //   that.setData({
    //     playpauseimge:'/images/暂停.png',
    //     pplayorpause:false,

    //   })

    // } else {

    //   wx.playBackgroundAudio({


    //   })

    //   that.setData({
    //     playpauseimge:'/images/播放.png',
    //     pplayorpause:true,

    //   })

    //  }
    







  },



////////////////播放按钮
  playstopimagetaped22:function(event){
    var that = this

    /////改变按钮图片
    that.setData({
      pplayorpause:1,
      pplayorpause22:0

    })

     wx.playBackgroundAudio({

      })


  },


  ////////////////////////我喜欢💖
  loveimmageshoowtaped:function(){
    var that = this


    

    console.log("当前 index: " + that.data.currentplaysongIndex)
     var indexxx = that.data.currentplaysongIndex;

     var musiccidd = that.data.searchsongArray[indexxx].music_id;

    console.log("点击的音乐id :" + musiccidd)

/////////////////请求接口记录喜欢的
    wx.request({
         url:     'https://xcx.zhongmengkeji.com/xcx/search_song/user_love_song.php',
        header: {  
          "Content-Type": "application/json"  
        }, 
        data: {
          
          user_id:that.data.userrid,
          sign:that.data.usersign,
          song_id:musiccidd,
          type:'1'

        },
        method: 'GET', 
        success: function(res){
          // success
          console.log(res.data)

         /////改变按钮图片
        that.setData({
          lovesongshoow:0,
          lovesongofff:1

        })


         app.globalData.isloveed = 'isloveed';

         


        },
        fail: function() {
          // fail
          console.error( '网络请求失败' );  


        }
      })







  },


  ///////////////////////////我不喜欢
  loveimmageofftaped:function(){

    var that = this

   

    console.log("当前 index: " + that.data.currentplaysongIndex)
     var indexxx = that.data.currentplaysongIndex;

     var musiccidd = that.data.searchsongArray[indexxx].music_id;

    console.log("点击的音乐id :" + musiccidd)


    /////////////////请求接口记录喜欢的
    wx.request({
         url:     'https://xcx.zhongmengkeji.com/xcx/search_song/user_love_song.php',
        header: {  
          "Content-Type": "application/json"  
        }, 
        data: {
          
          user_id:that.data.userrid,
          sign:that.data.usersign,
          song_id:musiccidd,
          type:'2'

        },
        method: 'GET', 
        success: function(res){
          // success
          console.log(res.data)

         
           /////改变按钮图片
          that.setData({
            lovesongshoow:1,
            lovesongofff:0

          })
         
          app.globalData.isloveed = '';


        },
        fail: function() {
          // fail
          console.error( '网络请求失败' );  


        }
      })








  },


  /////////////////下一首
  nextsongimagetaped:function(){
    var that = this

    console.log("当前 index: " + that.data.currentplaysongIndex)

    //console.log("数组 count : " + searchSongArrayCount)


    let nextindexx = that.data.currentplaysongIndex;

    nextindexx++;

    that.data.currentplaysongIndex = nextindexx;


    // if(nextindexx < that.data.searchsongArray.count){
    //   //
    //   nextindexx++;

    //   console.log("下一首 index: " + nextindexx)



    // }
    


    console.log("下一首 index: " + nextindexx)



    that.setData({
      
      searchSongName:that.data.searchsongArray[nextindexx].song_name,
      searchSongimgUrl:that.data.searchsongArray[nextindexx].music_pic,
      
      

  })




  //////////////////////////////////////////
    ////是否喜欢状态状态 //user_love_status

    var lovestatuss = that.data.searchsongArray[nextindexx].user_love_status;

          
          if(lovestatuss == '1'){
              console.log("喜欢的 ")

               /////改变按钮图片
              that.setData({
                lovesongshoow:0,
                lovesongofff:1

              })
               ///
              app.globalData.isloveed = 'isloveed';
              

          } else {
              console.log("不喜欢 ")

              /////改变按钮图片
              that.setData({
                lovesongshoow:1,
                lovesongofff:0

              })

               ///清掉首页喜欢标记
              app.globalData.isloveed = '';


          }
//////////////////////////////////////////


     /////////////////////////////////////////
    //////向首页传递参数
    app.globalData.usersongName = that.data.searchsongArray[nextindexx].song_name;
    app.globalData.usersongimage = that.data.searchsongArray[nextindexx].music_pic;
    
  ///////////////////////////////////////////


    wx.playBackgroundAudio({
      dataUrl: that.data.searchsongArray[nextindexx].mp3_url,
      title: that.data.searchsongArray[nextindexx].song_name,
      coverImgUrl:  that.data.searchsongArray[nextindexx].music_pic

    })




     ////////////////////记录播放过的音乐音乐
    var musiccid = that.data.searchsongArray[nextindexx].music_id;

    console.log("music_id: " + musiccid)


     wx.request({
         url:     'https://xcx.zhongmengkeji.com/xcx/search_song/search/play.php',
        header: {  
          "Content-Type": "application/json"  
        }, 
        data: {
          
          user_id:that.data.userrid,
          sign:that.data.usersign,
          music_id:musiccid

        },
        method: 'GET', 
        success: function(res){
          // success
          console.log(res.data)

          that.setData({
            hiddenLoading:true
          })

         


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


///////////////////搜歌
///wxSearchBlur
  startsearchsongs:function(){

    var that = this

    console.log("搜索 keyy: " + that.data.searchkey)

    if(that.data.searchkey){

      that.setData({
        
        hiddenLoading: !that.data.hiddenLoading

      })

      /////页面切换
      that.setData({
        searchshow:0,
        searchoff:1
      })



       //搜歌请求请求
    wx.request({
         url:     'https://xcx.zhongmengkeji.com/xcx/search_song/search/search.php',
        header: {  
          "Content-Type": "application/json"  
        }, 
        data: {
          unique_id:'1',
          start_time:'1/18 14:00',
          music_src_type:'1',
          keyword:this.data.searchkey,
          page:'1',
          user_id:that.data.userrid,
          sign:that.data.usersign



        },
        method: 'GET', 
        success: function(res){
          // success
          console.log(res.data)

          that.setData({
            hiddenLoading:true
          })

          ///赋值赋值

          that.setData({
            searchsongArray:res.data.data.search,
            //searchSongArrayCount:res.data.data.search.count,


          })

          console.log("请求的数组 :" + that.data.searchsongArray[0].song_name)




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




     onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: '快来这里搜你喜欢的歌了啦~', // 分享标题
      desc: '歌曲点播台,新歌、热歌、老歌、情歌,百万歌曲任你搜,想听就听听!', // 分享描述
      path: '/pages/search/search' // 分享路径

    }

  }


  
})