// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showData: [
      {
        title: "canvas操作",
        list: [
          {
            text: "canvas表盘",
            url: "progress"
          },
          {
            text: "可变色icon",
            url: "discolour-img"
          },
          
        ]
      },
      {
        title: "导航栏",
        list: [
          {
            text: "tar上部导航栏",
            url: "tar"
          }
        ]
      },
      {
        title: "小部件",
        list: [
          {
            text: "积分面板",
            url: "score"
          },
          {
            text: "评分",
            url: "rating"
          }
        ]
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  jump_to(event) {
    let url = event.currentTarget.dataset.url
    wx.navigateTo({
      url: '/pages/' + url + "/index"
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})