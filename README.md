# jox-wxapp
jox微信小程序组件，持续更新中
# 使用说明
## 一、下载安装
### 使用npm下载(推荐)

    npm install jox-wxapp --save

### or git下载并将本项目的dist复制进你的项目文件夹根目录
## 二、项目引入组件
在小程序`xxx.json`文件中加入以下代码   
  
    "usingComponents": {  
      "jox-discolour": "/components/discolour-img/index",
      "jox-tar": "/components/tar/index"  
    } 
## 三、组件
### 1.discolour-img 组件

   在小程序`xxx.wxml`文件中使用，代码示例如下：
   
```html
<jox-discolour debug="true" joxId="joxCanvas" src="/test2.png" rgb="(100,100,100)" width="100" height="100"></jox-discolour>
```
#### discolour-img属性说明
    joxId：给组件定义canvas-id的值，可不填  
    
    debug:微信开发者工具上显示不了修改后的图片，如果在开发者工具上调试请给该属性赋true值，默认为false
    
    src：png本地图片资源，不可为网络图片资源 
    
    rgb：png要转换颜色的rgb(Red、Green、Blue)值 
    
    width：转换颜色后的图片宽度，单位为rpx 
    
    hegiht：转换颜色后的图片高度，单位为rpx  
    
### 2.tar 组件

   在小程序`xxx.wxml`文件中使用，代码示例如下：
    
```html
<jox-tar tarList="{{tar}}" color="#999999" hightlight="#409CFF" selected="0" bindjoxtarselected='joxTarTap'></jox-discolour>
```
   在小程序`xxx.js`文件中使用，代码示例如下：
   
```js
//设置array
data: {
    tar: [
      "NihOn",
      "好评",
      "距离"
    ]
}
//获取组件返回的当前tar选中项
joxTarTap:function(e){
    console.log(e.detail)
}
```
#### tar属性说明
    tarList：tar展示的标题列表 
    
    color：tar标题、下划线未选中的颜色，默认为#999999
    
    hightlight：tar标题、下划线选中的颜色，默认为#409CFF
    
    selected：tar默认选中项，默认为0
    
    bindjoxtarselected：获取组件返回的当前tar选中项，绑定外部js的函数
