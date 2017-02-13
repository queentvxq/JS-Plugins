# JS-Plugins
**Water Fall**
Use "position:absolute" and caculate the value of top

**Count Down**
set 1second Interval


Points
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

Usage
---------------

### node.js

```
$> npm install protobufjs [--save --save-prefix=~]
```

```js
var protobuf = require("protobufjs");
```

### Browsers

Development:
```
<script src="//cdn.rawgit.com/dcodeIO/protobuf.js/6.X.X/dist/protobuf.js"></script>
```

Production:
```
<script src="//cdn.rawgit.com/dcodeIO/protobuf.js/6.X.X/dist/protobuf.min.js"></script>
```

**NOTE:** Remember to replace the version tag with the exact [release](https://github.com/dcodeIO/protobuf.js/tags) your project depends upon.

The `protobuf` namespace will always be available globally / also supports AMD loaders.

Distributions
-------------

The library supports both reflection-based and code-based use cases:

1. Parsing protocol buffer definitions (.proto files) to reflection
2. Loading JSON descriptors to reflection
3. Generating static code without any reflection features

There is a suitable distribution for each of these:

|         | Gzipped | Downloads                    | How to require                  | Description
|---------|---------|------------------------------|---------------------------------|-------------
| full    | 18.5kb  | [dist][dist-full]            | `require("protobufjs")`         | All features. Works with everything.
| light   | 15.5kb  | [dist/light][dist-light]     | `require("protobufjs/light")`   | All features except tokenizer, parser and bundled common types. Works with JSON definitions, pure reflection and static code.
| minimal | 6.0kb+  | [dist/minimal][dist-minimal] | `require("protobufjs/minimal")` | Just enough to run static code. No reflection.

In case of doubt you can just use the full library.

[dist-full]: https://github.com/dcodeIO/protobuf.js/tree/master/dist
[dist-light]: https://github.com/dcodeIO/protobuf.js/tree/master/dist/light
[dist-minimal]: https://github.com/dcodeIO/protobuf.js/tree/master/dist/minimal

Examples
--------
