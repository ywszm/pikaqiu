// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"RK1b":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/*\n * \u9996\u5148\uFF0C\u6211\u4EEC\u753B\u4E00\u4E2A\u76AE\u5361\u4E18\u7684\u76AE \n */\n.skin {\n  background: #fee600;\n  min-height: 100vh;\n  position: relative;\n}\n\n/*\n * \u4E00\u53CC\u6C34\u6C6A\u6C6A\u7684\u773C\u775B\n */\n.eye {\n  border: 2px solid #000000;\n  width: 49px;\n  height: 49px;\n  position: absolute;\n  left: 50%;\n  top: 100px;\n  margin-left: -32px;\n  background: #2d2d2d;\n  border-radius: 50%;\n}\n/*\n * \u52A0\u4E2A\u6F02\u4EAE\u7684\u773C\u7403 \n */\n.eye::before {\n  content: '';\n  display: block;\n  border: 3px solid #000;\n  width: 26px;\n  height: 26px;\n  background: #ffffff;\n  border-radius: 50%;\n  position: relative;\n  left: 6px;\n  top: 1px;\n  animation: eyesMove 300ms infinite ;\n}\n.eye.left {\n  transform: translateX(-103px);\n}\n\n.eye.right {\n  transform: translateX(120px);\n}\n/*\n * \u8BA9\u773C\u775B\u52A8\u8D77\u6765\u5427\n */\n@keyframes eyesMove {\n  0%{\n    top: 1px;\n    left: 1px;\n  }\n  50%{\n    top: -1px;\n    left: 4px;\n  }\n  100% {\n    top: 1px;\n    left: 2px;\n  }\n}\n/*\n * \u7ED9\u5B83\u4E00\u4E2A\u5C0F\u9F3B\u5B50 \n */\n.nose {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 12px;\n  border-color: black transparent transparent;\n  border-radius: 12px;\n  position: absolute;\n  left: 50%;\n  top: 145px;\n  margin-left: -10px;\n  z-index: 10;\n  transform-origin: center bottom;\n  animation: wave 200ms infinite linear;\n}\n/*\n * \u8BA9\u9F3B\u5B50\u52A8\u8D77\u6765\u5427\n */\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(3deg);\n  }\n  66% {\n    transform: rotate(-3deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n/*\n * \u76AE\u5361\u4E18\u7684\u5634\u5DF4\n */\n.mouth {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  top: 170px;\n  margin-left: -100px;\n}\n.mouth .up {\n  position: relative;\n  top: -20px;\n  z-index: 1;\n}\n/*\n * \u76AE\u5361\u4E18\u7684\u5634\u5507\n */\n.mouth .up .lip {\n  border: 2px solid black;\n  height: 29px;\n  width: 84px;\n  background: #fee600;\n  border-top-color: transparent;\n  border-right-color: transparent;\n  position: absolute;\n  left: 58%;\n  margin-left: -50px;\n}\n/*\n * \u5DE6\u8FB9\u4E00\u4E2A\n */\n.mouth .up .lip.left {\n  border-radius: 0 0 0 50px;\n  transform: rotate(-18deg) translateX(-54px);;\n}\n/*\n * \u53F3\u8FB9\u4E00\u4E2A\n */\n.mouth .up .lip.right {\n  border-radius: 0 0 50px 0;\n  transform: rotate(18deg) translateX(54px);;\n  left: 50%;\n}\n/*\n * \u53EF\u7231\u7684\u5C0F\u820C\u5934 \n */\n.mouth .down .yuan1 {\n  border: 2px solid black;\n  width: 150px;\n  height: 1000px;\n  position: absolute;\n  bottom: 52px;\n  left: 50%;\n  margin-left: -75px;\n  border-radius: 75px/300px;\n  background: #9b0109;\n  overflow: hidden;\n}\n.mouth .down .yuan1 .yuan2 {\n  position: absolute;\n  width: 200px;\n  height: 300px;\n  bottom: -217px;\n  left: 50%;\n  margin-left: -100px;\n  border-radius: 100px;\n  background: #ff485f;\n}\n/*\n * \u7EA2\u7EA2\u7684\u5C0F\u8138\u86CB\n */\n.face {\n  position: absolute;\n  left: 50%;\n  border: 2px solid black;\n  width: 70px;\n  height: 70px;\n  top: 200px;\n  margin-left: -44px;\n  z-index: 3;\n}\n/*\n * \u5DE6\u8FB9\u4E00\u4E2A \n */\n.face.left {\n  transform: translateX(-140px);\n  background: #ff0000;\n  border-radius: 50%;\n}\n/*\n * \u53F3\u8FB9\u4E00\u4E2A \n */\n.face.right {\n  transform: translateX(157px);\n  background: #ff0000;\n  border-radius: 50%;\n}\n/*\n * \u597D\u4E86\uFF0C\u5230\u8FD9\u91CC\u5C31\u7ED3\u675F\u4E86\uFF0C\u8FD9\u53EA\u53EF\u7231\u7684\u76AE\u5361\u4E18\u9001\u4E2A\u4F60 \n */\n";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css2.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = document.querySelector('#demo');
var demo2 = document.querySelector('#demo2');
var n = 1;
var time = 100;
var id;
var player = {
  init: function init() {
    demo.innerText = _css.default.substring(0, n);
    demo2.innerHTML = _css.default.substring(0, n);
    player.play();
    player.bindEvents();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    n += 1;

    if (n > _css.default.length) {
      window.clearInterval(id);
      return;
    }

    demo.innerText = _css.default.substring(0, n);
    demo2.innerHTML = _css.default.substring(0, n);
    demo.scrollTop = demo.scrollHeight;
  },
  play: function play() {
    window.clearInterval(id);
    id = setInterval(player.run, time);
  },
  pause: function pause() {
    window.clearInterval(id);
  },
  slow: function slow() {
    player.pause();
    time = 100;
    player.play();
  },
  normal: function normal() {
    player.pause();
    time = 30;
    player.play();
  },
  fast: function fast() {
    player.pause();
    time = 0;
    player.play();
  }
};
player.init();
},{"./css2.js":"RK1b"}]},{},["epB2"], null)
//# sourceMappingURL=main.f339fb8e.js.map