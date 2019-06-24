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
/******/ 	__webpack_require__.p = "/codebase/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sources/myapp.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webix-jet/dist/es6/jet.js":
/*!************************************************!*\
  !*** ./node_modules/webix-jet/dist/es6/jet.js ***!
  \************************************************/
/*! exports provided: plugins, JetApp, JetView, HashRouter, StoreRouter, UrlRouter, EmptyRouter, SubRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugins", function() { return plugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JetApp", function() { return JetApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JetView", function() { return JetView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return HashRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreRouter", function() { return StoreRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlRouter", function() { return UrlRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyRouter", function() { return EmptyRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubRouter", function() { return SubRouter; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JetBase = function () {
    function JetBase(webix) {
        _classCallCheck(this, JetBase);

        this.webixJet = true;
        this.webix = webix;
        this._events = [];
        this._subs = {};
        this._data = {};
    }

    JetBase.prototype.getRoot = function getRoot() {
        return this._root;
    };

    JetBase.prototype.destructor = function destructor() {
        this._detachEvents();
        this._destroySubs();
        this._events = this._container = this.app = this._parent = this._root = null;
    };

    JetBase.prototype.setParam = function setParam(id, value, url) {
        if (this._data[id] !== value) {
            this._data[id] = value;
            this._segment.update(id, value, 0);
            if (url) {
                this.show(null);
            }
        }
    };

    JetBase.prototype.getParam = function getParam(id, parent) {
        var value = this._data[id];
        if (typeof value !== "undefined" || !parent) {
            return value;
        }
        var view = this.getParentView();
        if (view) {
            return view.getParam(id, parent);
        }
    };

    JetBase.prototype.getUrl = function getUrl() {
        return this._segment.suburl();
    };

    JetBase.prototype.getUrlString = function getUrlString() {
        return this._segment.toString();
    };

    JetBase.prototype.getParentView = function getParentView() {
        return this._parent;
    };

    JetBase.prototype.$$ = function $$(id) {
        if (typeof id === "string") {
            var root = this.getRoot();
            return root.queryView(function (obj) {
                return (obj.config.id === id || obj.config.localId === id) && obj.$scope === root.$scope;
            }, "self");
        } else {
            return id;
        }
    };

    JetBase.prototype.on = function on(obj, name, code) {
        var id = obj.attachEvent(name, code);
        this._events.push({ obj: obj, id: id });
        return id;
    };

    JetBase.prototype.contains = function contains(view) {
        for (var key in this._subs) {
            var kid = this._subs[key].view;
            if (kid === view || kid.contains(view)) {
                return true;
            }
        }
        return false;
    };

    JetBase.prototype.getSubView = function getSubView(name) {
        var sub = this.getSubViewInfo(name);
        if (sub) {
            return sub.subview.view;
        }
    };

    JetBase.prototype.getSubViewInfo = function getSubViewInfo(name) {
        var sub = this._subs[name || "default"];
        if (sub) {
            return { subview: sub, parent: this };
        }
        if (name === "_top") {
            this._subs[name] = { url: "", id: null, popup: true };
            return this.getSubViewInfo(name);
        }
        // when called from a child view, searches for nearest parent with subview
        if (this._parent) {
            return this._parent.getSubViewInfo(name);
        }
        return null;
    };

    JetBase.prototype._detachEvents = function _detachEvents() {
        var events = this._events;
        for (var i = events.length - 1; i >= 0; i--) {
            events[i].obj.detachEvent(events[i].id);
        }
    };

    JetBase.prototype._destroySubs = function _destroySubs() {
        // destroy sub views
        for (var key in this._subs) {
            var subView = this._subs[key].view;
            // it possible that subview was not loaded with any content yet
            // so check on null
            if (subView) {
                subView.destructor();
            }
        }
        // reset to prevent memory leaks
        this._subs = {};
    };

    JetBase.prototype._init_url_data = function _init_url_data() {
        var url = this._segment.current();
        this._data = {};
        this.webix.extend(this._data, url.params, true);
    };

    JetBase.prototype._getDefaultSub = function _getDefaultSub() {
        if (this._subs.default) {
            return this._subs.default;
        }
        for (var key in this._subs) {
            var sub = this._subs[key];
            if (!sub.branch && sub.view && key !== "_top") {
                var child = sub.view._getDefaultSub();
                if (child) {
                    return child;
                }
            }
        }
    };

    JetBase.prototype._routed_view = function _routed_view() {
        var parent = this.getParentView();
        if (!parent) {
            return true;
        }
        var sub = parent._getDefaultSub();
        if (!sub && sub !== this) {
            return false;
        }
        return parent._routed_view();
    };

    return JetBase;
}();

function parse(url) {
    // remove starting /
    if (url[0] === "/") {
        url = url.substr(1);
    }
    // split url by "/"
    var parts = url.split("/");
    var chunks = [];
    // for each page in url
    for (var i = 0; i < parts.length; i++) {
        var test = parts[i];
        var result = {};
        // detect params
        // support old 			some:a=b:c=d
        // and new notation		some?a=b&c=d
        var pos = test.indexOf(":");
        if (pos === -1) {
            pos = test.indexOf("?");
        }
        if (pos !== -1) {
            var params = test.substr(pos + 1).split(/[\:\?\&]/g);
            // create hash of named params
            for (var _iterator = params, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref;

                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }

                var param = _ref;

                var dchunk = param.split("=");
                result[dchunk[0]] = decodeURIComponent(dchunk[1]);
            }
        }
        // store parsed values
        chunks[i] = {
            page: pos > -1 ? test.substr(0, pos) : test,
            params: result,
            isNew: true
        };
    }
    // return array of page objects
    return chunks;
}
function url2str(stack) {
    var url = [];
    for (var _iterator2 = stack, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
        } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
        }

        var chunk = _ref2;

        url.push("/" + chunk.page);
        var params = obj2str(chunk.params);
        if (params) {
            url.push("?" + params);
        }
    }
    return url.join("");
}
function obj2str(obj) {
    var str = [];
    for (var key in obj) {
        if (str.length) {
            str.push("&");
        }
        str.push(key + "=" + encodeURIComponent(obj[key]));
    }
    return str.join("");
}

var Route = function () {
    function Route(route, index) {
        _classCallCheck(this, Route);

        this._next = 1;
        if (typeof route === "string") {
            this.route = {
                url: parse(route),
                path: route
            };
        } else {
            this.route = route;
        }
        this.index = index;
    }

    Route.prototype.current = function current() {
        return this.route.url[this.index];
    };

    Route.prototype.next = function next() {
        return this.route.url[this.index + this._next];
    };

    Route.prototype.suburl = function suburl() {
        return this.route.url.slice(this.index);
    };

    Route.prototype.shift = function shift() {
        return new Route(this.route, this.index + this._next);
    };

    Route.prototype.refresh = function refresh() {
        var url = this.route.url;
        for (var i = this.index + 1; i < url.length; i++) {
            url[i].isNew = true;
        }
    };

    Route.prototype.toString = function toString() {
        var str = url2str(this.suburl());
        return str ? str.substr(1) : "";
    };

    Route.prototype._join = function _join(path, kids) {
        var url = this.route.url;
        if (path === null) {
            // change of parameters, route elements are not affected
            return url;
        }
        var old = this.route.url;
        url = old.slice(0, this.index + (kids ? this._next : 0));
        if (path) {
            url = url.concat(parse(path));
            for (var i = 0; i < url.length; i++) {
                if (old[i]) {
                    url[i].view = old[i].view;
                }
                if (old[i] && url[i].page === old[i].page) {
                    url[i].isNew = false;
                }
            }
        }
        return url;
    };

    Route.prototype.append = function append(path) {
        var url = this._join(path, true);
        this.route.path = url2str(url);
        this.route.url = url;
        return this.route.path;
    };

    Route.prototype.show = function show(path, view, kids) {
        var _this = this;

        var url = this._join(path, kids);
        return new Promise(function (res, rej) {
            var redirect = url2str(url);
            var obj = {
                url: url,
                redirect: redirect,
                confirm: Promise.resolve()
            };
            var app = view ? view.app : null;
            // when creating a new route, it possible that it will not have any content
            // guard is not necessary in such case
            if (app) {
                var result = app.callEvent("app:guard", [obj.redirect, view, obj]);
                if (!result) {
                    rej();
                    return;
                }
            }
            obj.confirm.catch(function () {
                return obj.redirect = null;
            }).then(function () {
                if (obj.redirect === null) {
                    rej();
                    return;
                }
                if (obj.redirect !== redirect) {
                    app.show(obj.redirect);
                    rej();
                    return;
                }
                _this.route.path = redirect;
                _this.route.url = url;
                res();
            });
        });
    };

    Route.prototype.size = function size(n) {
        this._next = n;
    };

    Route.prototype.split = function split() {
        var route = {
            url: this.route.url.slice(this.index + 1),
            path: ""
        };
        if (route.url.length) {
            route.path = url2str(route.url);
        }
        return new Route(route, 0);
    };

    Route.prototype.update = function update(name, value, index) {
        var chunk = this.route.url[this.index + (index || 0)];
        if (!chunk) {
            this.route.url.push({ page: "", params: {} });
            return this.update(name, value, index);
        }
        if (name === "") {
            chunk.page = value;
        } else {
            chunk.params[name] = value;
        }
        this.route.path = url2str(this.route.url);
    };

    return Route;
}();

var JetView = function (_JetBase) {
    _inherits(JetView, _JetBase);

    function JetView(app, config) {
        _classCallCheck(this, JetView);

        var _this2 = _possibleConstructorReturn(this, _JetBase.call(this, app.webix));

        _this2.app = app;
        //this.$config = config;
        _this2._children = [];
        return _this2;
    }

    JetView.prototype.ui = function ui(_ui, config) {
        config = config || {};
        var container = config.container || _ui.container;
        var jetview = this.app.createView(_ui);
        this._children.push(jetview);
        jetview.render(container, this._segment, this);
        if ((typeof _ui === "undefined" ? "undefined" : _typeof(_ui)) !== "object" || _ui instanceof JetBase) {
            // raw webix UI
            return jetview;
        } else {
            return jetview.getRoot();
        }
    };

    JetView.prototype.show = function show(path, config) {
        config = config || {};
        // convert parameters object to url
        if ((typeof path === "undefined" ? "undefined" : _typeof(path)) === "object") {
            for (var key in path) {
                this.setParam(key, path[key]);
            }
            path = null;
        } else {
            // deligate to app in case of root prefix
            if (path.substr(0, 1) === "/") {
                return this.app.show(path);
            }
            // local path, do nothing
            if (path.indexOf("./") === 0) {
                path = path.substr(2);
            }
            // parent path, call parent view
            if (path.indexOf("../") === 0) {
                var parent = this.getParentView();
                if (parent) {
                    return parent.show(path.substr(3), config);
                } else {
                    return this.app.show("/" + path.substr(3));
                }
            }
            var sub = this.getSubViewInfo(config.target);
            if (sub) {
                if (sub.parent !== this) {
                    return sub.parent.show(path, config);
                } else if (config.target && config.target !== "default") {
                    return this._renderFrameLock(config.target, sub.subview, path);
                }
            } else {
                if (path) {
                    return this.app.show("/" + path);
                }
            }
        }
        return this._show(this._segment, path, this);
    };

    JetView.prototype._show = function _show(segment, path, view) {
        var _this3 = this;

        return segment.show(path, view, true).then(function () {
            _this3._init_url_data();
            return _this3._urlChange();
        }).then(function () {
            if (segment.route.linkRouter) {
                _this3.app.getRouter().set(segment.route.path, { silent: true });
                _this3.app.callEvent("app:route", [segment.route.path]);
            }
        });
    };

    JetView.prototype.init = function init(_$view, _$) {
        // stub
    };

    JetView.prototype.ready = function ready(_$view, _$url) {
        // stub
    };

    JetView.prototype.config = function config() {
        this.app.webix.message("View:Config is not implemented");
    };

    JetView.prototype.urlChange = function urlChange(_$view, _$url) {
        // stub
    };

    JetView.prototype.destroy = function destroy() {
        // stub
    };

    JetView.prototype.destructor = function destructor() {
        this.destroy();
        this._destroyKids();
        // destroy actual UI
        this._root.destructor();
        _JetBase.prototype.destructor.call(this);
    };

    JetView.prototype.use = function use(plugin, config) {
        plugin(this.app, this, config);
    };

    JetView.prototype.refresh = function refresh() {
        var url = this.getUrl();
        this.destroy();
        this._destroyKids();
        this._destroySubs();
        this._detachEvents();
        if (this._container.tagName) {
            this._root.destructor();
        }
        this._segment.refresh();
        return this._render(this._segment);
    };

    JetView.prototype.render = function render(root, url, parent) {
        var _this4 = this;

        if (typeof url === "string") {
            url = new Route(url, 0);
        }
        this._segment = url;
        this._parent = parent;
        this._init_url_data();
        root = root || document.body;
        var _container = typeof root === "string" ? this.webix.toNode(root) : root;
        if (this._container !== _container) {
            this._container = _container;
            return this._render(url);
        } else {
            return this._urlChange().then(function () {
                return _this4.getRoot();
            });
        }
    };

    JetView.prototype._render = function _render(url) {
        var _this5 = this;

        var config = this.config();
        if (config.then) {
            return config.then(function (cfg) {
                return _this5._render_final(cfg, url);
            });
        } else {
            return this._render_final(config, url);
        }
    };

    JetView.prototype._render_final = function _render_final(config, url) {
        var _this6 = this;

        // get previous view in the same slot
        var slot = null;
        var container = null;
        var show = false;
        if (!this._container.tagName) {
            slot = this._container;
            if (slot.popup) {
                container = document.body;
                show = true;
            } else {
                container = this.webix.$$(slot.id);
            }
        } else {
            container = this._container;
        }
        // view already destroyed
        if (!this.app || !container) {
            return Promise.reject(null);
        }
        var response = void 0;
        var current = this._segment.current();
        // using wrapper object, so ui can be changed from app:render event
        var result = { ui: {} };
        this.app.copyConfig(config, result.ui, this._subs);
        this.app.callEvent("app:render", [this, url, result]);
        result.ui.$scope = this;
        /* destroy old HTML attached views before creating new one */
        if (!slot && current.isNew && current.view) {
            current.view.destructor();
        }
        try {
            // special handling for adding inside of multiview - preserve old id
            if (slot && !show) {
                var oldui = container;
                var parent = oldui.getParentView();
                if (parent && parent.name === "multiview" && !result.ui.id) {
                    result.ui.id = oldui.config.id;
                }
            }
            this._root = this.app.webix.ui(result.ui, container);
            var asWin = this._root;
            // check for url added to ignore this.ui calls
            if (show && asWin.setPosition && !asWin.isVisible()) {
                asWin.show();
            }
            // check, if we are replacing some older view
            if (slot) {
                if (slot.view && slot.view !== this && slot.view !== this.app) {
                    slot.view.destructor();
                }
                slot.id = this._root.config.id;
                if (this.getParentView() || !this.app.app) slot.view = this;else {
                    // when we have subapp, set whole app as a view
                    // so on destruction, the whole app will be destroyed
                    slot.view = this.app;
                }
            }
            if (current.isNew) {
                current.view = this;
                current.isNew = false;
            }
            response = Promise.resolve(this._init(this._root, url)).then(function () {
                return _this6._urlChange().then(function () {
                    _this6._initUrl = null;
                    return _this6.ready(_this6._root, url.suburl());
                });
            });
        } catch (e) {
            response = Promise.reject(e);
        }
        return response.catch(function (err) {
            return _this6._initError(_this6, err);
        });
    };

    JetView.prototype._init = function _init(view, url) {
        return this.init(view, url.suburl());
    };

    JetView.prototype._urlChange = function _urlChange() {
        var _this7 = this;

        this.app.callEvent("app:urlchange", [this, this._segment]);
        var waits = [];
        for (var key in this._subs) {
            var frame = this._subs[key];
            var wait = this._renderFrameLock(key, frame, null);
            if (wait) {
                waits.push(wait);
            }
        }
        return Promise.all(waits).then(function () {
            return _this7.urlChange(_this7._root, _this7._segment.suburl());
        });
    };

    JetView.prototype._renderFrameLock = function _renderFrameLock(key, frame, path) {
        // if subview is not occupied by some rendering yet
        if (!frame.lock) {
            // retreive and store rendering end promise
            var lock = this._renderFrame(key, frame, path);
            if (lock) {
                // clear lock after frame rendering
                // as promise.finally is not supported by  Webix lesser than 6.2
                // using a more verbose notation
                frame.lock = lock.then(function () {
                    return frame.lock = null;
                }, function () {
                    return frame.lock = null;
                });
            }
        }
        // return rendering end promise
        return frame.lock;
    };

    JetView.prototype._renderFrame = function _renderFrame(key, frame, path) {
        var _this8 = this;

        //default route
        if (key === "default") {
            if (this._segment.next()) {
                // we have a next segment in url, render it
                return this._createSubView(frame, this._segment.shift());
            } else if (frame.view && frame.popup) {
                // there is no next segment, delete the existing sub-view
                frame.view.destructor();
                frame.view = null;
            }
        }
        //if new path provided, set it to the frame
        if (path !== null) {
            frame.url = path;
        }
        // in case of routed sub-view
        if (frame.route) {
            // we have a new path for sub-view
            if (path !== null) {
                return frame.route.show(path, frame.view).then(function () {
                    return _this8._createSubView(frame, frame.route);
                });
            }
            // do not trigger onChange for isolated sub-views
            if (frame.branch) {
                return;
            }
        }
        var view = frame.view;
        // if view doesn't exists yet, init it
        if (!view && frame.url) {
            if (typeof frame.url === "string") {
                // string, so we have isolated subview url
                frame.route = new Route(frame.url, 0);
                return this._createSubView(frame, frame.route);
            } else {
                // object, so we have an embeded subview
                if (typeof frame.url === "function" && !(view instanceof frame.url)) {
                    view = new frame.url(this.app, "");
                }
                if (!view) {
                    view = frame.url;
                }
            }
        }
        // trigger onChange for already existed view
        if (view) {
            return view.render(frame, frame.route || this._segment, this);
        }
    };

    JetView.prototype._initError = function _initError(view, err) {
        /*
            if view is destroyed, ignore any view related errors
        */
        if (this.app) {
            this.app.error("app:error:initview", [err, view]);
        }
        return true;
    };

    JetView.prototype._createSubView = function _createSubView(sub, suburl) {
        var _this9 = this;

        return this.app.createFromURL(suburl.current(), sub.view).then(function (view) {
            return view.render(sub, suburl, _this9);
        });
    };

    JetView.prototype._destroyKids = function _destroyKids() {
        // destroy child views
        var uis = this._children;
        for (var i = uis.length - 1; i >= 0; i--) {
            if (uis[i] && uis[i].destructor) {
                uis[i].destructor();
            }
        }
        // reset vars for better GC processing
        this._children = [];
    };

    return JetView;
}(JetBase);

// wrapper for raw objects and Jet 1.x structs


var JetViewRaw = function (_JetView) {
    _inherits(JetViewRaw, _JetView);

    function JetViewRaw(app, config) {
        _classCallCheck(this, JetViewRaw);

        var _this10 = _possibleConstructorReturn(this, _JetView.call(this, app, config));

        _this10._ui = config.ui;
        return _this10;
    }

    JetViewRaw.prototype.config = function config() {
        return this._ui;
    };

    return JetViewRaw;
}(JetView);

var SubRouter = function () {
    function SubRouter(cb, config, app) {
        _classCallCheck(this, SubRouter);

        this.path = "";
        this.app = app;
    }

    SubRouter.prototype.set = function set(path, config) {
        this.path = path;
        var a = this.app;
        a.app.getRouter().set(a._segment.append(this.path), { silent: true });
    };

    SubRouter.prototype.get = function get() {
        return this.path;
    };

    return SubRouter;
}();

var _once = true;

var JetAppBase = function (_JetBase2) {
    _inherits(JetAppBase, _JetBase2);

    function JetAppBase(config) {
        _classCallCheck(this, JetAppBase);

        var webix = (config || {}).webix || window.webix;

        // init config
        var _this11 = _possibleConstructorReturn(this, _JetBase2.call(this, webix));

        _this11.config = _this11.webix.extend({
            name: "App",
            version: "1.0",
            start: "/home"
        }, config, true);
        _this11.app = _this11.config.app;
        _this11.ready = Promise.resolve();
        _this11._services = {};
        _this11.webix.extend(_this11, _this11.webix.EventSystem);
        return _this11;
    }

    JetAppBase.prototype.getUrl = function getUrl() {
        return this._subSegment.suburl();
    };

    JetAppBase.prototype.getUrlString = function getUrlString() {
        return this._subSegment.toString();
    };

    JetAppBase.prototype.getService = function getService(name) {
        var obj = this._services[name];
        if (typeof obj === "function") {
            obj = this._services[name] = obj(this);
        }
        return obj;
    };

    JetAppBase.prototype.setService = function setService(name, handler) {
        this._services[name] = handler;
    };

    JetAppBase.prototype.destructor = function destructor() {
        this.getSubView().destructor();
        _JetBase2.prototype.destructor.call(this);
    };
    // copy object and collect extra handlers


    JetAppBase.prototype.copyConfig = function copyConfig(obj, target, config) {
        // raw ui config
        if (obj instanceof JetBase || typeof obj === "function" && obj.prototype instanceof JetBase) {
            obj = { $subview: obj };
        }
        // subview placeholder
        if (typeof obj.$subview != "undefined") {
            return this.addSubView(obj, target, config);
        }
        // process sub-properties
        target = target || (obj instanceof Array ? [] : {});
        for (var method in obj) {
            var point = obj[method];
            // view class
            if (typeof point === "function" && point.prototype instanceof JetBase) {
                point = { $subview: point };
            }
            if (point && (typeof point === "undefined" ? "undefined" : _typeof(point)) === "object" && !(point instanceof this.webix.DataCollection) && !(point instanceof RegExp)) {
                if (point instanceof Date) {
                    target[method] = new Date(point);
                } else {
                    var copy = this.copyConfig(point, point instanceof Array ? [] : {}, config);
                    if (copy !== null) {
                        target[method] = copy;
                    }
                }
            } else {
                target[method] = point;
            }
        }
        return target;
    };

    JetAppBase.prototype.getRouter = function getRouter() {
        return this.$router;
    };

    JetAppBase.prototype.clickHandler = function clickHandler(e) {
        if (e) {
            var target = e.target || e.srcElement;
            if (target && target.getAttribute) {
                var trigger = target.getAttribute("trigger");
                if (trigger) {
                    this._forView(target, function (view) {
                        return view.app.trigger(trigger);
                    });
                }
                var route = target.getAttribute("route");
                if (route) {
                    this._forView(target, function (view) {
                        return view.show(route);
                    });
                }
            }
        }
    };

    JetAppBase.prototype.getRoot = function getRoot() {
        return this.getSubView().getRoot();
    };

    JetAppBase.prototype.refresh = function refresh() {
        var _this12 = this;

        if (!this._subSegment) {
            return Promise.resolve(null);
        }
        return this.getSubView().refresh().then(function (view) {
            _this12.callEvent("app:route", [_this12.getUrl()]);
            return view;
        });
    };

    JetAppBase.prototype.loadView = function loadView(url) {
        var _this13 = this;

        var views = this.config.views;
        var result = null;
        if (url === "") {
            return Promise.resolve(this._loadError("", new Error("Webix Jet: Empty url segment")));
        }
        try {
            if (views) {
                if (typeof views === "function") {
                    // custom loading strategy
                    result = views(url);
                } else {
                    // predefined hash
                    result = views[url];
                }
                if (typeof result === "string") {
                    url = result;
                    result = null;
                }
            }
            if (!result) {
                if (url === "_blank") {
                    result = {};
                } else {
                    result = this._loadViewDynamic(url);
                }
            }
        } catch (e) {
            result = this._loadError(url, e);
        }
        // custom handler can return view or its promise
        if (!result.then) {
            result = Promise.resolve(result);
        }
        // set error handler
        result = result.then(function (module) {
            return module.__esModule ? module.default : module;
        }).catch(function (err) {
            return _this13._loadError(url, err);
        });
        return result;
    };

    JetAppBase.prototype._forView = function _forView(target, handler) {
        var view = this.webix.$$(target);
        if (view) {
            handler(view.$scope);
        }
    };

    JetAppBase.prototype._loadViewDynamic = function _loadViewDynamic(url) {
        return null;
    };

    JetAppBase.prototype.createFromURL = function createFromURL(chunk, now) {
        var _this14 = this;

        var view = void 0;
        if (chunk.isNew || !chunk.view) {
            view = this.loadView(chunk.page).then(function (ui) {
                return _this14.createView(ui, name);
            });
        } else {
            view = Promise.resolve(chunk.view);
        }
        return view;
    };

    JetAppBase.prototype.createView = function createView(ui, name) {
        var obj = void 0;
        if (typeof ui === "function") {
            if (ui.prototype instanceof JetAppBase) {
                // UI class
                return new ui({ app: this, name: name, router: SubRouter });
            } else if (ui.prototype instanceof JetBase) {
                // UI class
                return new ui(this, { name: name });
            } else {
                // UI factory functions
                ui = ui(this);
            }
        }
        if (ui instanceof JetBase) {
            obj = ui;
        } else {
            // UI object
            obj = new JetViewRaw(this, { name: name, ui: ui });
        }
        return obj;
    };
    // show view path


    JetAppBase.prototype.show = function show(url) {
        return this.render(this._container, url || this.config.start);
    };
    // event helpers


    JetAppBase.prototype.trigger = function trigger(name) {
        for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            rest[_key - 1] = arguments[_key];
        }

        this.apply(name, rest);
    };

    JetAppBase.prototype.apply = function apply(name, data) {
        this.callEvent(name, data);
    };

    JetAppBase.prototype.action = function action(name) {
        return this.webix.bind(function () {
            for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                rest[_key2] = arguments[_key2];
            }

            this.apply(name, rest);
        }, this);
    };

    JetAppBase.prototype.on = function on(name, handler) {
        this.attachEvent(name, handler);
    };

    JetAppBase.prototype.use = function use(plugin, config) {
        plugin(this, null, config);
    };

    JetAppBase.prototype.error = function error(name, er) {
        this.callEvent(name, er);
        this.callEvent("app:error", er);
        /* tslint:disable */
        if (this.config.debug) {
            for (var i = 0; i < er.length; i++) {
                console.error(er[i]);
                if (er[i] instanceof Error) {
                    var text = er[i].message;
                    if (text.indexOf("Module build failed") === 0) {
                        text = text.replace(/\x1b\[[0-9;]*m/g, "");
                        document.body.innerHTML = "<pre style='font-size:16px; background-color: #ec6873; color: #000; padding:10px;'>" + text + "</pre>";
                    } else {
                        text += "<br><br>Check console for more details";
                        this.webix.message({ type: "error", text: text, expire: -1 });
                    }
                }
            }
            debugger;
        }
        /* tslint:enable */
    };
    // renders top view


    JetAppBase.prototype.render = function render(root, url, parent) {
        var _this15 = this;

        this._container = typeof root === "string" ? this.webix.toNode(root) : root || document.body;
        var firstInit = !this.$router;
        var path = null;
        if (firstInit) {
            if (_once) {
                this.webix.attachEvent("onClick", function (e) {
                    return _this15.clickHandler(e);
                });
                _once = false;
            }
            if (typeof url === "string") {
                url = new Route(url, 0);
            }
            this._subSegment = this._first_start(url);
            this._subSegment.route.linkRouter = true;
        } else {
            if (typeof url === "string") {
                path = url;
            } else {
                if (this.app) {
                    path = url.split().route.path;
                } else {
                    path = url.toString();
                }
            }
        }
        var top = this.getSubView();
        var segment = this._subSegment;
        var ready = segment.show(path, top).then(function () {
            return _this15.createFromURL(segment.current(), top);
        }).then(function (view) {
            return view.render(root, segment);
        }).then(function (base) {
            _this15.$router.set(segment.route.path, { silent: true });
            _this15.callEvent("app:route", [_this15.getUrl()]);
            return base;
        });
        this.ready = this.ready.then(function () {
            return ready;
        });
        return ready;
    };

    JetAppBase.prototype.getSubView = function getSubView() {
        if (this._subSegment) {
            return this._subSegment.current().view;
        }
        return new JetView(this, {});
    };

    JetAppBase.prototype._first_start = function _first_start(route) {
        var _this16 = this;

        this._segment = route;
        var cb = function cb(a) {
            return setTimeout(function () {
                _this16.show(a);
            }, 1);
        };
        this.$router = new this.config.router(cb, this.config, this);
        // start animation for top-level app
        if (this._container === document.body && this.config.animation !== false) {
            var node = this._container;
            this.webix.html.addCss(node, "webixappstart");
            setTimeout(function () {
                _this16.webix.html.removeCss(node, "webixappstart");
                _this16.webix.html.addCss(node, "webixapp");
            }, 10);
        }
        if (!route) {
            // if no url defined, check router first
            var urlString = this.$router.get();
            if (!urlString) {
                urlString = this.config.start;
                this.$router.set(urlString, { silent: true });
            }
            route = new Route(urlString, 0);
        } else if (this.app) {
            route.current().view = this;
            if (route.next()) {
                route = route.split();
            } else {
                route = new Route(this.config.start, 0);
            }
        }
        return route;
    };
    // error during view resolving


    JetAppBase.prototype._loadError = function _loadError(url, err) {
        this.error("app:error:resolve", [err, url]);
        return { template: " " };
    };

    JetAppBase.prototype.addSubView = function addSubView(obj, target, config) {
        var url = obj.$subview !== true ? obj.$subview : null;
        var name = obj.name || (url ? this.webix.uid() : "default");
        target.id = obj.id || "s" + this.webix.uid();
        var view = config[name] = {
            id: target.id,
            url: url,
            branch: obj.branch,
            popup: obj.popup
        };
        return view.popup ? null : target;
    };

    return JetAppBase;
}(JetBase);

var HashRouter = function () {
    function HashRouter(cb, config) {
        var _this17 = this;

        _classCallCheck(this, HashRouter);

        this.config = config || {};
        this._detectPrefix();
        this.cb = cb;
        window.onpopstate = function () {
            return _this17.cb(_this17.get());
        };
    }

    HashRouter.prototype.set = function set(path, config) {
        var _this18 = this;

        if (this.config.routes) {
            var compare = path.split("?", 2);
            for (var key in this.config.routes) {
                if (this.config.routes[key] === compare[0]) {
                    path = key + (compare.length > 1 ? "?" + compare[1] : "");
                    break;
                }
            }
        }
        if (this.get() !== path) {
            window.history.pushState(null, null, this.prefix + this.sufix + path);
        }
        if (!config || !config.silent) {
            setTimeout(function () {
                return _this18.cb(path);
            }, 1);
        }
    };

    HashRouter.prototype.get = function get() {
        var path = this._getRaw().replace(this.prefix, "").replace(this.sufix, "");
        path = path !== "/" ? path : "";
        if (this.config.routes) {
            var compare = path.split("?", 2);
            var key = this.config.routes[compare[0]];
            if (key) {
                path = key + (compare.length > 1 ? "?" + compare[1] : "");
            }
        }
        return path;
    };

    HashRouter.prototype._detectPrefix = function _detectPrefix() {
        // use "#!" for backward compatibility
        var sufix = this.config.routerPrefix;
        this.sufix = "#" + (typeof sufix === "undefined" ? "!" : sufix);
        this.prefix = document.location.href.split("#", 2)[0];
    };

    HashRouter.prototype._getRaw = function _getRaw() {
        return document.location.href;
    };

    return HashRouter;
}();

var isPatched = false;
function patch(w) {
    if (isPatched || !w) {
        return;
    }
    isPatched = true;
    // custom promise for IE8
    var win = window;
    if (!win.Promise) {
        win.Promise = w.promise;
    }
    var version = w.version.split(".");
    // will be fixed in webix 5.3
    if (version[0] * 10 + version[1] * 1 < 53) {
        w.ui.freeze = function (handler) {
            // disabled because webix jet 5.0 can't handle resize of scrollview correctly
            // w.ui.$freeze = true;
            var res = handler();
            if (res && res.then) {
                res.then(function (some) {
                    w.ui.$freeze = false;
                    w.ui.resize();
                    return some;
                });
            } else {
                w.ui.$freeze = false;
                w.ui.resize();
            }
            return res;
        };
    }
    // adding views as classes
    var baseAdd = w.ui.baselayout.prototype.addView;
    var baseRemove = w.ui.baselayout.prototype.removeView;
    var config = {
        addView: function addView(view, index) {
            var _this19 = this;

            if (this.$scope && this.$scope.webixJet) {
                var _ret = function () {
                    var jview = _this19.$scope;
                    var subs = {};
                    view = jview.app.copyConfig(view, {}, subs);
                    baseAdd.apply(_this19, [view, index]);

                    var _loop = function _loop(key) {
                        jview._renderFrame(key, subs[key], null).then(function () {
                            jview._subs[key] = subs[key];
                        });
                    };

                    for (var key in subs) {
                        _loop(key);
                    }
                    return {
                        v: view.id
                    };
                }();

                if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
            } else {
                return baseAdd.apply(this, arguments);
            }
        },
        removeView: function removeView() {
            baseRemove.apply(this, arguments);
            if (this.$scope && this.$scope.webixJet) {
                var subs = this.$scope._subs;
                // check all sub-views, destroy and clean the removed one
                for (var key in subs) {
                    var test = subs[key];
                    if (!w.$$(test.id)) {
                        test.view.destructor();
                        delete subs[key];
                    }
                }
            }
        }
    };
    w.extend(w.ui.layout.prototype, config, true);
    w.extend(w.ui.baselayout.prototype, config, true);
    // wrapper for using Jet Apps as views
    w.protoUI({
        name: "jetapp",
        $init: function $init(cfg) {
            this.$app = new this.app(cfg);
            var id = w.uid().toString();
            cfg.body = { id: id };
            this.$ready.push(function () {
                this.$app.render({ id: id });
            });
            for (var key in this.$app) {
                var origin = this.$app[key];
                if (typeof origin === "function" && !this[key]) {
                    this[key] = origin.bind(this.$app);
                }
            }
        }
    }, w.ui.proxy);
}

var JetApp = function (_JetAppBase) {
    _inherits(JetApp, _JetAppBase);

    function JetApp(config) {
        _classCallCheck(this, JetApp);

        config.router = config.router || HashRouter;

        var _this20 = _possibleConstructorReturn(this, _JetAppBase.call(this, config));

        patch(_this20.webix);
        return _this20;
    }

    JetApp.prototype._loadViewDynamic = function _loadViewDynamic(url) {
        url = url.replace(/\./g, "/");
        return __webpack_require__("./sources/views sync recursive ^\\.\\/.*$")("./" + url);
    };

    return JetApp;
}(JetAppBase);

