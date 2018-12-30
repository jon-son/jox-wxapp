// components/tar/index.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    //tar数组
    tarList: {
      type: Array,
      value: []
    },
    selected : {
      type : String,
      value : "0"
    },
    color : {
      type : String,
      value: "#999999"
    },
    hightlight: {
      type : String,
      value: "#409CFF"
    },
  },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
    sele : ""
  },
  ready: function(){
    let that = this
    that.setData({
      sele: this.properties.selected
    })
  },

  methods: {
    /*
     * 公有方法
     */
    change_tar: function (env) {
      let that = this
      let dataset = env.currentTarget.dataset
      that.setData({
        sele: dataset.id
      })
      this.triggerEvent('joxtarselected', dataset.id)
    }
  }
})