// components/parts/comment/index.js
Component({
  externalClasses: ['jox-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    listData: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    check_inf: function(e) {
      wx.navigateTo({
        url: '/pages/information/information?openid=' + e.currentTarget.id
      })
    },
    check_big_photo: function(e) {
      let img = e.currentTarget.dataset.img
      let photos = e.currentTarget.dataset.imgs
      let imgs = []
      if (photos == null) {
        imgs[0] = img
      } else {
        for (let i = 0; i < photos.length; i++) {
          imgs[i] = photos[i].url

        }
      }
      wx.previewImage({
        current: img, // 当前显示图片的http链接
        urls: imgs // 需要预览的图片http链接列表
      })
    },
  }
})