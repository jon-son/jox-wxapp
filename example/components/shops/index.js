Component({
  externalClasses: ['jox-class'],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    //tar数组
    shopsList: {
      type: Array,
      value:[]
    },
    type:{
      type:String,
      value:""
    },
    location:{
      type: Object,
      value: {}
    }
  },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
  },
  ready:function(){
  },

  methods: {
    /*
     * 公有方法
     */
    jump_to: function (e) {
      let url =""
      let id =e.currentTarget.dataset.id

      if (this.properties.type == "shop"){
        let lat = e.currentTarget.dataset.lat
        let lng = e.currentTarget.dataset.lng
        url = '/pages/shop/shop?shopid=' + id + '&lng=' + lng + '&lat=' + lat
      } else if (this.properties.type == "coupon") {
        url = '/pages/shop_coupon/shop_coupon?shopid=' + id 
      }
      wx.navigateTo({
        url: url
      })
    }
  }
})
