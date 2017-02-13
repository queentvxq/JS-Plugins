# JS-Plugins
**Water Fall**
Use "position:absolute" and caculate the value of top

**Count Down**
set 1second Interval


Front-end Knowleage Points
--------

* [ES6](#es6)<br />
  Generator/Recursive(递归)

* [HTML5](#html5)<br />
  离线存储/Websocket兼容性
  
* [CSS3](#css3)<br />
  transform/animation
  
* [HTTP](#http)<br />
  200:success/301/304:not modified/401:auth/404:not found/500:server error/502:bad gate way/重定向
  
* [Cookie/Session/Session Storage/Local Storage](#cookie)<br />
  How to use the command line utility.

* [Performance](#performance)<br />
  DOM/image/cdn

* [Compatibility](#compatibility)<br />
  Notes on compatibility regarding browsers and optional libraries.

* [OO/FP](#OO/FP)<br />
  difference/advantage

ES6
-------------
Generator异步编程解决方案

```js
function* helloworldGenerator(){
  yield 'hello';
  yield 'world';
  return 'ending';
}
var hw = helloworldGenerator();
```

Compatibility
-------------
[![Sauce Test Status](https://saucelabs.com/browser-matrix/protobuf.svg)](https://saucelabs.com/u/protobuf)
