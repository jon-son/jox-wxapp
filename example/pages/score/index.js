// pages/score/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jsonData: [{
      text: "\"jox-score\": \"/components/score/index\"",
      tab: 0
    }],
    wxmlData: [{
      text: "<jox-score scoreData=\"{{scoreData}}\"  />",
        tab: 0
      }
    ],
    tableData: [
      [
        "字段", "参数", "描述"
      ],
      [
        "type", "默认值:left", "朝向位置"
      ],
      [
        "scoreData", "无", "积分数组，包含：title,score"
      ]
    ],
    scoreData:[
      {
        title:"积分1",
        score:100
      },
      {
        title: "积分2",
        score: 300
      }
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