const timestampToTime = timestamp => {
  const date = new Date(timestamp * 1000)
  const Y = date.getFullYear()
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
  const D = date.getDate()
  const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours())
  const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
  const s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds())
  return {
    YMD: Y + '-' + M + '-' + D,
    MD: M + '-' + D,
    hm: h + ":" + m,
    all: M + '/' + D + " " + h + ":" + m
  }
}
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const compare = (property) => {
  return function(a, b) {
    var value1 = a[property];
    var value2 = b[property];
    return value2 - value1;
  }
}
const compare_distance = (property1, property2) => {
  return function(a, b) {
    var value1 = distance(a[property1], a[property2]);
    var value2 = distance(b[property1], b[property2]);
    return value1 - value2;
  }
}

const distance = (la1, lo1) => {
  var app = getApp()
  var la2 = app.globalData.location.lat
  var lo2 = app.globalData.location.lng
  var La1 = la1 * Math.PI / 180.0;
  var La2 = la2 * Math.PI / 180.0;
  var La3 = La1 - La2;
  var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
  s = s * 6378.137;
  s = Math.round(s * 10000) / 10000;
  return s
}
const distancets =  (la1, lo1)=> {
  if (la1 == null || lo1 == null) {
    return "未设置"
  }
  var app =getApp()
  var la2 = app.globalData.location.lat
  var lo2 = app.globalData.location.lng
  var La1 = la1 * Math.PI / 180.0;
  var La2 = la2 * Math.PI / 180.0;
  var La3 = La1 - La2;
  var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
  s = s * 6378.137;
  s = Math.round(s * 10000) / 10000;
  var res = ""
  if (s < 1) {
    res = (s * 1000).toFixed(2) == 0 ? "0m" : (s * 1000).toFixed(2) + "m"
  }
  else if (s < 999) {
    res = s.toFixed(2) + "km"
  } else if (s > 999) {
    res = ">999km"
  }
  return res
}

const datetime = (time, type) => {
  var date2 = new Date(time);
  var year = date2.getFullYear();
  var mon = formatFunc(date2.getMonth() + 1);
  var day = formatFunc(date2.getDate());
  var hour = date2.getHours();
  hour = formatFunc(hour);
  var min = formatFunc(date2.getMinutes());
  var dateStr = ""
  if (type == "ALL") {
    dateStr = year + "-" + mon + '-' + day + ' ' + hour + ':' + min;
  } else if (type == "YMD") {
    dateStr = year + "-" + mon + '-' + day
  } else if (type == "HM") {
    dateStr = hour + ':' + min;
  } else if (type == "MDHM") {
    dateStr = mon + '-' + day + ' ' + hour + ':' + min;
  }
  return dateStr;
}
const formatFunc = str => { //格式化显示
  return str > 9 ? str : '0' + str
}

const age = birthday => {

  if (birthday == null || birthday == "0000-00-00 00:00:00") {
    return "0"
  } else {
    var date = new Date();
    var nowYear = date.getFullYear();
    var nowMonth = formatFunc(date.getMonth() + 1);
    var nowDay = formatFunc(date.getDate());

    var date2 = new Date(birthday);
    var birthYear = date2.getFullYear();
    var birthMonth = formatFunc(date2.getMonth() + 1);
    var birthDay = formatFunc(date2.getDate());
    var returnAge ;
    if (nowYear == birthYear) {
      returnAge = 0; //同年 则为0岁
    } else {
      var ageDiff = nowYear - birthYear; //年之差
      if (ageDiff > 0) {
        if (nowMonth == birthMonth) {
          var dayDiff = nowDay - birthDay; //日之差
          if (dayDiff < 0) {
            returnAge = ageDiff - 1;
          } else {
            returnAge = ageDiff;
          }
        } else {
          var monthDiff = nowMonth - birthMonth; //月之差
          if (monthDiff < 0) {
            returnAge = ageDiff - 1;
          } else {
            returnAge = ageDiff;
          }
        }
      } else {
        returnAge = -1; //返回-1 表示出生日期输入错误 晚于今天
      }
    }

    return returnAge; //返回周岁年龄
  }

}

const getQueryString = (url, name)=> {
  var reg = new RegExp('(^|&|/?)' + name + '=([^&|/?]*)(&|/?|$)', 'i')
  var r = url.substr(1).match(reg)
  if (r != null) {
    return r[2]
  }
  return null;
}

module.exports = {
  timestampToTime: timestampToTime,
  formatTime: formatTime,
  compare: compare,
  compare_distance: compare_distance,
  datetime: datetime,
  age: age,
  getQueryString: getQueryString,
  distancets: distancets
}