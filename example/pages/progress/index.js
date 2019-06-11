// pages/progress/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start:0,
    end:0,
    timer:null,
    jsonData: [{
      text: "\"jox-progress\": \"/components/progress/index\"",
      tab: 0
    }],
    wxmlData: [{
      text: "<jox-progress size=\"408\" colorBg=\"rgba(255,255,255,0.61)\" language=\"1\" long=\"12\" start=\"0\" end=\"150\"/>",
      tab: 0
    },
      {
        text: "<image slot=\"logo\" src=\"/pages/progress/jox_logo.png\" class=\"logo\"></image>",
        tab: 4
      },
      {
        text: "</jox-progress>",
        tab: 0
      }
    
    ],
    tableData: [
      [
        "字段", "参数", "描述"
      ],
      [
        "size", "默认值:408", "宽度or高度大小，单位rpx"
      ],
      [
        "language", "默认值：0", "内置语言，0：中文，1：英文"
      ],
      [
        "colorBg", "默认值：#000000", "显示的表盘颜色。也支持rgba格式"
      ],
      [
        "long", "默认值：10", "表盘针长度"
      ],
      [
        "start", "默认值：0", "开始的值"
      ],
      [
        "end", "默认值：0", "结束的值"
      ],
      [
        "logo", "slot插槽", "logo的插槽"
      ]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  changePM(){
    let that = this
    that.setData({
      timer:setInterval(res=>{
        that.setData({
          start:that.data.end,
          end: Math.floor((Math.random() * 350) + 1)
        })
      },2000)
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.changePM()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearInterval(this.data.timer)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.data.timer)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})