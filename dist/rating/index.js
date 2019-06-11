// components/rating/index.js
Component({
  // 声明组件属性及默认值
  externalClasses: ['jox-class'],
  properties: {
    rating: {
      type: Number, // 必需 指定属性类型 [String, Number, Boolean, Object, Array, null(任意类型)]
      value: 10
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },

  // 组件私有和公开的方法，组件所使用的方法需在此声明
  methods: {
    changeRating(event) {

      if (this.properties.disabled) {
        return;
      }
      const max = 10;
      const num = event.currentTarget.dataset.num;
      const rating = num* 2
      this.setData({
        rating: rating
      })
      // 自定义组件事件
      this.triggerEvent('changerating', {
        rating: rating
      });
    }
  }

})