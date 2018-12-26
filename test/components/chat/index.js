// components/chat/index.js
const comm = require('../utils/comm.js')
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
      type: String,
      value: '0'
    },
    height: {
      type: String,
      value: '0'
    },
    rgba: {
      type: String,
      value: ''
    }

  },
  data: {
    // 这里是一些组件内部数据
    name: "黄开勇",
    img: "../../test.png",
    myimg: "../../test.png",
    downId: "",
    scrollHeight: 0,
    inputMes: "",
    isEmpty: false,
    messageLists: [
      {
        message: "踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩水水水水水水水水水水水",
        sender: 1, //1为对方，0为自己
        time: "",
        timestamp: 1545289899,
        showTime: true
      },
      {
        message: "踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩水水水水水水水水水水水",
        sender: 0, //1为对方，0为自己
        time: "",
        timestamp: 1545289999,
        showTime: true
      },
      {
        message: "踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩水水水水水水水水水水水",
        sender: 0, //1为对方，0为自己
        time: "",
        timestamp: 1545290099,
        showTime: true
      },
      {
        message: "踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩水水水水水水水水水水水",
        sender: 1, //1为对方，0为自己
        time: "",
        timestamp: 1545290199,
        showTime: true
      },
    ]
  },
  methods: {
    // 这里是一个自定义方法
    
    sendMes: function () {
      if (this.data.inputMes != "") {
        let timestamp = Date.parse(new Date())
        let sT = false
        let tT = ""
        timestamp = timestamp / 1000
        let difference = timestamp - this.data.messageLists[this.data.messageLists.length - 1].timestamp
        console.log(difference)
        if (difference > 180) {
          let stampTime = comm.timestampToTime(timestamp)
          console.log(stampTime.all)
          tT = stampTime.hm
          sT = true
        }
        let messageadd = this.data.messageLists
        messageadd[messageadd.length] = {
          message: this.data.inputMes,
          sender: 0, //1为对方，0为自己
          time: tT,
          timestamp: timestamp,
          showTime: sT
        }
        this.setData({
          inputMes: '',
          messageLists: messageadd
        })
        this.pageScrollToBottom()
      }
    },
    getInput: function (e) {
      var val = e.detail.value;
      this.setData({
        inputMes: val
      });
    },
    setName: function () {
      wx.setNavigationBarTitle({
        title: this.data.name
      })
    },
    pageScrollToBottom: function () {
      let isE = this.data.isEmpty
      if (this.data.messageLists.length != 0) {
        isE = true
      }
      let num = this.data.messageLists.length - 1
      let dId = 'down' + num
      this.setData({
        isEmpty: isE,
        downId: dId
      })
    },
    
  },

  ready() {
    let res = wx.getSystemInfoSync()
    let height = (res.windowHeight * (750 / res.windowWidth));
    this.setData({
      scrollHeight: height - 88
    })
    this.setName()
    let messageset = this.data.messageLists
    for (let i = 0; i < messageset.length; i++) {

      let stampTime = comm.timestampToTime(messageset[i].timestamp)
      let tT = stampTime.hm
      let sT = false

      if (i == 0) {
        sT = true
      }
      else {
        let difference = messageset[i].timestamp - messageset[i - 1].timestamp
        if (difference > 180) {
          sT = true
        } else {
          sT = false
        }
      }
      messageset[i].time = tT
      messageset[i].showTime = sT
    }

    this.setData({
      messageLists: messageset
    })
  }
})