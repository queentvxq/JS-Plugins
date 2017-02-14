# JS-Plugins
**Water Fall**
Use "position:absolute" and caculate the value of top

**Count Down**
set 1second Interval


Front-end Knowleage Points
--------

* [ES6](#es6)<br />
  Generator/Promise异步
  
* [HTML5](#html5)<br />
  离线存储/Websocket兼容性
  
* [CSS3](#css3)<br />
  transform/animation/flex/垂直水平居中
  
* [HTTP](#http)<br />
  200/301/304/401/404/500/502/重定向.
  
* [Cookie/Session/Session Storage/Local Storage](#cookie)<br />
  storage.

* [Performance](#performance)<br />
  DOM/image/cdn

* [Compatibility](#compatibility)<br />
  Notes on compatibility regarding browsers and optional libraries.

* [OO/FP](#OO/FP)<br />
  difference/advantage
  
* [algorithm](#algorithm)<br />
  快排/去重
  
* [libs](#libs)<br />
  react/angular/vue/jquery/requireJS
  
ES6
-------------
Generator(生成器)异步编程解决方案(.next())
调用Generator函数,返回一个遍历器对象,具有位置记忆功能。
```js
function* helloworldGenerator(){
  yield 'hello';
  yield 'world';
  return 'ending';
}
var hw = helloworldGenerator();
```
yield语句就是暂停标志

Promise(resolve/reject)

* 1. .then() 2. .catch() ---------prototype
* 3. .finally() 4. .all() 5. .race()
* 6. .resolve() 7. .reject()


HTML5
-------------
manifest离线存储
```manifest
  CACHE MANIFEST
  #上面一句必须
  #v1.0.0
  #需要缓存的文件
  CACHE:
  a.js
  b.css
  #不需要缓存的文件
  NETWORK:
  *
  #无法访问页面
  FALLBACK:
  404.html
```
Websocket ie10+

CSS3
-------------
transform
animation
canvas
position:fixed/absolute/static/relative/inherit(ie8+)
box-sizing: content-box || border-box || inherit(ie8+\safari3.0+\chrome1.0+\ff1.0+)
水平、垂直居中的几种方法:
1.inline元素 line-height=height & text-align:center
2.flex
3.position:absolute transform:50%
4.margin:0 auto

HTTP
-------------
200:success
301:moved
302:found重定向
304:not modified
401:auth
404:not found
500:server error
502:bad gate way

Cookie etc.
-------------
cookie在浏览器和服务器间来回传递
sessionStorage和localStorage的存储空间更大
sessionStorage和localStorage有更多丰富易用的接口
sessionStorage和localStorage各自独立的存储空间
localStorage 长期存储数据，浏览器关闭后数据不丢失
sessionStorage 数据在浏览器关闭后自动删除

Compatibility
-------------
[![Sauce Test Status](https://saucelabs.com/browser-matrix/protobuf.svg)](https://saucelabs.com/u/protobuf)

设计模式
-------------
* 单例模式
* 工厂模式
* 观察者模式(发布者&订阅者)

libs
-------------
* react渲染流程
* react differ算法
* react 虚拟DOM/react 优化工作
* react native
* jquery deffer promise
* requireJS原理 模块化管理 依赖加载