var StoreRouter = function () {
    function StoreRouter(cb, config, app) {
        _classCallCheck(this, StoreRouter);

        this.storage = config.storage || app.webix.storage.session;
        this.name = config.storeName || config.id + ":route";
        this.cb = cb;
    }

    StoreRouter.prototype.set = function set(path, config) {
        var _this21 = this;

        this.storage.put(this.name, path);
        if (!config || !config.silent) {
            setTimeout(function () {
                return _this21.cb(path);
            }, 1);
        }
    };

    StoreRouter.prototype.get = function get() {
        return this.storage.get(this.name);
    };

    return StoreRouter;
}();

var UrlRouter = function (_HashRouter) {
    _inherits(UrlRouter, _HashRouter);

    function UrlRouter() {
        _classCallCheck(this, UrlRouter);

        return _possibleConstructorReturn(this, _HashRouter.apply(this, arguments));
    }

    UrlRouter.prototype._detectPrefix = function _detectPrefix() {
        this.prefix = "";
        this.sufix = this.config.routerPrefix || "";
    };

    UrlRouter.prototype._getRaw = function _getRaw() {
        return document.location.pathname;
    };

    return UrlRouter;
}(HashRouter);

var EmptyRouter = function () {
    function EmptyRouter(cb, _$config) {
        _classCallCheck(this, EmptyRouter);

        this.path = "";
        this.cb = cb;
    }

    EmptyRouter.prototype.set = function set(path, config) {
        var _this23 = this;

        this.path = path;
        if (!config || !config.silent) {
            setTimeout(function () {
                return _this23.cb(path);
            }, 1);
        }
    };

    EmptyRouter.prototype.get = function get() {
        return this.path;
    };

    return EmptyRouter;
}();

function UnloadGuard(app, view, config) {
    view.on(app, "app:guard", function (_$url, point, promise) {
        if (point === view || point.contains(view)) {
            var res = config();
            if (res === false) {
                promise.confirm = Promise.reject(res);
            } else {
                promise.confirm = promise.confirm.then(function () {
                    return res;
                });
            }
        }
    });
}

//     (c) 2012-2018 Airbnb, Inc.

// var has = require('has');
function has(store, key) {
    return Object.prototype.hasOwnProperty.call(store, key);
}
// var forEach = require('for-each');
function forEach(obj, handler, context) {
    for (var key in obj) {
        if (has(obj, key)) {
            handler.call(context || obj, obj[key], key, obj);
        }
    }
}
// var trim = require('string.prototype.trim');
function trim(str) {
    return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
}
// var warning = require('warning');
function warn(message) {
    message = 'Warning: ' + message;
    if (typeof console !== 'undefined') {
        console.error(message);
    }

    try {
        throw new Error(message);
    } catch (x) {}
}

var replace = String.prototype.replace;
var split = String.prototype.split;

// #### Pluralization methods
// The string that separates the different phrase possibilities.
var delimiter = '||||';

var russianPluralGroups = function russianPluralGroups(n) {
    var end = n % 10;
    if (n !== 11 && end === 1) {
        return 0;
    }
    if (2 <= end && end <= 4 && !(n >= 12 && n <= 14)) {
        return 1;
    }
    return 2;
};

// Mapping from pluralization group plural logic.
var pluralTypes = {
    arabic: function arabic(n) {
        // http://www.arabeyes.org/Plural_Forms
        if (n < 3) {
            return n;
        }
        var lastTwo = n % 100;
        if (lastTwo >= 3 && lastTwo <= 10) return 3;
        return lastTwo >= 11 ? 4 : 5;
    },
    bosnian_serbian: russianPluralGroups,
    chinese: function chinese() {
        return 0;
    },
    croatian: russianPluralGroups,
    french: function french(n) {
        return n > 1 ? 1 : 0;
    },
    german: function german(n) {
        return n !== 1 ? 1 : 0;
    },
    russian: russianPluralGroups,
    lithuanian: function lithuanian(n) {
        if (n % 10 === 1 && n % 100 !== 11) {
            return 0;
        }
        return n % 10 >= 2 && n % 10 <= 9 && (n % 100 < 11 || n % 100 > 19) ? 1 : 2;
    },
    czech: function czech(n) {
        if (n === 1) {
            return 0;
        }
        return n >= 2 && n <= 4 ? 1 : 2;
    },
    polish: function polish(n) {
        if (n === 1) {
            return 0;
        }
        var end = n % 10;
        return 2 <= end && end <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    },
    icelandic: function icelandic(n) {
        return n % 10 !== 1 || n % 100 === 11 ? 1 : 0;
    },
    slovenian: function slovenian(n) {
        var lastTwo = n % 100;
        if (lastTwo === 1) {
            return 0;
        }
        if (lastTwo === 2) {
            return 1;
        }
        if (lastTwo === 3 || lastTwo === 4) {
            return 2;
        }
        return 3;
    }
};

// Mapping from pluralization group to individual language codes/locales.
// Will look up based on exact match, if not found and it's a locale will parse the locale
// for language code, and if that does not exist will default to 'en'
var pluralTypeToLanguages = {
    arabic: ['ar'],
    bosnian_serbian: ['bs-Latn-BA', 'bs-Cyrl-BA', 'srl-RS', 'sr-RS'],
    chinese: ['id', 'id-ID', 'ja', 'ko', 'ko-KR', 'lo', 'ms', 'th', 'th-TH', 'zh'],
    croatian: ['hr', 'hr-HR'],
    german: ['fa', 'da', 'de', 'en', 'es', 'fi', 'el', 'he', 'hi-IN', 'hu', 'hu-HU', 'it', 'nl', 'no', 'pt', 'sv', 'tr'],
    french: ['fr', 'tl', 'pt-br'],
    russian: ['ru', 'ru-RU'],
    lithuanian: ['lt'],
    czech: ['cs', 'cs-CZ', 'sk'],
    polish: ['pl'],
    icelandic: ['is'],
    slovenian: ['sl-SL']
};

function langToTypeMap(mapping) {
    var ret = {};
    forEach(mapping, function (langs, type) {
        forEach(langs, function (lang) {
            ret[lang] = type;
        });
    });
    return ret;
}

function pluralTypeName(locale) {
    var langToPluralType = langToTypeMap(pluralTypeToLanguages);
    return langToPluralType[locale] || langToPluralType[split.call(locale, /-/, 1)[0]] || langToPluralType.en;
}

function pluralTypeIndex(locale, count) {
    return pluralTypes[pluralTypeName(locale)](count);
}

function escape(token) {
    return token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function constructTokenRegex(opts) {
    var prefix = opts && opts.prefix || '%{';
    var suffix = opts && opts.suffix || '}';

    if (prefix === delimiter || suffix === delimiter) {
        throw new RangeError('"' + delimiter + '" token is reserved for pluralization');
    }

    return new RegExp(escape(prefix) + '(.*?)' + escape(suffix), 'g');
}

var dollarRegex = /\$/g;
var dollarBillsYall = '$$';
var defaultTokenRegex = /%\{(.*?)\}/g;

// ### transformPhrase(phrase, substitutions, locale)
//
// Takes a phrase string and transforms it by choosing the correct
// plural form and interpolating it.
//
//     transformPhrase('Hello, %{name}!', {name: 'Spike'});
//     // "Hello, Spike!"
//
// The correct plural form is selected if substitutions.smart_count
// is set. You can pass in a number instead of an Object as `substitutions`
// as a shortcut for `smart_count`.
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 1}, 'en');
//     // "1 new message"
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', {smart_count: 2}, 'en');
//     // "2 new messages"
//
//     transformPhrase('%{smart_count} new messages |||| 1 new message', 5, 'en');
//     // "5 new messages"
//
// You should pass in a third argument, the locale, to specify the correct plural type.
// It defaults to `'en'` with 2 plural forms.
function transformPhrase(phrase, substitutions, locale, tokenRegex) {
    if (typeof phrase !== 'string') {
        throw new TypeError('Polyglot.transformPhrase expects argument #1 to be string');
    }

    if (substitutions == null) {
        return phrase;
    }

    var result = phrase;
    var interpolationRegex = tokenRegex || defaultTokenRegex;

    // allow number as a pluralization shortcut
    var options = typeof substitutions === 'number' ? { smart_count: substitutions } : substitutions;

    // Select plural form: based on a phrase text that contains `n`
    // plural forms separated by `delimiter`, a `locale`, and a `substitutions.smart_count`,
    // choose the correct plural form. This is only done if `count` is set.
    if (options.smart_count != null && result) {
        var texts = split.call(result, delimiter);
        result = trim(texts[pluralTypeIndex(locale || 'en', options.smart_count)] || texts[0]);
    }

    // Interpolate: Creates a `RegExp` object for each interpolation placeholder.
    result = replace.call(result, interpolationRegex, function (expression, argument) {
        if (!has(options, argument) || options[argument] == null) {
            return expression;
        }
        // Ensure replacement value is escaped to prevent special $-prefixed regex replace tokens.
        return replace.call(options[argument], dollarRegex, dollarBillsYall);
    });

    return result;
}

// ### Polyglot class constructor
function Polyglot(options) {
    var opts = options || {};
    this.phrases = {};
    this.extend(opts.phrases || {});
    this.currentLocale = opts.locale || 'en';
    var allowMissing = opts.allowMissing ? transformPhrase : null;
    this.onMissingKey = typeof opts.onMissingKey === 'function' ? opts.onMissingKey : allowMissing;
    this.warn = opts.warn || warn;
    this.tokenRegex = constructTokenRegex(opts.interpolation);
}

// ### polyglot.locale([locale])
//
// Get or set locale. Internally, Polyglot only uses locale for pluralization.
Polyglot.prototype.locale = function (newLocale) {
    if (newLocale) this.currentLocale = newLocale;
    return this.currentLocale;
};

// ### polyglot.extend(phrases)
//
// Use `extend` to tell Polyglot how to translate a given key.
//
//     polyglot.extend({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     });
//
// The key can be any string.  Feel free to call `extend` multiple times;
// it will override any phrases with the same key, but leave existing phrases
// untouched.
//
// It is also possible to pass nested phrase objects, which get flattened
// into an object with the nested keys concatenated using dot notation.
//
//     polyglot.extend({
//       "nav": {
//         "hello": "Hello",
//         "hello_name": "Hello, %{name}",
//         "sidebar": {
//           "welcome": "Welcome"
//         }
//       }
//     });
//
//     console.log(polyglot.phrases);
//     // {
//     //   'nav.hello': 'Hello',
//     //   'nav.hello_name': 'Hello, %{name}',
//     //   'nav.sidebar.welcome': 'Welcome'
//     // }
//
// `extend` accepts an optional second argument, `prefix`, which can be used
// to prefix every key in the phrases object with some string, using dot
// notation.
//
//     polyglot.extend({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     }, "nav");
//
//     console.log(polyglot.phrases);
//     // {
//     //   'nav.hello': 'Hello',
//     //   'nav.hello_name': 'Hello, %{name}'
//     // }
//
// This feature is used internally to support nested phrase objects.
Polyglot.prototype.extend = function (morePhrases, prefix) {
    forEach(morePhrases, function (phrase, key) {
        var prefixedKey = prefix ? prefix + '.' + key : key;
        if ((typeof phrase === "undefined" ? "undefined" : _typeof(phrase)) === 'object') {
            this.extend(phrase, prefixedKey);
        } else {
            this.phrases[prefixedKey] = phrase;
        }
    }, this);
};

// ### polyglot.unset(phrases)
// Use `unset` to selectively remove keys from a polyglot instance.
//
//     polyglot.unset("some_key");
//     polyglot.unset({
//       "hello": "Hello",
//       "hello_name": "Hello, %{name}"
//     });
//
// The unset method can take either a string (for the key), or an object hash with
// the keys that you would like to unset.
Polyglot.prototype.unset = function (morePhrases, prefix) {
    if (typeof morePhrases === 'string') {
        delete this.phrases[morePhrases];
    } else {
        forEach(morePhrases, function (phrase, key) {
            var prefixedKey = prefix ? prefix + '.' + key : key;
            if ((typeof phrase === "undefined" ? "undefined" : _typeof(phrase)) === 'object') {
                this.unset(phrase, prefixedKey);
            } else {
                delete this.phrases[prefixedKey];
            }
        }, this);
    }
};

// ### polyglot.clear()
//
// Clears all phrases. Useful for special cases, such as freeing
// up memory if you have lots of phrases but no longer need to
// perform any translation. Also used internally by `replace`.
Polyglot.prototype.clear = function () {
    this.phrases = {};
};

// ### polyglot.replace(phrases)
//
// Completely replace the existing phrases with a new set of phrases.
// Normally, just use `extend` to add more phrases, but under certain
// circumstances, you may want to make sure no old phrases are lying around.
Polyglot.prototype.replace = function (newPhrases) {
    this.clear();
    this.extend(newPhrases);
};

// ### polyglot.t(key, options)
//
// The most-used method. Provide a key, and `t` will return the
// phrase.
//
//     polyglot.t("hello");
//     => "Hello"
//
// The phrase value is provided first by a call to `polyglot.extend()` or
// `polyglot.replace()`.
//
// Pass in an object as the second argument to perform interpolation.
//
//     polyglot.t("hello_name", {name: "Spike"});
//     => "Hello, Spike"
//
// If you like, you can provide a default value in case the phrase is missing.
// Use the special option key "_" to specify a default.
//
//     polyglot.t("i_like_to_write_in_language", {
//       _: "I like to write in %{language}.",
//       language: "JavaScript"
//     });
//     => "I like to write in JavaScript."
//
Polyglot.prototype.t = function (key, options) {
    var phrase, result;
    var opts = options == null ? {} : options;
    if (typeof this.phrases[key] === 'string') {
        phrase = this.phrases[key];
    } else if (typeof opts._ === 'string') {
        phrase = opts._;
    } else if (this.onMissingKey) {
        var onMissingKey = this.onMissingKey;
        result = onMissingKey(key, opts, this.currentLocale, this.tokenRegex);
    } else {
        this.warn('Missing translation for key: "' + key + '"');
        result = key;
    }
    if (typeof phrase === 'string') {
        result = transformPhrase(phrase, opts, this.currentLocale, this.tokenRegex);
    }
    return result;
};

// ### polyglot.has(key)
//
// Check if polyglot has a translation for given key
Polyglot.prototype.has = function (key) {
    return has(this.phrases, key);
};

// export transformPhrase
Polyglot.transformPhrase = function transform(phrase, substitutions, locale) {
    return transformPhrase(phrase, substitutions, locale);
};

var webixPolyglot = Polyglot;

function Locale(app, _view, config) {
    config = config || {};
    var storage = config.storage;
    var lang = storage ? storage.get("lang") || "en" : config.lang || "en";
    function setLangData(name, data, silent) {
        if (data.__esModule) {
            data = data.default;
        }
        var pconfig = { phrases: data };
        if (config.polyglot) {
            app.webix.extend(pconfig, config.polyglot);
        }
        var poly = service.polyglot = new webixPolyglot(pconfig);
        poly.locale(name);
        service._ = app.webix.bind(poly.t, poly);
        lang = name;
        if (storage) {
            storage.put("lang", lang);
        }
        if (config.webix) {
            var locName = config.webix[name];
            if (locName) {
                app.webix.i18n.setLocale(locName);
            }
        }
        if (!silent) {
            return app.refresh();
        }
        return Promise.resolve();
    }
    function getLang() {
        return lang;
    }
    function setLang(name, silent) {
        // ignore setLang if loading by path is disabled
        if (config.path === false) {
            return;
        }
        var path = (config.path ? config.path + "/" : "") + name;
        var data = __webpack_require__("./sources/locales sync recursive ^\\.\\/.*$")("./" + path);
        setLangData(name, data, silent);
    }
    var service = {
        getLang: getLang, setLang: setLang, setLangData: setLangData, _: null, polyglot: null
    };
    app.setService("locale", service);
    setLang(lang, true);
}

function show(view, config, value) {
    if (config.urls) {
        value = config.urls[value] || value;
    } else if (config.param) {
        var _value;

        value = (_value = {}, _value[config.param] = value, _value);
    }
    view.show(value);
}
function Menu(app, view, config) {
    var frame = view.getSubViewInfo().parent;
    var ui = view.$$(config.id || config);
    var silent = false;
    ui.attachEvent("onchange", function () {
        if (!silent) {
            show(frame, config, this.getValue());
        }
    });
    ui.attachEvent("onafterselect", function () {
        if (!silent) {
            var id = null;
            if (ui.setValue) {
                id = this.getValue();
            } else if (ui.getSelectedId) {
                id = ui.getSelectedId();
            }
            show(frame, config, id);
        }
    });
    view.on(app, "app:route", function () {
        var name = "";
        if (config.param) {
            name = view.getParam(config.param, true);
        } else {
            var segment = frame.getUrl()[1];
            if (segment) {
                name = segment.page;
            }
        }
        if (name) {
            silent = true;
            if (ui.setValue && ui.getValue() !== name) {
                ui.setValue(name);
            } else if (ui.select && ui.exists(name) && ui.getSelectedId() !== name) {
                ui.select(name);
            }
            silent = false;
        }
    });
}

var baseicons = {
    good: "check",
    error: "warning",
    saving: "refresh fa-spin"
};
var basetext = {
    good: "Ok",
    error: "Error",
    saving: "Connecting..."
};
function Status(app, view, config) {
    var status = "good";
    var count = 0;
    var iserror = false;
    var expireDelay = config.expire;
    if (!expireDelay && expireDelay !== false) {
        expireDelay = 2000;
    }
    var texts = config.texts || basetext;
    var icons = config.icons || baseicons;
    if (typeof config === "string") {
        config = { target: config };
    }
    function refresh(content) {
        var area = view.$$(config.target);
        if (area) {
            if (!content) {
                content = "<div class='status_" + status + "'><span class='webix_icon fa-" + icons[status] + "'></span> " + texts[status] + "</div>";
            }
            area.setHTML(content);
        }
    }
    function success() {
        count--;
        setStatus("good");
    }
    function fail(err) {
        count--;
        setStatus("error", err);
    }
    function start(promise) {
        count++;
        setStatus("saving");
        if (promise && promise.then) {
            promise.then(success, fail);
        }
    }
    function getStatus() {
        return status;
    }
    function hideStatus() {
        if (count === 0) {
            refresh(" ");
        }
    }
    function setStatus(mode, err) {
        if (count < 0) {
            count = 0;
        }
        if (mode === "saving") {
            status = "saving";
            refresh();
        } else {
            iserror = mode === "error";
            if (count === 0) {
                status = iserror ? "error" : "good";
                if (iserror) {
                    app.error("app:error:server", [err.responseText || err]);
                } else {
                    if (expireDelay) {
                        setTimeout(hideStatus, expireDelay);
                    }
                }
                refresh();
            }
        }
    }
    function track(data) {
        var dp = app.webix.dp(data);
        if (dp) {
            view.on(dp, "onAfterDataSend", start);
            view.on(dp, "onAfterSaveError", function (_id, _obj, response) {
                return fail(response);
            });
            view.on(dp, "onAfterSave", success);
        }
    }
    app.setService("status", {
        getStatus: getStatus,
        setStatus: setStatus,
        track: track
    });
    if (config.remote) {
        view.on(app.webix, "onRemoteCall", start);
    }
    if (config.ajax) {
        view.on(app.webix, "onBeforeAjax", function (_mode, _url, _data, _request, _headers, _files, promise) {
            start(promise);
        });
    }
    if (config.data) {
        track(config.data);
    }
}

function Theme(app, _view, config) {
    config = config || {};
    var storage = config.storage;
    var theme = storage ? storage.get("theme") || "flat-default" : config.theme || "flat-default";
    var service = {
        getTheme: function getTheme() {
            return theme;
        },
        setTheme: function setTheme(name, silent) {
            var parts = name.split("-");
            var links = document.getElementsByTagName("link");
            for (var i = 0; i < links.length; i++) {
                var lname = links[i].getAttribute("title");
                if (lname) {
                    if (lname === name || lname === parts[0]) {
                        links[i].disabled = false;
                    } else {
                        links[i].disabled = true;
                    }
                }
            }
            app.webix.skin.set(parts[0]);
            // remove old css
            app.webix.html.removeCss(document.body, "theme-" + theme);
            // add new css
            app.webix.html.addCss(document.body, "theme-" + name);
            theme = name;
            if (storage) {
                storage.put("theme", name);
            }
            if (!silent) {
                app.refresh();
            }
        }
    };
    app.setService("theme", service);
    service.setTheme(theme, true);
}

function copyParams(data, url, route) {
    for (var i = 0; i < route.length; i++) {
        data[route[i]] = url[i + 1] ? url[i + 1].page : "";
    }
}
function UrlParam(app, view, config) {
    var route = config.route || config;
    var data = {};
    view.on(app, "app:urlchange", function (subview, segment) {
        if (view === subview) {
            copyParams(data, segment.suburl(), route);
            segment.size(route.length + 1);
        }
    });
    var os = view.setParam;
    var og = view.getParam;
    view.setParam = function (name, value, show) {
        var index = route.indexOf(name);
        if (index >= 0) {
            data[name] = value;
            this._segment.update("", value, index + 1);
            if (show) {
                return view.show(null);
            }
        } else {
            return os.call(this, name, value, show);
        }
    };
    view.getParam = function (key, mode) {
        var val = data[key];
        if (typeof val !== "undefined") {
            return val;
        }
        return og.call(this, key, mode);
    };
    copyParams(data, view.getUrl(), route);
}

function User(app, _view, config) {
    config = config || {};
    var login = config.login || "/login";
    var logout = config.logout || "/logout";
    var afterLogin = config.afterLogin || app.config.start;
    var afterLogout = config.afterLogout || "/login";
    var ping = config.ping || 5 * 60 * 1000;
    var model = config.model;
    var user = config.user;
    var service = {
        getUser: function getUser() {
            return user;
        },
        getStatus: function getStatus(server) {
            if (!server) {
                return user !== null;
            }
            return model.status().catch(function () {
                return null;
            }).then(function (data) {
                user = data;
            });
        },
        login: function login(name, pass) {
            return model.login(name, pass).then(function (data) {
                user = data;
                if (!data) {
                    throw new Error("Access denied");
                }
                app.callEvent("app:user:login", [user]);
                app.show(afterLogin);
            });
        },
        logout: function logout() {
            user = null;
            return model.logout().then(function (res) {
                app.callEvent("app:user:logout", []);
                return res;
            });
        }
    };
    function canNavigate(url, obj) {
        if (url === logout) {
            service.logout();
            obj.redirect = afterLogout;
        } else if (url !== login && !service.getStatus()) {
            obj.redirect = login;
        }
    }
    app.setService("user", service);
    app.attachEvent("app:guard", function (url, _$root, obj) {
        if (config.public && config.public(url)) {
            return true;
        }
        if (typeof user === "undefined") {
            obj.confirm = service.getStatus(true).then(function () {
                return canNavigate(url, obj);
            });
        }
        return canNavigate(url, obj);
    });
    if (ping) {
        setInterval(function () {
            return service.getStatus(true);
        }, ping);
    }
}

/*
MIT License
Copyright (c) 2019 XB Software
*/
var webix = window.webix;
if (webix) {
    patch(webix);
}
var plugins = {
    UnloadGuard: UnloadGuard, Locale: Locale, Menu: Menu, Theme: Theme, User: User, Status: Status, UrlParam: UrlParam
};
var w = window;
if (!w.Promise) {
    w.Promise = w.webix.promise;
}


//# sourceMappingURL=jet.js.map

/***/ }),

/***/ "./sources/authorization.js":
/*!**********************************!*\
  !*** ./sources/authorization.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logoutUrl = 'http://localhost:3000/logout';
var loginUrl = 'http://localhost:3000/login';
var registerUrl = 'http://localhost:3000/register';

var Authorization = function () {
	function Authorization() {
		_classCallCheck(this, Authorization);
	}

	Authorization.prototype.register = function register(obj) {
		return webix.ajax().post(registerUrl, obj);
	};

	Authorization.prototype.login = function login(obj) {
		return webix.ajax().post(loginUrl, obj);
	};

	Authorization.prototype.logout = function logout() {
		return webix.ajax().get(logoutUrl);
	};

	return Authorization;
}();

/* harmony default export */ __webpack_exports__["default"] = (Authorization);

/***/ }),

/***/ "./sources/locales sync recursive ^\\.\\/.*$":
/*!***************************************!*\
  !*** ./sources/locales sync ^\.\/.*$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en": "./sources/locales/en.js",
	"./en.js": "./sources/locales/en.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./sources/locales sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./sources/locales/en.js":
/*!*******************************!*\
  !*** ./sources/locales/en.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./sources/models/groups.js":
/*!**********************************!*\
  !*** ./sources/models/groups.js ***!
  \**********************************/
/*! exports provided: groups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return groups; });
var groups = new webix.DataCollection({
	url: 'http://localhost:3000/groups/',
	save: {
		url: 'rest->http://localhost:3000/groups/',
		updateFromResponse: true
	},
	scheme: {
		$init: function $init(obj) {
			obj.creationDate = new Date(obj.creationDate);
		}
	}
});

/***/ }),

/***/ "./sources/models/languages.js":
/*!*************************************!*\
  !*** ./sources/models/languages.js ***!
  \*************************************/
/*! exports provided: languages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "languages", function() { return languages; });
var languages = new webix.DataCollection({
	url: 'http://localhost:3000/languages/',
	save: {
		url: 'rest->http://localhost:3000/languages/',
		updateFromResponse: true
	}
});

/***/ }),

/***/ "./sources/models/testresults.js":
/*!***************************************!*\
  !*** ./sources/models/testresults.js ***!
  \***************************************/
/*! exports provided: testresults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testresults", function() { return testresults; });
var testresults = new webix.DataCollection({
	url: 'http://localhost:3000/testresults/',
	save: {
		url: 'rest->http://localhost:3000/testresults/',
		updateFromResponse: true
	},
	scheme: {
		$init: function $init(obj) {
			obj.passedDate = new Date(obj.passedDate);
		}
	}
});

/***/ }),

/***/ "./sources/models/words.js":
/*!*********************************!*\
  !*** ./sources/models/words.js ***!
  \*********************************/
/*! exports provided: words */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "words", function() { return words; });
var words = new webix.DataCollection({
	url: 'http://localhost:3000/words/',
	save: {
		url: 'rest->http://localhost:3000/words/',
		updateFromResponse: true
	}
});

/***/ }),

/***/ "./sources/myapp.js":
/*!**************************!*\
  !*** ./sources/myapp.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./sources/styles/app.css");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var MyApp = function (_JetApp) {
	_inherits(MyApp, _JetApp);

	function MyApp(config) {
		_classCallCheck(this, MyApp);

		var defaults = {
			id: 'webix-jet-app',
			version: '1.1.0',
			router:  false ? undefined : webix_jet__WEBPACK_IMPORTED_MODULE_1__["HashRouter"],
			debug: !false,
			start: '/index'
		};

		return _possibleConstructorReturn(this, _JetApp.call(this, _extends({}, defaults, config)));
	}

	return MyApp;
}(webix_jet__WEBPACK_IMPORTED_MODULE_1__["JetApp"]);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);


if (true) {
	webix.ready(function () {
		var app = new MyApp();
		app.attachEvent('app:guard', function (url, view, nav) {
			if (url.indexOf('/home') !== -1) {
				webix.ajax().get('http://localhost:3000/check').then(function (res) {
					var response = res.json();
					if (!response.allowAccess) {
						app.show('/index');
					}
				}, function (error) {
					if (error.status == 401) {
						app.show('/index');
					}
				});
			}
		});

		app.render();
	});
}

/***/ }),

/***/ "./sources/styles/app.css":
/*!********************************!*\
  !*** ./sources/styles/app.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./sources/views sync recursive ^\\.\\/.*$":
/*!*************************************!*\
  !*** ./sources/views sync ^\.\/.*$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": "./sources/views/index.js",
	"./addGroup": "./sources/views/addGroup.js",
	"./addGroup.js": "./sources/views/addGroup.js",
	"./addWord": "./sources/views/addWord.js",
	"./addWord.js": "./sources/views/addWord.js",
	"./createTest": "./sources/views/createTest.js",
	"./createTest.js": "./sources/views/createTest.js",
	"./group": "./sources/views/group.js",
	"./group.js": "./sources/views/group.js",
	"./home": "./sources/views/home.js",
	"./home.js": "./sources/views/home.js",
	"./index": "./sources/views/index.js",
	"./index.js": "./sources/views/index.js",
	"./main": "./sources/views/main.js",
	"./main.js": "./sources/views/main.js",
	"./profile": "./sources/views/profile.js",
	"./profile.js": "./sources/views/profile.js",
	"./register": "./sources/views/register.js",
	"./register.js": "./sources/views/register.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./sources/views sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./sources/views/addGroup.js":
/*!***********************************!*\
  !*** ./sources/views/addGroup.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var models_groups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/groups */ "./sources/models/groups.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var addGroupForm = function (_JetView) {
	_inherits(addGroupForm, _JetView);

	function addGroupForm() {
		_classCallCheck(this, addGroupForm);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	addGroupForm.prototype.config = function config() {
		var _this2 = this;

		return {
			view: 'window',
			localId: 'formPopup',
			position: 'center',
			head: 'Group name',
			body: {
				view: 'form',
				localId: 'formView',
				elements: [{ view: 'text', name: 'groupName', label: '' }, {
					margin: 20,
					cols: [{
						view: 'button', type: 'form', value: 'Save',
						click: function click() {
							_this2.saveGroup();
							_this2.hideWindow();
						}
					}, {
						view: 'button', value: 'Cancel',
						click: function click() {
							_this2.getRoot().hide();
						}
					}]
				}],
				rules: {
					'groupName': webix.rules.isNotEmpty
				}
			}
		};
	};

	addGroupForm.prototype.init = function init() {
		this.mainWindow = this.$$('formPopup');
	};

	addGroupForm.prototype.showWindow = function showWindow() {
		this.mainWindow.show();
	};

	addGroupForm.prototype.hideWindow = function hideWindow() {
		this.mainWindow.hide();
	};

	addGroupForm.prototype.saveGroup = function saveGroup() {
		var form = this.$$('formView');
		var values = form.getValues();
		values.creationDate = new Date();

		models_groups__WEBPACK_IMPORTED_MODULE_1__["groups"].add(values);
		this.clearForm(form);
	};

	addGroupForm.prototype.clearForm = function clearForm(form) {
		form.clearValidation();
		form.clear();
	};

	return addGroupForm;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (addGroupForm);

/***/ }),

/***/ "./sources/views/addWord.js":
/*!**********************************!*\
  !*** ./sources/views/addWord.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var models_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/languages */ "./sources/models/languages.js");
/* harmony import */ var models_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/words */ "./sources/models/words.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var addWordForm = function (_JetView) {
	_inherits(addWordForm, _JetView);

	function addWordForm() {
		_classCallCheck(this, addWordForm);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	addWordForm.prototype.mainRow = function mainRow(count, langs) {
		var _this2 = this;

		return {
			margin: 20,
			cols: [{ view: 'combo', label: 'Language', labelWidth: 72, labelAlign: 'right', width: 180, name: 'language' + count, options: { body: { template: '#value#', data: langs } } }, { view: 'text', label: 'Translation', labelWidth: 82, labelAlign: 'right', name: 'translation' + count }, {
				view: 'button',
				id: 'addTranslation',
				value: 'Add translation',
				type: 'form',
				width: 140,
				click: function click() {
					_this2.addTranslation();
				}
			}]
		};
	};

	addWordForm.prototype.config = function config() {
		var _this3 = this;

		return {
			view: 'window',
			localId: 'addWordForm',
			head: 'Add word',
			width: 600,
			position: 'center',
			body: {
				rows: [{
					view: 'form',
					localId: 'wordForm',
					elements: [{ view: 'text', name: 'id', localId: 'id', hidden: true }, { view: 'text', name: 'groupId', localId: 'groupId', hidden: true }, {
						view: 'label',
						label: 'Original word',
						height: 24
					}, {
						margin: 20,
						cols: [{ view: 'combo', label: 'Language', labelWidth: 72, labelAlign: 'right', width: 180, name: 'languageId', options: { body: { template: '#value#', data: models_languages__WEBPACK_IMPORTED_MODULE_1__["languages"] } } }, { view: 'text', label: 'Word', labelWidth: 82, labelAlign: 'right', name: 'word', localId: 'originalWord' }, { view: 'combo', label: 'POS', labelWidth: 40, labelAlign: 'right', width: 140, name: 'partOfSpeech', options: ['Noun', 'Pronoun', 'Verb', 'Adverb'] }]
					}],
					rules: {
						'languageId': webix.rules.isNotEmpty,
						'word': webix.rules.isNotEmpty,
						'partOfSpeech': webix.rules.isNotEmpty
					}
				}, {
					view: 'form',
					localId: 'translationsForm',
					elements: [{ view: 'text', name: 'wordId', localId: 'wordId', hidden: true }, {
						view: 'label',
						label: 'Translations',
						height: 24
					}, this.mainRow(1, models_languages__WEBPACK_IMPORTED_MODULE_1__["languages"])]
				}, {
					margin: 20,
					paddingY: 10,
					cols: [{}, {
						view: 'button', value: 'Save', type: 'form', localId: 'saveBtn', width: 100,
						click: function click() {
							_this3.saveForm();
						}
					}, {
						view: 'button', value: 'Cancel', width: 100,
						click: function click() {
							_this3.getRoot().hide();
						}
					}, {}]
				}]
			}
		};
	};

	addWordForm.prototype.init = function init() {
		var _this4 = this;

		this.translationsForm = this.$$('translationsForm');
		this.wordForm = this.$$('wordForm');
		this.addWordForm = this.$$('addWordForm');
		this.btnAddTranslation = $$('addTranslation');

		var allCombo = this.findAllCombo();
		allCombo.forEach(function (combo, i) {
			_this4.onComboChange(combo, i);
		});
	};

	addWordForm.prototype.findAllCombo = function findAllCombo() {
		return this.$$('addWordForm').queryView({ view: 'combo', label: 'Language' }, 'all');
	};

	addWordForm.prototype.onComboChange = function onComboChange(combo, i) {
		var _this5 = this;

		combo.attachEvent('onChange', function (newv, oldv) {

			//get all combo in form
			//need  to find all combo again, in case if new was adde
			var allCombo = _this5.findAllCombo();
			var combosArr = allCombo.slice();
			var allLangs = _extends({}, models_languages__WEBPACK_IMPORTED_MODULE_1__["languages"].data.pull);
			//remove from array combo where caught event
			combosArr.splice(i, 1);

			//for each combo remove from options list selected value

			combosArr.forEach(function (el) {
				return _this5.setOptions(el, allLangs, newv, oldv);
			});
		});
	};

	addWordForm.prototype.removeSelectedLangs = function removeSelectedLangs() {
		var allLangs = _extends({}, models_languages__WEBPACK_IMPORTED_MODULE_1__["languages"].data.pull);
		var allCombo = this.findAllCombo();

		allCombo.forEach(function (item) {
			var value = item.getValue();
			delete allLangs[value];
		});

		var newLangArr = Object.keys(allLangs).map(function (k) {
			return allLangs[k];
		});
		return newLangArr;
	};

	addWordForm.prototype.showWindow = function showWindow(id) {
		this.$$('groupId').setValue(id);
		this.getRoot().show();
		var wordId = webix.uid();
		this.$$('wordId').setValue(wordId);
		this.$$('id').setValue(wordId);
	};

	addWordForm.prototype.addTranslation = function addTranslation() {
		var rows = this.translationsForm.getChildViews();
		var rowsCount = rows.length;
		var target = rows[rowsCount - 1];

		webix.ui({ width: 140 }, target, this.btnAddTranslation);

		var index = this.translationsForm.getChildViews().length - 1;
		var langs = this.removeSelectedLangs();
		this.translationsForm.addView(this.mainRow(index, langs));

		var allCombo = this.findAllCombo();
		this.onComboChange(allCombo[index], index);
	};

	addWordForm.prototype.saveForm = function saveForm() {
		var word = this.wordForm.getValues();

		var count = this.translationsForm.getChildViews().length - 1;
		var translationValues = this.translationsForm.getValues();

		var translations = [];

		for (var i = 1; i < count; i++) {
			var tr = {
				word: translationValues['translation' + i],
				languageId: translationValues['language' + i]
			};
			translations.push(tr);
		}

		var batch = {
			word: word,
			translations: translations
		};

		if (this.wordForm.validate()) {
			models_words__WEBPACK_IMPORTED_MODULE_2__["words"].add(batch);
			this.hideWindow();
		}
	};

	addWordForm.prototype.hideWindow = function hideWindow() {
		this.wordForm.clearValidation();
		this.translationsForm.clearValidation();
		this.wordForm.clear();
		this.translationsForm.clear();
		this.addWordForm.hide();
	};

	addWordForm.prototype.setOptions = function setOptions(el, allLangs, newv, oldv) {
		// move to function
		var langs = el.getList().serialize();

		//return to options list value, if it was unselected
		if (oldv) {
			var oldVal = allLangs[oldv];
			langs.push(oldVal);
		}

		var index = langs.indexOf(langs.find(function (item) {
			return item.id === newv;
		}));
		langs.splice(index, 1);

		//set filtered list of languages
		el.define('options', langs);
		el.refresh();
	};

	return addWordForm;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (addWordForm);

/***/ }),

