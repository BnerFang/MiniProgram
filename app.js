//app.js
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * 小程序初始化完成时会执行的生命周期函数,会在后台存活2小时
   */
  onLaunch: function () {
    console.log("小程序初始化完成：onLaunch")
    // wx.request({
    //   url: '',
    // })
    //获取微信用户信息，异步调用
    wx.getUserInfo({
      //数据拿到之后在进行回调
      success: function(res){
        console.log(res)
      }  
    })
    //模拟错误示范
    // setTimeout(function(){
    //   const err = new Error()
    //   throw err
    // },3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 界面显示出来之后会执行的生命周期函数
   */
  onShow: function (options) {
    console.log("界面显示出来：onShow")
    //判断小程序进入场景
    console.log(options)
    switch (options.scene){
      case 1001:
      break;
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("界面被隐藏时会执行：onHide")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("当程序发生错误时会执行：onError")
  }
})
