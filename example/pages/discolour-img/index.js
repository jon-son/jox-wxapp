//index.js
//获取应用实例

Page({
  data: {
    jsonData: [{
      text: "\"jox-discolour\": \"/components/discolour-img/index\"",
      tab: 0
    }],
    wxmlData: [{
      text: "<jox-discolour joxId=\"3\" src=\"/pages/discolour-img/test2.png\" rgb=\"(0, 0, 0)\" width=\"200\" height=\"200\"/>",
      tab: 0
    }],
    tableData:[
      [
        "字段","参数","描述"
      ],
      [
        "joxId", "默认值:joxCanvas", "canvasId,同页面多次调用时需要"
      ],
      [
        "src", "无", "png本地图片资源，不可为网络图片资源 "
      ],
      [
        "width", "默认值：200", "宽度，单位rpx。ps：建议宽度不低于图片的0.5倍"
      ],
      [
        "heigth", "默认值：200", "高度，单位rpx。ps：建议高度不低于图片的0.5倍"
      ],
      [
        "rgb", "默认值：(255,255,255)", "png要转换颜色的rgb(Red、Green、Blue)值"
      ],
    ]
  },
  onLoad: function() {
    console.log(this.data.jsonData[0].text)
  }
})