/***/ "./sources/views/createTest.js":
/*!*************************************!*\
  !*** ./sources/views/createTest.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var models_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/words */ "./sources/models/words.js");
/* harmony import */ var models_testresults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/testresults */ "./sources/models/testresults.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var createTestForm = function (_JetView) {
	_inherits(createTestForm, _JetView);

	function createTestForm() {
		_classCallCheck(this, createTestForm);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	createTestForm.prototype.config = function config() {
		var _this2 = this;

		return {
			view: 'window',
			localId: 'formPopup',
			position: 'center',
			head: 'Choose the language',
			body: {
				view: 'form',
				localId: 'chooseLangForm',
				margin: 10,
				paddingY: 20,
				elements: [{
					localId: 'chooseLang',
					view: 'combo',
					name: 'language'
				}, {
					view: 'button',
					value: 'Choose',
					type: 'form',
					click: function click(id) {
						var values = $$(id).getParentView().getValues();
						_this2.createTest(values.language);
					}
				}]
			}
		};
	};

	createTestForm.prototype.init = function init() {
		this.formPopup = this.$$('formPopup');
		this.groupId = this._data.id;
	};

	createTestForm.prototype.showWindow = function showWindow(languages) {
		this.$$('chooseLang').define('options', languages);
		this.getRoot().show();
	};

	createTestForm.prototype.shuffle = function shuffle(array) {
		var shuffledArr = [];
		var num = array.length;

		// While there remain elements to shuffle…
		while (num) {

			// Pick a remaining element…
			var i = Math.floor(Math.random() * array.length);

			// If not already shuffled, move it to the new array.
			if (i in array) {
				shuffledArr.push(array[i]);
				delete array[i];
				num--;
			}
		}

		return shuffledArr;
	};

	createTestForm.prototype.createTest = function createTest(language) {
		var _this3 = this;

		this.score = 0;
		var groupId = this.groupId;

		models_words__WEBPACK_IMPORTED_MODULE_1__["words"].waitData.then(function () {
			//find words of this group
			var wordsList = models_words__WEBPACK_IMPORTED_MODULE_1__["words"].find(function (item) {
				return item.groupId === groupId;
			});

			// find words, which have translations on selected language

			wordsList = wordsList.filter(function (item) {
				var wordItem = item.translations.find(function (tr) {
					return tr.languageId === language;
				});
				if (wordItem) {
					return true;
				}
				return false;
			});

			var wordsArr = models_words__WEBPACK_IMPORTED_MODULE_1__["words"].serialize(); // create an array of all words
			var translationsArr = [];

			// find all translations on selected language
			wordsArr.forEach(function (item) {
				var translation = item.translations.find(function (tr) {
					return tr.languageId === language;
				});
				if (translation) {
					// if original of this translation is of the same part of speech as the word
					// push it to array of translations
					translationsArr.push(translation);
					translation.partOfSpeech = item.partOfSpeech;
				}
			});

			wordsList = _this3.shuffle(wordsList); //mix the words array

			// if in array more then 10 words, cut it
			if (wordsList.length > 10) {
				wordsList.splice(wordsList[10], wordsList.length - 10);
			}

			_this3.wordsList = wordsList;
			_this3.translationsArr = translationsArr;

			_this3.showQuestion(0, wordsList, translationsArr);
		});
	};

	createTestForm.prototype.showQuestion = function showQuestion(n, wordsList, translationsArr) {
		if (n < wordsList.length) {
			var wordObj = wordsList[n];
			var rightAnswer = translationsArr.find(function (tr) {
				return tr.wordId === wordObj.id;
			});
			var translations = translationsArr.filter(function (tr) {
				return tr.partOfSpeech === wordObj.partOfSpeech && tr.wordId != wordObj.id;
			});

			// if in array more then 3 words, cut it
			if (translations.length > 3) {
				translations.splice(translations[3], translations.length - 3);
			}

			translations.push(rightAnswer); // add to translations array correct answer
			translations = this.shuffle(translations); //mix the translations array

			var id = n > 0 ? 'translationsButtons' : 'chooseLangForm';

			this.changeButtons(n, id, translations);
			this.formPopup.getHead().setHTML(wordObj.word);
			this.$$('currentWordId').setValue(wordObj.id);
		} else {
			this.saveResults();
			this.showResults();
			this.formPopup.getHead().setHTML('Your result');
		}
	};

	createTestForm.prototype.setTranslations = function setTranslations(translations, n) {
		var _this4 = this;

		var buttons = [];
		translations.forEach(function (tr) {
			buttons.push({
				view: 'button',
				value: tr.word,
				type: 'form',
				autowidth: true,
				click: function click() {
					_this4.answerAction(tr, n);
				}
			});
		});
		return buttons;
	};

	createTestForm.prototype.answerAction = function answerAction(translation, n) {
		var wordId = this.$$('currentWordId').getValue();
		if (translation.wordId === wordId) {
			if (translation.partOfSpeech === 'Noun' || translation.partOfSpeech === 'Verb') {
				this.score += 2;
			} else {
				this.score += 1;
			}
		}
		this.showQuestion(++n, this.wordsList, this.translationsArr);
	};

	createTestForm.prototype.changeButtons = function changeButtons(n, id, translations) {
		webix.ui({
			view: 'form',
			localId: 'translationsButtons',
			borderless: true,
			type: 'clean',
			elements: [{
				view: 'text',
				localId: 'currentWordId',
				hidden: true
			}, {
				margin: 10,
				padding: 10,
				cols: this.setTranslations(translations, n)
			}]
		}, this.formPopup, this.$$(id));
	};

	createTestForm.prototype.showResults = function showResults() {
		var _this5 = this;

		webix.ui({
			padding: 30,
			margin: 15,
			rows: [{
				template: this.score,
				borderless: true,
				css: 'center'
			}, {
				view: 'button',
				value: 'Ok',
				type: 'form',
				width: 100,
				click: function click() {
					_this5.formPopup.hide();
					_this5._parent.refresh();
				}
			}]
		}, this.formPopup, this.$$('translationsButtons'));
	};

	createTestForm.prototype.saveResults = function saveResults() {
		var result = {
			passedDate: new Date(),
			groupId: this.groupId,
			score: this.score
		};
		models_testresults__WEBPACK_IMPORTED_MODULE_2__["testresults"].add(result);
	};

	return createTestForm;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (createTestForm);

/***/ }),

/***/ "./sources/views/group.js":
/*!********************************!*\
  !*** ./sources/views/group.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var models_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/languages */ "./sources/models/languages.js");
/* harmony import */ var models_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/words */ "./sources/models/words.js");
/* harmony import */ var _createTest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTest */ "./sources/views/createTest.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var GroupView = function (_JetView) {
	_inherits(GroupView, _JetView);

	function GroupView() {
		_classCallCheck(this, GroupView);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	GroupView.prototype.config = function config() {
		var _this2 = this;

		var dtable = {
			view: 'datatable',
			select: true,
			localId: 'wordsList',
			columns: [{
				id: 'word',
				fillspace: 1,
				header: 'Word'
			}, {
				id: 'partOfSpeech',
				fillspace: 1,
				header: 'POS'
			}, {
				id: 'removeCol',
				header: 'Remove',
				css: 'center',
				width: 70,
				template: '{common.trashIcon()}'
			}],
			onClick: {
				'wxi-trash': function wxiTrash(e, id) {
					webix.confirm({
						text: 'Remove word?',
						callback: function callback(result) {
							if (result) {
								models_words__WEBPACK_IMPORTED_MODULE_2__["words"].remove(id);
								_this2.$$('wordsList').remove(id);
							}
							return false;
						}
					});
				}
			}
		};

		var exportBtn = {
			view: 'button',
			value: 'Export words',
			width: 150,
			click: function click() {
				webix.toExcel(_this2.$$('wordsList'));
			}
		};

		var testBtn = {
			view: 'button',
			type: 'form',
			value: 'Test',
			width: 100,
			click: function click() {
				_this2.createTest();
			}
		};

		return {
			rows: [dtable, {
				cols: [testBtn, {}, exportBtn]
			}]
		};
	};

	GroupView.prototype.init = function init() {
		var _this3 = this;

		this.testPopup = this.ui(_createTest__WEBPACK_IMPORTED_MODULE_3__["default"]);

		webix.promise.all([models_words__WEBPACK_IMPORTED_MODULE_2__["words"], models_languages__WEBPACK_IMPORTED_MODULE_1__["languages"]]).then(function (res) {
			var id = _this3.getParam('id', true);
			var grid = _this3.$$('wordsList');

			var wordsList = models_words__WEBPACK_IMPORTED_MODULE_2__["words"].find(function (item) {
				return item.groupId == id;
			});

			var trArr = [];
			var langsList = [];

			wordsList = wordsList.map(function (word) {
				var translations = word.translations;
				translations.forEach(function (tr) {

					//find language value
					var lang = models_languages__WEBPACK_IMPORTED_MODULE_1__["languages"].getItem(tr.languageId);
					var langVal = lang.value;

					//if language is unique for this group, push to arr
					if (trArr.indexOf(langVal) == -1) {
						trArr.push(langVal);
						langsList.push(lang);
					}

					//set new property to word
					word[langVal] = tr.word;
					return tr;
				});
				return word;
			});

			_this3.langsList = langsList;

			_this3.addColums(trArr, grid);

			grid.parse(wordsList);
		});
	};

	GroupView.prototype.addColums = function addColums(arr, grid) {
		var columns = webix.toArray(grid.config.columns);
		arr.forEach(function (lang, i) {
			columns.insertAt({
				id: arr[i],
				header: arr[i],
				fillspace: 1
			}, i + 1);
		});

		grid.refreshColumns();
	};

	GroupView.prototype.createTest = function createTest() {
		this.testPopup.showWindow(this.langsList);
	};

	return GroupView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (GroupView);

/***/ }),

/***/ "./sources/views/home.js":
/*!*******************************!*\
  !*** ./sources/views/home.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorization */ "./sources/authorization.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var TopView = function (_JetView) {
	_inherits(TopView, _JetView);

	function TopView() {
		_classCallCheck(this, TopView);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	TopView.prototype.config = function config() {
		var header = {
			type: 'header', template: this.app.config.name, css: 'webix_header app_header'
		};

		var menu = {
			view: 'menu', id: 'top:menu',
			css: 'app_menu',
			width: 180, layout: 'y', select: true,
			template: '<span class="webix_icon #icon#"></span> #value# ',
			value: 'Home',
			data: [{ value: 'Home', id: 'main', icon: 'fas fa-home' }, { value: 'Profile', id: 'profile', icon: 'fas fa-user' }]
		};

		var logout = {
			view: 'button',
			localId: 'logoutBtn',
			value: 'Logout',
			type: 'form'
		};

		var ui = {
			type: 'clean', paddingX: 5, css: 'app_layout',
			cols: [{ paddingX: 5, paddingY: 10, rows: [{ css: 'webix_shadow_medium', rows: [header, menu, logout] }] }, { view: 'resizer', width: 5 }, { type: 'wide', paddingY: 10, paddingX: 5, rows: [{ $subview: true }] }]
		};

		return ui;
	};

	TopView.prototype.init = function init() {
		var _this2 = this;

		this.use(webix_jet__WEBPACK_IMPORTED_MODULE_0__["plugins"].Menu, 'top:menu');

		var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

		this.$$('logoutBtn').attachEvent('onItemClick', function () {
			var app = _this2.app;

			authorization.logout().then(function (response) {
				if (response) {
					app.show('/index');
				}
			});
		});
	};

	return TopView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (TopView);

/***/ }),

/***/ "./sources/views/index.js":
/*!********************************!*\
  !*** ./sources/views/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorization */ "./sources/authorization.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var IndexPage = function (_JetView) {
	_inherits(IndexPage, _JetView);

	function IndexPage() {
		_classCallCheck(this, IndexPage);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	IndexPage.prototype.config = function config() {
		var _this2 = this;

		var loginForm = {
			view: 'form',
			localId: 'loginForm',
			width: 300,
			elements: [{ view: 'text', label: 'Username', name: 'username' }, { view: 'text', type: 'password', label: 'Password', name: 'password' }, {
				margin: 5, cols: [{ view: 'button', localId: 'loginBtn', value: 'Login', type: 'form' }, { view: 'button', value: 'Cancel' }]
			}]
		};

		var link = {
			view: 'button',
			value: 'Create an account',
			click: function click() {
				_this2.show('/register');
			}
		};

		return {
			cols: [{}, {
				rows: [{}, loginForm, link, {}]
			}, {}]
		};
	};

	IndexPage.prototype.init = function init() {
		var _this3 = this;

		this.$$('loginBtn').attachEvent('onItemClick', function () {
			var values = _this3.$$('loginForm').getValues();
			var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

			authorization.login(values).then(function (response) {
				if (response) {
					_this3.show('/home/main');
				} else {
					webix.message(response);
				}
			});
		});
	};

	return IndexPage;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./sources/views/main.js":
/*!*******************************!*\
  !*** ./sources/views/main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var models_groups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/groups */ "./sources/models/groups.js");
/* harmony import */ var _addGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addGroup */ "./sources/views/addGroup.js");
/* harmony import */ var _addWord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addWord */ "./sources/views/addWord.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var MainView = function (_JetView) {
	_inherits(MainView, _JetView);

	function MainView() {
		_classCallCheck(this, MainView);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	MainView.prototype.config = function config() {
		var _this2 = this;

		var testResults = {
			view: 'datatable',
			id: 'groupList',
			select: true,
			columns: [{
				id: '_id',
				hidden: true
			}, {
				id: 'groupName',
				sort: 'text',
				fillspace: 3,
				header: 'Name'
			}, {
				id: 'words',
				sort: 'int',
				fillspace: 1,
				minWidth: 50,
				css: 'center',
				header: 'Count'
			}, {
				id: 'creationDate',
				width: 80,
				header: 'Created',
				format: webix.Date.dateToStr("%d %M")
			}, {
				id: 'viewCol',
				header: 'View',
				css: 'center',
				width: 50,
				template: '<i class="fas fa-eye"></i>'
			}, {
				header: 'Add',
				css: 'center',
				width: 50,
				template: '<i class="fas fa-plus"></i>'
			}, {
				id: 'removeCol',
				header: 'Remove',
				css: 'center',
				width: 70,
				template: '{common.trashIcon()}'
			}],
			onClick: {
				'fa-eye': function faEye(e, id) {
					_this2.show('/home/group?id=' + id);
				},
				'fa-plus': function faPlus(e, id) {
					_this2.addWord.showWindow(id);
				},
				'wxi-trash': function wxiTrash(e, id) {
					webix.confirm({
						text: 'Remove group?',
						callback: function callback(result) {
							if (result) {
								models_groups__WEBPACK_IMPORTED_MODULE_1__["groups"].remove(id);
							}
							return false;
						}
					});
				}
			}
		};

		var button = {
			view: 'button',
			id: 'addGroup',
			value: 'Add group',
			type: 'form',
			inputWidth: 100,
			click: function click() {
				_this2.addGroup.showWindow();
			}
		};

		return {
			rows: [testResults, button]
		};
	};

	MainView.prototype.init = function init() {
		this.addGroup = this.ui(_addGroup__WEBPACK_IMPORTED_MODULE_2__["default"]);
		this.addWord = this.ui(_addWord__WEBPACK_IMPORTED_MODULE_3__["default"]);

		$$('groupList').parse(models_groups__WEBPACK_IMPORTED_MODULE_1__["groups"]);
	};

	return MainView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (MainView);

/***/ }),

/***/ "./sources/views/profile.js":
/*!**********************************!*\
  !*** ./sources/views/profile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var models_testresults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/testresults */ "./sources/models/testresults.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ProfileView = function (_JetView) {
	_inherits(ProfileView, _JetView);

	function ProfileView() {
		_classCallCheck(this, ProfileView);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	ProfileView.prototype.config = function config() {

		var testResults = {
			view: 'datatable',
			localId: 'testResults',
			columns: [{
				id: 'rating',
				header: 'Rating',
				minWidth: 80
			}, {
				id: 'groupId',
				header: 'Group',
				template: '#groupId.groupName#',
				fillspace: 1,
				minWidth: 120
			}, {
				id: 'score',
				header: 'Result',
				minWidth: 80
			}, {
				id: 'passedDate',
				header: 'Date',
				format: webix.Date.dateToStr("%d %M"),
				width: 80
			}],
			data: []
		};

		var button = {
			view: 'button',
			id: 'clearAll',
			value: 'Clear all',
			type: 'form',
			inputWidth: 100
		};

		return {
			rows: [testResults, button]
		};
	};

	ProfileView.prototype.init = function init() {
		var _this2 = this;

		models_testresults__WEBPACK_IMPORTED_MODULE_1__["testresults"].waitData.then(function () {
			var n = 1;
			var recordsArr = models_testresults__WEBPACK_IMPORTED_MODULE_1__["testresults"].serialize();
			recordsArr.forEach(function (record, i, recordsArr) {
				if (i > 0) {
					var prevRec = recordsArr[i - 1];
					if (record.score > prevRec.score) {
						n += 1;
					}
				}
			});
			var data = recordsArr.map(function (record, i, recordsArr) {
				if (i > 0) {
					var prevRec = recordsArr[i - 1];
					if (record.score > prevRec.score) {
						n -= 1;
					}
				}
				record.rating = n;
				return record;
			}).reverse();
			_this2.$$('testResults').parse(data);
		});
	};

	return ProfileView;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (ProfileView);

/***/ }),

/***/ "./sources/views/register.js":
/*!***********************************!*\
  !*** ./sources/views/register.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var webix_jet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webix-jet */ "./node_modules/webix-jet/dist/es6/jet.js");
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authorization */ "./sources/authorization.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RegisterPage = function (_JetView) {
	_inherits(RegisterPage, _JetView);

	function RegisterPage() {
		_classCallCheck(this, RegisterPage);

		return _possibleConstructorReturn(this, _JetView.apply(this, arguments));
	}

	RegisterPage.prototype.config = function config() {

		var registerForm = {
			view: 'form',
			localId: 'registerForm',
			width: 300,
			elements: [{ view: 'text', label: 'Uername', name: 'username' }, { view: 'text', type: 'password', label: 'Password', name: 'password' }, {
				margin: 5, cols: [{
					view: 'button', localId: 'registerBtn', value: 'Register', type: 'form'
				}]
			}]
		};

		return {
			cols: [{}, {
				rows: [{}, registerForm, {}]
			}, {}]
		};
	};

	RegisterPage.prototype.init = function init() {
		var _this2 = this;

		this.$$('registerBtn').attachEvent('onItemClick', function () {
			var values = _this2.$$('registerForm').getValues();
			var authorization = new _authorization__WEBPACK_IMPORTED_MODULE_1__["default"]();

			authorization.register(values).then(function (response) {
				if (response) {
					_this2.show('/home/main');
				}
			});
		});
	};

	return RegisterPage;
}(webix_jet__WEBPACK_IMPORTED_MODULE_0__["JetView"]);

