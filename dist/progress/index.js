// components/progress/index.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    size: {
      type: Number,
      value: 408
    },
    language: {
      type: Number,
      value: 0
    },
    colorBg: {
      type: String,
      value: "#000000"
    },
    long: {
      type: Number,
      value: 10
    },
    start: {
      type: Number,
      value: 0
    },
    end: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //控制progress
    countTimer: null, // 设置 定时器
    count: 0,
    colors: ['#35ECAC', '#d8d528', '#e27729', '#e3224f', '#c707ea', '#8d00e7'],
    color: '#35ECAC',
    status1: ['优', '良', '轻度', '中度', '重度', '严重'],
    status2: ['Excellent', 'Good', 'Light', 'Moderate', 'Severe', 'Serious'],
    index: 0,
    pm: 0
  },
  observers: {
    'end': function(end) {
      this.setData({
        count: this.properties.start 
      })
      clearInterval(this.data.countTimer)
      this.startProgress(this.properties.start, this.properties.end);
    }
  },
  ready() {
    this.drawProgressbg();

  },
  /**
   * 组件的方法列表
   */
  methods: {
    pmtocolor(pm) {
      let color = ""
      let status = ""
      let language = this.properties.language
      if (pm <= 50 && pm >= 0) {
        color = this.data.colors[0]
        status = 0
      } else if (pm <= 100 && pm >= 51) {
        color = this.data.colors[1]
        status = 1
      } else if (pm <= 150 && pm >= 101) {
        color = this.data.colors[2]
        status = 2
      } else if (pm <= 200 && pm >= 151) {
        color = this.data.colors[3]
        status = 3
      } else if (pm <= 300 && pm >= 201) {
        color = this.data.colors[4]
        status = 4
      } else if (pm >= 300) {
        color = this.data.colors[5]
        status = 5
      }
      return [color, status]
    },
    rpxtopx(rpx) {
      let px = rpx / 750 * wx.getSystemInfoSync().windowWidth
      return px
    },
    device() {
      let device = wx.getSystemInfoSync()
      return {
        system: device.system.split(" ")[0],
        width: device.windowWidth
      }
    },

    drawProgressbg() {

      var context = wx.createCanvasContext('canvasProgressbg', this);
      var start = 0.5 * Math.PI;
      var point = {
        x: this.rpxtopx(this.properties.size / 2 + 25),
        y: this.rpxtopx(this.properties.size / 2 + 25)
      };
      var size = this.rpxtopx(this.properties.size + 50);
      let end = 0;
      var radius = this.rpxtopx(this.properties.size / 2 - this.properties.long);
      for (var i = 1; i < 351; i++) {
        context.beginPath();
        if (i % 2 == 0) {
          end = i / 350 * 2 * Math.PI + 0.5 * Math.PI;
          context.setStrokeStyle('rgba(0,0,0,0)');
          context.setLineWidth(this.properties.long + 2);

        } else {
          end = (i - 0.5) / 350 * 2 * Math.PI + 0.5 * Math.PI;
          context.setStrokeStyle(this.properties.colorBg);
          context.setLineWidth(this.properties.long);
        }

        context.arc(point.x, point.y, radius, start, end, false);
        context.stroke();
        start = end;
      }
      let translates = []
      let rotates = []
      let texts = []
      let device = this.device()
      let system = device.system
      let width = device.width
      console.log(size)

 
        translates.push([(size / 229) * 110.5, (size / 229) * 227])
        translates.push([(size / 229) * 41, (size / 229) * 188])
        translates.push([(size / 229) * 11, (size / 229) * 104.5])
        translates.push([(size / 229) * 56, (size / 229) *  28])
        translates.push([(size / 229) * 146.5, (size / 229) * 16])
        translates.push([(size / 229) * 212, (size / 229) * 78.5])
        translates.push([(size / 229) * 203, (size / 229) * 170])
        rotates.push(0 * Math.PI / 180)
        rotates.push(230 * Math.PI / 180)
        rotates.push(282 * Math.PI / 180)
        rotates.push(332 * Math.PI / 180)
        rotates.push(22 * Math.PI / 180)
        rotates.push(78 * Math.PI / 180)
        rotates.push(129 * Math.PI / 180)
      texts.push('0')
      texts.push('50')
      texts.push('100')
      texts.push('150')
      texts.push('200')
      texts.push('250')
      texts.push('300')

      for (let i = 0; i < texts.length; i++) {
        this.addFont(context, translates[i], rotates[i], texts[i])
      }

      context.draw()

    },
    addFont(context, translate, rotate, fillText) {
      context.save()
      context.translate(translate[0], translate[1]);
      context.rotate(rotate);
      context.setFillStyle(this.properties.colorBg);
      context.setFontSize(12);
      context.fillText(fillText, 0, 0);
      context.restore();
    },

    /**
     * 画progress进度
     */
    drawCircle: function(step) {

      // 使用 wx.createContext 获取绘图上下文 context
      var context = wx.createCanvasContext('canvasProgress', this);
      let color = this.pmtocolor(step)[0]

      var start = 0.5 * Math.PI;
      var point = {
        x: this.rpxtopx(this.properties.size / 2 + 25),
        y: this.rpxtopx(this.properties.size / 2 + 25)
      };
      let end = 0;

      var radius = this.rpxtopx(this.properties.size / 2 - this.properties.long);
      for (var i = 1; i < step + 1; i++) {
        context.beginPath();
        if (i % 2 == 0) {
          end = i / 350 * 2 * Math.PI + 0.5 * Math.PI;
          context.setStrokeStyle('rgba(0,0,0,0)');
          context.setLineWidth(this.properties.long + 2);
        } else {
          end = (i - 0.5) / 350 * 2 * Math.PI + 0.5 * Math.PI;
          context.setStrokeStyle(color);
          context.setLineWidth(this.properties.long);
        }
        context.arc(point.x, point.y, radius, start, end, false);
        context.stroke();
        context.save()
        context.restore();
        start = end;
      }

      context.draw();



    },
    /**
     * 开始progress
     */
    startProgress(start, end) {

      let count = this.data.count
      if (start < end) {
        this.setData({
          index: this.pmtocolor(end)[1],
          color: this.pmtocolor(end)[0],
          countTimer: setInterval(res => {
            if (count <  end) {
              this.drawCircle(count)

              if (end - count > 10) {
                count = count + 10;
              } else {
                count = count + 1;
              }
            }
          }, 10)
        })
      } else if (start > end) {
        this.setData({
          color: this.pmtocolor(end)[0],
          index: this.pmtocolor(end)[1],
          countTimer: setInterval(res => {
            if (count > end) {
              this.drawCircle(count)
              if (count - end > 10) {
                count = count - 10;
              } else {
                count = count - 1;
              }
              
            }
          }, 10)
        })
      }

    }

  }
})