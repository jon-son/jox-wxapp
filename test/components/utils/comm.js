
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



module.exports = {
  timestampToTime
}
