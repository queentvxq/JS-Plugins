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
  
* [CSS](#css)<br />
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
  
* [compile](#compile)<br />
  webpack/gulp
  
  
JS
-------------
* 继承
* 原型链
* call apply
* ‘==’类型转换：对于基本类型Boolean，Number，String，三者之间做比较时，总是向 Number进行类型转换，然后再比较；如果有Object，那么将Object转化成这三者，再进行比较；对于null和undefined，只有 x，y分别是它们时才相同，其他都为false。
* 深拷贝
* 正则表达式

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
* 链式调用
* 1. .then()
* 2. .catch() ---------prototype
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
* Websocket ie10+
* script标签 defer & async:

CSS
-------------
* transform
* animation
* canvas
* position:fixed/absolute/static/relative/inherit(ie8+)/initial(设为默认值 ie不支持)
* box-sizing: content-box || border-box || inherit(ie8+\safari3.0+\chrome1.0+\ff1.0+)
* BFC&IFC:
> 一个页面是由很多个 Box 组成的，元素的类型和 display 属性决定了这个 Box 的类型。不同类型的 Box，会参与不同的 Formatting Context。
>> Block level的box会参与形成BFC，比如display值为block，list-item，table的元素。
>> Inline level的box会参与形成IFC，比如display值为inline，inline-table，inline-block的元素。

水平、垂直居中的几种方法:

* inline元素 line-height=height & text-align:center
* flex
* position:absolute transform:50%
* margin:0 auto

HTTP
-------------
* 1xx：指示信息--表示请求已接收，继续处理。
* 2xx：成功--表示请求已被成功接收、理解、接受。
* 3xx：重定向--要完成请求必须进行更进一步的操作。
* 4xx：客户端错误--请求有语法错误或请求无法实现。
* 5xx：服务器端错误--服务器未能实现合法的请求。

200:success
301:moved
302:found重定向
304:not modified
401:auth
403:forbidden
404:not found
500:server error
502:bad gate way

HTTP/2
HTTP/2 的目的是:
* 通过支持完整的请求与响应复用来减少延迟
* 通过有效压缩 HTTP 标头字段将协议开销降至最低
* 同时增加对请求优先级和服务器推送的支持

为达成这些目标，HTTP/2 还给我们带来了大量其他协议层面的辅助实现，例如新的流控制、错误处理和升级机制。上述几种机制虽然不是全部，但却是最重要的，每一位网络开发者都应该理解并在自己的应用中加以利用。

Cookie etc.
-------------
* cookie在浏览器和服务器间来回传递
* sessionStorage和localStorage的存储空间更大
* sessionStorage和localStorage有更多丰富易用的接口
* sessionStorage和localStorage各自独立的存储空间
* localStorage 长期存储数据，浏览器关闭后数据不丢失
* sessionStorage 数据在浏览器关闭后自动删除

Compatibility
-------------
[![Sauce Test Status](https://saucelabs.com/browser-matrix/protobuf.svg)](https://saucelabs.com/u/protobuf)

algorithm
------------
**去重**时间复杂度O(n)
* 创建一个新的数组存放结果
* 创建一个空对象 
* for循环时每次取出一个元素与对象对比，不重复：放入结果数组，同时将元素作为对象的一个属性，并设为true，存入到上一步建立的对象中

```js
 var arr = [2,5,4,3,4,6,9,18];
	var arrNew = new Array();
	var baseObj = new Object();
	for(var i=0;i<arr.length;i++){
		if(!baseObj[arr[i]]){
			arrNew.push(arr[i])
			baseObj[arr[i]] = true
		}
	}
	console.log(arrNew)//[2, 5, 4, 3, 6, 9, 18]
```

**排序**
```js
//将待排记录分成独立的两个部分，
//找出枢轴，实现枢轴左边的值都小于枢轴的值，枢轴右边都大于枢轴的值
//不断递归
function quicksort(arr,low,high){
        var pivot;
        if(low < high){
            pivot = partition(arr,low,high);
			console.log(pivot)
            quicksort(arr,low,pivot-1);
            quicksort(arr,pivot+1,high);
        }
		console.log(arr)
        return arr;
}
//找出枢轴
function partition(arr,low,high){
        var pivot = arr[low];
        while(low <= high){
            while(low <= high && arr[high] >= pivot){
                high--;
            }
            swap(arr,low,high);
            while(low <= high && arr[low] < pivot){
                low++;
            }
            swap(arr,low,high);
        }
        return low;
}
	
function swap(arr,low,high){
        var temp;
        temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
}
var afterSort = quicksort(arr,0,arr.length-1);
```
设计模式
-------------
* 单例模式
* 工厂模式
* 观察者模式(发布者&订阅者)

libs
-------------
* react渲染流程
* react differ算法:修改DOM时间复杂度O(n)/浏览器本身为O(n2)
* react 虚拟DOM/react 优化工作
* react native
* jquery deffer promise
* requireJS原理 模块化管理 依赖加载

compile
-------------
* webpack
* gulp

安全
-------------
* CSRF
* XSS
