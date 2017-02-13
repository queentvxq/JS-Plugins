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
  transform/animation
  
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

ES6
-------------
Generator(生成器)异步编程解决方案
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

HTML5
-------------
manifest

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
