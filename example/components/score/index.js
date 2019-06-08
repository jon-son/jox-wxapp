// components/parts/score/index.js
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
    strength:{
      type:String,
      value:"0"
    },
    charm:{
      type:String,
      value:"0"
    }
  },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {

  },
  ready: function () {

  },

  methods: {
    /*
     * 公有方法
     */

  }
})