/* harmony default export */ __webpack_exports__["default"] = (RegisterPage);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYml4LWpldC9kaXN0L2VzNi9qZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9hdXRob3JpemF0aW9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbG9jYWxlcyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9tb2RlbHMvZ3JvdXBzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2xhbmd1YWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL21vZGVscy90ZXN0cmVzdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL21vZGVscy93b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL215YXBwLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9hZGRHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2FkZFdvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9jcmVhdGVUZXN0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9ob21lLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9tYWluLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbIkpldEJhc2UiLCJ3ZWJpeCIsIndlYml4SmV0IiwiX2V2ZW50cyIsIl9zdWJzIiwiX2RhdGEiLCJnZXRSb290IiwiX3Jvb3QiLCJkZXN0cnVjdG9yIiwiX2RldGFjaEV2ZW50cyIsIl9kZXN0cm95U3VicyIsIl9jb250YWluZXIiLCJhcHAiLCJfcGFyZW50Iiwic2V0UGFyYW0iLCJpZCIsInZhbHVlIiwidXJsIiwiX3NlZ21lbnQiLCJ1cGRhdGUiLCJzaG93IiwiZ2V0UGFyYW0iLCJwYXJlbnQiLCJ2aWV3IiwiZ2V0UGFyZW50VmlldyIsImdldFVybCIsInN1YnVybCIsImdldFVybFN0cmluZyIsInRvU3RyaW5nIiwiJCQiLCJyb290IiwicXVlcnlWaWV3Iiwib2JqIiwiY29uZmlnIiwibG9jYWxJZCIsIiRzY29wZSIsIm9uIiwibmFtZSIsImNvZGUiLCJhdHRhY2hFdmVudCIsInB1c2giLCJjb250YWlucyIsImtleSIsImtpZCIsImdldFN1YlZpZXciLCJzdWIiLCJnZXRTdWJWaWV3SW5mbyIsInN1YnZpZXciLCJwb3B1cCIsImV2ZW50cyIsImkiLCJsZW5ndGgiLCJkZXRhY2hFdmVudCIsInN1YlZpZXciLCJfaW5pdF91cmxfZGF0YSIsImN1cnJlbnQiLCJleHRlbmQiLCJwYXJhbXMiLCJfZ2V0RGVmYXVsdFN1YiIsImRlZmF1bHQiLCJicmFuY2giLCJjaGlsZCIsIl9yb3V0ZWRfdmlldyIsInBhcnNlIiwic3Vic3RyIiwicGFydHMiLCJzcGxpdCIsImNodW5rcyIsInRlc3QiLCJyZXN1bHQiLCJwb3MiLCJpbmRleE9mIiwicGFyYW0iLCJkY2h1bmsiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYWdlIiwiaXNOZXciLCJ1cmwyc3RyIiwic3RhY2siLCJjaHVuayIsIm9iajJzdHIiLCJqb2luIiwic3RyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiUm91dGUiLCJyb3V0ZSIsImluZGV4IiwiX25leHQiLCJwYXRoIiwibmV4dCIsInNsaWNlIiwic2hpZnQiLCJyZWZyZXNoIiwiX2pvaW4iLCJraWRzIiwib2xkIiwiY29uY2F0IiwiYXBwZW5kIiwiUHJvbWlzZSIsInJlcyIsInJlaiIsInJlZGlyZWN0IiwiY29uZmlybSIsInJlc29sdmUiLCJjYWxsRXZlbnQiLCJjYXRjaCIsInRoZW4iLCJzaXplIiwibiIsIkpldFZpZXciLCJfY2hpbGRyZW4iLCJ1aSIsImNvbnRhaW5lciIsImpldHZpZXciLCJjcmVhdGVWaWV3IiwicmVuZGVyIiwidGFyZ2V0IiwiX3JlbmRlckZyYW1lTG9jayIsIl9zaG93Iiwic2VnbWVudCIsIl91cmxDaGFuZ2UiLCJsaW5rUm91dGVyIiwiZ2V0Um91dGVyIiwic2V0Iiwic2lsZW50IiwiaW5pdCIsIl8kdmlldyIsIl8kIiwicmVhZHkiLCJfJHVybCIsIm1lc3NhZ2UiLCJ1cmxDaGFuZ2UiLCJkZXN0cm95IiwiX2Rlc3Ryb3lLaWRzIiwidXNlIiwicGx1Z2luIiwidGFnTmFtZSIsIl9yZW5kZXIiLCJkb2N1bWVudCIsImJvZHkiLCJ0b05vZGUiLCJfcmVuZGVyX2ZpbmFsIiwiY2ZnIiwic2xvdCIsInJlamVjdCIsInJlc3BvbnNlIiwiY29weUNvbmZpZyIsIm9sZHVpIiwiYXNXaW4iLCJzZXRQb3NpdGlvbiIsImlzVmlzaWJsZSIsIl9pbml0IiwiX2luaXRVcmwiLCJlIiwiX2luaXRFcnJvciIsImVyciIsIndhaXRzIiwiZnJhbWUiLCJ3YWl0IiwiYWxsIiwibG9jayIsIl9yZW5kZXJGcmFtZSIsIl9jcmVhdGVTdWJWaWV3IiwiZXJyb3IiLCJjcmVhdGVGcm9tVVJMIiwidWlzIiwiSmV0Vmlld1JhdyIsIl91aSIsIlN1YlJvdXRlciIsImNiIiwiYSIsImdldCIsIl9vbmNlIiwiSmV0QXBwQmFzZSIsIndpbmRvdyIsInZlcnNpb24iLCJzdGFydCIsIl9zZXJ2aWNlcyIsIkV2ZW50U3lzdGVtIiwiX3N1YlNlZ21lbnQiLCJnZXRTZXJ2aWNlIiwic2V0U2VydmljZSIsImhhbmRsZXIiLCJwcm90b3R5cGUiLCIkc3VidmlldyIsImFkZFN1YlZpZXciLCJBcnJheSIsIm1ldGhvZCIsInBvaW50IiwiRGF0YUNvbGxlY3Rpb24iLCJSZWdFeHAiLCJEYXRlIiwiY29weSIsIiRyb3V0ZXIiLCJjbGlja0hhbmRsZXIiLCJzcmNFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwidHJpZ2dlciIsIl9mb3JWaWV3IiwibG9hZFZpZXciLCJ2aWV3cyIsIl9sb2FkRXJyb3IiLCJFcnJvciIsIl9sb2FkVmlld0R5bmFtaWMiLCJtb2R1bGUiLCJfX2VzTW9kdWxlIiwibm93Iiwicm91dGVyIiwicmVzdCIsImFwcGx5IiwiZGF0YSIsImFjdGlvbiIsImJpbmQiLCJlciIsImRlYnVnIiwiY29uc29sZSIsInRleHQiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwidHlwZSIsImV4cGlyZSIsImZpcnN0SW5pdCIsIl9maXJzdF9zdGFydCIsInRvcCIsImJhc2UiLCJzZXRUaW1lb3V0IiwiYW5pbWF0aW9uIiwibm9kZSIsImh0bWwiLCJhZGRDc3MiLCJyZW1vdmVDc3MiLCJ1cmxTdHJpbmciLCJ0ZW1wbGF0ZSIsInVpZCIsIkhhc2hSb3V0ZXIiLCJfZGV0ZWN0UHJlZml4Iiwib25wb3BzdGF0ZSIsInJvdXRlcyIsImNvbXBhcmUiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicHJlZml4Iiwic3VmaXgiLCJfZ2V0UmF3Iiwicm91dGVyUHJlZml4IiwibG9jYXRpb24iLCJocmVmIiwiaXNQYXRjaGVkIiwicGF0Y2giLCJ3Iiwid2luIiwicHJvbWlzZSIsImZyZWV6ZSIsInNvbWUiLCIkZnJlZXplIiwicmVzaXplIiwiYmFzZUFkZCIsImJhc2VsYXlvdXQiLCJhZGRWaWV3IiwiYmFzZVJlbW92ZSIsInJlbW92ZVZpZXciLCJqdmlldyIsInN1YnMiLCJhcmd1bWVudHMiLCJsYXlvdXQiLCJwcm90b1VJIiwiJGluaXQiLCIkYXBwIiwiJHJlYWR5Iiwib3JpZ2luIiwicHJveHkiLCJKZXRBcHAiLCJyZXF1aXJlIiwiU3RvcmVSb3V0ZXIiLCJzdG9yYWdlIiwic2Vzc2lvbiIsInN0b3JlTmFtZSIsInB1dCIsIlVybFJvdXRlciIsInBhdGhuYW1lIiwiRW1wdHlSb3V0ZXIiLCJfJGNvbmZpZyIsIlVubG9hZEd1YXJkIiwiaGFzIiwic3RvcmUiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJmb3JFYWNoIiwiY29udGV4dCIsInRyaW0iLCJ3YXJuIiwieCIsIlN0cmluZyIsImRlbGltaXRlciIsInJ1c3NpYW5QbHVyYWxHcm91cHMiLCJlbmQiLCJwbHVyYWxUeXBlcyIsImFyYWJpYyIsImxhc3RUd28iLCJib3NuaWFuX3NlcmJpYW4iLCJjaGluZXNlIiwiY3JvYXRpYW4iLCJmcmVuY2giLCJnZXJtYW4iLCJydXNzaWFuIiwibGl0aHVhbmlhbiIsImN6ZWNoIiwicG9saXNoIiwiaWNlbGFuZGljIiwic2xvdmVuaWFuIiwicGx1cmFsVHlwZVRvTGFuZ3VhZ2VzIiwibGFuZ1RvVHlwZU1hcCIsIm1hcHBpbmciLCJyZXQiLCJsYW5ncyIsImxhbmciLCJwbHVyYWxUeXBlTmFtZSIsImxvY2FsZSIsImxhbmdUb1BsdXJhbFR5cGUiLCJlbiIsInBsdXJhbFR5cGVJbmRleCIsImNvdW50IiwiZXNjYXBlIiwidG9rZW4iLCJjb25zdHJ1Y3RUb2tlblJlZ2V4Iiwib3B0cyIsInN1ZmZpeCIsIlJhbmdlRXJyb3IiLCJkb2xsYXJSZWdleCIsImRvbGxhckJpbGxzWWFsbCIsImRlZmF1bHRUb2tlblJlZ2V4IiwidHJhbnNmb3JtUGhyYXNlIiwicGhyYXNlIiwic3Vic3RpdHV0aW9ucyIsInRva2VuUmVnZXgiLCJUeXBlRXJyb3IiLCJpbnRlcnBvbGF0aW9uUmVnZXgiLCJvcHRpb25zIiwic21hcnRfY291bnQiLCJ0ZXh0cyIsImV4cHJlc3Npb24iLCJhcmd1bWVudCIsIlBvbHlnbG90IiwicGhyYXNlcyIsImN1cnJlbnRMb2NhbGUiLCJhbGxvd01pc3NpbmciLCJvbk1pc3NpbmdLZXkiLCJpbnRlcnBvbGF0aW9uIiwibmV3TG9jYWxlIiwibW9yZVBocmFzZXMiLCJwcmVmaXhlZEtleSIsInVuc2V0IiwiY2xlYXIiLCJuZXdQaHJhc2VzIiwidCIsIl8iLCJ0cmFuc2Zvcm0iLCJ3ZWJpeFBvbHlnbG90IiwiTG9jYWxlIiwiX3ZpZXciLCJzZXRMYW5nRGF0YSIsInBjb25maWciLCJwb2x5Z2xvdCIsInBvbHkiLCJzZXJ2aWNlIiwibG9jTmFtZSIsImkxOG4iLCJzZXRMb2NhbGUiLCJnZXRMYW5nIiwic2V0TGFuZyIsInVybHMiLCJNZW51IiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsImdldFNlbGVjdGVkSWQiLCJzZWxlY3QiLCJleGlzdHMiLCJiYXNlaWNvbnMiLCJnb29kIiwic2F2aW5nIiwiYmFzZXRleHQiLCJTdGF0dXMiLCJzdGF0dXMiLCJpc2Vycm9yIiwiZXhwaXJlRGVsYXkiLCJpY29ucyIsImNvbnRlbnQiLCJhcmVhIiwic2V0SFRNTCIsInN1Y2Nlc3MiLCJzZXRTdGF0dXMiLCJmYWlsIiwiZ2V0U3RhdHVzIiwiaGlkZVN0YXR1cyIsIm1vZGUiLCJyZXNwb25zZVRleHQiLCJ0cmFjayIsImRwIiwiX2lkIiwiX29iaiIsInJlbW90ZSIsImFqYXgiLCJfbW9kZSIsIl91cmwiLCJfcmVxdWVzdCIsIl9oZWFkZXJzIiwiX2ZpbGVzIiwiVGhlbWUiLCJ0aGVtZSIsImdldFRoZW1lIiwic2V0VGhlbWUiLCJsaW5rcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibG5hbWUiLCJkaXNhYmxlZCIsInNraW4iLCJjb3B5UGFyYW1zIiwiVXJsUGFyYW0iLCJvcyIsIm9nIiwidmFsIiwiVXNlciIsImxvZ2luIiwibG9nb3V0IiwiYWZ0ZXJMb2dpbiIsImFmdGVyTG9nb3V0IiwicGluZyIsIm1vZGVsIiwidXNlciIsImdldFVzZXIiLCJzZXJ2ZXIiLCJwYXNzIiwiY2FuTmF2aWdhdGUiLCJfJHJvb3QiLCJwdWJsaWMiLCJzZXRJbnRlcnZhbCIsInBsdWdpbnMiLCJsb2dvdXRVcmwiLCJsb2dpblVybCIsInJlZ2lzdGVyVXJsIiwiQXV0aG9yaXphdGlvbiIsInJlZ2lzdGVyIiwicG9zdCIsImdyb3VwcyIsInNhdmUiLCJ1cGRhdGVGcm9tUmVzcG9uc2UiLCJzY2hlbWUiLCJjcmVhdGlvbkRhdGUiLCJsYW5ndWFnZXMiLCJ0ZXN0cmVzdWx0cyIsInBhc3NlZERhdGUiLCJ3b3JkcyIsIk15QXBwIiwiZGVmYXVsdHMiLCJBUFBOQU1FIiwiVkVSU0lPTiIsIkJVSUxEX0FTX01PRFVMRSIsIlBST0RVQ1RJT04iLCJuYXYiLCJqc29uIiwiYWxsb3dBY2Nlc3MiLCJhZGRHcm91cEZvcm0iLCJwb3NpdGlvbiIsImhlYWQiLCJlbGVtZW50cyIsImxhYmVsIiwibWFyZ2luIiwiY29scyIsImNsaWNrIiwic2F2ZUdyb3VwIiwiaGlkZVdpbmRvdyIsImhpZGUiLCJydWxlcyIsImlzTm90RW1wdHkiLCJtYWluV2luZG93Iiwic2hvd1dpbmRvdyIsImZvcm0iLCJ2YWx1ZXMiLCJnZXRWYWx1ZXMiLCJhZGQiLCJjbGVhckZvcm0iLCJjbGVhclZhbGlkYXRpb24iLCJhZGRXb3JkRm9ybSIsIm1haW5Sb3ciLCJsYWJlbFdpZHRoIiwibGFiZWxBbGlnbiIsIndpZHRoIiwiYWRkVHJhbnNsYXRpb24iLCJyb3dzIiwiaGlkZGVuIiwiaGVpZ2h0IiwicGFkZGluZ1kiLCJzYXZlRm9ybSIsInRyYW5zbGF0aW9uc0Zvcm0iLCJ3b3JkRm9ybSIsImJ0bkFkZFRyYW5zbGF0aW9uIiwiYWxsQ29tYm8iLCJmaW5kQWxsQ29tYm8iLCJjb21ibyIsIm9uQ29tYm9DaGFuZ2UiLCJuZXd2Iiwib2xkdiIsImNvbWJvc0FyciIsImFsbExhbmdzIiwicHVsbCIsInNwbGljZSIsInNldE9wdGlvbnMiLCJlbCIsInJlbW92ZVNlbGVjdGVkTGFuZ3MiLCJpdGVtIiwibmV3TGFuZ0FyciIsImtleXMiLCJtYXAiLCJrIiwid29yZElkIiwiZ2V0Q2hpbGRWaWV3cyIsInJvd3NDb3VudCIsIndvcmQiLCJ0cmFuc2xhdGlvblZhbHVlcyIsInRyYW5zbGF0aW9ucyIsInRyIiwibGFuZ3VhZ2VJZCIsImJhdGNoIiwidmFsaWRhdGUiLCJnZXRMaXN0Iiwic2VyaWFsaXplIiwib2xkVmFsIiwiZmluZCIsImRlZmluZSIsImNyZWF0ZVRlc3RGb3JtIiwiY3JlYXRlVGVzdCIsImxhbmd1YWdlIiwiZm9ybVBvcHVwIiwiZ3JvdXBJZCIsInNodWZmbGUiLCJhcnJheSIsInNodWZmbGVkQXJyIiwibnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2NvcmUiLCJ3YWl0RGF0YSIsIndvcmRzTGlzdCIsImZpbHRlciIsIndvcmRJdGVtIiwid29yZHNBcnIiLCJ0cmFuc2xhdGlvbnNBcnIiLCJ0cmFuc2xhdGlvbiIsInBhcnRPZlNwZWVjaCIsInNob3dRdWVzdGlvbiIsIndvcmRPYmoiLCJyaWdodEFuc3dlciIsImNoYW5nZUJ1dHRvbnMiLCJnZXRIZWFkIiwic2F2ZVJlc3VsdHMiLCJzaG93UmVzdWx0cyIsInNldFRyYW5zbGF0aW9ucyIsImJ1dHRvbnMiLCJhdXRvd2lkdGgiLCJhbnN3ZXJBY3Rpb24iLCJib3JkZXJsZXNzIiwicGFkZGluZyIsImNzcyIsIkdyb3VwVmlldyIsImR0YWJsZSIsImNvbHVtbnMiLCJmaWxsc3BhY2UiLCJoZWFkZXIiLCJvbkNsaWNrIiwiY2FsbGJhY2siLCJyZW1vdmUiLCJleHBvcnRCdG4iLCJ0b0V4Y2VsIiwidGVzdEJ0biIsInRlc3RQb3B1cCIsImdyaWQiLCJ0ckFyciIsImxhbmdzTGlzdCIsImdldEl0ZW0iLCJsYW5nVmFsIiwiYWRkQ29sdW1zIiwiYXJyIiwidG9BcnJheSIsImluc2VydEF0IiwicmVmcmVzaENvbHVtbnMiLCJUb3BWaWV3IiwibWVudSIsImljb24iLCJwYWRkaW5nWCIsImF1dGhvcml6YXRpb24iLCJJbmRleFBhZ2UiLCJsb2dpbkZvcm0iLCJsaW5rIiwiTWFpblZpZXciLCJ0ZXN0UmVzdWx0cyIsInNvcnQiLCJtaW5XaWR0aCIsImZvcm1hdCIsImRhdGVUb1N0ciIsImFkZFdvcmQiLCJidXR0b24iLCJpbnB1dFdpZHRoIiwiYWRkR3JvdXAiLCJQcm9maWxlVmlldyIsInJlY29yZHNBcnIiLCJyZWNvcmQiLCJwcmV2UmVjIiwicmF0aW5nIiwicmV2ZXJzZSIsIlJlZ2lzdGVyUGFnZSIsInJlZ2lzdGVyRm9ybSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7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IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2NvZGViYXNlL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NvdXJjZXMvbXlhcHAuanNcIik7XG4iLCJjbGFzcyBKZXRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHdlYml4KSB7XHJcbiAgICAgICAgdGhpcy53ZWJpeEpldCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53ZWJpeCA9IHdlYml4O1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3N1YnMgPSB7fTtcclxuICAgICAgICB0aGlzLl9kYXRhID0ge307XHJcbiAgICB9XHJcbiAgICBnZXRSb290KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yb290O1xyXG4gICAgfVxyXG4gICAgZGVzdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9kZXRhY2hFdmVudHMoKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95U3VicygpO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuYXBwID0gdGhpcy5fcGFyZW50ID0gdGhpcy5fcm9vdCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBzZXRQYXJhbShpZCwgdmFsdWUsIHVybCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kYXRhW2lkXSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVtpZF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fc2VnbWVudC51cGRhdGUoaWQsIHZhbHVlLCAwKTtcclxuICAgICAgICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0UGFyYW0oaWQsIHBhcmVudCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZGF0YVtpZF07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJ1bmRlZmluZWRcIiB8fCAhcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LmdldFBhcmFtKGlkLCBwYXJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VnbWVudC5zdWJ1cmwoKTtcclxuICAgIH1cclxuICAgIGdldFVybFN0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VnbWVudC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZ2V0UGFyZW50VmlldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gICAgfVxyXG4gICAgJCQoaWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSB0aGlzLmdldFJvb3QoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb3QucXVlcnlWaWV3KChvYmogPT4gKG9iai5jb25maWcuaWQgPT09IGlkIHx8IG9iai5jb25maWcubG9jYWxJZCA9PT0gaWQpICYmXHJcbiAgICAgICAgICAgICAgICAob2JqLiRzY29wZSA9PT0gcm9vdC4kc2NvcGUpKSwgXCJzZWxmXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uKG9iaiwgbmFtZSwgY29kZSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gb2JqLmF0dGFjaEV2ZW50KG5hbWUsIGNvZGUpO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cy5wdXNoKHsgb2JqLCBpZCB9KTtcclxuICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICB9XHJcbiAgICBjb250YWlucyh2aWV3KSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBraWQgPSB0aGlzLl9zdWJzW2tleV0udmlldztcclxuICAgICAgICAgICAgaWYgKGtpZCA9PT0gdmlldyB8fCBraWQuY29udGFpbnModmlldykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldFN1YlZpZXcobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuZ2V0U3ViVmlld0luZm8obmFtZSk7XHJcbiAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3ViLnN1YnZpZXcudmlldztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRTdWJWaWV3SW5mbyhuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5fc3Vic1tuYW1lIHx8IFwiZGVmYXVsdFwiXTtcclxuICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1YnZpZXc6IHN1YiwgcGFyZW50OiB0aGlzIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSBcIl90b3BcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJzW25hbWVdID0geyB1cmw6IFwiXCIsIGlkOiBudWxsLCBwb3B1cDogdHJ1ZSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2hlbiBjYWxsZWQgZnJvbSBhIGNoaWxkIHZpZXcsIHNlYXJjaGVzIGZvciBuZWFyZXN0IHBhcmVudCB3aXRoIHN1YnZpZXdcclxuICAgICAgICBpZiAodGhpcy5fcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuZ2V0U3ViVmlld0luZm8obmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgX2RldGFjaEV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBldmVudHMgPSB0aGlzLl9ldmVudHM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGV2ZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBldmVudHNbaV0ub2JqLmRldGFjaEV2ZW50KGV2ZW50c1tpXS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2Rlc3Ryb3lTdWJzKCkge1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgc3ViIHZpZXdzXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBzdWJWaWV3ID0gdGhpcy5fc3Vic1trZXldLnZpZXc7XHJcbiAgICAgICAgICAgIC8vIGl0IHBvc3NpYmxlIHRoYXQgc3VidmlldyB3YXMgbm90IGxvYWRlZCB3aXRoIGFueSBjb250ZW50IHlldFxyXG4gICAgICAgICAgICAvLyBzbyBjaGVjayBvbiBudWxsXHJcbiAgICAgICAgICAgIGlmIChzdWJWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICBzdWJWaWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXNldCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xyXG4gICAgICAgIHRoaXMuX3N1YnMgPSB7fTtcclxuICAgIH1cclxuICAgIF9pbml0X3VybF9kYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX3NlZ21lbnQuY3VycmVudCgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLndlYml4LmV4dGVuZCh0aGlzLl9kYXRhLCB1cmwucGFyYW1zLCB0cnVlKTtcclxuICAgIH1cclxuICAgIF9nZXREZWZhdWx0U3ViKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdWJzLmRlZmF1bHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnMuZGVmYXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBzdWIgPSB0aGlzLl9zdWJzW2tleV07XHJcbiAgICAgICAgICAgIGlmICghc3ViLmJyYW5jaCAmJiBzdWIudmlldyAmJiBrZXkgIT09IFwiX3RvcFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IHN1Yi52aWV3Ll9nZXREZWZhdWx0U3ViKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcm91dGVkX3ZpZXcoKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YiA9IHBhcmVudC5fZ2V0RGVmYXVsdFN1YigpO1xyXG4gICAgICAgIGlmICghc3ViICYmIHN1YiAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJlbnQuX3JvdXRlZF92aWV3KCk7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gcGFyc2UodXJsKSB7XHJcbiAgICAvLyByZW1vdmUgc3RhcnRpbmcgL1xyXG4gICAgaWYgKHVybFswXSA9PT0gXCIvXCIpIHtcclxuICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDEpO1xyXG4gICAgfVxyXG4gICAgLy8gc3BsaXQgdXJsIGJ5IFwiL1wiXHJcbiAgICBjb25zdCBwYXJ0cyA9IHVybC5zcGxpdChcIi9cIik7XHJcbiAgICBjb25zdCBjaHVua3MgPSBbXTtcclxuICAgIC8vIGZvciBlYWNoIHBhZ2UgaW4gdXJsXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdGVzdCA9IHBhcnRzW2ldO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xyXG4gICAgICAgIC8vIGRldGVjdCBwYXJhbXNcclxuICAgICAgICAvLyBzdXBwb3J0IG9sZCBcdFx0XHRzb21lOmE9YjpjPWRcclxuICAgICAgICAvLyBhbmQgbmV3IG5vdGF0aW9uXHRcdHNvbWU/YT1iJmM9ZFxyXG4gICAgICAgIGxldCBwb3MgPSB0ZXN0LmluZGV4T2YoXCI6XCIpO1xyXG4gICAgICAgIGlmIChwb3MgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBvcyA9IHRlc3QuaW5kZXhPZihcIj9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHRlc3Quc3Vic3RyKHBvcyArIDEpLnNwbGl0KC9bXFw6XFw/XFwmXS9nKTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGhhc2ggb2YgbmFtZWQgcGFyYW1zXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW0gb2YgcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkY2h1bmsgPSBwYXJhbS5zcGxpdChcIj1cIik7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRbZGNodW5rWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChkY2h1bmtbMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHN0b3JlIHBhcnNlZCB2YWx1ZXNcclxuICAgICAgICBjaHVua3NbaV0gPSB7XHJcbiAgICAgICAgICAgIHBhZ2U6IChwb3MgPiAtMSA/IHRlc3Quc3Vic3RyKDAsIHBvcykgOiB0ZXN0KSxcclxuICAgICAgICAgICAgcGFyYW1zOiByZXN1bHQsXHJcbiAgICAgICAgICAgIGlzTmV3OiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybiBhcnJheSBvZiBwYWdlIG9iamVjdHNcclxuICAgIHJldHVybiBjaHVua3M7XHJcbn1cclxuZnVuY3Rpb24gdXJsMnN0cihzdGFjaykge1xyXG4gICAgY29uc3QgdXJsID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGNodW5rIG9mIHN0YWNrKSB7XHJcbiAgICAgICAgdXJsLnB1c2goXCIvXCIgKyBjaHVuay5wYWdlKTtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBvYmoyc3RyKGNodW5rLnBhcmFtcyk7XHJcbiAgICAgICAgaWYgKHBhcmFtcykge1xyXG4gICAgICAgICAgICB1cmwucHVzaChcIj9cIiArIHBhcmFtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVybC5qb2luKFwiXCIpO1xyXG59XHJcbmZ1bmN0aW9uIG9iajJzdHIob2JqKSB7XHJcbiAgICBjb25zdCBzdHIgPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChzdHIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHN0ci5wdXNoKFwiJlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyLnB1c2goa2V5ICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW2tleV0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHIuam9pbihcIlwiKTtcclxufVxuXG5jbGFzcyBSb3V0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZSwgaW5kZXgpIHtcclxuICAgICAgICB0aGlzLl9uZXh0ID0gMTtcclxuICAgICAgICBpZiAodHlwZW9mIHJvdXRlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUgPSB7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHBhcnNlKHJvdXRlKSxcclxuICAgICAgICAgICAgICAgIHBhdGg6IHJvdXRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlID0gcm91dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuICAgIGN1cnJlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUudXJsW3RoaXMuaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmxbdGhpcy5pbmRleCArIHRoaXMuX25leHRdO1xyXG4gICAgfVxyXG4gICAgc3VidXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnVybC5zbGljZSh0aGlzLmluZGV4KTtcclxuICAgIH1cclxuICAgIHNoaWZ0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUm91dGUodGhpcy5yb3V0ZSwgdGhpcy5pbmRleCArIHRoaXMuX25leHQpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5pbmRleCArIDE7IGkgPCB1cmwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdXJsW2ldLmlzTmV3ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0b1N0cmluZygpIHtcclxuICAgICAgICBjb25zdCBzdHIgPSB1cmwyc3RyKHRoaXMuc3VidXJsKCkpO1xyXG4gICAgICAgIHJldHVybiBzdHIgPyBzdHIuc3Vic3RyKDEpIDogXCJcIjtcclxuICAgIH1cclxuICAgIF9qb2luKHBhdGgsIGtpZHMpIHtcclxuICAgICAgICBsZXQgdXJsID0gdGhpcy5yb3V0ZS51cmw7XHJcbiAgICAgICAgaWYgKHBhdGggPT09IG51bGwpIHsgLy8gY2hhbmdlIG9mIHBhcmFtZXRlcnMsIHJvdXRlIGVsZW1lbnRzIGFyZSBub3QgYWZmZWN0ZWRcclxuICAgICAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgb2xkID0gdGhpcy5yb3V0ZS51cmw7XHJcbiAgICAgICAgdXJsID0gb2xkLnNsaWNlKDAsIHRoaXMuaW5kZXggKyAoa2lkcyA/IHRoaXMuX25leHQgOiAwKSk7XHJcbiAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsLmNvbmNhdChwYXJzZShwYXRoKSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXJsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsW2ldLnZpZXcgPSBvbGRbaV0udmlldztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvbGRbaV0gJiYgdXJsW2ldLnBhZ2UgPT09IG9sZFtpXS5wYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsW2ldLmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuICAgIGFwcGVuZChwYXRoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fam9pbihwYXRoLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhdGggPSB1cmwyc3RyKHVybCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS51cmwgPSB1cmw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUucGF0aDtcclxuICAgIH1cclxuICAgIHNob3cocGF0aCwgdmlldywga2lkcykge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX2pvaW4ocGF0aCwga2lkcyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWRpcmVjdCA9IHVybDJzdHIodXJsKTtcclxuICAgICAgICAgICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3QsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtOiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCBhcHAgPSB2aWV3ID8gdmlldy5hcHAgOiBudWxsO1xyXG4gICAgICAgICAgICAvLyB3aGVuIGNyZWF0aW5nIGEgbmV3IHJvdXRlLCBpdCBwb3NzaWJsZSB0aGF0IGl0IHdpbGwgbm90IGhhdmUgYW55IGNvbnRlbnRcclxuICAgICAgICAgICAgLy8gZ3VhcmQgaXMgbm90IG5lY2Vzc2FyeSBpbiBzdWNoIGNhc2VcclxuICAgICAgICAgICAgaWYgKGFwcCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXBwLmNhbGxFdmVudChcImFwcDpndWFyZFwiLCBbb2JqLnJlZGlyZWN0LCB2aWV3LCBvYmpdKTtcclxuICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9iai5jb25maXJtLmNhdGNoKCgpID0+IG9iai5yZWRpcmVjdCA9IG51bGwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5yZWRpcmVjdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvYmoucmVkaXJlY3QgIT09IHJlZGlyZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLnNob3cob2JqLnJlZGlyZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICByZWooKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlLnBhdGggPSByZWRpcmVjdDtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGUudXJsID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgcmVzKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2l6ZShuKSB7XHJcbiAgICAgICAgdGhpcy5fbmV4dCA9IG47XHJcbiAgICB9XHJcbiAgICBzcGxpdCgpIHtcclxuICAgICAgICBjb25zdCByb3V0ZSA9IHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnJvdXRlLnVybC5zbGljZSh0aGlzLmluZGV4ICsgMSksXHJcbiAgICAgICAgICAgIHBhdGg6IFwiXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChyb3V0ZS51cmwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJvdXRlLnBhdGggPSB1cmwyc3RyKHJvdXRlLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUm91dGUocm91dGUsIDApO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKG5hbWUsIHZhbHVlLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNodW5rID0gdGhpcy5yb3V0ZS51cmxbdGhpcy5pbmRleCArIChpbmRleCB8fCAwKV07XHJcbiAgICAgICAgaWYgKCFjaHVuaykge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlLnVybC5wdXNoKHsgcGFnZTogXCJcIiwgcGFyYW1zOiB7fSB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKG5hbWUsIHZhbHVlLCBpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNodW5rLnBhZ2UgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNodW5rLnBhcmFtc1tuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvdXRlLnBhdGggPSB1cmwyc3RyKHRoaXMucm91dGUudXJsKTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBKZXRWaWV3IGV4dGVuZHMgSmV0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHAsIGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGFwcC53ZWJpeCk7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICAgICAgLy90aGlzLiRjb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxuICAgIHVpKHVpLCBjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gY29uZmlnLmNvbnRhaW5lciB8fCB1aS5jb250YWluZXI7XHJcbiAgICAgICAgY29uc3QgamV0dmlldyA9IHRoaXMuYXBwLmNyZWF0ZVZpZXcodWkpO1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goamV0dmlldyk7XHJcbiAgICAgICAgamV0dmlldy5yZW5kZXIoY29udGFpbmVyLCB0aGlzLl9zZWdtZW50LCB0aGlzKTtcclxuICAgICAgICBpZiAodHlwZW9mIHVpICE9PSBcIm9iamVjdFwiIHx8ICh1aSBpbnN0YW5jZW9mIEpldEJhc2UpKSB7XHJcbiAgICAgICAgICAgIC8vIHJhdyB3ZWJpeCBVSVxyXG4gICAgICAgICAgICByZXR1cm4gamV0dmlldztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBqZXR2aWV3LmdldFJvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICAvLyBjb252ZXJ0IHBhcmFtZXRlcnMgb2JqZWN0IHRvIHVybFxyXG4gICAgICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhcmFtKGtleSwgcGF0aFtrZXldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXRoID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGlnYXRlIHRvIGFwcCBpbiBjYXNlIG9mIHJvb3QgcHJlZml4XHJcbiAgICAgICAgICAgIGlmIChwYXRoLnN1YnN0cigwLCAxKSA9PT0gXCIvXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcC5zaG93KHBhdGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGxvY2FsIHBhdGgsIGRvIG5vdGhpbmdcclxuICAgICAgICAgICAgaWYgKHBhdGguaW5kZXhPZihcIi4vXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcGFyZW50IHBhdGgsIGNhbGwgcGFyZW50IHZpZXdcclxuICAgICAgICAgICAgaWYgKHBhdGguaW5kZXhPZihcIi4uL1wiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5zaG93KHBhdGguc3Vic3RyKDMpLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3coXCIvXCIgKyBwYXRoLnN1YnN0cigzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5nZXRTdWJWaWV3SW5mbyhjb25maWcudGFyZ2V0KTtcclxuICAgICAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN1Yi5wYXJlbnQgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ViLnBhcmVudC5zaG93KHBhdGgsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb25maWcudGFyZ2V0ICYmIGNvbmZpZy50YXJnZXQgIT09IFwiZGVmYXVsdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckZyYW1lTG9jayhjb25maWcudGFyZ2V0LCBzdWIuc3VidmlldywgcGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcC5zaG93KFwiL1wiICsgcGF0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nob3codGhpcy5fc2VnbWVudCwgcGF0aCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBfc2hvdyhzZWdtZW50LCBwYXRoLCB2aWV3KSB7XHJcbiAgICAgICAgcmV0dXJuIHNlZ21lbnQuc2hvdyhwYXRoLCB2aWV3LCB0cnVlKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdF91cmxfZGF0YSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCk7XHJcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWdtZW50LnJvdXRlLmxpbmtSb3V0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmdldFJvdXRlcigpLnNldChzZWdtZW50LnJvdXRlLnBhdGgsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuY2FsbEV2ZW50KFwiYXBwOnJvdXRlXCIsIFtzZWdtZW50LnJvdXRlLnBhdGhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW5pdChfJHZpZXcsIF8kKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgcmVhZHkoXyR2aWV3LCBfJHVybCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIGNvbmZpZygpIHtcclxuICAgICAgICB0aGlzLmFwcC53ZWJpeC5tZXNzYWdlKFwiVmlldzpDb25maWcgaXMgbm90IGltcGxlbWVudGVkXCIpO1xyXG4gICAgfVxyXG4gICAgdXJsQ2hhbmdlKF8kdmlldywgXyR1cmwpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIGRlc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveUtpZHMoKTtcclxuICAgICAgICAvLyBkZXN0cm95IGFjdHVhbCBVSVxyXG4gICAgICAgIHRoaXMuX3Jvb3QuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIHN1cGVyLmRlc3RydWN0b3IoKTtcclxuICAgIH1cclxuICAgIHVzZShwbHVnaW4sIGNvbmZpZykge1xyXG4gICAgICAgIHBsdWdpbih0aGlzLmFwcCwgdGhpcywgY29uZmlnKTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwoKTtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95S2lkcygpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lTdWJzKCk7XHJcbiAgICAgICAgdGhpcy5fZGV0YWNoRXZlbnRzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lci50YWdOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZWdtZW50LnJlZnJlc2goKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKHRoaXMuX3NlZ21lbnQpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKHJvb3QsIHVybCwgcGFyZW50KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdXJsID0gbmV3IFJvdXRlKHVybCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQgPSB1cmw7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMuX2luaXRfdXJsX2RhdGEoKTtcclxuICAgICAgICByb290ID0gcm9vdCB8fCBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIGNvbnN0IF9jb250YWluZXIgPSAodHlwZW9mIHJvb3QgPT09IFwic3RyaW5nXCIpID8gdGhpcy53ZWJpeC50b05vZGUocm9vdCkgOiByb290O1xyXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIgIT09IF9jb250YWluZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyID0gX2NvbnRhaW5lcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcih1cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VybENoYW5nZSgpLnRoZW4oKCkgPT4gdGhpcy5nZXRSb290KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yZW5kZXIodXJsKSB7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWcoKTtcclxuICAgICAgICBpZiAoY29uZmlnLnRoZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy50aGVuKGNmZyA9PiB0aGlzLl9yZW5kZXJfZmluYWwoY2ZnLCB1cmwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJfZmluYWwoY29uZmlnLCB1cmwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yZW5kZXJfZmluYWwoY29uZmlnLCB1cmwpIHtcclxuICAgICAgICAvLyBnZXQgcHJldmlvdXMgdmlldyBpbiB0aGUgc2FtZSBzbG90XHJcbiAgICAgICAgbGV0IHNsb3QgPSBudWxsO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBudWxsO1xyXG4gICAgICAgIGxldCBzaG93ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9jb250YWluZXIudGFnTmFtZSkge1xyXG4gICAgICAgICAgICBzbG90ID0gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgICAgICAgICBpZiAoc2xvdC5wb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcclxuICAgICAgICAgICAgICAgIHNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gdGhpcy53ZWJpeC4kJChzbG90LmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29udGFpbmVyID0gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB2aWV3IGFscmVhZHkgZGVzdHJveWVkXHJcbiAgICAgICAgaWYgKCF0aGlzLmFwcCB8fCAhY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLl9zZWdtZW50LmN1cnJlbnQoKTtcclxuICAgICAgICAvLyB1c2luZyB3cmFwcGVyIG9iamVjdCwgc28gdWkgY2FuIGJlIGNoYW5nZWQgZnJvbSBhcHA6cmVuZGVyIGV2ZW50XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geyB1aToge30gfTtcclxuICAgICAgICB0aGlzLmFwcC5jb3B5Q29uZmlnKGNvbmZpZywgcmVzdWx0LnVpLCB0aGlzLl9zdWJzKTtcclxuICAgICAgICB0aGlzLmFwcC5jYWxsRXZlbnQoXCJhcHA6cmVuZGVyXCIsIFt0aGlzLCB1cmwsIHJlc3VsdF0pO1xyXG4gICAgICAgIHJlc3VsdC51aS4kc2NvcGUgPSB0aGlzO1xyXG4gICAgICAgIC8qIGRlc3Ryb3kgb2xkIEhUTUwgYXR0YWNoZWQgdmlld3MgYmVmb3JlIGNyZWF0aW5nIG5ldyBvbmUgKi9cclxuICAgICAgICBpZiAoIXNsb3QgJiYgY3VycmVudC5pc05ldyAmJiBjdXJyZW50LnZpZXcpIHtcclxuICAgICAgICAgICAgY3VycmVudC52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyBmb3IgYWRkaW5nIGluc2lkZSBvZiBtdWx0aXZpZXcgLSBwcmVzZXJ2ZSBvbGQgaWRcclxuICAgICAgICAgICAgaWYgKHNsb3QgJiYgIXNob3cpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9sZHVpID0gY29udGFpbmVyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gb2xkdWkuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQubmFtZSA9PT0gXCJtdWx0aXZpZXdcIiAmJiAhcmVzdWx0LnVpLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnVpLmlkID0gb2xkdWkuY29uZmlnLmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSB0aGlzLmFwcC53ZWJpeC51aShyZXN1bHQudWksIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzV2luID0gdGhpcy5fcm9vdDtcclxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHVybCBhZGRlZCB0byBpZ25vcmUgdGhpcy51aSBjYWxsc1xyXG4gICAgICAgICAgICBpZiAoc2hvdyAmJiBhc1dpbi5zZXRQb3NpdGlvbiAmJiAhYXNXaW4uaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgIGFzV2luLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjaGVjaywgaWYgd2UgYXJlIHJlcGxhY2luZyBzb21lIG9sZGVyIHZpZXdcclxuICAgICAgICAgICAgaWYgKHNsb3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzbG90LnZpZXcgJiYgc2xvdC52aWV3ICE9PSB0aGlzICYmIHNsb3QudmlldyAhPT0gdGhpcy5hcHApIHtcclxuICAgICAgICAgICAgICAgICAgICBzbG90LnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2xvdC5pZCA9IHRoaXMuX3Jvb3QuY29uZmlnLmlkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UGFyZW50VmlldygpIHx8ICF0aGlzLmFwcC5hcHApXHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdC52aWV3ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gd2UgaGF2ZSBzdWJhcHAsIHNldCB3aG9sZSBhcHAgYXMgYSB2aWV3XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc28gb24gZGVzdHJ1Y3Rpb24sIHRoZSB3aG9sZSBhcHAgd2lsbCBiZSBkZXN0cm95ZWRcclxuICAgICAgICAgICAgICAgICAgICBzbG90LnZpZXcgPSB0aGlzLmFwcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudC5pc05ldykge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC52aWV3ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQuaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNwb25zZSA9IFByb21pc2UucmVzb2x2ZSh0aGlzLl9pbml0KHRoaXMuX3Jvb3QsIHVybCkpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VybENoYW5nZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRVcmwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWR5KHRoaXMuX3Jvb3QsIHVybC5zdWJ1cmwoKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gUHJvbWlzZS5yZWplY3QoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5jYXRjaChlcnIgPT4gdGhpcy5faW5pdEVycm9yKHRoaXMsIGVycikpO1xyXG4gICAgfVxyXG4gICAgX2luaXQodmlldywgdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5pdCh2aWV3LCB1cmwuc3VidXJsKCkpO1xyXG4gICAgfVxyXG4gICAgX3VybENoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLmFwcC5jYWxsRXZlbnQoXCJhcHA6dXJsY2hhbmdlXCIsIFt0aGlzLCB0aGlzLl9zZWdtZW50XSk7XHJcbiAgICAgICAgY29uc3Qgd2FpdHMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5fc3Vic1trZXldO1xyXG4gICAgICAgICAgICBjb25zdCB3YWl0ID0gdGhpcy5fcmVuZGVyRnJhbWVMb2NrKGtleSwgZnJhbWUsIG51bGwpO1xyXG4gICAgICAgICAgICBpZiAod2FpdCkge1xyXG4gICAgICAgICAgICAgICAgd2FpdHMucHVzaCh3YWl0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwod2FpdHMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cmxDaGFuZ2UodGhpcy5fcm9vdCwgdGhpcy5fc2VnbWVudC5zdWJ1cmwoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyRnJhbWVMb2NrKGtleSwgZnJhbWUsIHBhdGgpIHtcclxuICAgICAgICAvLyBpZiBzdWJ2aWV3IGlzIG5vdCBvY2N1cGllZCBieSBzb21lIHJlbmRlcmluZyB5ZXRcclxuICAgICAgICBpZiAoIWZyYW1lLmxvY2spIHtcclxuICAgICAgICAgICAgLy8gcmV0cmVpdmUgYW5kIHN0b3JlIHJlbmRlcmluZyBlbmQgcHJvbWlzZVxyXG4gICAgICAgICAgICBjb25zdCBsb2NrID0gdGhpcy5fcmVuZGVyRnJhbWUoa2V5LCBmcmFtZSwgcGF0aCk7XHJcbiAgICAgICAgICAgIGlmIChsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGVhciBsb2NrIGFmdGVyIGZyYW1lIHJlbmRlcmluZ1xyXG4gICAgICAgICAgICAgICAgLy8gYXMgcHJvbWlzZS5maW5hbGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgIFdlYml4IGxlc3NlciB0aGFuIDYuMlxyXG4gICAgICAgICAgICAgICAgLy8gdXNpbmcgYSBtb3JlIHZlcmJvc2Ugbm90YXRpb25cclxuICAgICAgICAgICAgICAgIGZyYW1lLmxvY2sgPSBsb2NrLnRoZW4oKCkgPT4gZnJhbWUubG9jayA9IG51bGwsICgpID0+IGZyYW1lLmxvY2sgPSBudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXR1cm4gcmVuZGVyaW5nIGVuZCBwcm9taXNlXHJcbiAgICAgICAgcmV0dXJuIGZyYW1lLmxvY2s7XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyRnJhbWUoa2V5LCBmcmFtZSwgcGF0aCkge1xyXG4gICAgICAgIC8vZGVmYXVsdCByb3V0ZVxyXG4gICAgICAgIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zZWdtZW50Lm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIG5leHQgc2VnbWVudCBpbiB1cmwsIHJlbmRlciBpdFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN1YlZpZXcoZnJhbWUsIHRoaXMuX3NlZ21lbnQuc2hpZnQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoZnJhbWUudmlldyAmJiBmcmFtZS5wb3B1cCkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhlcmUgaXMgbm8gbmV4dCBzZWdtZW50LCBkZWxldGUgdGhlIGV4aXN0aW5nIHN1Yi12aWV3XHJcbiAgICAgICAgICAgICAgICBmcmFtZS52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgICAgIGZyYW1lLnZpZXcgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaWYgbmV3IHBhdGggcHJvdmlkZWQsIHNldCBpdCB0byB0aGUgZnJhbWVcclxuICAgICAgICBpZiAocGF0aCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmcmFtZS51cmwgPSBwYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpbiBjYXNlIG9mIHJvdXRlZCBzdWItdmlld1xyXG4gICAgICAgIGlmIChmcmFtZS5yb3V0ZSkge1xyXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIGEgbmV3IHBhdGggZm9yIHN1Yi12aWV3XHJcbiAgICAgICAgICAgIGlmIChwYXRoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJhbWUucm91dGUuc2hvdyhwYXRoLCBmcmFtZS52aWV3KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgZnJhbWUucm91dGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZG8gbm90IHRyaWdnZXIgb25DaGFuZ2UgZm9yIGlzb2xhdGVkIHN1Yi12aWV3c1xyXG4gICAgICAgICAgICBpZiAoZnJhbWUuYnJhbmNoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZpZXcgPSBmcmFtZS52aWV3O1xyXG4gICAgICAgIC8vIGlmIHZpZXcgZG9lc24ndCBleGlzdHMgeWV0LCBpbml0IGl0XHJcbiAgICAgICAgaWYgKCF2aWV3ICYmIGZyYW1lLnVybCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZyYW1lLnVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gc3RyaW5nLCBzbyB3ZSBoYXZlIGlzb2xhdGVkIHN1YnZpZXcgdXJsXHJcbiAgICAgICAgICAgICAgICBmcmFtZS5yb3V0ZSA9IG5ldyBSb3V0ZShmcmFtZS51cmwsIDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN1YlZpZXcoZnJhbWUsIGZyYW1lLnJvdXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIG9iamVjdCwgc28gd2UgaGF2ZSBhbiBlbWJlZGVkIHN1YnZpZXdcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZnJhbWUudXJsID09PSBcImZ1bmN0aW9uXCIgJiYgISh2aWV3IGluc3RhbmNlb2YgZnJhbWUudXJsKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXcgPSBuZXcgZnJhbWUudXJsKHRoaXMuYXBwLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdmlldykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZXcgPSBmcmFtZS51cmw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdHJpZ2dlciBvbkNoYW5nZSBmb3IgYWxyZWFkeSBleGlzdGVkIHZpZXdcclxuICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldy5yZW5kZXIoZnJhbWUsIChmcmFtZS5yb3V0ZSB8fCB0aGlzLl9zZWdtZW50KSwgdGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2luaXRFcnJvcih2aWV3LCBlcnIpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICBpZiB2aWV3IGlzIGRlc3Ryb3llZCwgaWdub3JlIGFueSB2aWV3IHJlbGF0ZWQgZXJyb3JzXHJcbiAgICAgICAgKi9cclxuICAgICAgICBpZiAodGhpcy5hcHApIHtcclxuICAgICAgICAgICAgdGhpcy5hcHAuZXJyb3IoXCJhcHA6ZXJyb3I6aW5pdHZpZXdcIiwgW2Vyciwgdmlld10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIF9jcmVhdGVTdWJWaWV3KHN1Yiwgc3VidXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwLmNyZWF0ZUZyb21VUkwoc3VidXJsLmN1cnJlbnQoKSwgc3ViLnZpZXcpLnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LnJlbmRlcihzdWIsIHN1YnVybCwgdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfZGVzdHJveUtpZHMoKSB7XHJcbiAgICAgICAgLy8gZGVzdHJveSBjaGlsZCB2aWV3c1xyXG4gICAgICAgIGNvbnN0IHVpcyA9IHRoaXMuX2NoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB1aXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKHVpc1tpXSAmJiB1aXNbaV0uZGVzdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICAgICAgdWlzW2ldLmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXNldCB2YXJzIGZvciBiZXR0ZXIgR0MgcHJvY2Vzc2luZ1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XHJcbiAgICB9XHJcbn1cblxuLy8gd3JhcHBlciBmb3IgcmF3IG9iamVjdHMgYW5kIEpldCAxLnggc3RydWN0c1xyXG5jbGFzcyBKZXRWaWV3UmF3IGV4dGVuZHMgSmV0VmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHAsIGNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKGFwcCwgY29uZmlnKTtcclxuICAgICAgICB0aGlzLl91aSA9IGNvbmZpZy51aTtcclxuICAgIH1cclxuICAgIGNvbmZpZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdWk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgU3ViUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcsIGFwcCkge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgICAgICBjb25zdCBhID0gdGhpcy5hcHA7XHJcbiAgICAgICAgYS5hcHAuZ2V0Um91dGVyKCkuc2V0KGEuX3NlZ21lbnQuYXBwZW5kKHRoaXMucGF0aCksIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGg7XHJcbiAgICB9XHJcbn1cblxubGV0IF9vbmNlID0gdHJ1ZTtcclxuY2xhc3MgSmV0QXBwQmFzZSBleHRlbmRzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3Qgd2ViaXggPSAoY29uZmlnIHx8IHt9KS53ZWJpeCB8fCB3aW5kb3cud2ViaXg7XHJcbiAgICAgICAgc3VwZXIod2ViaXgpO1xyXG4gICAgICAgIC8vIGluaXQgY29uZmlnXHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLndlYml4LmV4dGVuZCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiQXBwXCIsXHJcbiAgICAgICAgICAgIHZlcnNpb246IFwiMS4wXCIsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBcIi9ob21lXCJcclxuICAgICAgICB9LCBjb25maWcsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuYXBwID0gdGhpcy5jb25maWcuYXBwO1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMud2ViaXguZXh0ZW5kKHRoaXMsIHRoaXMud2ViaXguRXZlbnRTeXN0ZW0pO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJTZWdtZW50LnN1YnVybCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJTZWdtZW50LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBnZXRTZXJ2aWNlKG5hbWUpIHtcclxuICAgICAgICBsZXQgb2JqID0gdGhpcy5fc2VydmljZXNbbmFtZV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBvYmogPSB0aGlzLl9zZXJ2aWNlc1tuYW1lXSA9IG9iaih0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIHNldFNlcnZpY2UobmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2VzW25hbWVdID0gaGFuZGxlcjtcclxuICAgIH1cclxuICAgIGRlc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRTdWJWaWV3KCkuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIHN1cGVyLmRlc3RydWN0b3IoKTtcclxuICAgIH1cclxuICAgIC8vIGNvcHkgb2JqZWN0IGFuZCBjb2xsZWN0IGV4dHJhIGhhbmRsZXJzXHJcbiAgICBjb3B5Q29uZmlnKG9iaiwgdGFyZ2V0LCBjb25maWcpIHtcclxuICAgICAgICAvLyByYXcgdWkgY29uZmlnXHJcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIEpldEJhc2UgfHxcclxuICAgICAgICAgICAgKHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiAmJiBvYmoucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QmFzZSkpIHtcclxuICAgICAgICAgICAgb2JqID0geyAkc3Vidmlldzogb2JqIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHN1YnZpZXcgcGxhY2Vob2xkZXJcclxuICAgICAgICBpZiAodHlwZW9mIG9iai4kc3VidmlldyAhPSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZFN1YlZpZXcob2JqLCB0YXJnZXQsIGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHByb2Nlc3Mgc3ViLXByb3BlcnRpZXNcclxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQgfHwgKG9iaiBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fSk7XHJcbiAgICAgICAgZm9yIChjb25zdCBtZXRob2QgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGxldCBwb2ludCA9IG9ialttZXRob2RdO1xyXG4gICAgICAgICAgICAvLyB2aWV3IGNsYXNzXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcG9pbnQgPT09IFwiZnVuY3Rpb25cIiAmJiBwb2ludC5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICBwb2ludCA9IHsgJHN1YnZpZXc6IHBvaW50IH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBvaW50ICYmIHR5cGVvZiBwb2ludCA9PT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICAgICAgIShwb2ludCBpbnN0YW5jZW9mIHRoaXMud2ViaXguRGF0YUNvbGxlY3Rpb24pICYmICEocG9pbnQgaW5zdGFuY2VvZiBSZWdFeHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBuZXcgRGF0ZShwb2ludCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3B5ID0gdGhpcy5jb3B5Q29uZmlnKHBvaW50LCAocG9pbnQgaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge30pLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3B5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFttZXRob2RdID0gY29weTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IHBvaW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBnZXRSb3V0ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJvdXRlcjtcclxuICAgIH1cclxuICAgIGNsaWNrSGFuZGxlcihlKSB7XHJcbiAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gKGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCk7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJpZ2dlciA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0cmlnZ2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRyaWdnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JWaWV3KHRhcmdldCwgdmlldyA9PiB2aWV3LmFwcC50cmlnZ2VyKHRyaWdnZXIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInJvdXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yVmlldyh0YXJnZXQsIHZpZXcgPT4gdmlldy5zaG93KHJvdXRlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRSb290KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXcoKS5nZXRSb290KCk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fc3ViU2VnbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWJWaWV3KCkucmVmcmVzaCgpLnRoZW4odmlldyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEV2ZW50KFwiYXBwOnJvdXRlXCIsIFt0aGlzLmdldFVybCgpXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbG9hZFZpZXcodXJsKSB7XHJcbiAgICAgICAgY29uc3Qgdmlld3MgPSB0aGlzLmNvbmZpZy52aWV3cztcclxuICAgICAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICBpZiAodXJsID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fbG9hZEVycm9yKFwiXCIsIG5ldyBFcnJvcihcIldlYml4IEpldDogRW1wdHkgdXJsIHNlZ21lbnRcIikpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHZpZXdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZpZXdzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjdXN0b20gbG9hZGluZyBzdHJhdGVneVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZpZXdzKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwcmVkZWZpbmVkIGhhc2hcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2aWV3c1t1cmxdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVybCA9PT0gXCJfYmxhbmtcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbG9hZFZpZXdEeW5hbWljKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fbG9hZEVycm9yKHVybCwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGN1c3RvbSBoYW5kbGVyIGNhbiByZXR1cm4gdmlldyBvciBpdHMgcHJvbWlzZVxyXG4gICAgICAgIGlmICghcmVzdWx0LnRoZW4pIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldCBlcnJvciBoYW5kbGVyXHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0XHJcbiAgICAgICAgICAgIC50aGVuKG1vZHVsZSA9PiBtb2R1bGUuX19lc01vZHVsZSA/IG1vZHVsZS5kZWZhdWx0IDogbW9kdWxlKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuX2xvYWRFcnJvcih1cmwsIGVycikpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBfZm9yVmlldyh0YXJnZXQsIGhhbmRsZXIpIHtcclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy53ZWJpeC4kJCh0YXJnZXQpO1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIodmlldy4kc2NvcGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9sb2FkVmlld0R5bmFtaWModXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVGcm9tVVJMKGNodW5rLCBub3cpIHtcclxuICAgICAgICBsZXQgdmlldztcclxuICAgICAgICBpZiAoY2h1bmsuaXNOZXcgfHwgIWNodW5rLnZpZXcpIHtcclxuICAgICAgICAgICAgdmlldyA9IHRoaXMubG9hZFZpZXcoY2h1bmsucGFnZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHVpID0+IHRoaXMuY3JlYXRlVmlldyh1aSwgbmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmlldyA9IFByb21pc2UucmVzb2x2ZShjaHVuay52aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVWaWV3KHVpLCBuYW1lKSB7XHJcbiAgICAgICAgbGV0IG9iajtcclxuICAgICAgICBpZiAodHlwZW9mIHVpID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgaWYgKHVpLnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEFwcEJhc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJIGNsYXNzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHVpKHsgYXBwOiB0aGlzLCBuYW1lLCByb3V0ZXI6IFN1YlJvdXRlciB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1aS5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB1aSh0aGlzLCB7IG5hbWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSSBmYWN0b3J5IGZ1bmN0aW9uc1xyXG4gICAgICAgICAgICAgICAgdWkgPSB1aSh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodWkgaW5zdGFuY2VvZiBKZXRCYXNlKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHVpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVUkgb2JqZWN0XHJcbiAgICAgICAgICAgIG9iaiA9IG5ldyBKZXRWaWV3UmF3KHRoaXMsIHsgbmFtZSwgdWkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICAvLyBzaG93IHZpZXcgcGF0aFxyXG4gICAgc2hvdyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5fY29udGFpbmVyLCAodXJsIHx8IHRoaXMuY29uZmlnLnN0YXJ0KSk7XHJcbiAgICB9XHJcbiAgICAvLyBldmVudCBoZWxwZXJzXHJcbiAgICB0cmlnZ2VyKG5hbWUsIC4uLnJlc3QpIHtcclxuICAgICAgICB0aGlzLmFwcGx5KG5hbWUsIHJlc3QpO1xyXG4gICAgfVxyXG4gICAgYXBwbHkobmFtZSwgZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY2FsbEV2ZW50KG5hbWUsIGRhdGEpO1xyXG4gICAgfVxyXG4gICAgYWN0aW9uKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWJpeC5iaW5kKGZ1bmN0aW9uICguLi5yZXN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHkobmFtZSwgcmVzdCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcbiAgICBvbihuYW1lLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5hdHRhY2hFdmVudChuYW1lLCBoYW5kbGVyKTtcclxuICAgIH1cclxuICAgIHVzZShwbHVnaW4sIGNvbmZpZykge1xyXG4gICAgICAgIHBsdWdpbih0aGlzLCBudWxsLCBjb25maWcpO1xyXG4gICAgfVxyXG4gICAgZXJyb3IobmFtZSwgZXIpIHtcclxuICAgICAgICB0aGlzLmNhbGxFdmVudChuYW1lLCBlcik7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6ZXJyb3JcIiwgZXIpO1xyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlICovXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRlYnVnKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJbaV0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVyW2ldIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGVyW2ldLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQuaW5kZXhPZihcIk1vZHVsZSBidWlsZCBmYWlsZWRcIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFx4MWJcXFtbMC05O10qbS9nLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgPHByZSBzdHlsZT0nZm9udC1zaXplOjE2cHg7IGJhY2tncm91bmQtY29sb3I6ICNlYzY4NzM7IGNvbG9yOiAjMDAwOyBwYWRkaW5nOjEwcHg7Jz4ke3RleHR9PC9wcmU+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgKz0gXCI8YnI+PGJyPkNoZWNrIGNvbnNvbGUgZm9yIG1vcmUgZGV0YWlsc1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndlYml4Lm1lc3NhZ2UoeyB0eXBlOiBcImVycm9yXCIsIHRleHQ6IHRleHQsIGV4cGlyZTogLTEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiB0c2xpbnQ6ZW5hYmxlICovXHJcbiAgICB9XHJcbiAgICAvLyByZW5kZXJzIHRvcCB2aWV3XHJcbiAgICByZW5kZXIocm9vdCwgdXJsLCBwYXJlbnQpIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSAodHlwZW9mIHJvb3QgPT09IFwic3RyaW5nXCIpID9cclxuICAgICAgICAgICAgdGhpcy53ZWJpeC50b05vZGUocm9vdCkgOlxyXG4gICAgICAgICAgICAocm9vdCB8fCBkb2N1bWVudC5ib2R5KTtcclxuICAgICAgICBjb25zdCBmaXJzdEluaXQgPSAhdGhpcy4kcm91dGVyO1xyXG4gICAgICAgIGxldCBwYXRoID0gbnVsbDtcclxuICAgICAgICBpZiAoZmlyc3RJbml0KSB7XHJcbiAgICAgICAgICAgIGlmIChfb25jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5hdHRhY2hFdmVudChcIm9uQ2xpY2tcIiwgZSA9PiB0aGlzLmNsaWNrSGFuZGxlcihlKSk7XHJcbiAgICAgICAgICAgICAgICBfb25jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBuZXcgUm91dGUodXJsLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zdWJTZWdtZW50ID0gdGhpcy5fZmlyc3Rfc3RhcnQodXJsKTtcclxuICAgICAgICAgICAgdGhpcy5fc3ViU2VnbWVudC5yb3V0ZS5saW5rUm91dGVyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0gdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHVybC5zcGxpdCgpLnJvdXRlLnBhdGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gdXJsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5nZXRTdWJWaWV3KCk7XHJcbiAgICAgICAgY29uc3Qgc2VnbWVudCA9IHRoaXMuX3N1YlNlZ21lbnQ7XHJcbiAgICAgICAgY29uc3QgcmVhZHkgPSBzZWdtZW50LnNob3cocGF0aCwgdG9wKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmNyZWF0ZUZyb21VUkwoc2VnbWVudC5jdXJyZW50KCksIHRvcCkpXHJcbiAgICAgICAgICAgIC50aGVuKHZpZXcgPT4gdmlldy5yZW5kZXIocm9vdCwgc2VnbWVudCkpXHJcbiAgICAgICAgICAgIC50aGVuKGJhc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIuc2V0KHNlZ21lbnQucm91dGUucGF0aCwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbEV2ZW50KFwiYXBwOnJvdXRlXCIsIFt0aGlzLmdldFVybCgpXSk7XHJcbiAgICAgICAgICAgIHJldHVybiBiYXNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVhZHkgPSB0aGlzLnJlYWR5LnRoZW4oKCkgPT4gcmVhZHkpO1xyXG4gICAgICAgIHJldHVybiByZWFkeTtcclxuICAgIH1cclxuICAgIGdldFN1YlZpZXcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1YlNlZ21lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YlNlZ21lbnQuY3VycmVudCgpLnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSmV0Vmlldyh0aGlzLCB7fSk7XHJcbiAgICB9XHJcbiAgICBfZmlyc3Rfc3RhcnQocm91dGUpIHtcclxuICAgICAgICB0aGlzLl9zZWdtZW50ID0gcm91dGU7XHJcbiAgICAgICAgY29uc3QgY2IgPSAoYSkgPT4gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdyhhKTtcclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIgPSBuZXcgKHRoaXMuY29uZmlnLnJvdXRlcikoY2IsIHRoaXMuY29uZmlnLCB0aGlzKTtcclxuICAgICAgICAvLyBzdGFydCBhbmltYXRpb24gZm9yIHRvcC1sZXZlbCBhcHBcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyID09PSBkb2N1bWVudC5ib2R5ICYmIHRoaXMuY29uZmlnLmFuaW1hdGlvbiAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuX2NvbnRhaW5lcjtcclxuICAgICAgICAgICAgdGhpcy53ZWJpeC5odG1sLmFkZENzcyhub2RlLCBcIndlYml4YXBwc3RhcnRcIik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5odG1sLnJlbW92ZUNzcyhub2RlLCBcIndlYml4YXBwc3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwuYWRkQ3NzKG5vZGUsIFwid2ViaXhhcHBcIik7XHJcbiAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyb3V0ZSkge1xyXG4gICAgICAgICAgICAvLyBpZiBubyB1cmwgZGVmaW5lZCwgY2hlY2sgcm91dGVyIGZpcnN0XHJcbiAgICAgICAgICAgIGxldCB1cmxTdHJpbmcgPSB0aGlzLiRyb3V0ZXIuZ2V0KCk7XHJcbiAgICAgICAgICAgIGlmICghdXJsU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB1cmxTdHJpbmcgPSB0aGlzLmNvbmZpZy5zdGFydDtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5zZXQodXJsU3RyaW5nLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb3V0ZSA9IG5ldyBSb3V0ZSh1cmxTdHJpbmcsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICByb3V0ZS5jdXJyZW50KCkudmlldyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChyb3V0ZS5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlID0gcm91dGUuc3BsaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlID0gbmV3IFJvdXRlKHRoaXMuY29uZmlnLnN0YXJ0LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICB9XHJcbiAgICAvLyBlcnJvciBkdXJpbmcgdmlldyByZXNvbHZpbmdcclxuICAgIF9sb2FkRXJyb3IodXJsLCBlcnIpIHtcclxuICAgICAgICB0aGlzLmVycm9yKFwiYXBwOmVycm9yOnJlc29sdmVcIiwgW2VyciwgdXJsXSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdGVtcGxhdGU6IFwiIFwiIH07XHJcbiAgICB9XHJcbiAgICBhZGRTdWJWaWV3KG9iaiwgdGFyZ2V0LCBjb25maWcpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSBvYmouJHN1YnZpZXcgIT09IHRydWUgPyBvYmouJHN1YnZpZXcgOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBvYmoubmFtZSB8fCAodXJsID8gdGhpcy53ZWJpeC51aWQoKSA6IFwiZGVmYXVsdFwiKTtcclxuICAgICAgICB0YXJnZXQuaWQgPSBvYmouaWQgfHwgXCJzXCIgKyB0aGlzLndlYml4LnVpZCgpO1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSBjb25maWdbbmFtZV0gPSB7XHJcbiAgICAgICAgICAgIGlkOiB0YXJnZXQuaWQsXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgYnJhbmNoOiBvYmouYnJhbmNoLFxyXG4gICAgICAgICAgICBwb3B1cDogb2JqLnBvcHVwXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdmlldy5wb3B1cCA/IG51bGwgOiB0YXJnZXQ7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgSGFzaFJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgdGhpcy5fZGV0ZWN0UHJlZml4KCk7XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gKCkgPT4gdGhpcy5jYih0aGlzLmdldCgpKTtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcucm91dGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmUgPSBwYXRoLnNwbGl0KFwiP1wiLCAyKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb25maWcucm91dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25maWcucm91dGVzW2tleV0gPT09IGNvbXBhcmVbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0ga2V5ICsgKGNvbXBhcmUubGVuZ3RoID4gMSA/IFwiP1wiICsgY29tcGFyZVsxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmdldCgpICE9PSBwYXRoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB0aGlzLnByZWZpeCArIHRoaXMuc3VmaXggKyBwYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zaWxlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNiKHBhdGgpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgbGV0IHBhdGggPSB0aGlzLl9nZXRSYXcoKS5yZXBsYWNlKHRoaXMucHJlZml4LCBcIlwiKS5yZXBsYWNlKHRoaXMuc3VmaXgsIFwiXCIpO1xyXG4gICAgICAgIHBhdGggPSBwYXRoICE9PSBcIi9cIiA/IHBhdGggOiBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tcGFyZSA9IHBhdGguc3BsaXQoXCI/XCIsIDIpO1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbmZpZy5yb3V0ZXNbY29tcGFyZVswXV07XHJcbiAgICAgICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBrZXkgKyAoY29tcGFyZS5sZW5ndGggPiAxID8gXCI/XCIgKyBjb21wYXJlWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9XHJcbiAgICBfZGV0ZWN0UHJlZml4KCkge1xyXG4gICAgICAgIC8vIHVzZSBcIiMhXCIgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcclxuICAgICAgICBjb25zdCBzdWZpeCA9IHRoaXMuY29uZmlnLnJvdXRlclByZWZpeDtcclxuICAgICAgICB0aGlzLnN1Zml4ID0gXCIjXCIgKyAoKHR5cGVvZiBzdWZpeCA9PT0gXCJ1bmRlZmluZWRcIikgPyBcIiFcIiA6IHN1Zml4KTtcclxuICAgICAgICB0aGlzLnByZWZpeCA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIsIDIpWzBdO1xyXG4gICAgfVxyXG4gICAgX2dldFJhdygpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxufVxuXG5sZXQgaXNQYXRjaGVkID0gZmFsc2U7XHJcbmZ1bmN0aW9uIHBhdGNoKHcpIHtcclxuICAgIGlmIChpc1BhdGNoZWQgfHwgIXcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpc1BhdGNoZWQgPSB0cnVlO1xyXG4gICAgLy8gY3VzdG9tIHByb21pc2UgZm9yIElFOFxyXG4gICAgY29uc3Qgd2luID0gd2luZG93O1xyXG4gICAgaWYgKCF3aW4uUHJvbWlzZSkge1xyXG4gICAgICAgIHdpbi5Qcm9taXNlID0gdy5wcm9taXNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmVyc2lvbiA9IHcudmVyc2lvbi5zcGxpdChcIi5cIik7XHJcbiAgICAvLyB3aWxsIGJlIGZpeGVkIGluIHdlYml4IDUuM1xyXG4gICAgaWYgKHZlcnNpb25bMF0gKiAxMCArIHZlcnNpb25bMV0gKiAxIDwgNTMpIHtcclxuICAgICAgICB3LnVpLmZyZWV6ZSA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIC8vIGRpc2FibGVkIGJlY2F1c2Ugd2ViaXggamV0IDUuMCBjYW4ndCBoYW5kbGUgcmVzaXplIG9mIHNjcm9sbHZpZXcgY29ycmVjdGx5XHJcbiAgICAgICAgICAgIC8vIHcudWkuJGZyZWV6ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGhhbmRsZXIoKTtcclxuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMudGhlbikge1xyXG4gICAgICAgICAgICAgICAgcmVzLnRoZW4oZnVuY3Rpb24gKHNvbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3LnVpLiRmcmVlemUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB3LnVpLnJlc2l6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb21lO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3LnVpLiRmcmVlemUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHcudWkucmVzaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gYWRkaW5nIHZpZXdzIGFzIGNsYXNzZXNcclxuICAgIGNvbnN0IGJhc2VBZGQgPSB3LnVpLmJhc2VsYXlvdXQucHJvdG90eXBlLmFkZFZpZXc7XHJcbiAgICBjb25zdCBiYXNlUmVtb3ZlID0gdy51aS5iYXNlbGF5b3V0LnByb3RvdHlwZS5yZW1vdmVWaWV3O1xyXG4gICAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgICAgIGFkZFZpZXcodmlldywgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLndlYml4SmV0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqdmlldyA9IHRoaXMuJHNjb3BlO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdmlldyA9IGp2aWV3LmFwcC5jb3B5Q29uZmlnKHZpZXcsIHt9LCBzdWJzKTtcclxuICAgICAgICAgICAgICAgIGJhc2VBZGQuYXBwbHkodGhpcywgW3ZpZXcsIGluZGV4XSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdWJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAganZpZXcuX3JlbmRlckZyYW1lKGtleSwgc3Vic1trZXldLCBudWxsKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAganZpZXcuX3N1YnNba2V5XSA9IHN1YnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3LmlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhc2VBZGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlVmlldygpIHtcclxuICAgICAgICAgICAgYmFzZVJlbW92ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUud2ViaXhKZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSB0aGlzLiRzY29wZS5fc3VicztcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGFsbCBzdWItdmlld3MsIGRlc3Ryb3kgYW5kIGNsZWFuIHRoZSByZW1vdmVkIG9uZVxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3Vicykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBzdWJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF3LiQkKHRlc3QuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3Qudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdWJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHcuZXh0ZW5kKHcudWkubGF5b3V0LnByb3RvdHlwZSwgY29uZmlnLCB0cnVlKTtcclxuICAgIHcuZXh0ZW5kKHcudWkuYmFzZWxheW91dC5wcm90b3R5cGUsIGNvbmZpZywgdHJ1ZSk7XHJcbiAgICAvLyB3cmFwcGVyIGZvciB1c2luZyBKZXQgQXBwcyBhcyB2aWV3c1xyXG4gICAgdy5wcm90b1VJKHtcclxuICAgICAgICBuYW1lOiBcImpldGFwcFwiLFxyXG4gICAgICAgICRpbml0KGNmZykge1xyXG4gICAgICAgICAgICB0aGlzLiRhcHAgPSBuZXcgdGhpcy5hcHAoY2ZnKTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSB3LnVpZCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNmZy5ib2R5ID0geyBpZCB9O1xyXG4gICAgICAgICAgICB0aGlzLiRyZWFkeS5wdXNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcC5yZW5kZXIoeyBpZCB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLiRhcHApIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW4gPSB0aGlzLiRhcHBba2V5XTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JpZ2luID09PSBcImZ1bmN0aW9uXCIgJiYgIXRoaXNba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IG9yaWdpbi5iaW5kKHRoaXMuJGFwcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCB3LnVpLnByb3h5KTtcclxufVxuXG5jbGFzcyBKZXRBcHAgZXh0ZW5kcyBKZXRBcHBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZy5yb3V0ZXIgPSBjb25maWcucm91dGVyIHx8IEhhc2hSb3V0ZXI7XHJcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcclxuICAgICAgICBwYXRjaCh0aGlzLndlYml4KTtcclxuICAgIH1cclxuICAgIF9sb2FkVmlld0R5bmFtaWModXJsKSB7XHJcbiAgICAgICAgdXJsID0gdXJsLnJlcGxhY2UoL1xcLi9nLCBcIi9cIik7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJqZXQtdmlld3MvXCIgKyB1cmwpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIFN0b3JlUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcsIGFwcCkge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlIHx8IGFwcC53ZWJpeC5zdG9yYWdlLnNlc3Npb247XHJcbiAgICAgICAgdGhpcy5uYW1lID0gKGNvbmZpZy5zdG9yZU5hbWUgfHwgY29uZmlnLmlkICsgXCI6cm91dGVcIik7XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5wdXQodGhpcy5uYW1lLCBwYXRoKTtcclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldCh0aGlzLm5hbWUpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIFVybFJvdXRlciBleHRlbmRzIEhhc2hSb3V0ZXIge1xyXG4gICAgX2RldGVjdFByZWZpeCgpIHtcclxuICAgICAgICB0aGlzLnByZWZpeCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zdWZpeCA9IHRoaXMuY29uZmlnLnJvdXRlclByZWZpeCB8fCBcIlwiO1xyXG4gICAgfVxyXG4gICAgX2dldFJhdygpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgRW1wdHlSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIF8kY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRoO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIFVubG9hZEd1YXJkKGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICB2aWV3Lm9uKGFwcCwgYGFwcDpndWFyZGAsIGZ1bmN0aW9uIChfJHVybCwgcG9pbnQsIHByb21pc2UpIHtcclxuICAgICAgICBpZiAocG9pbnQgPT09IHZpZXcgfHwgcG9pbnQuY29udGFpbnModmlldykpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gY29uZmlnKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLmNvbmZpcm0gPSBQcm9taXNlLnJlamVjdChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5jb25maXJtID0gcHJvbWlzZS5jb25maXJtLnRoZW4oKCkgPT4gcmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XG5cbi8vICAgICAoYykgMjAxMi0yMDE4IEFpcmJuYiwgSW5jLlxuXG4vLyB2YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG5mdW5jdGlvbiBoYXMoc3RvcmUsIGtleSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN0b3JlLCBrZXkpO1xufVxuLy8gdmFyIGZvckVhY2ggPSByZXF1aXJlKCdmb3ItZWFjaCcpO1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChoYXMob2JqLCBrZXkpKSB7XG4gICAgICBoYW5kbGVyLmNhbGwoKGNvbnRleHQgfHwgb2JqKSwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICB9XG4gIH1cbn1cbi8vIHZhciB0cmltID0gcmVxdWlyZSgnc3RyaW5nLnByb3RvdHlwZS50cmltJyk7XG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLCAnJyk7XG59XG4vLyB2YXIgd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyBtZXNzYWdlO1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuXG4gIHRyeSB7IHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTsgfSBjYXRjaCAoeCkge31cbn1cblxudmFyIHJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG52YXIgc3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0O1xuXG4vLyAjIyMjIFBsdXJhbGl6YXRpb24gbWV0aG9kc1xuLy8gVGhlIHN0cmluZyB0aGF0IHNlcGFyYXRlcyB0aGUgZGlmZmVyZW50IHBocmFzZSBwb3NzaWJpbGl0aWVzLlxudmFyIGRlbGltaXRlciA9ICd8fHx8JztcblxudmFyIHJ1c3NpYW5QbHVyYWxHcm91cHMgPSBmdW5jdGlvbiAobikge1xuICB2YXIgZW5kID0gbiAlIDEwO1xuICBpZiAobiAhPT0gMTEgJiYgZW5kID09PSAxKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKDIgPD0gZW5kICYmIGVuZCA8PSA0ICYmICEobiA+PSAxMiAmJiBuIDw9IDE0KSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAyO1xufTtcblxuLy8gTWFwcGluZyBmcm9tIHBsdXJhbGl6YXRpb24gZ3JvdXAgcGx1cmFsIGxvZ2ljLlxudmFyIHBsdXJhbFR5cGVzID0ge1xuICBhcmFiaWM6IGZ1bmN0aW9uIChuKSB7XG4gICAgLy8gaHR0cDovL3d3dy5hcmFiZXllcy5vcmcvUGx1cmFsX0Zvcm1zXG4gICAgaWYgKG4gPCAzKSB7IHJldHVybiBuOyB9XG4gICAgdmFyIGxhc3RUd28gPSBuICUgMTAwO1xuICAgIGlmIChsYXN0VHdvID49IDMgJiYgbGFzdFR3byA8PSAxMCkgcmV0dXJuIDM7XG4gICAgcmV0dXJuIGxhc3RUd28gPj0gMTEgPyA0IDogNTtcbiAgfSxcbiAgYm9zbmlhbl9zZXJiaWFuOiBydXNzaWFuUGx1cmFsR3JvdXBzLFxuICBjaGluZXNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICBjcm9hdGlhbjogcnVzc2lhblBsdXJhbEdyb3VwcyxcbiAgZnJlbmNoOiBmdW5jdGlvbiAobikgeyByZXR1cm4gbiA+IDEgPyAxIDogMDsgfSxcbiAgZ2VybWFuOiBmdW5jdGlvbiAobikgeyByZXR1cm4gbiAhPT0gMSA/IDEgOiAwOyB9LFxuICBydXNzaWFuOiBydXNzaWFuUGx1cmFsR3JvdXBzLFxuICBsaXRodWFuaWFuOiBmdW5jdGlvbiAobikge1xuICAgIGlmIChuICUgMTAgPT09IDEgJiYgbiAlIDEwMCAhPT0gMTEpIHsgcmV0dXJuIDA7IH1cbiAgICByZXR1cm4gbiAlIDEwID49IDIgJiYgbiAlIDEwIDw9IDkgJiYgKG4gJSAxMDAgPCAxMSB8fCBuICUgMTAwID4gMTkpID8gMSA6IDI7XG4gIH0sXG4gIGN6ZWNoOiBmdW5jdGlvbiAobikge1xuICAgIGlmIChuID09PSAxKSB7IHJldHVybiAwOyB9XG4gICAgcmV0dXJuIChuID49IDIgJiYgbiA8PSA0KSA/IDEgOiAyO1xuICB9LFxuICBwb2xpc2g6IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKG4gPT09IDEpIHsgcmV0dXJuIDA7IH1cbiAgICB2YXIgZW5kID0gbiAlIDEwO1xuICAgIHJldHVybiAyIDw9IGVuZCAmJiBlbmQgPD0gNCAmJiAobiAlIDEwMCA8IDEwIHx8IG4gJSAxMDAgPj0gMjApID8gMSA6IDI7XG4gIH0sXG4gIGljZWxhbmRpYzogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIChuICUgMTAgIT09IDEgfHwgbiAlIDEwMCA9PT0gMTEpID8gMSA6IDA7IH0sXG4gIHNsb3ZlbmlhbjogZnVuY3Rpb24gKG4pIHtcbiAgICB2YXIgbGFzdFR3byA9IG4gJSAxMDA7XG4gICAgaWYgKGxhc3RUd28gPT09IDEpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAobGFzdFR3byA9PT0gMikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGlmIChsYXN0VHdvID09PSAzIHx8IGxhc3RUd28gPT09IDQpIHtcbiAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgICByZXR1cm4gMztcbiAgfVxufTtcblxuXG4vLyBNYXBwaW5nIGZyb20gcGx1cmFsaXphdGlvbiBncm91cCB0byBpbmRpdmlkdWFsIGxhbmd1YWdlIGNvZGVzL2xvY2FsZXMuXG4vLyBXaWxsIGxvb2sgdXAgYmFzZWQgb24gZXhhY3QgbWF0Y2gsIGlmIG5vdCBmb3VuZCBhbmQgaXQncyBhIGxvY2FsZSB3aWxsIHBhcnNlIHRoZSBsb2NhbGVcbi8vIGZvciBsYW5ndWFnZSBjb2RlLCBhbmQgaWYgdGhhdCBkb2VzIG5vdCBleGlzdCB3aWxsIGRlZmF1bHQgdG8gJ2VuJ1xudmFyIHBsdXJhbFR5cGVUb0xhbmd1YWdlcyA9IHtcbiAgYXJhYmljOiBbJ2FyJ10sXG4gIGJvc25pYW5fc2VyYmlhbjogWydicy1MYXRuLUJBJywgJ2JzLUN5cmwtQkEnLCAnc3JsLVJTJywgJ3NyLVJTJ10sXG4gIGNoaW5lc2U6IFsnaWQnLCAnaWQtSUQnLCAnamEnLCAna28nLCAna28tS1InLCAnbG8nLCAnbXMnLCAndGgnLCAndGgtVEgnLCAnemgnXSxcbiAgY3JvYXRpYW46IFsnaHInLCAnaHItSFInXSxcbiAgZ2VybWFuOiBbJ2ZhJywgJ2RhJywgJ2RlJywgJ2VuJywgJ2VzJywgJ2ZpJywgJ2VsJywgJ2hlJywgJ2hpLUlOJywgJ2h1JywgJ2h1LUhVJywgJ2l0JywgJ25sJywgJ25vJywgJ3B0JywgJ3N2JywgJ3RyJ10sXG4gIGZyZW5jaDogWydmcicsICd0bCcsICdwdC1iciddLFxuICBydXNzaWFuOiBbJ3J1JywgJ3J1LVJVJ10sXG4gIGxpdGh1YW5pYW46IFsnbHQnXSxcbiAgY3plY2g6IFsnY3MnLCAnY3MtQ1onLCAnc2snXSxcbiAgcG9saXNoOiBbJ3BsJ10sXG4gIGljZWxhbmRpYzogWydpcyddLFxuICBzbG92ZW5pYW46IFsnc2wtU0wnXVxufTtcblxuZnVuY3Rpb24gbGFuZ1RvVHlwZU1hcChtYXBwaW5nKSB7XG4gIHZhciByZXQgPSB7fTtcbiAgZm9yRWFjaChtYXBwaW5nLCBmdW5jdGlvbiAobGFuZ3MsIHR5cGUpIHtcbiAgICBmb3JFYWNoKGxhbmdzLCBmdW5jdGlvbiAobGFuZykge1xuICAgICAgcmV0W2xhbmddID0gdHlwZTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFR5cGVOYW1lKGxvY2FsZSkge1xuICB2YXIgbGFuZ1RvUGx1cmFsVHlwZSA9IGxhbmdUb1R5cGVNYXAocGx1cmFsVHlwZVRvTGFuZ3VhZ2VzKTtcbiAgcmV0dXJuIGxhbmdUb1BsdXJhbFR5cGVbbG9jYWxlXVxuICAgIHx8IGxhbmdUb1BsdXJhbFR5cGVbc3BsaXQuY2FsbChsb2NhbGUsIC8tLywgMSlbMF1dXG4gICAgfHwgbGFuZ1RvUGx1cmFsVHlwZS5lbjtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVHlwZUluZGV4KGxvY2FsZSwgY291bnQpIHtcbiAgcmV0dXJuIHBsdXJhbFR5cGVzW3BsdXJhbFR5cGVOYW1lKGxvY2FsZSldKGNvdW50KTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlKHRva2VuKSB7XG4gIHJldHVybiB0b2tlbi5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RUb2tlblJlZ2V4KG9wdHMpIHtcbiAgdmFyIHByZWZpeCA9IChvcHRzICYmIG9wdHMucHJlZml4KSB8fCAnJXsnO1xuICB2YXIgc3VmZml4ID0gKG9wdHMgJiYgb3B0cy5zdWZmaXgpIHx8ICd9JztcblxuICBpZiAocHJlZml4ID09PSBkZWxpbWl0ZXIgfHwgc3VmZml4ID09PSBkZWxpbWl0ZXIpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCInICsgZGVsaW1pdGVyICsgJ1wiIHRva2VuIGlzIHJlc2VydmVkIGZvciBwbHVyYWxpemF0aW9uJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChlc2NhcGUocHJlZml4KSArICcoLio/KScgKyBlc2NhcGUoc3VmZml4KSwgJ2cnKTtcbn1cblxudmFyIGRvbGxhclJlZ2V4ID0gL1xcJC9nO1xudmFyIGRvbGxhckJpbGxzWWFsbCA9ICckJCc7XG52YXIgZGVmYXVsdFRva2VuUmVnZXggPSAvJVxceyguKj8pXFx9L2c7XG5cbi8vICMjIyB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUpXG4vL1xuLy8gVGFrZXMgYSBwaHJhc2Ugc3RyaW5nIGFuZCB0cmFuc2Zvcm1zIGl0IGJ5IGNob29zaW5nIHRoZSBjb3JyZWN0XG4vLyBwbHVyYWwgZm9ybSBhbmQgaW50ZXJwb2xhdGluZyBpdC5cbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCdIZWxsbywgJXtuYW1lfSEnLCB7bmFtZTogJ1NwaWtlJ30pO1xuLy8gICAgIC8vIFwiSGVsbG8sIFNwaWtlIVwiXG4vL1xuLy8gVGhlIGNvcnJlY3QgcGx1cmFsIGZvcm0gaXMgc2VsZWN0ZWQgaWYgc3Vic3RpdHV0aW9ucy5zbWFydF9jb3VudFxuLy8gaXMgc2V0LiBZb3UgY2FuIHBhc3MgaW4gYSBudW1iZXIgaW5zdGVhZCBvZiBhbiBPYmplY3QgYXMgYHN1YnN0aXR1dGlvbnNgXG4vLyBhcyBhIHNob3J0Y3V0IGZvciBgc21hcnRfY291bnRgLlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJyV7c21hcnRfY291bnR9IG5ldyBtZXNzYWdlcyB8fHx8IDEgbmV3IG1lc3NhZ2UnLCB7c21hcnRfY291bnQ6IDF9LCAnZW4nKTtcbi8vICAgICAvLyBcIjEgbmV3IG1lc3NhZ2VcIlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJyV7c21hcnRfY291bnR9IG5ldyBtZXNzYWdlcyB8fHx8IDEgbmV3IG1lc3NhZ2UnLCB7c21hcnRfY291bnQ6IDJ9LCAnZW4nKTtcbi8vICAgICAvLyBcIjIgbmV3IG1lc3NhZ2VzXCJcbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCcle3NtYXJ0X2NvdW50fSBuZXcgbWVzc2FnZXMgfHx8fCAxIG5ldyBtZXNzYWdlJywgNSwgJ2VuJyk7XG4vLyAgICAgLy8gXCI1IG5ldyBtZXNzYWdlc1wiXG4vL1xuLy8gWW91IHNob3VsZCBwYXNzIGluIGEgdGhpcmQgYXJndW1lbnQsIHRoZSBsb2NhbGUsIHRvIHNwZWNpZnkgdGhlIGNvcnJlY3QgcGx1cmFsIHR5cGUuXG4vLyBJdCBkZWZhdWx0cyB0byBgJ2VuJ2Agd2l0aCAyIHBsdXJhbCBmb3Jtcy5cbmZ1bmN0aW9uIHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSwgdG9rZW5SZWdleCkge1xuICBpZiAodHlwZW9mIHBocmFzZSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQb2x5Z2xvdC50cmFuc2Zvcm1QaHJhc2UgZXhwZWN0cyBhcmd1bWVudCAjMSB0byBiZSBzdHJpbmcnKTtcbiAgfVxuXG4gIGlmIChzdWJzdGl0dXRpb25zID09IG51bGwpIHtcbiAgICByZXR1cm4gcGhyYXNlO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IHBocmFzZTtcbiAgdmFyIGludGVycG9sYXRpb25SZWdleCA9IHRva2VuUmVnZXggfHwgZGVmYXVsdFRva2VuUmVnZXg7XG5cbiAgLy8gYWxsb3cgbnVtYmVyIGFzIGEgcGx1cmFsaXphdGlvbiBzaG9ydGN1dFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzdWJzdGl0dXRpb25zID09PSAnbnVtYmVyJyA/IHsgc21hcnRfY291bnQ6IHN1YnN0aXR1dGlvbnMgfSA6IHN1YnN0aXR1dGlvbnM7XG5cbiAgLy8gU2VsZWN0IHBsdXJhbCBmb3JtOiBiYXNlZCBvbiBhIHBocmFzZSB0ZXh0IHRoYXQgY29udGFpbnMgYG5gXG4gIC8vIHBsdXJhbCBmb3JtcyBzZXBhcmF0ZWQgYnkgYGRlbGltaXRlcmAsIGEgYGxvY2FsZWAsIGFuZCBhIGBzdWJzdGl0dXRpb25zLnNtYXJ0X2NvdW50YCxcbiAgLy8gY2hvb3NlIHRoZSBjb3JyZWN0IHBsdXJhbCBmb3JtLiBUaGlzIGlzIG9ubHkgZG9uZSBpZiBgY291bnRgIGlzIHNldC5cbiAgaWYgKG9wdGlvbnMuc21hcnRfY291bnQgIT0gbnVsbCAmJiByZXN1bHQpIHtcbiAgICB2YXIgdGV4dHMgPSBzcGxpdC5jYWxsKHJlc3VsdCwgZGVsaW1pdGVyKTtcbiAgICByZXN1bHQgPSB0cmltKHRleHRzW3BsdXJhbFR5cGVJbmRleChsb2NhbGUgfHwgJ2VuJywgb3B0aW9ucy5zbWFydF9jb3VudCldIHx8IHRleHRzWzBdKTtcbiAgfVxuXG4gIC8vIEludGVycG9sYXRlOiBDcmVhdGVzIGEgYFJlZ0V4cGAgb2JqZWN0IGZvciBlYWNoIGludGVycG9sYXRpb24gcGxhY2Vob2xkZXIuXG4gIHJlc3VsdCA9IHJlcGxhY2UuY2FsbChyZXN1bHQsIGludGVycG9sYXRpb25SZWdleCwgZnVuY3Rpb24gKGV4cHJlc3Npb24sIGFyZ3VtZW50KSB7XG4gICAgaWYgKCFoYXMob3B0aW9ucywgYXJndW1lbnQpIHx8IG9wdGlvbnNbYXJndW1lbnRdID09IG51bGwpIHsgcmV0dXJuIGV4cHJlc3Npb247IH1cbiAgICAvLyBFbnN1cmUgcmVwbGFjZW1lbnQgdmFsdWUgaXMgZXNjYXBlZCB0byBwcmV2ZW50IHNwZWNpYWwgJC1wcmVmaXhlZCByZWdleCByZXBsYWNlIHRva2Vucy5cbiAgICByZXR1cm4gcmVwbGFjZS5jYWxsKG9wdGlvbnNbYXJndW1lbnRdLCBkb2xsYXJSZWdleCwgZG9sbGFyQmlsbHNZYWxsKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gIyMjIFBvbHlnbG90IGNsYXNzIGNvbnN0cnVjdG9yXG5mdW5jdGlvbiBQb2x5Z2xvdChvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5waHJhc2VzID0ge307XG4gIHRoaXMuZXh0ZW5kKG9wdHMucGhyYXNlcyB8fCB7fSk7XG4gIHRoaXMuY3VycmVudExvY2FsZSA9IG9wdHMubG9jYWxlIHx8ICdlbic7XG4gIHZhciBhbGxvd01pc3NpbmcgPSBvcHRzLmFsbG93TWlzc2luZyA/IHRyYW5zZm9ybVBocmFzZSA6IG51bGw7XG4gIHRoaXMub25NaXNzaW5nS2V5ID0gdHlwZW9mIG9wdHMub25NaXNzaW5nS2V5ID09PSAnZnVuY3Rpb24nID8gb3B0cy5vbk1pc3NpbmdLZXkgOiBhbGxvd01pc3Npbmc7XG4gIHRoaXMud2FybiA9IG9wdHMud2FybiB8fCB3YXJuO1xuICB0aGlzLnRva2VuUmVnZXggPSBjb25zdHJ1Y3RUb2tlblJlZ2V4KG9wdHMuaW50ZXJwb2xhdGlvbik7XG59XG5cbi8vICMjIyBwb2x5Z2xvdC5sb2NhbGUoW2xvY2FsZV0pXG4vL1xuLy8gR2V0IG9yIHNldCBsb2NhbGUuIEludGVybmFsbHksIFBvbHlnbG90IG9ubHkgdXNlcyBsb2NhbGUgZm9yIHBsdXJhbGl6YXRpb24uXG5Qb2x5Z2xvdC5wcm90b3R5cGUubG9jYWxlID0gZnVuY3Rpb24gKG5ld0xvY2FsZSkge1xuICBpZiAobmV3TG9jYWxlKSB0aGlzLmN1cnJlbnRMb2NhbGUgPSBuZXdMb2NhbGU7XG4gIHJldHVybiB0aGlzLmN1cnJlbnRMb2NhbGU7XG59O1xuXG4vLyAjIyMgcG9seWdsb3QuZXh0ZW5kKHBocmFzZXMpXG4vL1xuLy8gVXNlIGBleHRlbmRgIHRvIHRlbGwgUG9seWdsb3QgaG93IHRvIHRyYW5zbGF0ZSBhIGdpdmVuIGtleS5cbi8vXG4vLyAgICAgcG9seWdsb3QuZXh0ZW5kKHtcbi8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuLy8gICAgIH0pO1xuLy9cbi8vIFRoZSBrZXkgY2FuIGJlIGFueSBzdHJpbmcuICBGZWVsIGZyZWUgdG8gY2FsbCBgZXh0ZW5kYCBtdWx0aXBsZSB0aW1lcztcbi8vIGl0IHdpbGwgb3ZlcnJpZGUgYW55IHBocmFzZXMgd2l0aCB0aGUgc2FtZSBrZXksIGJ1dCBsZWF2ZSBleGlzdGluZyBwaHJhc2VzXG4vLyB1bnRvdWNoZWQuXG4vL1xuLy8gSXQgaXMgYWxzbyBwb3NzaWJsZSB0byBwYXNzIG5lc3RlZCBwaHJhc2Ugb2JqZWN0cywgd2hpY2ggZ2V0IGZsYXR0ZW5lZFxuLy8gaW50byBhbiBvYmplY3Qgd2l0aCB0aGUgbmVzdGVkIGtleXMgY29uY2F0ZW5hdGVkIHVzaW5nIGRvdCBub3RhdGlvbi5cbi8vXG4vLyAgICAgcG9seWdsb3QuZXh0ZW5kKHtcbi8vICAgICAgIFwibmF2XCI6IHtcbi8vICAgICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCIsXG4vLyAgICAgICAgIFwic2lkZWJhclwiOiB7XG4vLyAgICAgICAgICAgXCJ3ZWxjb21lXCI6IFwiV2VsY29tZVwiXG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICB9KTtcbi8vXG4vLyAgICAgY29uc29sZS5sb2cocG9seWdsb3QucGhyYXNlcyk7XG4vLyAgICAgLy8ge1xuLy8gICAgIC8vICAgJ25hdi5oZWxsbyc6ICdIZWxsbycsXG4vLyAgICAgLy8gICAnbmF2LmhlbGxvX25hbWUnOiAnSGVsbG8sICV7bmFtZX0nLFxuLy8gICAgIC8vICAgJ25hdi5zaWRlYmFyLndlbGNvbWUnOiAnV2VsY29tZSdcbi8vICAgICAvLyB9XG4vL1xuLy8gYGV4dGVuZGAgYWNjZXB0cyBhbiBvcHRpb25hbCBzZWNvbmQgYXJndW1lbnQsIGBwcmVmaXhgLCB3aGljaCBjYW4gYmUgdXNlZFxuLy8gdG8gcHJlZml4IGV2ZXJ5IGtleSBpbiB0aGUgcGhyYXNlcyBvYmplY3Qgd2l0aCBzb21lIHN0cmluZywgdXNpbmcgZG90XG4vLyBub3RhdGlvbi5cbi8vXG4vLyAgICAgcG9seWdsb3QuZXh0ZW5kKHtcbi8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuLy8gICAgIH0sIFwibmF2XCIpO1xuLy9cbi8vICAgICBjb25zb2xlLmxvZyhwb2x5Z2xvdC5waHJhc2VzKTtcbi8vICAgICAvLyB7XG4vLyAgICAgLy8gICAnbmF2LmhlbGxvJzogJ0hlbGxvJyxcbi8vICAgICAvLyAgICduYXYuaGVsbG9fbmFtZSc6ICdIZWxsbywgJXtuYW1lfSdcbi8vICAgICAvLyB9XG4vL1xuLy8gVGhpcyBmZWF0dXJlIGlzIHVzZWQgaW50ZXJuYWxseSB0byBzdXBwb3J0IG5lc3RlZCBwaHJhc2Ugb2JqZWN0cy5cblBvbHlnbG90LnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAobW9yZVBocmFzZXMsIHByZWZpeCkge1xuICBmb3JFYWNoKG1vcmVQaHJhc2VzLCBmdW5jdGlvbiAocGhyYXNlLCBrZXkpIHtcbiAgICB2YXIgcHJlZml4ZWRLZXkgPSBwcmVmaXggPyBwcmVmaXggKyAnLicgKyBrZXkgOiBrZXk7XG4gICAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLmV4dGVuZChwaHJhc2UsIHByZWZpeGVkS2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5waHJhc2VzW3ByZWZpeGVkS2V5XSA9IHBocmFzZTtcbiAgICB9XG4gIH0sIHRoaXMpO1xufTtcblxuLy8gIyMjIHBvbHlnbG90LnVuc2V0KHBocmFzZXMpXG4vLyBVc2UgYHVuc2V0YCB0byBzZWxlY3RpdmVseSByZW1vdmUga2V5cyBmcm9tIGEgcG9seWdsb3QgaW5zdGFuY2UuXG4vL1xuLy8gICAgIHBvbHlnbG90LnVuc2V0KFwic29tZV9rZXlcIik7XG4vLyAgICAgcG9seWdsb3QudW5zZXQoe1xuLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4vLyAgICAgfSk7XG4vL1xuLy8gVGhlIHVuc2V0IG1ldGhvZCBjYW4gdGFrZSBlaXRoZXIgYSBzdHJpbmcgKGZvciB0aGUga2V5KSwgb3IgYW4gb2JqZWN0IGhhc2ggd2l0aFxuLy8gdGhlIGtleXMgdGhhdCB5b3Ugd291bGQgbGlrZSB0byB1bnNldC5cblBvbHlnbG90LnByb3RvdHlwZS51bnNldCA9IGZ1bmN0aW9uIChtb3JlUGhyYXNlcywgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbW9yZVBocmFzZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgZGVsZXRlIHRoaXMucGhyYXNlc1ttb3JlUGhyYXNlc107XG4gIH0gZWxzZSB7XG4gICAgZm9yRWFjaChtb3JlUGhyYXNlcywgZnVuY3Rpb24gKHBocmFzZSwga2V5KSB7XG4gICAgICB2YXIgcHJlZml4ZWRLZXkgPSBwcmVmaXggPyBwcmVmaXggKyAnLicgKyBrZXkgOiBrZXk7XG4gICAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhpcy51bnNldChwaHJhc2UsIHByZWZpeGVkS2V5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBocmFzZXNbcHJlZml4ZWRLZXldO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG59O1xuXG4vLyAjIyMgcG9seWdsb3QuY2xlYXIoKVxuLy9cbi8vIENsZWFycyBhbGwgcGhyYXNlcy4gVXNlZnVsIGZvciBzcGVjaWFsIGNhc2VzLCBzdWNoIGFzIGZyZWVpbmdcbi8vIHVwIG1lbW9yeSBpZiB5b3UgaGF2ZSBsb3RzIG9mIHBocmFzZXMgYnV0IG5vIGxvbmdlciBuZWVkIHRvXG4vLyBwZXJmb3JtIGFueSB0cmFuc2xhdGlvbi4gQWxzbyB1c2VkIGludGVybmFsbHkgYnkgYHJlcGxhY2VgLlxuUG9seWdsb3QucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnBocmFzZXMgPSB7fTtcbn07XG5cbi8vICMjIyBwb2x5Z2xvdC5yZXBsYWNlKHBocmFzZXMpXG4vL1xuLy8gQ29tcGxldGVseSByZXBsYWNlIHRoZSBleGlzdGluZyBwaHJhc2VzIHdpdGggYSBuZXcgc2V0IG9mIHBocmFzZXMuXG4vLyBOb3JtYWxseSwganVzdCB1c2UgYGV4dGVuZGAgdG8gYWRkIG1vcmUgcGhyYXNlcywgYnV0IHVuZGVyIGNlcnRhaW5cbi8vIGNpcmN1bXN0YW5jZXMsIHlvdSBtYXkgd2FudCB0byBtYWtlIHN1cmUgbm8gb2xkIHBocmFzZXMgYXJlIGx5aW5nIGFyb3VuZC5cblBvbHlnbG90LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKG5ld1BocmFzZXMpIHtcbiAgdGhpcy5jbGVhcigpO1xuICB0aGlzLmV4dGVuZChuZXdQaHJhc2VzKTtcbn07XG5cblxuLy8gIyMjIHBvbHlnbG90LnQoa2V5LCBvcHRpb25zKVxuLy9cbi8vIFRoZSBtb3N0LXVzZWQgbWV0aG9kLiBQcm92aWRlIGEga2V5LCBhbmQgYHRgIHdpbGwgcmV0dXJuIHRoZVxuLy8gcGhyYXNlLlxuLy9cbi8vICAgICBwb2x5Z2xvdC50KFwiaGVsbG9cIik7XG4vLyAgICAgPT4gXCJIZWxsb1wiXG4vL1xuLy8gVGhlIHBocmFzZSB2YWx1ZSBpcyBwcm92aWRlZCBmaXJzdCBieSBhIGNhbGwgdG8gYHBvbHlnbG90LmV4dGVuZCgpYCBvclxuLy8gYHBvbHlnbG90LnJlcGxhY2UoKWAuXG4vL1xuLy8gUGFzcyBpbiBhbiBvYmplY3QgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byBwZXJmb3JtIGludGVycG9sYXRpb24uXG4vL1xuLy8gICAgIHBvbHlnbG90LnQoXCJoZWxsb19uYW1lXCIsIHtuYW1lOiBcIlNwaWtlXCJ9KTtcbi8vICAgICA9PiBcIkhlbGxvLCBTcGlrZVwiXG4vL1xuLy8gSWYgeW91IGxpa2UsIHlvdSBjYW4gcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUgaW4gY2FzZSB0aGUgcGhyYXNlIGlzIG1pc3NpbmcuXG4vLyBVc2UgdGhlIHNwZWNpYWwgb3B0aW9uIGtleSBcIl9cIiB0byBzcGVjaWZ5IGEgZGVmYXVsdC5cbi8vXG4vLyAgICAgcG9seWdsb3QudChcImlfbGlrZV90b193cml0ZV9pbl9sYW5ndWFnZVwiLCB7XG4vLyAgICAgICBfOiBcIkkgbGlrZSB0byB3cml0ZSBpbiAle2xhbmd1YWdlfS5cIixcbi8vICAgICAgIGxhbmd1YWdlOiBcIkphdmFTY3JpcHRcIlxuLy8gICAgIH0pO1xuLy8gICAgID0+IFwiSSBsaWtlIHRvIHdyaXRlIGluIEphdmFTY3JpcHQuXCJcbi8vXG5Qb2x5Z2xvdC5wcm90b3R5cGUudCA9IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMpIHtcbiAgdmFyIHBocmFzZSwgcmVzdWx0O1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgPT0gbnVsbCA/IHt9IDogb3B0aW9ucztcbiAgaWYgKHR5cGVvZiB0aGlzLnBocmFzZXNba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICBwaHJhc2UgPSB0aGlzLnBocmFzZXNba2V5XTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cy5fID09PSAnc3RyaW5nJykge1xuICAgIHBocmFzZSA9IG9wdHMuXztcbiAgfSBlbHNlIGlmICh0aGlzLm9uTWlzc2luZ0tleSkge1xuICAgIHZhciBvbk1pc3NpbmdLZXkgPSB0aGlzLm9uTWlzc2luZ0tleTtcbiAgICByZXN1bHQgPSBvbk1pc3NpbmdLZXkoa2V5LCBvcHRzLCB0aGlzLmN1cnJlbnRMb2NhbGUsIHRoaXMudG9rZW5SZWdleCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YXJuKCdNaXNzaW5nIHRyYW5zbGF0aW9uIGZvciBrZXk6IFwiJyArIGtleSArICdcIicpO1xuICAgIHJlc3VsdCA9IGtleTtcbiAgfVxuICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBvcHRzLCB0aGlzLmN1cnJlbnRMb2NhbGUsIHRoaXMudG9rZW5SZWdleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8gIyMjIHBvbHlnbG90LmhhcyhrZXkpXG4vL1xuLy8gQ2hlY2sgaWYgcG9seWdsb3QgaGFzIGEgdHJhbnNsYXRpb24gZm9yIGdpdmVuIGtleVxuUG9seWdsb3QucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGhhcyh0aGlzLnBocmFzZXMsIGtleSk7XG59O1xuXG4vLyBleHBvcnQgdHJhbnNmb3JtUGhyYXNlXG5Qb2x5Z2xvdC50cmFuc2Zvcm1QaHJhc2UgPSBmdW5jdGlvbiB0cmFuc2Zvcm0ocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSk7XG59O1xuXG52YXIgd2ViaXhQb2x5Z2xvdCA9IFBvbHlnbG90O1xuXG5mdW5jdGlvbiBMb2NhbGUoYXBwLCBfdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XHJcbiAgICBsZXQgbGFuZyA9IHN0b3JhZ2UgPyAoc3RvcmFnZS5nZXQoXCJsYW5nXCIpIHx8IFwiZW5cIikgOiAoY29uZmlnLmxhbmcgfHwgXCJlblwiKTtcclxuICAgIGZ1bmN0aW9uIHNldExhbmdEYXRhKG5hbWUsIGRhdGEsIHNpbGVudCkge1xyXG4gICAgICAgIGlmIChkYXRhLl9fZXNNb2R1bGUpIHtcclxuICAgICAgICAgICAgZGF0YSA9IGRhdGEuZGVmYXVsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGNvbmZpZyA9IHsgcGhyYXNlczogZGF0YSB9O1xyXG4gICAgICAgIGlmIChjb25maWcucG9seWdsb3QpIHtcclxuICAgICAgICAgICAgYXBwLndlYml4LmV4dGVuZChwY29uZmlnLCBjb25maWcucG9seWdsb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2x5ID0gc2VydmljZS5wb2x5Z2xvdCA9IG5ldyB3ZWJpeFBvbHlnbG90KHBjb25maWcpO1xyXG4gICAgICAgIHBvbHkubG9jYWxlKG5hbWUpO1xyXG4gICAgICAgIHNlcnZpY2UuXyA9IGFwcC53ZWJpeC5iaW5kKHBvbHkudCwgcG9seSk7XHJcbiAgICAgICAgbGFuZyA9IG5hbWU7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgc3RvcmFnZS5wdXQoXCJsYW5nXCIsIGxhbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29uZmlnLndlYml4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY05hbWUgPSBjb25maWcud2ViaXhbbmFtZV07XHJcbiAgICAgICAgICAgIGlmIChsb2NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBhcHAud2ViaXguaTE4bi5zZXRMb2NhbGUobG9jTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFwcC5yZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldExhbmcoKSB7IHJldHVybiBsYW5nOyB9XHJcbiAgICBmdW5jdGlvbiBzZXRMYW5nKG5hbWUsIHNpbGVudCkge1xyXG4gICAgICAgIC8vIGlnbm9yZSBzZXRMYW5nIGlmIGxvYWRpbmcgYnkgcGF0aCBpcyBkaXNhYmxlZFxyXG4gICAgICAgIGlmIChjb25maWcucGF0aCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYXRoID0gKGNvbmZpZy5wYXRoID8gY29uZmlnLnBhdGggKyBcIi9cIiA6IFwiXCIpICsgbmFtZTtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxdWlyZShcImpldC1sb2NhbGVzL1wiICsgcGF0aCk7XHJcbiAgICAgICAgc2V0TGFuZ0RhdGEobmFtZSwgZGF0YSwgc2lsZW50KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0TGFuZywgc2V0TGFuZywgc2V0TGFuZ0RhdGEsIF86IG51bGwsIHBvbHlnbG90OiBudWxsXHJcbiAgICB9O1xyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJsb2NhbGVcIiwgc2VydmljZSk7XHJcbiAgICBzZXRMYW5nKGxhbmcsIHRydWUpO1xyXG59XG5cbmZ1bmN0aW9uIHNob3codmlldywgY29uZmlnLCB2YWx1ZSkge1xyXG4gICAgaWYgKGNvbmZpZy51cmxzKSB7XHJcbiAgICAgICAgdmFsdWUgPSBjb25maWcudXJsc1t2YWx1ZV0gfHwgdmFsdWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjb25maWcucGFyYW0pIHtcclxuICAgICAgICB2YWx1ZSA9IHsgW2NvbmZpZy5wYXJhbV06IHZhbHVlIH07XHJcbiAgICB9XHJcbiAgICB2aWV3LnNob3codmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIE1lbnUoYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIGNvbnN0IGZyYW1lID0gdmlldy5nZXRTdWJWaWV3SW5mbygpLnBhcmVudDtcclxuICAgIGNvbnN0IHVpID0gdmlldy4kJChjb25maWcuaWQgfHwgY29uZmlnKTtcclxuICAgIGxldCBzaWxlbnQgPSBmYWxzZTtcclxuICAgIHVpLmF0dGFjaEV2ZW50KFwib25jaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNob3coZnJhbWUsIGNvbmZpZywgdGhpcy5nZXRWYWx1ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHVpLmF0dGFjaEV2ZW50KFwib25hZnRlcnNlbGVjdFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGlkID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHVpLnNldFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZCA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1aS5nZXRTZWxlY3RlZElkKSB7XHJcbiAgICAgICAgICAgICAgICBpZCA9IHVpLmdldFNlbGVjdGVkSWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaG93KGZyYW1lLCBjb25maWcsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHZpZXcub24oYXBwLCBgYXBwOnJvdXRlYCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBuYW1lID0gXCJcIjtcclxuICAgICAgICBpZiAoY29uZmlnLnBhcmFtKSB7XHJcbiAgICAgICAgICAgIG5hbWUgPSB2aWV3LmdldFBhcmFtKGNvbmZpZy5wYXJhbSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzZWdtZW50ID0gZnJhbWUuZ2V0VXJsKClbMV07XHJcbiAgICAgICAgICAgIGlmIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gc2VnbWVudC5wYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHNpbGVudCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh1aS5zZXRWYWx1ZSAmJiB1aS5nZXRWYWx1ZSgpICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB1aS5zZXRWYWx1ZShuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh1aS5zZWxlY3QgJiYgdWkuZXhpc3RzKG5hbWUpICYmIHVpLmdldFNlbGVjdGVkSWQoKSAhPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdWkuc2VsZWN0KG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNpbGVudCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XG5cbmNvbnN0IGJhc2VpY29ucyA9IHtcclxuICAgIGdvb2Q6IFwiY2hlY2tcIixcclxuICAgIGVycm9yOiBcIndhcm5pbmdcIixcclxuICAgIHNhdmluZzogXCJyZWZyZXNoIGZhLXNwaW5cIlxyXG59O1xyXG5jb25zdCBiYXNldGV4dCA9IHtcclxuICAgIGdvb2Q6IFwiT2tcIixcclxuICAgIGVycm9yOiBcIkVycm9yXCIsXHJcbiAgICBzYXZpbmc6IFwiQ29ubmVjdGluZy4uLlwiXHJcbn07XHJcbmZ1bmN0aW9uIFN0YXR1cyhhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgbGV0IHN0YXR1cyA9IFwiZ29vZFwiO1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGxldCBpc2Vycm9yID0gZmFsc2U7XHJcbiAgICBsZXQgZXhwaXJlRGVsYXkgPSBjb25maWcuZXhwaXJlO1xyXG4gICAgaWYgKCFleHBpcmVEZWxheSAmJiBleHBpcmVEZWxheSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBleHBpcmVEZWxheSA9IDIwMDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZXh0cyA9IGNvbmZpZy50ZXh0cyB8fCBiYXNldGV4dDtcclxuICAgIGNvbnN0IGljb25zID0gY29uZmlnLmljb25zIHx8IGJhc2VpY29ucztcclxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgY29uZmlnID0geyB0YXJnZXQ6IGNvbmZpZyB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVmcmVzaChjb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgYXJlYSA9IHZpZXcuJCQoY29uZmlnLnRhcmdldCk7XHJcbiAgICAgICAgaWYgKGFyZWEpIHtcclxuICAgICAgICAgICAgaWYgKCFjb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gXCI8ZGl2IGNsYXNzPSdzdGF0dXNfXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyArXHJcbiAgICAgICAgICAgICAgICAgICAgXCInPjxzcGFuIGNsYXNzPSd3ZWJpeF9pY29uIGZhLVwiICtcclxuICAgICAgICAgICAgICAgICAgICBpY29uc1tzdGF0dXNdICsgXCInPjwvc3Bhbj4gXCIgKyB0ZXh0c1tzdGF0dXNdICsgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcmVhLnNldEhUTUwoY29udGVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3VjY2VzcygpIHtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgIHNldFN0YXR1cyhcImdvb2RcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmYWlsKGVycikge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgc2V0U3RhdHVzKFwiZXJyb3JcIiwgZXJyKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0YXJ0KHByb21pc2UpIHtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIHNldFN0YXR1cyhcInNhdmluZ1wiKTtcclxuICAgICAgICBpZiAocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHtcclxuICAgICAgICAgICAgcHJvbWlzZS50aGVuKHN1Y2Nlc3MsIGZhaWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldFN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGlkZVN0YXR1cygpIHtcclxuICAgICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgcmVmcmVzaChcIiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0U3RhdHVzKG1vZGUsIGVycikge1xyXG4gICAgICAgIGlmIChjb3VudCA8IDApIHtcclxuICAgICAgICAgICAgY291bnQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW9kZSA9PT0gXCJzYXZpbmdcIikge1xyXG4gICAgICAgICAgICBzdGF0dXMgPSBcInNhdmluZ1wiO1xyXG4gICAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpc2Vycm9yID0gKG1vZGUgPT09IFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzID0gaXNlcnJvciA/IFwiZXJyb3JcIiA6IFwiZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHAuZXJyb3IoXCJhcHA6ZXJyb3I6c2VydmVyXCIsIFtlcnIucmVzcG9uc2VUZXh0IHx8IGVycl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4cGlyZURlbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoaGlkZVN0YXR1cywgZXhwaXJlRGVsYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyYWNrKGRhdGEpIHtcclxuICAgICAgICBjb25zdCBkcCA9IGFwcC53ZWJpeC5kcChkYXRhKTtcclxuICAgICAgICBpZiAoZHApIHtcclxuICAgICAgICAgICAgdmlldy5vbihkcCwgXCJvbkFmdGVyRGF0YVNlbmRcIiwgc3RhcnQpO1xyXG4gICAgICAgICAgICB2aWV3Lm9uKGRwLCBcIm9uQWZ0ZXJTYXZlRXJyb3JcIiwgKF9pZCwgX29iaiwgcmVzcG9uc2UpID0+IGZhaWwocmVzcG9uc2UpKTtcclxuICAgICAgICAgICAgdmlldy5vbihkcCwgXCJvbkFmdGVyU2F2ZVwiLCBzdWNjZXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHAuc2V0U2VydmljZShcInN0YXR1c1wiLCB7XHJcbiAgICAgICAgZ2V0U3RhdHVzLFxyXG4gICAgICAgIHNldFN0YXR1cyxcclxuICAgICAgICB0cmFja1xyXG4gICAgfSk7XHJcbiAgICBpZiAoY29uZmlnLnJlbW90ZSkge1xyXG4gICAgICAgIHZpZXcub24oYXBwLndlYml4LCBcIm9uUmVtb3RlQ2FsbFwiLCBzdGFydCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLmFqYXgpIHtcclxuICAgICAgICB2aWV3Lm9uKGFwcC53ZWJpeCwgXCJvbkJlZm9yZUFqYXhcIiwgKF9tb2RlLCBfdXJsLCBfZGF0YSwgX3JlcXVlc3QsIF9oZWFkZXJzLCBfZmlsZXMsIHByb21pc2UpID0+IHtcclxuICAgICAgICAgICAgc3RhcnQocHJvbWlzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29uZmlnLmRhdGEpIHtcclxuICAgICAgICB0cmFjayhjb25maWcuZGF0YSk7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gVGhlbWUoYXBwLCBfdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBzdG9yYWdlID0gY29uZmlnLnN0b3JhZ2U7XHJcbiAgICBsZXQgdGhlbWUgPSBzdG9yYWdlID9cclxuICAgICAgICAoc3RvcmFnZS5nZXQoXCJ0aGVtZVwiKSB8fCBcImZsYXQtZGVmYXVsdFwiKVxyXG4gICAgICAgIDpcclxuICAgICAgICAgICAgKGNvbmZpZy50aGVtZSB8fCBcImZsYXQtZGVmYXVsdFwiKTtcclxuICAgIGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0VGhlbWUoKSB7IHJldHVybiB0aGVtZTsgfSxcclxuICAgICAgICBzZXRUaGVtZShuYW1lLCBzaWxlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBuYW1lLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxuYW1lID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKFwidGl0bGVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAobG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobG5hbWUgPT09IG5hbWUgfHwgbG5hbWUgPT09IHBhcnRzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzW2ldLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rc1tpXS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5za2luLnNldChwYXJ0c1swXSk7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvbGQgY3NzXHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5odG1sLnJlbW92ZUNzcyhkb2N1bWVudC5ib2R5LCBcInRoZW1lLVwiICsgdGhlbWUpO1xyXG4gICAgICAgICAgICAvLyBhZGQgbmV3IGNzc1xyXG4gICAgICAgICAgICBhcHAud2ViaXguaHRtbC5hZGRDc3MoZG9jdW1lbnQuYm9keSwgXCJ0aGVtZS1cIiArIG5hbWUpO1xyXG4gICAgICAgICAgICB0aGVtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIGlmIChzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnB1dChcInRoZW1lXCIsIG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgICAgICBhcHAucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwidGhlbWVcIiwgc2VydmljZSk7XHJcbiAgICBzZXJ2aWNlLnNldFRoZW1lKHRoZW1lLCB0cnVlKTtcclxufVxuXG5mdW5jdGlvbiBjb3B5UGFyYW1zKGRhdGEsIHVybCwgcm91dGUpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkYXRhW3JvdXRlW2ldXSA9IHVybFtpICsgMV0gPyB1cmxbaSArIDFdLnBhZ2UgOiBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIFVybFBhcmFtKGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGNvbmZpZy5yb3V0ZSB8fCBjb25maWc7XHJcbiAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICB2aWV3Lm9uKGFwcCwgXCJhcHA6dXJsY2hhbmdlXCIsIGZ1bmN0aW9uIChzdWJ2aWV3LCBzZWdtZW50KSB7XHJcbiAgICAgICAgaWYgKHZpZXcgPT09IHN1YnZpZXcpIHtcclxuICAgICAgICAgICAgY29weVBhcmFtcyhkYXRhLCBzZWdtZW50LnN1YnVybCgpLCByb3V0ZSk7XHJcbiAgICAgICAgICAgIHNlZ21lbnQuc2l6ZShyb3V0ZS5sZW5ndGggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG9zID0gdmlldy5zZXRQYXJhbTtcclxuICAgIGNvbnN0IG9nID0gdmlldy5nZXRQYXJhbTtcclxuICAgIHZpZXcuc2V0UGFyYW0gPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIHNob3cpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHJvdXRlLmluZGV4T2YobmFtZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWdtZW50LnVwZGF0ZShcIlwiLCB2YWx1ZSwgaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgaWYgKHNob3cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3LnNob3cobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcy5jYWxsKHRoaXMsIG5hbWUsIHZhbHVlLCBzaG93KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmlldy5nZXRQYXJhbSA9IGZ1bmN0aW9uIChrZXksIG1vZGUpIHtcclxuICAgICAgICBjb25zdCB2YWwgPSBkYXRhW2tleV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9nLmNhbGwodGhpcywga2V5LCBtb2RlKTtcclxuICAgIH07XHJcbiAgICBjb3B5UGFyYW1zKGRhdGEsIHZpZXcuZ2V0VXJsKCksIHJvdXRlKTtcclxufVxuXG5mdW5jdGlvbiBVc2VyKGFwcCwgX3ZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3QgbG9naW4gPSBjb25maWcubG9naW4gfHwgXCIvbG9naW5cIjtcclxuICAgIGNvbnN0IGxvZ291dCA9IGNvbmZpZy5sb2dvdXQgfHwgXCIvbG9nb3V0XCI7XHJcbiAgICBjb25zdCBhZnRlckxvZ2luID0gY29uZmlnLmFmdGVyTG9naW4gfHwgYXBwLmNvbmZpZy5zdGFydDtcclxuICAgIGNvbnN0IGFmdGVyTG9nb3V0ID0gY29uZmlnLmFmdGVyTG9nb3V0IHx8IFwiL2xvZ2luXCI7XHJcbiAgICBjb25zdCBwaW5nID0gY29uZmlnLnBpbmcgfHwgNSAqIDYwICogMTAwMDtcclxuICAgIGNvbnN0IG1vZGVsID0gY29uZmlnLm1vZGVsO1xyXG4gICAgbGV0IHVzZXIgPSBjb25maWcudXNlcjtcclxuICAgIGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAgICAgZ2V0VXNlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRTdGF0dXMoc2VydmVyKSB7XHJcbiAgICAgICAgICAgIGlmICghc2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlciAhPT0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWwuc3RhdHVzKCkuY2F0Y2goKCkgPT4gbnVsbCkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHVzZXIgPSBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ2luKG5hbWUsIHBhc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLmxvZ2luKG5hbWUsIHBhc3MpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhcHAuY2FsbEV2ZW50KFwiYXBwOnVzZXI6bG9naW5cIiwgW3VzZXJdKTtcclxuICAgICAgICAgICAgICAgIGFwcC5zaG93KGFmdGVyTG9naW4pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ291dCgpIHtcclxuICAgICAgICAgICAgdXNlciA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5sb2dvdXQoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcHAuY2FsbEV2ZW50KFwiYXBwOnVzZXI6bG9nb3V0XCIsIFtdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBjYW5OYXZpZ2F0ZSh1cmwsIG9iaikge1xyXG4gICAgICAgIGlmICh1cmwgPT09IGxvZ291dCkge1xyXG4gICAgICAgICAgICBzZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgICAgICBvYmoucmVkaXJlY3QgPSBhZnRlckxvZ291dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodXJsICE9PSBsb2dpbiAmJiAhc2VydmljZS5nZXRTdGF0dXMoKSkge1xyXG4gICAgICAgICAgICBvYmoucmVkaXJlY3QgPSBsb2dpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhcHAuc2V0U2VydmljZShcInVzZXJcIiwgc2VydmljZSk7XHJcbiAgICBhcHAuYXR0YWNoRXZlbnQoYGFwcDpndWFyZGAsIGZ1bmN0aW9uICh1cmwsIF8kcm9vdCwgb2JqKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wdWJsaWMgJiYgY29uZmlnLnB1YmxpYyh1cmwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHVzZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgb2JqLmNvbmZpcm0gPSBzZXJ2aWNlLmdldFN0YXR1cyh0cnVlKS50aGVuKCgpID0+IGNhbk5hdmlnYXRlKHVybCwgb2JqKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYW5OYXZpZ2F0ZSh1cmwsIG9iaik7XHJcbiAgICB9KTtcclxuICAgIGlmIChwaW5nKSB7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gc2VydmljZS5nZXRTdGF0dXModHJ1ZSksIHBpbmcpO1xyXG4gICAgfVxyXG59XG5cbi8qXHJcbk1JVCBMaWNlbnNlXHJcbkNvcHlyaWdodCAoYykgMjAxOSBYQiBTb2Z0d2FyZVxyXG4qL1xyXG5sZXQgd2ViaXggPSB3aW5kb3cud2ViaXg7XHJcbmlmICh3ZWJpeCkge1xyXG4gICAgcGF0Y2god2ViaXgpO1xyXG59XHJcbmNvbnN0IHBsdWdpbnMgPSB7XHJcbiAgICBVbmxvYWRHdWFyZCwgTG9jYWxlLCBNZW51LCBUaGVtZSwgVXNlciwgU3RhdHVzLCBVcmxQYXJhbVxyXG59O1xyXG5jb25zdCB3ID0gd2luZG93O1xyXG5pZiAoIXcuUHJvbWlzZSkge1xyXG4gICAgdy5Qcm9taXNlID0gdy53ZWJpeC5wcm9taXNlO1xyXG59XG5cbmV4cG9ydCB7IHBsdWdpbnMsIEpldEFwcCwgSmV0VmlldywgSGFzaFJvdXRlciwgU3RvcmVSb3V0ZXIsIFVybFJvdXRlciwgRW1wdHlSb3V0ZXIsIFN1YlJvdXRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9amV0LmpzLm1hcFxuIiwiY29uc3QgbG9nb3V0VXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dvdXQnO1xyXG5jb25zdCBsb2dpblVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW4nO1xyXG5jb25zdCByZWdpc3RlclVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvcmVnaXN0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aG9yaXphdGlvbiB7XHJcblx0cmVnaXN0ZXIob2JqKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QocmVnaXN0ZXJVcmwsIG9iaik7XHJcblx0fVxyXG5cclxuXHRsb2dpbihvYmopIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdChsb2dpblVybCwgb2JqKTtcclxuXHR9XHJcblxyXG5cdGxvZ291dCgpIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkuZ2V0KGxvZ291dFVybClcclxuXHR9XHJcbn0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZW5cIjogXCIuL3NvdXJjZXMvbG9jYWxlcy9lbi5qc1wiLFxuXHRcIi4vZW4uanNcIjogXCIuL3NvdXJjZXMvbG9jYWxlcy9lbi5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NvdXJjZXMvbG9jYWxlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImV4cG9ydCBjb25zdCBncm91cHMgPSBuZXcgd2ViaXguRGF0YUNvbGxlY3Rpb24oe1xyXG5cdHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ncm91cHMvJyxcclxuXHRzYXZlOiB7XHJcblx0XHR1cmw6ICdyZXN0LT5odHRwOi8vbG9jYWxob3N0OjMwMDAvZ3JvdXBzLycsXHJcblx0XHR1cGRhdGVGcm9tUmVzcG9uc2U6IHRydWVcclxuXHR9LFxyXG5cdHNjaGVtZToge1xyXG5cdFx0JGluaXQob2JqKSB7XHJcblx0XHRcdG9iai5jcmVhdGlvbkRhdGUgPSBuZXcgRGF0ZShvYmouY3JlYXRpb25EYXRlKTtcclxuXHRcdH1cclxuXHR9XHJcbn0pOyIsImV4cG9ydCBjb25zdCBsYW5ndWFnZXMgPSBuZXcgd2ViaXguRGF0YUNvbGxlY3Rpb24oe1xyXG5cdHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sYW5ndWFnZXMvJyxcclxuXHRzYXZlOiB7XHJcblx0XHR1cmw6ICdyZXN0LT5odHRwOi8vbG9jYWxob3N0OjMwMDAvbGFuZ3VhZ2VzLycsXHJcblx0XHR1cGRhdGVGcm9tUmVzcG9uc2U6IHRydWVcclxuXHR9XHJcbn0pOyIsImV4cG9ydCBjb25zdCB0ZXN0cmVzdWx0cyA9IG5ldyB3ZWJpeC5EYXRhQ29sbGVjdGlvbih7XHJcblx0dXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3Rlc3RyZXN1bHRzLycsXHJcblx0c2F2ZToge1xyXG5cdFx0dXJsOiAncmVzdC0+aHR0cDovL2xvY2FsaG9zdDozMDAwL3Rlc3RyZXN1bHRzLycsXHJcblx0XHR1cGRhdGVGcm9tUmVzcG9uc2U6IHRydWVcclxuXHR9LFxyXG5cdHNjaGVtZToge1xyXG5cdFx0JGluaXQob2JqKSB7XHJcblx0XHRcdG9iai5wYXNzZWREYXRlID0gbmV3IERhdGUob2JqLnBhc3NlZERhdGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7IiwiZXhwb3J0IGNvbnN0IHdvcmRzID0gbmV3IHdlYml4LkRhdGFDb2xsZWN0aW9uKHtcclxuXHR1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvd29yZHMvJyxcclxuXHRzYXZlOiB7XHJcblx0XHR1cmw6ICdyZXN0LT5odHRwOi8vbG9jYWxob3N0OjMwMDAvd29yZHMvJyxcclxuXHRcdHVwZGF0ZUZyb21SZXNwb25zZTogdHJ1ZVxyXG5cdH1cclxufSk7IiwiaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcclxuaW1wb3J0IHtKZXRBcHAsIEVtcHR5Um91dGVyLCBIYXNoUm91dGVyIH0gZnJvbSAnd2ViaXgtamV0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgSmV0QXBwe1xyXG5cdGNvbnN0cnVjdG9yKGNvbmZpZyl7XHJcblx0XHRjb25zdCBkZWZhdWx0cyA9IHtcclxuXHRcdFx0aWQgXHRcdDogQVBQTkFNRSxcclxuXHRcdFx0dmVyc2lvbiA6IFZFUlNJT04sXHJcblx0XHRcdHJvdXRlciBcdDogQlVJTERfQVNfTU9EVUxFID8gRW1wdHlSb3V0ZXIgOiBIYXNoUm91dGVyLFxyXG5cdFx0XHRkZWJ1ZyBcdDogIVBST0RVQ1RJT04sXHJcblx0XHRcdHN0YXJ0IFx0OiAnL2luZGV4J1xyXG5cdFx0fTtcclxuXHJcblx0XHRzdXBlcih7IC4uLmRlZmF1bHRzLCAuLi5jb25maWcgfSk7XHJcblx0fVxyXG59XHJcblxyXG5pZiAoIUJVSUxEX0FTX01PRFVMRSl7XHJcblx0d2ViaXgucmVhZHkoKCkgPT4ge1xyXG5cdFx0Y29uc3QgYXBwID0gbmV3IE15QXBwKCk7XHJcblx0XHRhcHAuYXR0YWNoRXZlbnQoJ2FwcDpndWFyZCcsICh1cmwsIHZpZXcsIG5hdikgPT4ge1xyXG5cdFx0XHRpZih1cmwuaW5kZXhPZignL2hvbWUnKSAhPT0gLTEpIHtcclxuXHRcdFx0XHR3ZWJpeC5hamF4KCkuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvY2hlY2snKS50aGVuKFxyXG5cdFx0XHRcdFx0KHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCByZXNwb25zZSA9IHJlcy5qc29uKCk7XHJcblx0XHRcdFx0XHRcdGlmICghcmVzcG9uc2UuYWxsb3dBY2Nlc3MpIHtcclxuXHRcdFx0XHRcdFx0XHRhcHAuc2hvdygnL2luZGV4Jyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYoZXJyb3Iuc3RhdHVzID09IDQwMSkge1xyXG5cdFx0XHRcdFx0XHRcdGFwcC5zaG93KCcvaW5kZXgnKTtcclxuXHRcdFx0XHRcdFx0fVx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGFwcC5yZW5kZXIoKTtcclxuXHR9KTtcclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciBtYXAgPSB7XG5cdFwiLi9cIjogXCIuL3NvdXJjZXMvdmlld3MvaW5kZXguanNcIixcblx0XCIuL2FkZEdyb3VwXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkZEdyb3VwLmpzXCIsXG5cdFwiLi9hZGRHcm91cC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9hZGRHcm91cC5qc1wiLFxuXHRcIi4vYWRkV29yZFwiOiBcIi4vc291cmNlcy92aWV3cy9hZGRXb3JkLmpzXCIsXG5cdFwiLi9hZGRXb3JkLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkZFdvcmQuanNcIixcblx0XCIuL2NyZWF0ZVRlc3RcIjogXCIuL3NvdXJjZXMvdmlld3MvY3JlYXRlVGVzdC5qc1wiLFxuXHRcIi4vY3JlYXRlVGVzdC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9jcmVhdGVUZXN0LmpzXCIsXG5cdFwiLi9ncm91cFwiOiBcIi4vc291cmNlcy92aWV3cy9ncm91cC5qc1wiLFxuXHRcIi4vZ3JvdXAuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvZ3JvdXAuanNcIixcblx0XCIuL2hvbWVcIjogXCIuL3NvdXJjZXMvdmlld3MvaG9tZS5qc1wiLFxuXHRcIi4vaG9tZS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9ob21lLmpzXCIsXG5cdFwiLi9pbmRleFwiOiBcIi4vc291cmNlcy92aWV3cy9pbmRleC5qc1wiLFxuXHRcIi4vaW5kZXguanNcIjogXCIuL3NvdXJjZXMvdmlld3MvaW5kZXguanNcIixcblx0XCIuL21haW5cIjogXCIuL3NvdXJjZXMvdmlld3MvbWFpbi5qc1wiLFxuXHRcIi4vbWFpbi5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9tYWluLmpzXCIsXG5cdFwiLi9wcm9maWxlXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3Byb2ZpbGUuanNcIixcblx0XCIuL3Byb2ZpbGUuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcHJvZmlsZS5qc1wiLFxuXHRcIi4vcmVnaXN0ZXJcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVnaXN0ZXIuanNcIixcblx0XCIuL3JlZ2lzdGVyLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL3JlZ2lzdGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlcy92aWV3cyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgeyBncm91cHMgfSBmcm9tICdtb2RlbHMvZ3JvdXBzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGFkZEdyb3VwRm9ybSBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2aWV3OiAnd2luZG93JyxcclxuXHRcdFx0bG9jYWxJZDogJ2Zvcm1Qb3B1cCcsXHJcblx0XHRcdHBvc2l0aW9uOidjZW50ZXInLFxyXG5cdFx0XHRoZWFkOiAnR3JvdXAgbmFtZScsXHJcblx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdFx0bG9jYWxJZDogJ2Zvcm1WaWV3JyxcclxuXHRcdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIG5hbWU6ICdncm91cE5hbWUnLCBsYWJlbDogJyd9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDIwLFxyXG5cdFx0XHRcdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIHR5cGU6ICdmb3JtJywgdmFsdWU6ICdTYXZlJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2F2ZUdyb3VwKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuaGlkZVdpbmRvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIHZhbHVlOiAnQ2FuY2VsJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2V0Um9vdCgpLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdHJ1bGVzOiB7XHJcblx0XHRcdFx0XHQnZ3JvdXBOYW1lJzogd2ViaXgucnVsZXMuaXNOb3RFbXB0eVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblx0XHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMubWFpbldpbmRvdyA9IHRoaXMuJCQoJ2Zvcm1Qb3B1cCcpO1xyXG5cdH1cclxuXHJcblx0c2hvd1dpbmRvdygpIHtcclxuXHRcdHRoaXMubWFpbldpbmRvdy5zaG93KCk7XHJcblx0fVxyXG5cclxuXHRoaWRlV2luZG93KCkge1xyXG5cdFx0dGhpcy5tYWluV2luZG93LmhpZGUoKTtcclxuXHR9XHJcblxyXG5cdHNhdmVHcm91cCgpIHtcclxuXHRcdGNvbnN0IGZvcm0gPSB0aGlzLiQkKCdmb3JtVmlldycpO1xyXG5cdFx0Y29uc3QgdmFsdWVzID0gZm9ybS5nZXRWYWx1ZXMoKTtcclxuXHRcdHZhbHVlcy5jcmVhdGlvbkRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHJcblx0XHRncm91cHMuYWRkKHZhbHVlcyk7XHJcblx0XHR0aGlzLmNsZWFyRm9ybShmb3JtKTtcclxuXHR9XHJcblxyXG5cdGNsZWFyRm9ybShmb3JtKSB7XHJcblx0XHRmb3JtLmNsZWFyVmFsaWRhdGlvbigpO1xyXG5cdFx0Zm9ybS5jbGVhcigpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgeyBsYW5ndWFnZXMgfSBmcm9tICdtb2RlbHMvbGFuZ3VhZ2VzJztcclxuaW1wb3J0IHsgd29yZHMgfSBmcm9tICdtb2RlbHMvd29yZHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYWRkV29yZEZvcm0gZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHJcblx0bWFpblJvdyhjb3VudCwgbGFuZ3MpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG1hcmdpbjogMjAsXHJcblx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHR7IHZpZXc6ICdjb21ibycsIGxhYmVsOiAnTGFuZ3VhZ2UnLCBsYWJlbFdpZHRoOiA3MiwgbGFiZWxBbGlnbjogJ3JpZ2h0Jywgd2lkdGg6IDE4MCwgbmFtZTogYGxhbmd1YWdlJHtjb3VudH1gLCBvcHRpb25zOiB7IGJvZHk6IHsgdGVtcGxhdGU6ICcjdmFsdWUjJywgZGF0YTogbGFuZ3MgfSB9IH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVHJhbnNsYXRpb24nLCBsYWJlbFdpZHRoOiA4MiwgbGFiZWxBbGlnbjogJ3JpZ2h0JywgbmFtZTogYHRyYW5zbGF0aW9uJHtjb3VudH1gIH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRpZDogJ2FkZFRyYW5zbGF0aW9uJyxcclxuXHRcdFx0XHRcdHZhbHVlOiAnQWRkIHRyYW5zbGF0aW9uJyxcclxuXHRcdFx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0XHRcdHdpZHRoOiAxNDAsXHJcblx0XHRcdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFkZFRyYW5zbGF0aW9uKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0Y29uZmlnKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmlldzogJ3dpbmRvdycsXHJcblx0XHRcdGxvY2FsSWQ6ICdhZGRXb3JkRm9ybScsXHJcblx0XHRcdGhlYWQ6ICdBZGQgd29yZCcsXHJcblx0XHRcdHdpZHRoOiA2MDAsXHJcblx0XHRcdHBvc2l0aW9uOiAnY2VudGVyJyxcclxuXHRcdFx0Ym9keToge1xyXG5cdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmlldzogJ2Zvcm0nLFxyXG5cdFx0XHRcdFx0XHRsb2NhbElkOiAnd29yZEZvcm0nLFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBuYW1lOiAnaWQnLCBsb2NhbElkOiAnaWQnLCBoaWRkZW46IHRydWUgfSxcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbmFtZTogJ2dyb3VwSWQnLCBsb2NhbElkOiAnZ3JvdXBJZCcsIGhpZGRlbjogdHJ1ZSB9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHZpZXc6ICdsYWJlbCcsXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ09yaWdpbmFsIHdvcmQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyNFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0bWFyZ2luOiAyMCxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0eyB2aWV3OiAnY29tYm8nLCBsYWJlbDogJ0xhbmd1YWdlJywgbGFiZWxXaWR0aDogNzIsIGxhYmVsQWxpZ246ICdyaWdodCcsIHdpZHRoOiAxODAsIG5hbWU6ICdsYW5ndWFnZUlkJywgb3B0aW9uczogeyBib2R5OiB7IHRlbXBsYXRlOiAnI3ZhbHVlIycsIGRhdGE6IGxhbmd1YWdlcyB9IH0gfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnV29yZCcsIGxhYmVsV2lkdGg6IDgyLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiAnd29yZCcsIGxvY2FsSWQ6ICdvcmlnaW5hbFdvcmQnIH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdHsgdmlldzogJ2NvbWJvJywgbGFiZWw6ICdQT1MnLCBsYWJlbFdpZHRoOiA0MCwgbGFiZWxBbGlnbjogJ3JpZ2h0Jywgd2lkdGg6IDE0MCwgbmFtZTogJ3BhcnRPZlNwZWVjaCcsIG9wdGlvbnM6IFsnTm91bicsICdQcm9ub3VuJywgJ1ZlcmInLCAnQWR2ZXJiJ10gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdFx0cnVsZXM6IHtcclxuXHRcdFx0XHRcdFx0XHQnbGFuZ3VhZ2VJZCc6IHdlYml4LnJ1bGVzLmlzTm90RW1wdHksXHJcblx0XHRcdFx0XHRcdFx0J3dvcmQnOiB3ZWJpeC5ydWxlcy5pc05vdEVtcHR5LFxyXG5cdFx0XHRcdFx0XHRcdCdwYXJ0T2ZTcGVlY2gnOiB3ZWJpeC5ydWxlcy5pc05vdEVtcHR5LFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdFx0XHRcdGxvY2FsSWQ6ICd0cmFuc2xhdGlvbnNGb3JtJyxcclxuXHRcdFx0XHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbmFtZTogJ3dvcmRJZCcsIGxvY2FsSWQ6ICd3b3JkSWQnLCBoaWRkZW46IHRydWUgfSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnbGFiZWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw6ICdUcmFuc2xhdGlvbnMnLFxyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyNFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5tYWluUm93KDEsIGxhbmd1YWdlcylcclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAyMCxcclxuXHRcdFx0XHRcdFx0cGFkZGluZ1k6IDEwLFxyXG5cdFx0XHRcdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIHZhbHVlOiAnU2F2ZScsIHR5cGU6ICdmb3JtJywgbG9jYWxJZDogJ3NhdmVCdG4nLCB3aWR0aDogMTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zYXZlRm9ybSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIHZhbHVlOiAnQ2FuY2VsJywgd2lkdGg6IDEwMCxcclxuXHRcdFx0XHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuZ2V0Um9vdCgpLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdHt9XHJcblx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy50cmFuc2xhdGlvbnNGb3JtID0gdGhpcy4kJCgndHJhbnNsYXRpb25zRm9ybScpO1xyXG5cdFx0dGhpcy53b3JkRm9ybSA9IHRoaXMuJCQoJ3dvcmRGb3JtJyk7XHJcblx0XHR0aGlzLmFkZFdvcmRGb3JtID0gdGhpcy4kJCgnYWRkV29yZEZvcm0nKTtcclxuXHRcdHRoaXMuYnRuQWRkVHJhbnNsYXRpb24gPSAkJCgnYWRkVHJhbnNsYXRpb24nKTtcclxuXHJcblx0XHRjb25zdCBhbGxDb21ibyA9IHRoaXMuZmluZEFsbENvbWJvKCk7XHJcblx0XHRhbGxDb21iby5mb3JFYWNoKChjb21ibywgaSkgPT4ge1xyXG5cdFx0XHR0aGlzLm9uQ29tYm9DaGFuZ2UoY29tYm8sIGkpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmaW5kQWxsQ29tYm8oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy4kJCgnYWRkV29yZEZvcm0nKS5xdWVyeVZpZXcoeyB2aWV3OiAnY29tYm8nLCBsYWJlbDogJ0xhbmd1YWdlJyB9LCAnYWxsJyk7XHJcblx0fVxyXG5cclxuXHRvbkNvbWJvQ2hhbmdlKGNvbWJvLCBpKSB7XHRcclxuXHRcdGNvbWJvLmF0dGFjaEV2ZW50KCdvbkNoYW5nZScsIChuZXd2LCBvbGR2KSA9PiB7XHJcblxyXG5cdFx0XHQvL2dldCBhbGwgY29tYm8gaW4gZm9ybVxyXG5cdFx0XHQvL25lZWQgIHRvIGZpbmQgYWxsIGNvbWJvIGFnYWluLCBpbiBjYXNlIGlmIG5ldyB3YXMgYWRkZVxyXG5cdFx0XHRjb25zdCBhbGxDb21ibyA9IHRoaXMuZmluZEFsbENvbWJvKCk7XHJcblx0XHRcdGNvbnN0IGNvbWJvc0FyciA9IGFsbENvbWJvLnNsaWNlKCk7XHJcblx0XHRcdGNvbnN0IGFsbExhbmdzID0gey4uLmxhbmd1YWdlcy5kYXRhLnB1bGx9O1xyXG5cdFx0XHQvL3JlbW92ZSBmcm9tIGFycmF5IGNvbWJvIHdoZXJlIGNhdWdodCBldmVudFxyXG5cdFx0XHRjb21ib3NBcnIuc3BsaWNlKGksIDEpO1xyXG5cclxuXHRcdFx0Ly9mb3IgZWFjaCBjb21ibyByZW1vdmUgZnJvbSBvcHRpb25zIGxpc3Qgc2VsZWN0ZWQgdmFsdWVcclxuXHRcdFx0XHJcblx0XHRcdGNvbWJvc0Fyci5mb3JFYWNoKCBlbCA9PiB0aGlzLnNldE9wdGlvbnMoZWwsIGFsbExhbmdzLCBuZXd2LCBvbGR2KSk7XHRcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlU2VsZWN0ZWRMYW5ncygpIHtcclxuXHRcdGNvbnN0IGFsbExhbmdzID0gey4uLmxhbmd1YWdlcy5kYXRhLnB1bGx9O1xyXG5cdFx0Y29uc3QgYWxsQ29tYm8gPSB0aGlzLmZpbmRBbGxDb21ibygpO1xyXG5cclxuXHRcdGFsbENvbWJvLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBpdGVtLmdldFZhbHVlKCk7XHJcblx0XHRcdGRlbGV0ZSBhbGxMYW5nc1t2YWx1ZV07XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0Y29uc3QgbmV3TGFuZ0FyciA9IE9iamVjdC5rZXlzKGFsbExhbmdzKS5tYXAoKGspID0+IGFsbExhbmdzW2tdKTtcclxuXHRcdHJldHVybiBuZXdMYW5nQXJyO1xyXG5cdH1cclxuXHJcblx0c2hvd1dpbmRvdyhpZCkge1xyXG5cdFx0dGhpcy4kJCgnZ3JvdXBJZCcpLnNldFZhbHVlKGlkKTtcclxuXHRcdHRoaXMuZ2V0Um9vdCgpLnNob3coKTtcclxuXHRcdGNvbnN0IHdvcmRJZCA9IHdlYml4LnVpZCgpO1xyXG5cdFx0dGhpcy4kJCgnd29yZElkJykuc2V0VmFsdWUod29yZElkKTtcclxuXHRcdHRoaXMuJCQoJ2lkJykuc2V0VmFsdWUod29yZElkKTtcclxuXHR9XHJcblxyXG5cdGFkZFRyYW5zbGF0aW9uKCkge1xyXG5cdFx0Y29uc3Qgcm93cyA9IHRoaXMudHJhbnNsYXRpb25zRm9ybS5nZXRDaGlsZFZpZXdzKCk7XHJcblx0XHRjb25zdCByb3dzQ291bnQgPSByb3dzLmxlbmd0aDtcclxuXHRcdGNvbnN0IHRhcmdldCA9IHJvd3Nbcm93c0NvdW50IC0gMV07XHJcblxyXG5cdFx0d2ViaXgudWkoeyB3aWR0aDogMTQwIH0sIHRhcmdldCwgdGhpcy5idG5BZGRUcmFuc2xhdGlvbik7XHJcblxyXG5cdFx0Y29uc3QgaW5kZXggPSB0aGlzLnRyYW5zbGF0aW9uc0Zvcm0uZ2V0Q2hpbGRWaWV3cygpLmxlbmd0aCAtIDE7XHJcblx0XHRjb25zdCBsYW5ncyA9IHRoaXMucmVtb3ZlU2VsZWN0ZWRMYW5ncygpO1xyXG5cdFx0dGhpcy50cmFuc2xhdGlvbnNGb3JtLmFkZFZpZXcodGhpcy5tYWluUm93KGluZGV4LCBsYW5ncykpO1xyXG5cclxuXHRcdGNvbnN0IGFsbENvbWJvID0gdGhpcy5maW5kQWxsQ29tYm8oKTtcclxuXHRcdHRoaXMub25Db21ib0NoYW5nZShhbGxDb21ib1tpbmRleF0sIGluZGV4KTtcclxuXHR9XHJcblxyXG5cdHNhdmVGb3JtKCkge1xyXG5cdFx0bGV0IHdvcmQgPSB0aGlzLndvcmRGb3JtLmdldFZhbHVlcygpO1xyXG5cclxuXHRcdGNvbnN0IGNvdW50ID0gdGhpcy50cmFuc2xhdGlvbnNGb3JtLmdldENoaWxkVmlld3MoKS5sZW5ndGggLSAxO1xyXG5cdFx0Y29uc3QgdHJhbnNsYXRpb25WYWx1ZXMgPSB0aGlzLnRyYW5zbGF0aW9uc0Zvcm0uZ2V0VmFsdWVzKCk7XHJcblxyXG5cdFx0bGV0IHRyYW5zbGF0aW9ucyA9IFtdO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgY291bnQ7IGkrKykge1xyXG5cdFx0XHRsZXQgdHIgPSB7XHJcblx0XHRcdFx0d29yZDogdHJhbnNsYXRpb25WYWx1ZXNbYHRyYW5zbGF0aW9uJHtpfWBdLFxyXG5cdFx0XHRcdGxhbmd1YWdlSWQ6IHRyYW5zbGF0aW9uVmFsdWVzW2BsYW5ndWFnZSR7aX1gXVxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0cmFuc2xhdGlvbnMucHVzaCh0cik7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgYmF0Y2ggPSB7XHJcblx0XHRcdHdvcmQsXHJcblx0XHRcdHRyYW5zbGF0aW9uc1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZih0aGlzLndvcmRGb3JtLnZhbGlkYXRlKCkpIHtcclxuXHRcdFx0d29yZHMuYWRkKGJhdGNoKTtcclxuXHRcdFx0dGhpcy5oaWRlV2luZG93KCk7XHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoaWRlV2luZG93KCkge1xyXG5cdFx0dGhpcy53b3JkRm9ybS5jbGVhclZhbGlkYXRpb24oKTtcclxuXHRcdHRoaXMudHJhbnNsYXRpb25zRm9ybS5jbGVhclZhbGlkYXRpb24oKTtcclxuXHRcdHRoaXMud29yZEZvcm0uY2xlYXIoKTtcclxuXHRcdHRoaXMudHJhbnNsYXRpb25zRm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy5hZGRXb3JkRm9ybS5oaWRlKCk7XHJcblx0fVxyXG5cclxuXHRzZXRPcHRpb25zKGVsLCBhbGxMYW5ncywgbmV3diwgb2xkdikge1xyXG5cdFx0Ly8gbW92ZSB0byBmdW5jdGlvblxyXG5cdFx0Y29uc3QgbGFuZ3MgPSBlbC5nZXRMaXN0KCkuc2VyaWFsaXplKCk7XHJcblxyXG5cdFx0Ly9yZXR1cm4gdG8gb3B0aW9ucyBsaXN0IHZhbHVlLCBpZiBpdCB3YXMgdW5zZWxlY3RlZFxyXG5cdFx0aWYob2xkdikge1xyXG5cdFx0XHRjb25zdCBvbGRWYWwgPSBhbGxMYW5nc1tvbGR2XTtcclxuXHRcdFx0bGFuZ3MucHVzaChvbGRWYWwpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGluZGV4ID0gbGFuZ3MuaW5kZXhPZihsYW5ncy5maW5kKChpdGVtKSA9PiB7cmV0dXJuIGl0ZW0uaWQgPT09IG5ld3Z9KSk7XHJcblx0XHRsYW5ncy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuXHRcdC8vc2V0IGZpbHRlcmVkIGxpc3Qgb2YgbGFuZ3VhZ2VzXHJcblx0XHRlbC5kZWZpbmUoJ29wdGlvbnMnLCBsYW5ncyk7XHJcblx0XHRlbC5yZWZyZXNoKCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCB7IHdvcmRzIH0gZnJvbSAnbW9kZWxzL3dvcmRzJztcclxuaW1wb3J0IHsgdGVzdHJlc3VsdHMgfSBmcm9tICdtb2RlbHMvdGVzdHJlc3VsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY3JlYXRlVGVzdEZvcm0gZXh0ZW5kcyBKZXRWaWV3IHtcclxuXHRjb25maWcoKSB7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0dmlldzogJ3dpbmRvdycsXHJcblx0XHRcdGxvY2FsSWQ6ICdmb3JtUG9wdXAnLFxyXG5cdFx0XHRwb3NpdGlvbjonY2VudGVyJyxcclxuXHRcdFx0aGVhZDogJ0Nob29zZSB0aGUgbGFuZ3VhZ2UnLFxyXG5cdFx0XHRib2R5OiB7XHJcblx0XHRcdFx0dmlldzogJ2Zvcm0nLFxyXG5cdFx0XHRcdGxvY2FsSWQ6ICdjaG9vc2VMYW5nRm9ybScsXHJcblx0XHRcdFx0bWFyZ2luOiAxMCxcclxuXHRcdFx0XHRwYWRkaW5nWTogMjAsXHJcblx0XHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bG9jYWxJZDogJ2Nob29zZUxhbmcnLFxyXG5cdFx0XHRcdFx0XHR2aWV3OiAnY29tYm8nLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAnbGFuZ3VhZ2UnXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0dmFsdWU6ICdDaG9vc2UnLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdFx0XHRcdGNsaWNrOiAoaWQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCB2YWx1ZXMgPSAkJChpZCkuZ2V0UGFyZW50VmlldygpLmdldFZhbHVlcygpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY3JlYXRlVGVzdCh2YWx1ZXMubGFuZ3VhZ2UpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuZm9ybVBvcHVwID0gdGhpcy4kJCgnZm9ybVBvcHVwJyk7XHJcblx0XHR0aGlzLmdyb3VwSWQgPSB0aGlzLl9kYXRhLmlkO1xyXG5cdH1cclxuXHJcblx0c2hvd1dpbmRvdyhsYW5ndWFnZXMpIHtcclxuXHRcdHRoaXMuJCQoJ2Nob29zZUxhbmcnKS5kZWZpbmUoJ29wdGlvbnMnLCBsYW5ndWFnZXMpO1xyXG5cdFx0dGhpcy5nZXRSb290KCkuc2hvdygpO1x0XHRcclxuXHR9XHJcblxyXG5cdHNodWZmbGUoYXJyYXkpIHtcclxuXHRcdGNvbnN0IHNodWZmbGVkQXJyID0gW107XHJcblx0XHRsZXQgbnVtID0gYXJyYXkubGVuZ3RoO1xyXG5cclxuXHRcdC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxl4oCmXHJcblx0XHR3aGlsZSAobnVtKSB7XHJcblxyXG5cdFx0XHQvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnTigKZcclxuXHRcdFx0Y29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFycmF5Lmxlbmd0aCk7XHJcblxyXG5cdFx0XHQvLyBJZiBub3QgYWxyZWFkeSBzaHVmZmxlZCwgbW92ZSBpdCB0byB0aGUgbmV3IGFycmF5LlxyXG5cdFx0XHRpZiAoaSBpbiBhcnJheSkge1xyXG5cdFx0XHRcdHNodWZmbGVkQXJyLnB1c2goYXJyYXlbaV0pO1xyXG5cdFx0XHRcdGRlbGV0ZSBhcnJheVtpXTtcclxuXHRcdFx0XHRudW0tLTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzaHVmZmxlZEFycjtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVRlc3QobGFuZ3VhZ2UpIHtcclxuXHRcdHRoaXMuc2NvcmUgPSAwO1xyXG5cdFx0Y29uc3QgZ3JvdXBJZCA9IHRoaXMuZ3JvdXBJZDtcclxuXHJcblx0XHR3b3Jkcy53YWl0RGF0YS50aGVuKCgpID0+IHtcclxuXHRcdFx0Ly9maW5kIHdvcmRzIG9mIHRoaXMgZ3JvdXBcclxuXHRcdFx0bGV0IHdvcmRzTGlzdCA9IHdvcmRzLmZpbmQoaXRlbSA9PiBpdGVtLmdyb3VwSWQgPT09IGdyb3VwSWQpO1xyXG5cclxuXHRcdFx0Ly8gZmluZCB3b3Jkcywgd2hpY2ggaGF2ZSB0cmFuc2xhdGlvbnMgb24gc2VsZWN0ZWQgbGFuZ3VhZ2VcclxuXHRcdFx0XHJcblx0XHRcdHdvcmRzTGlzdCA9IHdvcmRzTGlzdC5maWx0ZXIoKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRjb25zdCB3b3JkSXRlbSA9IGl0ZW0udHJhbnNsYXRpb25zLmZpbmQoKHRyKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHIubGFuZ3VhZ2VJZCA9PT0gbGFuZ3VhZ2U7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKHdvcmRJdGVtKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdGNvbnN0IHdvcmRzQXJyID0gd29yZHMuc2VyaWFsaXplKCk7IC8vIGNyZWF0ZSBhbiBhcnJheSBvZiBhbGwgd29yZHNcclxuXHRcdFx0bGV0IHRyYW5zbGF0aW9uc0FyciA9IFtdO1xyXG5cclxuXHRcdFx0Ly8gZmluZCBhbGwgdHJhbnNsYXRpb25zIG9uIHNlbGVjdGVkIGxhbmd1YWdlXHJcblx0XHRcdHdvcmRzQXJyLmZvckVhY2goKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRjb25zdCB0cmFuc2xhdGlvbiA9IGl0ZW0udHJhbnNsYXRpb25zLmZpbmQoKHRyKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHIubGFuZ3VhZ2VJZCA9PT0gbGFuZ3VhZ2U7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKHRyYW5zbGF0aW9uKSB7XHJcblx0XHRcdFx0XHQvLyBpZiBvcmlnaW5hbCBvZiB0aGlzIHRyYW5zbGF0aW9uIGlzIG9mIHRoZSBzYW1lIHBhcnQgb2Ygc3BlZWNoIGFzIHRoZSB3b3JkXHJcblx0XHRcdFx0XHQvLyBwdXNoIGl0IHRvIGFycmF5IG9mIHRyYW5zbGF0aW9uc1xyXG5cdFx0XHRcdFx0dHJhbnNsYXRpb25zQXJyLnB1c2godHJhbnNsYXRpb24pO1xyXG5cdFx0XHRcdFx0dHJhbnNsYXRpb24ucGFydE9mU3BlZWNoID0gaXRlbS5wYXJ0T2ZTcGVlY2g7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHdvcmRzTGlzdCA9IHRoaXMuc2h1ZmZsZSh3b3Jkc0xpc3QpOyAvL21peCB0aGUgd29yZHMgYXJyYXlcclxuXHJcblx0XHRcdC8vIGlmIGluIGFycmF5IG1vcmUgdGhlbiAxMCB3b3JkcywgY3V0IGl0XHJcblx0XHRcdGlmICh3b3Jkc0xpc3QubGVuZ3RoID4gMTApIHtcclxuXHRcdFx0XHR3b3Jkc0xpc3Quc3BsaWNlKHdvcmRzTGlzdFsxMF0sIHdvcmRzTGlzdC5sZW5ndGggLSAxMCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMud29yZHNMaXN0ID0gd29yZHNMaXN0O1xyXG5cdFx0XHR0aGlzLnRyYW5zbGF0aW9uc0FyciA9IHRyYW5zbGF0aW9uc0FycjtcclxuXHJcblx0XHRcdHRoaXMuc2hvd1F1ZXN0aW9uKDAsIHdvcmRzTGlzdCwgdHJhbnNsYXRpb25zQXJyKTsgXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNob3dRdWVzdGlvbihuLCB3b3Jkc0xpc3QsIHRyYW5zbGF0aW9uc0Fycikge1xyXG5cdFx0aWYobiA8IHdvcmRzTGlzdC5sZW5ndGgpIHtcclxuXHRcdFx0Y29uc3Qgd29yZE9iaiA9IHdvcmRzTGlzdFtuXTtcclxuXHRcdFx0Y29uc3QgcmlnaHRBbnN3ZXIgPSB0cmFuc2xhdGlvbnNBcnIuZmluZCh0ciA9PiB0ci53b3JkSWQgPT09IHdvcmRPYmouaWQpO1xyXG5cdFx0XHRsZXQgdHJhbnNsYXRpb25zID0gdHJhbnNsYXRpb25zQXJyLmZpbHRlcigodHIpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gdHIucGFydE9mU3BlZWNoID09PSB3b3JkT2JqLnBhcnRPZlNwZWVjaCAmJiB0ci53b3JkSWQgIT0gd29yZE9iai5pZDtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvLyBpZiBpbiBhcnJheSBtb3JlIHRoZW4gMyB3b3JkcywgY3V0IGl0XHJcblx0XHRcdGlmICh0cmFuc2xhdGlvbnMubGVuZ3RoID4gMykge1xyXG5cdFx0XHRcdHRyYW5zbGF0aW9ucy5zcGxpY2UodHJhbnNsYXRpb25zWzNdLCB0cmFuc2xhdGlvbnMubGVuZ3RoIC0gMyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRyYW5zbGF0aW9ucy5wdXNoKHJpZ2h0QW5zd2VyKTsgLy8gYWRkIHRvIHRyYW5zbGF0aW9ucyBhcnJheSBjb3JyZWN0IGFuc3dlclxyXG5cdFx0XHR0cmFuc2xhdGlvbnMgPSB0aGlzLnNodWZmbGUodHJhbnNsYXRpb25zKTsgLy9taXggdGhlIHRyYW5zbGF0aW9ucyBhcnJheVxyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3QgaWQgPSAoIG4gPiAwKSA/ICAndHJhbnNsYXRpb25zQnV0dG9ucycgOiAnY2hvb3NlTGFuZ0Zvcm0nO1xyXG5cclxuXHRcdFx0dGhpcy5jaGFuZ2VCdXR0b25zKG4sIGlkLCB0cmFuc2xhdGlvbnMpO1xyXG5cdFx0XHR0aGlzLmZvcm1Qb3B1cC5nZXRIZWFkKCkuc2V0SFRNTCh3b3JkT2JqLndvcmQpO1xyXG5cdFx0XHR0aGlzLiQkKCdjdXJyZW50V29yZElkJykuc2V0VmFsdWUod29yZE9iai5pZCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy5zYXZlUmVzdWx0cygpO1xyXG5cdFx0XHR0aGlzLnNob3dSZXN1bHRzKCk7XHJcblx0XHRcdHRoaXMuZm9ybVBvcHVwLmdldEhlYWQoKS5zZXRIVE1MKCdZb3VyIHJlc3VsdCcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c2V0VHJhbnNsYXRpb25zKHRyYW5zbGF0aW9ucywgbikge1xyXG5cdFx0Y29uc3QgYnV0dG9ucyA9IFtdO1xyXG5cdFx0dHJhbnNsYXRpb25zLmZvckVhY2goKHRyKSA9PiB7XHJcblx0XHRcdGJ1dHRvbnMucHVzaCh7XHJcblx0XHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdFx0dmFsdWU6IHRyLndvcmQsXHJcblx0XHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRcdGF1dG93aWR0aDogdHJ1ZSxcclxuXHRcdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5hbnN3ZXJBY3Rpb24odHIsIG4pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBidXR0b25zO1xyXG5cdH1cclxuXHJcblx0YW5zd2VyQWN0aW9uKHRyYW5zbGF0aW9uLCBuKSB7XHJcblx0XHRjb25zdCB3b3JkSWQgPSB0aGlzLiQkKCdjdXJyZW50V29yZElkJykuZ2V0VmFsdWUoKTtcclxuXHRcdGlmKHRyYW5zbGF0aW9uLndvcmRJZCA9PT0gd29yZElkKSB7XHJcblx0XHRcdGlmKHRyYW5zbGF0aW9uLnBhcnRPZlNwZWVjaCA9PT0gJ05vdW4nIHx8IHRyYW5zbGF0aW9uLnBhcnRPZlNwZWVjaCA9PT0gJ1ZlcmInKSAge1xyXG5cdFx0XHRcdHRoaXMuc2NvcmUgKz0gMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnNjb3JlICs9IDE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMuc2hvd1F1ZXN0aW9uKCsrbiwgdGhpcy53b3Jkc0xpc3QsIHRoaXMudHJhbnNsYXRpb25zQXJyKTtcclxuXHR9XHJcblxyXG5cdGNoYW5nZUJ1dHRvbnMobiwgaWQsIHRyYW5zbGF0aW9ucykge1xyXG5cdFx0d2ViaXgudWkoXHJcblx0XHRcdHtcclxuXHRcdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdFx0bG9jYWxJZDogJ3RyYW5zbGF0aW9uc0J1dHRvbnMnLFxyXG5cdFx0XHRcdGJvcmRlcmxlc3M6IHRydWUsXHJcblx0XHRcdFx0dHlwZTogJ2NsZWFuJyxcclxuXHRcdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2aWV3OiAndGV4dCcsXHJcblx0XHRcdFx0XHRcdGxvY2FsSWQ6ICdjdXJyZW50V29yZElkJyxcclxuXHRcdFx0XHRcdFx0aGlkZGVuOiB0cnVlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1x0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDEwLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxMCxcclxuXHRcdFx0XHRcdFx0Y29sczogdGhpcy5zZXRUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zLCBuKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fSxcclxuXHRcdFx0dGhpcy5mb3JtUG9wdXAsXHJcblx0XHRcdHRoaXMuJCQoaWQpXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0c2hvd1Jlc3VsdHMoKSB7XHJcblx0XHR3ZWJpeC51aShcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhZGRpbmc6IDMwLFxyXG5cdFx0XHRcdG1hcmdpbjogMTUsXHJcblx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0ZW1wbGF0ZTogdGhpcy5zY29yZSxcclxuXHRcdFx0XHRcdFx0Ym9yZGVybGVzczogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0Y3NzOiAnY2VudGVyJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdFx0XHRcdHZhbHVlOiAnT2snLFxyXG5cdFx0XHRcdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5mb3JtUG9wdXAuaGlkZSgpO1x0XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5fcGFyZW50LnJlZnJlc2goKTtcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHRoaXMuZm9ybVBvcHVwLFxyXG5cdFx0XHR0aGlzLiQkKCd0cmFuc2xhdGlvbnNCdXR0b25zJylcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRzYXZlUmVzdWx0cygpIHtcclxuXHRcdGNvbnN0IHJlc3VsdCA9IHtcclxuXHRcdFx0cGFzc2VkRGF0ZTogbmV3IERhdGUoKSxcclxuXHRcdFx0Z3JvdXBJZDogdGhpcy5ncm91cElkLFxyXG5cdFx0XHRzY29yZTogdGhpcy5zY29yZVxyXG5cdFx0fTtcclxuXHRcdHRlc3RyZXN1bHRzLmFkZChyZXN1bHQpO1xyXG5cdH1cclxufVxyXG4gIiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJ21vZGVscy9sYW5ndWFnZXMnO1xyXG5pbXBvcnQgeyB3b3JkcyB9IGZyb20gJ21vZGVscy93b3Jkcyc7XHJcbmltcG9ydCBjcmVhdGVUZXN0Rm9ybSBmcm9tICcuL2NyZWF0ZVRlc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXBWaWV3IGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKSB7XHJcblx0XHJcblx0XHRjb25zdCBkdGFibGUgPSB7XHJcblx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRzZWxlY3Q6IHRydWUsXHJcblx0XHRcdGxvY2FsSWQ6ICd3b3Jkc0xpc3QnLFxyXG5cdFx0XHRjb2x1bW5zOltcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3dvcmQnLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnV29yZCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncGFydE9mU3BlZWNoJyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1BPUydcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncmVtb3ZlQ29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JlbW92ZScsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICd7Y29tbW9uLnRyYXNoSWNvbigpfSdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHQnd3hpLXRyYXNoJzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR3ZWJpeC5jb25maXJtKHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ1JlbW92ZSB3b3JkPycsXHJcblx0XHRcdFx0XHRcdGNhbGxiYWNrOiAocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0d29yZHMucmVtb3ZlKGlkKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuJCQoJ3dvcmRzTGlzdCcpLnJlbW92ZShpZCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGV4cG9ydEJ0biA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHZhbHVlOiAnRXhwb3J0IHdvcmRzJyxcclxuXHRcdFx0d2lkdGg6IDE1MCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHsgXHJcblx0XHRcdFx0d2ViaXgudG9FeGNlbCh0aGlzLiQkKCd3b3Jkc0xpc3QnKSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdGVzdEJ0biA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0dmFsdWU6ICdUZXN0JyxcclxuXHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHsgXHJcblx0XHRcdFx0dGhpcy5jcmVhdGVUZXN0KCk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHsgXHJcblx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRkdGFibGUsIFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbHM6IFt0ZXN0QnRuLCB7fSwgZXhwb3J0QnRuXVxyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCAoKSB7XHJcblx0XHR0aGlzLnRlc3RQb3B1cCA9IHRoaXMudWkoY3JlYXRlVGVzdEZvcm0pO1xyXG5cclxuXHRcdHdlYml4LnByb21pc2UuYWxsKFsgd29yZHMsIGxhbmd1YWdlcyBdKS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0Y29uc3QgaWQgPSB0aGlzLmdldFBhcmFtKCdpZCcsIHRydWUpO1xyXG5cdFx0XHRjb25zdCBncmlkID0gdGhpcy4kJCgnd29yZHNMaXN0Jyk7XHJcblxyXG5cdFx0XHRsZXQgd29yZHNMaXN0ID0gd29yZHMuZmluZCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBpdGVtLmdyb3VwSWQgPT0gaWQ7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Y29uc3QgdHJBcnIgPSBbXTtcclxuXHRcdFx0Y29uc3QgbGFuZ3NMaXN0ID0gW107XHJcblxyXG5cdFx0XHR3b3Jkc0xpc3QgPSB3b3Jkc0xpc3QubWFwKCh3b3JkKSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgdHJhbnNsYXRpb25zID0gd29yZC50cmFuc2xhdGlvbnM7XHJcblx0XHRcdFx0dHJhbnNsYXRpb25zLmZvckVhY2goKHRyKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0Ly9maW5kIGxhbmd1YWdlIHZhbHVlXHJcblx0XHRcdFx0XHRjb25zdCBsYW5nID0gbGFuZ3VhZ2VzLmdldEl0ZW0odHIubGFuZ3VhZ2VJZCk7XHJcblx0XHRcdFx0XHRjb25zdCBsYW5nVmFsID0gbGFuZy52YWx1ZTtcclxuXHJcblx0XHRcdFx0XHQvL2lmIGxhbmd1YWdlIGlzIHVuaXF1ZSBmb3IgdGhpcyBncm91cCwgcHVzaCB0byBhcnJcclxuXHRcdFx0XHRcdGlmKHRyQXJyLmluZGV4T2YobGFuZ1ZhbCkgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0dHJBcnIucHVzaChsYW5nVmFsKTtcclxuXHRcdFx0XHRcdFx0bGFuZ3NMaXN0LnB1c2gobGFuZyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vc2V0IG5ldyBwcm9wZXJ0eSB0byB3b3JkXHJcblx0XHRcdFx0XHR3b3JkW2xhbmdWYWxdID0gdHIud29yZDtcclxuXHRcdFx0XHRcdHJldHVybiB0cjtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gd29yZDtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLmxhbmdzTGlzdCA9IGxhbmdzTGlzdDtcclxuXHJcblx0XHRcdHRoaXMuYWRkQ29sdW1zKHRyQXJyLCBncmlkKTtcclxuXHJcblx0XHRcdGdyaWQucGFyc2Uod29yZHNMaXN0KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0YWRkQ29sdW1zKGFyciwgZ3JpZCkge1xyXG5cdFx0Y29uc3QgY29sdW1ucyA9IHdlYml4LnRvQXJyYXkoZ3JpZC5jb25maWcuY29sdW1ucyk7XHJcblx0XHRhcnIuZm9yRWFjaCgobGFuZywgaSkgPT4ge1xyXG5cdFx0XHRjb2x1bW5zLmluc2VydEF0KHtcclxuXHRcdFx0XHRpZDogYXJyW2ldLFxyXG5cdFx0XHRcdGhlYWRlcjogYXJyW2ldLFxyXG5cdFx0XHRcdGZpbGxzcGFjZTogMVxyXG5cdFx0XHR9LCBpKzEpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdGdyaWQucmVmcmVzaENvbHVtbnMoKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVRlc3QoKSB7XHJcblx0XHR0aGlzLnRlc3RQb3B1cC5zaG93V2luZG93KHRoaXMubGFuZ3NMaXN0KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXcsIHBsdWdpbnN9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uL2F1dGhvcml6YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblx0XHRjb25zdCBoZWFkZXIgPSB7XHJcblx0XHRcdHR5cGU6J2hlYWRlcicsIHRlbXBsYXRlOnRoaXMuYXBwLmNvbmZpZy5uYW1lLCBjc3M6J3dlYml4X2hlYWRlciBhcHBfaGVhZGVyJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBtZW51ID0ge1xyXG5cdFx0XHR2aWV3OidtZW51JywgaWQ6J3RvcDptZW51JywgXHJcblx0XHRcdGNzczonYXBwX21lbnUnLFxyXG5cdFx0XHR3aWR0aDoxODAsIGxheW91dDoneScsIHNlbGVjdDp0cnVlLFxyXG5cdFx0XHR0ZW1wbGF0ZTonPHNwYW4gY2xhc3M9XCJ3ZWJpeF9pY29uICNpY29uI1wiPjwvc3Bhbj4gI3ZhbHVlIyAnLFxyXG5cdFx0XHR2YWx1ZTogJ0hvbWUnLFxyXG5cdFx0XHRkYXRhOltcclxuXHRcdFx0XHR7IHZhbHVlOidIb21lJywgaWQ6J21haW4nLCBpY29uOidmYXMgZmEtaG9tZScgfSxcclxuXHRcdFx0XHR7IHZhbHVlOidQcm9maWxlJywgaWQ6J3Byb2ZpbGUnLCAgaWNvbjonZmFzIGZhLXVzZXInIH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsb2dvdXQgPSB7XHJcblx0XHRcdHZpZXc6J2J1dHRvbicsIFxyXG5cdFx0XHRsb2NhbElkOidsb2dvdXRCdG4nLCBcclxuXHRcdFx0dmFsdWU6J0xvZ291dCcsIFxyXG5cdFx0XHR0eXBlOidmb3JtJ1xyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB1aSA9IHtcclxuXHRcdFx0dHlwZTonY2xlYW4nLCBwYWRkaW5nWDo1LCBjc3M6J2FwcF9sYXlvdXQnLCBcclxuXHRcdFx0Y29sczpbXHJcblx0XHRcdFx0eyBwYWRkaW5nWDo1LCBwYWRkaW5nWToxMCwgcm93czogWyB7Y3NzOid3ZWJpeF9zaGFkb3dfbWVkaXVtJywgcm93czpbaGVhZGVyLCBtZW51LCBsb2dvdXRdfSBdfSxcclxuXHRcdFx0XHR7IHZpZXc6ICdyZXNpemVyJywgd2lkdGg6IDUgfSxcclxuXHRcdFx0XHR7IHR5cGU6J3dpZGUnLCBwYWRkaW5nWToxMCwgcGFkZGluZ1g6NSwgcm93czogW1xyXG5cdFx0XHRcdFx0eyAkc3Vidmlldzp0cnVlIH0gXHJcblx0XHRcdFx0XX1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4gdWk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy51c2UocGx1Z2lucy5NZW51LCAndG9wOm1lbnUnKTtcclxuXHJcblx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHR0aGlzLiQkKCdsb2dvdXRCdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IGFwcCA9IHRoaXMuYXBwO1xyXG5cdFx0XHRcclxuXHRcdFx0YXV0aG9yaXphdGlvbi5sb2dvdXQoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGlmKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRhcHAuc2hvdygnL2luZGV4Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cclxuXHRcdGNvbnN0IGxvZ2luRm9ybSA9IHtcclxuXHRcdFx0dmlldzogJ2Zvcm0nLFxyXG5cdFx0XHRsb2NhbElkOiAnbG9naW5Gb3JtJyxcclxuXHRcdFx0d2lkdGg6IDMwMCxcclxuXHRcdFx0ZWxlbWVudHM6IFtcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdVc2VybmFtZScsIG5hbWU6ICd1c2VybmFtZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgdHlwZTogJ3Bhc3N3b3JkJywgbGFiZWw6ICdQYXNzd29yZCcsIG5hbWU6ICdwYXNzd29yZCcgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtYXJnaW46IDUsIGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0eyB2aWV3OiAnYnV0dG9uJywgbG9jYWxJZDogJ2xvZ2luQnRuJywgdmFsdWU6ICdMb2dpbicsIHR5cGU6ICdmb3JtJyB9LFxyXG5cdFx0XHRcdFx0XHR7IHZpZXc6ICdidXR0b24nLCB2YWx1ZTogJ0NhbmNlbCcgfVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBsaW5rID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dmFsdWU6ICdDcmVhdGUgYW4gYWNjb3VudCcsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zaG93KCcvcmVnaXN0ZXInKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHt9LFxyXG5cdFx0XHRcdHtcdFxyXG5cdFx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0bG9naW5Gb3JtLFxyXG5cdFx0XHRcdFx0XHRsaW5rLFxyXG5cdFx0XHRcdFx0XHR7fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e31cclxuXHRcdFx0XVx0XHRcdFxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLiQkKCdsb2dpbkJ0bicpLmF0dGFjaEV2ZW50KCdvbkl0ZW1DbGljaycsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgdmFsdWVzID0gdGhpcy4kJCgnbG9naW5Gb3JtJykuZ2V0VmFsdWVzKCk7XHJcblx0XHRcdGNvbnN0IGF1dGhvcml6YXRpb24gPSBuZXcgQXV0aG9yaXphdGlvbigpO1xyXG5cclxuXHRcdFx0YXV0aG9yaXphdGlvbi5sb2dpbih2YWx1ZXMpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHRcclxuXHRcdFx0XHRpZiAocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvdygnL2hvbWUvbWFpbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHdlYml4Lm1lc3NhZ2UocmVzcG9uc2UpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHRcdFx0XHRcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgeyBncm91cHMgfSBmcm9tICdtb2RlbHMvZ3JvdXBzJztcclxuaW1wb3J0IGFkZEdyb3VwRm9ybSBmcm9tICcuL2FkZEdyb3VwJztcclxuaW1wb3J0IGFkZFdvcmRGb3JtIGZyb20gJy4vYWRkV29yZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCkge1xyXG5cclxuXHRcdGNvbnN0IHRlc3RSZXN1bHRzID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0aWQ6ICdncm91cExpc3QnLFxyXG5cdFx0XHRzZWxlY3Q6IHRydWUsXHJcblx0XHRcdGNvbHVtbnM6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ19pZCcsXHJcblx0XHRcdFx0XHRoaWRkZW46IHRydWUsXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdncm91cE5hbWUnLFxyXG5cdFx0XHRcdFx0c29ydDogJ3RleHQnLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAzLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnTmFtZSdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnd29yZHMnLFxyXG5cdFx0XHRcdFx0c29ydDogJ2ludCcsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDEsXHJcblx0XHRcdFx0XHRtaW5XaWR0aDogNTAsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnQ291bnQnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2NyZWF0aW9uRGF0ZScsXHJcblx0XHRcdFx0XHR3aWR0aDogODAsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdDcmVhdGVkJyxcclxuXHRcdFx0XHRcdGZvcm1hdDogd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlZCAlTVwiKVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICd2aWV3Q29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1ZpZXcnLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA1MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtZXllXCI+PC9pPidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0FkZCcsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPidcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAncmVtb3ZlQ29sJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JlbW92ZScsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDcwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICd7Y29tbW9uLnRyYXNoSWNvbigpfSdcclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XSxcclxuXHRcdFx0b25DbGljazoge1xyXG5cdFx0XHRcdCdmYS1leWUnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvdyhgL2hvbWUvZ3JvdXA/aWQ9JHtpZH1gKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdmYS1wbHVzJzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmFkZFdvcmQuc2hvd1dpbmRvdyhpZCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnd3hpLXRyYXNoJzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR3ZWJpeC5jb25maXJtKHtcclxuXHRcdFx0XHRcdFx0dGV4dDogJ1JlbW92ZSBncm91cD8nLFxyXG5cdFx0XHRcdFx0XHRjYWxsYmFjazogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGdyb3Vwcy5yZW1vdmUoaWQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBidXR0b24gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRpZDogJ2FkZEdyb3VwJyxcclxuXHRcdFx0dmFsdWU6ICdBZGQgZ3JvdXAnLFxyXG5cdFx0XHR0eXBlOidmb3JtJyxcclxuXHRcdFx0aW5wdXRXaWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4geyB0aGlzLmFkZEdyb3VwLnNob3dXaW5kb3coKTsgfVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0cm93czogW3Rlc3RSZXN1bHRzLCBidXR0b25dXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuYWRkR3JvdXAgPSB0aGlzLnVpKGFkZEdyb3VwRm9ybSk7XHJcblx0XHR0aGlzLmFkZFdvcmQgPSB0aGlzLnVpKGFkZFdvcmRGb3JtKTtcclxuXHJcblx0XHQkJCgnZ3JvdXBMaXN0JykucGFyc2UoZ3JvdXBzKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCB7IHRlc3RyZXN1bHRzIH0gZnJvbSAnbW9kZWxzL3Rlc3RyZXN1bHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGVWaWV3IGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKSB7XHJcblxyXG5cdFx0Y29uc3QgdGVzdFJlc3VsdHMgPSB7XHJcblx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRsb2NhbElkOiAndGVzdFJlc3VsdHMnLFxyXG5cdFx0XHRjb2x1bW5zOltcclxuXHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0aWQ6ICdyYXRpbmcnLCAgICBcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1JhdGluZycsICAgIFxyXG5cdFx0XHRcdFx0bWluV2lkdGg6IDgwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0aWQ6ICdncm91cElkJywgICBcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0dyb3VwJyxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnI2dyb3VwSWQuZ3JvdXBOYW1lIycsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDEsXHJcblx0XHRcdFx0XHRtaW5XaWR0aDogMTIwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0aWQ6ICdzY29yZScsICAgIFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUmVzdWx0JywgICAgXHJcblx0XHRcdFx0XHRtaW5XaWR0aDogODBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRpZDogJ3Bhc3NlZERhdGUnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnRGF0ZScsXHJcblx0XHRcdFx0XHRmb3JtYXQ6IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJWQgJU1cIiksXHJcblx0XHRcdFx0XHR3aWR0aDogODBcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHRcdGRhdGE6IFtdXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGJ1dHRvbiA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGlkOiAnY2xlYXJBbGwnLFxyXG5cdFx0XHR2YWx1ZTogJ0NsZWFyIGFsbCcsXHJcblx0XHRcdHR5cGU6J2Zvcm0nLFxyXG5cdFx0XHRpbnB1dFdpZHRoOiAxMDBcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHsgXHJcblx0XHRcdHJvd3M6IFt0ZXN0UmVzdWx0cywgYnV0dG9uXVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0ZXN0cmVzdWx0cy53YWl0RGF0YS50aGVuKCgpID0+IHtcclxuXHRcdFx0bGV0IG4gPSAxO1xyXG5cdFx0XHRjb25zdCByZWNvcmRzQXJyID0gdGVzdHJlc3VsdHMuc2VyaWFsaXplKCk7XHJcblx0XHRcdHJlY29yZHNBcnIuZm9yRWFjaCgocmVjb3JkLCBpLCByZWNvcmRzQXJyKSA9PiB7XHJcblx0XHRcdFx0aWYgKGkgPiAwKSB7XHJcblx0XHRcdFx0XHRjb25zdCBwcmV2UmVjID0gcmVjb3Jkc0FycltpIC0gMV07XHJcblx0XHRcdFx0XHRpZiAocmVjb3JkLnNjb3JlID4gcHJldlJlYy5zY29yZSkge1xyXG5cdFx0XHRcdFx0XHRuICs9IDE7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHJlY29yZHNBcnIubWFwKChyZWNvcmQsIGksIHJlY29yZHNBcnIpID0+IHtcclxuXHRcdFx0XHRpZiAoaSA+IDApIHtcclxuXHRcdFx0XHRcdGNvbnN0IHByZXZSZWMgPSByZWNvcmRzQXJyW2kgLSAxXTtcclxuXHRcdFx0XHRcdGlmIChyZWNvcmQuc2NvcmUgPiBwcmV2UmVjLnNjb3JlKSB7XHJcblx0XHRcdFx0XHRcdG4gLT0gMTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVjb3JkLnJhdGluZyA9IG47XHJcblx0XHRcdFx0cmV0dXJuIHJlY29yZDtcclxuXHRcdFx0fSkucmV2ZXJzZSgpO1xyXG5cdFx0XHR0aGlzLiQkKCd0ZXN0UmVzdWx0cycpLnBhcnNlKGRhdGEpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyUGFnZSBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgcmVnaXN0ZXJGb3JtID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICdyZWdpc3RlckZvcm0nLFxyXG5cdFx0XHR3aWR0aDogMzAwLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1Vlcm5hbWUnLCBuYW1lOiAndXNlcm5hbWUnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIHR5cGU6ICdwYXNzd29yZCcsIGxhYmVsOiAnUGFzc3dvcmQnLCBuYW1lOiAncGFzc3dvcmQnIH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWFyZ2luOiA1LCBjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRcdFx0dmlldzogJ2J1dHRvbicsIGxvY2FsSWQ6ICdyZWdpc3RlckJ0bicsIHZhbHVlOiAnUmVnaXN0ZXInLCB0eXBlOiAnZm9ybSdcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHt9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdHJlZ2lzdGVyRm9ybSxcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7fVxyXG5cdFx0XHRdXHRcdFx0XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuJCQoJ3JlZ2lzdGVyQnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLiQkKCdyZWdpc3RlckZvcm0nKS5nZXRWYWx1ZXMoKTtcclxuXHRcdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0XHRhdXRob3JpemF0aW9uLnJlZ2lzdGVyKHZhbHVlcykudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRpZiAocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvdygnL2hvbWUvbWFpbicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9