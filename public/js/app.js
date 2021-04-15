/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Example Component")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm._v(
                "\n                    I'm an example component.\n                "
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.common.dev.js":
/*!*************************************************!*\
  !*** ./node_modules/vue/dist/vue.common.dev.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.12
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (!config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (!isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (!config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (!(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.12';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (!stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if (options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (i > pos || !tagName &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /\s+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anything as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if (options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if (name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (el.children.length !== 1 || ast.type !== 1) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (name === 'v-slot' || name[0] === '#') {
            checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stripped = exp.replace(stripStringRE, '');
  var keywordMatch = stripped.match(unaryOperatorsRE);
  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

function checkFunctionParameterExpression (exp, text, warn, range) {
  try {
    new Function(exp, '');
  } catch (e) {
    warn(
      "invalid function parameter expression: " + (e.message) + " in\n\n" +
      "    " + exp + "\n\n" +
      "  Raw expression: " + (text.trim()) + "\n",
      range
    );
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (!template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./vue.common.dev.js */ "./node_modules/vue/dist/vue.common.dev.js")
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// require('./bootstrap');
__webpack_require__(/*! ./main */ "./resources/js/main.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', __webpack_require__(/*! ./components/ExampleComponent.vue */ "./resources/js/components/ExampleComponent.vue")["default"]);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: '#app'
});

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony import */ var _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExampleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports;}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==_typeof(e)&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e){n.d(i,r,function(t){return e[t];}.bind(null,r));}return i;},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"];}:function(){return e;};return n.d(t,"a",t),t;},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t);},n.p="",n(n.s=146);}([function(e,t,n){(function(e){e.exports=function(){"use strict";var t,i;function r(){return t.apply(null,arguments);}function a(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e);}function o(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e);}function l(e){return void 0===e;}function s(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e);}function d(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e);}function u(e,t){var n,i=[];for(n=0;n<e.length;++n){i.push(t(e[n],n));}return i;}function c(e,t){return Object.prototype.hasOwnProperty.call(e,t);}function h(e,t){for(var n in t){c(t,n)&&(e[n]=t[n]);}return c(t,"toString")&&(e.toString=t.toString),c(t,"valueOf")&&(e.valueOf=t.valueOf),e;}function p(e,t,n,i){return Yt(e,t,n,i,!0).utc();}function f(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf;}function m(e){if(null==e._isValid){var t=f(e),n=i.call(t.parsedDateParts,function(e){return null!=e;}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return r;e._isValid=r;}return e._isValid;}function g(e){var t=p(NaN);return null!=e?h(f(t),e):f(t).userInvalidated=!0,t;}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,i=0;i<n;i++){if(i in t&&e.call(this,t[i],i,t))return!0;}return!1;};var _=r.momentProperties=[];function y(e,t){var n,i,r;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=f(t)),l(t._locale)||(e._locale=t._locale),_.length>0)for(n=0;n<_.length;n++){i=_[n],l(r=t[i])||(e[i]=r);}return e;}var v=!1;function M(e){y(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===v&&(v=!0,r.updateOffset(this),v=!1);}function b(e){return e instanceof M||null!=e&&null!=e._isAMomentObject;}function w(e){return e<0?Math.ceil(e)||0:Math.floor(e);}function L(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=w(t)),n;}function D(e,t,n){var i,r=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),o=0;for(i=0;i<r;i++){(n&&e[i]!==t[i]||!n&&L(e[i])!==L(t[i]))&&o++;}return o+a;}function T(e){!1===r.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e);}function k(e,t){var n=!0;return h(function(){if(null!=r.deprecationHandler&&r.deprecationHandler(null,e),n){for(var i,a=[],o=0;o<arguments.length;o++){if(i="","object"==_typeof(arguments[o])){for(var l in i+="\n["+o+"] ",arguments[0]){i+=l+": "+arguments[0][l]+", ";}i=i.slice(0,-2);}else i=arguments[o];a.push(i);}T(e+"\nArguments: "+Array.prototype.slice.call(a).join("")+"\n"+new Error().stack),n=!1;}return t.apply(this,arguments);},t);}var S,x={};function Y(e,t){null!=r.deprecationHandler&&r.deprecationHandler(e,t),x[e]||(T(t),x[e]=!0);}function E(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e);}function C(e,t){var n,i=h({},e);for(n in t){c(t,n)&&(o(e[n])&&o(t[n])?(i[n]={},h(i[n],e[n]),h(i[n],t[n])):null!=t[n]?i[n]=t[n]:delete i[n]);}for(n in e){c(e,n)&&!c(t,n)&&o(e[n])&&(i[n]=h({},i[n]));}return i;}function H(e){null!=e&&this.set(e);}r.suppressDeprecationWarnings=!1,r.deprecationHandler=null,S=Object.keys?Object.keys:function(e){var t,n=[];for(t in e){c(e,t)&&n.push(t);}return n;};var P={};function O(e,t){var n=e.toLowerCase();P[n]=P[n+"s"]=P[t]=e;}function A(e){return"string"==typeof e?P[e]||P[e.toLowerCase()]:void 0;}function I(e){var t,n,i={};for(n in e){c(e,n)&&(t=A(n))&&(i[t]=e[n]);}return i;}var R={};function j(e,t){R[e]=t;}function F(e,t,n){var i=""+Math.abs(e),r=t-i.length,a=e>=0;return(a?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+i;}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,W=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,z={},B={};function V(e,t,n,i){var r=i;"string"==typeof i&&(r=function r(){return this[i]();}),e&&(B[e]=r),t&&(B[t[0]]=function(){return F(r.apply(this,arguments),t[1],t[2]);}),n&&(B[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),e);});}function G(e,t){return e.isValid()?(t=U(t,e.localeData()),z[t]=z[t]||function(e){var t,n,i,r=e.match(N);for(t=0,n=r.length;t<n;t++){B[r[t]]?r[t]=B[r[t]]:r[t]=(i=r[t]).match(/\[[\s\S]/)?i.replace(/^\[|\]$/g,""):i.replace(/\\/g,"");}return function(t){var i,a="";for(i=0;i<n;i++){a+=E(r[i])?r[i].call(t,e):r[i];}return a;};}(t),z[t](e)):e.localeData().invalidDate();}function U(e,t){var n=5;function i(e){return t.longDateFormat(e)||e;}for(W.lastIndex=0;n>=0&&W.test(e);){e=e.replace(W,i),W.lastIndex=0,n-=1;}return e;}var Z=/\d/,q=/\d\d/,X=/\d{3}/,J=/\d{4}/,$=/[+-]?\d{6}/,K=/\d\d?/,Q=/\d\d\d\d?/,ee=/\d\d\d\d\d\d?/,te=/\d{1,3}/,ne=/\d{1,4}/,ie=/[+-]?\d{1,6}/,re=/\d+/,ae=/[+-]?\d+/,oe=/Z|[+-]\d\d:?\d\d/gi,le=/Z|[+-]\d\d(?::?\d\d)?/gi,se=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,de={};function ue(e,t,n){de[e]=E(t)?t:function(e,i){return e&&n?n:t;};}function ce(e,t){return c(de,e)?de[e](t._strict,t._locale):new RegExp(he(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,i,r){return t||n||i||r;})));}function he(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");}var pe={};function fe(e,t){var n,i=t;for("string"==typeof e&&(e=[e]),s(t)&&(i=function i(e,n){n[t]=L(e);}),n=0;n<e.length;n++){pe[e[n]]=i;}}function me(e,t){fe(e,function(e,n,i,r){i._w=i._w||{},t(e,i._w,i,r);});}function ge(e,t,n){null!=t&&c(pe,e)&&pe[e](t,n._a,n,e);}var _e=0,ye=1,ve=2,Me=3,be=4,we=5,Le=6,De=7,Te=8;function ke(e){return Se(e)?366:365;}function Se(e){return e%4==0&&e%100!=0||e%400==0;}V("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e;}),V(0,["YY",2],0,function(){return this.year()%100;}),V(0,["YYYY",4],0,"year"),V(0,["YYYYY",5],0,"year"),V(0,["YYYYYY",6,!0],0,"year"),O("year","y"),j("year",1),ue("Y",ae),ue("YY",K,q),ue("YYYY",ne,J),ue("YYYYY",ie,$),ue("YYYYYY",ie,$),fe(["YYYYY","YYYYYY"],_e),fe("YYYY",function(e,t){t[_e]=2===e.length?r.parseTwoDigitYear(e):L(e);}),fe("YY",function(e,t){t[_e]=r.parseTwoDigitYear(e);}),fe("Y",function(e,t){t[_e]=parseInt(e,10);}),r.parseTwoDigitYear=function(e){return L(e)+(L(e)>68?1900:2e3);};var xe,Ye=Ee("FullYear",!0);function Ee(e,t){return function(n){return null!=n?(He(this,e,n),r.updateOffset(this,t),this):Ce(this,e);};}function Ce(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN;}function He(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&Se(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n));}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,i=(t%(n=12)+n)%n;return e+=(t-i)/12,1===i?Se(e)?29:28:31-i%7%2;}xe=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t){if(this[t]===e)return t;}return-1;},V("M",["MM",2],"Mo",function(){return this.month()+1;}),V("MMM",0,0,function(e){return this.localeData().monthsShort(this,e);}),V("MMMM",0,0,function(e){return this.localeData().months(this,e);}),O("month","M"),j("month",8),ue("M",K),ue("MM",K,q),ue("MMM",function(e,t){return t.monthsShortRegex(e);}),ue("MMMM",function(e,t){return t.monthsRegex(e);}),fe(["M","MM"],function(e,t){t[ye]=L(e)-1;}),fe(["MMM","MMMM"],function(e,t,n,i){var r=n._locale.monthsParse(e,i,n._strict);null!=r?t[ye]=r:f(n).invalidMonth=e;});var Oe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ae="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Ie="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Re(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=L(t);else if(!s(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e;}function je(e){return null!=e?(Re(this,e),r.updateOffset(this,!0),this):Ce(this,"Month");}var Fe=se,Ne=se;function We(){function e(e,t){return t.length-e.length;}var t,n,i=[],r=[],a=[];for(t=0;t<12;t++){n=p([2e3,t]),i.push(this.monthsShort(n,"")),r.push(this.months(n,"")),a.push(this.months(n,"")),a.push(this.monthsShort(n,""));}for(i.sort(e),r.sort(e),a.sort(e),t=0;t<12;t++){i[t]=he(i[t]),r[t]=he(r[t]);}for(t=0;t<24;t++){a[t]=he(a[t]);}this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i");}function ze(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t;}function Be(e,t,n){var i=7+t-n,r=(7+ze(e,0,i).getUTCDay()-t)%7;return-r+i-1;}function Ve(e,t,n,i,r){var a,o,l=(7+n-i)%7,s=Be(e,i,r),d=1+7*(t-1)+l+s;return d<=0?o=ke(a=e-1)+d:d>ke(e)?(a=e+1,o=d-ke(e)):(a=e,o=d),{year:a,dayOfYear:o};}function Ge(e,t,n){var i,r,a=Be(e.year(),t,n),o=Math.floor((e.dayOfYear()-a-1)/7)+1;return o<1?(r=e.year()-1,i=o+Ue(r,t,n)):o>Ue(e.year(),t,n)?(i=o-Ue(e.year(),t,n),r=e.year()+1):(r=e.year(),i=o),{week:i,year:r};}function Ue(e,t,n){var i=Be(e,t,n),r=Be(e+1,t,n);return(ke(e)-i+r)/7;}V("w",["ww",2],"wo","week"),V("W",["WW",2],"Wo","isoWeek"),O("week","w"),O("isoWeek","W"),j("week",5),j("isoWeek",5),ue("w",K),ue("ww",K,q),ue("W",K),ue("WW",K,q),me(["w","ww","W","WW"],function(e,t,n,i){t[i.substr(0,1)]=L(e);}),V("d",0,"do","day"),V("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e);}),V("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e);}),V("dddd",0,0,function(e){return this.localeData().weekdays(this,e);}),V("e",0,0,"weekday"),V("E",0,0,"isoWeekday"),O("day","d"),O("weekday","e"),O("isoWeekday","E"),j("day",11),j("weekday",11),j("isoWeekday",11),ue("d",K),ue("e",K),ue("E",K),ue("dd",function(e,t){return t.weekdaysMinRegex(e);}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e);}),ue("dddd",function(e,t){return t.weekdaysRegex(e);}),me(["dd","ddd","dddd"],function(e,t,n,i){var r=n._locale.weekdaysParse(e,i,n._strict);null!=r?t.d=r:f(n).invalidWeekday=e;}),me(["d","e","E"],function(e,t,n,i){t[i]=L(e);});var Ze="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),qe="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Xe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Je=se,$e=se,Ke=se;function Qe(){function e(e,t){return t.length-e.length;}var t,n,i,r,a,o=[],l=[],s=[],d=[];for(t=0;t<7;t++){n=p([2e3,1]).day(t),i=this.weekdaysMin(n,""),r=this.weekdaysShort(n,""),a=this.weekdays(n,""),o.push(i),l.push(r),s.push(a),d.push(i),d.push(r),d.push(a);}for(o.sort(e),l.sort(e),s.sort(e),d.sort(e),t=0;t<7;t++){l[t]=he(l[t]),s[t]=he(s[t]),d[t]=he(d[t]);}this._weekdaysRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i");}function et(){return this.hours()%12||12;}function tt(e,t){V(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t);});}function nt(e,t){return t._meridiemParse;}V("H",["HH",2],0,"hour"),V("h",["hh",2],0,et),V("k",["kk",2],0,function(){return this.hours()||24;}),V("hmm",0,0,function(){return""+et.apply(this)+F(this.minutes(),2);}),V("hmmss",0,0,function(){return""+et.apply(this)+F(this.minutes(),2)+F(this.seconds(),2);}),V("Hmm",0,0,function(){return""+this.hours()+F(this.minutes(),2);}),V("Hmmss",0,0,function(){return""+this.hours()+F(this.minutes(),2)+F(this.seconds(),2);}),tt("a",!0),tt("A",!1),O("hour","h"),j("hour",13),ue("a",nt),ue("A",nt),ue("H",K),ue("h",K),ue("k",K),ue("HH",K,q),ue("hh",K,q),ue("kk",K,q),ue("hmm",Q),ue("hmmss",ee),ue("Hmm",Q),ue("Hmmss",ee),fe(["H","HH"],Me),fe(["k","kk"],function(e,t,n){var i=L(e);t[Me]=24===i?0:i;}),fe(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e;}),fe(["h","hh"],function(e,t,n){t[Me]=L(e),f(n).bigHour=!0;}),fe("hmm",function(e,t,n){var i=e.length-2;t[Me]=L(e.substr(0,i)),t[be]=L(e.substr(i)),f(n).bigHour=!0;}),fe("hmmss",function(e,t,n){var i=e.length-4,r=e.length-2;t[Me]=L(e.substr(0,i)),t[be]=L(e.substr(i,2)),t[we]=L(e.substr(r)),f(n).bigHour=!0;}),fe("Hmm",function(e,t,n){var i=e.length-2;t[Me]=L(e.substr(0,i)),t[be]=L(e.substr(i));}),fe("Hmmss",function(e,t,n){var i=e.length-4,r=e.length-2;t[Me]=L(e.substr(0,i)),t[be]=L(e.substr(i,2)),t[we]=L(e.substr(r));});var it,rt=Ee("Hours",!0),at={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Ae,monthsShort:Ie,week:{dow:0,doy:6},weekdays:Ze,weekdaysMin:Xe,weekdaysShort:qe,meridiemParse:/[ap]\.?m?\.?/i},ot={},lt={};function st(e){return e?e.toLowerCase().replace("_","-"):e;}function dt(t){var i=null;if(!ot[t]&&void 0!==e&&e&&e.exports)try{i=it._abbr,n(159)("./"+t),ut(i);}catch(e){}return ot[t];}function ut(e,t){var n;return e&&((n=l(t)?ht(e):ct(e,t))?it=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),it._abbr;}function ct(e,t){if(null!==t){var n,i=at;if(t.abbr=e,null!=ot[e])Y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=ot[e]._config;else if(null!=t.parentLocale)if(null!=ot[t.parentLocale])i=ot[t.parentLocale]._config;else{if(null==(n=dt(t.parentLocale)))return lt[t.parentLocale]||(lt[t.parentLocale]=[]),lt[t.parentLocale].push({name:e,config:t}),null;i=n._config;}return ot[e]=new H(C(i,t)),lt[e]&&lt[e].forEach(function(e){ct(e.name,e.config);}),ut(e),ot[e];}return delete ot[e],null;}function ht(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return it;if(!a(e)){if(t=dt(e))return t;e=[e];}return function(e){for(var t,n,i,r,a=0;a<e.length;){for(r=st(e[a]).split("-"),t=r.length,n=(n=st(e[a+1]))?n.split("-"):null;t>0;){if(i=dt(r.slice(0,t).join("-")))return i;if(n&&n.length>=t&&D(r,n,!0)>=t-1)break;t--;}a++;}return it;}(e);}function pt(e){var t,n=e._a;return n&&-2===f(e).overflow&&(t=n[ye]<0||n[ye]>11?ye:n[ve]<1||n[ve]>Pe(n[_e],n[ye])?ve:n[Me]<0||n[Me]>24||24===n[Me]&&(0!==n[be]||0!==n[we]||0!==n[Le])?Me:n[be]<0||n[be]>59?be:n[we]<0||n[we]>59?we:n[Le]<0||n[Le]>999?Le:-1,f(e)._overflowDayOfYear&&(t<_e||t>ve)&&(t=ve),f(e)._overflowWeeks&&-1===t&&(t=De),f(e)._overflowWeekday&&-1===t&&(t=Te),f(e).overflow=t),e;}function ft(e,t,n){return null!=e?e:null!=t?t:n;}function mt(e){var t,n,i,a,o,l=[];if(!e._d){for(i=function(e){var t=new Date(r.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()];}(e),e._w&&null==e._a[ve]&&null==e._a[ye]&&function(e){var t,n,i,r,a,o,l,s;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)a=1,o=4,n=ft(t.GG,e._a[_e],Ge(Et(),1,4).year),i=ft(t.W,1),((r=ft(t.E,1))<1||r>7)&&(s=!0);else{a=e._locale._week.dow,o=e._locale._week.doy;var d=Ge(Et(),a,o);n=ft(t.gg,e._a[_e],d.year),i=ft(t.w,d.week),null!=t.d?((r=t.d)<0||r>6)&&(s=!0):null!=t.e?(r=t.e+a,(t.e<0||t.e>6)&&(s=!0)):r=a;}i<1||i>Ue(n,a,o)?f(e)._overflowWeeks=!0:null!=s?f(e)._overflowWeekday=!0:(l=Ve(n,i,r,a,o),e._a[_e]=l.year,e._dayOfYear=l.dayOfYear);}(e),null!=e._dayOfYear&&(o=ft(e._a[_e],i[_e]),(e._dayOfYear>ke(o)||0===e._dayOfYear)&&(f(e)._overflowDayOfYear=!0),n=ze(o,0,e._dayOfYear),e._a[ye]=n.getUTCMonth(),e._a[ve]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t){e._a[t]=l[t]=i[t];}for(;t<7;t++){e._a[t]=l[t]=null==e._a[t]?2===t?1:0:e._a[t];}24===e._a[Me]&&0===e._a[be]&&0===e._a[we]&&0===e._a[Le]&&(e._nextDay=!0,e._a[Me]=0),e._d=(e._useUTC?ze:function(e,t,n,i,r,a,o){var l=new Date(e,t,n,i,r,a,o);return e<100&&e>=0&&isFinite(l.getFullYear())&&l.setFullYear(e),l;}).apply(null,l),a=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Me]=24),e._w&&void 0!==e._w.d&&e._w.d!==a&&(f(e).weekdayMismatch=!0);}}var gt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yt=/Z|[+-]\d\d(?::?\d\d)?/,vt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Mt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],bt=/^\/?Date\((\-?\d+)/i;function wt(e){var t,n,i,r,a,o,l=e._i,s=gt.exec(l)||_t.exec(l);if(s){for(f(e).iso=!0,t=0,n=vt.length;t<n;t++){if(vt[t][1].exec(s[1])){r=vt[t][0],i=!1!==vt[t][2];break;}}if(null==r)return void(e._isValid=!1);if(s[3]){for(t=0,n=Mt.length;t<n;t++){if(Mt[t][1].exec(s[3])){a=(s[2]||" ")+Mt[t][0];break;}}if(null==a)return void(e._isValid=!1);}if(!i&&null!=a)return void(e._isValid=!1);if(s[4]){if(!yt.exec(s[4]))return void(e._isValid=!1);o="Z";}e._f=r+(a||"")+(o||""),St(e);}else e._isValid=!1;}var Lt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Dt(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t;}var Tt={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function kt(e){var t,n,i,r,a,o,l,s=Lt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(s){var d=(t=s[4],n=s[3],i=s[2],r=s[5],a=s[6],o=s[7],l=[Dt(t),Ie.indexOf(n),parseInt(i,10),parseInt(r,10),parseInt(a,10)],o&&l.push(parseInt(o,10)),l);if(!function(e,t,n){if(e){var i=qe.indexOf(e),r=new Date(t[0],t[1],t[2]).getDay();if(i!==r)return f(n).weekdayMismatch=!0,n._isValid=!1,!1;}return!0;}(s[1],d,e))return;e._a=d,e._tzm=function(e,t,n){if(e)return Tt[e];if(t)return 0;var i=parseInt(n,10),r=i%100,a=(i-r)/100;return 60*a+r;}(s[8],s[9],s[10]),e._d=ze.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),f(e).rfc2822=!0;}else e._isValid=!1;}function St(e){if(e._f!==r.ISO_8601){if(e._f!==r.RFC_2822){e._a=[],f(e).empty=!0;var t,n,i,a,o,l=""+e._i,s=l.length,d=0;for(i=U(e._f,e._locale).match(N)||[],t=0;t<i.length;t++){a=i[t],(n=(l.match(ce(a,e))||[])[0])&&((o=l.substr(0,l.indexOf(n))).length>0&&f(e).unusedInput.push(o),l=l.slice(l.indexOf(n)+n.length),d+=n.length),B[a]?(n?f(e).empty=!1:f(e).unusedTokens.push(a),ge(a,n,e)):e._strict&&!n&&f(e).unusedTokens.push(a);}f(e).charsLeftOver=s-d,l.length>0&&f(e).unusedInput.push(l),e._a[Me]<=12&&!0===f(e).bigHour&&e._a[Me]>0&&(f(e).bigHour=void 0),f(e).parsedDateParts=e._a.slice(0),f(e).meridiem=e._meridiem,e._a[Me]=(u=e._locale,c=e._a[Me],null==(h=e._meridiem)?c:null!=u.meridiemHour?u.meridiemHour(c,h):null!=u.isPM?((p=u.isPM(h))&&c<12&&(c+=12),p||12!==c||(c=0),c):c),mt(e),pt(e);}else kt(e);}else wt(e);var u,c,h,p;}function xt(e){var t=e._i,n=e._f;return e._locale=e._locale||ht(e._l),null===t||void 0===n&&""===t?g({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),b(t)?new M(pt(t)):(d(t)?e._d=t:a(n)?function(e){var t,n,i,r,a;if(0===e._f.length)return f(e).invalidFormat=!0,void(e._d=new Date(NaN));for(r=0;r<e._f.length;r++){a=0,t=y({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[r],St(t),m(t)&&(a+=f(t).charsLeftOver,a+=10*f(t).unusedTokens.length,f(t).score=a,(null==i||a<i)&&(i=a,n=t));}h(e,n||t);}(e):n?St(e):function(e){var t=e._i;l(t)?e._d=new Date(r.now()):d(t)?e._d=new Date(t.valueOf()):"string"==typeof t?function(e){var t=bt.exec(e._i);null===t?(wt(e),!1===e._isValid&&(delete e._isValid,kt(e),!1===e._isValid&&(delete e._isValid,r.createFromInputFallback(e)))):e._d=new Date(+t[1]);}(e):a(t)?(e._a=u(t.slice(0),function(e){return parseInt(e,10);}),mt(e)):o(t)?function(e){if(!e._d){var t=I(e._i);e._a=u([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10);}),mt(e);}}(e):s(t)?e._d=new Date(t):r.createFromInputFallback(e);}(e),m(e)||(e._d=null),e));}function Yt(e,t,n,i,r){var l,s={};return!0!==n&&!1!==n||(i=n,n=void 0),(o(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e){if(e.hasOwnProperty(t))return!1;}return!0;}(e)||a(e)&&0===e.length)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=r,s._l=n,s._i=e,s._f=t,s._strict=i,(l=new M(pt(xt(s))))._nextDay&&(l.add(1,"d"),l._nextDay=void 0),l;}function Et(e,t,n,i){return Yt(e,t,n,i,!1);}r.createFromInputFallback=k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""));}),r.ISO_8601=function(){},r.RFC_2822=function(){};var Ct=k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Et.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:g();}),Ht=k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Et.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:g();});function Pt(e,t){var n,i;if(1===t.length&&a(t[0])&&(t=t[0]),!t.length)return Et();for(n=t[0],i=1;i<t.length;++i){t[i].isValid()&&!t[i][e](n)||(n=t[i]);}return n;}var Ot=["year","quarter","month","week","day","hour","minute","second","millisecond"];function At(e){var t=I(e),n=t.year||0,i=t.quarter||0,r=t.month||0,a=t.week||t.isoWeek||0,o=t.day||0,l=t.hour||0,s=t.minute||0,d=t.second||0,u=t.millisecond||0;this._isValid=function(e){for(var t in e){if(-1===xe.call(Ot,t)||null!=e[t]&&isNaN(e[t]))return!1;}for(var n=!1,i=0;i<Ot.length;++i){if(e[Ot[i]]){if(n)return!1;parseFloat(e[Ot[i]])!==L(e[Ot[i]])&&(n=!0);}}return!0;}(t),this._milliseconds=+u+1e3*d+6e4*s+1e3*l*60*60,this._days=+o+7*a,this._months=+r+3*i+12*n,this._data={},this._locale=ht(),this._bubble();}function It(e){return e instanceof At;}function Rt(e){return e<0?-1*Math.round(-1*e):Math.round(e);}function jt(e,t){V(e,0,0,function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+F(~~(e/60),2)+t+F(~~e%60,2);});}jt("Z",":"),jt("ZZ",""),ue("Z",le),ue("ZZ",le),fe(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Nt(le,e);});var Ft=/([\+\-]|\d\d)/gi;function Nt(e,t){var n=(t||"").match(e);if(null===n)return null;var i=n[n.length-1]||[],r=(i+"").match(Ft)||["-",0,0],a=60*r[1]+L(r[2]);return 0===a?0:"+"===r[0]?a:-a;}function Wt(e,t){var n,i;return t._isUTC?(n=t.clone(),i=(b(e)||d(e)?e.valueOf():Et(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+i),r.updateOffset(n,!1),n):Et(e).local();}function zt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15);}function Bt(){return!!this.isValid()&&this._isUTC&&0===this._offset;}r.updateOffset=function(){};var Vt=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Gt=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Ut(e,t){var n,i,r,a,o,l,d=e,u=null;return It(e)?d={ms:e._milliseconds,d:e._days,M:e._months}:s(e)?(d={},t?d[t]=e:d.milliseconds=e):(u=Vt.exec(e))?(n="-"===u[1]?-1:1,d={y:0,d:L(u[ve])*n,h:L(u[Me])*n,m:L(u[be])*n,s:L(u[we])*n,ms:L(Rt(1e3*u[Le]))*n}):(u=Gt.exec(e))?(n="-"===u[1]?-1:1,d={y:Zt(u[2],n),M:Zt(u[3],n),w:Zt(u[4],n),d:Zt(u[5],n),h:Zt(u[6],n),m:Zt(u[7],n),s:Zt(u[8],n)}):null==d?d={}:"object"==_typeof(d)&&("from"in d||"to"in d)&&(a=Et(d.from),o=Et(d.to),r=a.isValid()&&o.isValid()?(o=Wt(o,a),a.isBefore(o)?l=qt(a,o):((l=qt(o,a)).milliseconds=-l.milliseconds,l.months=-l.months),l):{milliseconds:0,months:0},(d={}).ms=r.milliseconds,d.M=r.months),i=new At(d),It(e)&&c(e,"_locale")&&(i._locale=e._locale),i;}function Zt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t;}function qt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n;}function Xt(e,t){return function(n,i){var r;return null===i||isNaN(+i)||(Y(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),r=n,n=i,i=r),Jt(this,Ut(n="string"==typeof n?+n:n,i),e),this;};}function Jt(e,t,n,i){var a=t._milliseconds,o=Rt(t._days),l=Rt(t._months);e.isValid()&&(i=null==i||i,l&&Re(e,Ce(e,"Month")+l*n),o&&He(e,"Date",Ce(e,"Date")+o*n),a&&e._d.setTime(e._d.valueOf()+a*n),i&&r.updateOffset(e,o||l));}Ut.fn=At.prototype,Ut.invalid=function(){return Ut(NaN);};var $t=Xt(1,"add"),Kt=Xt(-1,"subtract");function Qt(e,t){var n,i,r=12*(t.year()-e.year())+(t.month()-e.month()),a=e.clone().add(r,"months");return t-a<0?(n=e.clone().add(r-1,"months"),i=(t-a)/(a-n)):(n=e.clone().add(r+1,"months"),i=(t-a)/(n-a)),-(r+i)||0;}function en(e){var t;return void 0===e?this._locale._abbr:(null!=(t=ht(e))&&(this._locale=t),this);}r.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",r.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var tn=k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e);});function nn(){return this._locale;}function rn(e,t){V(0,[e,e.length],0,t);}function an(e,t,n,i,r){var a;return null==e?Ge(this,i,r).year:(a=Ue(e,i,r),t>a&&(t=a),function(e,t,n,i,r){var a=Ve(e,t,n,i,r),o=ze(a.year,0,a.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this;}.call(this,e,t,n,i,r));}V(0,["gg",2],0,function(){return this.weekYear()%100;}),V(0,["GG",2],0,function(){return this.isoWeekYear()%100;}),rn("gggg","weekYear"),rn("ggggg","weekYear"),rn("GGGG","isoWeekYear"),rn("GGGGG","isoWeekYear"),O("weekYear","gg"),O("isoWeekYear","GG"),j("weekYear",1),j("isoWeekYear",1),ue("G",ae),ue("g",ae),ue("GG",K,q),ue("gg",K,q),ue("GGGG",ne,J),ue("gggg",ne,J),ue("GGGGG",ie,$),ue("ggggg",ie,$),me(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,i){t[i.substr(0,2)]=L(e);}),me(["gg","GG"],function(e,t,n,i){t[i]=r.parseTwoDigitYear(e);}),V("Q",0,"Qo","quarter"),O("quarter","Q"),j("quarter",7),ue("Q",Z),fe("Q",function(e,t){t[ye]=3*(L(e)-1);}),V("D",["DD",2],"Do","date"),O("date","D"),j("date",9),ue("D",K),ue("DD",K,q),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient;}),fe(["D","DD"],ve),fe("Do",function(e,t){t[ve]=L(e.match(K)[0]);});var on=Ee("Date",!0);V("DDD",["DDDD",3],"DDDo","dayOfYear"),O("dayOfYear","DDD"),j("dayOfYear",4),ue("DDD",te),ue("DDDD",X),fe(["DDD","DDDD"],function(e,t,n){n._dayOfYear=L(e);}),V("m",["mm",2],0,"minute"),O("minute","m"),j("minute",14),ue("m",K),ue("mm",K,q),fe(["m","mm"],be);var ln=Ee("Minutes",!1);V("s",["ss",2],0,"second"),O("second","s"),j("second",15),ue("s",K),ue("ss",K,q),fe(["s","ss"],we);var sn,dn=Ee("Seconds",!1);for(V("S",0,0,function(){return~~(this.millisecond()/100);}),V(0,["SS",2],0,function(){return~~(this.millisecond()/10);}),V(0,["SSS",3],0,"millisecond"),V(0,["SSSS",4],0,function(){return 10*this.millisecond();}),V(0,["SSSSS",5],0,function(){return 100*this.millisecond();}),V(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond();}),V(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond();}),V(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond();}),V(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond();}),O("millisecond","ms"),j("millisecond",16),ue("S",te,Z),ue("SS",te,q),ue("SSS",te,X),sn="SSSS";sn.length<=9;sn+="S"){ue(sn,re);}function un(e,t){t[Le]=L(1e3*("0."+e));}for(sn="S";sn.length<=9;sn+="S"){fe(sn,un);}var cn=Ee("Milliseconds",!1);V("z",0,0,"zoneAbbr"),V("zz",0,0,"zoneName");var hn=M.prototype;function pn(e){return e;}hn.add=$t,hn.calendar=function(e,t){var n=e||Et(),i=Wt(n,this).startOf("day"),a=r.calendarFormat(this,i)||"sameElse",o=t&&(E(t[a])?t[a].call(this,n):t[a]);return this.format(o||this.localeData().calendar(a,this,Et(n)));},hn.clone=function(){return new M(this);},hn.diff=function(e,t,n){var i,r,a;if(!this.isValid())return NaN;if(!(i=Wt(e,this)).isValid())return NaN;switch(r=6e4*(i.utcOffset()-this.utcOffset()),t=A(t)){case"year":a=Qt(this,i)/12;break;case"month":a=Qt(this,i);break;case"quarter":a=Qt(this,i)/3;break;case"second":a=(this-i)/1e3;break;case"minute":a=(this-i)/6e4;break;case"hour":a=(this-i)/36e5;break;case"day":a=(this-i-r)/864e5;break;case"week":a=(this-i-r)/6048e5;break;default:a=this-i;}return n?a:w(a);},hn.endOf=function(e){return void 0===(e=A(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"));},hn.format=function(e){e||(e=this.isUtc()?r.defaultFormatUtc:r.defaultFormat);var t=G(this,e);return this.localeData().postformat(t);},hn.from=function(e,t){return this.isValid()&&(b(e)&&e.isValid()||Et(e).isValid())?Ut({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate();},hn.fromNow=function(e){return this.from(Et(),e);},hn.to=function(e,t){return this.isValid()&&(b(e)&&e.isValid()||Et(e).isValid())?Ut({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate();},hn.toNow=function(e){return this.to(Et(),e);},hn.get=function(e){return E(this[e=A(e)])?this[e]():this;},hn.invalidAt=function(){return f(this).overflow;},hn.isAfter=function(e,t){var n=b(e)?e:Et(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=A(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf());},hn.isBefore=function(e,t){var n=b(e)?e:Et(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=A(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf());},hn.isBetween=function(e,t,n,i){var r=b(e)?e:Et(e),a=b(t)?t:Et(t);return!!(this.isValid()&&r.isValid()&&a.isValid())&&("("===(i=i||"()")[0]?this.isAfter(r,n):!this.isBefore(r,n))&&(")"===i[1]?this.isBefore(a,n):!this.isAfter(a,n));},hn.isSame=function(e,t){var n,i=b(e)?e:Et(e);return!(!this.isValid()||!i.isValid())&&("millisecond"===(t=A(t)||"millisecond")?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()));},hn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t);},hn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t);},hn.isValid=function(){return m(this);},hn.lang=tn,hn.locale=en,hn.localeData=nn,hn.max=Ht,hn.min=Ct,hn.parsingFlags=function(){return h({},f(this));},hn.set=function(e,t){if("object"==_typeof(e))for(var n=function(e){var t=[];for(var n in e){t.push({unit:n,priority:R[n]});}return t.sort(function(e,t){return e.priority-t.priority;}),t;}(e=I(e)),i=0;i<n.length;i++){this[n[i].unit](e[n[i].unit]);}else if(E(this[e=A(e)]))return this[e](t);return this;},hn.startOf=function(e){switch(e=A(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0);}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this;},hn.subtract=Kt,hn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()];},hn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()};},hn.toDate=function(){return new Date(this.valueOf());},hn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?G(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):E(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",G(n,"Z")):G(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ");},hn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",r=t+'[")]';return this.format(n+i+"-MM-DD[T]HH:mm:ss.SSS"+r);},hn.toJSON=function(){return this.isValid()?this.toISOString():null;},hn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");},hn.unix=function(){return Math.floor(this.valueOf()/1e3);},hn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0);},hn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict};},hn.year=Ye,hn.isLeapYear=function(){return Se(this.year());},hn.weekYear=function(e){return an.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy);},hn.isoWeekYear=function(e){return an.call(this,e,this.isoWeek(),this.isoWeekday(),1,4);},hn.quarter=hn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3);},hn.month=je,hn.daysInMonth=function(){return Pe(this.year(),this.month());},hn.week=hn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d");},hn.isoWeek=hn.isoWeeks=function(e){var t=Ge(this,1,4).week;return null==e?t:this.add(7*(e-t),"d");},hn.weeksInYear=function(){var e=this.localeData()._week;return Ue(this.year(),e.dow,e.doy);},hn.isoWeeksInYear=function(){return Ue(this.year(),1,4);},hn.date=on,hn.day=hn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=function(e,t){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10);}(e,this.localeData()),this.add(e-t,"d")):t;},hn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d");},hn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=function(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e;}(e,this.localeData());return this.day(this.day()%7?t:t-7);}return this.day()||7;},hn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d");},hn.hour=hn.hours=rt,hn.minute=hn.minutes=ln,hn.second=hn.seconds=dn,hn.millisecond=hn.milliseconds=cn,hn.utcOffset=function(e,t,n){var i,a=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=Nt(le,e)))return this;}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(i=zt(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),a!==e&&(!t||this._changeInProgress?Jt(this,Ut(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,r.updateOffset(this,!0),this._changeInProgress=null)),this;}return this._isUTC?a:zt(this);},hn.utc=function(e){return this.utcOffset(0,e);},hn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(zt(this),"m")),this;},hn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Nt(oe,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0);}return this;},hn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Et(e).utcOffset():0,(this.utcOffset()-e)%60==0);},hn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset();},hn.isLocal=function(){return!!this.isValid()&&!this._isUTC;},hn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC;},hn.isUtc=Bt,hn.isUTC=Bt,hn.zoneAbbr=function(){return this._isUTC?"UTC":"";},hn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":"";},hn.dates=k("dates accessor is deprecated. Use date instead.",on),hn.months=k("months accessor is deprecated. Use month instead",je),hn.years=k("years accessor is deprecated. Use year instead",Ye),hn.zone=k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset();}),hn.isDSTShifted=k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(y(e,this),(e=xt(e))._a){var t=e._isUTC?p(e._a):Et(e._a);this._isDSTShifted=this.isValid()&&D(e._a,t.toArray())>0;}else this._isDSTShifted=!1;return this._isDSTShifted;});var fn=H.prototype;function mn(e,t,n,i){var r=ht(),a=p().set(i,t);return r[n](a,e);}function gn(e,t,n){if(s(e)&&(t=e,e=void 0),e=e||"",null!=t)return mn(e,t,n,"month");var i,r=[];for(i=0;i<12;i++){r[i]=mn(e,i,n,"month");}return r;}function _n(e,t,n,i){"boolean"==typeof e?(s(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,s(t)&&(n=t,t=void 0),t=t||"");var r,a=ht(),o=e?a._week.dow:0;if(null!=n)return mn(t,(n+o)%7,i,"day");var l=[];for(r=0;r<7;r++){l[r]=mn(t,(r+o)%7,i,"day");}return l;}fn.calendar=function(e,t,n){var i=this._calendar[e]||this._calendar.sameElse;return E(i)?i.call(t,n):i;},fn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1);}),this._longDateFormat[e]);},fn.invalidDate=function(){return this._invalidDate;},fn.ordinal=function(e){return this._ordinal.replace("%d",e);},fn.preparse=pn,fn.postformat=pn,fn.relativeTime=function(e,t,n,i){var r=this._relativeTime[n];return E(r)?r(e,t,n,i):r.replace(/%d/i,e);},fn.pastFuture=function(e,t){var n=this._relativeTime[e>0?"future":"past"];return E(n)?n(t):n.replace(/%s/i,t);},fn.set=function(e){var t,n;for(n in e){E(t=e[n])?this[n]=t:this["_"+n]=t;}this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source);},fn.months=function(e,t){return e?a(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Oe).test(t)?"format":"standalone"][e.month()]:a(this._months)?this._months:this._months.standalone;},fn.monthsShort=function(e,t){return e?a(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Oe.test(t)?"format":"standalone"][e.month()]:a(this._monthsShort)?this._monthsShort:this._monthsShort.standalone;},fn.monthsParse=function(e,t,n){var i,r,a;if(this._monthsParseExact)return function(e,t,n){var i,r,a,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i){a=p([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(a,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(a,"").toLocaleLowerCase();}return n?"MMM"===t?-1!==(r=xe.call(this._shortMonthsParse,o))?r:null:-1!==(r=xe.call(this._longMonthsParse,o))?r:null:"MMM"===t?-1!==(r=xe.call(this._shortMonthsParse,o))?r:-1!==(r=xe.call(this._longMonthsParse,o))?r:null:-1!==(r=xe.call(this._longMonthsParse,o))?r:-1!==(r=xe.call(this._shortMonthsParse,o))?r:null;}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(r=p([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(a="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[i]=new RegExp(a.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[i].test(e))return i;if(n&&"MMM"===t&&this._shortMonthsParse[i].test(e))return i;if(!n&&this._monthsParse[i].test(e))return i;}},fn.monthsRegex=function(e){return this._monthsParseExact?(c(this,"_monthsRegex")||We.call(this),e?this._monthsStrictRegex:this._monthsRegex):(c(this,"_monthsRegex")||(this._monthsRegex=Ne),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex);},fn.monthsShortRegex=function(e){return this._monthsParseExact?(c(this,"_monthsRegex")||We.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(c(this,"_monthsShortRegex")||(this._monthsShortRegex=Fe),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex);},fn.week=function(e){return Ge(e,this._week.dow,this._week.doy).week;},fn.firstDayOfYear=function(){return this._week.doy;},fn.firstDayOfWeek=function(){return this._week.dow;},fn.weekdays=function(e,t){return e?a(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:a(this._weekdays)?this._weekdays:this._weekdays.standalone;},fn.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin;},fn.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort;},fn.weekdaysParse=function(e,t,n){var i,r,a;if(this._weekdaysParseExact)return function(e,t,n){var i,r,a,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i){a=p([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(a,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(a,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(a,"").toLocaleLowerCase();}return n?"dddd"===t?-1!==(r=xe.call(this._weekdaysParse,o))?r:null:"ddd"===t?-1!==(r=xe.call(this._shortWeekdaysParse,o))?r:null:-1!==(r=xe.call(this._minWeekdaysParse,o))?r:null:"dddd"===t?-1!==(r=xe.call(this._weekdaysParse,o))?r:-1!==(r=xe.call(this._shortWeekdaysParse,o))?r:-1!==(r=xe.call(this._minWeekdaysParse,o))?r:null:"ddd"===t?-1!==(r=xe.call(this._shortWeekdaysParse,o))?r:-1!==(r=xe.call(this._weekdaysParse,o))?r:-1!==(r=xe.call(this._minWeekdaysParse,o))?r:null:-1!==(r=xe.call(this._minWeekdaysParse,o))?r:-1!==(r=xe.call(this._weekdaysParse,o))?r:-1!==(r=xe.call(this._shortWeekdaysParse,o))?r:null;}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(r=p([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(r,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(r,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(r,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[i]||(a="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[i]=new RegExp(a.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[i].test(e))return i;if(n&&"ddd"===t&&this._shortWeekdaysParse[i].test(e))return i;if(n&&"dd"===t&&this._minWeekdaysParse[i].test(e))return i;if(!n&&this._weekdaysParse[i].test(e))return i;}},fn.weekdaysRegex=function(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(c(this,"_weekdaysRegex")||(this._weekdaysRegex=Je),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex);},fn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(c(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=$e),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex);},fn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(c(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ke),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex);},fn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0);},fn.meridiem=function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM";},ut("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function ordinal(e){var t=e%10,n=1===L(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n;}}),r.lang=k("moment.lang is deprecated. Use moment.locale instead.",ut),r.langData=k("moment.langData is deprecated. Use moment.localeData instead.",ht);var yn=Math.abs;function vn(e,t,n,i){var r=Ut(t,n);return e._milliseconds+=i*r._milliseconds,e._days+=i*r._days,e._months+=i*r._months,e._bubble();}function Mn(e){return e<0?Math.floor(e):Math.ceil(e);}function bn(e){return 4800*e/146097;}function wn(e){return 146097*e/4800;}function Ln(e){return function(){return this.as(e);};}var Dn=Ln("ms"),Tn=Ln("s"),kn=Ln("m"),Sn=Ln("h"),xn=Ln("d"),Yn=Ln("w"),En=Ln("M"),Cn=Ln("y");function Hn(e){return function(){return this.isValid()?this._data[e]:NaN;};}var Pn=Hn("milliseconds"),On=Hn("seconds"),An=Hn("minutes"),In=Hn("hours"),Rn=Hn("days"),jn=Hn("months"),Fn=Hn("years"),Nn=Math.round,Wn={ss:44,s:45,m:45,h:22,d:26,M:11},zn=Math.abs;function Bn(e){return(e>0)-(e<0)||+e;}function Vn(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=zn(this._milliseconds)/1e3,i=zn(this._days),r=zn(this._months);e=w(n/60),t=w(e/60),n%=60,e%=60;var a=w(r/12),o=r%=12,l=i,s=t,d=e,u=n?n.toFixed(3).replace(/\.?0+$/,""):"",c=this.asSeconds();if(!c)return"P0D";var h=c<0?"-":"",p=Bn(this._months)!==Bn(c)?"-":"",f=Bn(this._days)!==Bn(c)?"-":"",m=Bn(this._milliseconds)!==Bn(c)?"-":"";return h+"P"+(a?p+a+"Y":"")+(o?p+o+"M":"")+(l?f+l+"D":"")+(s||d||u?"T":"")+(s?m+s+"H":"")+(d?m+d+"M":"")+(u?m+u+"S":"");}var Gn=At.prototype;return Gn.isValid=function(){return this._isValid;},Gn.abs=function(){var e=this._data;return this._milliseconds=yn(this._milliseconds),this._days=yn(this._days),this._months=yn(this._months),e.milliseconds=yn(e.milliseconds),e.seconds=yn(e.seconds),e.minutes=yn(e.minutes),e.hours=yn(e.hours),e.months=yn(e.months),e.years=yn(e.years),this;},Gn.add=function(e,t){return vn(this,e,t,1);},Gn.subtract=function(e,t){return vn(this,e,t,-1);},Gn.as=function(e){if(!this.isValid())return NaN;var t,n,i=this._milliseconds;if("month"===(e=A(e))||"year"===e)return t=this._days+i/864e5,n=this._months+bn(t),"month"===e?n:n/12;switch(t=this._days+Math.round(wn(this._months)),e){case"week":return t/7+i/6048e5;case"day":return t+i/864e5;case"hour":return 24*t+i/36e5;case"minute":return 1440*t+i/6e4;case"second":return 86400*t+i/1e3;case"millisecond":return Math.floor(864e5*t)+i;default:throw new Error("Unknown unit "+e);}},Gn.asMilliseconds=Dn,Gn.asSeconds=Tn,Gn.asMinutes=kn,Gn.asHours=Sn,Gn.asDays=xn,Gn.asWeeks=Yn,Gn.asMonths=En,Gn.asYears=Cn,Gn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*L(this._months/12):NaN;},Gn._bubble=function(){var e,t,n,i,r,a=this._milliseconds,o=this._days,l=this._months,s=this._data;return a>=0&&o>=0&&l>=0||a<=0&&o<=0&&l<=0||(a+=864e5*Mn(wn(l)+o),o=0,l=0),s.milliseconds=a%1e3,e=w(a/1e3),s.seconds=e%60,t=w(e/60),s.minutes=t%60,n=w(t/60),s.hours=n%24,o+=w(n/24),r=w(bn(o)),l+=r,o-=Mn(wn(r)),i=w(l/12),l%=12,s.days=o,s.months=l,s.years=i,this;},Gn.clone=function(){return Ut(this);},Gn.get=function(e){return e=A(e),this.isValid()?this[e+"s"]():NaN;},Gn.milliseconds=Pn,Gn.seconds=On,Gn.minutes=An,Gn.hours=In,Gn.days=Rn,Gn.weeks=function(){return w(this.days()/7);},Gn.months=jn,Gn.years=Fn,Gn.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t=this.localeData(),n=function(e,t,n){var i=Ut(e).abs(),r=Nn(i.as("s")),a=Nn(i.as("m")),o=Nn(i.as("h")),l=Nn(i.as("d")),s=Nn(i.as("M")),d=Nn(i.as("y")),u=r<=Wn.ss&&["s",r]||r<Wn.s&&["ss",r]||a<=1&&["m"]||a<Wn.m&&["mm",a]||o<=1&&["h"]||o<Wn.h&&["hh",o]||l<=1&&["d"]||l<Wn.d&&["dd",l]||s<=1&&["M"]||s<Wn.M&&["MM",s]||d<=1&&["y"]||["yy",d];return u[2]=t,u[3]=+e>0,u[4]=n,function(e,t,n,i,r){return r.relativeTime(t||1,!!n,e,i);}.apply(null,u);}(this,!e,t);return e&&(n=t.pastFuture(+this,n)),t.postformat(n);},Gn.toISOString=Vn,Gn.toString=Vn,Gn.toJSON=Vn,Gn.locale=en,Gn.localeData=nn,Gn.toIsoString=k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Vn),Gn.lang=tn,V("X",0,0,"unix"),V("x",0,0,"valueOf"),ue("x",ae),ue("X",/[+-]?\d+(\.\d{1,3})?/),fe("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10));}),fe("x",function(e,t,n){n._d=new Date(L(e));}),r.version="2.23.0",t=Et,r.fn=hn,r.min=function(){return Pt("isBefore",[].slice.call(arguments,0));},r.max=function(){return Pt("isAfter",[].slice.call(arguments,0));},r.now=function(){return Date.now?Date.now():+new Date();},r.utc=p,r.unix=function(e){return Et(1e3*e);},r.months=function(e,t){return gn(e,t,"months");},r.isDate=d,r.locale=ut,r.invalid=g,r.duration=Ut,r.isMoment=b,r.weekdays=function(e,t,n){return _n(e,t,n,"weekdays");},r.parseZone=function(){return Et.apply(null,arguments).parseZone();},r.localeData=ht,r.isDuration=It,r.monthsShort=function(e,t){return gn(e,t,"monthsShort");},r.weekdaysMin=function(e,t,n){return _n(e,t,n,"weekdaysMin");},r.defineLocale=ct,r.updateLocale=function(e,t){if(null!=t){var n,i,r=at;null!=(i=dt(e))&&(r=i._config),t=C(r,t),(n=new H(t)).parentLocale=ot[e],ot[e]=n,ut(e);}else null!=ot[e]&&(null!=ot[e].parentLocale?ot[e]=ot[e].parentLocale:null!=ot[e]&&delete ot[e]);return ot[e];},r.locales=function(){return S(ot);},r.weekdaysShort=function(e,t,n){return _n(e,t,n,"weekdaysShort");},r.normalizeUnits=A,r.relativeTimeRounding=function(e){return void 0===e?Nn:"function"==typeof e&&(Nn=e,!0);},r.relativeTimeThreshold=function(e,t){return void 0!==Wn[e]&&(void 0===t?Wn[e]:(Wn[e]=t,"s"===e&&(Wn.ss=t-1),!0));},r.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse";},r.prototype=hn,r.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},r;}();}).call(this,n(158)(e));},function(e,t,n){var i;/*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */ /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */!function(t,n){"use strict";"object"==_typeof(e.exports)?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e);}:n(t);}("undefined"!=typeof window?window:this,function(n,r){"use strict";var a=[],o=n.document,l=Object.getPrototypeOf,s=a.slice,d=a.concat,u=a.push,c=a.indexOf,h={},p=h.toString,f=h.hasOwnProperty,m=f.toString,g=m.call(Object),_={},y=function y(e){return"function"==typeof e&&"number"!=typeof e.nodeType;},v=function v(e){return null!=e&&e===e.window;},M={type:!0,src:!0,noModule:!0};function b(e,t,n){var i,r=(t=t||o).createElement("script");if(r.text=e,n)for(i in M){n[i]&&(r[i]=n[i]);}t.head.appendChild(r).parentNode.removeChild(r);}function w(e){return null==e?e+"":"object"==_typeof(e)||"function"==typeof e?h[p.call(e)]||"object":_typeof(e);}var L=function L(e,t){return new L.fn.init(e,t);},D=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function T(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!y(e)&&!v(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e);}L.fn=L.prototype={jquery:"3.3.1",constructor:L,length:0,toArray:function toArray(){return s.call(this);},get:function get(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e];},pushStack:function pushStack(e){var t=L.merge(this.constructor(),e);return t.prevObject=this,t;},each:function each(e){return L.each(this,e);},map:function map(e){return this.pushStack(L.map(this,function(t,n){return e.call(t,n,t);}));},slice:function slice(){return this.pushStack(s.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[]);},end:function end(){return this.prevObject||this.constructor();},push:u,sort:a.sort,splice:a.splice},L.extend=L.fn.extend=function(){var e,t,n,i,r,a,o=arguments[0]||{},l=1,s=arguments.length,d=!1;for("boolean"==typeof o&&(d=o,o=arguments[l]||{},l++),"object"==_typeof(o)||y(o)||(o={}),l===s&&(o=this,l--);l<s;l++){if(null!=(e=arguments[l]))for(t in e){n=o[t],o!==(i=e[t])&&(d&&i&&(L.isPlainObject(i)||(r=Array.isArray(i)))?(r?(r=!1,a=n&&Array.isArray(n)?n:[]):a=n&&L.isPlainObject(n)?n:{},o[t]=L.extend(d,a,i)):void 0!==i&&(o[t]=i));}}return o;},L.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function error(e){throw new Error(e);},noop:function noop(){},isPlainObject:function isPlainObject(e){var t,n;return!(!e||"[object Object]"!==p.call(e))&&(!(t=l(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&m.call(n)===g);},isEmptyObject:function isEmptyObject(e){var t;for(t in e){return!1;}return!0;},globalEval:function globalEval(e){b(e);},each:function each(e,t){var n,i=0;if(T(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++){;}else for(i in e){if(!1===t.call(e[i],i,e[i]))break;}return e;},trim:function trim(e){return null==e?"":(e+"").replace(D,"");},makeArray:function makeArray(e,t){var n=t||[];return null!=e&&(T(Object(e))?L.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n;},inArray:function inArray(e,t,n){return null==t?-1:c.call(t,e,n);},merge:function merge(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++){e[r++]=t[i];}return e.length=r,e;},grep:function grep(e,t,n){for(var i=[],r=0,a=e.length,o=!n;r<a;r++){!t(e[r],r)!==o&&i.push(e[r]);}return i;},map:function map(e,t,n){var i,r,a=0,o=[];if(T(e))for(i=e.length;a<i;a++){null!=(r=t(e[a],a,n))&&o.push(r);}else for(a in e){null!=(r=t(e[a],a,n))&&o.push(r);}return d.apply([],o);},guid:1,support:_}),"function"==typeof Symbol&&(L.fn[Symbol.iterator]=a[Symbol.iterator]),L.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){h["[object "+t+"]"]=t.toLowerCase();});var k=/*!
         * Sizzle CSS Selector Engine v2.3.3
         * https://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-08-08
         */function(e){var t,n,i,r,a,o,l,s,d,u,c,h,p,f,m,g,_,y,v,M="sizzle"+1*new Date(),b=e.document,w=0,L=0,D=oe(),T=oe(),k=oe(),S=function S(e,t){return e===t&&(c=!0),0;},x={}.hasOwnProperty,Y=[],E=Y.pop,C=Y.push,H=Y.push,P=Y.slice,O=function O(e,t){for(var n=0,i=e.length;n<i;n++){if(e[n]===t)return n;}return-1;},A="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",I="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",j="\\["+I+"*("+R+")(?:"+I+"*([*^$|!~]?=)"+I+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+I+"*\\]",F=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+j+")*)|.*)\\)|)",N=new RegExp(I+"+","g"),W=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g"),z=new RegExp("^"+I+"*,"+I+"*"),B=new RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"),V=new RegExp("="+I+"*([^\\]'\"]*?)"+I+"*\\]","g"),G=new RegExp(F),U=new RegExp("^"+R+"$"),Z={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+j),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),bool:new RegExp("^(?:"+A+")$","i"),needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")},q=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Q=new RegExp("\\\\([\\da-f]{1,6}"+I+"?|("+I+")|.)","ig"),ee=function ee(e,t,n){var i="0x"+t-65536;return i!=i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320);},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function ne(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e;},ie=function ie(){h();},re=ye(function(e){return!0===e.disabled&&("form"in e||"label"in e);},{dir:"parentNode",next:"legend"});try{H.apply(Y=P.call(b.childNodes),b.childNodes),Y[b.childNodes.length].nodeType;}catch(e){H={apply:Y.length?function(e,t){C.apply(e,P.call(t));}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];){;}e.length=n-1;}};}function ae(e,t,i,r){var a,l,d,u,c,f,_,y=t&&t.ownerDocument,w=t?t.nodeType:9;if(i=i||[],"string"!=typeof e||!e||1!==w&&9!==w&&11!==w)return i;if(!r&&((t?t.ownerDocument||t:b)!==p&&h(t),t=t||p,m)){if(11!==w&&(c=$.exec(e)))if(a=c[1]){if(9===w){if(!(d=t.getElementById(a)))return i;if(d.id===a)return i.push(d),i;}else if(y&&(d=y.getElementById(a))&&v(t,d)&&d.id===a)return i.push(d),i;}else{if(c[2])return H.apply(i,t.getElementsByTagName(e)),i;if((a=c[3])&&n.getElementsByClassName&&t.getElementsByClassName)return H.apply(i,t.getElementsByClassName(a)),i;}if(n.qsa&&!k[e+" "]&&(!g||!g.test(e))){if(1!==w)y=t,_=e;else if("object"!==t.nodeName.toLowerCase()){for((u=t.getAttribute("id"))?u=u.replace(te,ne):t.setAttribute("id",u=M),l=(f=o(e)).length;l--;){f[l]="#"+u+" "+_e(f[l]);}_=f.join(","),y=K.test(e)&&me(t.parentNode)||t;}if(_)try{return H.apply(i,y.querySelectorAll(_)),i;}catch(e){}finally{u===M&&t.removeAttribute("id");}}}return s(e.replace(W,"$1"),t,i,r);}function oe(){var e=[];return function t(n,r){return e.push(n+" ")>i.cacheLength&&delete t[e.shift()],t[n+" "]=r;};}function le(e){return e[M]=!0,e;}function se(e){var t=p.createElement("fieldset");try{return!!e(t);}catch(e){return!1;}finally{t.parentNode&&t.parentNode.removeChild(t),t=null;}}function de(e,t){for(var n=e.split("|"),r=n.length;r--;){i.attrHandle[n[r]]=t;}}function ue(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;){if(n===t)return-1;}return e?1:-1;}function ce(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e;};}function he(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e;};}function pe(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&re(t)===e:t.disabled===e:"label"in t&&t.disabled===e;};}function fe(e){return le(function(t){return t=+t,le(function(n,i){for(var r,a=e([],n.length,t),o=a.length;o--;){n[r=a[o]]&&(n[r]=!(i[r]=n[r]));}});});}function me(e){return e&&void 0!==e.getElementsByTagName&&e;}for(t in n=ae.support={},a=ae.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName;},h=ae.setDocument=function(e){var t,r,o=e?e.ownerDocument||e:b;return o!==p&&9===o.nodeType&&o.documentElement?(f=(p=o).documentElement,m=!a(p),b!==p&&(r=p.defaultView)&&r.top!==r&&(r.addEventListener?r.addEventListener("unload",ie,!1):r.attachEvent&&r.attachEvent("onunload",ie)),n.attributes=se(function(e){return e.className="i",!e.getAttribute("className");}),n.getElementsByTagName=se(function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length;}),n.getElementsByClassName=J.test(p.getElementsByClassName),n.getById=se(function(e){return f.appendChild(e).id=M,!p.getElementsByName||!p.getElementsByName(M).length;}),n.getById?(i.filter.ID=function(e){var t=e.replace(Q,ee);return function(e){return e.getAttribute("id")===t;};},i.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n=t.getElementById(e);return n?[n]:[];}}):(i.filter.ID=function(e){var t=e.replace(Q,ee);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t;};},i.find.ID=function(e,t){if(void 0!==t.getElementById&&m){var n,i,r,a=t.getElementById(e);if(a){if((n=a.getAttributeNode("id"))&&n.value===e)return[a];for(r=t.getElementsByName(e),i=0;a=r[i++];){if((n=a.getAttributeNode("id"))&&n.value===e)return[a];}}return[];}}),i.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0;}:function(e,t){var n,i=[],r=0,a=t.getElementsByTagName(e);if("*"===e){for(;n=a[r++];){1===n.nodeType&&i.push(n);}return i;}return a;},i.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&m)return t.getElementsByClassName(e);},_=[],g=[],(n.qsa=J.test(p.querySelectorAll))&&(se(function(e){f.appendChild(e).innerHTML="<a id='"+M+"'></a><select id='"+M+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+I+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+I+"*(?:value|"+A+")"),e.querySelectorAll("[id~="+M+"-]").length||g.push("~="),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+M+"+*").length||g.push(".#.+[+~]");}),se(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=p.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+I+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),f.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:");})),(n.matchesSelector=J.test(y=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&se(function(e){n.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),_.push("!=",F);}),g=g.length&&new RegExp(g.join("|")),_=_.length&&new RegExp(_.join("|")),t=J.test(f.compareDocumentPosition),v=t||J.test(f.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)));}:function(e,t){if(t)for(;t=t.parentNode;){if(t===e)return!0;}return!1;},S=t?function(e,t){if(e===t)return c=!0,0;var i=!e.compareDocumentPosition-!t.compareDocumentPosition;return i||(1&(i=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===i?e===p||e.ownerDocument===b&&v(b,e)?-1:t===p||t.ownerDocument===b&&v(b,t)?1:u?O(u,e)-O(u,t):0:4&i?-1:1);}:function(e,t){if(e===t)return c=!0,0;var n,i=0,r=e.parentNode,a=t.parentNode,o=[e],l=[t];if(!r||!a)return e===p?-1:t===p?1:r?-1:a?1:u?O(u,e)-O(u,t):0;if(r===a)return ue(e,t);for(n=e;n=n.parentNode;){o.unshift(n);}for(n=t;n=n.parentNode;){l.unshift(n);}for(;o[i]===l[i];){i++;}return i?ue(o[i],l[i]):o[i]===b?-1:l[i]===b?1:0;},p):p;},ae.matches=function(e,t){return ae(e,null,null,t);},ae.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&h(e),t=t.replace(V,"='$1']"),n.matchesSelector&&m&&!k[t+" "]&&(!_||!_.test(t))&&(!g||!g.test(t)))try{var i=y.call(e,t);if(i||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return i;}catch(e){}return ae(t,p,null,[e]).length>0;},ae.contains=function(e,t){return(e.ownerDocument||e)!==p&&h(e),v(e,t);},ae.attr=function(e,t){(e.ownerDocument||e)!==p&&h(e);var r=i.attrHandle[t.toLowerCase()],a=r&&x.call(i.attrHandle,t.toLowerCase())?r(e,t,!m):void 0;return void 0!==a?a:n.attributes||!m?e.getAttribute(t):(a=e.getAttributeNode(t))&&a.specified?a.value:null;},ae.escape=function(e){return(e+"").replace(te,ne);},ae.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e);},ae.uniqueSort=function(e){var t,i=[],r=0,a=0;if(c=!n.detectDuplicates,u=!n.sortStable&&e.slice(0),e.sort(S),c){for(;t=e[a++];){t===e[a]&&(r=i.push(a));}for(;r--;){e.splice(i[r],1);}}return u=null,e;},r=ae.getText=function(e){var t,n="",i=0,a=e.nodeType;if(a){if(1===a||9===a||11===a){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling){n+=r(e);}}else if(3===a||4===a)return e.nodeValue;}else for(;t=e[i++];){n+=r(t);}return n;},(i=ae.selectors={cacheLength:50,createPseudo:le,match:Z,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function ATTR(e){return e[1]=e[1].replace(Q,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Q,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4);},CHILD:function CHILD(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ae.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ae.error(e[0]),e;},PSEUDO:function PSEUDO(e){var t,n=!e[6]&&e[2];return Z.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&G.test(n)&&(t=o(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3));}},filter:{TAG:function TAG(e){var t=e.replace(Q,ee).toLowerCase();return"*"===e?function(){return!0;}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t;};},CLASS:function CLASS(e){var t=D[e+" "];return t||(t=new RegExp("(^|"+I+")"+e+"("+I+"|$)"))&&D(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"");});},ATTR:function ATTR(e,t,n){return function(i){var r=ae.attr(i,e);return null==r?"!="===t:!t||(r+="","="===t?r===n:"!="===t?r!==n:"^="===t?n&&0===r.indexOf(n):"*="===t?n&&r.indexOf(n)>-1:"$="===t?n&&r.slice(-n.length)===n:"~="===t?(" "+r.replace(N," ")+" ").indexOf(n)>-1:"|="===t&&(r===n||r.slice(0,n.length+1)===n+"-"));};},CHILD:function CHILD(e,t,n,i,r){var a="nth"!==e.slice(0,3),o="last"!==e.slice(-4),l="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode;}:function(t,n,s){var d,u,c,h,p,f,m=a!==o?"nextSibling":"previousSibling",g=t.parentNode,_=l&&t.nodeName.toLowerCase(),y=!s&&!l,v=!1;if(g){if(a){for(;m;){for(h=t;h=h[m];){if(l?h.nodeName.toLowerCase()===_:1===h.nodeType)return!1;}f=m="only"===e&&!f&&"nextSibling";}return!0;}if(f=[o?g.firstChild:g.lastChild],o&&y){for(v=(p=(d=(u=(c=(h=g)[M]||(h[M]={}))[h.uniqueID]||(c[h.uniqueID]={}))[e]||[])[0]===w&&d[1])&&d[2],h=p&&g.childNodes[p];h=++p&&h&&h[m]||(v=p=0)||f.pop();){if(1===h.nodeType&&++v&&h===t){u[e]=[w,p,v];break;}}}else if(y&&(v=p=(d=(u=(c=(h=t)[M]||(h[M]={}))[h.uniqueID]||(c[h.uniqueID]={}))[e]||[])[0]===w&&d[1]),!1===v)for(;(h=++p&&h&&h[m]||(v=p=0)||f.pop())&&((l?h.nodeName.toLowerCase()!==_:1!==h.nodeType)||!++v||(y&&((u=(c=h[M]||(h[M]={}))[h.uniqueID]||(c[h.uniqueID]={}))[e]=[w,v]),h!==t));){;}return(v-=r)===i||v%i==0&&v/i>=0;}};},PSEUDO:function PSEUDO(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ae.error("unsupported pseudo: "+e);return r[M]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,n){for(var i,a=r(e,t),o=a.length;o--;){e[i=O(e,a[o])]=!(n[i]=a[o]);}}):function(e){return r(e,0,n);}):r;}},pseudos:{not:le(function(e){var t=[],n=[],i=l(e.replace(W,"$1"));return i[M]?le(function(e,t,n,r){for(var a,o=i(e,null,r,[]),l=e.length;l--;){(a=o[l])&&(e[l]=!(t[l]=a));}}):function(e,r,a){return t[0]=e,i(t,null,a,n),t[0]=null,!n.pop();};}),has:le(function(e){return function(t){return ae(e,t).length>0;};}),contains:le(function(e){return e=e.replace(Q,ee),function(t){return(t.textContent||t.innerText||r(t)).indexOf(e)>-1;};}),lang:le(function(e){return U.test(e||"")||ae.error("unsupported lang: "+e),e=e.replace(Q,ee).toLowerCase(),function(t){var n;do{if(n=m?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-");}while((t=t.parentNode)&&1===t.nodeType);return!1;};}),target:function target(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id;},root:function root(e){return e===f;},focus:function focus(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex);},enabled:pe(!1),disabled:pe(!0),checked:function checked(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected;},selected:function selected(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected;},empty:function empty(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeType<6)return!1;}return!0;},parent:function parent(e){return!i.pseudos.empty(e);},header:function header(e){return X.test(e.nodeName);},input:function input(e){return q.test(e.nodeName);},button:function button(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t;},text:function text(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase());},first:fe(function(){return[0];}),last:fe(function(e,t){return[t-1];}),eq:fe(function(e,t,n){return[n<0?n+t:n];}),even:fe(function(e,t){for(var n=0;n<t;n+=2){e.push(n);}return e;}),odd:fe(function(e,t){for(var n=1;n<t;n+=2){e.push(n);}return e;}),lt:fe(function(e,t,n){for(var i=n<0?n+t:n;--i>=0;){e.push(i);}return e;}),gt:fe(function(e,t,n){for(var i=n<0?n+t:n;++i<t;){e.push(i);}return e;})}}).pseudos.nth=i.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){i.pseudos[t]=ce(t);}for(t in{submit:!0,reset:!0}){i.pseudos[t]=he(t);}function ge(){}function _e(e){for(var t=0,n=e.length,i="";t<n;t++){i+=e[t].value;}return i;}function ye(e,t,n){var i=t.dir,r=t.next,a=r||i,o=n&&"parentNode"===a,l=L++;return t.first?function(t,n,r){for(;t=t[i];){if(1===t.nodeType||o)return e(t,n,r);}return!1;}:function(t,n,s){var d,u,c,h=[w,l];if(s){for(;t=t[i];){if((1===t.nodeType||o)&&e(t,n,s))return!0;}}else for(;t=t[i];){if(1===t.nodeType||o)if(u=(c=t[M]||(t[M]={}))[t.uniqueID]||(c[t.uniqueID]={}),r&&r===t.nodeName.toLowerCase())t=t[i]||t;else{if((d=u[a])&&d[0]===w&&d[1]===l)return h[2]=d[2];if(u[a]=h,h[2]=e(t,n,s))return!0;}}return!1;};}function ve(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;){if(!e[r](t,n,i))return!1;}return!0;}:e[0];}function Me(e,t,n,i,r){for(var a,o=[],l=0,s=e.length,d=null!=t;l<s;l++){(a=e[l])&&(n&&!n(a,i,r)||(o.push(a),d&&t.push(l)));}return o;}function be(e,t,n,i,r,a){return i&&!i[M]&&(i=be(i)),r&&!r[M]&&(r=be(r,a)),le(function(a,o,l,s){var d,u,c,h=[],p=[],f=o.length,m=a||function(e,t,n){for(var i=0,r=t.length;i<r;i++){ae(e,t[i],n);}return n;}(t||"*",l.nodeType?[l]:l,[]),g=!e||!a&&t?m:Me(m,h,e,l,s),_=n?r||(a?e:f||i)?[]:o:g;if(n&&n(g,_,l,s),i)for(d=Me(_,p),i(d,[],l,s),u=d.length;u--;){(c=d[u])&&(_[p[u]]=!(g[p[u]]=c));}if(a){if(r||e){if(r){for(d=[],u=_.length;u--;){(c=_[u])&&d.push(g[u]=c);}r(null,_=[],d,s);}for(u=_.length;u--;){(c=_[u])&&(d=r?O(a,c):h[u])>-1&&(a[d]=!(o[d]=c));}}}else _=Me(_===o?_.splice(f,_.length):_),r?r(null,o,_,s):H.apply(o,_);});}function we(e){for(var t,n,r,a=e.length,o=i.relative[e[0].type],l=o||i.relative[" "],s=o?1:0,u=ye(function(e){return e===t;},l,!0),c=ye(function(e){return O(t,e)>-1;},l,!0),h=[function(e,n,i){var r=!o&&(i||n!==d)||((t=n).nodeType?u(e,n,i):c(e,n,i));return t=null,r;}];s<a;s++){if(n=i.relative[e[s].type])h=[ye(ve(h),n)];else{if((n=i.filter[e[s].type].apply(null,e[s].matches))[M]){for(r=++s;r<a&&!i.relative[e[r].type];r++){;}return be(s>1&&ve(h),s>1&&_e(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(W,"$1"),n,s<r&&we(e.slice(s,r)),r<a&&we(e=e.slice(r)),r<a&&_e(e));}h.push(n);}}return ve(h);}return ge.prototype=i.filters=i.pseudos,i.setFilters=new ge(),o=ae.tokenize=function(e,t){var n,r,a,o,l,s,d,u=T[e+" "];if(u)return t?0:u.slice(0);for(l=e,s=[],d=i.preFilter;l;){for(o in n&&!(r=z.exec(l))||(r&&(l=l.slice(r[0].length)||l),s.push(a=[])),n=!1,(r=B.exec(l))&&(n=r.shift(),a.push({value:n,type:r[0].replace(W," ")}),l=l.slice(n.length)),i.filter){!(r=Z[o].exec(l))||d[o]&&!(r=d[o](r))||(n=r.shift(),a.push({value:n,type:o,matches:r}),l=l.slice(n.length));}if(!n)break;}return t?l.length:l?ae.error(e):T(e,s).slice(0);},l=ae.compile=function(e,t){var n,r=[],a=[],l=k[e+" "];if(!l){for(t||(t=o(e)),n=t.length;n--;){(l=we(t[n]))[M]?r.push(l):a.push(l);}(l=k(e,function(e,t){var n=t.length>0,r=e.length>0,a=function a(_a,o,l,s,u){var c,f,g,_=0,y="0",v=_a&&[],M=[],b=d,L=_a||r&&i.find.TAG("*",u),D=w+=null==b?1:Math.random()||.1,T=L.length;for(u&&(d=o===p||o||u);y!==T&&null!=(c=L[y]);y++){if(r&&c){for(f=0,o||c.ownerDocument===p||(h(c),l=!m);g=e[f++];){if(g(c,o||p,l)){s.push(c);break;}}u&&(w=D);}n&&((c=!g&&c)&&_--,_a&&v.push(c));}if(_+=y,n&&y!==_){for(f=0;g=t[f++];){g(v,M,o,l);}if(_a){if(_>0)for(;y--;){v[y]||M[y]||(M[y]=E.call(s));}M=Me(M);}H.apply(s,M),u&&!_a&&M.length>0&&_+t.length>1&&ae.uniqueSort(s);}return u&&(w=D,d=b),v;};return n?le(a):a;}(a,r))).selector=e;}return l;},s=ae.select=function(e,t,n,r){var a,s,d,u,c,h="function"==typeof e&&e,p=!r&&o(e=h.selector||e);if(n=n||[],1===p.length){if((s=p[0]=p[0].slice(0)).length>2&&"ID"===(d=s[0]).type&&9===t.nodeType&&m&&i.relative[s[1].type]){if(!(t=(i.find.ID(d.matches[0].replace(Q,ee),t)||[])[0]))return n;h&&(t=t.parentNode),e=e.slice(s.shift().value.length);}for(a=Z.needsContext.test(e)?0:s.length;a--&&(d=s[a],!i.relative[u=d.type]);){if((c=i.find[u])&&(r=c(d.matches[0].replace(Q,ee),K.test(s[0].type)&&me(t.parentNode)||t))){if(s.splice(a,1),!(e=r.length&&_e(s)))return H.apply(n,r),n;break;}}}return(h||l(e,p))(r,t,!m,n,!t||K.test(e)&&me(t.parentNode)||t),n;},n.sortStable=M.split("").sort(S).join("")===M,n.detectDuplicates=!!c,h(),n.sortDetached=se(function(e){return 1&e.compareDocumentPosition(p.createElement("fieldset"));}),se(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href");})||de("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2);}),n.attributes&&se(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value");})||de("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue;}),se(function(e){return null==e.getAttribute("disabled");})||de(A,function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null;}),ae;}(n);L.find=k,L.expr=k.selectors,L.expr[":"]=L.expr.pseudos,L.uniqueSort=L.unique=k.uniqueSort,L.text=k.getText,L.isXMLDoc=k.isXML,L.contains=k.contains,L.escapeSelector=k.escape;var S=function S(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;){if(1===e.nodeType){if(r&&L(e).is(n))break;i.push(e);}}return i;},x=function x(e,t){for(var n=[];e;e=e.nextSibling){1===e.nodeType&&e!==t&&n.push(e);}return n;},Y=L.expr.match.needsContext;function E(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase();}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function H(e,t,n){return y(t)?L.grep(e,function(e,i){return!!t.call(e,i,e)!==n;}):t.nodeType?L.grep(e,function(e){return e===t!==n;}):"string"!=typeof t?L.grep(e,function(e){return c.call(t,e)>-1!==n;}):L.filter(t,e,n);}L.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?L.find.matchesSelector(i,e)?[i]:[]:L.find.matches(e,L.grep(t,function(e){return 1===e.nodeType;}));},L.fn.extend({find:function find(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(L(e).filter(function(){for(t=0;t<i;t++){if(L.contains(r[t],this))return!0;}}));for(n=this.pushStack([]),t=0;t<i;t++){L.find(e,r[t],n);}return i>1?L.uniqueSort(n):n;},filter:function filter(e){return this.pushStack(H(this,e||[],!1));},not:function not(e){return this.pushStack(H(this,e||[],!0));},is:function is(e){return!!H(this,"string"==typeof e&&Y.test(e)?L(e):e||[],!1).length;}});var P,O=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(L.fn.init=function(e,t,n){var i,r;if(!e)return this;if(n=n||P,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:O.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof L?t[0]:t,L.merge(this,L.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(i[1])&&L.isPlainObject(t))for(i in t){y(this[i])?this[i](t[i]):this.attr(i,t[i]);}return this;}return(r=o.getElementById(i[2]))&&(this[0]=r,this.length=1),this;}return e.nodeType?(this[0]=e,this.length=1,this):y(e)?void 0!==n.ready?n.ready(e):e(L):L.makeArray(e,this);}).prototype=L.fn,P=L(o);var A=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};function R(e,t){for(;(e=e[t])&&1!==e.nodeType;){;}return e;}L.fn.extend({has:function has(e){var t=L(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++){if(L.contains(this,t[e]))return!0;}});},closest:function closest(e,t){var n,i=0,r=this.length,a=[],o="string"!=typeof e&&L(e);if(!Y.test(e))for(;i<r;i++){for(n=this[i];n&&n!==t;n=n.parentNode){if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&L.find.matchesSelector(n,e))){a.push(n);break;}}}return this.pushStack(a.length>1?L.uniqueSort(a):a);},index:function index(e){return e?"string"==typeof e?c.call(L(e),this[0]):c.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;},add:function add(e,t){return this.pushStack(L.uniqueSort(L.merge(this.get(),L(e,t))));},addBack:function addBack(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e));}}),L.each({parent:function parent(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null;},parents:function parents(e){return S(e,"parentNode");},parentsUntil:function parentsUntil(e,t,n){return S(e,"parentNode",n);},next:function next(e){return R(e,"nextSibling");},prev:function prev(e){return R(e,"previousSibling");},nextAll:function nextAll(e){return S(e,"nextSibling");},prevAll:function prevAll(e){return S(e,"previousSibling");},nextUntil:function nextUntil(e,t,n){return S(e,"nextSibling",n);},prevUntil:function prevUntil(e,t,n){return S(e,"previousSibling",n);},siblings:function siblings(e){return x((e.parentNode||{}).firstChild,e);},children:function children(e){return x(e.firstChild);},contents:function contents(e){return E(e,"iframe")?e.contentDocument:(E(e,"template")&&(e=e.content||e),L.merge([],e.childNodes));}},function(e,t){L.fn[e]=function(n,i){var r=L.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=L.filter(i,r)),this.length>1&&(I[e]||L.uniqueSort(r),A.test(e)&&r.reverse()),this.pushStack(r);};});var j=/[^\x20\t\r\n\f]+/g;function F(e){return e;}function N(e){throw e;}function W(e,t,n,i){var r;try{e&&y(r=e.promise)?r.call(e).done(t).fail(n):e&&y(r=e.then)?r.call(e,t,n):t.apply(void 0,[e].slice(i));}catch(e){n.apply(void 0,[e]);}}L.Callbacks=function(e){e="string"==typeof e?function(e){var t={};return L.each(e.match(j)||[],function(e,n){t[n]=!0;}),t;}(e):L.extend({},e);var t,n,i,r,a=[],o=[],l=-1,s=function s(){for(r=r||e.once,i=t=!0;o.length;l=-1){for(n=o.shift();++l<a.length;){!1===a[l].apply(n[0],n[1])&&e.stopOnFalse&&(l=a.length,n=!1);}}e.memory||(n=!1),t=!1,r&&(a=n?[]:"");},d={add:function add(){return a&&(n&&!t&&(l=a.length-1,o.push(n)),function t(n){L.each(n,function(n,i){y(i)?e.unique&&d.has(i)||a.push(i):i&&i.length&&"string"!==w(i)&&t(i);});}(arguments),n&&!t&&s()),this;},remove:function remove(){return L.each(arguments,function(e,t){for(var n;(n=L.inArray(t,a,n))>-1;){a.splice(n,1),n<=l&&l--;}}),this;},has:function has(e){return e?L.inArray(e,a)>-1:a.length>0;},empty:function empty(){return a&&(a=[]),this;},disable:function disable(){return r=o=[],a=n="",this;},disabled:function disabled(){return!a;},lock:function lock(){return r=o=[],n||t||(a=n=""),this;},locked:function locked(){return!!r;},fireWith:function fireWith(e,n){return r||(n=[e,(n=n||[]).slice?n.slice():n],o.push(n),t||s()),this;},fire:function fire(){return d.fireWith(this,arguments),this;},fired:function fired(){return!!i;}};return d;},L.extend({Deferred:function Deferred(e){var t=[["notify","progress",L.Callbacks("memory"),L.Callbacks("memory"),2],["resolve","done",L.Callbacks("once memory"),L.Callbacks("once memory"),0,"resolved"],["reject","fail",L.Callbacks("once memory"),L.Callbacks("once memory"),1,"rejected"]],i="pending",r={state:function state(){return i;},always:function always(){return a.done(arguments).fail(arguments),this;},"catch":function _catch(e){return r.then(null,e);},pipe:function pipe(){var e=arguments;return L.Deferred(function(n){L.each(t,function(t,i){var r=y(e[i[4]])&&e[i[4]];a[i[1]](function(){var e=r&&r.apply(this,arguments);e&&y(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[i[0]+"With"](this,r?[e]:arguments);});}),e=null;}).promise();},then:function then(e,i,r){var a=0;function o(e,t,i,r){return function(){var l=this,s=arguments,d=function d(){var n,d;if(!(e<a)){if((n=i.apply(l,s))===t.promise())throw new TypeError("Thenable self-resolution");d=n&&("object"==_typeof(n)||"function"==typeof n)&&n.then,y(d)?r?d.call(n,o(a,t,F,r),o(a,t,N,r)):(a++,d.call(n,o(a,t,F,r),o(a,t,N,r),o(a,t,F,t.notifyWith))):(i!==F&&(l=void 0,s=[n]),(r||t.resolveWith)(l,s));}},u=r?d:function(){try{d();}catch(n){L.Deferred.exceptionHook&&L.Deferred.exceptionHook(n,u.stackTrace),e+1>=a&&(i!==N&&(l=void 0,s=[n]),t.rejectWith(l,s));}};e?u():(L.Deferred.getStackHook&&(u.stackTrace=L.Deferred.getStackHook()),n.setTimeout(u));};}return L.Deferred(function(n){t[0][3].add(o(0,n,y(r)?r:F,n.notifyWith)),t[1][3].add(o(0,n,y(e)?e:F)),t[2][3].add(o(0,n,y(i)?i:N));}).promise();},promise:function promise(e){return null!=e?L.extend(e,r):r;}},a={};return L.each(t,function(e,n){var o=n[2],l=n[5];r[n[1]]=o.add,l&&o.add(function(){i=l;},t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),o.add(n[3].fire),a[n[0]]=function(){return a[n[0]+"With"](this===a?void 0:this,arguments),this;},a[n[0]+"With"]=o.fireWith;}),r.promise(a),e&&e.call(a,a),a;},when:function when(e){var t=arguments.length,n=t,i=Array(n),r=s.call(arguments),a=L.Deferred(),o=function o(e){return function(n){i[e]=this,r[e]=arguments.length>1?s.call(arguments):n,--t||a.resolveWith(i,r);};};if(t<=1&&(W(e,a.done(o(n)).resolve,a.reject,!t),"pending"===a.state()||y(r[n]&&r[n].then)))return a.then();for(;n--;){W(r[n],o(n),a.reject);}return a.promise();}});var z=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;L.Deferred.exceptionHook=function(e,t){n.console&&n.console.warn&&e&&z.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t);},L.readyException=function(e){n.setTimeout(function(){throw e;});};var B=L.Deferred();function V(){o.removeEventListener("DOMContentLoaded",V),n.removeEventListener("load",V),L.ready();}L.fn.ready=function(e){return B.then(e)["catch"](function(e){L.readyException(e);}),this;},L.extend({isReady:!1,readyWait:1,ready:function ready(e){(!0===e?--L.readyWait:L.isReady)||(L.isReady=!0,!0!==e&&--L.readyWait>0||B.resolveWith(o,[L]));}}),L.ready.then=B.then,"complete"===o.readyState||"loading"!==o.readyState&&!o.documentElement.doScroll?n.setTimeout(L.ready):(o.addEventListener("DOMContentLoaded",V),n.addEventListener("load",V));var G=function G(e,t,n,i,r,a,o){var l=0,s=e.length,d=null==n;if("object"===w(n))for(l in r=!0,n){G(e,t,l,n[l],!0,a,o);}else if(void 0!==i&&(r=!0,y(i)||(o=!0),d&&(o?(t.call(e,i),t=null):(d=t,t=function t(e,_t2,n){return d.call(L(e),n);})),t))for(;l<s;l++){t(e[l],n,o?i:i.call(e[l],l,t(e[l],n)));}return r?e:d?t.call(e):s?t(e[0],n):a;},U=/^-ms-/,Z=/-([a-z])/g;function q(e,t){return t.toUpperCase();}function X(e){return e.replace(U,"ms-").replace(Z,q);}var J=function J(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType;};function $(){this.expando=L.expando+$.uid++;}$.uid=1,$.prototype={cache:function cache(e){var t=e[this.expando];return t||(t={},J(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t;},set:function set(e,t,n){var i,r=this.cache(e);if("string"==typeof t)r[X(t)]=n;else for(i in t){r[X(i)]=t[i];}return r;},get:function get(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)];},access:function access(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t);},remove:function remove(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in i?[t]:t.match(j)||[]).length;for(;n--;){delete i[t[n]];}}(void 0===t||L.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando]);}},hasData:function hasData(e){var t=e[this.expando];return void 0!==t&&!L.isEmptyObject(t);}};var K=new $(),Q=new $(),ee=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,te=/[A-Z]/g;function ne(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(te,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ee.test(e)?JSON.parse(e):e);}(n);}catch(e){}Q.set(e,t,n);}else n=void 0;return n;}L.extend({hasData:function hasData(e){return Q.hasData(e)||K.hasData(e);},data:function data(e,t,n){return Q.access(e,t,n);},removeData:function removeData(e,t){Q.remove(e,t);},_data:function _data(e,t,n){return K.access(e,t,n);},_removeData:function _removeData(e,t){K.remove(e,t);}}),L.fn.extend({data:function data(e,t){var n,i,r,a=this[0],o=a&&a.attributes;if(void 0===e){if(this.length&&(r=Q.get(a),1===a.nodeType&&!K.get(a,"hasDataAttrs"))){for(n=o.length;n--;){o[n]&&0===(i=o[n].name).indexOf("data-")&&(i=X(i.slice(5)),ne(a,i,r[i]));}K.set(a,"hasDataAttrs",!0);}return r;}return"object"==_typeof(e)?this.each(function(){Q.set(this,e);}):G(this,function(t){var n;if(a&&void 0===t)return void 0!==(n=Q.get(a,e))?n:void 0!==(n=ne(a,e))?n:void 0;this.each(function(){Q.set(this,e,t);});},null,t,arguments.length>1,null,!0);},removeData:function removeData(e){return this.each(function(){Q.remove(this,e);});}}),L.extend({queue:function queue(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=K.get(e,t),n&&(!i||Array.isArray(n)?i=K.access(e,t,L.makeArray(n)):i.push(n)),i||[];},dequeue:function dequeue(e,t){t=t||"fx";var n=L.queue(e,t),i=n.length,r=n.shift(),a=L._queueHooks(e,t);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete a.stop,r.call(e,function(){L.dequeue(e,t);},a)),!i&&a&&a.empty.fire();},_queueHooks:function _queueHooks(e,t){var n=t+"queueHooks";return K.get(e,n)||K.access(e,n,{empty:L.Callbacks("once memory").add(function(){K.remove(e,[t+"queue",n]);})});}}),L.fn.extend({queue:function queue(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?L.queue(this[0],e):void 0===t?this:this.each(function(){var n=L.queue(this,e,t);L._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&L.dequeue(this,e);});},dequeue:function dequeue(e){return this.each(function(){L.dequeue(this,e);});},clearQueue:function clearQueue(e){return this.queue(e||"fx",[]);},promise:function promise(e,t){var n,i=1,r=L.Deferred(),a=this,o=this.length,l=function l(){--i||r.resolveWith(a,[a]);};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;){(n=K.get(a[o],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(l));}return l(),r.promise(t);}});var ie=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,re=new RegExp("^(?:([+-])=|)("+ie+")([a-z%]*)$","i"),ae=["Top","Right","Bottom","Left"],oe=function oe(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&L.contains(e.ownerDocument,e)&&"none"===L.css(e,"display");},le=function le(e,t,n,i){var r,a,o={};for(a in t){o[a]=e.style[a],e.style[a]=t[a];}for(a in r=n.apply(e,i||[]),t){e.style[a]=o[a];}return r;};function se(e,t,n,i){var r,a,o=20,l=i?function(){return i.cur();}:function(){return L.css(e,t,"");},s=l(),d=n&&n[3]||(L.cssNumber[t]?"":"px"),u=(L.cssNumber[t]||"px"!==d&&+s)&&re.exec(L.css(e,t));if(u&&u[3]!==d){for(s/=2,d=d||u[3],u=+s||1;o--;){L.style(e,t,u+d),(1-a)*(1-(a=l()/s||.5))<=0&&(o=0),u/=a;}u*=2,L.style(e,t,u+d),n=n||[];}return n&&(u=+u||+s||0,r=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=d,i.start=u,i.end=r)),r;}var de={};function ue(e){var t,n=e.ownerDocument,i=e.nodeName,r=de[i];return r||(t=n.body.appendChild(n.createElement(i)),r=L.css(t,"display"),t.parentNode.removeChild(t),"none"===r&&(r="block"),de[i]=r,r);}function ce(e,t){for(var n,i,r=[],a=0,o=e.length;a<o;a++){(i=e[a]).style&&(n=i.style.display,t?("none"===n&&(r[a]=K.get(i,"display")||null,r[a]||(i.style.display="")),""===i.style.display&&oe(i)&&(r[a]=ue(i))):"none"!==n&&(r[a]="none",K.set(i,"display",n)));}for(a=0;a<o;a++){null!=r[a]&&(e[a].style.display=r[a]);}return e;}L.fn.extend({show:function show(){return ce(this,!0);},hide:function hide(){return ce(this);},toggle:function toggle(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){oe(this)?L(this).show():L(this).hide();});}});var he=/^(?:checkbox|radio)$/i,pe=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,fe=/^$|^module$|\/(?:java|ecma)script/i,me={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ge(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&E(e,t)?L.merge([e],n):n;}function _e(e,t){for(var n=0,i=e.length;n<i;n++){K.set(e[n],"globalEval",!t||K.get(t[n],"globalEval"));}}me.optgroup=me.option,me.tbody=me.tfoot=me.colgroup=me.caption=me.thead,me.th=me.td;var ye,ve,Me=/<|&#?\w+;/;function be(e,t,n,i,r){for(var a,o,l,s,d,u,c=t.createDocumentFragment(),h=[],p=0,f=e.length;p<f;p++){if((a=e[p])||0===a)if("object"===w(a))L.merge(h,a.nodeType?[a]:a);else if(Me.test(a)){for(o=o||c.appendChild(t.createElement("div")),l=(pe.exec(a)||["",""])[1].toLowerCase(),s=me[l]||me._default,o.innerHTML=s[1]+L.htmlPrefilter(a)+s[2],u=s[0];u--;){o=o.lastChild;}L.merge(h,o.childNodes),(o=c.firstChild).textContent="";}else h.push(t.createTextNode(a));}for(c.textContent="",p=0;a=h[p++];){if(i&&L.inArray(a,i)>-1)r&&r.push(a);else if(d=L.contains(a.ownerDocument,a),o=ge(c.appendChild(a),"script"),d&&_e(o),n)for(u=0;a=o[u++];){fe.test(a.type||"")&&n.push(a);}}return c;}ye=o.createDocumentFragment().appendChild(o.createElement("div")),(ve=o.createElement("input")).setAttribute("type","radio"),ve.setAttribute("checked","checked"),ve.setAttribute("name","t"),ye.appendChild(ve),_.checkClone=ye.cloneNode(!0).cloneNode(!0).lastChild.checked,ye.innerHTML="<textarea>x</textarea>",_.noCloneChecked=!!ye.cloneNode(!0).lastChild.defaultValue;var we=o.documentElement,Le=/^key/,De=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0;}function Se(){return!1;}function xe(){try{return o.activeElement;}catch(e){}}function Ye(e,t,n,i,r,a){var o,l;if("object"==_typeof(t)){for(l in"string"!=typeof n&&(i=i||n,n=void 0),t){Ye(e,l,n,i,t[l],a);}return e;}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),!1===r)r=Se;else if(!r)return e;return 1===a&&(o=r,(r=function r(e){return L().off(e),o.apply(this,arguments);}).guid=o.guid||(o.guid=L.guid++)),e.each(function(){L.event.add(this,t,r,i,n);});}L.event={global:{},add:function add(e,t,n,i,r){var a,o,l,s,d,u,c,h,p,f,m,g=K.get(e);if(g)for(n.handler&&(n=(a=n).handler,r=a.selector),r&&L.find.matchesSelector(we,r),n.guid||(n.guid=L.guid++),(s=g.events)||(s=g.events={}),(o=g.handle)||(o=g.handle=function(t){return void 0!==L&&L.event.triggered!==t.type?L.event.dispatch.apply(e,arguments):void 0;}),d=(t=(t||"").match(j)||[""]).length;d--;){p=m=(l=Te.exec(t[d])||[])[1],f=(l[2]||"").split(".").sort(),p&&(c=L.event.special[p]||{},p=(r?c.delegateType:c.bindType)||p,c=L.event.special[p]||{},u=L.extend({type:p,origType:m,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&L.expr.match.needsContext.test(r),namespace:f.join(".")},a),(h=s[p])||((h=s[p]=[]).delegateCount=0,c.setup&&!1!==c.setup.call(e,i,f,o)||e.addEventListener&&e.addEventListener(p,o)),c.add&&(c.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),r?h.splice(h.delegateCount++,0,u):h.push(u),L.event.global[p]=!0);}},remove:function remove(e,t,n,i,r){var a,o,l,s,d,u,c,h,p,f,m,g=K.hasData(e)&&K.get(e);if(g&&(s=g.events)){for(d=(t=(t||"").match(j)||[""]).length;d--;){if(p=m=(l=Te.exec(t[d])||[])[1],f=(l[2]||"").split(".").sort(),p){for(c=L.event.special[p]||{},h=s[p=(i?c.delegateType:c.bindType)||p]||[],l=l[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=a=h.length;a--;){u=h[a],!r&&m!==u.origType||n&&n.guid!==u.guid||l&&!l.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(h.splice(a,1),u.selector&&h.delegateCount--,c.remove&&c.remove.call(e,u));}o&&!h.length&&(c.teardown&&!1!==c.teardown.call(e,f,g.handle)||L.removeEvent(e,p,g.handle),delete s[p]);}else for(p in s){L.event.remove(e,p+t[d],n,i,!0);}}L.isEmptyObject(s)&&K.remove(e,"handle events");}},dispatch:function dispatch(e){var t,n,i,r,a,o,l=L.event.fix(e),s=new Array(arguments.length),d=(K.get(this,"events")||{})[l.type]||[],u=L.event.special[l.type]||{};for(s[0]=l,t=1;t<arguments.length;t++){s[t]=arguments[t];}if(l.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,l)){for(o=L.event.handlers.call(this,l,d),t=0;(r=o[t++])&&!l.isPropagationStopped();){for(l.currentTarget=r.elem,n=0;(a=r.handlers[n++])&&!l.isImmediatePropagationStopped();){l.rnamespace&&!l.rnamespace.test(a.namespace)||(l.handleObj=a,l.data=a.data,void 0!==(i=((L.event.special[a.origType]||{}).handle||a.handler).apply(r.elem,s))&&!1===(l.result=i)&&(l.preventDefault(),l.stopPropagation()));}}return u.postDispatch&&u.postDispatch.call(this,l),l.result;}},handlers:function handlers(e,t){var n,i,r,a,o,l=[],s=t.delegateCount,d=e.target;if(s&&d.nodeType&&!("click"===e.type&&e.button>=1))for(;d!==this;d=d.parentNode||this){if(1===d.nodeType&&("click"!==e.type||!0!==d.disabled)){for(a=[],o={},n=0;n<s;n++){void 0===o[r=(i=t[n]).selector+" "]&&(o[r]=i.needsContext?L(r,this).index(d)>-1:L.find(r,this,null,[d]).length),o[r]&&a.push(i);}a.length&&l.push({elem:d,handlers:a});}}return d=this,s<t.length&&l.push({elem:d,handlers:t.slice(s)}),l;},addProp:function addProp(e,t){Object.defineProperty(L.Event.prototype,e,{enumerable:!0,configurable:!0,get:y(t)?function(){if(this.originalEvent)return t(this.originalEvent);}:function(){if(this.originalEvent)return this.originalEvent[e];},set:function set(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t});}});},fix:function fix(e){return e[L.expando]?e:new L.Event(e);},special:{load:{noBubble:!0},focus:{trigger:function trigger(){if(this!==xe()&&this.focus)return this.focus(),!1;},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===xe()&&this.blur)return this.blur(),!1;},delegateType:"focusout"},click:{trigger:function trigger(){if("checkbox"===this.type&&this.click&&E(this,"input"))return this.click(),!1;},_default:function _default(e){return E(e.target,"a");}},beforeunload:{postDispatch:function postDispatch(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result);}}}},L.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n);},L.Event=function(e,t){if(!(this instanceof L.Event))return new L.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&L.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[L.expando]=!0;},L.Event.prototype={constructor:L.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault();},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation();},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation();}},L.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function which(e){var t=e.button;return null==e.which&&Le.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&De.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which;}},L.event.addProp),L.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){L.event.special[e]={delegateType:t,bindType:t,handle:function handle(e){var n,i=e.relatedTarget,r=e.handleObj;return i&&(i===this||L.contains(this,i))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n;}};}),L.fn.extend({on:function on(e,t,n,i){return Ye(this,e,t,n,i);},one:function one(e,t,n,i){return Ye(this,e,t,n,i,1);},off:function off(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,L(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==_typeof(e)){for(r in e){this.off(r,t,e[r]);}return this;}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){L.event.remove(this,e,n,t);});}});var Ee=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ce=/<script|<style|<link/i,He=/checked\s*(?:[^=]|=\s*.checked.)/i,Pe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return E(e,"table")&&E(11!==t.nodeType?t:t.firstChild,"tr")&&L(e).children("tbody")[0]||e;}function Ae(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e;}function Ie(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e;}function Re(e,t){var n,i,r,a,o,l,s,d;if(1===t.nodeType){if(K.hasData(e)&&(a=K.access(e),o=K.set(t,a),d=a.events))for(r in delete o.handle,o.events={},d){for(n=0,i=d[r].length;n<i;n++){L.event.add(t,r,d[r][n]);}}Q.hasData(e)&&(l=Q.access(e),s=L.extend({},l),Q.set(t,s));}}function je(e,t,n,i){t=d.apply([],t);var r,a,o,l,s,u,c=0,h=e.length,p=h-1,f=t[0],m=y(f);if(m||h>1&&"string"==typeof f&&!_.checkClone&&He.test(f))return e.each(function(r){var a=e.eq(r);m&&(t[0]=f.call(this,r,a.html())),je(a,t,n,i);});if(h&&(a=(r=be(t,e[0].ownerDocument,!1,e,i)).firstChild,1===r.childNodes.length&&(r=a),a||i)){for(l=(o=L.map(ge(r,"script"),Ae)).length;c<h;c++){s=r,c!==p&&(s=L.clone(s,!0,!0),l&&L.merge(o,ge(s,"script"))),n.call(e[c],s,c);}if(l)for(u=o[o.length-1].ownerDocument,L.map(o,Ie),c=0;c<l;c++){s=o[c],fe.test(s.type||"")&&!K.access(s,"globalEval")&&L.contains(u,s)&&(s.src&&"module"!==(s.type||"").toLowerCase()?L._evalUrl&&L._evalUrl(s.src):b(s.textContent.replace(Pe,""),u,s));}}return e;}function Fe(e,t,n){for(var i,r=t?L.filter(t,e):e,a=0;null!=(i=r[a]);a++){n||1!==i.nodeType||L.cleanData(ge(i)),i.parentNode&&(n&&L.contains(i.ownerDocument,i)&&_e(ge(i,"script")),i.parentNode.removeChild(i));}return e;}L.extend({htmlPrefilter:function htmlPrefilter(e){return e.replace(Ee,"<$1></$2>");},clone:function clone(e,t,n){var i,r,a,o,l,s,d,u=e.cloneNode(!0),c=L.contains(e.ownerDocument,e);if(!(_.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||L.isXMLDoc(e)))for(o=ge(u),i=0,r=(a=ge(e)).length;i<r;i++){l=a[i],s=o[i],d=void 0,"input"===(d=s.nodeName.toLowerCase())&&he.test(l.type)?s.checked=l.checked:"input"!==d&&"textarea"!==d||(s.defaultValue=l.defaultValue);}if(t)if(n)for(a=a||ge(e),o=o||ge(u),i=0,r=a.length;i<r;i++){Re(a[i],o[i]);}else Re(e,u);return(o=ge(u,"script")).length>0&&_e(o,!c&&ge(e,"script")),u;},cleanData:function cleanData(e){for(var t,n,i,r=L.event.special,a=0;void 0!==(n=e[a]);a++){if(J(n)){if(t=n[K.expando]){if(t.events)for(i in t.events){r[i]?L.event.remove(n,i):L.removeEvent(n,i,t.handle);}n[K.expando]=void 0;}n[Q.expando]&&(n[Q.expando]=void 0);}}}}),L.fn.extend({detach:function detach(e){return Fe(this,e,!0);},remove:function remove(e){return Fe(this,e);},text:function text(e){return G(this,function(e){return void 0===e?L.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e);});},null,e,arguments.length);},append:function append(){return je(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e);});},prepend:function prepend(){return je(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild);}});},before:function before(){return je(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this);});},after:function after(){return je(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling);});},empty:function empty(){for(var e,t=0;null!=(e=this[t]);t++){1===e.nodeType&&(L.cleanData(ge(e,!1)),e.textContent="");}return this;},clone:function clone(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return L.clone(this,e,t);});},html:function html(e){return G(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ce.test(e)&&!me[(pe.exec(e)||["",""])[1].toLowerCase()]){e=L.htmlPrefilter(e);try{for(;n<i;n++){1===(t=this[n]||{}).nodeType&&(L.cleanData(ge(t,!1)),t.innerHTML=e);}t=0;}catch(e){}}t&&this.empty().append(e);},null,e,arguments.length);},replaceWith:function replaceWith(){var e=[];return je(this,arguments,function(t){var n=this.parentNode;L.inArray(this,e)<0&&(L.cleanData(ge(this)),n&&n.replaceChild(t,this));},e);}}),L.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){L.fn[e]=function(e){for(var n,i=[],r=L(e),a=r.length-1,o=0;o<=a;o++){n=o===a?this:this.clone(!0),L(r[o])[t](n),u.apply(i,n.get());}return this.pushStack(i);};});var Ne=new RegExp("^("+ie+")(?!px)[a-z%]+$","i"),We=function We(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e);},ze=new RegExp(ae.join("|"),"i");function Be(e,t,n){var i,r,a,o,l=e.style;return(n=n||We(e))&&(""!==(o=n.getPropertyValue(t)||n[t])||L.contains(e.ownerDocument,e)||(o=L.style(e,t)),!_.pixelBoxStyles()&&Ne.test(o)&&ze.test(t)&&(i=l.width,r=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=o,o=n.width,l.width=i,l.minWidth=r,l.maxWidth=a)),void 0!==o?o+"":o;}function Ve(e,t){return{get:function get(){if(!e())return(this.get=t).apply(this,arguments);delete this.get;}};}!function(){function e(){if(u){d.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",we.appendChild(d).appendChild(u);var e=n.getComputedStyle(u);i="1%"!==e.top,s=12===t(e.marginLeft),u.style.right="60%",l=36===t(e.right),r=36===t(e.width),u.style.position="absolute",a=36===u.offsetWidth||"absolute",we.removeChild(d),u=null;}}function t(e){return Math.round(parseFloat(e));}var i,r,a,l,s,d=o.createElement("div"),u=o.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",_.clearCloneStyle="content-box"===u.style.backgroundClip,L.extend(_,{boxSizingReliable:function boxSizingReliable(){return e(),r;},pixelBoxStyles:function pixelBoxStyles(){return e(),l;},pixelPosition:function pixelPosition(){return e(),i;},reliableMarginLeft:function reliableMarginLeft(){return e(),s;},scrollboxSize:function scrollboxSize(){return e(),a;}}));}();var Ge=/^(none|table(?!-c[ea]).+)/,Ue=/^--/,Ze={position:"absolute",visibility:"hidden",display:"block"},qe={letterSpacing:"0",fontWeight:"400"},Xe=["Webkit","Moz","ms"],Je=o.createElement("div").style;function $e(e){var t=L.cssProps[e];return t||(t=L.cssProps[e]=function(e){if(e in Je)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=Xe.length;n--;){if((e=Xe[n]+t)in Je)return e;}}(e)||e),t;}function Ke(e,t,n){var i=re.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t;}function Qe(e,t,n,i,r,a){var o="width"===t?1:0,l=0,s=0;if(n===(i?"border":"content"))return 0;for(;o<4;o+=2){"margin"===n&&(s+=L.css(e,n+ae[o],!0,r)),i?("content"===n&&(s-=L.css(e,"padding"+ae[o],!0,r)),"margin"!==n&&(s-=L.css(e,"border"+ae[o]+"Width",!0,r))):(s+=L.css(e,"padding"+ae[o],!0,r),"padding"!==n?s+=L.css(e,"border"+ae[o]+"Width",!0,r):l+=L.css(e,"border"+ae[o]+"Width",!0,r));}return!i&&a>=0&&(s+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-a-s-l-.5))),s;}function et(e,t,n){var i=We(e),r=Be(e,t,i),a="border-box"===L.css(e,"boxSizing",!1,i),o=a;if(Ne.test(r)){if(!n)return r;r="auto";}return o=o&&(_.boxSizingReliable()||r===e.style[t]),("auto"===r||!parseFloat(r)&&"inline"===L.css(e,"display",!1,i))&&(r=e["offset"+t[0].toUpperCase()+t.slice(1)],o=!0),(r=parseFloat(r)||0)+Qe(e,t,n||(a?"border":"content"),o,i,r)+"px";}function tt(e,t,n,i,r){return new tt.prototype.init(e,t,n,i,r);}L.extend({cssHooks:{opacity:{get:function get(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n;}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function style(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,a,o,l=X(t),s=Ue.test(t),d=e.style;if(s||(t=$e(l)),o=L.cssHooks[t]||L.cssHooks[l],void 0===n)return o&&"get"in o&&void 0!==(r=o.get(e,!1,i))?r:d[t];"string"===(a=_typeof(n))&&(r=re.exec(n))&&r[1]&&(n=se(e,t,r),a="number"),null!=n&&n==n&&("number"===a&&(n+=r&&r[3]||(L.cssNumber[l]?"":"px")),_.clearCloneStyle||""!==n||0!==t.indexOf("background")||(d[t]="inherit"),o&&"set"in o&&void 0===(n=o.set(e,n,i))||(s?d.setProperty(t,n):d[t]=n));}},css:function css(e,t,n,i){var r,a,o,l=X(t);return Ue.test(t)||(t=$e(l)),(o=L.cssHooks[t]||L.cssHooks[l])&&"get"in o&&(r=o.get(e,!0,n)),void 0===r&&(r=Be(e,t,i)),"normal"===r&&t in qe&&(r=qe[t]),""===n||n?(a=parseFloat(r),!0===n||isFinite(a)?a||0:r):r;}}),L.each(["height","width"],function(e,t){L.cssHooks[t]={get:function get(e,n,i){if(n)return!Ge.test(L.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,i):le(e,Ze,function(){return et(e,t,i);});},set:function set(e,n,i){var r,a=We(e),o="border-box"===L.css(e,"boxSizing",!1,a),l=i&&Qe(e,t,i,o,a);return o&&_.scrollboxSize()===a.position&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(a[t])-Qe(e,t,"border",!1,a)-.5)),l&&(r=re.exec(n))&&"px"!==(r[3]||"px")&&(e.style[t]=n,n=L.css(e,t)),Ke(0,n,l);}};}),L.cssHooks.marginLeft=Ve(_.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-le(e,{marginLeft:0},function(){return e.getBoundingClientRect().left;}))+"px";}),L.each({margin:"",padding:"",border:"Width"},function(e,t){L.cssHooks[e+t]={expand:function expand(n){for(var i=0,r={},a="string"==typeof n?n.split(" "):[n];i<4;i++){r[e+ae[i]+t]=a[i]||a[i-2]||a[0];}return r;}},"margin"!==e&&(L.cssHooks[e+t].set=Ke);}),L.fn.extend({css:function css(e,t){return G(this,function(e,t,n){var i,r,a={},o=0;if(Array.isArray(t)){for(i=We(e),r=t.length;o<r;o++){a[t[o]]=L.css(e,t[o],!1,i);}return a;}return void 0!==n?L.style(e,t,n):L.css(e,t);},e,t,arguments.length>1);}}),L.Tween=tt,tt.prototype={constructor:tt,init:function init(e,t,n,i,r,a){this.elem=e,this.prop=n,this.easing=r||L.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=a||(L.cssNumber[n]?"":"px");},cur:function cur(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this);},run:function run(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=L.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this;}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function get(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=L.css(e.elem,e.prop,""))&&"auto"!==t?t:0;},set:function set(e){L.fx.step[e.prop]?L.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[L.cssProps[e.prop]]&&!L.cssHooks[e.prop]?e.elem[e.prop]=e.now:L.style(e.elem,e.prop,e.now+e.unit);}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function set(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now);}},L.easing={linear:function linear(e){return e;},swing:function swing(e){return .5-Math.cos(e*Math.PI)/2;},_default:"swing"},L.fx=tt.prototype.init,L.fx.step={};var nt,it,rt=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function ot(){it&&(!1===o.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(ot):n.setTimeout(ot,L.fx.interval),L.fx.tick());}function lt(){return n.setTimeout(function(){nt=void 0;}),nt=Date.now();}function st(e,t){var n,i=0,r={height:e};for(t=t?1:0;i<4;i+=2-t){r["margin"+(n=ae[i])]=r["padding"+n]=e;}return t&&(r.opacity=r.width=e),r;}function dt(e,t,n){for(var i,r=(ut.tweeners[t]||[]).concat(ut.tweeners["*"]),a=0,o=r.length;a<o;a++){if(i=r[a].call(n,t,e))return i;}}function ut(e,t,n){var i,r,a=0,o=ut.prefilters.length,l=L.Deferred().always(function(){delete s.elem;}),s=function s(){if(r)return!1;for(var t=nt||lt(),n=Math.max(0,d.startTime+d.duration-t),i=1-(n/d.duration||0),a=0,o=d.tweens.length;a<o;a++){d.tweens[a].run(i);}return l.notifyWith(e,[d,i,n]),i<1&&o?n:(o||l.notifyWith(e,[d,1,0]),l.resolveWith(e,[d]),!1);},d=l.promise({elem:e,props:L.extend({},t),opts:L.extend(!0,{specialEasing:{},easing:L.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||lt(),duration:n.duration,tweens:[],createTween:function createTween(t,n){var i=L.Tween(e,d.opts,t,n,d.opts.specialEasing[t]||d.opts.easing);return d.tweens.push(i),i;},stop:function stop(t){var n=0,i=t?d.tweens.length:0;if(r)return this;for(r=!0;n<i;n++){d.tweens[n].run(1);}return t?(l.notifyWith(e,[d,1,0]),l.resolveWith(e,[d,t])):l.rejectWith(e,[d,t]),this;}}),u=d.props;for(!function(e,t){var n,i,r,a,o;for(n in e){if(r=t[i=X(n)],a=e[n],Array.isArray(a)&&(r=a[1],a=e[n]=a[0]),n!==i&&(e[i]=a,delete e[n]),(o=L.cssHooks[i])&&("expand"in o))for(n in a=o.expand(a),delete e[i],a){(n in e)||(e[n]=a[n],t[n]=r);}else t[i]=r;}}(u,d.opts.specialEasing);a<o;a++){if(i=ut.prefilters[a].call(d,e,u,d.opts))return y(i.stop)&&(L._queueHooks(d.elem,d.opts.queue).stop=i.stop.bind(i)),i;}return L.map(u,dt,d),y(d.opts.start)&&d.opts.start.call(e,d),d.progress(d.opts.progress).done(d.opts.done,d.opts.complete).fail(d.opts.fail).always(d.opts.always),L.fx.timer(L.extend(s,{elem:e,anim:d,queue:d.opts.queue})),d;}L.Animation=L.extend(ut,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,re.exec(t),n),n;}]},tweener:function tweener(e,t){y(e)?(t=e,e=["*"]):e=e.match(j);for(var n,i=0,r=e.length;i<r;i++){n=e[i],ut.tweeners[n]=ut.tweeners[n]||[],ut.tweeners[n].unshift(t);}},prefilters:[function(e,t,n){var i,r,a,o,l,s,d,u,c="width"in t||"height"in t,h=this,p={},f=e.style,m=e.nodeType&&oe(e),g=K.get(e,"fxshow");for(i in n.queue||(null==(o=L._queueHooks(e,"fx")).unqueued&&(o.unqueued=0,l=o.empty.fire,o.empty.fire=function(){o.unqueued||l();}),o.unqueued++,h.always(function(){h.always(function(){o.unqueued--,L.queue(e,"fx").length||o.empty.fire();});})),t){if(r=t[i],rt.test(r)){if(delete t[i],a=a||"toggle"===r,r===(m?"hide":"show")){if("show"!==r||!g||void 0===g[i])continue;m=!0;}p[i]=g&&g[i]||L.style(e,i);}}if((s=!L.isEmptyObject(t))||!L.isEmptyObject(p))for(i in c&&1===e.nodeType&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],null==(d=g&&g.display)&&(d=K.get(e,"display")),"none"===(u=L.css(e,"display"))&&(d?u=d:(ce([e],!0),d=e.style.display||d,u=L.css(e,"display"),ce([e]))),("inline"===u||"inline-block"===u&&null!=d)&&"none"===L.css(e,"float")&&(s||(h.done(function(){f.display=d;}),null==d&&(u=f.display,d="none"===u?"":u)),f.display="inline-block")),n.overflow&&(f.overflow="hidden",h.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2];})),s=!1,p){s||(g?"hidden"in g&&(m=g.hidden):g=K.access(e,"fxshow",{display:d}),a&&(g.hidden=!m),m&&ce([e],!0),h.done(function(){for(i in m||ce([e]),K.remove(e,"fxshow"),p){L.style(e,i,p[i]);}})),s=dt(m?g[i]:0,i,h),i in g||(g[i]=s.start,m&&(s.end=s.start,s.start=0));}}],prefilter:function prefilter(e,t){t?ut.prefilters.unshift(e):ut.prefilters.push(e);}}),L.speed=function(e,t,n){var i=e&&"object"==_typeof(e)?L.extend({},e):{complete:n||!n&&t||y(e)&&e,duration:e,easing:n&&t||t&&!y(t)&&t};return L.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in L.fx.speeds?i.duration=L.fx.speeds[i.duration]:i.duration=L.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){y(i.old)&&i.old.call(this),i.queue&&L.dequeue(this,i.queue);},i;},L.fn.extend({fadeTo:function fadeTo(e,t,n,i){return this.filter(oe).css("opacity",0).show().end().animate({opacity:t},e,n,i);},animate:function animate(e,t,n,i){var r=L.isEmptyObject(e),a=L.speed(t,n,i),o=function o(){var t=ut(this,L.extend({},e),a);(r||K.get(this,"finish"))&&t.stop(!0);};return o.finish=o,r||!1===a.queue?this.each(o):this.queue(a.queue,o);},stop:function stop(e,t,n){var i=function i(e){var t=e.stop;delete e.stop,t(n);};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",a=L.timers,o=K.get(this);if(r)o[r]&&o[r].stop&&i(o[r]);else for(r in o){o[r]&&o[r].stop&&at.test(r)&&i(o[r]);}for(r=a.length;r--;){a[r].elem!==this||null!=e&&a[r].queue!==e||(a[r].anim.stop(n),t=!1,a.splice(r,1));}!t&&n||L.dequeue(this,e);});},finish:function finish(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=K.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],a=L.timers,o=i?i.length:0;for(n.finish=!0,L.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=a.length;t--;){a[t].elem===this&&a[t].queue===e&&(a[t].anim.stop(!0),a.splice(t,1));}for(t=0;t<o;t++){i[t]&&i[t].finish&&i[t].finish.call(this);}delete n.finish;});}}),L.each(["toggle","show","hide"],function(e,t){var n=L.fn[t];L.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(st(t,!0),e,i,r);};}),L.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){L.fn[e]=function(e,n,i){return this.animate(t,e,n,i);};}),L.timers=[],L.fx.tick=function(){var e,t=0,n=L.timers;for(nt=Date.now();t<n.length;t++){(e=n[t])()||n[t]!==e||n.splice(t--,1);}n.length||L.fx.stop(),nt=void 0;},L.fx.timer=function(e){L.timers.push(e),L.fx.start();},L.fx.interval=13,L.fx.start=function(){it||(it=!0,ot());},L.fx.stop=function(){it=null;},L.fx.speeds={slow:600,fast:200,_default:400},L.fn.delay=function(e,t){return e=L.fx&&L.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,i){var r=n.setTimeout(t,e);i.stop=function(){n.clearTimeout(r);};});},function(){var e=o.createElement("input"),t=o.createElement("select").appendChild(o.createElement("option"));e.type="checkbox",_.checkOn=""!==e.value,_.optSelected=t.selected,(e=o.createElement("input")).value="t",e.type="radio",_.radioValue="t"===e.value;}();var ct,ht=L.expr.attrHandle;L.fn.extend({attr:function attr(e,t){return G(this,L.attr,e,t,arguments.length>1);},removeAttr:function removeAttr(e){return this.each(function(){L.removeAttr(this,e);});}}),L.extend({attr:function attr(e,t,n){var i,r,a=e.nodeType;if(3!==a&&8!==a&&2!==a)return void 0===e.getAttribute?L.prop(e,t,n):(1===a&&L.isXMLDoc(e)||(r=L.attrHooks[t.toLowerCase()]||(L.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void L.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=L.find.attr(e,t))?void 0:i);},attrHooks:{type:{set:function set(e,t){if(!_.radioValue&&"radio"===t&&E(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t;}}}},removeAttr:function removeAttr(e,t){var n,i=0,r=t&&t.match(j);if(r&&1===e.nodeType)for(;n=r[i++];){e.removeAttribute(n);}}}),ct={set:function set(e,t,n){return!1===t?L.removeAttr(e,n):e.setAttribute(n,n),n;}},L.each(L.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||L.find.attr;ht[t]=function(e,t,i){var r,a,o=t.toLowerCase();return i||(a=ht[o],ht[o]=r,r=null!=n(e,t,i)?o:null,ht[o]=a),r;};});var pt=/^(?:input|select|textarea|button)$/i,ft=/^(?:a|area)$/i;function mt(e){return(e.match(j)||[]).join(" ");}function gt(e){return e.getAttribute&&e.getAttribute("class")||"";}function _t(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(j)||[];}L.fn.extend({prop:function prop(e,t){return G(this,L.prop,e,t,arguments.length>1);},removeProp:function removeProp(e){return this.each(function(){delete this[L.propFix[e]||e];});}}),L.extend({prop:function prop(e,t,n){var i,r,a=e.nodeType;if(3!==a&&8!==a&&2!==a)return 1===a&&L.isXMLDoc(e)||(t=L.propFix[t]||t,r=L.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t];},propHooks:{tabIndex:{get:function get(e){var t=L.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||ft.test(e.nodeName)&&e.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}}),_.optSelected||(L.propHooks.selected={get:function get(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null;},set:function set(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex);}}),L.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){L.propFix[this.toLowerCase()]=this;}),L.fn.extend({addClass:function addClass(e){var t,n,i,r,a,o,l,s=0;if(y(e))return this.each(function(t){L(this).addClass(e.call(this,t,gt(this)));});if((t=_t(e)).length)for(;n=this[s++];){if(r=gt(n),i=1===n.nodeType&&" "+mt(r)+" "){for(o=0;a=t[o++];){i.indexOf(" "+a+" ")<0&&(i+=a+" ");}r!==(l=mt(i))&&n.setAttribute("class",l);}}return this;},removeClass:function removeClass(e){var t,n,i,r,a,o,l,s=0;if(y(e))return this.each(function(t){L(this).removeClass(e.call(this,t,gt(this)));});if(!arguments.length)return this.attr("class","");if((t=_t(e)).length)for(;n=this[s++];){if(r=gt(n),i=1===n.nodeType&&" "+mt(r)+" "){for(o=0;a=t[o++];){for(;i.indexOf(" "+a+" ")>-1;){i=i.replace(" "+a+" "," ");}}r!==(l=mt(i))&&n.setAttribute("class",l);}}return this;},toggleClass:function toggleClass(e,t){var n=_typeof(e),i="string"===n||Array.isArray(e);return"boolean"==typeof t&&i?t?this.addClass(e):this.removeClass(e):y(e)?this.each(function(n){L(this).toggleClass(e.call(this,n,gt(this),t),t);}):this.each(function(){var t,r,a,o;if(i)for(r=0,a=L(this),o=_t(e);t=o[r++];){a.hasClass(t)?a.removeClass(t):a.addClass(t);}else void 0!==e&&"boolean"!==n||((t=gt(this))&&K.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":K.get(this,"__className__")||""));});},hasClass:function hasClass(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];){if(1===n.nodeType&&(" "+mt(gt(n))+" ").indexOf(t)>-1)return!0;}return!1;}});var yt=/\r/g;L.fn.extend({val:function val(e){var t,n,i,r=this[0];return arguments.length?(i=y(e),this.each(function(n){var r;1===this.nodeType&&(null==(r=i?e.call(this,n,L(this).val()):e)?r="":"number"==typeof r?r+="":Array.isArray(r)&&(r=L.map(r,function(e){return null==e?"":e+"";})),(t=L.valHooks[this.type]||L.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r));})):r?(t=L.valHooks[r.type]||L.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:"string"==typeof(n=r.value)?n.replace(yt,""):null==n?"":n:void 0;}}),L.extend({valHooks:{option:{get:function get(e){var t=L.find.attr(e,"value");return null!=t?t:mt(L.text(e));}},select:{get:function get(e){var t,n,i,r=e.options,a=e.selectedIndex,o="select-one"===e.type,l=o?null:[],s=o?a+1:r.length;for(i=a<0?s:o?a:0;i<s;i++){if(((n=r[i]).selected||i===a)&&!n.disabled&&(!n.parentNode.disabled||!E(n.parentNode,"optgroup"))){if(t=L(n).val(),o)return t;l.push(t);}}return l;},set:function set(e,t){for(var n,i,r=e.options,a=L.makeArray(t),o=r.length;o--;){((i=r[o]).selected=L.inArray(L.valHooks.option.get(i),a)>-1)&&(n=!0);}return n||(e.selectedIndex=-1),a;}}}}),L.each(["radio","checkbox"],function(){L.valHooks[this]={set:function set(e,t){if(Array.isArray(t))return e.checked=L.inArray(L(e).val(),t)>-1;}},_.checkOn||(L.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value;});}),_.focusin="onfocusin"in n;var vt=/^(?:focusinfocus|focusoutblur)$/,Mt=function Mt(e){e.stopPropagation();};L.extend(L.event,{trigger:function trigger(e,t,i,r){var a,l,s,d,u,c,h,p,m=[i||o],g=f.call(e,"type")?e.type:e,_=f.call(e,"namespace")?e.namespace.split("."):[];if(l=p=s=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!vt.test(g+L.event.triggered)&&(g.indexOf(".")>-1&&(_=g.split("."),g=_.shift(),_.sort()),u=g.indexOf(":")<0&&"on"+g,(e=e[L.expando]?e:new L.Event(g,"object"==_typeof(e)&&e)).isTrigger=r?2:3,e.namespace=_.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+_.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=null==t?[e]:L.makeArray(t,[e]),h=L.event.special[g]||{},r||!h.trigger||!1!==h.trigger.apply(i,t))){if(!r&&!h.noBubble&&!v(i)){for(d=h.delegateType||g,vt.test(d+g)||(l=l.parentNode);l;l=l.parentNode){m.push(l),s=l;}s===(i.ownerDocument||o)&&m.push(s.defaultView||s.parentWindow||n);}for(a=0;(l=m[a++])&&!e.isPropagationStopped();){p=l,e.type=a>1?d:h.bindType||g,(c=(K.get(l,"events")||{})[e.type]&&K.get(l,"handle"))&&c.apply(l,t),(c=u&&l[u])&&c.apply&&J(l)&&(e.result=c.apply(l,t),!1===e.result&&e.preventDefault());}return e.type=g,r||e.isDefaultPrevented()||h._default&&!1!==h._default.apply(m.pop(),t)||!J(i)||u&&y(i[g])&&!v(i)&&((s=i[u])&&(i[u]=null),L.event.triggered=g,e.isPropagationStopped()&&p.addEventListener(g,Mt),i[g](),e.isPropagationStopped()&&p.removeEventListener(g,Mt),L.event.triggered=void 0,s&&(i[u]=s)),e.result;}},simulate:function simulate(e,t,n){var i=L.extend(new L.Event(),n,{type:e,isSimulated:!0});L.event.trigger(i,null,t);}}),L.fn.extend({trigger:function trigger(e,t){return this.each(function(){L.event.trigger(e,t,this);});},triggerHandler:function triggerHandler(e,t){var n=this[0];if(n)return L.event.trigger(e,t,n,!0);}}),_.focusin||L.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function n(e){L.event.simulate(t,e.target,L.event.fix(e));};L.event.special[t]={setup:function setup(){var i=this.ownerDocument||this,r=K.access(i,t);r||i.addEventListener(e,n,!0),K.access(i,t,(r||0)+1);},teardown:function teardown(){var i=this.ownerDocument||this,r=K.access(i,t)-1;r?K.access(i,t,r):(i.removeEventListener(e,n,!0),K.remove(i,t));}};});var bt=n.location,wt=Date.now(),Lt=/\?/;L.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=new n.DOMParser().parseFromString(e,"text/xml");}catch(e){t=void 0;}return t&&!t.getElementsByTagName("parsererror").length||L.error("Invalid XML: "+e),t;};var Dt=/\[\]$/,Tt=/\r?\n/g,kt=/^(?:submit|button|image|reset|file)$/i,St=/^(?:input|select|textarea|keygen)/i;function xt(e,t,n,i){var r;if(Array.isArray(t))L.each(t,function(t,r){n||Dt.test(e)?i(e,r):xt(e+"["+("object"==_typeof(r)&&null!=r?t:"")+"]",r,n,i);});else if(n||"object"!==w(t))i(e,t);else for(r in t){xt(e+"["+r+"]",t[r],n,i);}}L.param=function(e,t){var n,i=[],r=function r(e,t){var n=y(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n);};if(Array.isArray(e)||e.jquery&&!L.isPlainObject(e))L.each(e,function(){r(this.name,this.value);});else for(n in e){xt(n,e[n],t,r);}return i.join("&");},L.fn.extend({serialize:function serialize(){return L.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){var e=L.prop(this,"elements");return e?L.makeArray(e):this;}).filter(function(){var e=this.type;return this.name&&!L(this).is(":disabled")&&St.test(this.nodeName)&&!kt.test(e)&&(this.checked||!he.test(e));}).map(function(e,t){var n=L(this).val();return null==n?null:Array.isArray(n)?L.map(n,function(e){return{name:t.name,value:e.replace(Tt,"\r\n")};}):{name:t.name,value:n.replace(Tt,"\r\n")};}).get();}});var Yt=/%20/g,Et=/#.*$/,Ct=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:GET|HEAD)$/,Ot=/^\/\//,At={},It={},Rt="*/".concat("*"),jt=o.createElement("a");function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,a=t.toLowerCase().match(j)||[];if(y(n))for(;i=a[r++];){"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n);}};}function Nt(e,t,n,i){var r={},a=e===It;function o(l){var s;return r[l]=!0,L.each(e[l]||[],function(e,l){var d=l(t,n,i);return"string"!=typeof d||a||r[d]?a?!(s=d):void 0:(t.dataTypes.unshift(d),o(d),!1);}),s;}return o(t.dataTypes[0])||!r["*"]&&o("*");}function Wt(e,t){var n,i,r=L.ajaxSettings.flatOptions||{};for(n in t){void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);}return i&&L.extend(!0,e,i),e;}jt.href=bt.href,L.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":L.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function ajaxSetup(e,t){return t?Wt(Wt(e,L.ajaxSettings),t):Wt(L.ajaxSettings,e);},ajaxPrefilter:Ft(At),ajaxTransport:Ft(It),ajax:function ajax(e,t){"object"==_typeof(e)&&(t=e,e=void 0),t=t||{};var i,r,a,l,s,d,u,c,h,p,f=L.ajaxSetup({},t),m=f.context||f,g=f.context&&(m.nodeType||m.jquery)?L(m):L.event,_=L.Deferred(),y=L.Callbacks("once memory"),v=f.statusCode||{},M={},b={},w="canceled",D={readyState:0,getResponseHeader:function getResponseHeader(e){var t;if(u){if(!l)for(l={};t=Ht.exec(a);){l[t[1].toLowerCase()]=t[2];}t=l[e.toLowerCase()];}return null==t?null:t;},getAllResponseHeaders:function getAllResponseHeaders(){return u?a:null;},setRequestHeader:function setRequestHeader(e,t){return null==u&&(e=b[e.toLowerCase()]=b[e.toLowerCase()]||e,M[e]=t),this;},overrideMimeType:function overrideMimeType(e){return null==u&&(f.mimeType=e),this;},statusCode:function statusCode(e){var t;if(e)if(u)D.always(e[D.status]);else for(t in e){v[t]=[v[t],e[t]];}return this;},abort:function abort(e){var t=e||w;return i&&i.abort(t),T(0,t),this;}};if(_.promise(D),f.url=((e||f.url||bt.href)+"").replace(Ot,bt.protocol+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=(f.dataType||"*").toLowerCase().match(j)||[""],null==f.crossDomain){d=o.createElement("a");try{d.href=f.url,d.href=d.href,f.crossDomain=jt.protocol+"//"+jt.host!=d.protocol+"//"+d.host;}catch(e){f.crossDomain=!0;}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=L.param(f.data,f.traditional)),Nt(At,f,t,D),u)return D;for(h in(c=L.event&&f.global)&&0==L.active++&&L.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Pt.test(f.type),r=f.url.replace(Et,""),f.hasContent?f.data&&f.processData&&0===(f.contentType||"").indexOf("application/x-www-form-urlencoded")&&(f.data=f.data.replace(Yt,"+")):(p=f.url.slice(r.length),f.data&&(f.processData||"string"==typeof f.data)&&(r+=(Lt.test(r)?"&":"?")+f.data,delete f.data),!1===f.cache&&(r=r.replace(Ct,"$1"),p=(Lt.test(r)?"&":"?")+"_="+wt++ +p),f.url=r+p),f.ifModified&&(L.lastModified[r]&&D.setRequestHeader("If-Modified-Since",L.lastModified[r]),L.etag[r]&&D.setRequestHeader("If-None-Match",L.etag[r])),(f.data&&f.hasContent&&!1!==f.contentType||t.contentType)&&D.setRequestHeader("Content-Type",f.contentType),D.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Rt+"; q=0.01":""):f.accepts["*"]),f.headers){D.setRequestHeader(h,f.headers[h]);}if(f.beforeSend&&(!1===f.beforeSend.call(m,D,f)||u))return D.abort();if(w="abort",y.add(f.complete),D.done(f.success),D.fail(f.error),i=Nt(It,f,t,D)){if(D.readyState=1,c&&g.trigger("ajaxSend",[D,f]),u)return D;f.async&&f.timeout>0&&(s=n.setTimeout(function(){D.abort("timeout");},f.timeout));try{u=!1,i.send(M,T);}catch(e){if(u)throw e;T(-1,e);}}else T(-1,"No Transport");function T(e,t,o,l){var d,h,p,M,b,w=t;u||(u=!0,s&&n.clearTimeout(s),i=void 0,a=l||"",D.readyState=e>0?4:0,d=e>=200&&e<300||304===e,o&&(M=function(e,t,n){for(var i,r,a,o,l=e.contents,s=e.dataTypes;"*"===s[0];){s.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));}if(i)for(r in l){if(l[r]&&l[r].test(i)){s.unshift(r);break;}}if(s[0]in n)a=s[0];else{for(r in n){if(!s[0]||e.converters[r+" "+s[0]]){a=r;break;}o||(o=r);}a=a||o;}if(a)return a!==s[0]&&s.unshift(a),n[a];}(f,D,o)),M=function(e,t,n,i){var r,a,o,l,s,d={},u=e.dataTypes.slice();if(u[1])for(o in e.converters){d[o.toLowerCase()]=e.converters[o];}for(a=u.shift();a;){if(e.responseFields[a]&&(n[e.responseFields[a]]=t),!s&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),s=a,a=u.shift())if("*"===a)a=s;else if("*"!==s&&s!==a){if(!(o=d[s+" "+a]||d["* "+a]))for(r in d){if((l=r.split(" "))[1]===a&&(o=d[s+" "+l[0]]||d["* "+l[0]])){!0===o?o=d[r]:!0!==d[r]&&(a=l[0],u.unshift(l[1]));break;}}if(!0!==o)if(o&&e["throws"])t=o(t);else try{t=o(t);}catch(e){return{state:"parsererror",error:o?e:"No conversion from "+s+" to "+a};}}}return{state:"success",data:t};}(f,M,D,d),d?(f.ifModified&&((b=D.getResponseHeader("Last-Modified"))&&(L.lastModified[r]=b),(b=D.getResponseHeader("etag"))&&(L.etag[r]=b)),204===e||"HEAD"===f.type?w="nocontent":304===e?w="notmodified":(w=M.state,h=M.data,d=!(p=M.error))):(p=w,!e&&w||(w="error",e<0&&(e=0))),D.status=e,D.statusText=(t||w)+"",d?_.resolveWith(m,[h,w,D]):_.rejectWith(m,[D,w,p]),D.statusCode(v),v=void 0,c&&g.trigger(d?"ajaxSuccess":"ajaxError",[D,f,d?h:p]),y.fireWith(m,[D,w]),c&&(g.trigger("ajaxComplete",[D,f]),--L.active||L.event.trigger("ajaxStop")));}return D;},getJSON:function getJSON(e,t,n){return L.get(e,t,n,"json");},getScript:function getScript(e,t){return L.get(e,void 0,t,"script");}}),L.each(["get","post"],function(e,t){L[t]=function(e,n,i,r){return y(n)&&(r=r||i,i=n,n=void 0),L.ajax(L.extend({url:e,type:t,dataType:r,data:n,success:i},L.isPlainObject(e)&&e));};}),L._evalUrl=function(e){return L.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0});},L.fn.extend({wrapAll:function wrapAll(e){var t;return this[0]&&(y(e)&&(e=e.call(this[0])),t=L(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;){e=e.firstElementChild;}return e;}).append(this)),this;},wrapInner:function wrapInner(e){return y(e)?this.each(function(t){L(this).wrapInner(e.call(this,t));}):this.each(function(){var t=L(this),n=t.contents();n.length?n.wrapAll(e):t.append(e);});},wrap:function wrap(e){var t=y(e);return this.each(function(n){L(this).wrapAll(t?e.call(this,n):e);});},unwrap:function unwrap(e){return this.parent(e).not("body").each(function(){L(this).replaceWith(this.childNodes);}),this;}}),L.expr.pseudos.hidden=function(e){return!L.expr.pseudos.visible(e);},L.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length);},L.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest();}catch(e){}};var zt={0:200,1223:204},Bt=L.ajaxSettings.xhr();_.cors=!!Bt&&"withCredentials"in Bt,_.ajax=Bt=!!Bt,L.ajaxTransport(function(e){var _t3,i;if(_.cors||Bt&&!e.crossDomain)return{send:function send(r,a){var o,l=e.xhr();if(l.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields){l[o]=e.xhrFields[o];}for(o in e.mimeType&&l.overrideMimeType&&l.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest"),r){l.setRequestHeader(o,r[o]);}_t3=function t(e){return function(){_t3&&(_t3=i=l.onload=l.onerror=l.onabort=l.ontimeout=l.onreadystatechange=null,"abort"===e?l.abort():"error"===e?"number"!=typeof l.status?a(0,"error"):a(l.status,l.statusText):a(zt[l.status]||l.status,l.statusText,"text"!==(l.responseType||"text")||"string"!=typeof l.responseText?{binary:l.response}:{text:l.responseText},l.getAllResponseHeaders()));};},l.onload=_t3(),i=l.onerror=l.ontimeout=_t3("error"),void 0!==l.onabort?l.onabort=i:l.onreadystatechange=function(){4===l.readyState&&n.setTimeout(function(){_t3&&i();});},_t3=_t3("abort");try{l.send(e.hasContent&&e.data||null);}catch(e){if(_t3)throw e;}},abort:function abort(){_t3&&_t3();}};}),L.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1);}),L.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(e){return L.globalEval(e),e;}}}),L.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET");}),L.ajaxTransport("script",function(e){var t,_n2;if(e.crossDomain)return{send:function send(i,r){t=L("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",_n2=function n(e){t.remove(),_n2=null,e&&r("error"===e.type?404:200,e.type);}),o.head.appendChild(t[0]);},abort:function abort(){_n2&&_n2();}};});var Vt,Gt=[],Ut=/(=)\?(?=&|$)|\?\?/;L.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var e=Gt.pop()||L.expando+"_"+wt++;return this[e]=!0,e;}}),L.ajaxPrefilter("json jsonp",function(e,t,i){var r,a,o,l=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(l||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=y(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,l?e[l]=e[l].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Lt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||L.error(r+" was not called"),o[0];},e.dataTypes[0]="json",a=n[r],n[r]=function(){o=arguments;},i.always(function(){void 0===a?L(n).removeProp(r):n[r]=a,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&y(a)&&a(o[0]),o=a=void 0;}),"script";}),_.createHTMLDocument=((Vt=o.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),L.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(_.createHTMLDocument?((i=(t=o.implementation.createHTMLDocument("")).createElement("base")).href=o.location.href,t.head.appendChild(i)):t=o),a=!n&&[],(r=C.exec(e))?[t.createElement(r[1])]:(r=be([e],t,a),a&&a.length&&L(a).remove(),L.merge([],r.childNodes)));var i,r,a;},L.fn.load=function(e,t,n){var i,r,a,o=this,l=e.indexOf(" ");return l>-1&&(i=mt(e.slice(l)),e=e.slice(0,l)),y(t)?(n=t,t=void 0):t&&"object"==_typeof(t)&&(r="POST"),o.length>0&&L.ajax({url:e,type:r||"GET",dataType:"html",data:t}).done(function(e){a=arguments,o.html(i?L("<div>").append(L.parseHTML(e)).find(i):e);}).always(n&&function(e,t){o.each(function(){n.apply(this,a||[e.responseText,t,e]);});}),this;},L.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){L.fn[t]=function(e){return this.on(t,e);};}),L.expr.pseudos.animated=function(e){return L.grep(L.timers,function(t){return e===t.elem;}).length;},L.offset={setOffset:function setOffset(e,t,n){var i,r,a,o,l,s,d=L.css(e,"position"),u=L(e),c={};"static"===d&&(e.style.position="relative"),l=u.offset(),a=L.css(e,"top"),s=L.css(e,"left"),("absolute"===d||"fixed"===d)&&(a+s).indexOf("auto")>-1?(o=(i=u.position()).top,r=i.left):(o=parseFloat(a)||0,r=parseFloat(s)||0),y(t)&&(t=t.call(e,n,L.extend({},l))),null!=t.top&&(c.top=t.top-l.top+o),null!=t.left&&(c.left=t.left-l.left+r),"using"in t?t.using.call(e,c):u.css(c);}},L.fn.extend({offset:function offset(e){if(arguments.length)return void 0===e?this:this.each(function(t){L.offset.setOffset(this,e,t);});var t,n,i=this[0];return i?i.getClientRects().length?(t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0;},position:function position(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};if("fixed"===L.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===L.css(e,"position");){e=e.parentNode;}e&&e!==i&&1===e.nodeType&&((r=L(e).offset()).top+=L.css(e,"borderTopWidth",!0),r.left+=L.css(e,"borderLeftWidth",!0));}return{top:t.top-r.top-L.css(i,"marginTop",!0),left:t.left-r.left-L.css(i,"marginLeft",!0)};}},offsetParent:function offsetParent(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===L.css(e,"position");){e=e.offsetParent;}return e||we;});}}),L.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;L.fn[e]=function(i){return G(this,function(e,i,r){var a;if(v(e)?a=e:9===e.nodeType&&(a=e.defaultView),void 0===r)return a?a[t]:e[i];a?a.scrollTo(n?a.pageXOffset:r,n?r:a.pageYOffset):e[i]=r;},e,i,arguments.length);};}),L.each(["top","left"],function(e,t){L.cssHooks[t]=Ve(_.pixelPosition,function(e,n){if(n)return n=Be(e,t),Ne.test(n)?L(e).position()[t]+"px":n;});}),L.each({Height:"height",Width:"width"},function(e,t){L.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){L.fn[i]=function(r,a){var o=arguments.length&&(n||"boolean"!=typeof r),l=n||(!0===r||!0===a?"margin":"border");return G(this,function(t,n,r){var a;return v(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(a=t.documentElement,Math.max(t.body["scroll"+e],a["scroll"+e],t.body["offset"+e],a["offset"+e],a["client"+e])):void 0===r?L.css(t,n,l):L.style(t,n,r,l);},t,o?r:void 0,o);};});}),L.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){L.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t);};}),L.fn.extend({hover:function hover(e,t){return this.mouseenter(e).mouseleave(t||e);}}),L.fn.extend({bind:function bind(e,t,n){return this.on(e,null,t,n);},unbind:function unbind(e,t){return this.off(e,null,t);},delegate:function delegate(e,t,n,i){return this.on(t,e,n,i);},undelegate:function undelegate(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n);}}),L.proxy=function(e,t){var n,i,r;if("string"==typeof t&&(n=e[t],t=e,e=n),y(e))return i=s.call(arguments,2),(r=function r(){return e.apply(t||this,i.concat(s.call(arguments)));}).guid=e.guid=e.guid||L.guid++,r;},L.holdReady=function(e){e?L.readyWait++:L.ready(!0);},L.isArray=Array.isArray,L.parseJSON=JSON.parse,L.nodeName=E,L.isFunction=y,L.isWindow=v,L.camelCase=X,L.type=w,L.now=Date.now,L.isNumeric=function(e){var t=L.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e));},void 0===(i=function(){return L;}.apply(t,[]))||(e.exports=i);var Zt=n.jQuery,qt=n.$;return L.noConflict=function(e){return n.$===L&&(n.$=qt),e&&n.jQuery===L&&(n.jQuery=Zt),L;},r||(n.jQuery=n.$=L),L;});},function(e,t,n){"use strict";e.exports=n(12),e.exports.easing=n(165),e.exports.canvas=n(166),e.exports.options=n(167);},function(e,t,n){"use strict";var i=n(2);e.exports={_set:function _set(e,t){return i.merge(this[e]||(this[e]={}),t);}};},function(e,t,n){var i,r;n(154),i=[n(1)],void 0===(r=function(e){return function(){var t,n,i,r=0,a={error:"error",info:"info",success:"success",warning:"warning"},o={clear:function clear(n,i){var r=c();t||l(r),s(n,r,i)||function(n){for(var i=t.children(),r=i.length-1;r>=0;r--){s(e(i[r]),n);}}(r);},remove:function remove(n){var i=c();t||l(i),n&&0===e(":focus",n).length?h(n):t.children().length&&t.remove();},error:function error(e,t,n){return u({type:a.error,iconClass:c().iconClasses.error,message:e,optionsOverride:n,title:t});},getContainer:l,info:function info(e,t,n){return u({type:a.info,iconClass:c().iconClasses.info,message:e,optionsOverride:n,title:t});},options:{},subscribe:function subscribe(e){n=e;},success:function success(e,t,n){return u({type:a.success,iconClass:c().iconClasses.success,message:e,optionsOverride:n,title:t});},version:"2.1.4",warning:function warning(e,t,n){return u({type:a.warning,iconClass:c().iconClasses.warning,message:e,optionsOverride:n,title:t});}};return o;function l(n,i){return n||(n=c()),(t=e("#"+n.containerId)).length?t:(i&&(t=function(n){return(t=e("<div/>").attr("id",n.containerId).addClass(n.positionClass)).appendTo(e(n.target)),t;}(n)),t);}function s(t,n,i){var r=!(!i||!i.force)&&i.force;return!(!t||!r&&0!==e(":focus",t).length||(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function complete(){h(t);}}),0));}function d(e){n&&n(e);}function u(n){var a=c(),o=n.iconClass||a.iconClass;if(void 0!==n.optionsOverride&&(a=e.extend(a,n.optionsOverride),o=n.optionsOverride.iconClass||o),!function(e,t){if(e.preventDuplicates){if(t.message===i)return!0;i=t.message;}return!1;}(a,n)){r++,t=l(a,!0);var s=null,u=e("<div/>"),p=e("<div/>"),f=e("<div/>"),m=e("<div/>"),g=e(a.closeHtml),_={intervalId:null,hideEta:null,maxHideTime:null},y={toastId:r,state:"visible",startTime:new Date(),options:a,map:n};return n.iconClass&&u.addClass(a.toastClass).addClass(o),function(){if(n.title){var e=n.title;a.escapeHtml&&(e=v(n.title)),p.append(e).addClass(a.titleClass),u.append(p);}}(),function(){if(n.message){var e=n.message;a.escapeHtml&&(e=v(n.message)),f.append(e).addClass(a.messageClass),u.append(f);}}(),a.closeButton&&(g.addClass(a.closeClass).attr("role","button"),u.prepend(g)),a.progressBar&&(m.addClass(a.progressClass),u.prepend(m)),a.rtl&&u.addClass("rtl"),a.newestOnTop?t.prepend(u):t.append(u),function(){var e="";switch(n.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive";}u.attr("aria-live",e);}(),u.hide(),u[a.showMethod]({duration:a.showDuration,easing:a.showEasing,complete:a.onShown}),a.timeOut>0&&(s=setTimeout(M,a.timeOut),_.maxHideTime=parseFloat(a.timeOut),_.hideEta=new Date().getTime()+_.maxHideTime,a.progressBar&&(_.intervalId=setInterval(L,10))),a.closeOnHover&&u.hover(w,b),!a.onclick&&a.tapToDismiss&&u.click(M),a.closeButton&&g&&g.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&!0!==e.cancelBubble&&(e.cancelBubble=!0),a.onCloseClick&&a.onCloseClick(e),M(!0);}),a.onclick&&u.click(function(e){a.onclick(e),M();}),d(y),a.debug&&console&&console.log(y),u;}function v(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}function M(t){var n=t&&!1!==a.closeMethod?a.closeMethod:a.hideMethod,i=t&&!1!==a.closeDuration?a.closeDuration:a.hideDuration,r=t&&!1!==a.closeEasing?a.closeEasing:a.hideEasing;if(!e(":focus",u).length||t)return clearTimeout(_.intervalId),u[n]({duration:i,easing:r,complete:function complete(){h(u),clearTimeout(s),a.onHidden&&"hidden"!==y.state&&a.onHidden(),y.state="hidden",y.endTime=new Date(),d(y);}});}function b(){(a.timeOut>0||a.extendedTimeOut>0)&&(s=setTimeout(M,a.extendedTimeOut),_.maxHideTime=parseFloat(a.extendedTimeOut),_.hideEta=new Date().getTime()+_.maxHideTime);}function w(){clearTimeout(s),_.hideEta=0,u.stop(!0,!0)[a.showMethod]({duration:a.showDuration,easing:a.showEasing});}function L(){var e=(_.hideEta-new Date().getTime())/_.maxHideTime*100;m.width(e+"%");}}function c(){return e.extend({},{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1},o.options);}function h(e){t||(t=l()),e.is(":visible")||(e.remove(),e=null,0===t.children().length&&(t.remove(),i=void 0));}}();}.apply(t,i))||(e.exports=r);},function(e,t,n){var i=n(164)();i.helpers=n(2),n(168)(i),i.Animation=n(139),i.animationService=n(140),i.defaults=n(3),i.Element=n(6),i.elements=n(8),i.Interaction=n(141),i.layouts=n(9),i.platform=n(142),i.plugins=n(143),i.Scale=n(10),i.scaleService=n(7),i.Ticks=n(11),i.Tooltip=n(144),n(179)(i),n(180)(i),n(181)(i),n(182)(i),n(183)(i),n(184)(i),n(185)(i),n(186)(i),n(187)(i),n(188)(i),n(189)(i),n(190)(i),n(191)(i),n(192)(i),n(193)(i),n(194)(i),n(195)(i),n(196)(i),n(197)(i),n(198)(i),n(199)(i),n(200)(i);var r=n(201);for(var a in r){r.hasOwnProperty(a)&&i.plugins.register(r[a]);}i.platform.initialize(),e.exports=i,"undefined"!=typeof window&&(window.Chart=i),i.Legend=r.legend._element,i.Title=r.title._element,i.pluginService=i.plugins,i.PluginBase=i.Element.extend({}),i.canvasHelpers=i.helpers.canvas,i.layoutService=i.layouts;},function(e,t,n){"use strict";var i=n(138),r=n(2);var a=function a(e){r.extend(this,e),this.initialize.apply(this,arguments);};r.extend(a.prototype,{initialize:function initialize(){this.hidden=!1;},pivot:function pivot(){var e=this;return e._view||(e._view=r.clone(e._model)),e._start={},e;},transition:function transition(e){var t=this,n=t._model,r=t._start,a=t._view;return n&&1!==e?(a||(a=t._view={}),r||(r=t._start={}),function(e,t,n,r){var a,o,l,s,d,u,c,h,p,f=Object.keys(n);for(a=0,o=f.length;a<o;++a){if(u=n[l=f[a]],t.hasOwnProperty(l)||(t[l]=u),(s=t[l])!==u&&"_"!==l[0]){if(e.hasOwnProperty(l)||(e[l]=s),(c=_typeof(u))==_typeof(d=e[l]))if("string"===c){if((h=i(d)).valid&&(p=i(u)).valid){t[l]=p.mix(h,r).rgbString();continue;}}else if("number"===c&&isFinite(d)&&isFinite(u)){t[l]=d+(u-d)*r;continue;}t[l]=u;}}}(r,a,n,e),t):(t._view=n,t._start=null,t);},tooltipPosition:function tooltipPosition(){return{x:this._model.x,y:this._model.y};},hasValue:function hasValue(){return r.isNumber(this._model.x)&&r.isNumber(this._model.y);}}),a.extend=r.inherits,e.exports=a;},function(e,t,n){"use strict";var i=n(3),r=n(2),a=n(9);e.exports={constructors:{},defaults:{},registerScaleType:function registerScaleType(e,t,n){this.constructors[e]=t,this.defaults[e]=r.clone(n);},getScaleConstructor:function getScaleConstructor(e){return this.constructors.hasOwnProperty(e)?this.constructors[e]:void 0;},getScaleDefaults:function getScaleDefaults(e){return this.defaults.hasOwnProperty(e)?r.merge({},[i.scale,this.defaults[e]]):{};},updateScaleDefaults:function updateScaleDefaults(e,t){this.defaults.hasOwnProperty(e)&&(this.defaults[e]=r.extend(this.defaults[e],t));},addScalesToLayout:function addScalesToLayout(e){r.each(e.scales,function(t){t.fullWidth=t.options.fullWidth,t.position=t.options.position,t.weight=t.options.weight,a.addBox(e,t);});}};},function(e,t,n){"use strict";e.exports={},e.exports.Arc=n(173),e.exports.Line=n(174),e.exports.Point=n(175),e.exports.Rectangle=n(176);},function(e,t,n){"use strict";var i=n(2);function r(e,t){return i.where(e,function(e){return e.position===t;});}function a(e,t){e.forEach(function(e,t){return e._tmpIndex_=t,e;}),e.sort(function(e,n){var i=t?n:e,r=t?e:n;return i.weight===r.weight?i._tmpIndex_-r._tmpIndex_:i.weight-r.weight;}),e.forEach(function(e){delete e._tmpIndex_;});}e.exports={defaults:{},addBox:function addBox(e,t){e.boxes||(e.boxes=[]),t.fullWidth=t.fullWidth||!1,t.position=t.position||"top",t.weight=t.weight||0,e.boxes.push(t);},removeBox:function removeBox(e,t){var n=e.boxes?e.boxes.indexOf(t):-1;-1!==n&&e.boxes.splice(n,1);},configure:function configure(e,t,n){for(var i,r=["fullWidth","position","weight"],a=r.length,o=0;o<a;++o){i=r[o],n.hasOwnProperty(i)&&(t[i]=n[i]);}},update:function update(e,t,n){if(e){var o=e.options.layout||{},l=i.options.toPadding(o.padding),s=l.left,d=l.right,u=l.top,c=l.bottom,h=r(e.boxes,"left"),p=r(e.boxes,"right"),f=r(e.boxes,"top"),m=r(e.boxes,"bottom"),g=r(e.boxes,"chartArea");a(h,!0),a(p,!1),a(f,!0),a(m,!1);var _=t-s-d,y=n-u-c,v=y/2,M=(t-_/2)/(h.length+p.length),b=(n-v)/(f.length+m.length),w=_,L=y,D=[];i.each(h.concat(p,f,m),function(e){var t,n=e.isHorizontal();n?(t=e.update(e.fullWidth?_:w,b),L-=t.height):(t=e.update(M,L),w-=t.width),D.push({horizontal:n,minSize:t,box:e});});var T=0,k=0,S=0,x=0;i.each(f.concat(m),function(e){if(e.getPadding){var t=e.getPadding();T=Math.max(T,t.left),k=Math.max(k,t.right);}}),i.each(h.concat(p),function(e){if(e.getPadding){var t=e.getPadding();S=Math.max(S,t.top),x=Math.max(x,t.bottom);}});var Y=s,E=d,C=u,H=c;i.each(h.concat(p),F),i.each(h,function(e){Y+=e.width;}),i.each(p,function(e){E+=e.width;}),i.each(f.concat(m),F),i.each(f,function(e){C+=e.height;}),i.each(m,function(e){H+=e.height;}),i.each(h.concat(p),function(e){var t=i.findNextWhere(D,function(t){return t.box===e;}),n={left:0,right:0,top:C,bottom:H};t&&e.update(t.minSize.width,L,n);}),Y=s,E=d,C=u,H=c,i.each(h,function(e){Y+=e.width;}),i.each(p,function(e){E+=e.width;}),i.each(f,function(e){C+=e.height;}),i.each(m,function(e){H+=e.height;});var P=Math.max(T-Y,0);Y+=P,E+=Math.max(k-E,0);var O=Math.max(S-C,0);C+=O,H+=Math.max(x-H,0);var A=n-C-H,I=t-Y-E;I===w&&A===L||(i.each(h,function(e){e.height=A;}),i.each(p,function(e){e.height=A;}),i.each(f,function(e){e.fullWidth||(e.width=I);}),i.each(m,function(e){e.fullWidth||(e.width=I);}),L=A,w=I);var R=s+P,j=u+O;i.each(h.concat(f),N),R+=w,j+=L,i.each(p,N),i.each(m,N),e.chartArea={left:Y,top:C,right:Y+w,bottom:C+L},i.each(g,function(t){t.left=e.chartArea.left,t.top=e.chartArea.top,t.right=e.chartArea.right,t.bottom=e.chartArea.bottom,t.update(w,L);});}function F(e){var t=i.findNextWhere(D,function(t){return t.box===e;});if(t)if(e.isHorizontal()){var n={left:Math.max(Y,T),right:Math.max(E,k),top:0,bottom:0};e.update(e.fullWidth?_:w,y/2,n);}else e.update(t.minSize.width,L);}function N(e){e.isHorizontal()?(e.left=e.fullWidth?s:Y,e.right=e.fullWidth?t-d:Y+w,e.top=j,e.bottom=j+e.height,j=e.bottom):(e.left=R,e.right=R+e.width,e.top=C,e.bottom=C+L,R=e.right);}}};},function(e,t,n){"use strict";var i=n(3),r=n(6),a=n(2),o=n(11);function l(e){var t,n,i=[];for(t=0,n=e.length;t<n;++t){i.push(e[t].label);}return i;}function s(e,t,n){var i=e.getPixelForTick(t);return n&&(i-=0===t?(e.getPixelForTick(1)-i)/2:(i-e.getPixelForTick(t-1))/2),i;}function d(e,t,n){return a.isArray(t)?a.longestText(e,n,t):e.measureText(t).width;}function u(e){var t=a.valueOrDefault,n=i.global,r=t(e.fontSize,n.defaultFontSize),o=t(e.fontStyle,n.defaultFontStyle),l=t(e.fontFamily,n.defaultFontFamily);return{size:r,style:o,family:l,font:a.fontString(r,o,l)};}function c(e){return a.options.toLineHeight(a.valueOrDefault(e.lineHeight,1.2),a.valueOrDefault(e.fontSize,i.global.defaultFontSize));}i._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",lineHeight:1.2,padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:o.formatters.values,minor:{},major:{}}}),e.exports=r.extend({getPadding:function getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0};},getTicks:function getTicks(){return this._ticks;},mergeTicksOptions:function mergeTicksOptions(){var e=this.options.ticks;for(var t in!1===e.minor&&(e.minor={display:!1}),!1===e.major&&(e.major={display:!1}),e){"major"!==t&&"minor"!==t&&(void 0===e.minor[t]&&(e.minor[t]=e[t]),void 0===e.major[t]&&(e.major[t]=e[t]));}},beforeUpdate:function beforeUpdate(){a.callback(this.options.beforeUpdate,[this]);},update:function update(e,t,n){var i,r,o,l,s,d,u=this;for(u.beforeUpdate(),u.maxWidth=e,u.maxHeight=t,u.margins=a.extend({left:0,right:0,top:0,bottom:0},n),u.longestTextCache=u.longestTextCache||{},u.beforeSetDimensions(),u.setDimensions(),u.afterSetDimensions(),u.beforeDataLimits(),u.determineDataLimits(),u.afterDataLimits(),u.beforeBuildTicks(),s=u.buildTicks()||[],u.afterBuildTicks(),u.beforeTickToLabelConversion(),o=u.convertTicksToLabels(s)||u.ticks,u.afterTickToLabelConversion(),u.ticks=o,i=0,r=o.length;i<r;++i){l=o[i],(d=s[i])?d.label=l:s.push(d={label:l,major:!1});}return u._ticks=s,u.beforeCalculateTickRotation(),u.calculateTickRotation(),u.afterCalculateTickRotation(),u.beforeFit(),u.fit(),u.afterFit(),u.afterUpdate(),u.minSize;},afterUpdate:function afterUpdate(){a.callback(this.options.afterUpdate,[this]);},beforeSetDimensions:function beforeSetDimensions(){a.callback(this.options.beforeSetDimensions,[this]);},setDimensions:function setDimensions(){var e=this;e.isHorizontal()?(e.width=e.maxWidth,e.left=0,e.right=e.width):(e.height=e.maxHeight,e.top=0,e.bottom=e.height),e.paddingLeft=0,e.paddingTop=0,e.paddingRight=0,e.paddingBottom=0;},afterSetDimensions:function afterSetDimensions(){a.callback(this.options.afterSetDimensions,[this]);},beforeDataLimits:function beforeDataLimits(){a.callback(this.options.beforeDataLimits,[this]);},determineDataLimits:a.noop,afterDataLimits:function afterDataLimits(){a.callback(this.options.afterDataLimits,[this]);},beforeBuildTicks:function beforeBuildTicks(){a.callback(this.options.beforeBuildTicks,[this]);},buildTicks:a.noop,afterBuildTicks:function afterBuildTicks(){a.callback(this.options.afterBuildTicks,[this]);},beforeTickToLabelConversion:function beforeTickToLabelConversion(){a.callback(this.options.beforeTickToLabelConversion,[this]);},convertTicksToLabels:function convertTicksToLabels(){var e=this.options.ticks;this.ticks=this.ticks.map(e.userCallback||e.callback,this);},afterTickToLabelConversion:function afterTickToLabelConversion(){a.callback(this.options.afterTickToLabelConversion,[this]);},beforeCalculateTickRotation:function beforeCalculateTickRotation(){a.callback(this.options.beforeCalculateTickRotation,[this]);},calculateTickRotation:function calculateTickRotation(){var e=this,t=e.ctx,n=e.options.ticks,i=l(e._ticks),r=u(n);t.font=r.font;var o=n.minRotation||0;if(i.length&&e.options.display&&e.isHorizontal())for(var s,d=a.longestText(t,r.font,i,e.longestTextCache),c=d,h=e.getPixelForTick(1)-e.getPixelForTick(0)-6;c>h&&o<n.maxRotation;){var p=a.toRadians(o);if(s=Math.cos(p),Math.sin(p)*d>e.maxHeight){o--;break;}o++,c=s*d;}e.labelRotation=o;},afterCalculateTickRotation:function afterCalculateTickRotation(){a.callback(this.options.afterCalculateTickRotation,[this]);},beforeFit:function beforeFit(){a.callback(this.options.beforeFit,[this]);},fit:function fit(){var e=this,t=e.minSize={width:0,height:0},n=l(e._ticks),i=e.options,r=i.ticks,o=i.scaleLabel,s=i.gridLines,h=i.display,p=e.isHorizontal(),f=u(r),m=i.gridLines.tickMarkLength;if(t.width=p?e.isFullWidth()?e.maxWidth-e.margins.left-e.margins.right:e.maxWidth:h&&s.drawTicks?m:0,t.height=p?h&&s.drawTicks?m:0:e.maxHeight,o.display&&h){var g=c(o)+a.options.toPadding(o.padding).height;p?t.height+=g:t.width+=g;}if(r.display&&h){var _=a.longestText(e.ctx,f.font,n,e.longestTextCache),y=a.numberOfLabelLines(n),v=.5*f.size,M=e.options.ticks.padding;if(p){e.longestLabelWidth=_;var b=a.toRadians(e.labelRotation),w=Math.cos(b),L=Math.sin(b)*_+f.size*y+v*(y-1)+v;t.height=Math.min(e.maxHeight,t.height+L+M),e.ctx.font=f.font;var D=d(e.ctx,n[0],f.font),T=d(e.ctx,n[n.length-1],f.font);0!==e.labelRotation?(e.paddingLeft="bottom"===i.position?w*D+3:w*v+3,e.paddingRight="bottom"===i.position?w*v+3:w*T+3):(e.paddingLeft=D/2+3,e.paddingRight=T/2+3);}else r.mirror?_=0:_+=M+v,t.width=Math.min(e.maxWidth,t.width+_),e.paddingTop=f.size/2,e.paddingBottom=f.size/2;}e.handleMargins(),e.width=t.width,e.height=t.height;},handleMargins:function handleMargins(){var e=this;e.margins&&(e.paddingLeft=Math.max(e.paddingLeft-e.margins.left,0),e.paddingTop=Math.max(e.paddingTop-e.margins.top,0),e.paddingRight=Math.max(e.paddingRight-e.margins.right,0),e.paddingBottom=Math.max(e.paddingBottom-e.margins.bottom,0));},afterFit:function afterFit(){a.callback(this.options.afterFit,[this]);},isHorizontal:function isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position;},isFullWidth:function isFullWidth(){return this.options.fullWidth;},getRightValue:function getRightValue(e){if(a.isNullOrUndef(e))return NaN;if("number"==typeof e&&!isFinite(e))return NaN;if(e)if(this.isHorizontal()){if(void 0!==e.x)return this.getRightValue(e.x);}else if(void 0!==e.y)return this.getRightValue(e.y);return e;},getLabelForIndex:a.noop,getPixelForValue:a.noop,getValueForPixel:a.noop,getPixelForTick:function getPixelForTick(e){var t=this,n=t.options.offset;if(t.isHorizontal()){var i=(t.width-(t.paddingLeft+t.paddingRight))/Math.max(t._ticks.length-(n?0:1),1),r=i*e+t.paddingLeft;n&&(r+=i/2);var a=t.left+Math.round(r);return a+=t.isFullWidth()?t.margins.left:0;}var o=t.height-(t.paddingTop+t.paddingBottom);return t.top+e*(o/(t._ticks.length-1));},getPixelForDecimal:function getPixelForDecimal(e){var t=this;if(t.isHorizontal()){var n=(t.width-(t.paddingLeft+t.paddingRight))*e+t.paddingLeft,i=t.left+Math.round(n);return i+=t.isFullWidth()?t.margins.left:0;}return t.top+e*t.height;},getBasePixel:function getBasePixel(){return this.getPixelForValue(this.getBaseValue());},getBaseValue:function getBaseValue(){var e=this.min,t=this.max;return this.beginAtZero?0:e<0&&t<0?t:e>0&&t>0?e:0;},_autoSkip:function _autoSkip(e){var t,n,i,r,o=this,l=o.isHorizontal(),s=o.options.ticks.minor,d=e.length,u=a.toRadians(o.labelRotation),c=Math.cos(u),h=o.longestLabelWidth*c,p=[];for(s.maxTicksLimit&&(r=s.maxTicksLimit),l&&(t=!1,(h+s.autoSkipPadding)*d>o.width-(o.paddingLeft+o.paddingRight)&&(t=1+Math.floor((h+s.autoSkipPadding)*d/(o.width-(o.paddingLeft+o.paddingRight)))),r&&d>r&&(t=Math.max(t,Math.floor(d/r)))),n=0;n<d;n++){i=e[n],(t>1&&n%t>0||n%t==0&&n+t>=d)&&n!==d-1&&delete i.label,p.push(i);}return p;},draw:function draw(e){var t=this,n=t.options;if(n.display){var r=t.ctx,o=i.global,l=n.ticks.minor,d=n.ticks.major||l,h=n.gridLines,p=n.scaleLabel,f=0!==t.labelRotation,m=t.isHorizontal(),g=l.autoSkip?t._autoSkip(t.getTicks()):t.getTicks(),_=a.valueOrDefault(l.fontColor,o.defaultFontColor),y=u(l),v=a.valueOrDefault(d.fontColor,o.defaultFontColor),M=u(d),b=h.drawTicks?h.tickMarkLength:0,w=a.valueOrDefault(p.fontColor,o.defaultFontColor),L=u(p),D=a.options.toPadding(p.padding),T=a.toRadians(t.labelRotation),k=[],S=t.options.gridLines.lineWidth,x="right"===n.position?t.left:t.right-S-b,Y="right"===n.position?t.left+b:t.right,E="bottom"===n.position?t.top+S:t.bottom-b-S,C="bottom"===n.position?t.top+S+b:t.bottom+S;if(a.each(g,function(i,r){if(!a.isNullOrUndef(i.label)){var d,u,c,p,_,y,v,M,w,L,D,H,P,O,A=i.label;r===t.zeroLineIndex&&n.offset===h.offsetGridLines?(d=h.zeroLineWidth,u=h.zeroLineColor,c=h.zeroLineBorderDash,p=h.zeroLineBorderDashOffset):(d=a.valueAtIndexOrDefault(h.lineWidth,r),u=a.valueAtIndexOrDefault(h.color,r),c=a.valueOrDefault(h.borderDash,o.borderDash),p=a.valueOrDefault(h.borderDashOffset,o.borderDashOffset));var I="middle",R="middle",j=l.padding;if(m){var F=b+j;"bottom"===n.position?(R=f?"middle":"top",I=f?"right":"center",O=t.top+F):(R=f?"middle":"bottom",I=f?"left":"center",O=t.bottom-F);var N=s(t,r,h.offsetGridLines&&g.length>1);N<t.left&&(u="rgba(0,0,0,0)"),N+=a.aliasPixel(d),P=t.getPixelForTick(r)+l.labelOffset,_=v=w=D=N,y=E,M=C,L=e.top,H=e.bottom+S;}else{var W,z="left"===n.position;l.mirror?(I=z?"left":"right",W=j):(I=z?"right":"left",W=b+j),P=z?t.right-W:t.left+W;var B=s(t,r,h.offsetGridLines&&g.length>1);B<t.top&&(u="rgba(0,0,0,0)"),B+=a.aliasPixel(d),O=t.getPixelForTick(r)+l.labelOffset,_=x,v=Y,w=e.left,D=e.right+S,y=M=L=H=B;}k.push({tx1:_,ty1:y,tx2:v,ty2:M,x1:w,y1:L,x2:D,y2:H,labelX:P,labelY:O,glWidth:d,glColor:u,glBorderDash:c,glBorderDashOffset:p,rotation:-1*T,label:A,major:i.major,textBaseline:R,textAlign:I});}}),a.each(k,function(e){if(h.display&&(r.save(),r.lineWidth=e.glWidth,r.strokeStyle=e.glColor,r.setLineDash&&(r.setLineDash(e.glBorderDash),r.lineDashOffset=e.glBorderDashOffset),r.beginPath(),h.drawTicks&&(r.moveTo(e.tx1,e.ty1),r.lineTo(e.tx2,e.ty2)),h.drawOnChartArea&&(r.moveTo(e.x1,e.y1),r.lineTo(e.x2,e.y2)),r.stroke(),r.restore()),l.display){r.save(),r.translate(e.labelX,e.labelY),r.rotate(e.rotation),r.font=e.major?M.font:y.font,r.fillStyle=e.major?v:_,r.textBaseline=e.textBaseline,r.textAlign=e.textAlign;var n=e.label;if(a.isArray(n))for(var i=n.length,o=1.5*y.size,s=t.isHorizontal()?0:-o*(i-1)/2,d=0;d<i;++d){r.fillText(""+n[d],0,s),s+=o;}else r.fillText(n,0,0);r.restore();}}),p.display){var H,P,O=0,A=c(p)/2;if(m)H=t.left+(t.right-t.left)/2,P="bottom"===n.position?t.bottom-A-D.bottom:t.top+A+D.top;else{var I="left"===n.position;H=I?t.left+A+D.top:t.right-A-D.top,P=t.top+(t.bottom-t.top)/2,O=I?-.5*Math.PI:.5*Math.PI;}r.save(),r.translate(H,P),r.rotate(O),r.textAlign="center",r.textBaseline="middle",r.fillStyle=w,r.font=L.font,r.fillText(p.labelString,0,0),r.restore();}if(h.drawBorder){r.lineWidth=a.valueAtIndexOrDefault(h.lineWidth,0),r.strokeStyle=a.valueAtIndexOrDefault(h.color,0);var R=t.left,j=t.right+S,F=t.top,N=t.bottom+S,W=a.aliasPixel(r.lineWidth);m?(F=N="top"===n.position?t.bottom:t.top,F+=W,N+=W):(R=j="left"===n.position?t.right:t.left,R+=W,j+=W),r.beginPath(),r.moveTo(R,F),r.lineTo(j,N),r.stroke();}}}});},function(e,t,n){"use strict";var i=n(2);e.exports={formatters:{values:function values(e){return i.isArray(e)?e:""+e;},linear:function linear(e,t,n){var r=n.length>3?n[2]-n[1]:n[1]-n[0];Math.abs(r)>1&&e!==Math.floor(e)&&(r=e-Math.floor(e));var a=i.log10(Math.abs(r)),o="";if(0!==e){if(Math.max(Math.abs(n[0]),Math.abs(n[n.length-1]))<1e-4){var l=i.log10(Math.abs(e));o=e.toExponential(Math.floor(l)-Math.floor(a));}else{var s=-1*Math.floor(a);s=Math.max(Math.min(s,20),0),o=e.toFixed(s);}}else o="0";return o;},logarithmic:function logarithmic(e,t,n){var r=e/Math.pow(10,Math.floor(i.log10(e)));return 0===e?"0":1===r||2===r||5===r||0===t||t===n.length-1?e.toExponential():"";}}};},function(e,t,n){"use strict";var i,r={noop:function noop(){},uid:(i=0,function(){return i++;}),isNullOrUndef:function isNullOrUndef(e){return null==e;},isArray:Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e);},isObject:function isObject(e){return null!==e&&"[object Object]"===Object.prototype.toString.call(e);},valueOrDefault:function valueOrDefault(e,t){return void 0===e?t:e;},valueAtIndexOrDefault:function valueAtIndexOrDefault(e,t,n){return r.valueOrDefault(r.isArray(e)?e[t]:e,n);},callback:function callback(e,t,n){if(e&&"function"==typeof e.call)return e.apply(n,t);},each:function each(e,t,n,i){var a,o,l;if(r.isArray(e)){if(o=e.length,i)for(a=o-1;a>=0;a--){t.call(n,e[a],a);}else for(a=0;a<o;a++){t.call(n,e[a],a);}}else if(r.isObject(e))for(o=(l=Object.keys(e)).length,a=0;a<o;a++){t.call(n,e[l[a]],l[a]);}},arrayEquals:function arrayEquals(e,t){var n,i,a,o;if(!e||!t||e.length!==t.length)return!1;for(n=0,i=e.length;n<i;++n){if(a=e[n],o=t[n],a instanceof Array&&o instanceof Array){if(!r.arrayEquals(a,o))return!1;}else if(a!==o)return!1;}return!0;},clone:function clone(e){if(r.isArray(e))return e.map(r.clone);if(r.isObject(e)){for(var t={},n=Object.keys(e),i=n.length,a=0;a<i;++a){t[n[a]]=r.clone(e[n[a]]);}return t;}return e;},_merger:function _merger(e,t,n,i){var a=t[e],o=n[e];r.isObject(a)&&r.isObject(o)?r.merge(a,o,i):t[e]=r.clone(o);},_mergerIf:function _mergerIf(e,t,n){var i=t[e],a=n[e];r.isObject(i)&&r.isObject(a)?r.mergeIf(i,a):t.hasOwnProperty(e)||(t[e]=r.clone(a));},merge:function merge(e,t,n){var i,a,o,l,s,d=r.isArray(t)?t:[t],u=d.length;if(!r.isObject(e))return e;for(i=(n=n||{}).merger||r._merger,a=0;a<u;++a){if(t=d[a],r.isObject(t))for(s=0,l=(o=Object.keys(t)).length;s<l;++s){i(o[s],e,t,n);}}return e;},mergeIf:function mergeIf(e,t){return r.merge(e,t,{merger:r._mergerIf});},extend:function extend(e){for(var t=function t(_t4,n){e[n]=_t4;},n=1,i=arguments.length;n<i;++n){r.each(arguments[n],t);}return e;},inherits:function inherits(e){var t=this,n=e&&e.hasOwnProperty("constructor")?e.constructor:function(){return t.apply(this,arguments);},i=function i(){this.constructor=n;};return i.prototype=t.prototype,n.prototype=new i(),n.extend=r.inherits,e&&r.extend(n.prototype,e),n.__super__=t.prototype,n;}};e.exports=r,r.callCallback=r.callback,r.indexOf=function(e,t,n){return Array.prototype.indexOf.call(e,t,n);},r.getValueOrDefault=r.valueOrDefault,r.getValueAtIndexOrDefault=r.valueAtIndexOrDefault;},function(e,t,n){"use strict";/*!
     * perfect-scrollbar v1.4.0
     * (c) 2018 Hyunje Jun
     * @license MIT
     */function i(e){return getComputedStyle(e);}function r(e,t){for(var n in t){var i=t[n];"number"==typeof i&&(i+="px"),e.style[n]=i;}return e;}function a(e){var t=document.createElement("div");return t.className=e,t;}var o="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function l(e,t){if(!o)throw new Error("No element matching method supported");return o.call(e,t);}function s(e){e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e);}function d(e,t){return Array.prototype.filter.call(e.children,function(e){return l(e,t);});}var u={main:"ps",element:{thumb:function thumb(e){return"ps__thumb-"+e;},rail:function rail(e){return"ps__rail-"+e;},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function active(e){return"ps--active-"+e;},scrolling:function scrolling(e){return"ps--scrolling-"+e;}}},c={x:null,y:null};function h(e,t){var n=e.element.classList,i=u.state.scrolling(t);n.contains(i)?clearTimeout(c[t]):n.add(i);}function p(e,t){c[t]=setTimeout(function(){return e.isAlive&&e.element.classList.remove(u.state.scrolling(t));},e.settings.scrollingThreshold);}var f=function f(e){this.element=e,this.handlers={};},m={isEmpty:{configurable:!0}};f.prototype.bind=function(e,t){void 0===this.handlers[e]&&(this.handlers[e]=[]),this.handlers[e].push(t),this.element.addEventListener(e,t,!1);},f.prototype.unbind=function(e,t){var n=this;this.handlers[e]=this.handlers[e].filter(function(i){return!(!t||i===t)||(n.element.removeEventListener(e,i,!1),!1);});},f.prototype.unbindAll=function(){for(var e in this.handlers){this.unbind(e);}},m.isEmpty.get=function(){var e=this;return Object.keys(this.handlers).every(function(t){return 0===e.handlers[t].length;});},Object.defineProperties(f.prototype,m);var g=function g(){this.eventElements=[];};function _(e){if("function"==typeof window.CustomEvent)return new CustomEvent(e);var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!1,!1,void 0),t;}g.prototype.eventElement=function(e){var t=this.eventElements.filter(function(t){return t.element===e;})[0];return t||(t=new f(e),this.eventElements.push(t)),t;},g.prototype.bind=function(e,t,n){this.eventElement(e).bind(t,n);},g.prototype.unbind=function(e,t,n){var i=this.eventElement(e);i.unbind(t,n),i.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(i),1);},g.prototype.unbindAll=function(){this.eventElements.forEach(function(e){return e.unbindAll();}),this.eventElements=[];},g.prototype.once=function(e,t,n){var i=this.eventElement(e),r=function r(e){i.unbind(t,r),n(e);};i.bind(t,r);};var y=function y(e,t,n,i,r){var a;if(void 0===i&&(i=!0),void 0===r&&(r=!1),"top"===t)a=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==t)throw new Error("A proper axis should be provided");a=["contentWidth","containerWidth","scrollLeft","x","left","right"];}!function(e,t,n,i,r){var a=n[0],o=n[1],l=n[2],s=n[3],d=n[4],u=n[5];void 0===i&&(i=!0);void 0===r&&(r=!1);var c=e.element;e.reach[s]=null,c[l]<1&&(e.reach[s]="start");c[l]>e[a]-e[o]-1&&(e.reach[s]="end");t&&(c.dispatchEvent(_("ps-scroll-"+s)),t<0?c.dispatchEvent(_("ps-scroll-"+d)):t>0&&c.dispatchEvent(_("ps-scroll-"+u)),i&&function(e,t){h(e,t),p(e,t);}(e,s));e.reach[s]&&(t||r)&&c.dispatchEvent(_("ps-"+s+"-reach-"+e.reach[s]));}(e,n,a,i,r);};function v(e){return parseInt(e,10)||0;}var M={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)},b=function b(e){var t=e.element,n=Math.floor(t.scrollTop);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight,t.contains(e.scrollbarXRail)||(d(t,u.element.rail("x")).forEach(function(e){return s(e);}),t.appendChild(e.scrollbarXRail)),t.contains(e.scrollbarYRail)||(d(t,u.element.rail("y")).forEach(function(e){return s(e);}),t.appendChild(e.scrollbarYRail)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=w(e,v(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=v((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=w(e,v(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=v(n*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),function(e,t){var n={width:t.railXWidth},i=Math.floor(e.scrollTop);t.isRtl?n.left=t.negativeScrollAdjustment+e.scrollLeft+t.containerWidth-t.contentWidth:n.left=e.scrollLeft;t.isScrollbarXUsingBottom?n.bottom=t.scrollbarXBottom-i:n.top=t.scrollbarXTop+i;r(t.scrollbarXRail,n);var a={top:i,height:t.railYHeight};t.isScrollbarYUsingRight?t.isRtl?a.right=t.contentWidth-(t.negativeScrollAdjustment+e.scrollLeft)-t.scrollbarYRight-t.scrollbarYOuterWidth:a.right=t.scrollbarYRight-e.scrollLeft:t.isRtl?a.left=t.negativeScrollAdjustment+e.scrollLeft+2*t.containerWidth-t.contentWidth-t.scrollbarYLeft-t.scrollbarYOuterWidth:a.left=t.scrollbarYLeft+e.scrollLeft;r(t.scrollbarYRail,a),r(t.scrollbarX,{left:t.scrollbarXLeft,width:t.scrollbarXWidth-t.railBorderXWidth}),r(t.scrollbarY,{top:t.scrollbarYTop,height:t.scrollbarYHeight-t.railBorderYWidth});}(t,e),e.scrollbarXActive?t.classList.add(u.state.active("x")):(t.classList.remove(u.state.active("x")),e.scrollbarXWidth=0,e.scrollbarXLeft=0,t.scrollLeft=0),e.scrollbarYActive?t.classList.add(u.state.active("y")):(t.classList.remove(u.state.active("y")),e.scrollbarYHeight=0,e.scrollbarYTop=0,t.scrollTop=0);};function w(e,t){return e.settings.minScrollbarLength&&(t=Math.max(t,e.settings.minScrollbarLength)),e.settings.maxScrollbarLength&&(t=Math.min(t,e.settings.maxScrollbarLength)),t;}function L(e,t){var n=t[0],i=t[1],r=t[2],a=t[3],o=t[4],l=t[5],s=t[6],d=t[7],c=t[8],f=e.element,m=null,g=null,_=null;function y(t){f[s]=m+_*(t[r]-g),h(e,d),b(e),t.stopPropagation(),t.preventDefault();}function v(){p(e,d),e[c].classList.remove(u.state.clicking),e.event.unbind(e.ownerDocument,"mousemove",y);}e.event.bind(e[o],"mousedown",function(t){m=f[s],g=t[r],_=(e[i]-e[n])/(e[a]-e[l]),e.event.bind(e.ownerDocument,"mousemove",y),e.event.once(e.ownerDocument,"mouseup",v),e[c].classList.add(u.state.clicking),t.stopPropagation(),t.preventDefault();});}var D={"click-rail":function clickRail(e){e.event.bind(e.scrollbarY,"mousedown",function(e){return e.stopPropagation();}),e.event.bind(e.scrollbarYRail,"mousedown",function(t){var n=t.pageY-window.pageYOffset-e.scrollbarYRail.getBoundingClientRect().top>e.scrollbarYTop?1:-1;e.element.scrollTop+=n*e.containerHeight,b(e),t.stopPropagation();}),e.event.bind(e.scrollbarX,"mousedown",function(e){return e.stopPropagation();}),e.event.bind(e.scrollbarXRail,"mousedown",function(t){var n=t.pageX-window.pageXOffset-e.scrollbarXRail.getBoundingClientRect().left>e.scrollbarXLeft?1:-1;e.element.scrollLeft+=n*e.containerWidth,b(e),t.stopPropagation();});},"drag-thumb":function dragThumb(e){L(e,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),L(e,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"]);},keyboard:function keyboard(e){var t=e.element;e.event.bind(e.ownerDocument,"keydown",function(n){if(!(n.isDefaultPrevented&&n.isDefaultPrevented()||n.defaultPrevented)&&(l(t,":hover")||l(e.scrollbarX,":focus")||l(e.scrollbarY,":focus"))){var i,r=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(r){if("IFRAME"===r.tagName)r=r.contentDocument.activeElement;else for(;r.shadowRoot;){r=r.shadowRoot.activeElement;}if(l(i=r,"input,[contenteditable]")||l(i,"select,[contenteditable]")||l(i,"textarea,[contenteditable]")||l(i,"button,[contenteditable]"))return;}var a=0,o=0;switch(n.which){case 37:a=n.metaKey?-e.contentWidth:n.altKey?-e.containerWidth:-30;break;case 38:o=n.metaKey?e.contentHeight:n.altKey?e.containerHeight:30;break;case 39:a=n.metaKey?e.contentWidth:n.altKey?e.containerWidth:30;break;case 40:o=n.metaKey?-e.contentHeight:n.altKey?-e.containerHeight:-30;break;case 32:o=n.shiftKey?e.containerHeight:-e.containerHeight;break;case 33:o=e.containerHeight;break;case 34:o=-e.containerHeight;break;case 36:o=e.contentHeight;break;case 35:o=-e.contentHeight;break;default:return;}e.settings.suppressScrollX&&0!==a||e.settings.suppressScrollY&&0!==o||(t.scrollTop-=o,t.scrollLeft+=a,b(e),function(n,i){var r=Math.floor(t.scrollTop);if(0===n){if(!e.scrollbarYActive)return!1;if(0===r&&i>0||r>=e.contentHeight-e.containerHeight&&i<0)return!e.settings.wheelPropagation;}var a=t.scrollLeft;if(0===i){if(!e.scrollbarXActive)return!1;if(0===a&&n<0||a>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation;}return!0;}(a,o)&&n.preventDefault());}});},wheel:function wheel(e){var t=e.element;function n(n){var r=function(e){var t=e.deltaX,n=-1*e.deltaY;return void 0!==t&&void 0!==n||(t=-1*e.wheelDeltaX/6,n=e.wheelDeltaY/6),e.deltaMode&&1===e.deltaMode&&(t*=10,n*=10),t!=t&&n!=n&&(t=0,n=e.wheelDelta),e.shiftKey?[-n,-t]:[t,n];}(n),a=r[0],o=r[1];if(!function(e,n,r){if(!M.isWebKit&&t.querySelector("select:focus"))return!0;if(!t.contains(e))return!1;for(var a=e;a&&a!==t;){if(a.classList.contains(u.element.consuming))return!0;var o=i(a);if([o.overflow,o.overflowX,o.overflowY].join("").match(/(scroll|auto)/)){var l=a.scrollHeight-a.clientHeight;if(l>0&&!(0===a.scrollTop&&r>0||a.scrollTop===l&&r<0))return!0;var s=a.scrollWidth-a.clientWidth;if(s>0&&!(0===a.scrollLeft&&n<0||a.scrollLeft===s&&n>0))return!0;}a=a.parentNode;}return!1;}(n.target,a,o)){var l=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(o?t.scrollTop-=o*e.settings.wheelSpeed:t.scrollTop+=a*e.settings.wheelSpeed,l=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(a?t.scrollLeft+=a*e.settings.wheelSpeed:t.scrollLeft-=o*e.settings.wheelSpeed,l=!0):(t.scrollTop-=o*e.settings.wheelSpeed,t.scrollLeft+=a*e.settings.wheelSpeed),b(e),(l=l||function(n,i){var r=Math.floor(t.scrollTop),a=0===t.scrollTop,o=r+t.offsetHeight===t.scrollHeight,l=0===t.scrollLeft,s=t.scrollLeft+t.offsetWidth===t.scrollWidth;return!(Math.abs(i)>Math.abs(n)?a||o:l||s)||!e.settings.wheelPropagation;}(a,o))&&!n.ctrlKey&&(n.stopPropagation(),n.preventDefault());}}void 0!==window.onwheel?e.event.bind(t,"wheel",n):void 0!==window.onmousewheel&&e.event.bind(t,"mousewheel",n);},touch:function touch(e){if(M.supportsTouch||M.supportsIePointer){var t=e.element,n={},r=0,a={},o=null;M.supportsTouch?(e.event.bind(t,"touchstart",c),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",p)):M.supportsIePointer&&(window.PointerEvent?(e.event.bind(t,"pointerdown",c),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",p)):window.MSPointerEvent&&(e.event.bind(t,"MSPointerDown",c),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",p)));}function l(n,i){t.scrollTop-=i,t.scrollLeft-=n,b(e);}function s(e){return e.targetTouches?e.targetTouches[0]:e;}function d(e){return!(e.pointerType&&"pen"===e.pointerType&&0===e.buttons||(!e.targetTouches||1!==e.targetTouches.length)&&(!e.pointerType||"mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE));}function c(e){if(d(e)){var t=s(e);n.pageX=t.pageX,n.pageY=t.pageY,r=new Date().getTime(),null!==o&&clearInterval(o);}}function h(o){if(d(o)){var c=s(o),h={pageX:c.pageX,pageY:c.pageY},p=h.pageX-n.pageX,f=h.pageY-n.pageY;if(function(e,n,r){if(!t.contains(e))return!1;for(var a=e;a&&a!==t;){if(a.classList.contains(u.element.consuming))return!0;var o=i(a);if([o.overflow,o.overflowX,o.overflowY].join("").match(/(scroll|auto)/)){var l=a.scrollHeight-a.clientHeight;if(l>0&&!(0===a.scrollTop&&r>0||a.scrollTop===l&&r<0))return!0;var s=a.scrollLeft-a.clientWidth;if(s>0&&!(0===a.scrollLeft&&n<0||a.scrollLeft===s&&n>0))return!0;}a=a.parentNode;}return!1;}(o.target,p,f))return;l(p,f),n=h;var m=new Date().getTime(),g=m-r;g>0&&(a.x=p/g,a.y=f/g,r=m),function(n,i){var r=Math.floor(t.scrollTop),a=t.scrollLeft,o=Math.abs(n),l=Math.abs(i);if(l>o){if(i<0&&r===e.contentHeight-e.containerHeight||i>0&&0===r)return 0===window.scrollY&&i>0&&M.isChrome;}else if(o>l&&(n<0&&a===e.contentWidth-e.containerWidth||n>0&&0===a))return!0;return!0;}(p,f)&&o.preventDefault();}}function p(){e.settings.swipeEasing&&(clearInterval(o),o=setInterval(function(){e.isInitialized?clearInterval(o):a.x||a.y?Math.abs(a.x)<.01&&Math.abs(a.y)<.01?clearInterval(o):(l(30*a.x,30*a.y),a.x*=.8,a.y*=.8):clearInterval(o);},10));}}},T=function T(e,t){var n=this;if(void 0===t&&(t={}),"string"==typeof e&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var o in this.element=e,e.classList.add(u.main),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},t){n.settings[o]=t[o];}this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var l,s,d=function d(){return e.classList.add(u.state.focus);},c=function c(){return e.classList.remove(u.state.focus);};this.isRtl="rtl"===i(e).direction,this.isNegativeScroll=(s=e.scrollLeft,e.scrollLeft=-1,l=e.scrollLeft<0,e.scrollLeft=s,l),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new g(),this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=a(u.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=a(u.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",d),this.event.bind(this.scrollbarX,"blur",c),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var h=i(this.scrollbarXRail);this.scrollbarXBottom=parseInt(h.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=v(h.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=v(h.borderLeftWidth)+v(h.borderRightWidth),r(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=v(h.marginLeft)+v(h.marginRight),r(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=a(u.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=a(u.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",d),this.event.bind(this.scrollbarY,"blur",c),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var p=i(this.scrollbarYRail);this.scrollbarYRight=parseInt(p.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=v(p.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function(e){var t=i(e);return v(t.width)+v(t.paddingLeft)+v(t.paddingRight)+v(t.borderLeftWidth)+v(t.borderRightWidth);}(this.scrollbarY):null,this.railBorderYWidth=v(p.borderTopWidth)+v(p.borderBottomWidth),r(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=v(p.marginTop)+v(p.marginBottom),r(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(e){return D[e](n);}),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",function(e){return n.onScroll(e);}),b(this);};T.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,r(this.scrollbarXRail,{display:"block"}),r(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=v(i(this.scrollbarXRail).marginLeft)+v(i(this.scrollbarXRail).marginRight),this.railYMarginHeight=v(i(this.scrollbarYRail).marginTop)+v(i(this.scrollbarYRail).marginBottom),r(this.scrollbarXRail,{display:"none"}),r(this.scrollbarYRail,{display:"none"}),b(this),y(this,"top",0,!1,!0),y(this,"left",0,!1,!0),r(this.scrollbarXRail,{display:""}),r(this.scrollbarYRail,{display:""}));},T.prototype.onScroll=function(e){this.isAlive&&(b(this),y(this,"top",this.element.scrollTop-this.lastScrollTop),y(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft);},T.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),s(this.scrollbarX),s(this.scrollbarY),s(this.scrollbarXRail),s(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1);},T.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(e){return!e.match(/^ps([-_].+|)$/);}).join(" ");},t.a=T;},function(e,t,n){!function(e){"use strict";e.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function isPM(e){return /^nm$/i.test(e);},meridiem:function meridiem(e,t,n){return e<12?n?"vm":"VM":n?"nm":"NM";},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",ss:"%d sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function ordinal(e){return e+(1===e||8===e||e>=20?"ste":"de");},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},i=function i(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5;},r={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},a=function a(e){return function(t,n,a,o){var l=i(t),s=r[e][i(t)];return 2===l&&(s=s[n?0:1]),s.replace(/%d/i,t);};},o=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];e.defineLocale("ar",{months:o,monthsShort:o,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function isPM(e){return"م"===e;},meridiem:function meridiem(e,t,n){return e<12?"ص":"م";},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:a("s"),ss:a("s"),m:a("m"),mm:a("m"),h:a("h"),hh:a("h"),d:a("d"),dd:a("d"),M:a("M"),MM:a("M"),y:a("y"),yy:a("y")},preparse:function preparse(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return n[e];}).replace(/،/g,",");},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];}).replace(/,/g,"،");},week:{dow:6,doy:12}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("ar-dz",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"أح_إث_ثلا_أر_خم_جم_سب".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("ar-kw",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,doy:12}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"},n=function n(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5;},i={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},r=function r(e){return function(t,r,a,o){var l=n(t),s=i[e][n(t)];return 2===l&&(s=s[r?0:1]),s.replace(/%d/i,t);};},a=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];e.defineLocale("ar-ly",{months:a,monthsShort:a,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function isPM(e){return"م"===e;},meridiem:function meridiem(e,t,n){return e<12?"ص":"م";},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:r("s"),ss:r("s"),m:r("m"),mm:r("m"),h:r("h"),hh:r("h"),d:r("d"),dd:r("d"),M:r("M"),MM:r("M"),y:r("y"),yy:r("y")},preparse:function preparse(e){return e.replace(/،/g,",");},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];}).replace(/,/g,"،");},week:{dow:6,doy:12}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};e.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function isPM(e){return"م"===e;},meridiem:function meridiem(e,t,n){return e<12?"ص":"م";},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function preparse(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return n[e];}).replace(/،/g,",");},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];}).replace(/,/g,"،");},week:{dow:0,doy:6}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"};e.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyə",ss:"%d saniyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function isPM(e){return /^(gündüz|axşam)$/.test(e);},meridiem:function meridiem(e,t,n){return e<4?"gecə":e<12?"səhər":e<17?"gündüz":"axşam";},dayOfMonthOrdinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function ordinal(e){if(0===e)return e+"-ıncı";var n=e%10,i=e%100-n,r=e>=100?100:null;return e+(t[n]||t[i]||t[r]);},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n){var i,r,a={ss:t?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:t?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:t?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"};return"m"===n?t?"хвіліна":"хвіліну":"h"===n?t?"гадзіна":"гадзіну":e+" "+(i=+e,r=a[n].split("_"),i%10==1&&i%100!=11?r[0]:i%10>=2&&i%10<=4&&(i%100<10||i%100>=20)?r[1]:r[2]);}e.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:{format:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function nextWeek(){return"[У] dddd [ў] LT";},lastWeek:function lastWeek(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT";}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:t,mm:t,h:t,hh:t,d:"дзень",dd:t,M:"месяц",MM:t,y:"год",yy:t},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function isPM(e){return /^(дня|вечара)$/.test(e);},meridiem:function meridiem(e,t,n){return e<4?"ночы":e<12?"раніцы":e<17?"дня":"вечара";},dayOfMonthOrdinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function ordinal(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e%10!=2&&e%10!=3||e%100==12||e%100==13?e+"-ы":e+"-і";case"D":return e+"-га";default:return e;}},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function lastWeek(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT";}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",ss:"%d секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function ordinal(e){var t=e%10,n=e%100;return 0===e?e+"-ев":0===n?e+"-ен":n>10&&n<20?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти";},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("bm",{months:"Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),monthsShort:"Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),weekdays:"Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),weekdaysShort:"Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),weekdaysMin:"Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"MMMM [tile] D [san] YYYY",LLL:"MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",LLLL:"dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"},calendar:{sameDay:"[Bi lɛrɛ] LT",nextDay:"[Sini lɛrɛ] LT",nextWeek:"dddd [don lɛrɛ] LT",lastDay:"[Kunu lɛrɛ] LT",lastWeek:"dddd [tɛmɛnen lɛrɛ] LT",sameElse:"L"},relativeTime:{future:"%s kɔnɔ",past:"a bɛ %s bɔ",s:"sanga dama dama",ss:"sekondi %d",m:"miniti kelen",mm:"miniti %d",h:"lɛrɛ kelen",hh:"lɛrɛ %d",d:"tile kelen",dd:"tile %d",M:"kalo kelen",MM:"kalo %d",y:"san kelen",yy:"san %d"},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},n={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"};e.defineLocale("bn",{months:"জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",ss:"%d সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function preparse(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,function(e){return n[e];});},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];});},meridiemParse:/রাত|সকাল|দুপুর|বিকাল|রাত/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"রাত"===t&&e>=4||"দুপুর"===t&&e<5||"বিকাল"===t?e+12:e;},meridiem:function meridiem(e,t,n){return e<4?"রাত":e<10?"সকাল":e<17?"দুপুর":e<20?"বিকাল":"রাত";},week:{dow:0,doy:6}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"},n={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"};e.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",ss:"%d སྐར་ཆ།",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function preparse(e){return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(e){return n[e];});},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];});},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"མཚན་མོ"===t&&e>=4||"ཉིན་གུང"===t&&e<5||"དགོང་དག"===t?e+12:e;},meridiem:function meridiem(e,t,n){return e<4?"མཚན་མོ":e<10?"ཞོགས་ཀས":e<17?"ཉིན་གུང":e<20?"དགོང་དག":"མཚན་མོ";},week:{dow:0,doy:6}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n){return e+" "+function(e,t){return 2===t?function(e){var t={m:"v",b:"v",d:"z"};return void 0===t[e.charAt(0)]?e:t[e.charAt(0)]+e.substring(1);}(e):e;}({mm:"munutenn",MM:"miz",dd:"devezh"}[n],e);}e.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",ss:"%d eilenn",m:"ur vunutenn",mm:t,h:"un eur",hh:"%d eur",d:"un devezh",dd:t,M:"ur miz",MM:t,y:"ur bloaz",yy:function yy(e){switch(function e(t){return t>9?e(t%10):t;}(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz";}}},dayOfMonthOrdinalParse:/\d{1,2}(añ|vet)/,ordinal:function ordinal(e){var t=1===e?"añ":"vet";return e+t;},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n){var i=e+" ";switch(n){case"ss":return i+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return t?"jedna minuta":"jedne minute";case"mm":return i+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return i+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return i+=1===e?"dan":"dana";case"MM":return i+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return i+=1===e?"godina":2===e||3===e||4===e?"godine":"godina";}}e.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function nextWeek(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT";}},lastDay:"[jučer u] LT",lastWeek:function lastWeek(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT";}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:t,m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("ca",{months:{standalone:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),format:"de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dt_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:function sameDay(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT";},nextDay:function nextDay(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT";},nextWeek:function nextWeek(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT";},lastDay:function lastDay(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT";},lastWeek:function lastWeek(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT";},sameElse:"L"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",ss:"%d segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function ordinal(e,t){var n=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"è";return"w"!==t&&"W"!==t||(n="a"),e+n;},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),n="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");function i(e){return e>1&&e<5&&1!=~~(e/10);}function r(e,t,n,r){var a=e+" ";switch(n){case"s":return t||r?"pár sekund":"pár sekundami";case"ss":return t||r?a+(i(e)?"sekundy":"sekund"):a+"sekundami";case"m":return t?"minuta":r?"minutu":"minutou";case"mm":return t||r?a+(i(e)?"minuty":"minut"):a+"minutami";case"h":return t?"hodina":r?"hodinu":"hodinou";case"hh":return t||r?a+(i(e)?"hodiny":"hodin"):a+"hodinami";case"d":return t||r?"den":"dnem";case"dd":return t||r?a+(i(e)?"dny":"dní"):a+"dny";case"M":return t||r?"měsíc":"měsícem";case"MM":return t||r?a+(i(e)?"měsíce":"měsíců"):a+"měsíci";case"y":return t||r?"rok":"rokem";case"yy":return t||r?a+(i(e)?"roky":"let"):a+"lety";}}e.defineLocale("cs",{months:t,monthsShort:n,monthsParse:function(e,t){var n,i=[];for(n=0;n<12;n++){i[n]=new RegExp("^"+e[n]+"$|^"+t[n]+"$","i");}return i;}(t,n),shortMonthsParse:function(e){var t,n=[];for(t=0;t<12;t++){n[t]=new RegExp("^"+e[t]+"$","i");}return n;}(n),longMonthsParse:function(e){var t,n=[];for(t=0;t<12;t++){n[t]=new RegExp("^"+e[t]+"$","i");}return n;}(t),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function nextWeek(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT";}},lastDay:"[včera v] LT",lastWeek:function lastWeek(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT";}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:r,ss:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("cv",{months:"кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),monthsShort:"кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кҫ_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",LLL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",LLLL:"dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ӗнер] LT [сехетре]",nextWeek:"[Ҫитес] dddd LT [сехетре]",lastWeek:"[Иртнӗ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function future(e){var t=/сехет$/i.exec(e)?"рен":/ҫул$/i.exec(e)?"тан":"ран";return e+t;},past:"%s каялла",s:"пӗр-ик ҫеккунт",ss:"%d ҫеккунт",m:"пӗр минут",mm:"%d минут",h:"пӗр сехет",hh:"%d сехет",d:"пӗр кун",dd:"%d кун",M:"пӗр уйӑх",MM:"%d уйӑх",y:"пӗр ҫул",yy:"%d ҫул"},dayOfMonthOrdinalParse:/\d{1,2}-мӗш/,ordinal:"%d-мӗш",week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",ss:"%d eiliad",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},dayOfMonthOrdinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function ordinal(e){var t=e,n="";return t>20?n=40===t||50===t||60===t||80===t||100===t?"fed":"ain":t>0&&(n=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"][t]),e+n;},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"på dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[i] dddd[s kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",ss:"%d sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n,i){var r={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?r[n][0]:r[n][1];}e.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n,i){var r={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?r[n][0]:r[n][1];}e.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n,i){var r={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?r[n][0]:r[n][1];}e.defineLocale("de-ch",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t=["ޖެނުއަރީ","ފެބްރުއަރީ","މާރިޗު","އޭޕްރީލު","މޭ","ޖޫން","ޖުލައި","އޯގަސްޓު","ސެޕްޓެމްބަރު","އޮކްޓޯބަރު","ނޮވެމްބަރު","ޑިސެމްބަރު"],n=["އާދިއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"];e.defineLocale("dv",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:"އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/މކ|މފ/,isPM:function isPM(e){return"މފ"===e;},meridiem:function meridiem(e,t,n){return e<12?"މކ":"މފ";},calendar:{sameDay:"[މިއަދު] LT",nextDay:"[މާދަމާ] LT",nextWeek:"dddd LT",lastDay:"[އިއްޔެ] LT",lastWeek:"[ފާއިތުވި] dddd LT",sameElse:"L"},relativeTime:{future:"ތެރޭގައި %s",past:"ކުރިން %s",s:"ސިކުންތުކޮޅެއް",ss:"d% ސިކުންތު",m:"މިނިޓެއް",mm:"މިނިޓު %d",h:"ގަޑިއިރެއް",hh:"ގަޑިއިރު %d",d:"ދުވަހެއް",dd:"ދުވަސް %d",M:"މަހެއް",MM:"މަސް %d",y:"އަހަރެއް",yy:"އަހަރު %d"},preparse:function preparse(e){return e.replace(/،/g,",");},postformat:function postformat(e){return e.replace(/,/g,"،");},week:{dow:7,doy:12}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function months(e,t){return e?"string"==typeof t&&/D/.test(t.substring(0,t.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]:this._monthsNominativeEl;},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function meridiem(e,t,n){return e>11?n?"μμ":"ΜΜ":n?"πμ":"ΠΜ";},isPM:function isPM(e){return"μ"===(e+"").toLowerCase()[0];},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function lastWeek(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT";}},sameElse:"L"},calendar:function calendar(e,t){var n,i=this._calendarEl[e],r=t&&t.hours();return((n=i)instanceof Function||"[object Function]"===Object.prototype.toString.call(n))&&(i=i.apply(t)),i.replace("{}",r%12==1?"στη":"στις");},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",ss:"%d δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},dayOfMonthOrdinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function ordinal(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n;},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function ordinal(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n;}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function ordinal(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n;},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function ordinal(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n;},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("en-il",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function ordinal(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n;}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function ordinal(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n;},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),weekdaysShort:"dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),weekdaysMin:"di_lu_ma_me_ĵa_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-a de] MMMM, YYYY",LLL:"D[-a de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-a de] MMMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function isPM(e){return"p"===e.charAt(0).toLowerCase();},meridiem:function meridiem(e,t,n){return e>11?n?"p.t.m.":"P.T.M.":n?"a.t.m.":"A.T.M.";},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"post %s",past:"antaŭ %s",s:"sekundoj",ss:"%d sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},dayOfMonthOrdinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),i=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],r=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function monthsShort(e,i){return e?/-MMM-/.test(i)?n[e.month()]:t[e.month()]:t;},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:i,longMonthsParse:i,shortMonthsParse:i,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function sameDay(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT";},nextDay:function nextDay(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT";},nextWeek:function nextWeek(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT";},lastDay:function lastDay(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT";},lastWeek:function lastWeek(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT";},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),i=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],r=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;e.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function monthsShort(e,i){return e?/-MMM-/.test(i)?n[e.month()]:t[e.month()]:t;},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:i,longMonthsParse:i,shortMonthsParse:i,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function sameDay(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT";},nextDay:function nextDay(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT";},nextWeek:function nextWeek(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT";},lastDay:function lastDay(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT";},lastWeek:function lastWeek(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT";},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");e.defineLocale("es-us",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function monthsShort(e,i){return e?/-MMM-/.test(i)?n[e.month()]:t[e.month()]:t;},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"MMMM [de] D [de] YYYY",LLL:"MMMM [de] D [de] YYYY h:mm A",LLLL:"dddd, MMMM [de] D [de] YYYY h:mm A"},calendar:{sameDay:function sameDay(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT";},nextDay:function nextDay(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT";},nextWeek:function nextWeek(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT";},lastDay:function lastDay(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT";},lastWeek:function lastWeek(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT";},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:0,doy:6}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n,i){var r={s:["mõne sekundi","mõni sekund","paar sekundit"],ss:[e+"sekundi",e+"sekundit"],m:["ühe minuti","üks minut"],mm:[e+" minuti",e+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[e+" tunni",e+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[e+" kuu",e+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[e+" aasta",e+" aastat"]};return t?r[n][2]?r[n][2]:r[n][1]:i?r[n][0]:r[n][1];}e.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:"%d päeva",M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",ss:"%d segundo",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},n={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"};e.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function isPM(e){return /بعد از ظهر/.test(e);},meridiem:function meridiem(e,t,n){return e<12?"قبل از ظهر":"بعد از ظهر";},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چند ثانیه",ss:"ثانیه d%",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function preparse(e){return e.replace(/[۰-۹]/g,function(e){return n[e];}).replace(/،/g,",");},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];}).replace(/,/g,"،");},dayOfMonthOrdinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}});}(n(0));},function(e,t,n){!function(e){"use strict";var t="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),n=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",t[7],t[8],t[9]];function i(e,i,r,a){var o="";switch(r){case"s":return a?"muutaman sekunnin":"muutama sekunti";case"ss":return a?"sekunnin":"sekuntia";case"m":return a?"minuutin":"minuutti";case"mm":o=a?"minuutin":"minuuttia";break;case"h":return a?"tunnin":"tunti";case"hh":o=a?"tunnin":"tuntia";break;case"d":return a?"päivän":"päivä";case"dd":o=a?"päivän":"päivää";break;case"M":return a?"kuukauden":"kuukausi";case"MM":o=a?"kuukauden":"kuukautta";break;case"y":return a?"vuoden":"vuosi";case"yy":o=a?"vuoden":"vuotta";}return o=function(e,i){return e<10?i?n[e]:t[e]:e;}(e,a)+" "+o;}e.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:i,ss:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",ss:"%d sekundir",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function ordinal(e,t){switch(t){case"D":return e+(1===e?"er":"");default:case"M":case"Q":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e");}},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function ordinal(e,t){switch(t){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e");}}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("fr-ch",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function ordinal(e,t){switch(t){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e");}},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),n="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");e.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function monthsShort(e,i){return e?/-MMM-/.test(i)?n[e.month()]:t[e.month()]:t;},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",ss:"%d sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function ordinal(e){return e+(1===e||8===e||e>=20?"ste":"de");},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("gd",{months:["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"],monthsShort:["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],monthsParseExact:!0,weekdays:["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"],weekdaysShort:["Did","Dil","Dim","Dic","Dia","Dih","Dis"],weekdaysMin:["Dò","Lu","Mà","Ci","Ar","Ha","Sa"],longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-màireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-dè aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",ss:"%d diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function ordinal(e){var t=1===e?"d":e%10==2?"na":"mh";return e+t;},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),weekdaysShort:"dom._lun._mar._mér._xov._ven._sáb.".split("_"),weekdaysMin:"do_lu_ma_mé_xo_ve_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function sameDay(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT";},nextDay:function nextDay(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT";},nextWeek:function nextWeek(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT";},lastDay:function lastDay(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT";},lastWeek:function lastWeek(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT";},sameElse:"L"},relativeTime:{future:function future(e){return 0===e.indexOf("un")?"n"+e:"en "+e;},past:"hai %s",s:"uns segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n,i){var r={s:["thodde secondanim","thodde second"],ss:[e+" secondanim",e+" second"],m:["eka mintan","ek minute"],mm:[e+" mintanim",e+" mintam"],h:["eka horan","ek hor"],hh:[e+" horanim",e+" horam"],d:["eka disan","ek dis"],dd:[e+" disanim",e+" dis"],M:["eka mhoinean","ek mhoino"],MM:[e+" mhoineanim",e+" mhoine"],y:["eka vorsan","ek voros"],yy:[e+" vorsanim",e+" vorsam"]};return t?r[n][0]:r[n][1];}e.defineLocale("gom-latn",{months:"Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),monthsShort:"Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),weekdaysShort:"Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),weekdaysMin:"Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [vazta]",LTS:"A h:mm:ss [vazta]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [vazta]",LLLL:"dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",llll:"ddd, D MMM YYYY, A h:mm [vazta]"},calendar:{sameDay:"[Aiz] LT",nextDay:"[Faleam] LT",nextWeek:"[Ieta to] dddd[,] LT",lastDay:"[Kal] LT",lastWeek:"[Fatlo] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s adim",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}(er)/,ordinal:function ordinal(e,t){switch(t){case"D":return e+"er";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return e;}},week:{dow:1,doy:4},meridiemParse:/rati|sokalli|donparam|sanje/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"rati"===t?e<4?e:e+12:"sokalli"===t?e:"donparam"===t?e>12?e:e+12:"sanje"===t?e+12:void 0;},meridiem:function meridiem(e,t,n){return e<4?"rati":e<12?"sokalli":e<16?"donparam":e<20?"sanje":"rati";}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"૧",2:"૨",3:"૩",4:"૪",5:"૫",6:"૬",7:"૭",8:"૮",9:"૯",0:"૦"},n={"૧":"1","૨":"2","૩":"3","૪":"4","૫":"5","૬":"6","૭":"7","૮":"8","૯":"9","૦":"0"};e.defineLocale("gu",{months:"જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),monthsShort:"જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),monthsParseExact:!0,weekdays:"રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),weekdaysShort:"રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),weekdaysMin:"ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),longDateFormat:{LT:"A h:mm વાગ્યે",LTS:"A h:mm:ss વાગ્યે",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm વાગ્યે",LLLL:"dddd, D MMMM YYYY, A h:mm વાગ્યે"},calendar:{sameDay:"[આજ] LT",nextDay:"[કાલે] LT",nextWeek:"dddd, LT",lastDay:"[ગઇકાલે] LT",lastWeek:"[પાછલા] dddd, LT",sameElse:"L"},relativeTime:{future:"%s મા",past:"%s પેહલા",s:"અમુક પળો",ss:"%d સેકંડ",m:"એક મિનિટ",mm:"%d મિનિટ",h:"એક કલાક",hh:"%d કલાક",d:"એક દિવસ",dd:"%d દિવસ",M:"એક મહિનો",MM:"%d મહિનો",y:"એક વર્ષ",yy:"%d વર્ષ"},preparse:function preparse(e){return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g,function(e){return n[e];});},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];});},meridiemParse:/રાત|બપોર|સવાર|સાંજ/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"રાત"===t?e<4?e:e+12:"સવાર"===t?e:"બપોર"===t?e>=10?e:e+12:"સાંજ"===t?e+12:void 0;},meridiem:function meridiem(e,t,n){return e<4?"રાત":e<10?"સવાર":e<17?"બપોર":e<20?"સાંજ":"રાત";},week:{dow:0,doy:6}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",ss:"%d שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function hh(e){return 2===e?"שעתיים":e+" שעות";},d:"יום",dd:function dd(e){return 2===e?"יומיים":e+" ימים";},M:"חודש",MM:function MM(e){return 2===e?"חודשיים":e+" חודשים";},y:"שנה",yy:function yy(e){return 2===e?"שנתיים":e%10==0&&10!==e?e+" שנה":e+" שנים";}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,isPM:function isPM(e){return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);},meridiem:function meridiem(e,t,n){return e<5?"לפנות בוקר":e<10?"בבוקר":e<12?n?'לפנה"צ':"לפני הצהריים":e<18?n?'אחה"צ':"אחרי הצהריים":"בערב";}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};e.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",ss:"%d सेकंड",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function preparse(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e];});},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];});},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"रात"===t?e<4?e:e+12:"सुबह"===t?e:"दोपहर"===t?e>=10?e:e+12:"शाम"===t?e+12:void 0;},meridiem:function meridiem(e,t,n){return e<4?"रात":e<10?"सुबह":e<17?"दोपहर":e<20?"शाम":"रात";},week:{dow:0,doy:6}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n){var i=e+" ";switch(n){case"ss":return i+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return t?"jedna minuta":"jedne minute";case"mm":return i+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return i+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return i+=1===e?"dan":"dana";case"MM":return i+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return i+=1===e?"godina":2===e||3===e||4===e?"godine":"godina";}}e.defineLocale("hr",{months:{format:"siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function nextWeek(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT";}},lastDay:"[jučer u] LT",lastWeek:function lastWeek(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT";}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:t,m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";var t="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");function n(e,t,n,i){var r=e;switch(n){case"s":return i||t?"néhány másodperc":"néhány másodperce";case"ss":return r+(i||t)?" másodperc":" másodperce";case"m":return"egy"+(i||t?" perc":" perce");case"mm":return r+(i||t?" perc":" perce");case"h":return"egy"+(i||t?" óra":" órája");case"hh":return r+(i||t?" óra":" órája");case"d":return"egy"+(i||t?" nap":" napja");case"dd":return r+(i||t?" nap":" napja");case"M":return"egy"+(i||t?" hónap":" hónapja");case"MM":return r+(i||t?" hónap":" hónapja");case"y":return"egy"+(i||t?" év":" éve");case"yy":return r+(i||t?" év":" éve");}return"";}function i(e){return(e?"":"[múlt] ")+"["+t[this.day()]+"] LT[-kor]";}e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function isPM(e){return"u"===e.charAt(1).toLowerCase();},meridiem:function meridiem(e,t,n){return e<12?!0===n?"de":"DE":!0===n?"du":"DU";},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function nextWeek(){return i.call(this,!0);},lastDay:"[tegnap] LT[-kor]",lastWeek:function lastWeek(){return i.call(this,!1);},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("hy-am",{months:{format:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),standalone:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")},monthsShort:"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),weekdays:"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., HH:mm",LLLL:"dddd, D MMMM YYYY թ., HH:mm"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function nextWeek(){return"dddd [օրը ժամը] LT";},lastWeek:function lastWeek(){return"[անցած] dddd [օրը ժամը] LT";},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",ss:"%d վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function isPM(e){return /^(ցերեկվա|երեկոյան)$/.test(e);},meridiem:function meridiem(e){return e<4?"գիշերվա":e<12?"առավոտվա":e<17?"ցերեկվա":"երեկոյան";},dayOfMonthOrdinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function ordinal(e,t){switch(t){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-ին":e+"-րդ";default:return e;}},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"pagi"===t?e:"siang"===t?e>=11?e:e+12:"sore"===t||"malam"===t?e+12:void 0;},meridiem:function meridiem(e,t,n){return e<11?"pagi":e<15?"siang":e<19?"sore":"malam";},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e){return e%100==11||e%10!=1;}function n(e,n,i,r){var a=e+" ";switch(i){case"s":return n||r?"nokkrar sekúndur":"nokkrum sekúndum";case"ss":return t(e)?a+(n||r?"sekúndur":"sekúndum"):a+"sekúnda";case"m":return n?"mínúta":"mínútu";case"mm":return t(e)?a+(n||r?"mínútur":"mínútum"):n?a+"mínúta":a+"mínútu";case"hh":return t(e)?a+(n||r?"klukkustundir":"klukkustundum"):a+"klukkustund";case"d":return n?"dagur":r?"dag":"degi";case"dd":return t(e)?n?a+"dagar":a+(r?"daga":"dögum"):n?a+"dagur":a+(r?"dag":"degi");case"M":return n?"mánuður":r?"mánuð":"mánuði";case"MM":return t(e)?n?a+"mánuðir":a+(r?"mánuði":"mánuðum"):n?a+"mánuður":a+(r?"mánuð":"mánuði");case"y":return n||r?"ár":"ári";case"yy":return t(e)?a+(n||r?"ár":"árum"):a+(n||r?"ár":"ári");}}e.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:n,ss:n,m:n,mm:n,h:"klukkustund",hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function lastWeek(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT";}},sameElse:"L"},relativeTime:{future:function future(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e;},past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiemParse:/午前|午後/i,isPM:function isPM(e){return"午後"===e;},meridiem:function meridiem(e,t,n){return e<12?"午前":"午後";},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:function nextWeek(e){return e.week()<this.week()?"[来週]dddd LT":"dddd LT";},lastDay:"[昨日] LT",lastWeek:function lastWeek(e){return this.week()<e.week()?"[先週]dddd LT":"dddd LT";},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}日/,ordinal:function ordinal(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";default:return e;}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",ss:"%d秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"enjing"===t?e:"siyang"===t?e>=11?e:e+12:"sonten"===t||"ndalu"===t?e+12:void 0;},meridiem:function meridiem(e,t,n){return e<11?"enjing":e<15?"siyang":e<19?"sonten":"ndalu";},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",ss:"%d detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("ka",{months:{standalone:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),format:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:{standalone:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),format:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),isFormat:/(წინა|შემდეგ)/},weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function future(e){return /(წამი|წუთი|საათი|წელი)/.test(e)?e.replace(/ი$/,"ში"):e+"ში";},past:function past(e){return /(წამი|წუთი|საათი|დღე|თვე)/.test(e)?e.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(e)?e.replace(/წელი$/,"წლის წინ"):void 0;},s:"რამდენიმე წამი",ss:"%d წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},dayOfMonthOrdinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function ordinal(e){return 0===e?e:1===e?e+"-ლი":e<20||e<=100&&e%20==0||e%100==0?"მე-"+e:e+"-ე";},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"};e.defineLocale("kk",{months:"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгін сағат] LT",nextDay:"[Ертең сағат] LT",nextWeek:"dddd [сағат] LT",lastDay:"[Кеше сағат] LT",lastWeek:"[Өткен аптаның] dddd [сағат] LT",sameElse:"L"},relativeTime:{future:"%s ішінде",past:"%s бұрын",s:"бірнеше секунд",ss:"%d секунд",m:"бір минут",mm:"%d минут",h:"бір сағат",hh:"%d сағат",d:"бір күн",dd:"%d күн",M:"бір ай",MM:"%d ай",y:"бір жыл",yy:"%d жыл"},dayOfMonthOrdinalParse:/\d{1,2}-(ші|шы)/,ordinal:function ordinal(e){var n=e%10,i=e>=100?100:null;return e+(t[e]||t[n]||t[i]);},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"១",2:"២",3:"៣",4:"៤",5:"៥",6:"៦",7:"៧",8:"៨",9:"៩",0:"០"},n={"១":"1","២":"2","៣":"3","៤":"4","៥":"5","៦":"6","៧":"7","៨":"8","៩":"9","០":"0"};e.defineLocale("km",{months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),weekdaysMin:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/ព្រឹក|ល្ងាច/,isPM:function isPM(e){return"ល្ងាច"===e;},meridiem:function meridiem(e,t,n){return e<12?"ព្រឹក":"ល្ងាច";},calendar:{sameDay:"[ថ្ងៃនេះ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",ss:"%d វិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},dayOfMonthOrdinalParse:/ទី\d{1,2}/,ordinal:"ទី%d",preparse:function preparse(e){return e.replace(/[១២៣៤៥៦៧៨៩០]/g,function(e){return n[e];});},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];});},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"೧",2:"೨",3:"೩",4:"೪",5:"೫",6:"೬",7:"೭",8:"೮",9:"೯",0:"೦"},n={"೧":"1","೨":"2","೩":"3","೪":"4","೫":"5","೬":"6","೭":"7","೮":"8","೯":"9","೦":"0"};e.defineLocale("kn",{months:"ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),monthsShort:"ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),monthsParseExact:!0,weekdays:"ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),weekdaysShort:"ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),weekdaysMin:"ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[ಇಂದು] LT",nextDay:"[ನಾಳೆ] LT",nextWeek:"dddd, LT",lastDay:"[ನಿನ್ನೆ] LT",lastWeek:"[ಕೊನೆಯ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ನಂತರ",past:"%s ಹಿಂದೆ",s:"ಕೆಲವು ಕ್ಷಣಗಳು",ss:"%d ಸೆಕೆಂಡುಗಳು",m:"ಒಂದು ನಿಮಿಷ",mm:"%d ನಿಮಿಷ",h:"ಒಂದು ಗಂಟೆ",hh:"%d ಗಂಟೆ",d:"ಒಂದು ದಿನ",dd:"%d ದಿನ",M:"ಒಂದು ತಿಂಗಳು",MM:"%d ತಿಂಗಳು",y:"ಒಂದು ವರ್ಷ",yy:"%d ವರ್ಷ"},preparse:function preparse(e){return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g,function(e){return n[e];});},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];});},meridiemParse:/ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"ರಾತ್ರಿ"===t?e<4?e:e+12:"ಬೆಳಿಗ್ಗೆ"===t?e:"ಮಧ್ಯಾಹ್ನ"===t?e>=10?e:e+12:"ಸಂಜೆ"===t?e+12:void 0;},meridiem:function meridiem(e,t,n){return e<4?"ರಾತ್ರಿ":e<10?"ಬೆಳಿಗ್ಗೆ":e<17?"ಮಧ್ಯಾಹ್ನ":e<20?"ಸಂಜೆ":"ರಾತ್ರಿ";},dayOfMonthOrdinalParse:/\d{1,2}(ನೇ)/,ordinal:function ordinal(e){return e+"ನೇ";},week:{dow:0,doy:6}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",ss:"%d초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:function ordinal(e,t){switch(t){case"d":case"D":case"DDD":return e+"일";case"M":return e+"월";case"w":case"W":return e+"주";default:return e;}},meridiemParse:/오전|오후/,isPM:function isPM(e){return"오후"===e;},meridiem:function meridiem(e,t,n){return e<12?"오전":"오후";}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},i=["کانونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمموز","ئاب","ئەیلوول","تشرینی یەكەم","تشرینی دووەم","كانونی یەکەم"];e.defineLocale("ku",{months:i,monthsShort:i,weekdays:"یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),weekdaysShort:"یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),weekdaysMin:"ی_د_س_چ_پ_ه_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/ئێواره‌|به‌یانی/,isPM:function isPM(e){return /ئێواره‌/.test(e);},meridiem:function meridiem(e,t,n){return e<12?"به‌یانی":"ئێواره‌";},calendar:{sameDay:"[ئه‌مرۆ كاتژمێر] LT",nextDay:"[به‌یانی كاتژمێر] LT",nextWeek:"dddd [كاتژمێر] LT",lastDay:"[دوێنێ كاتژمێر] LT",lastWeek:"dddd [كاتژمێر] LT",sameElse:"L"},relativeTime:{future:"له‌ %s",past:"%s",s:"چه‌ند چركه‌یه‌ك",ss:"چركه‌ %d",m:"یه‌ك خوله‌ك",mm:"%d خوله‌ك",h:"یه‌ك كاتژمێر",hh:"%d كاتژمێر",d:"یه‌ك ڕۆژ",dd:"%d ڕۆژ",M:"یه‌ك مانگ",MM:"%d مانگ",y:"یه‌ك ساڵ",yy:"%d ساڵ"},preparse:function preparse(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return n[e];}).replace(/،/g,",");},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];}).replace(/,/g,"،");},week:{dow:6,doy:12}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={0:"-чү",1:"-чи",2:"-чи",3:"-чү",4:"-чү",5:"-чи",6:"-чы",7:"-чи",8:"-чи",9:"-чу",10:"-чу",20:"-чы",30:"-чу",40:"-чы",50:"-чү",60:"-чы",70:"-чи",80:"-чи",90:"-чу",100:"-чү"};e.defineLocale("ky",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),weekdays:"Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),weekdaysShort:"Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),weekdaysMin:"Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгүн саат] LT",nextDay:"[Эртең саат] LT",nextWeek:"dddd [саат] LT",lastDay:"[Кечээ саат] LT",lastWeek:"[Өткөн аптанын] dddd [күнү] [саат] LT",sameElse:"L"},relativeTime:{future:"%s ичинде",past:"%s мурун",s:"бирнече секунд",ss:"%d секунд",m:"бир мүнөт",mm:"%d мүнөт",h:"бир саат",hh:"%d саат",d:"бир күн",dd:"%d күн",M:"бир ай",MM:"%d ай",y:"бир жыл",yy:"%d жыл"},dayOfMonthOrdinalParse:/\d{1,2}-(чи|чы|чү|чу)/,ordinal:function ordinal(e){var n=e%10,i=e>=100?100:null;return e+(t[e]||t[n]||t[i]);},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n,i){var r={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return t?r[n][0]:r[n][1];}function n(e){if(e=parseInt(e,10),isNaN(e))return!1;if(e<0)return!0;if(e<10)return 4<=e&&e<=7;if(e<100){var t=e%10,i=e/10;return n(0===t?i:t);}if(e<1e4){for(;e>=10;){e/=10;}return n(e);}return n(e/=1e3);}e.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function lastWeek(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT";}}},relativeTime:{future:function future(e){return n(e.substr(0,e.indexOf(" ")))?"a "+e:"an "+e;},past:function past(e){return n(e.substr(0,e.indexOf(" ")))?"viru "+e:"virun "+e;},s:"e puer Sekonnen",ss:"%d Sekonnen",m:t,mm:"%d Minutten",h:t,hh:"%d Stonnen",d:t,dd:"%d Deeg",M:t,MM:"%d Méint",y:t,yy:"%d Joer"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("lo",{months:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),monthsShort:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),weekdays:"ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysShort:"ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysMin:"ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"ວັນdddd D MMMM YYYY HH:mm"},meridiemParse:/ຕອນເຊົ້າ|ຕອນແລງ/,isPM:function isPM(e){return"ຕອນແລງ"===e;},meridiem:function meridiem(e,t,n){return e<12?"ຕອນເຊົ້າ":"ຕອນແລງ";},calendar:{sameDay:"[ມື້ນີ້ເວລາ] LT",nextDay:"[ມື້ອື່ນເວລາ] LT",nextWeek:"[ວັນ]dddd[ໜ້າເວລາ] LT",lastDay:"[ມື້ວານນີ້ເວລາ] LT",lastWeek:"[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",sameElse:"L"},relativeTime:{future:"ອີກ %s",past:"%sຜ່ານມາ",s:"ບໍ່ເທົ່າໃດວິນາທີ",ss:"%d ວິນາທີ",m:"1 ນາທີ",mm:"%d ນາທີ",h:"1 ຊົ່ວໂມງ",hh:"%d ຊົ່ວໂມງ",d:"1 ມື້",dd:"%d ມື້",M:"1 ເດືອນ",MM:"%d ເດືອນ",y:"1 ປີ",yy:"%d ປີ"},dayOfMonthOrdinalParse:/(ທີ່)\d{1,2}/,ordinal:function ordinal(e){return"ທີ່"+e;}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={ss:"sekundė_sekundžių_sekundes",m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"};function n(e,t,n,i){return t?r(n)[0]:i?r(n)[1]:r(n)[2];}function i(e){return e%10==0||e>10&&e<20;}function r(e){return t[e].split("_");}function a(e,t,a,o){var l=e+" ";return 1===e?l+n(0,t,a[0],o):t?l+(i(e)?r(a)[1]:r(a)[0]):o?l+r(a)[1]:l+(i(e)?r(a)[1]:r(a)[2]);}e.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:function s(e,t,n,i){return t?"kelios sekundės":i?"kelių sekundžių":"kelias sekundes";},ss:a,m:n,mm:a,h:n,hh:a,d:n,dd:a,M:n,MM:a,y:n,yy:a},dayOfMonthOrdinalParse:/\d{1,2}-oji/,ordinal:function ordinal(e){return e+"-oji";},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={ss:"sekundes_sekundēm_sekunde_sekundes".split("_"),m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};function n(e,t,n){return n?t%10==1&&t%100!=11?e[2]:e[3]:t%10==1&&t%100!=11?e[0]:e[1];}function i(e,i,r){return e+" "+n(t[r],e,i);}function r(e,i,r){return n(t[r],e,i);}e.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:function s(e,t){return t?"dažas sekundes":"dažām sekundēm";},ss:i,m:r,mm:i,h:r,hh:i,d:r,dd:i,M:r,MM:i,y:r,yy:i},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={words:{ss:["sekund","sekunda","sekundi"],m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function correctGrammaticalCase(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2];},translate:function translate(e,n,i){var r=t.words[i];return 1===i.length?n?r[0]:r[1]:e+" "+t.correctGrammaticalCase(e,r);}};e.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function nextWeek(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT";}},lastDay:"[juče u] LT",lastWeek:function lastWeek(){return["[prošle] [nedjelje] [u] LT","[prošlog] [ponedjeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srijede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"][this.day()];},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",ss:t.translate,m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"dan",dd:t.translate,M:"mjesec",MM:t.translate,y:"godinu",yy:t.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("mi",{months:"Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),monthsRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,weekdays:"Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),weekdaysShort:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),weekdaysMin:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},calendar:{sameDay:"[i teie mahana, i] LT",nextDay:"[apopo i] LT",nextWeek:"dddd [i] LT",lastDay:"[inanahi i] LT",lastWeek:"dddd [whakamutunga i] LT",sameElse:"L"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te hēkona ruarua",ss:"%d hēkona",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"[Во] dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function lastWeek(){switch(this.day()){case 0:case 3:case 6:return"[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Изминатиот] dddd [во] LT";}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",ss:"%d секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function ordinal(e){var t=e%10,n=e%100;return 0===e?e+"-ев":0===n?e+"-ен":n>10&&n<20?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти";},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),monthsParseExact:!0,weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -നു",LLLL:"dddd, D MMMM YYYY, A h:mm -നു"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",ss:"%d സെക്കൻഡ്",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"രാത്രി"===t&&e>=4||"ഉച്ച കഴിഞ്ഞ്"===t||"വൈകുന്നേരം"===t?e+12:e;},meridiem:function meridiem(e,t,n){return e<4?"രാത്രി":e<12?"രാവിലെ":e<17?"ഉച്ച കഴിഞ്ഞ്":e<20?"വൈകുന്നേരം":"രാത്രി";}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n,i){switch(n){case"s":return t?"хэдхэн секунд":"хэдхэн секундын";case"ss":return e+(t?" секунд":" секундын");case"m":case"mm":return e+(t?" минут":" минутын");case"h":case"hh":return e+(t?" цаг":" цагийн");case"d":case"dd":return e+(t?" өдөр":" өдрийн");case"M":case"MM":return e+(t?" сар":" сарын");case"y":case"yy":return e+(t?" жил":" жилийн");default:return e;}}e.defineLocale("mn",{months:"Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),monthsShort:"1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),monthsParseExact:!0,weekdays:"Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),weekdaysShort:"Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),weekdaysMin:"Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY оны MMMMын D",LLL:"YYYY оны MMMMын D HH:mm",LLLL:"dddd, YYYY оны MMMMын D HH:mm"},meridiemParse:/ҮӨ|ҮХ/i,isPM:function isPM(e){return"ҮХ"===e;},meridiem:function meridiem(e,t,n){return e<12?"ҮӨ":"ҮХ";},calendar:{sameDay:"[Өнөөдөр] LT",nextDay:"[Маргааш] LT",nextWeek:"[Ирэх] dddd LT",lastDay:"[Өчигдөр] LT",lastWeek:"[Өнгөрсөн] dddd LT",sameElse:"L"},relativeTime:{future:"%s дараа",past:"%s өмнө",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2} өдөр/,ordinal:function ordinal(e,t){switch(t){case"d":case"D":case"DDD":return e+" өдөр";default:return e;}}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};function i(e,t,n,i){var r="";if(t)switch(n){case"s":r="काही सेकंद";break;case"ss":r="%d सेकंद";break;case"m":r="एक मिनिट";break;case"mm":r="%d मिनिटे";break;case"h":r="एक तास";break;case"hh":r="%d तास";break;case"d":r="एक दिवस";break;case"dd":r="%d दिवस";break;case"M":r="एक महिना";break;case"MM":r="%d महिने";break;case"y":r="एक वर्ष";break;case"yy":r="%d वर्षे";}else switch(n){case"s":r="काही सेकंदां";break;case"ss":r="%d सेकंदां";break;case"m":r="एका मिनिटा";break;case"mm":r="%d मिनिटां";break;case"h":r="एका तासा";break;case"hh":r="%d तासां";break;case"d":r="एका दिवसा";break;case"dd":r="%d दिवसां";break;case"M":r="एका महिन्या";break;case"MM":r="%d महिन्यां";break;case"y":r="एका वर्षा";break;case"yy":r="%d वर्षां";}return r.replace(/%d/i,e);}e.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm वाजता",LLLL:"dddd, D MMMM YYYY, A h:mm वाजता"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%sमध्ये",past:"%sपूर्वी",s:i,ss:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i},preparse:function preparse(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e];});},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];});},meridiemParse:/रात्री|सकाळी|दुपारी|सायंकाळी/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"रात्री"===t?e<4?e:e+12:"सकाळी"===t?e:"दुपारी"===t?e>=10?e:e+12:"सायंकाळी"===t?e+12:void 0;},meridiem:function meridiem(e,t,n){return e<4?"रात्री":e<10?"सकाळी":e<17?"दुपारी":e<20?"सायंकाळी":"रात्री";},week:{dow:0,doy:6}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0;},meridiem:function meridiem(e,t,n){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam";},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0;},meridiem:function meridiem(e,t,n){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam";},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("mt",{months:"Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),monthsShort:"Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),weekdays:"Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),weekdaysShort:"Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),weekdaysMin:"Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Illum fil-]LT",nextDay:"[Għada fil-]LT",nextWeek:"dddd [fil-]LT",lastDay:"[Il-bieraħ fil-]LT",lastWeek:"dddd [li għadda] [fil-]LT",sameElse:"L"},relativeTime:{future:"f’ %s",past:"%s ilu",s:"ftit sekondi",ss:"%d sekondi",m:"minuta",mm:"%d minuti",h:"siegħa",hh:"%d siegħat",d:"ġurnata",dd:"%d ġranet",M:"xahar",MM:"%d xhur",y:"sena",yy:"%d sni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"၁",2:"၂",3:"၃",4:"၄",5:"၅",6:"၆",7:"၇",8:"၈",9:"၉",0:"၀"},n={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"};e.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",ss:"%d စက္ကန့်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function preparse(e){return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,function(e){return n[e];});},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];});},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",ss:"%d sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};e.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),monthsParseExact:!0,weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, Aको h:mm बजे",LLLL:"dddd, D MMMM YYYY, Aको h:mm बजे"},preparse:function preparse(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e];});},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];});},meridiemParse:/राति|बिहान|दिउँसो|साँझ/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"राति"===t?e<4?e:e+12:"बिहान"===t?e:"दिउँसो"===t?e>=10?e:e+12:"साँझ"===t?e+12:void 0;},meridiem:function meridiem(e,t,n){return e<3?"राति":e<12?"बिहान":e<16?"दिउँसो":e<20?"साँझ":"राति";},calendar:{sameDay:"[आज] LT",nextDay:"[भोलि] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडि",s:"केही क्षण",ss:"%d सेकेण्ड",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:0,doy:6}});}(n(0));},function(e,t,n){!function(e){"use strict";var t="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),i=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],r=/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;e.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function monthsShort(e,i){return e?/-MMM-/.test(i)?n[e.month()]:t[e.month()]:t;},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:i,longMonthsParse:i,shortMonthsParse:i,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function ordinal(e){return e+(1===e||8===e||e>=20?"ste":"de");},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),i=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],r=/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;e.defineLocale("nl-be",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function monthsShort(e,i){return e?/-MMM-/.test(i)?n[e.month()]:t[e.month()]:t;},monthsRegex:r,monthsShortRegex:r,monthsStrictRegex:/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:i,longMonthsParse:i,shortMonthsParse:i,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function ordinal(e){return e+(1===e||8===e||e>=20?"ste":"de");},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",ss:"%d sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"੧",2:"੨",3:"੩",4:"੪",5:"੫",6:"੬",7:"੭",8:"੮",9:"੯",0:"੦"},n={"੧":"1","੨":"2","੩":"3","੪":"4","੫":"5","੬":"6","੭":"7","੮":"8","੯":"9","੦":"0"};e.defineLocale("pa-in",{months:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),monthsShort:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),weekdays:"ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),weekdaysShort:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),weekdaysMin:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),longDateFormat:{LT:"A h:mm ਵਜੇ",LTS:"A h:mm:ss ਵਜੇ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ਵਜੇ",LLLL:"dddd, D MMMM YYYY, A h:mm ਵਜੇ"},calendar:{sameDay:"[ਅਜ] LT",nextDay:"[ਕਲ] LT",nextWeek:"[ਅਗਲਾ] dddd, LT",lastDay:"[ਕਲ] LT",lastWeek:"[ਪਿਛਲੇ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ਵਿੱਚ",past:"%s ਪਿਛਲੇ",s:"ਕੁਝ ਸਕਿੰਟ",ss:"%d ਸਕਿੰਟ",m:"ਇਕ ਮਿੰਟ",mm:"%d ਮਿੰਟ",h:"ਇੱਕ ਘੰਟਾ",hh:"%d ਘੰਟੇ",d:"ਇੱਕ ਦਿਨ",dd:"%d ਦਿਨ",M:"ਇੱਕ ਮਹੀਨਾ",MM:"%d ਮਹੀਨੇ",y:"ਇੱਕ ਸਾਲ",yy:"%d ਸਾਲ"},preparse:function preparse(e){return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g,function(e){return n[e];});},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];});},meridiemParse:/ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"ਰਾਤ"===t?e<4?e:e+12:"ਸਵੇਰ"===t?e:"ਦੁਪਹਿਰ"===t?e>=10?e:e+12:"ਸ਼ਾਮ"===t?e+12:void 0;},meridiem:function meridiem(e,t,n){return e<4?"ਰਾਤ":e<10?"ਸਵੇਰ":e<17?"ਦੁਪਹਿਰ":e<20?"ਸ਼ਾਮ":"ਰਾਤ";},week:{dow:0,doy:6}});}(n(0));},function(e,t,n){!function(e){"use strict";var t="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),n="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");function i(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1;}function r(e,t,n){var r=e+" ";switch(n){case"ss":return r+(i(e)?"sekundy":"sekund");case"m":return t?"minuta":"minutę";case"mm":return r+(i(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return r+(i(e)?"godziny":"godzin");case"MM":return r+(i(e)?"miesiące":"miesięcy");case"yy":return r+(i(e)?"lata":"lat");}}e.defineLocale("pl",{months:function months(e,i){return e?""===i?"("+n[e.month()]+"|"+t[e.month()]+")":/D MMMM/.test(i)?n[e.month()]:t[e.month()]:t;},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function nextWeek(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT";}},lastDay:"[Wczoraj o] LT",lastWeek:function lastWeek(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT";}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:r,m:r,mm:r,h:r,hh:r,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:r,y:"rok",yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("pt",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function lastWeek(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT";},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("pt-br",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function lastWeek(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT";},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº"});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n){var i=" ";return(e%100>=20||e>=100&&e%100==0)&&(i=" de "),e+i+{ss:"secunde",mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"}[n];}e.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",ss:t,m:"un minut",mm:t,h:"o oră",hh:t,d:"o zi",dd:t,M:"o lună",MM:t,y:"un an",yy:t},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n){var i,r,a={ss:t?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===n?t?"минута":"минуту":e+" "+(i=+e,r=a[n].split("_"),i%10==1&&i%100!=11?r[0]:i%10>=2&&i%10<=4&&(i%100<10||i%100>=20)?r[1]:r[2]);}var n=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];e.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:n,longMonthsParse:n,shortMonthsParse:n,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},calendar:{sameDay:"[Сегодня, в] LT",nextDay:"[Завтра, в] LT",lastDay:"[Вчера, в] LT",nextWeek:function nextWeek(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В следующее] dddd, [в] LT";case 1:case 2:case 4:return"[В следующий] dddd, [в] LT";case 3:case 5:case 6:return"[В следующую] dddd, [в] LT";}},lastWeek:function lastWeek(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd, [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd, [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd, [в] LT";}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",ss:t,m:t,mm:t,h:"час",hh:t,d:"день",dd:t,M:"месяц",MM:t,y:"год",yy:t},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function isPM(e){return /^(дня|вечера)$/.test(e);},meridiem:function meridiem(e,t,n){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера";},dayOfMonthOrdinalParse:/\d{1,2}-(й|го|я)/,ordinal:function ordinal(e,t){switch(t){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e;}},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t=["جنوري","فيبروري","مارچ","اپريل","مئي","جون","جولاءِ","آگسٽ","سيپٽمبر","آڪٽوبر","نومبر","ڊسمبر"],n=["آچر","سومر","اڱارو","اربع","خميس","جمع","ڇنڇر"];e.defineLocale("sd",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:n,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},meridiemParse:/صبح|شام/,isPM:function isPM(e){return"شام"===e;},meridiem:function meridiem(e,t,n){return e<12?"صبح":"شام";},calendar:{sameDay:"[اڄ] LT",nextDay:"[سڀاڻي] LT",nextWeek:"dddd [اڳين هفتي تي] LT",lastDay:"[ڪالهه] LT",lastWeek:"[گزريل هفتي] dddd [تي] LT",sameElse:"L"},relativeTime:{future:"%s پوء",past:"%s اڳ",s:"چند سيڪنڊ",ss:"%d سيڪنڊ",m:"هڪ منٽ",mm:"%d منٽ",h:"هڪ ڪلاڪ",hh:"%d ڪلاڪ",d:"هڪ ڏينهن",dd:"%d ڏينهن",M:"هڪ مهينو",MM:"%d مهينا",y:"هڪ سال",yy:"%d سال"},preparse:function preparse(e){return e.replace(/،/g,",");},postformat:function postformat(e){return e.replace(/,/g,"،");},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("se",{months:"ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),monthsShort:"ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),weekdays:"sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),weekdaysShort:"sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s geažes",past:"maŋit %s",s:"moadde sekunddat",ss:"%d sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta mánnu",MM:"%d mánut",y:"okta jahki",yy:"%d jagit"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("si",{months:"ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),monthsShort:"ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),weekdays:"ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),weekdaysShort:"ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),weekdaysMin:"ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [වැනි] dddd, a h:mm:ss"},calendar:{sameDay:"[අද] LT[ට]",nextDay:"[හෙට] LT[ට]",nextWeek:"dddd LT[ට]",lastDay:"[ඊයේ] LT[ට]",lastWeek:"[පසුගිය] dddd LT[ට]",sameElse:"L"},relativeTime:{future:"%sකින්",past:"%sකට පෙර",s:"තත්පර කිහිපය",ss:"තත්පර %d",m:"මිනිත්තුව",mm:"මිනිත්තු %d",h:"පැය",hh:"පැය %d",d:"දිනය",dd:"දින %d",M:"මාසය",MM:"මාස %d",y:"වසර",yy:"වසර %d"},dayOfMonthOrdinalParse:/\d{1,2} වැනි/,ordinal:function ordinal(e){return e+" වැනි";},meridiemParse:/පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,isPM:function isPM(e){return"ප.ව."===e||"පස් වරු"===e;},meridiem:function meridiem(e,t,n){return e>11?n?"ප.ව.":"පස් වරු":n?"පෙ.ව.":"පෙර වරු";}});}(n(0));},function(e,t,n){!function(e){"use strict";var t="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),n="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");function i(e){return e>1&&e<5;}function r(e,t,n,r){var a=e+" ";switch(n){case"s":return t||r?"pár sekúnd":"pár sekundami";case"ss":return t||r?a+(i(e)?"sekundy":"sekúnd"):a+"sekundami";case"m":return t?"minúta":r?"minútu":"minútou";case"mm":return t||r?a+(i(e)?"minúty":"minút"):a+"minútami";case"h":return t?"hodina":r?"hodinu":"hodinou";case"hh":return t||r?a+(i(e)?"hodiny":"hodín"):a+"hodinami";case"d":return t||r?"deň":"dňom";case"dd":return t||r?a+(i(e)?"dni":"dní"):a+"dňami";case"M":return t||r?"mesiac":"mesiacom";case"MM":return t||r?a+(i(e)?"mesiace":"mesiacov"):a+"mesiacmi";case"y":return t||r?"rok":"rokom";case"yy":return t||r?a+(i(e)?"roky":"rokov"):a+"rokmi";}}e.defineLocale("sk",{months:t,monthsShort:n,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function nextWeek(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT";}},lastDay:"[včera o] LT",lastWeek:function lastWeek(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT";}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:r,ss:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n,i){var r=e+" ";switch(n){case"s":return t||i?"nekaj sekund":"nekaj sekundami";case"ss":return r+=1===e?t?"sekundo":"sekundi":2===e?t||i?"sekundi":"sekundah":e<5?t||i?"sekunde":"sekundah":"sekund";case"m":return t?"ena minuta":"eno minuto";case"mm":return r+=1===e?t?"minuta":"minuto":2===e?t||i?"minuti":"minutama":e<5?t||i?"minute":"minutami":t||i?"minut":"minutami";case"h":return t?"ena ura":"eno uro";case"hh":return r+=1===e?t?"ura":"uro":2===e?t||i?"uri":"urama":e<5?t||i?"ure":"urami":t||i?"ur":"urami";case"d":return t||i?"en dan":"enim dnem";case"dd":return r+=1===e?t||i?"dan":"dnem":2===e?t||i?"dni":"dnevoma":t||i?"dni":"dnevi";case"M":return t||i?"en mesec":"enim mesecem";case"MM":return r+=1===e?t||i?"mesec":"mesecem":2===e?t||i?"meseca":"mesecema":e<5?t||i?"mesece":"meseci":t||i?"mesecev":"meseci";case"y":return t||i?"eno leto":"enim letom";case"yy":return r+=1===e?t||i?"leto":"letom":2===e?t||i?"leti":"letoma":e<5?t||i?"leta":"leti":t||i?"let":"leti";}}e.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function nextWeek(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT";}},lastDay:"[včeraj ob] LT",lastWeek:function lastWeek(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT";}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function isPM(e){return"M"===e.charAt(0);},meridiem:function meridiem(e,t,n){return e<12?"PD":"MD";},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",ss:"%d sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={words:{ss:["sekunda","sekunde","sekundi"],m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function correctGrammaticalCase(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2];},translate:function translate(e,n,i){var r=t.words[i];return 1===i.length?n?r[0]:r[1]:e+" "+t.correctGrammaticalCase(e,r);}};e.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function nextWeek(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT";}},lastDay:"[juče u] LT",lastWeek:function lastWeek(){return["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"][this.day()];},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",ss:t.translate,m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"dan",dd:t.translate,M:"mesec",MM:t.translate,y:"godinu",yy:t.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={words:{ss:["секунда","секунде","секунди"],m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function correctGrammaticalCase(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2];},translate:function translate(e,n,i){var r=t.words[i];return 1===i.length?n?r[0]:r[1]:e+" "+t.correctGrammaticalCase(e,r);}};e.defineLocale("sr-cyrl",{months:"јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),monthsShort:"јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),monthsParseExact:!0,weekdays:"недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),weekdaysShort:"нед._пон._уто._сре._чет._пет._суб.".split("_"),weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function nextWeek(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT";}},lastDay:"[јуче у] LT",lastWeek:function lastWeek(){return["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"][this.day()];},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",ss:t.translate,m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"дан",dd:t.translate,M:"месец",MM:t.translate,y:"годину",yy:t.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",ss:"%d mzuzwana",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function meridiem(e,t,n){return e<11?"ekuseni":e<15?"emini":e<19?"entsambama":"ebusuku";},meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"ekuseni"===t?e:"emini"===t?e>=11?e:e+12:"entsambama"===t||"ebusuku"===t?0===e?0:e+12:void 0;},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"[På] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",ss:"%d sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}(e|a)/,ordinal:function ordinal(e){var t=e%10,n=1==~~(e%100/10)?"e":1===t?"a":2===t?"a":"e";return e+n;},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",ss:"sekunde %d",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"masiku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"௧",2:"௨",3:"௩",4:"௪",5:"௫",6:"௬",7:"௭",8:"௮",9:"௯",0:"௦"},n={"௧":"1","௨":"2","௩":"3","௪":"4","௫":"5","௬":"6","௭":"7","௮":"8","௯":"9","௦":"0"};e.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",ss:"%d விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},dayOfMonthOrdinalParse:/\d{1,2}வது/,ordinal:function ordinal(e){return e+"வது";},preparse:function preparse(e){return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g,function(e){return n[e];});},postformat:function postformat(e){return e.replace(/\d/g,function(e){return t[e];});},meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function meridiem(e,t,n){return e<2?" யாமம்":e<6?" வைகறை":e<10?" காலை":e<14?" நண்பகல்":e<18?" எற்பாடு":e<22?" மாலை":" யாமம்";},meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"யாமம்"===t?e<2?e:e+12:"வைகறை"===t||"காலை"===t?e:"நண்பகல்"===t&&e>=10?e:e+12;},week:{dow:0,doy:6}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("te",{months:"జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),monthsShort:"జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),monthsParseExact:!0,weekdays:"ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),weekdaysShort:"ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),weekdaysMin:"ఆ_సో_మం_బు_గు_శు_శ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[నేడు] LT",nextDay:"[రేపు] LT",nextWeek:"dddd, LT",lastDay:"[నిన్న] LT",lastWeek:"[గత] dddd, LT",sameElse:"L"},relativeTime:{future:"%s లో",past:"%s క్రితం",s:"కొన్ని క్షణాలు",ss:"%d సెకన్లు",m:"ఒక నిమిషం",mm:"%d నిమిషాలు",h:"ఒక గంట",hh:"%d గంటలు",d:"ఒక రోజు",dd:"%d రోజులు",M:"ఒక నెల",MM:"%d నెలలు",y:"ఒక సంవత్సరం",yy:"%d సంవత్సరాలు"},dayOfMonthOrdinalParse:/\d{1,2}వ/,ordinal:"%dవ",meridiemParse:/రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"రాత్రి"===t?e<4?e:e+12:"ఉదయం"===t?e:"మధ్యాహ్నం"===t?e>=10?e:e+12:"సాయంత్రం"===t?e+12:void 0;},meridiem:function meridiem(e,t,n){return e<4?"రాత్రి":e<10?"ఉదయం":e<17?"మధ్యాహ్నం":e<20?"సాయంత్రం":"రాత్రి";},week:{dow:0,doy:6}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("tet",{months:"Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),weekdaysShort:"Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),weekdaysMin:"Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ohin iha] LT",nextDay:"[Aban iha] LT",nextWeek:"dddd [iha] LT",lastDay:"[Horiseik iha] LT",lastWeek:"dddd [semana kotuk] [iha] LT",sameElse:"L"},relativeTime:{future:"iha %s",past:"%s liuba",s:"minutu balun",ss:"minutu %d",m:"minutu ida",mm:"minutu %d",h:"oras ida",hh:"oras %d",d:"loron ida",dd:"loron %d",M:"fulan ida",MM:"fulan %d",y:"tinan ida",yy:"tinan %d"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function ordinal(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n;},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={0:"-ум",1:"-ум",2:"-юм",3:"-юм",4:"-ум",5:"-ум",6:"-ум",7:"-ум",8:"-ум",9:"-ум",10:"-ум",12:"-ум",13:"-ум",20:"-ум",30:"-юм",40:"-ум",50:"-ум",60:"-ум",70:"-ум",80:"-ум",90:"-ум",100:"-ум"};e.defineLocale("tg",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),weekdaysShort:"яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),weekdaysMin:"яш_дш_сш_чш_пш_ҷм_шб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Имрӯз соати] LT",nextDay:"[Пагоҳ соати] LT",lastDay:"[Дирӯз соати] LT",nextWeek:"dddd[и] [ҳафтаи оянда соати] LT",lastWeek:"dddd[и] [ҳафтаи гузашта соати] LT",sameElse:"L"},relativeTime:{future:"баъди %s",past:"%s пеш",s:"якчанд сония",m:"як дақиқа",mm:"%d дақиқа",h:"як соат",hh:"%d соат",d:"як рӯз",dd:"%d рӯз",M:"як моҳ",MM:"%d моҳ",y:"як сол",yy:"%d сол"},meridiemParse:/шаб|субҳ|рӯз|бегоҳ/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"шаб"===t?e<4?e:e+12:"субҳ"===t?e:"рӯз"===t?e>=11?e:e+12:"бегоҳ"===t?e+12:void 0;},meridiem:function meridiem(e,t,n){return e<4?"шаб":e<11?"субҳ":e<16?"рӯз":e<19?"бегоҳ":"шаб";},dayOfMonthOrdinalParse:/\d{1,2}-(ум|юм)/,ordinal:function ordinal(e){var n=e%10,i=e>=100?100:null;return e+(t[e]||t[n]||t[i]);},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),monthsParseExact:!0,weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function isPM(e){return"หลังเที่ยง"===e;},meridiem:function meridiem(e,t,n){return e<12?"ก่อนเที่ยง":"หลังเที่ยง";},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",ss:"%d วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",ss:"%d segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function ordinal(e){return e;},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t="pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");function n(e,n,i,r){var a=function(e){var n=Math.floor(e%1e3/100),i=Math.floor(e%100/10),r=e%10,a="";return n>0&&(a+=t[n]+"vatlh"),i>0&&(a+=(""!==a?" ":"")+t[i]+"maH"),r>0&&(a+=(""!==a?" ":"")+t[r]),""===a?"pagh":a;}(e);switch(i){case"ss":return a+" lup";case"mm":return a+" tup";case"hh":return a+" rep";case"dd":return a+" jaj";case"MM":return a+" jar";case"yy":return a+" DIS";}}e.defineLocale("tlh",{months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa’leS] LT",nextWeek:"LLL",lastDay:"[wa’Hu’] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:function future(e){var t=e;return t=-1!==e.indexOf("jaj")?t.slice(0,-3)+"leS":-1!==e.indexOf("jar")?t.slice(0,-3)+"waQ":-1!==e.indexOf("DIS")?t.slice(0,-3)+"nem":t+" pIq";},past:function past(e){var t=e;return t=-1!==e.indexOf("jaj")?t.slice(0,-3)+"Hu’":-1!==e.indexOf("jar")?t.slice(0,-3)+"wen":-1!==e.indexOf("DIS")?t.slice(0,-3)+"ben":t+" ret";},s:"puS lup",ss:n,m:"wa’ tup",mm:n,h:"wa’ rep",hh:n,d:"wa’ jaj",dd:n,M:"wa’ jar",MM:n,y:"wa’ DIS",yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";var t={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"};e.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[gelecek] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",ss:"%d saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinal:function ordinal(e,n){switch(n){case"d":case"D":case"Do":case"DD":return e;default:if(0===e)return e+"'ıncı";var i=e%10,r=e%100-i,a=e>=100?100:null;return e+(t[i]||t[r]||t[a]);}},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n,i){var r={s:["viensas secunds","'iensas secunds"],ss:[e+" secunds",e+" secunds"],m:["'n míut","'iens míut"],mm:[e+" míuts",e+" míuts"],h:["'n þora","'iensa þora"],hh:[e+" þoras",e+" þoras"],d:["'n ziua","'iensa ziua"],dd:[e+" ziuas",e+" ziuas"],M:["'n mes","'iens mes"],MM:[e+" mesen",e+" mesen"],y:["'n ar","'iens ar"],yy:[e+" ars",e+" ars"]};return i?r[n][0]:t?r[n][0]:r[n][1];}e.defineLocale("tzl",{months:"Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),weekdaysShort:"Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),weekdaysMin:"Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function isPM(e){return"d'o"===e.toLowerCase();},meridiem:function meridiem(e,t,n){return e>11?n?"d'o":"D'O":n?"d'a":"D'A";},calendar:{sameDay:"[oxhi à] LT",nextDay:"[demà à] LT",nextWeek:"dddd [à] LT",lastDay:"[ieiri à] LT",lastWeek:"[sür el] dddd [lasteu à] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",ss:"%d ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",ss:"%d imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("ug-cn",{months:"يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),monthsShort:"يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),weekdays:"يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),weekdaysShort:"يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),weekdaysMin:"يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY-يىلىM-ئاينىڭD-كۈنى",LLL:"YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",LLLL:"dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"},meridiemParse:/يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"يېرىم كېچە"===t||"سەھەر"===t||"چۈشتىن بۇرۇن"===t?e:"چۈشتىن كېيىن"===t||"كەچ"===t?e+12:e>=11?e:e+12;},meridiem:function meridiem(e,t,n){var i=100*e+t;return i<600?"يېرىم كېچە":i<900?"سەھەر":i<1130?"چۈشتىن بۇرۇن":i<1230?"چۈش":i<1800?"چۈشتىن كېيىن":"كەچ";},calendar:{sameDay:"[بۈگۈن سائەت] LT",nextDay:"[ئەتە سائەت] LT",nextWeek:"[كېلەركى] dddd [سائەت] LT",lastDay:"[تۆنۈگۈن] LT",lastWeek:"[ئالدىنقى] dddd [سائەت] LT",sameElse:"L"},relativeTime:{future:"%s كېيىن",past:"%s بۇرۇن",s:"نەچچە سېكونت",ss:"%d سېكونت",m:"بىر مىنۇت",mm:"%d مىنۇت",h:"بىر سائەت",hh:"%d سائەت",d:"بىر كۈن",dd:"%d كۈن",M:"بىر ئاي",MM:"%d ئاي",y:"بىر يىل",yy:"%d يىل"},dayOfMonthOrdinalParse:/\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,ordinal:function ordinal(e,t){switch(t){case"d":case"D":case"DDD":return e+"-كۈنى";case"w":case"W":return e+"-ھەپتە";default:return e;}},preparse:function preparse(e){return e.replace(/،/g,",");},postformat:function postformat(e){return e.replace(/,/g,"،");},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";function t(e,t,n){var i,r,a={ss:t?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:t?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:t?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return"m"===n?t?"хвилина":"хвилину":"h"===n?t?"година":"годину":e+" "+(i=+e,r=a[n].split("_"),i%10==1&&i%100!=11?r[0]:i%10>=2&&i%10<=4&&(i%100<10||i%100>=20)?r[1]:r[2]);}function n(e){return function(){return e+"о"+(11===this.hours()?"б":"")+"] LT";};}e.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:function weekdays(e,t){var n={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")};if(!e)return n.nominative;var i=/(\[[ВвУу]\]) ?dddd/.test(t)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)?"genitive":"nominative";return n[i][e.day()];},weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:n("[Сьогодні "),nextDay:n("[Завтра "),lastDay:n("[Вчора "),nextWeek:n("[У] dddd ["),lastWeek:function lastWeek(){switch(this.day()){case 0:case 3:case 5:case 6:return n("[Минулої] dddd [").call(this);case 1:case 2:case 4:return n("[Минулого] dddd [").call(this);}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",ss:t,m:t,mm:t,h:"годину",hh:t,d:"день",dd:t,M:"місяць",MM:t,y:"рік",yy:t},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function isPM(e){return /^(дня|вечора)$/.test(e);},meridiem:function meridiem(e,t,n){return e<4?"ночі":e<12?"ранку":e<17?"дня":"вечора";},dayOfMonthOrdinalParse:/\d{1,2}-(й|го)/,ordinal:function ordinal(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e+"-й";case"D":return e+"-го";default:return e;}},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";var t=["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],n=["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"];e.defineLocale("ur",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:n,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},meridiemParse:/صبح|شام/,isPM:function isPM(e){return"شام"===e;},meridiem:function meridiem(e,t,n){return e<12?"صبح":"شام";},calendar:{sameDay:"[آج بوقت] LT",nextDay:"[کل بوقت] LT",nextWeek:"dddd [بوقت] LT",lastDay:"[گذشتہ روز بوقت] LT",lastWeek:"[گذشتہ] dddd [بوقت] LT",sameElse:"L"},relativeTime:{future:"%s بعد",past:"%s قبل",s:"چند سیکنڈ",ss:"%d سیکنڈ",m:"ایک منٹ",mm:"%d منٹ",h:"ایک گھنٹہ",hh:"%d گھنٹے",d:"ایک دن",dd:"%d دن",M:"ایک ماہ",MM:"%d ماہ",y:"ایک سال",yy:"%d سال"},preparse:function preparse(e){return e.replace(/،/g,",");},postformat:function postformat(e){return e.replace(/,/g,"،");},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("uz",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",ss:"%d фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("uz-latn",{months:"Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),monthsShort:"Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),weekdays:"Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),weekdaysShort:"Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),weekdaysMin:"Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Bugun soat] LT [da]",nextDay:"[Ertaga] LT [da]",nextWeek:"dddd [kuni soat] LT [da]",lastDay:"[Kecha soat] LT [da]",lastWeek:"[O'tgan] dddd [kuni soat] LT [da]",sameElse:"L"},relativeTime:{future:"Yaqin %s ichida",past:"Bir necha %s oldin",s:"soniya",ss:"%d soniya",m:"bir daqiqa",mm:"%d daqiqa",h:"bir soat",hh:"%d soat",d:"bir kun",dd:"%d kun",M:"bir oy",MM:"%d oy",y:"bir yil",yy:"%d yil"},week:{dow:1,doy:7}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:!0,weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function isPM(e){return /^ch$/i.test(e);},meridiem:function meridiem(e,t,n){return e<12?n?"sa":"SA":n?"ch":"CH";},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",ss:"%d giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function ordinal(e){return e;},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("x-pseudo",{months:"J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),monthsShort:"J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),monthsParseExact:!0,weekdays:"S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),weekdaysMin:"S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~ódá~ý át] LT",nextDay:"[T~ómó~rró~w át] LT",nextWeek:"dddd [át] LT",lastDay:"[Ý~ést~érdá~ý át] LT",lastWeek:"[L~ást] dddd [át] LT",sameElse:"L"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",ss:"%d s~écóñ~ds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñt~hs",y:"á ~ýéár",yy:"%d ý~éárs"},dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function ordinal(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n;},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("yo",{months:"Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),monthsShort:"Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),weekdays:"Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),weekdaysShort:"Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),weekdaysMin:"Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Ònì ni] LT",nextDay:"[Ọ̀la ni] LT",nextWeek:"dddd [Ọsẹ̀ tón'bọ] [ni] LT",lastDay:"[Àna ni] LT",lastWeek:"dddd [Ọsẹ̀ tólọ́] [ni] LT",sameElse:"L"},relativeTime:{future:"ní %s",past:"%s kọjá",s:"ìsẹjú aayá die",ss:"aayá %d",m:"ìsẹjú kan",mm:"ìsẹjú %d",h:"wákati kan",hh:"wákati %d",d:"ọjọ́ kan",dd:"ọjọ́ %d",M:"osù kan",MM:"osù %d",y:"ọdún kan",yy:"ọdún %d"},dayOfMonthOrdinalParse:/ọjọ́\s\d{1,2}/,ordinal:"ọjọ́ %d",week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"下午"===t||"晚上"===t?e+12:e>=11?e:e+12;},meridiem:function meridiem(e,t,n){var i=100*e+t;return i<600?"凌晨":i<900?"早上":i<1130?"上午":i<1230?"中午":i<1800?"下午":"晚上";},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function ordinal(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e;}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",ss:"%d 秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("zh-hk",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0;},meridiem:function meridiem(e,t,n){var i=100*e+t;return i<600?"凌晨":i<900?"早上":i<1130?"上午":i<1230?"中午":i<1800?"下午":"晚上";},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function ordinal(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e;}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",ss:"%d 秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}});}(n(0));},function(e,t,n){!function(e){"use strict";e.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function meridiemHour(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0;},meridiem:function meridiem(e,t,n){var i=100*e+t;return i<600?"凌晨":i<900?"早上":i<1130?"上午":i<1230?"中午":i<1800?"下午":"晚上";},calendar:{sameDay:"[今天] LT",nextDay:"[明天] LT",nextWeek:"[下]dddd LT",lastDay:"[昨天] LT",lastWeek:"[上]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function ordinal(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e;}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",ss:"%d 秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}});}(n(0));},function(e,t,n){var i=n(169),r=n(171),a=function a(e){return e instanceof a?e:this instanceof a?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof e?(t=r.getRgba(e))?this.setValues("rgb",t):(t=r.getHsla(e))?this.setValues("hsl",t):(t=r.getHwb(e))&&this.setValues("hwb",t):"object"==_typeof(e)&&(void 0!==(t=e).r||void 0!==t.red?this.setValues("rgb",t):void 0!==t.l||void 0!==t.lightness?this.setValues("hsl",t):void 0!==t.v||void 0!==t.value?this.setValues("hsv",t):void 0!==t.w||void 0!==t.whiteness?this.setValues("hwb",t):void 0===t.c&&void 0===t.cyan||this.setValues("cmyk",t)))):new a(e);var t;};a.prototype={isValid:function isValid(){return this.valid;},rgb:function rgb(){return this.setSpace("rgb",arguments);},hsl:function hsl(){return this.setSpace("hsl",arguments);},hsv:function hsv(){return this.setSpace("hsv",arguments);},hwb:function hwb(){return this.setSpace("hwb",arguments);},cmyk:function cmyk(){return this.setSpace("cmyk",arguments);},rgbArray:function rgbArray(){return this.values.rgb;},hslArray:function hslArray(){return this.values.hsl;},hsvArray:function hsvArray(){return this.values.hsv;},hwbArray:function hwbArray(){var e=this.values;return 1!==e.alpha?e.hwb.concat([e.alpha]):e.hwb;},cmykArray:function cmykArray(){return this.values.cmyk;},rgbaArray:function rgbaArray(){var e=this.values;return e.rgb.concat([e.alpha]);},hslaArray:function hslaArray(){var e=this.values;return e.hsl.concat([e.alpha]);},alpha:function alpha(e){return void 0===e?this.values.alpha:(this.setValues("alpha",e),this);},red:function red(e){return this.setChannel("rgb",0,e);},green:function green(e){return this.setChannel("rgb",1,e);},blue:function blue(e){return this.setChannel("rgb",2,e);},hue:function hue(e){return e&&(e=(e%=360)<0?360+e:e),this.setChannel("hsl",0,e);},saturation:function saturation(e){return this.setChannel("hsl",1,e);},lightness:function lightness(e){return this.setChannel("hsl",2,e);},saturationv:function saturationv(e){return this.setChannel("hsv",1,e);},whiteness:function whiteness(e){return this.setChannel("hwb",1,e);},blackness:function blackness(e){return this.setChannel("hwb",2,e);},value:function value(e){return this.setChannel("hsv",2,e);},cyan:function cyan(e){return this.setChannel("cmyk",0,e);},magenta:function magenta(e){return this.setChannel("cmyk",1,e);},yellow:function yellow(e){return this.setChannel("cmyk",2,e);},black:function black(e){return this.setChannel("cmyk",3,e);},hexString:function hexString(){return r.hexString(this.values.rgb);},rgbString:function rgbString(){return r.rgbString(this.values.rgb,this.values.alpha);},rgbaString:function rgbaString(){return r.rgbaString(this.values.rgb,this.values.alpha);},percentString:function percentString(){return r.percentString(this.values.rgb,this.values.alpha);},hslString:function hslString(){return r.hslString(this.values.hsl,this.values.alpha);},hslaString:function hslaString(){return r.hslaString(this.values.hsl,this.values.alpha);},hwbString:function hwbString(){return r.hwbString(this.values.hwb,this.values.alpha);},keyword:function keyword(){return r.keyword(this.values.rgb,this.values.alpha);},rgbNumber:function rgbNumber(){var e=this.values.rgb;return e[0]<<16|e[1]<<8|e[2];},luminosity:function luminosity(){for(var e=this.values.rgb,t=[],n=0;n<e.length;n++){var i=e[n]/255;t[n]=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4);}return .2126*t[0]+.7152*t[1]+.0722*t[2];},contrast:function contrast(e){var t=this.luminosity(),n=e.luminosity();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05);},level:function level(e){var t=this.contrast(e);return t>=7.1?"AAA":t>=4.5?"AA":"";},dark:function dark(){var e=this.values.rgb;return(299*e[0]+587*e[1]+114*e[2])/1e3<128;},light:function light(){return!this.dark();},negate:function negate(){for(var e=[],t=0;t<3;t++){e[t]=255-this.values.rgb[t];}return this.setValues("rgb",e),this;},lighten:function lighten(e){var t=this.values.hsl;return t[2]+=t[2]*e,this.setValues("hsl",t),this;},darken:function darken(e){var t=this.values.hsl;return t[2]-=t[2]*e,this.setValues("hsl",t),this;},saturate:function saturate(e){var t=this.values.hsl;return t[1]+=t[1]*e,this.setValues("hsl",t),this;},desaturate:function desaturate(e){var t=this.values.hsl;return t[1]-=t[1]*e,this.setValues("hsl",t),this;},whiten:function whiten(e){var t=this.values.hwb;return t[1]+=t[1]*e,this.setValues("hwb",t),this;},blacken:function blacken(e){var t=this.values.hwb;return t[2]+=t[2]*e,this.setValues("hwb",t),this;},greyscale:function greyscale(){var e=this.values.rgb,t=.3*e[0]+.59*e[1]+.11*e[2];return this.setValues("rgb",[t,t,t]),this;},clearer:function clearer(e){var t=this.values.alpha;return this.setValues("alpha",t-t*e),this;},opaquer:function opaquer(e){var t=this.values.alpha;return this.setValues("alpha",t+t*e),this;},rotate:function rotate(e){var t=this.values.hsl,n=(t[0]+e)%360;return t[0]=n<0?360+n:n,this.setValues("hsl",t),this;},mix:function mix(e,t){var n=e,i=void 0===t?.5:t,r=2*i-1,a=this.alpha()-n.alpha(),o=((r*a==-1?r:(r+a)/(1+r*a))+1)/2,l=1-o;return this.rgb(o*this.red()+l*n.red(),o*this.green()+l*n.green(),o*this.blue()+l*n.blue()).alpha(this.alpha()*i+n.alpha()*(1-i));},toJSON:function toJSON(){return this.rgb();},clone:function clone(){var e,t,n=new a(),i=this.values,r=n.values;for(var o in i){i.hasOwnProperty(o)&&(e=i[o],"[object Array]"===(t={}.toString.call(e))?r[o]=e.slice(0):"[object Number]"===t?r[o]=e:console.error("unexpected color value:",e));}return n;}},a.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},a.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},a.prototype.getValues=function(e){for(var t=this.values,n={},i=0;i<e.length;i++){n[e.charAt(i)]=t[e][i];}return 1!==t.alpha&&(n.a=t.alpha),n;},a.prototype.setValues=function(e,t){var n,r,a=this.values,o=this.spaces,l=this.maxes,s=1;if(this.valid=!0,"alpha"===e)s=t;else if(t.length)a[e]=t.slice(0,e.length),s=t[e.length];else if(void 0!==t[e.charAt(0)]){for(n=0;n<e.length;n++){a[e][n]=t[e.charAt(n)];}s=t.a;}else if(void 0!==t[o[e][0]]){var d=o[e];for(n=0;n<e.length;n++){a[e][n]=t[d[n]];}s=t.alpha;}if(a.alpha=Math.max(0,Math.min(1,void 0===s?a.alpha:s)),"alpha"===e)return!1;for(n=0;n<e.length;n++){r=Math.max(0,Math.min(l[e][n],a[e][n])),a[e][n]=Math.round(r);}for(var u in o){u!==e&&(a[u]=i[e][u](a[e]));}return!0;},a.prototype.setSpace=function(e,t){var n=t[0];return void 0===n?this.getValues(e):("number"==typeof n&&(n=Array.prototype.slice.call(t)),this.setValues(e,n),this);},a.prototype.setChannel=function(e,t,n){var i=this.values[e];return void 0===n?i[t]:n===i[t]?this:(i[t]=n,this.setValues(e,i),this);},"undefined"!=typeof window&&(window.Color=a),e.exports=a;},function(e,t,n){"use strict";var i=n(6);t=e.exports=i.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null});Object.defineProperty(t.prototype,"animationObject",{get:function get(){return this;}}),Object.defineProperty(t.prototype,"chartInstance",{get:function get(){return this.chart;},set:function set(e){this.chart=e;}});},function(e,t,n){"use strict";var i=n(3),r=n(2);i._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:r.noop,onComplete:r.noop}}),e.exports={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function addAnimation(e,t,n,i){var r,a,o=this.animations;for(t.chart=e,i||(e.animating=!0),r=0,a=o.length;r<a;++r){if(o[r].chart===e)return void(o[r]=t);}o.push(t),1===o.length&&this.requestAnimationFrame();},cancelAnimation:function cancelAnimation(e){var t=r.findIndex(this.animations,function(t){return t.chart===e;});-1!==t&&(this.animations.splice(t,1),e.animating=!1);},requestAnimationFrame:function requestAnimationFrame(){var e=this;null===e.request&&(e.request=r.requestAnimFrame.call(window,function(){e.request=null,e.startDigest();}));},startDigest:function startDigest(){var e=this,t=Date.now(),n=0;e.dropFrames>1&&(n=Math.floor(e.dropFrames),e.dropFrames=e.dropFrames%1),e.advance(1+n);var i=Date.now();e.dropFrames+=(i-t)/e.frameDuration,e.animations.length>0&&e.requestAnimationFrame();},advance:function advance(e){for(var t,n,i=this.animations,a=0;a<i.length;){n=(t=i[a]).chart,t.currentStep=(t.currentStep||0)+e,t.currentStep=Math.min(t.currentStep,t.numSteps),r.callback(t.render,[n,t],n),r.callback(t.onAnimationProgress,[t],n),t.currentStep>=t.numSteps?(r.callback(t.onAnimationComplete,[t],n),n.animating=!1,i.splice(a,1)):++a;}}};},function(e,t,n){"use strict";var i=n(2);function r(e,t){return e["native"]?{x:e.x,y:e.y}:i.getRelativePosition(e,t);}function a(e,t){var n,i,r,a,o;for(i=0,a=e.data.datasets.length;i<a;++i){if(e.isDatasetVisible(i))for(r=0,o=(n=e.getDatasetMeta(i)).data.length;r<o;++r){var l=n.data[r];l._view.skip||t(l);}}}function o(e,t){var n=[];return a(e,function(e){e.inRange(t.x,t.y)&&n.push(e);}),n;}function l(e,t,n,i){var r=Number.POSITIVE_INFINITY,o=[];return a(e,function(e){if(!n||e.inRange(t.x,t.y)){var a=e.getCenterPoint(),l=i(t,a);l<r?(o=[e],r=l):l===r&&o.push(e);}}),o;}function s(e){var t=-1!==e.indexOf("x"),n=-1!==e.indexOf("y");return function(e,i){var r=t?Math.abs(e.x-i.x):0,a=n?Math.abs(e.y-i.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(a,2));};}function d(e,t,n){var i=r(t,e);n.axis=n.axis||"x";var a=s(n.axis),d=n.intersect?o(e,i):l(e,i,!1,a),u=[];return d.length?(e.data.datasets.forEach(function(t,n){if(e.isDatasetVisible(n)){var i=e.getDatasetMeta(n).data[d[0]._index];i&&!i._view.skip&&u.push(i);}}),u):[];}e.exports={modes:{single:function single(e,t){var n=r(t,e),i=[];return a(e,function(e){if(e.inRange(n.x,n.y))return i.push(e),i;}),i.slice(0,1);},label:d,index:d,dataset:function dataset(e,t,n){var i=r(t,e);n.axis=n.axis||"xy";var a=s(n.axis),d=n.intersect?o(e,i):l(e,i,!1,a);return d.length>0&&(d=e.getDatasetMeta(d[0]._datasetIndex).data),d;},"x-axis":function xAxis(e,t){return d(e,t,{intersect:!1});},point:function point(e,t){return o(e,r(t,e));},nearest:function nearest(e,t,n){var i=r(t,e);n.axis=n.axis||"xy";var a=s(n.axis),o=l(e,i,n.intersect,a);return o.length>1&&o.sort(function(e,t){var n=e.getArea()-t.getArea();return 0===n&&(n=e._datasetIndex-t._datasetIndex),n;}),o.slice(0,1);},x:function x(e,t,n){var i=r(t,e),o=[],l=!1;return a(e,function(e){e.inXRange(i.x)&&o.push(e),e.inRange(i.x,i.y)&&(l=!0);}),n.intersect&&!l&&(o=[]),o;},y:function y(e,t,n){var i=r(t,e),o=[],l=!1;return a(e,function(e){e.inYRange(i.y)&&o.push(e),e.inRange(i.x,i.y)&&(l=!0);}),n.intersect&&!l&&(o=[]),o;}}};},function(e,t,n){"use strict";var i=n(2),r=n(177),a=n(178),o=a._enabled?a:r;e.exports=i.extend({initialize:function initialize(){},acquireContext:function acquireContext(){},releaseContext:function releaseContext(){},addEventListener:function addEventListener(){},removeEventListener:function removeEventListener(){}},o);},function(e,t,n){"use strict";var i=n(3),r=n(2);i._set("global",{plugins:{}}),e.exports={_plugins:[],_cacheId:0,register:function register(e){var t=this._plugins;[].concat(e).forEach(function(e){-1===t.indexOf(e)&&t.push(e);}),this._cacheId++;},unregister:function unregister(e){var t=this._plugins;[].concat(e).forEach(function(e){var n=t.indexOf(e);-1!==n&&t.splice(n,1);}),this._cacheId++;},clear:function clear(){this._plugins=[],this._cacheId++;},count:function count(){return this._plugins.length;},getAll:function getAll(){return this._plugins;},notify:function notify(e,t,n){var i,r,a,o,l,s=this.descriptors(e),d=s.length;for(i=0;i<d;++i){if("function"==typeof(l=(a=(r=s[i]).plugin)[t])&&((o=[e].concat(n||[])).push(r.options),!1===l.apply(a,o)))return!1;}return!0;},descriptors:function descriptors(e){var t=e.$plugins||(e.$plugins={});if(t.id===this._cacheId)return t.descriptors;var n=[],a=[],o=e&&e.config||{},l=o.options&&o.options.plugins||{};return this._plugins.concat(o.plugins||[]).forEach(function(e){if(-1===n.indexOf(e)){var t=e.id,o=l[t];!1!==o&&(!0===o&&(o=r.clone(i.global.plugins[t])),n.push(e),a.push({plugin:e,options:o||{}}));}}),t.descriptors=a,t.id=this._cacheId,a;},_invalidate:function _invalidate(e){delete e.$plugins;}};},function(e,t,n){"use strict";var i=n(3),r=n(6),a=n(2);i._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:a.noop,title:function title(e,t){var n="",i=t.labels,r=i?i.length:0;if(e.length>0){var a=e[0];a.xLabel?n=a.xLabel:r>0&&a.index<r&&(n=i[a.index]);}return n;},afterTitle:a.noop,beforeBody:a.noop,beforeLabel:a.noop,label:function label(e,t){var n=t.datasets[e.datasetIndex].label||"";return n&&(n+=": "),n+=e.yLabel;},labelColor:function labelColor(e,t){var n=t.getDatasetMeta(e.datasetIndex).data[e.index]._view;return{borderColor:n.borderColor,backgroundColor:n.backgroundColor};},labelTextColor:function labelTextColor(){return this._options.bodyFontColor;},afterLabel:a.noop,afterBody:a.noop,beforeFooter:a.noop,footer:a.noop,afterFooter:a.noop}}});var o={average:function average(e){if(!e.length)return!1;var t,n,i=0,r=0,a=0;for(t=0,n=e.length;t<n;++t){var o=e[t];if(o&&o.hasValue()){var l=o.tooltipPosition();i+=l.x,r+=l.y,++a;}}return{x:Math.round(i/a),y:Math.round(r/a)};},nearest:function nearest(e,t){var n,i,r,o=t.x,l=t.y,s=Number.POSITIVE_INFINITY;for(n=0,i=e.length;n<i;++n){var d=e[n];if(d&&d.hasValue()){var u=d.getCenterPoint(),c=a.distanceBetweenPoints(t,u);c<s&&(s=c,r=d);}}if(r){var h=r.tooltipPosition();o=h.x,l=h.y;}return{x:o,y:l};}};function l(e,t){var n=a.color(e);return n.alpha(t*n.alpha()).rgbaString();}function s(e,t){return t&&(a.isArray(t)?Array.prototype.push.apply(e,t):e.push(t)),e;}function d(e){return("string"==typeof e||e instanceof String)&&e.indexOf("\n")>-1?e.split("\n"):e;}function u(e){var t=i.global,n=a.valueOrDefault;return{xPadding:e.xPadding,yPadding:e.yPadding,xAlign:e.xAlign,yAlign:e.yAlign,bodyFontColor:e.bodyFontColor,_bodyFontFamily:n(e.bodyFontFamily,t.defaultFontFamily),_bodyFontStyle:n(e.bodyFontStyle,t.defaultFontStyle),_bodyAlign:e.bodyAlign,bodyFontSize:n(e.bodyFontSize,t.defaultFontSize),bodySpacing:e.bodySpacing,titleFontColor:e.titleFontColor,_titleFontFamily:n(e.titleFontFamily,t.defaultFontFamily),_titleFontStyle:n(e.titleFontStyle,t.defaultFontStyle),titleFontSize:n(e.titleFontSize,t.defaultFontSize),_titleAlign:e.titleAlign,titleSpacing:e.titleSpacing,titleMarginBottom:e.titleMarginBottom,footerFontColor:e.footerFontColor,_footerFontFamily:n(e.footerFontFamily,t.defaultFontFamily),_footerFontStyle:n(e.footerFontStyle,t.defaultFontStyle),footerFontSize:n(e.footerFontSize,t.defaultFontSize),_footerAlign:e.footerAlign,footerSpacing:e.footerSpacing,footerMarginTop:e.footerMarginTop,caretSize:e.caretSize,cornerRadius:e.cornerRadius,backgroundColor:e.backgroundColor,opacity:0,legendColorBackground:e.multiKeyBackground,displayColors:e.displayColors,borderColor:e.borderColor,borderWidth:e.borderWidth};}function c(e){return s([],d(e));}(e.exports=r.extend({initialize:function initialize(){this._model=u(this._options),this._lastActive=[];},getTitle:function getTitle(){var e=this._options.callbacks,t=e.beforeTitle.apply(this,arguments),n=e.title.apply(this,arguments),i=e.afterTitle.apply(this,arguments),r=[];return r=s(r,d(t)),r=s(r,d(n)),r=s(r,d(i));},getBeforeBody:function getBeforeBody(){return c(this._options.callbacks.beforeBody.apply(this,arguments));},getBody:function getBody(e,t){var n=this,i=n._options.callbacks,r=[];return a.each(e,function(e){var a={before:[],lines:[],after:[]};s(a.before,d(i.beforeLabel.call(n,e,t))),s(a.lines,i.label.call(n,e,t)),s(a.after,d(i.afterLabel.call(n,e,t))),r.push(a);}),r;},getAfterBody:function getAfterBody(){return c(this._options.callbacks.afterBody.apply(this,arguments));},getFooter:function getFooter(){var e=this._options.callbacks,t=e.beforeFooter.apply(this,arguments),n=e.footer.apply(this,arguments),i=e.afterFooter.apply(this,arguments),r=[];return r=s(r,d(t)),r=s(r,d(n)),r=s(r,d(i));},update:function update(e){var t,n,i,r,l,s,d,c=this,h=c._options,p=c._model,f=c._model=u(h),m=c._active,g=c._data,_={xAlign:p.xAlign,yAlign:p.yAlign},y={x:p.x,y:p.y},v={width:p.width,height:p.height},M={x:p.caretX,y:p.caretY};if(m.length){f.opacity=1;var b=[],w=[];M=o[h.position].call(c,m,c._eventPosition);var L=[];for(t=0,n=m.length;t<n;++t){L.push((i=m[t],r=void 0,l=void 0,s=void 0,d=void 0,r=i._xScale,l=i._yScale||i._scale,s=i._index,d=i._datasetIndex,{xLabel:r?r.getLabelForIndex(s,d):"",yLabel:l?l.getLabelForIndex(s,d):"",index:s,datasetIndex:d,x:i._model.x,y:i._model.y}));}h.filter&&(L=L.filter(function(e){return h.filter(e,g);})),h.itemSort&&(L=L.sort(function(e,t){return h.itemSort(e,t,g);})),a.each(L,function(e){b.push(h.callbacks.labelColor.call(c,e,c._chart)),w.push(h.callbacks.labelTextColor.call(c,e,c._chart));}),f.title=c.getTitle(L,g),f.beforeBody=c.getBeforeBody(L,g),f.body=c.getBody(L,g),f.afterBody=c.getAfterBody(L,g),f.footer=c.getFooter(L,g),f.x=Math.round(M.x),f.y=Math.round(M.y),f.caretPadding=h.caretPadding,f.labelColors=b,f.labelTextColors=w,f.dataPoints=L,v=function(e,t){var n=e._chart.ctx,i=2*t.yPadding,r=0,o=t.body,l=o.reduce(function(e,t){return e+t.before.length+t.lines.length+t.after.length;},0);l+=t.beforeBody.length+t.afterBody.length;var s=t.title.length,d=t.footer.length,u=t.titleFontSize,c=t.bodyFontSize,h=t.footerFontSize;i+=s*u,i+=s?(s-1)*t.titleSpacing:0,i+=s?t.titleMarginBottom:0,i+=l*c,i+=l?(l-1)*t.bodySpacing:0,i+=d?t.footerMarginTop:0,i+=d*h,i+=d?(d-1)*t.footerSpacing:0;var p=0,f=function f(e){r=Math.max(r,n.measureText(e).width+p);};return n.font=a.fontString(u,t._titleFontStyle,t._titleFontFamily),a.each(t.title,f),n.font=a.fontString(c,t._bodyFontStyle,t._bodyFontFamily),a.each(t.beforeBody.concat(t.afterBody),f),p=t.displayColors?c+2:0,a.each(o,function(e){a.each(e.before,f),a.each(e.lines,f),a.each(e.after,f);}),p=0,n.font=a.fontString(h,t._footerFontStyle,t._footerFontFamily),a.each(t.footer,f),{width:r+=2*t.xPadding,height:i};}(this,f),y=function(e,t,n,i){var r=e.x,a=e.y,o=e.caretSize,l=e.caretPadding,s=e.cornerRadius,d=n.xAlign,u=n.yAlign,c=o+l,h=s+l;return"right"===d?r-=t.width:"center"===d&&((r-=t.width/2)+t.width>i.width&&(r=i.width-t.width),r<0&&(r=0)),"top"===u?a+=c:a-="bottom"===u?t.height+c:t.height/2,"center"===u?"left"===d?r+=c:"right"===d&&(r-=c):"left"===d?r-=h:"right"===d&&(r+=h),{x:r,y:a};}(f,v,_=function(e,t){var n,i,r,a,o,l=e._model,s=e._chart,d=e._chart.chartArea,u="center",c="center";l.y<t.height?c="top":l.y>s.height-t.height&&(c="bottom");var h=(d.left+d.right)/2,p=(d.top+d.bottom)/2;"center"===c?(n=function n(e){return e<=h;},i=function i(e){return e>h;}):(n=function n(e){return e<=t.width/2;},i=function i(e){return e>=s.width-t.width/2;}),r=function r(e){return e+t.width+l.caretSize+l.caretPadding>s.width;},a=function a(e){return e-t.width-l.caretSize-l.caretPadding<0;},o=function o(e){return e<=p?"top":"bottom";},n(l.x)?(u="left",r(l.x)&&(u="center",c=o(l.y))):i(l.x)&&(u="right",a(l.x)&&(u="center",c=o(l.y)));var f=e._options;return{xAlign:f.xAlign?f.xAlign:u,yAlign:f.yAlign?f.yAlign:c};}(this,v),c._chart);}else f.opacity=0;return f.xAlign=_.xAlign,f.yAlign=_.yAlign,f.x=y.x,f.y=y.y,f.width=v.width,f.height=v.height,f.caretX=M.x,f.caretY=M.y,c._model=f,e&&h.custom&&h.custom.call(c,f),c;},drawCaret:function drawCaret(e,t){var n=this._chart.ctx,i=this._view,r=this.getCaretPosition(e,t,i);n.lineTo(r.x1,r.y1),n.lineTo(r.x2,r.y2),n.lineTo(r.x3,r.y3);},getCaretPosition:function getCaretPosition(e,t,n){var i,r,a,o,l,s,d=n.caretSize,u=n.cornerRadius,c=n.xAlign,h=n.yAlign,p=e.x,f=e.y,m=t.width,g=t.height;if("center"===h)l=f+g/2,"left"===c?(r=(i=p)-d,a=i,o=l+d,s=l-d):(r=(i=p+m)+d,a=i,o=l-d,s=l+d);else if("left"===c?(i=(r=p+u+d)-d,a=r+d):"right"===c?(i=(r=p+m-u-d)-d,a=r+d):(i=(r=n.caretX)-d,a=r+d),"top"===h)l=(o=f)-d,s=o;else{l=(o=f+g)+d,s=o;var _=a;a=i,i=_;}return{x1:i,x2:r,x3:a,y1:o,y2:l,y3:s};},drawTitle:function drawTitle(e,t,n,i){var r=t.title;if(r.length){n.textAlign=t._titleAlign,n.textBaseline="top";var o,s,d=t.titleFontSize,u=t.titleSpacing;for(n.fillStyle=l(t.titleFontColor,i),n.font=a.fontString(d,t._titleFontStyle,t._titleFontFamily),o=0,s=r.length;o<s;++o){n.fillText(r[o],e.x,e.y),e.y+=d+u,o+1===r.length&&(e.y+=t.titleMarginBottom-u);}}},drawBody:function drawBody(e,t,n,i){var r=t.bodyFontSize,o=t.bodySpacing,s=t.body;n.textAlign=t._bodyAlign,n.textBaseline="top",n.font=a.fontString(r,t._bodyFontStyle,t._bodyFontFamily);var d=0,u=function u(t){n.fillText(t,e.x+d,e.y),e.y+=r+o;};n.fillStyle=l(t.bodyFontColor,i),a.each(t.beforeBody,u);var c=t.displayColors;d=c?r+2:0,a.each(s,function(o,s){var d=l(t.labelTextColors[s],i);n.fillStyle=d,a.each(o.before,u),a.each(o.lines,function(a){c&&(n.fillStyle=l(t.legendColorBackground,i),n.fillRect(e.x,e.y,r,r),n.lineWidth=1,n.strokeStyle=l(t.labelColors[s].borderColor,i),n.strokeRect(e.x,e.y,r,r),n.fillStyle=l(t.labelColors[s].backgroundColor,i),n.fillRect(e.x+1,e.y+1,r-2,r-2),n.fillStyle=d),u(a);}),a.each(o.after,u);}),d=0,a.each(t.afterBody,u),e.y-=o;},drawFooter:function drawFooter(e,t,n,i){var r=t.footer;r.length&&(e.y+=t.footerMarginTop,n.textAlign=t._footerAlign,n.textBaseline="top",n.fillStyle=l(t.footerFontColor,i),n.font=a.fontString(t.footerFontSize,t._footerFontStyle,t._footerFontFamily),a.each(r,function(i){n.fillText(i,e.x,e.y),e.y+=t.footerFontSize+t.footerSpacing;}));},drawBackground:function drawBackground(e,t,n,i,r){n.fillStyle=l(t.backgroundColor,r),n.strokeStyle=l(t.borderColor,r),n.lineWidth=t.borderWidth;var a=t.xAlign,o=t.yAlign,s=e.x,d=e.y,u=i.width,c=i.height,h=t.cornerRadius;n.beginPath(),n.moveTo(s+h,d),"top"===o&&this.drawCaret(e,i),n.lineTo(s+u-h,d),n.quadraticCurveTo(s+u,d,s+u,d+h),"center"===o&&"right"===a&&this.drawCaret(e,i),n.lineTo(s+u,d+c-h),n.quadraticCurveTo(s+u,d+c,s+u-h,d+c),"bottom"===o&&this.drawCaret(e,i),n.lineTo(s+h,d+c),n.quadraticCurveTo(s,d+c,s,d+c-h),"center"===o&&"left"===a&&this.drawCaret(e,i),n.lineTo(s,d+h),n.quadraticCurveTo(s,d,s+h,d),n.closePath(),n.fill(),t.borderWidth>0&&n.stroke();},draw:function draw(){var e=this._chart.ctx,t=this._view;if(0!==t.opacity){var n={width:t.width,height:t.height},i={x:t.x,y:t.y},r=Math.abs(t.opacity<.001)?0:t.opacity,a=t.title.length||t.beforeBody.length||t.body.length||t.afterBody.length||t.footer.length;this._options.enabled&&a&&(this.drawBackground(i,t,e,n,r),i.x+=t.xPadding,i.y+=t.yPadding,this.drawTitle(i,t,e,r),this.drawBody(i,t,e,r),this.drawFooter(i,t,e,r));}},handleEvent:function handleEvent(e){var t,n=this,i=n._options;return n._lastActive=n._lastActive||[],"mouseout"===e.type?n._active=[]:n._active=n._chart.getElementsAtEventForMode(e,i.mode,i),(t=!a.arrayEquals(n._active,n._lastActive))&&(n._lastActive=n._active,(i.enabled||i.custom)&&(n._eventPosition={x:e.x,y:e.y},n.update(!0),n.pivot())),t;}})).positioners=o;},function(t,n,i){"use strict";(function(n){var i,r,a,o,l,s,_d,u,c;t.exports=(a=function a(e,t){var n;if(e===t)return e;for(n in t){void 0!==t[n]&&(e[n]=t[n]);}return e;},o=function o(e,t){var n,i=Array.prototype.slice.call(arguments,2),r=[],a=e.length;if(Array.prototype.map&&e.map===Array.prototype.map)r=Array.prototype.map.call(e,function(e){var n=i.slice(0);return n.splice(0,0,e),t.apply(this,n);});else for(n=0;n<a;n++){callback_params=i,callback_params.splice(0,0,e[n]),r.push(t.apply(this,callback_params));}return r;},l=function l(e){var t,n=[];for(t=0;t<e.length;t++){n=n.concat(e[t]);}return n;},s=function s(e,t){var n=e[0],i=e[1];return t&&(n=e[1],i=e[0]),new google.maps.LatLng(n,i);},_d=function d(e,t){var n;for(n=0;n<e.length;n++){e[n]instanceof google.maps.LatLng||(e[n].length>0&&"object"==_typeof(e[n][0])?e[n]=_d(e[n],t):e[n]=s(e[n],t));}return e;},u=function u(e,t){var e=e.replace("#","");return"jQuery"in window&&t?n("#"+e,t)[0]:document.getElementById(e);},(c=function(e){var t=document,i=function i(e){if("object"!=_typeof(window.google)||!window.google.maps)return"object"==_typeof(window.console)&&window.console.error&&console.error("Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js."),function(){};if(!this)return new i(e);e.zoom=e.zoom||15,e.mapType=e.mapType||"roadmap";var r,o=function o(e,t){return void 0===e?t:e;},l=this,s=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],d=["mousemove","mouseout","mouseover"],c=["el","lat","lng","mapType","width","height","markerClusterer","enableNewStyle"],h=e.el||e.div,p=e.markerClusterer,f=google.maps.MapTypeId[e.mapType.toUpperCase()],m=new google.maps.LatLng(e.lat,e.lng),g=o(e.zoomControl,!0),_=e.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},y=_.style||"DEFAULT",v=_.position||"TOP_LEFT",M=o(e.panControl,!0),b=o(e.mapTypeControl,!0),w=o(e.scaleControl,!0),L=o(e.streetViewControl,!0),D=o(D,!0),T={},k={zoom:this.zoom,center:m,mapTypeId:f},S={panControl:M,zoomControl:g,zoomControlOptions:{style:google.maps.ZoomControlStyle[y],position:google.maps.ControlPosition[v]},mapTypeControl:b,scaleControl:w,streetViewControl:L,overviewMapControl:D};if("string"==typeof e.el||"string"==typeof e.div?h.indexOf("#")>-1?this.el=u(h,e.context):this.el=function(e,t){var i=e.replace(".","");return"jQuery"in this&&t?n("."+i,t)[0]:document.getElementsByClassName(i)[0];}.apply(this,[h,e.context]):this.el=h,void 0===this.el||null===this.el)throw"No element defined.";for(window.context_menu=window.context_menu||{},window.context_menu[l.el.id]={},this.controls=[],this.overlays=[],this.layers=[],this.singleLayers={},this.markers=[],this.polylines=[],this.routes=[],this.polygons=[],this.infoWindow=null,this.overlay_el=null,this.zoom=e.zoom,this.registered_events={},this.el.style.width=e.width||this.el.scrollWidth||this.el.offsetWidth,this.el.style.height=e.height||this.el.scrollHeight||this.el.offsetHeight,google.maps.visualRefresh=e.enableNewStyle,r=0;r<c.length;r++){delete e[c[r]];}for(1!=e.disableDefaultUI&&(k=a(k,S)),T=a(k,e),r=0;r<s.length;r++){delete T[s[r]];}for(r=0;r<d.length;r++){delete T[d[r]];}this.map=new google.maps.Map(this.el,T),p&&(this.markerClusterer=p.apply(this,[this.map]));var x=function x(e,t){var n="",i=window.context_menu[l.el.id][e];for(var r in i){if(i.hasOwnProperty(r)){var a=i[r];n+='<li><a id="'+e+"_"+r+'" href="#">'+a.title+"</a></li>";}}if(u("gmaps_context_menu")){var o=u("gmaps_context_menu");o.innerHTML=n;var s=o.getElementsByTagName("a"),d=s.length;for(r=0;r<d;r++){var c=s[r];google.maps.event.clearListeners(c,"click"),google.maps.event.addDomListenerOnce(c,"click",function(n){n.preventDefault(),i[this.id.replace(e+"_","")].action.apply(l,[t]),l.hideContextMenu();},!1);}var h=function(e){var t=0,n=0;if(e.offsetParent)do{t+=e.offsetLeft,n+=e.offsetTop;}while(e=e.offsetParent);return[t,n];}.apply(this,[l.el]),p=h[0]+t.pixel.x-15,f=h[1]+t.pixel.y-15;o.style.left=p+"px",o.style.top=f+"px";}};this.buildContextMenu=function(e,t){if("marker"===e){t.pixel={};var n=new google.maps.OverlayView();n.setMap(l.map),n.draw=function(){var i=n.getProjection(),r=t.marker.getPosition();t.pixel=i.fromLatLngToContainerPixel(r),x(e,t);};}else x(e,t);var i=u("gmaps_context_menu");setTimeout(function(){i.style.display="block";},0);},this.setContextMenu=function(e){window.context_menu[l.el.id][e.control]={};var n,i=t.createElement("ul");for(n in e.options){if(e.options.hasOwnProperty(n)){var r=e.options[n];window.context_menu[l.el.id][e.control][r.name]={title:r.title,action:r.action};}}i.id="gmaps_context_menu",i.style.display="none",i.style.position="absolute",i.style.minWidth="100px",i.style.background="white",i.style.listStyle="none",i.style.padding="8px",i.style.boxShadow="2px 2px 6px #ccc",u("gmaps_context_menu")||t.body.appendChild(i);var a=u("gmaps_context_menu");google.maps.event.addDomListener(a,"mouseout",function(e){e.relatedTarget&&this.contains(e.relatedTarget)||window.setTimeout(function(){a.style.display="none";},400);},!1);},this.hideContextMenu=function(){var e=u("gmaps_context_menu");e&&(e.style.display="none");};var Y=function Y(t,n){google.maps.event.addListener(t,n,function(t){null==t&&(t=this),e[n].apply(this,[t]),l.hideContextMenu();});};google.maps.event.addListener(this.map,"zoom_changed",this.hideContextMenu);for(var E=0;E<s.length;E++){var C=s[E];C in e&&Y(this.map,C);}for(var E=0;E<d.length;E++){var C=d[E];C in e&&Y(this.map,C);}google.maps.event.addListener(this.map,"rightclick",function(t){e.rightclick&&e.rightclick.apply(this,[t]),null!=window.context_menu[l.el.id].map&&l.buildContextMenu("map",t);}),this.refresh=function(){google.maps.event.trigger(this.map,"resize");},this.fitZoom=function(){var e,t=[],n=this.markers.length;for(e=0;e<n;e++){"boolean"==typeof this.markers[e].visible&&this.markers[e].visible&&t.push(this.markers[e].getPosition());}this.fitLatLngBounds(t);},this.fitLatLngBounds=function(e){var t,n=e.length,i=new google.maps.LatLngBounds();for(t=0;t<n;t++){i.extend(e[t]);}this.map.fitBounds(i);},this.setCenter=function(e,t,n){this.map.panTo(new google.maps.LatLng(e,t)),n&&n();},this.getElement=function(){return this.el;},this.zoomIn=function(e){e=e||1,this.zoom=this.map.getZoom()+e,this.map.setZoom(this.zoom);},this.zoomOut=function(e){e=e||1,this.zoom=this.map.getZoom()-e,this.map.setZoom(this.zoom);};var H,P=[];for(H in this.map){"function"!=typeof this.map[H]||this[H]||P.push(H);}for(r=0;r<P.length;r++){!function(e,t,n){e[n]=function(){return t[n].apply(t,arguments);};}(this,this.map,P[r]);}};return i;}()).prototype.createControl=function(e){var t=document.createElement("div");for(var n in t.style.cursor="pointer",!0!==e.disableDefaultStyles&&(t.style.fontFamily="Roboto, Arial, sans-serif",t.style.fontSize="11px",t.style.boxShadow="rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px"),e.style){t.style[n]=e.style[n];}for(var i in e.id&&(t.id=e.id),e.title&&(t.title=e.title),e.classes&&(t.className=e.classes),e.content&&("string"==typeof e.content?t.innerHTML=e.content:e.content instanceof HTMLElement&&t.appendChild(e.content)),e.position&&(t.position=google.maps.ControlPosition[e.position.toUpperCase()]),e.events){!function(t,n){google.maps.event.addDomListener(t,n,function(){e.events[n].apply(this,[this]);});}(t,i);}return t.index=1,t;},c.prototype.addControl=function(e){var t=this.createControl(e);return this.controls.push(t),this.map.controls[t.position].push(t),t;},c.prototype.removeControl=function(e){var t,n=null;for(t=0;t<this.controls.length;t++){this.controls[t]==e&&(n=this.controls[t].position,this.controls.splice(t,1));}if(n)for(t=0;t<this.map.controls.length;t++){var i=this.map.controls[e.position];if(i.getAt(t)==e){i.removeAt(t);break;}}return e;},c.prototype.createMarker=function(e){if(null==e.lat&&null==e.lng&&null==e.position)throw"No latitude or longitude defined.";var t=this,n=e.details,i=e.fences,r=e.outside,o={position:new google.maps.LatLng(e.lat,e.lng),map:null},l=a(o,e);delete l.lat,delete l.lng,delete l.fences,delete l.outside;var s=new google.maps.Marker(l);if(s.fences=i,e.infoWindow){s.infoWindow=new google.maps.InfoWindow(e.infoWindow);for(var d=["closeclick","content_changed","domready","position_changed","zindex_changed"],u=0;u<d.length;u++){!function(t,n){e.infoWindow[n]&&google.maps.event.addListener(t,n,function(t){e.infoWindow[n].apply(this,[t]);});}(s.infoWindow,d[u]);}}var c=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],h=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"];for(u=0;u<c.length;u++){!function(t,n){e[n]&&google.maps.event.addListener(t,n,function(){e[n].apply(this,[this]);});}(s,c[u]);}for(u=0;u<h.length;u++){!function(t,n,i){e[i]&&google.maps.event.addListener(n,i,function(n){n.pixel||(n.pixel=t.getProjection().fromLatLngToPoint(n.latLng)),e[i].apply(this,[n]);});}(this.map,s,h[u]);}return google.maps.event.addListener(s,"click",function(){this.details=n,e.click&&e.click.apply(this,[this]),s.infoWindow&&(t.hideInfoWindows(),s.infoWindow.open(t.map,s));}),google.maps.event.addListener(s,"rightclick",function(n){n.marker=this,e.rightclick&&e.rightclick.apply(this,[n]),null!=window.context_menu[t.el.id].marker&&t.buildContextMenu("marker",n);}),s.fences&&google.maps.event.addListener(s,"dragend",function(){t.checkMarkerGeofence(s,function(e,t){r(e,t);});}),s;},c.prototype.addMarker=function(e){var t;if(e.hasOwnProperty("gm_accessors_"))t=e;else{if(!(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||e.position))throw"No latitude or longitude defined.";t=this.createMarker(e);}return t.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(t),this.markers.push(t),c.fire("marker_added",t,this),t;},c.prototype.addMarkers=function(e){for(var t,n=0;t=e[n];n++){this.addMarker(t);}return this.markers;},c.prototype.hideInfoWindows=function(){for(var e,t=0;e=this.markers[t];t++){e.infoWindow&&e.infoWindow.close();}},c.prototype.removeMarker=function(e){for(var t=0;t<this.markers.length;t++){if(this.markers[t]===e){this.markers[t].setMap(null),this.markers.splice(t,1),this.markerClusterer&&this.markerClusterer.removeMarker(e),c.fire("marker_removed",e,this);break;}}return e;},c.prototype.removeMarkers=function(e){var t=[];if(void 0===e){for(var n=0;n<this.markers.length;n++){(r=this.markers[n]).setMap(null),c.fire("marker_removed",r,this);}this.markerClusterer&&this.markerClusterer.clearMarkers&&this.markerClusterer.clearMarkers(),this.markers=t;}else{for(n=0;n<e.length;n++){var i=this.markers.indexOf(e[n]);i>-1&&((r=this.markers[i]).setMap(null),this.markerClusterer&&this.markerClusterer.removeMarker(r),c.fire("marker_removed",r,this));}for(n=0;n<this.markers.length;n++){var r;null!=(r=this.markers[n]).getMap()&&t.push(r);}this.markers=t;}},c.prototype.drawOverlay=function(e){var t=new google.maps.OverlayView(),n=!0;return t.setMap(this.map),null!=e.auto_show&&(n=e.auto_show),t.onAdd=function(){var n=document.createElement("div");n.style.borderStyle="none",n.style.borderWidth="0px",n.style.position="absolute",n.style.zIndex=100,n.innerHTML=e.content,t.el=n,e.layer||(e.layer="overlayLayer");var i,r,a=this.getPanes(),o=["contextmenu","DOMMouseScroll","dblclick","mousedown"];a[e.layer].appendChild(n);for(var l=0;l<o.length;l++){i=n,r=o[l],google.maps.event.addDomListener(i,r,function(e){-1!=navigator.userAgent.toLowerCase().indexOf("msie")&&document.all?(e.cancelBubble=!0,e.returnValue=!1):e.stopPropagation();});}e.click&&(a.overlayMouseTarget.appendChild(t.el),google.maps.event.addDomListener(t.el,"click",function(){e.click.apply(t,[t]);})),google.maps.event.trigger(this,"ready");},t.draw=function(){var i=this.getProjection().fromLatLngToDivPixel(new google.maps.LatLng(e.lat,e.lng));e.horizontalOffset=e.horizontalOffset||0,e.verticalOffset=e.verticalOffset||0;var r=t.el,a=r.children[0],o=a.clientHeight,l=a.clientWidth;switch(e.verticalAlign){case"top":r.style.top=i.y-o+e.verticalOffset+"px";break;default:case"middle":r.style.top=i.y-o/2+e.verticalOffset+"px";break;case"bottom":r.style.top=i.y+e.verticalOffset+"px";}switch(e.horizontalAlign){case"left":r.style.left=i.x-l+e.horizontalOffset+"px";break;default:case"center":r.style.left=i.x-l/2+e.horizontalOffset+"px";break;case"right":r.style.left=i.x+e.horizontalOffset+"px";}r.style.display=n?"block":"none",n||e.show.apply(this,[r]);},t.onRemove=function(){var n=t.el;e.remove?e.remove.apply(this,[n]):(t.el.parentNode.removeChild(t.el),t.el=null);},this.overlays.push(t),t;},c.prototype.removeOverlay=function(e){for(var t=0;t<this.overlays.length;t++){if(this.overlays[t]===e){this.overlays[t].setMap(null),this.overlays.splice(t,1);break;}}},c.prototype.removeOverlays=function(){for(var e,t=0;e=this.overlays[t];t++){e.setMap(null);}this.overlays=[];},c.prototype.drawPolyline=function(e){var t=[],n=e.path;if(n.length)if(void 0===n[0][0])t=n;else for(var i,r=0;i=n[r];r++){t.push(new google.maps.LatLng(i[0],i[1]));}var a={map:this.map,path:t,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight,geodesic:e.geodesic,clickable:!0,editable:!1,visible:!0};e.hasOwnProperty("clickable")&&(a.clickable=e.clickable),e.hasOwnProperty("editable")&&(a.editable=e.editable),e.hasOwnProperty("icons")&&(a.icons=e.icons),e.hasOwnProperty("zIndex")&&(a.zIndex=e.zIndex);for(var o=new google.maps.Polyline(a),l=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],s=0;s<l.length;s++){!function(t,n){e[n]&&google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t]);});}(o,l[s]);}return this.polylines.push(o),c.fire("polyline_added",o,this),o;},c.prototype.removePolyline=function(e){for(var t=0;t<this.polylines.length;t++){if(this.polylines[t]===e){this.polylines[t].setMap(null),this.polylines.splice(t,1),c.fire("polyline_removed",e,this);break;}}},c.prototype.removePolylines=function(){for(var e,t=0;e=this.polylines[t];t++){e.setMap(null);}this.polylines=[];},c.prototype.drawCircle=function(e){delete(e=a({map:this.map,center:new google.maps.LatLng(e.lat,e.lng)},e)).lat,delete e.lng;for(var t=new google.maps.Circle(e),n=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],i=0;i<n.length;i++){!function(t,n){e[n]&&google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t]);});}(t,n[i]);}return this.polygons.push(t),t;},c.prototype.drawRectangle=function(e){e=a({map:this.map},e);var t=new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0],e.bounds[0][1]),new google.maps.LatLng(e.bounds[1][0],e.bounds[1][1]));e.bounds=t;for(var n=new google.maps.Rectangle(e),i=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],r=0;r<i.length;r++){!function(t,n){e[n]&&google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t]);});}(n,i[r]);}return this.polygons.push(n),n;},c.prototype.drawPolygon=function(e){var t=!1;e.hasOwnProperty("useGeoJSON")&&(t=e.useGeoJSON),delete e.useGeoJSON,e=a({map:this.map},e),0==t&&(e.paths=[e.paths.slice(0)]),e.paths.length>0&&e.paths[0].length>0&&(e.paths=l(o(e.paths,_d,t)));for(var n=new google.maps.Polygon(e),i=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"],r=0;r<i.length;r++){!function(t,n){e[n]&&google.maps.event.addListener(t,n,function(t){e[n].apply(this,[t]);});}(n,i[r]);}return this.polygons.push(n),c.fire("polygon_added",n,this),n;},c.prototype.removePolygon=function(e){for(var t=0;t<this.polygons.length;t++){if(this.polygons[t]===e){this.polygons[t].setMap(null),this.polygons.splice(t,1),c.fire("polygon_removed",e,this);break;}}},c.prototype.removePolygons=function(){for(var e,t=0;e=this.polygons[t];t++){e.setMap(null);}this.polygons=[];},c.prototype.getFromFusionTables=function(e){var t=e.events;delete e.events;var n=e,i=new google.maps.FusionTablesLayer(n);for(var r in t){!function(e,n){google.maps.event.addListener(e,n,function(e){t[n].apply(this,[e]);});}(i,r);}return this.layers.push(i),i;},c.prototype.loadFromFusionTables=function(e){var t=this.getFromFusionTables(e);return t.setMap(this.map),t;},c.prototype.getFromKML=function(e){var t=e.url,n=e.events;delete e.url,delete e.events;var i=e,r=new google.maps.KmlLayer(t,i);for(var a in n){!function(e,t){google.maps.event.addListener(e,t,function(e){n[t].apply(this,[e]);});}(r,a);}return this.layers.push(r),r;},c.prototype.loadFromKML=function(e){var t=this.getFromKML(e);return t.setMap(this.map),t;},c.prototype.addLayer=function(e,t){var n;switch(t=t||{},e){case"weather":this.singleLayers.weather=n=new google.maps.weather.WeatherLayer();break;case"clouds":this.singleLayers.clouds=n=new google.maps.weather.CloudLayer();break;case"traffic":this.singleLayers.traffic=n=new google.maps.TrafficLayer();break;case"transit":this.singleLayers.transit=n=new google.maps.TransitLayer();break;case"bicycling":this.singleLayers.bicycling=n=new google.maps.BicyclingLayer();break;case"panoramio":this.singleLayers.panoramio=n=new google.maps.panoramio.PanoramioLayer(),n.setTag(t.filter),delete t.filter,t.click&&google.maps.event.addListener(n,"click",function(e){t.click(e),delete t.click;});break;case"places":if(this.singleLayers.places=n=new google.maps.places.PlacesService(this.map),t.search||t.nearbySearch||t.radarSearch){var i={bounds:t.bounds||null,keyword:t.keyword||null,location:t.location||null,name:t.name||null,radius:t.radius||null,rankBy:t.rankBy||null,types:t.types||null};t.radarSearch&&n.radarSearch(i,t.radarSearch),t.search&&n.search(i,t.search),t.nearbySearch&&n.nearbySearch(i,t.nearbySearch);}if(t.textSearch){var r={bounds:t.bounds||null,location:t.location||null,query:t.query||null,radius:t.radius||null};n.textSearch(r,t.textSearch);}}if(void 0!==n)return"function"==typeof n.setOptions&&n.setOptions(t),"function"==typeof n.setMap&&n.setMap(this.map),n;},c.prototype.removeLayer=function(e){if("string"==typeof e&&void 0!==this.singleLayers[e])this.singleLayers[e].setMap(null),delete this.singleLayers[e];else for(var t=0;t<this.layers.length;t++){if(this.layers[t]===e){this.layers[t].setMap(null),this.layers.splice(t,1);break;}}},c.prototype.getRoutes=function(e){switch(e.travelMode){case"bicycling":i=google.maps.TravelMode.BICYCLING;break;case"transit":i=google.maps.TravelMode.TRANSIT;break;case"driving":i=google.maps.TravelMode.DRIVING;break;default:i=google.maps.TravelMode.WALKING;}r="imperial"===e.unitSystem?google.maps.UnitSystem.IMPERIAL:google.maps.UnitSystem.METRIC;var t=a({avoidHighways:!1,avoidTolls:!1,optimizeWaypoints:!1,waypoints:[]},e);t.origin=/string/.test(_typeof(e.origin))?e.origin:new google.maps.LatLng(e.origin[0],e.origin[1]),t.destination=/string/.test(_typeof(e.destination))?e.destination:new google.maps.LatLng(e.destination[0],e.destination[1]),t.travelMode=i,t.unitSystem=r,delete t.callback,delete t.error;var n=[];new google.maps.DirectionsService().route(t,function(t,i){if(i===google.maps.DirectionsStatus.OK){for(var r in t.routes){t.routes.hasOwnProperty(r)&&n.push(t.routes[r]);}e.callback&&e.callback(n,t,i);}else e.error&&e.error(t,i);});},c.prototype.removeRoutes=function(){this.routes.length=0;},c.prototype.getElevations=function(e){(e=a({locations:[],path:!1,samples:256},e)).locations.length>0&&e.locations[0].length>0&&(e.locations=l(o([e.locations],_d,!1)));var t=e.callback;delete e.callback;var n=new google.maps.ElevationService();if(e.path){var i={path:e.locations,samples:e.samples};n.getElevationAlongPath(i,function(e,n){t&&"function"==typeof t&&t(e,n);});}else delete e.path,delete e.samples,n.getElevationForLocations(e,function(e,n){t&&"function"==typeof t&&t(e,n);});},c.prototype.cleanRoute=c.prototype.removePolylines,c.prototype.renderRoute=function(e,t){var n,i="string"==typeof t.panel?document.getElementById(t.panel.replace("#","")):t.panel;t.panel=i,t=a({map:this.map},t),n=new google.maps.DirectionsRenderer(t),this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,unitSystem:e.unitSystem,error:e.error,avoidHighways:e.avoidHighways,avoidTolls:e.avoidTolls,optimizeWaypoints:e.optimizeWaypoints,callback:function callback(e,t,i){i===google.maps.DirectionsStatus.OK&&n.setDirections(t);}});},c.prototype.drawRoute=function(e){var t=this;this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,unitSystem:e.unitSystem,error:e.error,avoidHighways:e.avoidHighways,avoidTolls:e.avoidTolls,optimizeWaypoints:e.optimizeWaypoints,callback:function callback(n){if(n.length>0){var i={path:n[n.length-1].overview_path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight};e.hasOwnProperty("icons")&&(i.icons=e.icons),t.drawPolyline(i),e.callback&&e.callback(n[n.length-1]);}}});},c.prototype.travelRoute=function(e){if(e.origin&&e.destination)this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,unitSystem:e.unitSystem,error:e.error,callback:function callback(t){if(t.length>0&&e.start&&e.start(t[t.length-1]),t.length>0&&e.step){var n=t[t.length-1];if(n.legs.length>0)for(var i,r=n.legs[0].steps,a=0;i=r[a];a++){i.step_number=a,e.step(i,n.legs[0].steps.length-1);}}t.length>0&&e.end&&e.end(t[t.length-1]);}});else if(e.route&&e.route.legs.length>0)for(var t,n=e.route.legs[0].steps,i=0;t=n[i];i++){t.step_number=i,e.step(t);}},c.prototype.drawSteppedRoute=function(e){var t=this;if(e.origin&&e.destination)this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,error:e.error,callback:function callback(n){if(n.length>0&&e.start&&e.start(n[n.length-1]),n.length>0&&e.step){var i=n[n.length-1];if(i.legs.length>0)for(var r,a=i.legs[0].steps,o=0;r=a[o];o++){r.step_number=o;var l={path:r.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight};e.hasOwnProperty("icons")&&(l.icons=e.icons),t.drawPolyline(l),e.step(r,i.legs[0].steps.length-1);}}n.length>0&&e.end&&e.end(n[n.length-1]);}});else if(e.route&&e.route.legs.length>0)for(var n,i=e.route.legs[0].steps,r=0;n=i[r];r++){n.step_number=r;var a={path:n.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight};e.hasOwnProperty("icons")&&(a.icons=e.icons),t.drawPolyline(a),e.step(n);}},c.Route=function(e){this.origin=e.origin,this.destination=e.destination,this.waypoints=e.waypoints,this.map=e.map,this.route=e.route,this.step_count=0,this.steps=this.route.legs[0].steps,this.steps_length=this.steps.length;var t={path:new google.maps.MVCArray(),strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight};e.hasOwnProperty("icons")&&(t.icons=e.icons),this.polyline=this.map.drawPolyline(t).getPath();},c.Route.prototype.getRoute=function(t){var n=this;this.map.getRoutes({origin:this.origin,destination:this.destination,travelMode:t.travelMode,waypoints:this.waypoints||[],error:t.error,callback:function callback(){n.route=e[0],t.callback&&t.callback.call(n);}});},c.Route.prototype.back=function(){if(this.step_count>0){this.step_count--;var e=this.route.legs[0].steps[this.step_count].path;for(var t in e){e.hasOwnProperty(t)&&this.polyline.pop();}}},c.Route.prototype.forward=function(){if(this.step_count<this.steps_length){var e=this.route.legs[0].steps[this.step_count].path;for(var t in e){e.hasOwnProperty(t)&&this.polyline.push(e[t]);}this.step_count++;}},c.prototype.checkGeofence=function(e,t,n){return n.containsLatLng(new google.maps.LatLng(e,t));},c.prototype.checkMarkerGeofence=function(e,t){if(e.fences)for(var n,i=0;n=e.fences[i];i++){var r=e.getPosition();this.checkGeofence(r.lat(),r.lng(),n)||t(e,n);}},c.prototype.toImage=function(e){e=e||{};var t={};if(t.size=e.size||[this.el.clientWidth,this.el.clientHeight],t.lat=this.getCenter().lat(),t.lng=this.getCenter().lng(),this.markers.length>0){t.markers=[];for(var n=0;n<this.markers.length;n++){t.markers.push({lat:this.markers[n].getPosition().lat(),lng:this.markers[n].getPosition().lng()});}}if(this.polylines.length>0){var i=this.polylines[0];t.polyline={},t.polyline.path=google.maps.geometry.encoding.encodePath(i.getPath()),t.polyline.strokeColor=i.strokeColor,t.polyline.strokeOpacity=i.strokeOpacity,t.polyline.strokeWeight=i.strokeWeight;}return c.staticMapURL(t);},c.staticMapURL=function(e){var t,n=[],i=("file:"===location.protocol?"http:":location.protocol)+"//maps.googleapis.com/maps/api/staticmap";e.url&&(i=e.url,delete e.url),i+="?";var r=e.markers;delete e.markers,!r&&e.marker&&(r=[e.marker],delete e.marker);var a=e.styles;delete e.styles;var o=e.polyline;if(delete e.polyline,e.center)n.push("center="+e.center),delete e.center;else if(e.address)n.push("center="+e.address),delete e.address;else if(e.lat)n.push(["center=",e.lat,",",e.lng].join("")),delete e.lat,delete e.lng;else if(e.visible){var l=encodeURI(e.visible.join("|"));n.push("visible="+l);}var s=e.size;s?(s.join&&(s=s.join("x")),delete e.size):s="630x300",n.push("size="+s),e.zoom||!1===e.zoom||(e.zoom=15);var d=!e.hasOwnProperty("sensor")||!!e.sensor;for(var u in delete e.sensor,n.push("sensor="+d),e){e.hasOwnProperty(u)&&n.push(u+"="+e[u]);}if(r)for(var c,h,p=0;t=r[p];p++){for(var u in c=[],t.size&&"normal"!==t.size?(c.push("size:"+t.size),delete t.size):t.icon&&(c.push("icon:"+encodeURI(t.icon)),delete t.icon),t.color&&(c.push("color:"+t.color.replace("#","0x")),delete t.color),t.label&&(c.push("label:"+t.label[0].toUpperCase()),delete t.label),h=t.address?t.address:t.lat+","+t.lng,delete t.address,delete t.lat,delete t.lng,t){t.hasOwnProperty(u)&&c.push(u+":"+t[u]);}c.length||0===p?(c.push(h),c=c.join("|"),n.push("markers="+encodeURI(c))):(c=n.pop()+encodeURI("|"+h),n.push(c));}if(a)for(p=0;p<a.length;p++){var f=[];a[p].featureType&&f.push("feature:"+a[p].featureType.toLowerCase()),a[p].elementType&&f.push("element:"+a[p].elementType.toLowerCase());for(var m=0;m<a[p].stylers.length;m++){for(var g in a[p].stylers[m]){var _=a[p].stylers[m][g];"hue"!=g&&"color"!=g||(_="0x"+_.substring(1)),f.push(g+":"+_);}}var y=f.join("|");""!=y&&n.push("style="+y);}function v(e,t){if("#"===e[0]&&(e=e.replace("#","0x"),t)){if(t=parseFloat(t),0===(t=Math.min(1,Math.max(t,0))))return"0x00000000";1===(t=(255*t).toString(16)).length&&(t+=t),e=e.slice(0,8)+t;}return e;}if(o){if(t=o,o=[],t.strokeWeight&&o.push("weight:"+parseInt(t.strokeWeight,10)),t.strokeColor){var M=v(t.strokeColor,t.strokeOpacity);o.push("color:"+M);}if(t.fillColor){var b=v(t.fillColor,t.fillOpacity);o.push("fillcolor:"+b);}var w,L=t.path;if(L.join)for(m=0;w=L[m];m++){o.push(w.join(","));}else o.push("enc:"+L);o=o.join("|"),n.push("path="+encodeURI(o));}var D=window.devicePixelRatio||1;return n.push("scale="+D),i+(n=n.join("&"));},c.prototype.addMapType=function(e,t){if(!t.hasOwnProperty("getTileUrl")||"function"!=typeof t.getTileUrl)throw"'getTileUrl' function required.";t.tileSize=t.tileSize||new google.maps.Size(256,256);var n=new google.maps.ImageMapType(t);this.map.mapTypes.set(e,n);},c.prototype.addOverlayMapType=function(e){if(!e.hasOwnProperty("getTile")||"function"!=typeof e.getTile)throw"'getTile' function required.";var t=e.index;delete e.index,this.map.overlayMapTypes.insertAt(t,e);},c.prototype.removeOverlayMapType=function(e){this.map.overlayMapTypes.removeAt(e);},c.prototype.addStyle=function(e){var t=new google.maps.StyledMapType(e.styles,{name:e.styledMapName});this.map.mapTypes.set(e.mapTypeId,t);},c.prototype.setStyle=function(e){this.map.setMapTypeId(e);},c.prototype.createPanorama=function(e){return e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||(e.lat=this.getCenter().lat(),e.lng=this.getCenter().lng()),this.panorama=c.createPanorama(e),this.map.setStreetView(this.panorama),this.panorama;},c.createPanorama=function(e){var t=u(e.el,e.context);e.position=new google.maps.LatLng(e.lat,e.lng),delete e.el,delete e.context,delete e.lat,delete e.lng;for(var n=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],i=a({visible:!0},e),r=0;r<n.length;r++){delete i[n[r]];}var o=new google.maps.StreetViewPanorama(t,i);for(r=0;r<n.length;r++){!function(t,n){e[n]&&google.maps.event.addListener(t,n,function(){e[n].apply(this);});}(o,n[r]);}return o;},c.prototype.on=function(e,t){return c.on(e,this,t);},c.prototype.off=function(e){c.off(e,this);},c.prototype.once=function(e,t){return c.once(e,this,t);},c.custom_events=["marker_added","marker_removed","polyline_added","polyline_removed","polygon_added","polygon_removed","geolocated","geolocation_failed"],c.on=function(e,t,n){if(-1==c.custom_events.indexOf(e))return t instanceof c&&(t=t.map),google.maps.event.addListener(t,e,n);var i={handler:n,eventName:e};return t.registered_events[e]=t.registered_events[e]||[],t.registered_events[e].push(i),i;},c.off=function(e,t){-1==c.custom_events.indexOf(e)?(t instanceof c&&(t=t.map),google.maps.event.clearListeners(t,e)):t.registered_events[e]=[];},c.once=function(e,t,n){if(-1==c.custom_events.indexOf(e))return t instanceof c&&(t=t.map),google.maps.event.addListenerOnce(t,e,n);},c.fire=function(e,t,n){if(-1==c.custom_events.indexOf(e))google.maps.event.trigger(t,e,Array.prototype.slice.apply(arguments).slice(2));else if(e in n.registered_events)for(var i=n.registered_events[e],r=0;r<i.length;r++){!function(e,t,n){e.apply(t,[n]);}(i[r].handler,n,t);}},c.geolocate=function(e){var t=e.always||e.complete;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(n){e.success(n),t&&t();},function(n){e.error(n),t&&t();},e.options):(e.not_supported(),t&&t());},c.geocode=function(e){this.geocoder=new google.maps.Geocoder();var t=e.callback;e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")&&(e.latLng=new google.maps.LatLng(e.lat,e.lng)),delete e.lat,delete e.lng,delete e.callback,this.geocoder.geocode(e,function(e,n){t(e,n);});},"object"==_typeof(window.google)&&window.google.maps&&(google.maps.Polygon.prototype.getBounds||(google.maps.Polygon.prototype.getBounds=function(e){for(var t,n=new google.maps.LatLngBounds(),i=this.getPaths(),r=0;r<i.getLength();r++){t=i.getAt(r);for(var a=0;a<t.getLength();a++){n.extend(t.getAt(a));}}return n;}),google.maps.Polygon.prototype.containsLatLng||(google.maps.Polygon.prototype.containsLatLng=function(e){var t=this.getBounds();if(null!==t&&!t.contains(e))return!1;for(var n=!1,i=this.getPaths().getLength(),r=0;r<i;r++){for(var a=this.getPaths().getAt(r),o=a.getLength(),l=o-1,s=0;s<o;s++){var d=a.getAt(s),u=a.getAt(l);(d.lng()<e.lng()&&u.lng()>=e.lng()||u.lng()<e.lng()&&d.lng()>=e.lng())&&d.lat()+(e.lng()-d.lng())/(u.lng()-d.lng())*(u.lat()-d.lat())<e.lat()&&(n=!n),l=s;}}return n;}),google.maps.Circle.prototype.containsLatLng||(google.maps.Circle.prototype.containsLatLng=function(e){return!google.maps.geometry||google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(),e)<=this.getRadius();}),google.maps.Rectangle.prototype.containsLatLng=function(e){return this.getBounds().contains(e);},google.maps.LatLngBounds.prototype.containsLatLng=function(e){return this.contains(e);},google.maps.Marker.prototype.setFences=function(e){this.fences=e;},google.maps.Marker.prototype.addFence=function(e){this.fences.push(e);},google.maps.Marker.prototype.getId=function(){return this.__gm_id;}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null==this)throw new TypeError();var t=Object(this),n=t.length>>>0;if(0===n)return-1;var i=0;if(arguments.length>1&&((i=Number(arguments[1]))!=i?i=0:0!=i&&i!=1/0&&i!=-1/0&&(i=(i>0||-1)*Math.floor(Math.abs(i)))),i>=n)return-1;for(var r=i>=0?i:Math.max(n-Math.abs(i),0);r<n;r++){if(r in t&&t[r]===e)return r;}return-1;}),c);}).call(this,i(1));},function(e,t,n){n(147),n(152),n(153),n(155),n(156),n(160),e.exports=n(163);},function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i);n(148),n(151),n(206);r()(document).ready(function(){setTimeout(function(){r()(".vertical-nav-menu").metisMenu();},100),r()(".search-icon").click(function(){r()(this).parent().parent().addClass("active");}),r()(".search-wrapper .close").click(function(){r()(this).parent().removeClass("active");}),r()(".dropdown-menu").on("click",function(e){var t=r.a._data(document,"events")||{};t=t.click||[];for(var n=0;n<t.length;n++){t[n].selector&&(r()(e.target).is(t[n].selector)&&t[n].handler.call(e.target,e),r()(e.target).parents(t[n].selector).each(function(){t[n].handler.call(this,e);}));}e.stopPropagation();}),r()(function(){r()('[data-toggle="popover"]').popover();}),r()(function(){r()('[data-toggle="tooltip"]').tooltip();}),r()(".mobile-toggle-nav").click(function(){r()(this).toggleClass("is-active"),r()(".app-container").toggleClass("sidebar-mobile-open");}),r()(".mobile-toggle-header-nav").click(function(){r()(this).toggleClass("active"),r()(".app-header__content").toggleClass("header-mobile-open");}),r()(window).on("resize",function(){r()(this).width()<1250?r()(".app-container").addClass("closed-sidebar-mobile closed-sidebar"):r()(".app-container").removeClass("closed-sidebar-mobile closed-sidebar");});});},function(e,t,n){/*!
      * Bootstrap v4.2.1 (https://getbootstrap.com/)
      * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
      * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
      */!function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}function r(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e;}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable;}))),i.forEach(function(t){a(e,t,n[t]);});}return e;}t=t&&t.hasOwnProperty("default")?t["default"]:t,n=n&&n.hasOwnProperty("default")?n["default"]:n;var l="transitionend";function s(e){var t=this,i=!1;return n(this).one(d.TRANSITION_END,function(){i=!0;}),setTimeout(function(){i||d.triggerTransitionEnd(t);},e),this;}var d={TRANSITION_END:"bsTransitionEnd",getUID:function getUID(e){do{e+=~~(1e6*Math.random());}while(document.getElementById(e));return e;},getSelectorFromElement:function getSelectorFromElement(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():"";}return t&&document.querySelector(t)?t:null;},getTransitionDurationFromElement:function getTransitionDurationFromElement(e){if(!e)return 0;var t=n(e).css("transition-duration"),i=n(e).css("transition-delay"),r=parseFloat(t),a=parseFloat(i);return r||a?(t=t.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(t)+parseFloat(i))):0;},reflow:function reflow(e){return e.offsetHeight;},triggerTransitionEnd:function triggerTransitionEnd(e){n(e).trigger(l);},supportsTransitionEnd:function supportsTransitionEnd(){return Boolean(l);},isElement:function isElement(e){return(e[0]||e).nodeType;},typeCheckConfig:function typeCheckConfig(e,t,n){for(var i in n){if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],a=t[i],o=a&&d.isElement(a)?"element":(l=a,{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(o))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+o+'" but expected type "'+r+'".');}}var l;},findShadowRoot:function findShadowRoot(e){if(!document.documentElement.attachShadow)return null;if("function"==typeof e.getRootNode){var t=e.getRootNode();return t instanceof ShadowRoot?t:null;}return e instanceof ShadowRoot?e:e.parentNode?d.findShadowRoot(e.parentNode):null;}};n.fn.emulateTransitionEnd=s,n.event.special[d.TRANSITION_END]={bindType:l,delegateType:l,handle:function handle(e){if(n(e.target).is(this))return e.handleObj.handler.apply(this,arguments);}};var u=n.fn.alert,c={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},h={ALERT:"alert",FADE:"fade",SHOW:"show"},p=function(){function e(e){this._element=e;}var t=e.prototype;return t.close=function(e){var t=this._element;e&&(t=this._getRootElement(e));var n=this._triggerCloseEvent(t);n.isDefaultPrevented()||this._removeElement(t);},t.dispose=function(){n.removeData(this._element,"bs.alert"),this._element=null;},t._getRootElement=function(e){var t=d.getSelectorFromElement(e),i=!1;return t&&(i=document.querySelector(t)),i||(i=n(e).closest("."+h.ALERT)[0]),i;},t._triggerCloseEvent=function(e){var t=n.Event(c.CLOSE);return n(e).trigger(t),t;},t._removeElement=function(e){var t=this;if(n(e).removeClass(h.SHOW),n(e).hasClass(h.FADE)){var i=d.getTransitionDurationFromElement(e);n(e).one(d.TRANSITION_END,function(n){return t._destroyElement(e,n);}).emulateTransitionEnd(i);}else this._destroyElement(e);},t._destroyElement=function(e){n(e).detach().trigger(c.CLOSED).remove();},e._jQueryInterface=function(t){return this.each(function(){var i=n(this),r=i.data("bs.alert");r||(r=new e(this),i.data("bs.alert",r)),"close"===t&&r[t](this);});},e._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this);};},r(e,null,[{key:"VERSION",get:function get(){return"4.2.1";}}]),e;}();n(document).on(c.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p())),n.fn.alert=p._jQueryInterface,n.fn.alert.Constructor=p,n.fn.alert.noConflict=function(){return n.fn.alert=u,p._jQueryInterface;};var f=n.fn.button,m={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},g={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:'input:not([type="hidden"])',ACTIVE:".active",BUTTON:".btn"},_={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},y=function(){function e(e){this._element=e;}var t=e.prototype;return t.toggle=function(){var e=!0,t=!0,i=n(this._element).closest(g.DATA_TOGGLE)[0];if(i){var r=this._element.querySelector(g.INPUT);if(r){if("radio"===r.type)if(r.checked&&this._element.classList.contains(m.ACTIVE))e=!1;else{var a=i.querySelector(g.ACTIVE);a&&n(a).removeClass(m.ACTIVE);}if(e){if(r.hasAttribute("disabled")||i.hasAttribute("disabled")||r.classList.contains("disabled")||i.classList.contains("disabled"))return;r.checked=!this._element.classList.contains(m.ACTIVE),n(r).trigger("change");}r.focus(),t=!1;}}t&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(m.ACTIVE)),e&&n(this._element).toggleClass(m.ACTIVE);},t.dispose=function(){n.removeData(this._element,"bs.button"),this._element=null;},e._jQueryInterface=function(t){return this.each(function(){var i=n(this).data("bs.button");i||(i=new e(this),n(this).data("bs.button",i)),"toggle"===t&&i[t]();});},r(e,null,[{key:"VERSION",get:function get(){return"4.2.1";}}]),e;}();n(document).on(_.CLICK_DATA_API,g.DATA_TOGGLE_CARROT,function(e){e.preventDefault();var t=e.target;n(t).hasClass(m.BUTTON)||(t=n(t).closest(g.BUTTON)),y._jQueryInterface.call(n(t),"toggle");}).on(_.FOCUS_BLUR_DATA_API,g.DATA_TOGGLE_CARROT,function(e){var t=n(e.target).closest(g.BUTTON)[0];n(t).toggleClass(m.FOCUS,/^focus(in)?$/.test(e.type));}),n.fn.button=y._jQueryInterface,n.fn.button.Constructor=y,n.fn.button.noConflict=function(){return n.fn.button=f,y._jQueryInterface;};var v="carousel",M=".bs.carousel",b=n.fn[v],w={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},L={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},D={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},T={SLIDE:"slide.bs.carousel",SLID:"slid.bs.carousel",KEYDOWN:"keydown.bs.carousel",MOUSEENTER:"mouseenter.bs.carousel",MOUSELEAVE:"mouseleave.bs.carousel",TOUCHSTART:"touchstart.bs.carousel",TOUCHMOVE:"touchmove.bs.carousel",TOUCHEND:"touchend.bs.carousel",POINTERDOWN:"pointerdown.bs.carousel",POINTERUP:"pointerup.bs.carousel",DRAG_START:"dragstart.bs.carousel",LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},k={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item",POINTER_EVENT:"pointer-event"},S={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",ITEM_IMG:".carousel-item img",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},x={TOUCH:"touch",PEN:"pen"},Y=function(){function e(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=this._element.querySelector(S.INDICATORS),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners();}var t=e.prototype;return t.next=function(){this._isSliding||this._slide(D.NEXT);},t.nextWhenVisible=function(){!document.hidden&&n(this._element).is(":visible")&&"hidden"!==n(this._element).css("visibility")&&this.next();},t.prev=function(){this._isSliding||this._slide(D.PREV);},t.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(S.NEXT_PREV)&&(d.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null;},t.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval));},t.to=function(e){var t=this;this._activeElement=this._element.querySelector(S.ACTIVE_ITEM);var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)n(this._element).one(T.SLID,function(){return t.to(e);});else{if(i===e)return this.pause(),void this.cycle();var r=e>i?D.NEXT:D.PREV;this._slide(r,this._items[e]);}},t.dispose=function(){n(this._element).off(M),n.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null;},t._getConfig=function(e){return e=o({},w,e),d.typeCheckConfig(v,e,L),e;},t._handleSwipe=function(){var e=Math.abs(this.touchDeltaX);if(!(e<=40)){var t=e/this.touchDeltaX;t>0&&this.prev(),t<0&&this.next();}},t._addEventListeners=function(){var e=this;this._config.keyboard&&n(this._element).on(T.KEYDOWN,function(t){return e._keydown(t);}),"hover"===this._config.pause&&n(this._element).on(T.MOUSEENTER,function(t){return e.pause(t);}).on(T.MOUSELEAVE,function(t){return e.cycle(t);}),this._addTouchEventListeners();},t._addTouchEventListeners=function(){var e=this;if(this._touchSupported){var t=function t(_t5){e._pointerEvent&&x[_t5.originalEvent.pointerType.toUpperCase()]?e.touchStartX=_t5.originalEvent.clientX:e._pointerEvent||(e.touchStartX=_t5.originalEvent.touches[0].clientX);},i=function i(t){e._pointerEvent&&x[t.originalEvent.pointerType.toUpperCase()]&&(e.touchDeltaX=t.originalEvent.clientX-e.touchStartX),e._handleSwipe(),"hover"===e._config.pause&&(e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t);},500+e._config.interval));};n(this._element.querySelectorAll(S.ITEM_IMG)).on(T.DRAG_START,function(e){return e.preventDefault();}),this._pointerEvent?(n(this._element).on(T.POINTERDOWN,function(e){return t(e);}),n(this._element).on(T.POINTERUP,function(e){return i(e);}),this._element.classList.add(k.POINTER_EVENT)):(n(this._element).on(T.TOUCHSTART,function(e){return t(e);}),n(this._element).on(T.TOUCHMOVE,function(t){return function(t){t.originalEvent.touches&&t.originalEvent.touches.length>1?e.touchDeltaX=0:e.touchDeltaX=t.originalEvent.touches[0].clientX-e.touchStartX;}(t);}),n(this._element).on(T.TOUCHEND,function(e){return i(e);}));}},t._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next();}},t._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(S.ITEM)):[],this._items.indexOf(e);},t._getItemByDirection=function(e,t){var n=e===D.NEXT,i=e===D.PREV,r=this._getItemIndex(t),a=this._items.length-1,o=i&&0===r||n&&r===a;if(o&&!this._config.wrap)return t;var l=e===D.PREV?-1:1,s=(r+l)%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s];},t._triggerSlideEvent=function(e,t){var i=this._getItemIndex(e),r=this._getItemIndex(this._element.querySelector(S.ACTIVE_ITEM)),a=n.Event(T.SLIDE,{relatedTarget:e,direction:t,from:r,to:i});return n(this._element).trigger(a),a;},t._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var t=[].slice.call(this._indicatorsElement.querySelectorAll(S.ACTIVE));n(t).removeClass(k.ACTIVE);var i=this._indicatorsElement.children[this._getItemIndex(e)];i&&n(i).addClass(k.ACTIVE);}},t._slide=function(e,t){var i,r,a,o=this,l=this._element.querySelector(S.ACTIVE_ITEM),s=this._getItemIndex(l),u=t||l&&this._getItemByDirection(e,l),c=this._getItemIndex(u),h=Boolean(this._interval);if(e===D.NEXT?(i=k.LEFT,r=k.NEXT,a=D.LEFT):(i=k.RIGHT,r=k.PREV,a=D.RIGHT),u&&n(u).hasClass(k.ACTIVE))this._isSliding=!1;else{var p=this._triggerSlideEvent(u,a);if(!p.isDefaultPrevented()&&l&&u){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(u);var f=n.Event(T.SLID,{relatedTarget:u,direction:a,from:s,to:c});if(n(this._element).hasClass(k.SLIDE)){n(u).addClass(r),d.reflow(u),n(l).addClass(i),n(u).addClass(i);var m=parseInt(u.getAttribute("data-interval"),10);m?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=m):this._config.interval=this._config.defaultInterval||this._config.interval;var g=d.getTransitionDurationFromElement(l);n(l).one(d.TRANSITION_END,function(){n(u).removeClass(i+" "+r).addClass(k.ACTIVE),n(l).removeClass(k.ACTIVE+" "+r+" "+i),o._isSliding=!1,setTimeout(function(){return n(o._element).trigger(f);},0);}).emulateTransitionEnd(g);}else n(l).removeClass(k.ACTIVE),n(u).addClass(k.ACTIVE),this._isSliding=!1,n(this._element).trigger(f);h&&this.cycle();}}},e._jQueryInterface=function(t){return this.each(function(){var i=n(this).data("bs.carousel"),r=o({},w,n(this).data());"object"==_typeof(t)&&(r=o({},r,t));var a="string"==typeof t?t:r.slide;if(i||(i=new e(this,r),n(this).data("bs.carousel",i)),"number"==typeof t)i.to(t);else if("string"==typeof a){if(void 0===i[a])throw new TypeError('No method named "'+a+'"');i[a]();}else r.interval&&(i.pause(),i.cycle());});},e._dataApiClickHandler=function(t){var i=d.getSelectorFromElement(this);if(i){var r=n(i)[0];if(r&&n(r).hasClass(k.CAROUSEL)){var a=o({},n(r).data(),n(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),e._jQueryInterface.call(n(r),a),l&&n(r).data("bs.carousel").to(l),t.preventDefault();}}},r(e,null,[{key:"VERSION",get:function get(){return"4.2.1";}},{key:"Default",get:function get(){return w;}}]),e;}();n(document).on(T.CLICK_DATA_API,S.DATA_SLIDE,Y._dataApiClickHandler),n(window).on(T.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(S.DATA_RIDE)),t=0,i=e.length;t<i;t++){var r=n(e[t]);Y._jQueryInterface.call(r,r.data());}}),n.fn[v]=Y._jQueryInterface,n.fn[v].Constructor=Y,n.fn[v].noConflict=function(){return n.fn[v]=b,Y._jQueryInterface;};var E="collapse",C=n.fn[E],H={toggle:!0,parent:""},P={toggle:"boolean",parent:"(string|element)"},O={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},A={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},I={WIDTH:"width",HEIGHT:"height"},R={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},j=function(){function e(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(R.DATA_TOGGLE)),i=0,r=n.length;i<r;i++){var a=n[i],o=d.getSelectorFromElement(a),l=[].slice.call(document.querySelectorAll(o)).filter(function(t){return t===e;});null!==o&&l.length>0&&(this._selector=o,this._triggerArray.push(a));}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle();}var t=e.prototype;return t.toggle=function(){n(this._element).hasClass(A.SHOW)?this.hide():this.show();},t.show=function(){var t,i,r=this;if(!(this._isTransitioning||n(this._element).hasClass(A.SHOW)||(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(R.ACTIVES)).filter(function(e){return"string"==typeof r._config.parent?e.getAttribute("data-parent")===r._config.parent:e.classList.contains(A.COLLAPSE);})).length&&(t=null),t&&(i=n(t).not(this._selector).data("bs.collapse"))&&i._isTransitioning))){var a=n.Event(O.SHOW);if(n(this._element).trigger(a),!a.isDefaultPrevented()){t&&(e._jQueryInterface.call(n(t).not(this._selector),"hide"),i||n(t).data("bs.collapse",null));var o=this._getDimension();n(this._element).removeClass(A.COLLAPSE).addClass(A.COLLAPSING),this._element.style[o]=0,this._triggerArray.length&&n(this._triggerArray).removeClass(A.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var l=o[0].toUpperCase()+o.slice(1),s="scroll"+l,u=d.getTransitionDurationFromElement(this._element);n(this._element).one(d.TRANSITION_END,function(){n(r._element).removeClass(A.COLLAPSING).addClass(A.COLLAPSE).addClass(A.SHOW),r._element.style[o]="",r.setTransitioning(!1),n(r._element).trigger(O.SHOWN);}).emulateTransitionEnd(u),this._element.style[o]=this._element[s]+"px";}}},t.hide=function(){var e=this;if(!this._isTransitioning&&n(this._element).hasClass(A.SHOW)){var t=n.Event(O.HIDE);if(n(this._element).trigger(t),!t.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",d.reflow(this._element),n(this._element).addClass(A.COLLAPSING).removeClass(A.COLLAPSE).removeClass(A.SHOW);var r=this._triggerArray.length;if(r>0)for(var a=0;a<r;a++){var o=this._triggerArray[a],l=d.getSelectorFromElement(o);if(null!==l){var s=n([].slice.call(document.querySelectorAll(l)));s.hasClass(A.SHOW)||n(o).addClass(A.COLLAPSED).attr("aria-expanded",!1);}}this.setTransitioning(!0),this._element.style[i]="";var u=d.getTransitionDurationFromElement(this._element);n(this._element).one(d.TRANSITION_END,function(){e.setTransitioning(!1),n(e._element).removeClass(A.COLLAPSING).addClass(A.COLLAPSE).trigger(O.HIDDEN);}).emulateTransitionEnd(u);}}},t.setTransitioning=function(e){this._isTransitioning=e;},t.dispose=function(){n.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null;},t._getConfig=function(e){return(e=o({},H,e)).toggle=Boolean(e.toggle),d.typeCheckConfig(E,e,P),e;},t._getDimension=function(){var e=n(this._element).hasClass(I.WIDTH);return e?I.WIDTH:I.HEIGHT;},t._getParent=function(){var t,i=this;d.isElement(this._config.parent)?(t=this._config.parent,void 0!==this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',a=[].slice.call(t.querySelectorAll(r));return n(a).each(function(t,n){i._addAriaAndCollapsedClass(e._getTargetFromElement(n),[n]);}),t;},t._addAriaAndCollapsedClass=function(e,t){var i=n(e).hasClass(A.SHOW);t.length&&n(t).toggleClass(A.COLLAPSED,!i).attr("aria-expanded",i);},e._getTargetFromElement=function(e){var t=d.getSelectorFromElement(e);return t?document.querySelector(t):null;},e._jQueryInterface=function(t){return this.each(function(){var i=n(this),r=i.data("bs.collapse"),a=o({},H,i.data(),"object"==_typeof(t)&&t?t:{});if(!r&&a.toggle&&/show|hide/.test(t)&&(a.toggle=!1),r||(r=new e(this,a),i.data("bs.collapse",r)),"string"==typeof t){if(void 0===r[t])throw new TypeError('No method named "'+t+'"');r[t]();}});},r(e,null,[{key:"VERSION",get:function get(){return"4.2.1";}},{key:"Default",get:function get(){return H;}}]),e;}();n(document).on(O.CLICK_DATA_API,R.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var t=n(this),i=d.getSelectorFromElement(this),r=[].slice.call(document.querySelectorAll(i));n(r).each(function(){var e=n(this),i=e.data("bs.collapse"),r=i?"toggle":t.data();j._jQueryInterface.call(e,r);});}),n.fn[E]=j._jQueryInterface,n.fn[E].Constructor=j,n.fn[E].noConflict=function(){return n.fn[E]=C,j._jQueryInterface;};var F="dropdown",N=n.fn[F],W=new RegExp("38|40|27"),z={HIDE:"hide.bs.dropdown",HIDDEN:"hidden.bs.dropdown",SHOW:"show.bs.dropdown",SHOWN:"shown.bs.dropdown",CLICK:"click.bs.dropdown",CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},B={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",DROPRIGHT:"dropright",DROPLEFT:"dropleft",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",POSITION_STATIC:"position-static"},V={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"},G={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end",RIGHT:"right-start",RIGHTEND:"right-end",LEFT:"left-start",LEFTEND:"left-end"},U={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Z={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},q=function(){function e(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners();}var i=e.prototype;return i.toggle=function(){if(!this._element.disabled&&!n(this._element).hasClass(B.DISABLED)){var i=e._getParentFromElement(this._element),r=n(this._menu).hasClass(B.SHOW);if(e._clearMenus(),!r){var a={relatedTarget:this._element},o=n.Event(z.SHOW,a);if(n(i).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar){if(void 0===t)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var l=this._element;"parent"===this._config.reference?l=i:d.isElement(this._config.reference)&&(l=this._config.reference,void 0!==this._config.reference.jquery&&(l=this._config.reference[0])),"scrollParent"!==this._config.boundary&&n(i).addClass(B.POSITION_STATIC),this._popper=new t(l,this._menu,this._getPopperConfig());}"ontouchstart"in document.documentElement&&0===n(i).closest(V.NAVBAR_NAV).length&&n(document.body).children().on("mouseover",null,n.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),n(this._menu).toggleClass(B.SHOW),n(i).toggleClass(B.SHOW).trigger(n.Event(z.SHOWN,a));}}}},i.show=function(){if(!(this._element.disabled||n(this._element).hasClass(B.DISABLED)||n(this._menu).hasClass(B.SHOW))){var t={relatedTarget:this._element},i=n.Event(z.SHOW,t),r=e._getParentFromElement(this._element);n(r).trigger(i),i.isDefaultPrevented()||(n(this._menu).toggleClass(B.SHOW),n(r).toggleClass(B.SHOW).trigger(n.Event(z.SHOWN,t)));}},i.hide=function(){if(!this._element.disabled&&!n(this._element).hasClass(B.DISABLED)&&n(this._menu).hasClass(B.SHOW)){var t={relatedTarget:this._element},i=n.Event(z.HIDE,t),r=e._getParentFromElement(this._element);n(r).trigger(i),i.isDefaultPrevented()||(n(this._menu).toggleClass(B.SHOW),n(r).toggleClass(B.SHOW).trigger(n.Event(z.HIDDEN,t)));}},i.dispose=function(){n.removeData(this._element,"bs.dropdown"),n(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null);},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate();},i._addEventListeners=function(){var e=this;n(this._element).on(z.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle();});},i._getConfig=function(e){return e=o({},this.constructor.Default,n(this._element).data(),e),d.typeCheckConfig(F,e,this.constructor.DefaultType),e;},i._getMenuElement=function(){if(!this._menu){var t=e._getParentFromElement(this._element);t&&(this._menu=t.querySelector(V.MENU));}return this._menu;},i._getPlacement=function(){var e=n(this._element.parentNode),t=G.BOTTOM;return e.hasClass(B.DROPUP)?(t=G.TOP,n(this._menu).hasClass(B.MENURIGHT)&&(t=G.TOPEND)):e.hasClass(B.DROPRIGHT)?t=G.RIGHT:e.hasClass(B.DROPLEFT)?t=G.LEFT:n(this._menu).hasClass(B.MENURIGHT)&&(t=G.BOTTOMEND),t;},i._detectNavbar=function(){return n(this._element).closest(".navbar").length>0;},i._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=o({},t.offsets,e._config.offset(t.offsets)||{}),t;}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n;},e._jQueryInterface=function(t){return this.each(function(){var i=n(this).data("bs.dropdown"),r="object"==_typeof(t)?t:null;if(i||(i=new e(this,r),n(this).data("bs.dropdown",i)),"string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'+t+'"');i[t]();}});},e._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var i=[].slice.call(document.querySelectorAll(V.DATA_TOGGLE)),r=0,a=i.length;r<a;r++){var o=e._getParentFromElement(i[r]),l=n(i[r]).data("bs.dropdown"),s={relatedTarget:i[r]};if(t&&"click"===t.type&&(s.clickEvent=t),l){var d=l._menu;if(n(o).hasClass(B.SHOW)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&n.contains(o,t.target))){var u=n.Event(z.HIDE,s);n(o).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&n(document.body).children().off("mouseover",null,n.noop),i[r].setAttribute("aria-expanded","false"),n(d).removeClass(B.SHOW),n(o).removeClass(B.SHOW).trigger(n.Event(z.HIDDEN,s)));}}}},e._getParentFromElement=function(e){var t,n=d.getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode;},e._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||n(t.target).closest(V.MENU).length)):W.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!n(this).hasClass(B.DISABLED))){var i=e._getParentFromElement(this),r=n(i).hasClass(B.SHOW);if(r&&(!r||27!==t.which&&32!==t.which)){var a=[].slice.call(i.querySelectorAll(V.VISIBLE_ITEMS));if(0!==a.length){var o=a.indexOf(t.target);38===t.which&&o>0&&o--,40===t.which&&o<a.length-1&&o++,o<0&&(o=0),a[o].focus();}}else{if(27===t.which){var l=i.querySelector(V.DATA_TOGGLE);n(l).trigger("focus");}n(this).trigger("click");}}},r(e,null,[{key:"VERSION",get:function get(){return"4.2.1";}},{key:"Default",get:function get(){return U;}},{key:"DefaultType",get:function get(){return Z;}}]),e;}();n(document).on(z.KEYDOWN_DATA_API,V.DATA_TOGGLE,q._dataApiKeydownHandler).on(z.KEYDOWN_DATA_API,V.MENU,q._dataApiKeydownHandler).on(z.CLICK_DATA_API+" "+z.KEYUP_DATA_API,q._clearMenus).on(z.CLICK_DATA_API,V.DATA_TOGGLE,function(e){e.preventDefault(),e.stopPropagation(),q._jQueryInterface.call(n(this),"toggle");}).on(z.CLICK_DATA_API,V.FORM_CHILD,function(e){e.stopPropagation();}),n.fn[F]=q._jQueryInterface,n.fn[F].Constructor=q,n.fn[F].noConflict=function(){return n.fn[F]=N,q._jQueryInterface;};var X=n.fn.modal,J={backdrop:!0,keyboard:!0,focus:!0,show:!0},$={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},K={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},Q={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},ee={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top"},te=function(){function e(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(ee.DIALOG),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0;}var t=e.prototype;return t.toggle=function(e){return this._isShown?this.hide():this.show(e);},t.show=function(e){var t=this;if(!this._isShown&&!this._isTransitioning){n(this._element).hasClass(Q.FADE)&&(this._isTransitioning=!0);var i=n.Event(K.SHOW,{relatedTarget:e});n(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),n(this._element).on(K.CLICK_DISMISS,ee.DATA_DISMISS,function(e){return t.hide(e);}),n(this._dialog).on(K.MOUSEDOWN_DISMISS,function(){n(t._element).one(K.MOUSEUP_DISMISS,function(e){n(e.target).is(t._element)&&(t._ignoreBackdropClick=!0);});}),this._showBackdrop(function(){return t._showElement(e);}));}},t.hide=function(e){var t=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var i=n.Event(K.HIDE);if(n(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var r=n(this._element).hasClass(Q.FADE);if(r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),n(document).off(K.FOCUSIN),n(this._element).removeClass(Q.SHOW),n(this._element).off(K.CLICK_DISMISS),n(this._dialog).off(K.MOUSEDOWN_DISMISS),r){var a=d.getTransitionDurationFromElement(this._element);n(this._element).one(d.TRANSITION_END,function(e){return t._hideModal(e);}).emulateTransitionEnd(a);}else this._hideModal();}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(e){return n(e).off(".bs.modal");}),n(document).off(K.FOCUSIN),n.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null;},t.handleUpdate=function(){this._adjustDialog();},t._getConfig=function(e){return e=o({},J,e),d.typeCheckConfig("modal",e,$),e;},t._showElement=function(e){var t=this,i=n(this._element).hasClass(Q.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.scrollTop=0,i&&d.reflow(this._element),n(this._element).addClass(Q.SHOW),this._config.focus&&this._enforceFocus();var r=n.Event(K.SHOWN,{relatedTarget:e}),a=function a(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,n(t._element).trigger(r);};if(i){var o=d.getTransitionDurationFromElement(this._dialog);n(this._dialog).one(d.TRANSITION_END,a).emulateTransitionEnd(o);}else a();},t._enforceFocus=function(){var e=this;n(document).off(K.FOCUSIN).on(K.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===n(e._element).has(t.target).length&&e._element.focus();});},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?n(this._element).on(K.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide());}):this._isShown||n(this._element).off(K.KEYDOWN_DISMISS);},t._setResizeEvent=function(){var e=this;this._isShown?n(window).on(K.RESIZE,function(t){return e.handleUpdate(t);}):n(window).off(K.RESIZE);},t._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){n(document.body).removeClass(Q.OPEN),e._resetAdjustments(),e._resetScrollbar(),n(e._element).trigger(K.HIDDEN);});},t._removeBackdrop=function(){this._backdrop&&(n(this._backdrop).remove(),this._backdrop=null);},t._showBackdrop=function(e){var t=this,i=n(this._element).hasClass(Q.FADE)?Q.FADE:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=Q.BACKDROP,i&&this._backdrop.classList.add(i),n(this._backdrop).appendTo(document.body),n(this._element).on(K.CLICK_DISMISS,function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===t._config.backdrop?t._element.focus():t.hide());}),i&&d.reflow(this._backdrop),n(this._backdrop).addClass(Q.SHOW),!e)return;if(!i)return void e();var r=d.getTransitionDurationFromElement(this._backdrop);n(this._backdrop).one(d.TRANSITION_END,e).emulateTransitionEnd(r);}else if(!this._isShown&&this._backdrop){n(this._backdrop).removeClass(Q.SHOW);var a=function a(){t._removeBackdrop(),e&&e();};if(n(this._element).hasClass(Q.FADE)){var o=d.getTransitionDurationFromElement(this._backdrop);n(this._backdrop).one(d.TRANSITION_END,a).emulateTransitionEnd(o);}else a();}else e&&e();},t._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px");},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight="";},t._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth();},t._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(ee.FIXED_CONTENT)),i=[].slice.call(document.querySelectorAll(ee.STICKY_CONTENT));n(t).each(function(t,i){var r=i.style.paddingRight,a=n(i).css("padding-right");n(i).data("padding-right",r).css("padding-right",parseFloat(a)+e._scrollbarWidth+"px");}),n(i).each(function(t,i){var r=i.style.marginRight,a=n(i).css("margin-right");n(i).data("margin-right",r).css("margin-right",parseFloat(a)-e._scrollbarWidth+"px");});var r=document.body.style.paddingRight,a=n(document.body).css("padding-right");n(document.body).data("padding-right",r).css("padding-right",parseFloat(a)+this._scrollbarWidth+"px");}n(document.body).addClass(Q.OPEN);},t._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(ee.FIXED_CONTENT));n(e).each(function(e,t){var i=n(t).data("padding-right");n(t).removeData("padding-right"),t.style.paddingRight=i||"";});var t=[].slice.call(document.querySelectorAll(""+ee.STICKY_CONTENT));n(t).each(function(e,t){var i=n(t).data("margin-right");void 0!==i&&n(t).css("margin-right",i).removeData("margin-right");});var i=n(document.body).data("padding-right");n(document.body).removeData("padding-right"),document.body.style.paddingRight=i||"";},t._getScrollbarWidth=function(){var e=document.createElement("div");e.className=Q.SCROLLBAR_MEASURER,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t;},e._jQueryInterface=function(t,i){return this.each(function(){var r=n(this).data("bs.modal"),a=o({},J,n(this).data(),"object"==_typeof(t)&&t?t:{});if(r||(r=new e(this,a),n(this).data("bs.modal",r)),"string"==typeof t){if(void 0===r[t])throw new TypeError('No method named "'+t+'"');r[t](i);}else a.show&&r.show(i);});},r(e,null,[{key:"VERSION",get:function get(){return"4.2.1";}},{key:"Default",get:function get(){return J;}}]),e;}();n(document).on(K.CLICK_DATA_API,ee.DATA_TOGGLE,function(e){var t,i=this,r=d.getSelectorFromElement(this);r&&(t=document.querySelector(r));var a=n(t).data("bs.modal")?"toggle":o({},n(t).data(),n(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=n(t).one(K.SHOW,function(e){e.isDefaultPrevented()||l.one(K.HIDDEN,function(){n(i).is(":visible")&&i.focus();});});te._jQueryInterface.call(n(t),a,this);}),n.fn.modal=te._jQueryInterface,n.fn.modal.Constructor=te,n.fn.modal.noConflict=function(){return n.fn.modal=X,te._jQueryInterface;};var ne="tooltip",ie=n.fn.tooltip,re=new RegExp("(^|\\s)bs-tooltip\\S+","g"),ae={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},oe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},se={SHOW:"show",OUT:"out"},de={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},ue={FADE:"fade",SHOW:"show"},ce={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},he={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},pe=function(){function e(e,n){if(void 0===t)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(n),this.tip=null,this._setListeners();}var i=e.prototype;return i.enable=function(){this._isEnabled=!0;},i.disable=function(){this._isEnabled=!1;},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled;},i.toggle=function(e){if(this._isEnabled)if(e){var t=this.constructor.DATA_KEY,i=n(e.currentTarget).data(t);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),n(e.currentTarget).data(t,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i);}else{if(n(this.getTipElement()).hasClass(ue.SHOW))return void this._leave(null,this);this._enter(null,this);}},i.dispose=function(){clearTimeout(this._timeout),n.removeData(this.element,this.constructor.DATA_KEY),n(this.element).off(this.constructor.EVENT_KEY),n(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&n(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null;},i.show=function(){var e=this;if("none"===n(this.element).css("display"))throw new Error("Please use show on visible elements");var i=n.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){n(this.element).trigger(i);var r=d.findShadowRoot(this.element),a=n.contains(null!==r?r:this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!a)return;var o=this.getTipElement(),l=d.getUID(this.constructor.NAME);o.setAttribute("id",l),this.element.setAttribute("aria-describedby",l),this.setContent(),this.config.animation&&n(o).addClass(ue.FADE);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,u=this._getAttachment(s);this.addAttachmentClass(u);var c=this._getContainer();n(o).data(this.constructor.DATA_KEY,this),n.contains(this.element.ownerDocument.documentElement,this.tip)||n(o).appendTo(c),n(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new t(this.element,o,{placement:u,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:ce.ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function onCreate(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t);},onUpdate:function onUpdate(t){return e._handlePopperPlacementChange(t);}}),n(o).addClass(ue.SHOW),"ontouchstart"in document.documentElement&&n(document.body).children().on("mouseover",null,n.noop);var h=function h(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,n(e.element).trigger(e.constructor.Event.SHOWN),t===se.OUT&&e._leave(null,e);};if(n(this.tip).hasClass(ue.FADE)){var p=d.getTransitionDurationFromElement(this.tip);n(this.tip).one(d.TRANSITION_END,h).emulateTransitionEnd(p);}else h();}},i.hide=function(e){var t=this,i=this.getTipElement(),r=n.Event(this.constructor.Event.HIDE),a=function a(){t._hoverState!==se.SHOW&&i.parentNode&&i.parentNode.removeChild(i),t._cleanTipClass(),t.element.removeAttribute("aria-describedby"),n(t.element).trigger(t.constructor.Event.HIDDEN),null!==t._popper&&t._popper.destroy(),e&&e();};if(n(this.element).trigger(r),!r.isDefaultPrevented()){if(n(i).removeClass(ue.SHOW),"ontouchstart"in document.documentElement&&n(document.body).children().off("mouseover",null,n.noop),this._activeTrigger[he.CLICK]=!1,this._activeTrigger[he.FOCUS]=!1,this._activeTrigger[he.HOVER]=!1,n(this.tip).hasClass(ue.FADE)){var o=d.getTransitionDurationFromElement(i);n(i).one(d.TRANSITION_END,a).emulateTransitionEnd(o);}else a();this._hoverState="";}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate();},i.isWithContent=function(){return Boolean(this.getTitle());},i.addAttachmentClass=function(e){n(this.getTipElement()).addClass("bs-tooltip-"+e);},i.getTipElement=function(){return this.tip=this.tip||n(this.config.template)[0],this.tip;},i.setContent=function(){var e=this.getTipElement();this.setElementContent(n(e.querySelectorAll(ce.TOOLTIP_INNER)),this.getTitle()),n(e).removeClass(ue.FADE+" "+ue.SHOW);},i.setElementContent=function(e,t){var i=this.config.html;"object"==_typeof(t)&&(t.nodeType||t.jquery)?i?n(t).parent().is(e)||e.empty().append(t):e.text(n(t).text()):e[i?"html":"text"](t);},i.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e;},i._getContainer=function(){return!1===this.config.container?document.body:d.isElement(this.config.container)?n(this.config.container):n(document).find(this.config.container);},i._getAttachment=function(e){return oe[e.toUpperCase()];},i._setListeners=function(){var e=this,t=this.config.trigger.split(" ");t.forEach(function(t){if("click"===t)n(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t);});else if(t!==he.MANUAL){var i=t===he.HOVER?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,r=t===he.HOVER?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;n(e.element).on(i,e.config.selector,function(t){return e._enter(t);}).on(r,e.config.selector,function(t){return e._leave(t);});}}),n(this.element).closest(".modal").on("hide.bs.modal",function(){e.element&&e.hide();}),this.config.selector?this.config=o({},this.config,{trigger:"manual",selector:""}):this._fixTitle();},i._fixTitle=function(){var e=_typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""));},i._enter=function(e,t){var i=this.constructor.DATA_KEY;(t=t||n(e.currentTarget).data(i))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),n(e.currentTarget).data(i,t)),e&&(t._activeTrigger["focusin"===e.type?he.FOCUS:he.HOVER]=!0),n(t.getTipElement()).hasClass(ue.SHOW)||t._hoverState===se.SHOW?t._hoverState=se.SHOW:(clearTimeout(t._timeout),t._hoverState=se.SHOW,t.config.delay&&t.config.delay.show?t._timeout=setTimeout(function(){t._hoverState===se.SHOW&&t.show();},t.config.delay.show):t.show());},i._leave=function(e,t){var i=this.constructor.DATA_KEY;(t=t||n(e.currentTarget).data(i))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),n(e.currentTarget).data(i,t)),e&&(t._activeTrigger["focusout"===e.type?he.FOCUS:he.HOVER]=!1),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=se.OUT,t.config.delay&&t.config.delay.hide?t._timeout=setTimeout(function(){t._hoverState===se.OUT&&t.hide();},t.config.delay.hide):t.hide());},i._isWithActiveTrigger=function(){for(var e in this._activeTrigger){if(this._activeTrigger[e])return!0;}return!1;},i._getConfig=function(e){return"number"==typeof(e=o({},this.constructor.Default,n(this.element).data(),"object"==_typeof(e)&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),d.typeCheckConfig(ne,e,this.constructor.DefaultType),e;},i._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config){this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);}return e;},i._cleanTipClass=function(){var e=n(this.getTipElement()),t=e.attr("class").match(re);null!==t&&t.length&&e.removeClass(t.join(""));},i._handlePopperPlacementChange=function(e){var t=e.instance;this.tip=t.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement));},i._fixTransition=function(){var e=this.getTipElement(),t=this.config.animation;null===e.getAttribute("x-placement")&&(n(e).removeClass(ue.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=t);},e._jQueryInterface=function(t){return this.each(function(){var i=n(this).data("bs.tooltip"),r="object"==_typeof(t)&&t;if((i||!/dispose|hide/.test(t))&&(i||(i=new e(this,r),n(this).data("bs.tooltip",i)),"string"==typeof t)){if(void 0===i[t])throw new TypeError('No method named "'+t+'"');i[t]();}});},r(e,null,[{key:"VERSION",get:function get(){return"4.2.1";}},{key:"Default",get:function get(){return le;}},{key:"NAME",get:function get(){return ne;}},{key:"DATA_KEY",get:function get(){return"bs.tooltip";}},{key:"Event",get:function get(){return de;}},{key:"EVENT_KEY",get:function get(){return".bs.tooltip";}},{key:"DefaultType",get:function get(){return ae;}}]),e;}();n.fn.tooltip=pe._jQueryInterface,n.fn.tooltip.Constructor=pe,n.fn.tooltip.noConflict=function(){return n.fn.tooltip=ie,pe._jQueryInterface;};var fe="popover",me=n.fn.popover,ge=new RegExp("(^|\\s)bs-popover\\S+","g"),_e=o({},pe.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),ye=o({},pe.DefaultType,{content:"(string|element|function)"}),ve={FADE:"fade",SHOW:"show"},Me={TITLE:".popover-header",CONTENT:".popover-body"},be={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},we=function(e){var t,i;function a(){return e.apply(this,arguments)||this;}i=e,(t=a).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var o=a.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent();},o.addAttachmentClass=function(e){n(this.getTipElement()).addClass("bs-popover-"+e);},o.getTipElement=function(){return this.tip=this.tip||n(this.config.template)[0],this.tip;},o.setContent=function(){var e=n(this.getTipElement());this.setElementContent(e.find(Me.TITLE),this.getTitle());var t=this._getContent();"function"==typeof t&&(t=t.call(this.element)),this.setElementContent(e.find(Me.CONTENT),t),e.removeClass(ve.FADE+" "+ve.SHOW);},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content;},o._cleanTipClass=function(){var e=n(this.getTipElement()),t=e.attr("class").match(ge);null!==t&&t.length>0&&e.removeClass(t.join(""));},a._jQueryInterface=function(e){return this.each(function(){var t=n(this).data("bs.popover"),i="object"==_typeof(e)?e:null;if((t||!/dispose|hide/.test(e))&&(t||(t=new a(this,i),n(this).data("bs.popover",t)),"string"==typeof e)){if(void 0===t[e])throw new TypeError('No method named "'+e+'"');t[e]();}});},r(a,null,[{key:"VERSION",get:function get(){return"4.2.1";}},{key:"Default",get:function get(){return _e;}},{key:"NAME",get:function get(){return fe;}},{key:"DATA_KEY",get:function get(){return"bs.popover";}},{key:"Event",get:function get(){return be;}},{key:"EVENT_KEY",get:function get(){return".bs.popover";}},{key:"DefaultType",get:function get(){return ye;}}]),a;}(pe);n.fn.popover=we._jQueryInterface,n.fn.popover.Constructor=we,n.fn.popover.noConflict=function(){return n.fn.popover=me,we._jQueryInterface;};var Le="scrollspy",De=n.fn[Le],Te={offset:10,method:"auto",target:""},ke={offset:"number",method:"string",target:"(string|element)"},Se={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},xe={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},Ye={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},Ee={OFFSET:"offset",POSITION:"position"},Ce=function(){function e(e,t){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(t),this._selector=this._config.target+" "+Ye.NAV_LINKS+","+this._config.target+" "+Ye.LIST_ITEMS+","+this._config.target+" "+Ye.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,n(this._scrollElement).on(Se.SCROLL,function(e){return i._process(e);}),this.refresh(),this._process();}var t=e.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?Ee.OFFSET:Ee.POSITION,i="auto"===this._config.method?t:this._config.method,r=i===Ee.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var a=[].slice.call(document.querySelectorAll(this._selector));a.map(function(e){var t,a=d.getSelectorFromElement(e);if(a&&(t=document.querySelector(a)),t){var o=t.getBoundingClientRect();if(o.width||o.height)return[n(t)[i]().top+r,a];}return null;}).filter(function(e){return e;}).sort(function(e,t){return e[0]-t[0];}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1]);});},t.dispose=function(){n.removeData(this._element,"bs.scrollspy"),n(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null;},t._getConfig=function(e){if("string"!=typeof(e=o({},Te,"object"==_typeof(e)&&e?e:{})).target){var t=n(e.target).attr("id");t||(t=d.getUID(Le),n(e.target).attr("id",t)),e.target="#"+t;}return d.typeCheckConfig(Le,e,ke),e;},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop;},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height;},t._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i);}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var r=this._offsets.length,a=r;a--;){var o=this._activeTarget!==this._targets[a]&&e>=this._offsets[a]&&(void 0===this._offsets[a+1]||e<this._offsets[a+1]);o&&this._activate(this._targets[a]);}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]';}),i=n([].slice.call(document.querySelectorAll(t.join(","))));i.hasClass(xe.DROPDOWN_ITEM)?(i.closest(Ye.DROPDOWN).find(Ye.DROPDOWN_TOGGLE).addClass(xe.ACTIVE),i.addClass(xe.ACTIVE)):(i.addClass(xe.ACTIVE),i.parents(Ye.NAV_LIST_GROUP).prev(Ye.NAV_LINKS+", "+Ye.LIST_ITEMS).addClass(xe.ACTIVE),i.parents(Ye.NAV_LIST_GROUP).prev(Ye.NAV_ITEMS).children(Ye.NAV_LINKS).addClass(xe.ACTIVE)),n(this._scrollElement).trigger(Se.ACTIVATE,{relatedTarget:e});},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(e){return e.classList.contains(xe.ACTIVE);}).forEach(function(e){return e.classList.remove(xe.ACTIVE);});},e._jQueryInterface=function(t){return this.each(function(){var i=n(this).data("bs.scrollspy"),r="object"==_typeof(t)&&t;if(i||(i=new e(this,r),n(this).data("bs.scrollspy",i)),"string"==typeof t){if(void 0===i[t])throw new TypeError('No method named "'+t+'"');i[t]();}});},r(e,null,[{key:"VERSION",get:function get(){return"4.2.1";}},{key:"Default",get:function get(){return Te;}}]),e;}();n(window).on(Se.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(Ye.DATA_SPY)),t=e.length,i=t;i--;){var r=n(e[i]);Ce._jQueryInterface.call(r,r.data());}}),n.fn[Le]=Ce._jQueryInterface,n.fn[Le].Constructor=Ce,n.fn[Le].noConflict=function(){return n.fn[Le]=De,Ce._jQueryInterface;};var He=n.fn.tab,Pe={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},Oe={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},Ae={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",ACTIVE_UL:"> li > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},Ie=function(){function e(e){this._element=e;}var t=e.prototype;return t.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&n(this._element).hasClass(Oe.ACTIVE)||n(this._element).hasClass(Oe.DISABLED))){var t,i,r=n(this._element).closest(Ae.NAV_LIST_GROUP)[0],a=d.getSelectorFromElement(this._element);if(r){var o="UL"===r.nodeName||"OL"===r.nodeName?Ae.ACTIVE_UL:Ae.ACTIVE;i=(i=n.makeArray(n(r).find(o)))[i.length-1];}var l=n.Event(Pe.HIDE,{relatedTarget:this._element}),s=n.Event(Pe.SHOW,{relatedTarget:i});if(i&&n(i).trigger(l),n(this._element).trigger(s),!s.isDefaultPrevented()&&!l.isDefaultPrevented()){a&&(t=document.querySelector(a)),this._activate(this._element,r);var u=function u(){var t=n.Event(Pe.HIDDEN,{relatedTarget:e._element}),r=n.Event(Pe.SHOWN,{relatedTarget:i});n(i).trigger(t),n(e._element).trigger(r);};t?this._activate(t,t.parentNode,u):u();}}},t.dispose=function(){n.removeData(this._element,"bs.tab"),this._element=null;},t._activate=function(e,t,i){var r=this,a=!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?n(t).children(Ae.ACTIVE):n(t).find(Ae.ACTIVE_UL),o=a[0],l=i&&o&&n(o).hasClass(Oe.FADE),s=function s(){return r._transitionComplete(e,o,i);};if(o&&l){var u=d.getTransitionDurationFromElement(o);n(o).removeClass(Oe.SHOW).one(d.TRANSITION_END,s).emulateTransitionEnd(u);}else s();},t._transitionComplete=function(e,t,i){if(t){n(t).removeClass(Oe.ACTIVE);var r=n(t.parentNode).find(Ae.DROPDOWN_ACTIVE_CHILD)[0];r&&n(r).removeClass(Oe.ACTIVE),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1);}if(n(e).addClass(Oe.ACTIVE),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),d.reflow(e),n(e).addClass(Oe.SHOW),e.parentNode&&n(e.parentNode).hasClass(Oe.DROPDOWN_MENU)){var a=n(e).closest(Ae.DROPDOWN)[0];if(a){var o=[].slice.call(a.querySelectorAll(Ae.DROPDOWN_TOGGLE));n(o).addClass(Oe.ACTIVE);}e.setAttribute("aria-expanded",!0);}i&&i();},e._jQueryInterface=function(t){return this.each(function(){var i=n(this),r=i.data("bs.tab");if(r||(r=new e(this),i.data("bs.tab",r)),"string"==typeof t){if(void 0===r[t])throw new TypeError('No method named "'+t+'"');r[t]();}});},r(e,null,[{key:"VERSION",get:function get(){return"4.2.1";}}]),e;}();n(document).on(Pe.CLICK_DATA_API,Ae.DATA_TOGGLE,function(e){e.preventDefault(),Ie._jQueryInterface.call(n(this),"show");}),n.fn.tab=Ie._jQueryInterface,n.fn.tab.Constructor=Ie,n.fn.tab.noConflict=function(){return n.fn.tab=He,Ie._jQueryInterface;};var Re=n.fn.toast,je={CLICK_DISMISS:"click.dismiss.bs.toast",HIDE:"hide.bs.toast",HIDDEN:"hidden.bs.toast",SHOW:"show.bs.toast",SHOWN:"shown.bs.toast"},Fe={FADE:"fade",HIDE:"hide",SHOW:"show",SHOWING:"showing"},Ne={animation:"boolean",autohide:"boolean",delay:"number"},We={animation:!0,autohide:!0,delay:500},ze={DATA_DISMISS:'[data-dismiss="toast"]'},Be=function(){function e(e,t){this._element=e,this._config=this._getConfig(t),this._timeout=null,this._setListeners();}var t=e.prototype;return t.show=function(){var e=this;n(this._element).trigger(je.SHOW),this._config.animation&&this._element.classList.add(Fe.FADE);var t=function t(){e._element.classList.remove(Fe.SHOWING),e._element.classList.add(Fe.SHOW),n(e._element).trigger(je.SHOWN),e._config.autohide&&e.hide();};if(this._element.classList.remove(Fe.HIDE),this._element.classList.add(Fe.SHOWING),this._config.animation){var i=d.getTransitionDurationFromElement(this._element);n(this._element).one(d.TRANSITION_END,t).emulateTransitionEnd(i);}else t();},t.hide=function(e){var t=this;this._element.classList.contains(Fe.SHOW)&&(n(this._element).trigger(je.HIDE),e?this._close():this._timeout=setTimeout(function(){t._close();},this._config.delay));},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Fe.SHOW)&&this._element.classList.remove(Fe.SHOW),n(this._element).off(je.CLICK_DISMISS),n.removeData(this._element,"bs.toast"),this._element=null,this._config=null;},t._getConfig=function(e){return e=o({},We,n(this._element).data(),"object"==_typeof(e)&&e?e:{}),d.typeCheckConfig("toast",e,this.constructor.DefaultType),e;},t._setListeners=function(){var e=this;n(this._element).on(je.CLICK_DISMISS,ze.DATA_DISMISS,function(){return e.hide(!0);});},t._close=function(){var e=this,t=function t(){e._element.classList.add(Fe.HIDE),n(e._element).trigger(je.HIDDEN);};if(this._element.classList.remove(Fe.SHOW),this._config.animation){var i=d.getTransitionDurationFromElement(this._element);n(this._element).one(d.TRANSITION_END,t).emulateTransitionEnd(i);}else t();},e._jQueryInterface=function(t){return this.each(function(){var i=n(this),r=i.data("bs.toast"),a="object"==_typeof(t)&&t;if(r||(r=new e(this,a),i.data("bs.toast",r)),"string"==typeof t){if(void 0===r[t])throw new TypeError('No method named "'+t+'"');r[t](this);}});},r(e,null,[{key:"VERSION",get:function get(){return"4.2.1";}},{key:"DefaultType",get:function get(){return Ne;}}]),e;}();n.fn.toast=Be._jQueryInterface,n.fn.toast.Constructor=Be,n.fn.toast.noConflict=function(){return n.fn.toast=Re,Be._jQueryInterface;},function(){if(void 0===n)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=n.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");}(),e.Util=d,e.Alert=p,e.Button=y,e.Carousel=Y,e.Collapse=j,e.Dropdown=q,e.Modal=te,e.Popover=we,e.Scrollspy=Ce,e.Tab=Ie,e.Toast=Be,e.Tooltip=pe,Object.defineProperty(e,"__esModule",{value:!0});}(t,n(149),n(1));},function(e,t,n){"use strict";n.r(t),function(e){for(/**!
     * @fileOverview Kickass library to create and place poppers near their reference elements.
     * @version 1.14.6
     * @license
     * Copyright (c) 2016 Federico Zivolo and contributors
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     */var n="undefined"!=typeof window&&"undefined"!=typeof document,i=["Edge","Trident","Firefox"],r=0,a=0;a<i.length;a+=1){if(n&&navigator.userAgent.indexOf(i[a])>=0){r=1;break;}}var o=n&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e();}));};}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e();},r));};};function l(e){return e&&"[object Function]"==={}.toString.call(e);}function s(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n;}function d(e){return"HTML"===e.nodeName?e:e.parentNode||e.host;}function u(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body;}var t=s(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return /(auto|scroll|overlay)/.test(n+r+i)?e:u(d(e));}var c=n&&!(!window.MSInputMethodContext||!document.documentMode),h=n&&/MSIE 10/.test(navigator.userAgent);function p(e){return 11===e?c:10===e?h:c||h;}function f(e){if(!e)return document.documentElement;for(var t=p(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;){n=(e=e.nextElementSibling).offsetParent;}var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===s(n,"position")?f(n):n:e?e.ownerDocument.documentElement:document.documentElement;}function m(e){return null!==e.parentNode?m(e.parentNode):e;}function g(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,r=n?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(r,0);var o,l,s=a.commonAncestorContainer;if(e!==s&&t!==s||i.contains(r))return"BODY"===(l=(o=s).nodeName)||"HTML"!==l&&f(o.firstElementChild)!==o?f(s):s;var d=m(e);return d.host?g(d.host,t):g(e,m(t).host);}function _(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var i=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||i)[t];}return e[t];}function y(e,t){var n="x"===t?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+i+"Width"],10);}function v(e,t,n,i){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],p(10)?parseInt(n["offset"+e])+parseInt(i["margin"+("Height"===e?"Top":"Left")])+parseInt(i["margin"+("Height"===e?"Bottom":"Right")]):0);}function M(e){var t=e.body,n=e.documentElement,i=p(10)&&getComputedStyle(n);return{height:v("Height",t,n,i),width:v("Width",t,n,i)};}var b=function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function");},w=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t;};}(),L=function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;},D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n){Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);}}return e;};function T(e){return D({},e,{right:e.left+e.width,bottom:e.top+e.height});}function k(e){var t={};try{if(p(10)){t=e.getBoundingClientRect();var n=_(e,"top"),i=_(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i;}else t=e.getBoundingClientRect();}catch(e){}var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},a="HTML"===e.nodeName?M(e.ownerDocument):{},o=a.width||e.clientWidth||r.right-r.left,l=a.height||e.clientHeight||r.bottom-r.top,d=e.offsetWidth-o,u=e.offsetHeight-l;if(d||u){var c=s(e);d-=y(c,"x"),u-=y(c,"y"),r.width-=d,r.height-=u;}return T(r);}function S(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=p(10),r="HTML"===t.nodeName,a=k(e),o=k(t),l=u(e),d=s(t),c=parseFloat(d.borderTopWidth,10),h=parseFloat(d.borderLeftWidth,10);n&&r&&(o.top=Math.max(o.top,0),o.left=Math.max(o.left,0));var f=T({top:a.top-o.top-c,left:a.left-o.left-h,width:a.width,height:a.height});if(f.marginTop=0,f.marginLeft=0,!i&&r){var m=parseFloat(d.marginTop,10),g=parseFloat(d.marginLeft,10);f.top-=c-m,f.bottom-=c-m,f.left-=h-g,f.right-=h-g,f.marginTop=m,f.marginLeft=g;}return(i&&!n?t.contains(l):t===l&&"BODY"!==l.nodeName)&&(f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=_(t,"top"),r=_(t,"left"),a=n?-1:1;return e.top+=i*a,e.bottom+=i*a,e.left+=r*a,e.right+=r*a,e;}(f,t)),f;}function x(e){if(!e||!e.parentElement||p())return document.documentElement;for(var t=e.parentElement;t&&"none"===s(t,"transform");){t=t.parentElement;}return t||document.documentElement;}function Y(e,t,n,i){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a={top:0,left:0},o=r?x(e):g(e,t);if("viewport"===i)a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,i=S(e,n),r=Math.max(n.clientWidth,window.innerWidth||0),a=Math.max(n.clientHeight,window.innerHeight||0),o=t?0:_(n),l=t?0:_(n,"left");return T({top:o-i.top+i.marginTop,left:l-i.left+i.marginLeft,width:r,height:a});}(o,r);else{var l=void 0;"scrollParent"===i?"BODY"===(l=u(d(t))).nodeName&&(l=e.ownerDocument.documentElement):l="window"===i?e.ownerDocument.documentElement:i;var c=S(l,o,r);if("HTML"!==l.nodeName||function e(t){var n=t.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===s(t,"position")||e(d(t)));}(o))a=c;else{var h=M(e.ownerDocument),p=h.height,f=h.width;a.top+=c.top-c.marginTop,a.bottom=p+c.top,a.left+=c.left-c.marginLeft,a.right=f+c.left;}}var m="number"==typeof(n=n||0);return a.left+=m?n:n.left||0,a.top+=m?n:n.top||0,a.right-=m?n:n.right||0,a.bottom-=m?n:n.bottom||0,a;}function E(e,t,n,i,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var o=Y(n,i,a,r),l={top:{width:o.width,height:t.top-o.top},right:{width:o.right-t.right,height:o.height},bottom:{width:o.width,height:o.bottom-t.bottom},left:{width:t.left-o.left,height:o.height}},s=Object.keys(l).map(function(e){return D({key:e},l[e],{area:(t=l[e],t.width*t.height)});var t;}).sort(function(e,t){return t.area-e.area;}),d=s.filter(function(e){var t=e.width,i=e.height;return t>=n.clientWidth&&i>=n.clientHeight;}),u=d.length>0?d[0].key:s[0].key,c=e.split("-")[1];return u+(c?"-"+c:"");}function C(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return S(n,i?x(t):g(t,n),i);}function H(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),i=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+i,height:e.offsetHeight+n};}function P(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e];});}function O(e,t,n){n=n.split("-")[0];var i=H(e),r={width:i.width,height:i.height},a=-1!==["right","left"].indexOf(n),o=a?"top":"left",l=a?"left":"top",s=a?"height":"width",d=a?"width":"height";return r[o]=t[o]+t[s]/2-i[s]/2,r[l]=n===l?t[l]-i[d]:t[P(l)],r;}function A(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0];}function I(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n;});var i=A(e,function(e){return e[t]===n;});return e.indexOf(i);}(e,"name",n))).forEach(function(e){e["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e["function"]||e.fn;e.enabled&&l(n)&&(t.offsets.popper=T(t.offsets.popper),t.offsets.reference=T(t.offsets.reference),t=n(t,e));}),t;}function R(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t;});}function j(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var r=t[i],a=r?""+r+n:e;if(void 0!==document.body.style[a])return a;}return null;}function F(e){var t=e.ownerDocument;return t?t.defaultView:window;}function N(e,t,n,i){n.updateBound=i,F(e).addEventListener("resize",n.updateBound,{passive:!0});var r=u(e);return function e(t,n,i,r){var a="BODY"===t.nodeName,o=a?t.ownerDocument.defaultView:t;o.addEventListener(n,i,{passive:!0}),a||e(u(o.parentNode),n,i,r),r.push(o);}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n;}function W(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,F(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound);}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t));}function z(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e);}function B(e,t){Object.keys(t).forEach(function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&z(t[n])&&(i="px"),e.style[n]=t[n]+i;});}var V=n&&/Firefox/i.test(navigator.userAgent);function G(e,t,n){var i=A(e,function(e){return e.name===t;}),r=!!i&&e.some(function(e){return e.name===n&&e.enabled&&e.order<i.order;});if(!r){var a="`"+t+"`",o="`"+n+"`";console.warn(o+" modifier is required by "+a+" modifier in order to work, be sure to include it before "+a+"!");}return r;}var U=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Z=U.slice(3);function q(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Z.indexOf(e),i=Z.slice(n+1).concat(Z.slice(0,n));return t?i.reverse():i;}var X={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function J(e,t,n,i){var r=[0,0],a=-1!==["right","left"].indexOf(i),o=e.split(/(\+|\-)/).map(function(e){return e.trim();}),l=o.indexOf(A(o,function(e){return-1!==e.search(/,|\s/);}));o[l]&&-1===o[l].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,d=-1!==l?[o.slice(0,l).concat([o[l].split(s)[0]]),[o[l].split(s)[1]].concat(o.slice(l+1))]:[o];return(d=d.map(function(e,i){var r=(1===i?!a:a)?"height":"width",o=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,o=!0,e):o?(e[e.length-1]+=t,o=!1,e):e.concat(t);},[]).map(function(e){return function(e,t,n,i){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),a=+r[1],o=r[2];if(!a)return e;if(0===o.indexOf("%")){var l=void 0;switch(o){case"%p":l=n;break;case"%":case"%r":default:l=i;}return T(l)[t]/100*a;}if("vh"===o||"vw"===o)return("vh"===o?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*a;return a;}(e,r,t,n);});})).forEach(function(e,t){e.forEach(function(n,i){z(n)&&(r[t]+=n*("-"===e[i-1]?-1:1));});}),r;}var $={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function onCreate(){},onUpdate:function onUpdate(){},modifiers:{shift:{order:100,enabled:!0,fn:function fn(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];if(i){var r=e.offsets,a=r.reference,o=r.popper,l=-1!==["bottom","top"].indexOf(n),s=l?"left":"top",d=l?"width":"height",u={start:L({},s,a[s]),end:L({},s,a[s]+a[d]-o[d])};e.offsets.popper=D({},o,u[i]);}return e;}},offset:{order:200,enabled:!0,fn:function fn(e,t){var n=t.offset,i=e.placement,r=e.offsets,a=r.popper,o=r.reference,l=i.split("-")[0],s=void 0;return s=z(+n)?[+n,0]:J(n,a,o,l),"left"===l?(a.top+=s[0],a.left-=s[1]):"right"===l?(a.top+=s[0],a.left+=s[1]):"top"===l?(a.left+=s[0],a.top-=s[1]):"bottom"===l&&(a.left+=s[0],a.top+=s[1]),e.popper=a,e;},offset:0},preventOverflow:{order:300,enabled:!0,fn:function fn(e,t){var n=t.boundariesElement||f(e.instance.popper);e.instance.reference===n&&(n=f(n));var i=j("transform"),r=e.instance.popper.style,a=r.top,o=r.left,l=r[i];r.top="",r.left="",r[i]="";var s=Y(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);r.top=a,r.left=o,r[i]=l,t.boundaries=s;var d=t.priority,u=e.offsets.popper,c={primary:function primary(e){var n=u[e];return u[e]<s[e]&&!t.escapeWithReference&&(n=Math.max(u[e],s[e])),L({},e,n);},secondary:function secondary(e){var n="right"===e?"left":"top",i=u[n];return u[e]>s[e]&&!t.escapeWithReference&&(i=Math.min(u[n],s[e]-("right"===e?u.width:u.height))),L({},n,i);}};return d.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";u=D({},u,c[t](e));}),e.offsets.popper=u,e;},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function fn(e){var t=e.offsets,n=t.popper,i=t.reference,r=e.placement.split("-")[0],a=Math.floor,o=-1!==["top","bottom"].indexOf(r),l=o?"right":"bottom",s=o?"left":"top",d=o?"width":"height";return n[l]<a(i[s])&&(e.offsets.popper[s]=a(i[s])-n[d]),n[s]>a(i[l])&&(e.offsets.popper[s]=a(i[l])),e;}},arrow:{order:500,enabled:!0,fn:function fn(e,t){var n;if(!G(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e;}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],a=e.offsets,o=a.popper,l=a.reference,d=-1!==["left","right"].indexOf(r),u=d?"height":"width",c=d?"Top":"Left",h=c.toLowerCase(),p=d?"left":"top",f=d?"bottom":"right",m=H(i)[u];l[f]-m<o[h]&&(e.offsets.popper[h]-=o[h]-(l[f]-m)),l[h]+m>o[f]&&(e.offsets.popper[h]+=l[h]+m-o[f]),e.offsets.popper=T(e.offsets.popper);var g=l[h]+l[u]/2-m/2,_=s(e.instance.popper),y=parseFloat(_["margin"+c],10),v=parseFloat(_["border"+c+"Width"],10),M=g-e.offsets.popper[h]-y-v;return M=Math.max(Math.min(o[u]-m,M),0),e.arrowElement=i,e.offsets.arrow=(L(n={},h,Math.round(M)),L(n,p,""),n),e;},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function fn(e,t){if(R(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=Y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),i=e.placement.split("-")[0],r=P(i),a=e.placement.split("-")[1]||"",o=[];switch(t.behavior){case X.FLIP:o=[i,r];break;case X.CLOCKWISE:o=q(i);break;case X.COUNTERCLOCKWISE:o=q(i,!0);break;default:o=t.behavior;}return o.forEach(function(l,s){if(i!==l||o.length===s+1)return e;i=e.placement.split("-")[0],r=P(i);var d=e.offsets.popper,u=e.offsets.reference,c=Math.floor,h="left"===i&&c(d.right)>c(u.left)||"right"===i&&c(d.left)<c(u.right)||"top"===i&&c(d.bottom)>c(u.top)||"bottom"===i&&c(d.top)<c(u.bottom),p=c(d.left)<c(n.left),f=c(d.right)>c(n.right),m=c(d.top)<c(n.top),g=c(d.bottom)>c(n.bottom),_="left"===i&&p||"right"===i&&f||"top"===i&&m||"bottom"===i&&g,y=-1!==["top","bottom"].indexOf(i),v=!!t.flipVariations&&(y&&"start"===a&&p||y&&"end"===a&&f||!y&&"start"===a&&m||!y&&"end"===a&&g);(h||_||v)&&(e.flipped=!0,(h||_)&&(i=o[s+1]),v&&(a=function(e){return"end"===e?"start":"start"===e?"end":e;}(a)),e.placement=i+(a?"-"+a:""),e.offsets.popper=D({},e.offsets.popper,O(e.instance.popper,e.offsets.reference,e.placement)),e=I(e.instance.modifiers,e,"flip"));}),e;},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function fn(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,r=i.popper,a=i.reference,o=-1!==["left","right"].indexOf(n),l=-1===["top","left"].indexOf(n);return r[o?"left":"top"]=a[n]-(l?r[o?"width":"height"]:0),e.placement=P(t),e.offsets.popper=T(r),e;}},hide:{order:800,enabled:!0,fn:function fn(e){if(!G(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=A(e.instance.modifiers,function(e){return"preventOverflow"===e.name;}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]="";}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1;}return e;}},computeStyle:{order:850,enabled:!0,fn:function fn(e,t){var n=t.x,i=t.y,r=e.offsets.popper,a=A(e.instance.modifiers,function(e){return"applyStyle"===e.name;}).gpuAcceleration;void 0!==a&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var o=void 0!==a?a:t.gpuAcceleration,l=f(e.instance.popper),s=k(l),d={position:r.position},u=function(e,t){var n=e.offsets,i=n.popper,r=n.reference,a=-1!==["left","right"].indexOf(e.placement),o=-1!==e.placement.indexOf("-"),l=r.width%2==i.width%2,s=r.width%2==1&&i.width%2==1,d=function d(e){return e;},u=t?a||o||l?Math.round:Math.floor:d,c=t?Math.round:d;return{left:u(s&&!o&&t?i.left-1:i.left),top:c(i.top),bottom:c(i.bottom),right:u(i.right)};}(e,window.devicePixelRatio<2||!V),c="bottom"===n?"top":"bottom",h="right"===i?"left":"right",p=j("transform"),m=void 0,g=void 0;if(g="bottom"===c?"HTML"===l.nodeName?-l.clientHeight+u.bottom:-s.height+u.bottom:u.top,m="right"===h?"HTML"===l.nodeName?-l.clientWidth+u.right:-s.width+u.right:u.left,o&&p)d[p]="translate3d("+m+"px, "+g+"px, 0)",d[c]=0,d[h]=0,d.willChange="transform";else{var _="bottom"===c?-1:1,y="right"===h?-1:1;d[c]=g*_,d[h]=m*y,d.willChange=c+", "+h;}var v={"x-placement":e.placement};return e.attributes=D({},v,e.attributes),e.styles=D({},d,e.styles),e.arrowStyles=D({},e.offsets.arrow,e.arrowStyles),e;},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function fn(e){var t,n;return B(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e);}),e.arrowElement&&Object.keys(e.arrowStyles).length&&B(e.arrowElement,e.arrowStyles),e;},onLoad:function onLoad(e,t,n,i,r){var a=C(r,t,e,n.positionFixed),o=E(n.placement,a,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",o),B(t,{position:n.positionFixed?"fixed":"absolute"}),n;},gpuAcceleration:void 0}}},K=function(){function e(t,n){var i=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};b(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(i.update);},this.update=o(this.update.bind(this)),this.options=D({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(D({},e.Defaults.modifiers,r.modifiers)).forEach(function(t){i.options.modifiers[t]=D({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{});}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return D({name:e},i.options.modifiers[e]);}).sort(function(e,t){return e.order-t.order;}),this.modifiers.forEach(function(e){e.enabled&&l(e.onLoad)&&e.onLoad(i.reference,i.popper,i.options,e,i.state);}),this.update();var a=this.options.eventsEnabled;a&&this.enableEventListeners(),this.state.eventsEnabled=a;}return w(e,[{key:"update",value:function value(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=C(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=E(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=O(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=I(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e));}}.call(this);}},{key:"destroy",value:function value(){return function(){return this.state.isDestroyed=!0,R(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[j("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this;}.call(this);}},{key:"enableEventListeners",value:function value(){return function(){this.state.eventsEnabled||(this.state=N(this.reference,this.options,this.state,this.scheduleUpdate));}.call(this);}},{key:"disableEventListeners",value:function value(){return W.call(this);}}]),e;}();K.Utils=("undefined"!=typeof window?window:e).PopperUtils,K.placements=U,K.Defaults=$,t["default"]=K;}.call(this,n(150));},function(e,t){var n;n=function(){return this;}();try{n=n||new Function("return this")();}catch(e){"object"==(typeof window==="undefined"?"undefined":_typeof(window))&&(n=window);}e.exports=n;},function(e,t,n){/*!
    * metismenu https://github.com/onokumus/metismenu#readme
    * A jQuery menu plugin
    * @version 3.0.3
    * @author Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
    * @license: MIT
    */e.exports=function(e){"use strict";function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e;}function n(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{},r=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable;}))),r.forEach(function(n){t(e,n,i[n]);});}return e;}var i=function(e){var t="transitionend",n={TRANSITION_END:"mmTransitionEnd",triggerTransitionEnd:function triggerTransitionEnd(n){e(n).trigger(t);},supportsTransitionEnd:function supportsTransitionEnd(){return Boolean(t);}};function i(t){var i=this,r=!1;return e(this).one(n.TRANSITION_END,function(){r=!0;}),setTimeout(function(){r||n.triggerTransitionEnd(i);},t),this;}return e.fn.mmEmulateTransitionEnd=i,e.event.special[n.TRANSITION_END]={bindType:t,delegateType:t,handle:function handle(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments);}},n;}(e=e&&e.hasOwnProperty("default")?e["default"]:e),r="metisMenu",a=e.fn[r],o={toggle:!0,preventDefault:!0,triggerElement:"a",parentTrigger:"li",subMenu:"ul"},l={SHOW:"show.metisMenu",SHOWN:"shown.metisMenu",HIDE:"hide.metisMenu",HIDDEN:"hidden.metisMenu",CLICK_DATA_API:"click.metisMenu.data-api"},s={METIS:"metismenu",ACTIVE:"mm-active",SHOW:"mm-show",COLLAPSE:"mm-collapse",COLLAPSING:"mm-collapsing",COLLAPSED:"mm-collapsed"},d=function(){function t(e,t){this.element=e,this.config=n({},o,t),this.transitioning=null,this.init();}var r=t.prototype;return r.init=function(){var t=this,n=this.config;e(this.element).addClass(s.METIS),e(this.element).find(n.parentTrigger+"."+s.ACTIVE).children(n.triggerElement).attr("aria-expanded","true"),e(this.element).find(n.parentTrigger+"."+s.ACTIVE).parents(n.parentTrigger).addClass(s.ACTIVE),e(this.element).find(n.parentTrigger+"."+s.ACTIVE).parents(n.parentTrigger).children(n.triggerElement).attr("aria-expanded","true"),e(this.element).find(n.parentTrigger+"."+s.ACTIVE).has(n.subMenu).children(n.subMenu).addClass(s.COLLAPSE+" "+s.SHOW),e(this.element).find(n.parentTrigger).not("."+s.ACTIVE).has(n.subMenu).children(n.subMenu).addClass(s.COLLAPSE),e(this.element).find(n.parentTrigger).has(n.subMenu).children(n.triggerElement).on(l.CLICK_DATA_API,function(i){var r=e(this),a=r.parent(n.parentTrigger),o=a.siblings(n.parentTrigger).children(n.triggerElement),l=a.children(n.subMenu);n.preventDefault&&i.preventDefault(),"true"!==r.attr("aria-disabled")&&(a.hasClass(s.ACTIVE)?(r.attr("aria-expanded","false"),t.hide(l)):(t.show(l),r.attr("aria-expanded","true"),n.toggle&&o.attr("aria-expanded","false")),n.onTransitionStart&&n.onTransitionStart(i));});},r.show=function(t){var n=this;if(!this.transitioning&&!e(t).hasClass(s.COLLAPSING)){var r=e(t),a=e.Event(l.SHOW);if(r.trigger(a),!a.isDefaultPrevented()){if(r.parent(this.config.parentTrigger).addClass(s.ACTIVE),this.config.toggle){var o=r.parent(this.config.parentTrigger).siblings().children(this.config.subMenu+"."+s.SHOW);this.hide(o);}r.removeClass(s.COLLAPSE).addClass(s.COLLAPSING).height(0),this.setTransitioning(!0),r.height(t[0].scrollHeight).one(i.TRANSITION_END,function(){n.config&&n.element&&(r.removeClass(s.COLLAPSING).addClass(s.COLLAPSE+" "+s.SHOW).height(""),n.setTransitioning(!1),r.trigger(l.SHOWN));}).mmEmulateTransitionEnd(350);}}},r.hide=function(t){var n=this;if(!this.transitioning&&e(t).hasClass(s.SHOW)){var r=e(t),a=e.Event(l.HIDE);if(r.trigger(a),!a.isDefaultPrevented()){r.parent(this.config.parentTrigger).removeClass(s.ACTIVE),r.height(r.height())[0].offsetHeight,r.addClass(s.COLLAPSING).removeClass(s.COLLAPSE).removeClass(s.SHOW),this.setTransitioning(!0);var o=function o(){n.config&&n.element&&(n.transitioning&&n.config.onTransitionEnd&&n.config.onTransitionEnd(),n.setTransitioning(!1),r.trigger(l.HIDDEN),r.removeClass(s.COLLAPSING).addClass(s.COLLAPSE));};0===r.height()||"none"===r.css("display")?o():r.height(0).one(i.TRANSITION_END,o).mmEmulateTransitionEnd(350);}}},r.setTransitioning=function(e){this.transitioning=e;},r.dispose=function(){e.removeData(this.element,"metisMenu"),e(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"),this.transitioning=null,this.config=null,this.element=null;},t.jQueryInterface=function(i){return this.each(function(){var r=e(this),a=r.data("metisMenu"),l=n({},o,r.data(),"object"==_typeof(i)&&i?i:{});if(a||(a=new t(this,l),r.data("metisMenu",a)),"string"==typeof i){if(void 0===a[i])throw new Error('No method named "'+i+'"');a[i]();}});},t;}();return e.fn[r]=d.jQueryInterface,e.fn[r].Constructor=d,e.fn[r].noConflict=function(){return e.fn[r]=a,d.jQueryInterface;},d;}(n(1));},function(e,t,n){(function(e){e(document).ready(function(){e(".btn-open-options").click(function(){e(".ui-theme-settings").toggleClass("settings-open");}),e(".close-sidebar-btn").click(function(){var t=e(this).attr("data-class");e(".app-container").toggleClass(t);var n=e(this);n.hasClass("is-active")?n.removeClass("is-active"):n.addClass("is-active");}),e(".switch-container-class").on("click",function(){var t=e(this).attr("data-class");e(".app-container").toggleClass(t),e(this).parent().find(".switch-container-class").removeClass("active"),e(this).addClass("active");}),e(".switch-theme-class").on("click",function(){var t=e(this).attr("data-class");"body-tabs-line"==t&&(e(".app-container").removeClass("body-tabs-shadow"),e(".app-container").addClass(t)),"body-tabs-shadow"==t&&(e(".app-container").removeClass("body-tabs-line"),e(".app-container").addClass(t)),e(this).parent().find(".switch-theme-class").removeClass("active"),e(this).addClass("active");}),e(".switch-header-cs-class").on("click",function(){var t=e(this).attr("data-class");e(".switch-header-cs-class").removeClass("active"),e(this).addClass("active"),e(".app-header").attr("class","app-header"),e(".app-header").addClass("header-shadow "+t);}),e(".switch-sidebar-cs-class").on("click",function(){var t=e(this).attr("data-class");e(".switch-sidebar-cs-class").removeClass("active"),e(this).addClass("active"),e(".app-sidebar").attr("class","app-sidebar"),e(".app-sidebar").addClass("sidebar-shadow "+t);});});}).call(this,n(1));},function(e,t,n){"use strict";n.r(t),function(e){var t=n(4),i=n.n(t);e(document).ready(function(){e(function(){var t,n=-1,r=0;e("#closeButton").click(function(){e(this).is(":checked")?e("#addBehaviorOnToastCloseClick").prop("disabled",!1):(e("#addBehaviorOnToastCloseClick").prop("disabled",!0),e("#addBehaviorOnToastCloseClick").prop("checked",!1));}),e("#showtoast").click(function(){var a,o=e("#toastTypeGroup input:radio:checked").val(),l=e("#message").val(),s=e("#title").val()||"",d=e("#showDuration"),u=e("#hideDuration"),c=e("#timeOut"),h=e("#extendedTimeOut"),p=e("#showEasing"),f=e("#hideEasing"),m=e("#showMethod"),g=e("#hideMethod"),_=r++,y=e("#addClear").prop("checked");i.a.options={closeButton:e("#closeButton").prop("checked"),debug:e("#debugInfo").prop("checked"),newestOnTop:e("#newestOnTop").prop("checked"),progressBar:e("#progressBar").prop("checked"),rtl:e("#rtl").prop("checked"),positionClass:e("#positionGroup input:radio:checked").val()||"toast-top-right",preventDuplicates:e("#preventDuplicates").prop("checked"),onclick:null},e("#addBehaviorOnToastClick").prop("checked")&&(i.a.options.onclick=function(){alert("You can perform some custom action after a toast goes away");}),e("#addBehaviorOnToastCloseClick").prop("checked")&&(i.a.options.onCloseClick=function(){alert("You can perform some custom action when the close button is clicked");}),d.val().length&&(i.a.options.showDuration=parseInt(d.val())),u.val().length&&(i.a.options.hideDuration=parseInt(u.val())),c.val().length&&(i.a.options.timeOut=y?0:parseInt(c.val())),h.val().length&&(i.a.options.extendedTimeOut=y?0:parseInt(h.val())),p.val().length&&(i.a.options.showEasing=p.val()),f.val().length&&(i.a.options.hideEasing=f.val()),m.val().length&&(i.a.options.showMethod=m.val()),g.val().length&&(i.a.options.hideMethod=g.val()),y&&(l=function(e){return e=e||"Clear itself?",e+='<br /><br /><button type="button" class="btn clear">Yes</button>';}(l),i.a.options.tapToDismiss=!1),l||(++n===(a=["My name is Inigo Montoya. You killed my father. Prepare to die!",'<div><input class="input-small" value="textbox"/>&nbsp;<a href="http://johnpapa.net" target="_blank">This is a hyperlink</a></div><div><button type="button" id="okBtn" class="btn btn-primary">Close me</button><button type="button" id="surpriseBtn" class="btn" style="margin: 0 8px 0 8px">Surprise me</button></div>',"Are you the six fingered man?","Inconceivable!","I do not think that means what you think it means.","Have fun storming the castle!"]).length&&(n=0),l=a[n]),e("#toastrOptions").text('Command: toastr["'+o+'"]("'+l+(s?'", "'+s:"")+'")\n\ntoastr.options = '+JSON.stringify(i.a.options,null,2));var v=i.a[o](l,s);t=v,void 0!==v&&(v.find("#okBtn").length&&v.delegate("#okBtn","click",function(){alert("you clicked me. i was toast #"+_+". goodbye!"),v.remove();}),v.find("#surpriseBtn").length&&v.delegate("#surpriseBtn","click",function(){alert("Surprise! you clicked me. i was toast #"+_+". You could perform an action here.");}),v.find(".clear").length&&v.delegate(".clear","click",function(){i.a.clear(v,{force:!0});}));}),e("#clearlasttoast").click(function(){i.a.clear(t);}),e("#cleartoasts").click(function(){i.a.clear();});}),e(".show-toastr-example").click(function(){i.a.options={closeButton:!0,debug:!1,newestOnTop:!0,progressBar:!0,positionClass:"toast-bottom-center",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"},i.a.info("You don't have any new items in your calendar today!","Example Toastr");});});}.call(this,n(1));},function(e,t){e.exports=function(){throw new Error("define cannot be used indirect");};},function(e,t,n){"use strict";n.r(t),function(e){var t=n(13);e(document).ready(function(){setTimeout(function(){if(e(".scrollbar-container")[0]){e(".scrollbar-container").each(function(){new t.a(e(this)[0],{wheelSpeed:2,wheelPropagation:!1,minScrollbarLength:20});});new t.a(".scrollbar-sidebar",{wheelSpeed:2,wheelPropagation:!1,minScrollbarLength:20});}},1e3);});}.call(this,n(1));},function(e,t,n){"use strict";n.r(t),function(e){n(157);e(document).ready(function(){e("#calendar-list").fullCalendar({header:{left:"prev,next today",center:"title",right:"listDay,listWeek,month"},themeSystem:"bootstrap4",bootstrapFontAwesome:!0,views:{listDay:{buttonText:"list day"},listWeek:{buttonText:"list week"}},defaultView:"listWeek",defaultDate:"2018-03-12",navLinks:!0,editable:!0,eventLimit:!0,events:[{title:"All Day Event",start:"2018-03-01"},{title:"Long Event",start:"2018-03-07",end:"2018-03-10"},{id:999,title:"Repeating Event",start:"2018-03-09T16:00:00"},{id:999,title:"Repeating Event",start:"2018-03-16T16:00:00"},{title:"Conference",start:"2018-03-11",end:"2018-03-13"},{title:"Meeting",start:"2018-03-12T10:30:00",end:"2018-03-12T12:30:00"},{title:"Lunch",start:"2018-03-12T12:00:00"},{title:"Meeting",start:"2018-03-12T14:30:00"},{title:"Happy Hour",start:"2018-03-12T17:30:00"},{title:"Dinner",start:"2018-03-12T20:00:00"},{title:"Birthday Party",start:"2018-03-13T07:00:00"},{title:"Click for Google",url:"http://google.com/",start:"2018-03-28"}]}),e("#calendar").fullCalendar({header:{left:"prev,next today",center:"title",right:"month,basicWeek,basicDay"},themeSystem:"bootstrap4",bootstrapFontAwesome:!0,defaultDate:"2018-03-12",navLinks:!0,editable:!0,eventLimit:!0,events:[{title:"All Day Event",start:"2018-03-01"},{title:"Long Event",start:"2018-03-07",end:"2018-03-10"},{id:999,title:"Repeating Event",start:"2018-03-09T16:00:00"},{id:999,title:"Repeating Event",start:"2018-03-16T16:00:00"},{title:"Conference",start:"2018-03-11",end:"2018-03-13"},{title:"Meeting",start:"2018-03-12T10:30:00",end:"2018-03-12T12:30:00"},{title:"Lunch",start:"2018-03-12T12:00:00"},{title:"Meeting",start:"2018-03-12T14:30:00"},{title:"Happy Hour",start:"2018-03-12T17:30:00"},{title:"Dinner",start:"2018-03-12T20:00:00"},{title:"Birthday Party",start:"2018-03-13T07:00:00"},{title:"Click for Google",url:"http://google.com/",start:"2018-03-28"}]}),e("#calendar-bg-events").fullCalendar({header:{left:"prev,next today",center:"title",right:"month,agendaWeek,agendaDay,listMonth"},themeSystem:"bootstrap4",bootstrapFontAwesome:!0,defaultDate:"2018-03-12",navLinks:!0,businessHours:!0,editable:!0,events:[{title:"Business Lunch",start:"2018-03-03T13:00:00",constraint:"businessHours"},{title:"Meeting",start:"2018-03-13T11:00:00",constraint:"availableForMeeting",color:"#257e4a"},{title:"Conference",start:"2018-03-18",end:"2018-03-20"},{title:"Party",start:"2018-03-29T20:00:00"},{id:"availableForMeeting",start:"2018-03-11T10:00:00",end:"2018-03-11T16:00:00",rendering:"background"},{id:"availableForMeeting",start:"2018-03-13T10:00:00",end:"2018-03-13T16:00:00",rendering:"background"},{start:"2018-03-24",end:"2018-03-28",overlap:!1,rendering:"background",color:"var(--danger)"},{start:"2018-03-06",end:"2018-03-08",overlap:!1,rendering:"background",color:"var(--success)"}]});});}.call(this,n(1));},function(e,t,n){/*!
     * FullCalendar v3.10.0
     * Docs & License: https://fullcalendar.io/
     * (c) 2018 Adam Shaw

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/gaak/Documents/kuliah/ta/project/credit_scoring/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/gaak/Documents/kuliah/ta/project/credit_scoring/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });