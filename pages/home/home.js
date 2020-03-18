// pages/home/home.js
Page({

  data:{
    items:[]
  },

  handleGetUserInfo(event) {
    console.log(event)
  },
  // 监听页面的生命周期
  // 函数
  onLoad() {
    wx.request({
      url: 'https://code.aliyun.com/598254259/AndroidGuide/raw/master/txt/index/android.txt',
      success:(res) =>{
        console.log(res)
        const data = res.data.items;
        this.setData({
          items: data
        })
      }
    })
  
  },
  // 页面初次渲染完成时
  onReady() {

  },
  // 页面显示时
  onShow() {

  },
  // 页面隐藏时
  onHide() {

  },
  onUnload() {

  },
  //监听页面滚动
  onPageScroll(obj){

  },
  //监听页面滚动到底部
  onReachBottom(){

  },
  //下拉刷新监听事件
  onPullDownRefresh(){

  }
  
})