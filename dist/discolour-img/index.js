// components/discolour-img/index.jsvar 

Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    joxId: {
      type: String,
      value: 'joxCanvas'
    },
    src: {
      type: String,
      value: ''
    },
    width: {
      type: Number,
      value: 200
    },
    height: {
      type: Number,
      value: 200
    },
    rgb: {
      type: String,
      value: '(255,255,255)'
    }

  },
  data: {
    // 这里是一些组件内部数据
    hiden: true
  },
  methods: {
    rpxTopx(rw,rh) {
      let system = wx.getSystemInfoSync()
      let windowWidth = system.windowWidth
      let pw = rw / 750 * windowWidth
      let ph = rh / 750 * windowWidth
      return {"pw":pw,"ph":ph}
    },


    //设置像素
    setRGBA(imgWidth, imgHeight) {
      let that = this
      let rgb = that.properties.rgb
      rgb = rgb.substring(1, rgb.length - 1).split(",")

      let ctx = wx.createCanvasContext(that.properties.joxId, that) //自定义组件需要在后边加this参数
      let system = wx.getSystemInfoSync()
      let windowWidth = system.windowWidth
      imgWidth = Math.floor(imgWidth / 750 * windowWidth)
      imgHeight = Math.floor(imgHeight / 750 * windowWidth)
      ctx.drawImage(that.properties.src, 0, 0, imgWidth, imgHeight)
      ctx.draw(true, function() {
        wx.canvasGetImageData({
            canvasId: that.properties.joxId,
            width: imgWidth,
            height: imgHeight,
            success(res) {
              let data1 = res.data
              for (let i = 0; i < imgWidth * imgHeight * 4; i += 4) {
                if (res.data[i] != 0 || res.data[i + 1] != 0 || res.data[i + 2] != 0 || res.data[i + 3] != 0) {
                  data1[i] = rgb[0]
                  data1[i + 1] = rgb[1]
                  data1[i + 2] = rgb[2]
                }
              }
              let data = new Uint8ClampedArray(data1)
              wx.canvasPutImageData({
                canvasId: that.properties.joxId,
                width: imgWidth,
                height: imgHeight,
                data,
                success(res) {
                  console.log(res)
                  that.setData({
                    hiden: false
                  })
                }
              }, that)

            },
            fail(res) {
              console.log(res) // 100
            }
          },
          that)
      })
    }
  },

  ready() {
    let that = this
    if (that.properties.debug == "true") {
      that.setData({
        url: that.properties.src
      })
    }
    that.setRGBA(that.properties.width, that.properties.height)

  }
})