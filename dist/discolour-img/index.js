// components/discolour-img/index.jsvar 

Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    joxId: {
      type : String,
      value:'joxCanvas'
    },
    src: {
      type : String,
      value : ''
    },
    width:{
      type:String,
      value: '200'
    },
    height: {
      type: String,
      value: '200'
    },
    rgb:{
      type:String,
      value:'(255,255,255)'
    },
    debug:{
      type:String,
      value:'false'
    }
      
  },
  data: {
    // 这里是一些组件内部数据
    imgwidth:0,
    imgheight:0,
    url:""
  },
  methods: {
    // 这里是一个自定义方法
    setRGBA() { 
      let that = this
      wx.getImageInfo({
        src: that.properties.src,
        success: res => {
          that.setData({
            imgWidth: res.width,
            imgHeight: res.height
          })
        }
      })

      let rgb = that.properties.rgb
      rgb = rgb.substring(1, rgb.length - 1).split(",")
      let ctx = wx.createCanvasContext(that.properties.joxId, that) //自定义组件需要在后边加this参数
      ctx.drawImage(that.properties.src, 0, 0, that.data.imgWidth, that.data.imgHeight)
      ctx.draw(false, function (){
        wx.canvasGetImageData(
          {   
            canvasId: that.properties.joxId,
            width: that.data.imgWidth,
            height: that.data.imgHeight,
            success(res) {
              let data1 = res.data
              for (let i = 0; i < that.data.imgWidth * that.data.imgHeight * 4; i += 4){
                if (res.data[i] != 0 || res.data[i + 1] != 0 || res.data[i + 2] != 0 || res.data[i+3] != 0){
                  data1[i] = rgb[0]
                  data1[i + 1] = rgb[1]
                  data1[i + 2] = rgb[2]
                } 
              }
              let data = new Uint8ClampedArray(data1)
              wx.canvasPutImageData({
                canvasId: that.properties.joxId,
                width: that.data.imgWidth,
                height: that.data.imgHeight,
                data,
                success(res) {
                  wx.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    width: that.data.imgWidth,
                    height: that.data.imgWidth,
                    canvasId: that.properties.joxId,
                    success(res) {
                      console.log(res)
                      that.setData({
                        url: res.tempFilePath
                      })
                    }
                  }, that)
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

  ready(){
    let that =this
    if (that.properties.debug == "true") {
      that.setData({
        url: that.properties.src
      })
    }
    that.setRGBA()
    
  }
})