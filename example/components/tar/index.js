// components/tar/index.js
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
    fixed:{
      type:Boolean,
      value:false
    },
    type:{
      type:String,
      value:"normal"
    }
  },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
  },


  methods: {
    /*
     * 公有方法
     */
    change_tar: function (env) {
      let that = this
      let dataset = env.currentTarget.dataset
      that.setData({
        selected: dataset.id
      })
      this.triggerEvent('joxtarselected', dataset.id)
    }
  }
})