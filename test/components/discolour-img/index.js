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
      value: '0'
    },
    height: {
      type: String,
      value: '0'
    },
    rgba:{
      type:String,
      value:''
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
      let windowWidth = wx.getSystemInfoSync().windowWidth

      let widthPx = (windowWidth/750) * parseInt(that.properties.width)
      let heightPx = (windowWidth/750) * parseInt(that.properties.height)
      let rgba = that.properties.rgba
      rgba = rgba.substring(1, rgba.length - 1).split(",")
      let ctx = wx.createCanvasContext(that.properties.joxId, that) //自定义组件需要在后边加this参数
      ctx.drawImage(that.properties.src, 0, 0, widthPx*2, heightPx*2)




      ctx.draw(true, function (){

        wx.canvasGetImageData(
          {
            canvasId: that.properties.joxId,
            width: widthPx*2,
            height: heightPx*2,
            success(res) {
              let data = res.data

              for (let i = 0; i < widthPx * widthPx * 16; i += 4){
                if (res.data[i] != 0 || res.data[i + 1] != 0 || res.data[i + 2] != 0 || res.data[i+3] != 0){

                  data[i] = rgba[0]
                  data[i + 1] = rgba[1]
                  data[i + 2] = rgba[2]
                  
                } 
              }
              wx.canvasPutImageData({
                canvasId: that.properties.joxId,
                width: widthPx*2,
                height: heightPx*2,
                data,
                success(res) {
                  wx.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    width: widthPx*2,
                    height: heightPx*2,
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
    this.setRGBA()
  }
})