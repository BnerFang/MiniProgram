// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "我来啦，你在哪啊？？？"
  },
  /**
   * 监听按钮点击事件
   */
  onClicke() {
    this.setData (
      {
        message: "来啦，别着急。"
      }
    )
  }
})