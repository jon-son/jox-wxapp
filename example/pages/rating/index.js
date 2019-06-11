// pages/rating/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jsonData: [{
      text: "\"jox-rating\": \"/components/rating/index\"",
      tab: 0
    }],
    wxmlData: [{
        text: "<jox-rating rating=\"8\" disabled=\"{{true}}\" />",
        tab: 0
      },
      {
        text: "<jox-rating rating=\"8\" bindchangerating=\"joxRatingTap\" />",
        tab: 0
      },
    ],
    tableData: [
      [
        "字段", "参数", "描述"
      ],
      [
        "rating", "默认值：5", "评分值"
      ],
      [
        "disabled", "默认值：false", "禁止点击"
      ]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  joxRatingTap(event) {
    console.log(event.detail)
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