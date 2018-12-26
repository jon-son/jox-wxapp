# jox-wxapp
jox微信小程序组件，持续更新中
# 使用说明
## 1、下载安装
### 使用npm下载(推荐)

    npm install jox-wxapp --save

### or git下载并将本项目的dist复制进你的项目文件夹根目录，目前本组件库只有discolour-img一个组件
## 2、项目引入组件
在小程序`xxx.json`文件中加入以下代码   
  
    "usingComponents": {  
      "jox-discolour": "/components/discolour-img/index"  
    } 
## 3、使用组件
在小程序`xxx.wxml`文件中使用，代码示例如下：
```html
<jox-discolour debug="true" joxId="joxCanvas" src="/test2.png" rgb="(100,100,100)" width="100" height="100"></jox-discolour>
```
## 4、组件属性说明
    joxId：给组件定义canvas-id的值，可不填  
    
    debug:微信开发者工具上显示不了修改后的图片，如果在开发者工具上调试请给该属性赋true值，默认为false
    
    src：png本地图片资源，不可为网络图片资源 
    
    rgb：png要转换颜色的rgb(Red、Green、Blue)值 
    
    width：转换颜色后的图片宽度，单位为rpx 
    
    hegiht：转换颜色后的图片高度，单位为rpx  
    
