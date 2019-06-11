// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tar: [
      "全部",
      "好评",
      "距离"
    ],
    tar_id: 0,

    jsonData: [{
      text: "\"jox-tar\": \"/components/tar/index\"",
      tab: 0
    }],
    wxmlData: [{
        text: "<jox-tar tarList=\"{{tar}}\" bindjoxtarselected=\"joxTarTap\">",
        tab: 0
      },
      {
        text: "<view slot=\"tarItem\">{{tar_id}}</view>",
        tab: 4
      },
      {
        text: "</jox-tar>",
        tab: 0
      }
    ],
    jsData: [
      { 
        text:"//data设置变量",
        tab:0
      },
      {
        text: "tar: [\"全部\",\"好评\",\"距离\"],",
        tab: 0
      },{
        text: "tar_id: 0",
        tab:0
      },
      {
        text: "//设置回调函数",
        tab: 0
      },
      {
        text: "joxTarTap(event) {",
        tab: 0
      },
      {
        text: "this.setData({",
        tab: 4
      },
      {
        text: "tar_id: event.detail",
        tab: 8
      },
      {
        text: "})",
        tab: 4
      },
      {
        text:"},",
        tab:0
      }
      
    ],
    tableData: [
      [
        "字段", "参数", "描述"
      ],
      [
        "tarList", "无", "导航标题列表"
      ],
      [
        "selected", "默认值：0", "光标所在初始位置"
      ],
      [
        "color", "默认值：#999999", "字体未选择颜色。也支持rgba格式"
      ],
      [
        "hightlight", "默认值：#409CFF", "选择时颜色。也支持rgba格式"
      ],
      [
        "type", "normal/bigger", "显示类型，正常与大字显示"
      ],
      [
        "tarItem", "slot插槽", "tar导航内容的插槽"
      ]
    ]
  },
  joxTarTap(event) {
    this.setData({
      tar_id: event.detail
    })
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