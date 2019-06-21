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
			columns: [{
				id: 'date',
				header: 'Date',
				fillspace: 1,
				minWidth: 120
			}, {
				id: 'groupId',
				header: 'Group',
				fillspace: 1,
				minWidth: 120
			}, {
				id: ' score',
				header: 'Result',
				fillspace: 1,
				minWidth: 120
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYml4LWpldC9kaXN0L2VzNi9qZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9hdXRob3JpemF0aW9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbG9jYWxlcyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9tb2RlbHMvZ3JvdXBzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2xhbmd1YWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL21vZGVscy90ZXN0cmVzdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL21vZGVscy93b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL215YXBwLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9hZGRHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2FkZFdvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9jcmVhdGVUZXN0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9ob21lLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9tYWluLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbIkpldEJhc2UiLCJ3ZWJpeCIsIndlYml4SmV0IiwiX2V2ZW50cyIsIl9zdWJzIiwiX2RhdGEiLCJnZXRSb290IiwiX3Jvb3QiLCJkZXN0cnVjdG9yIiwiX2RldGFjaEV2ZW50cyIsIl9kZXN0cm95U3VicyIsIl9jb250YWluZXIiLCJhcHAiLCJfcGFyZW50Iiwic2V0UGFyYW0iLCJpZCIsInZhbHVlIiwidXJsIiwiX3NlZ21lbnQiLCJ1cGRhdGUiLCJzaG93IiwiZ2V0UGFyYW0iLCJwYXJlbnQiLCJ2aWV3IiwiZ2V0UGFyZW50VmlldyIsImdldFVybCIsInN1YnVybCIsImdldFVybFN0cmluZyIsInRvU3RyaW5nIiwiJCQiLCJyb290IiwicXVlcnlWaWV3Iiwib2JqIiwiY29uZmlnIiwibG9jYWxJZCIsIiRzY29wZSIsIm9uIiwibmFtZSIsImNvZGUiLCJhdHRhY2hFdmVudCIsInB1c2giLCJjb250YWlucyIsImtleSIsImtpZCIsImdldFN1YlZpZXciLCJzdWIiLCJnZXRTdWJWaWV3SW5mbyIsInN1YnZpZXciLCJwb3B1cCIsImV2ZW50cyIsImkiLCJsZW5ndGgiLCJkZXRhY2hFdmVudCIsInN1YlZpZXciLCJfaW5pdF91cmxfZGF0YSIsImN1cnJlbnQiLCJleHRlbmQiLCJwYXJhbXMiLCJfZ2V0RGVmYXVsdFN1YiIsImRlZmF1bHQiLCJicmFuY2giLCJjaGlsZCIsIl9yb3V0ZWRfdmlldyIsInBhcnNlIiwic3Vic3RyIiwicGFydHMiLCJzcGxpdCIsImNodW5rcyIsInRlc3QiLCJyZXN1bHQiLCJwb3MiLCJpbmRleE9mIiwicGFyYW0iLCJkY2h1bmsiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYWdlIiwiaXNOZXciLCJ1cmwyc3RyIiwic3RhY2siLCJjaHVuayIsIm9iajJzdHIiLCJqb2luIiwic3RyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiUm91dGUiLCJyb3V0ZSIsImluZGV4IiwiX25leHQiLCJwYXRoIiwibmV4dCIsInNsaWNlIiwic2hpZnQiLCJyZWZyZXNoIiwiX2pvaW4iLCJraWRzIiwib2xkIiwiY29uY2F0IiwiYXBwZW5kIiwiUHJvbWlzZSIsInJlcyIsInJlaiIsInJlZGlyZWN0IiwiY29uZmlybSIsInJlc29sdmUiLCJjYWxsRXZlbnQiLCJjYXRjaCIsInRoZW4iLCJzaXplIiwibiIsIkpldFZpZXciLCJfY2hpbGRyZW4iLCJ1aSIsImNvbnRhaW5lciIsImpldHZpZXciLCJjcmVhdGVWaWV3IiwicmVuZGVyIiwidGFyZ2V0IiwiX3JlbmRlckZyYW1lTG9jayIsIl9zaG93Iiwic2VnbWVudCIsIl91cmxDaGFuZ2UiLCJsaW5rUm91dGVyIiwiZ2V0Um91dGVyIiwic2V0Iiwic2lsZW50IiwiaW5pdCIsIl8kdmlldyIsIl8kIiwicmVhZHkiLCJfJHVybCIsIm1lc3NhZ2UiLCJ1cmxDaGFuZ2UiLCJkZXN0cm95IiwiX2Rlc3Ryb3lLaWRzIiwidXNlIiwicGx1Z2luIiwidGFnTmFtZSIsIl9yZW5kZXIiLCJkb2N1bWVudCIsImJvZHkiLCJ0b05vZGUiLCJfcmVuZGVyX2ZpbmFsIiwiY2ZnIiwic2xvdCIsInJlamVjdCIsInJlc3BvbnNlIiwiY29weUNvbmZpZyIsIm9sZHVpIiwiYXNXaW4iLCJzZXRQb3NpdGlvbiIsImlzVmlzaWJsZSIsIl9pbml0IiwiX2luaXRVcmwiLCJlIiwiX2luaXRFcnJvciIsImVyciIsIndhaXRzIiwiZnJhbWUiLCJ3YWl0IiwiYWxsIiwibG9jayIsIl9yZW5kZXJGcmFtZSIsIl9jcmVhdGVTdWJWaWV3IiwiZXJyb3IiLCJjcmVhdGVGcm9tVVJMIiwidWlzIiwiSmV0Vmlld1JhdyIsIl91aSIsIlN1YlJvdXRlciIsImNiIiwiYSIsImdldCIsIl9vbmNlIiwiSmV0QXBwQmFzZSIsIndpbmRvdyIsInZlcnNpb24iLCJzdGFydCIsIl9zZXJ2aWNlcyIsIkV2ZW50U3lzdGVtIiwiX3N1YlNlZ21lbnQiLCJnZXRTZXJ2aWNlIiwic2V0U2VydmljZSIsImhhbmRsZXIiLCJwcm90b3R5cGUiLCIkc3VidmlldyIsImFkZFN1YlZpZXciLCJBcnJheSIsIm1ldGhvZCIsInBvaW50IiwiRGF0YUNvbGxlY3Rpb24iLCJSZWdFeHAiLCJEYXRlIiwiY29weSIsIiRyb3V0ZXIiLCJjbGlja0hhbmRsZXIiLCJzcmNFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwidHJpZ2dlciIsIl9mb3JWaWV3IiwibG9hZFZpZXciLCJ2aWV3cyIsIl9sb2FkRXJyb3IiLCJFcnJvciIsIl9sb2FkVmlld0R5bmFtaWMiLCJtb2R1bGUiLCJfX2VzTW9kdWxlIiwibm93Iiwicm91dGVyIiwicmVzdCIsImFwcGx5IiwiZGF0YSIsImFjdGlvbiIsImJpbmQiLCJlciIsImRlYnVnIiwiY29uc29sZSIsInRleHQiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwidHlwZSIsImV4cGlyZSIsImZpcnN0SW5pdCIsIl9maXJzdF9zdGFydCIsInRvcCIsImJhc2UiLCJzZXRUaW1lb3V0IiwiYW5pbWF0aW9uIiwibm9kZSIsImh0bWwiLCJhZGRDc3MiLCJyZW1vdmVDc3MiLCJ1cmxTdHJpbmciLCJ0ZW1wbGF0ZSIsInVpZCIsIkhhc2hSb3V0ZXIiLCJfZGV0ZWN0UHJlZml4Iiwib25wb3BzdGF0ZSIsInJvdXRlcyIsImNvbXBhcmUiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicHJlZml4Iiwic3VmaXgiLCJfZ2V0UmF3Iiwicm91dGVyUHJlZml4IiwibG9jYXRpb24iLCJocmVmIiwiaXNQYXRjaGVkIiwicGF0Y2giLCJ3Iiwid2luIiwicHJvbWlzZSIsImZyZWV6ZSIsInNvbWUiLCIkZnJlZXplIiwicmVzaXplIiwiYmFzZUFkZCIsImJhc2VsYXlvdXQiLCJhZGRWaWV3IiwiYmFzZVJlbW92ZSIsInJlbW92ZVZpZXciLCJqdmlldyIsInN1YnMiLCJhcmd1bWVudHMiLCJsYXlvdXQiLCJwcm90b1VJIiwiJGluaXQiLCIkYXBwIiwiJHJlYWR5Iiwib3JpZ2luIiwicHJveHkiLCJKZXRBcHAiLCJyZXF1aXJlIiwiU3RvcmVSb3V0ZXIiLCJzdG9yYWdlIiwic2Vzc2lvbiIsInN0b3JlTmFtZSIsInB1dCIsIlVybFJvdXRlciIsInBhdGhuYW1lIiwiRW1wdHlSb3V0ZXIiLCJfJGNvbmZpZyIsIlVubG9hZEd1YXJkIiwiaGFzIiwic3RvcmUiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJmb3JFYWNoIiwiY29udGV4dCIsInRyaW0iLCJ3YXJuIiwieCIsIlN0cmluZyIsImRlbGltaXRlciIsInJ1c3NpYW5QbHVyYWxHcm91cHMiLCJlbmQiLCJwbHVyYWxUeXBlcyIsImFyYWJpYyIsImxhc3RUd28iLCJib3NuaWFuX3NlcmJpYW4iLCJjaGluZXNlIiwiY3JvYXRpYW4iLCJmcmVuY2giLCJnZXJtYW4iLCJydXNzaWFuIiwibGl0aHVhbmlhbiIsImN6ZWNoIiwicG9saXNoIiwiaWNlbGFuZGljIiwic2xvdmVuaWFuIiwicGx1cmFsVHlwZVRvTGFuZ3VhZ2VzIiwibGFuZ1RvVHlwZU1hcCIsIm1hcHBpbmciLCJyZXQiLCJsYW5ncyIsImxhbmciLCJwbHVyYWxUeXBlTmFtZSIsImxvY2FsZSIsImxhbmdUb1BsdXJhbFR5cGUiLCJlbiIsInBsdXJhbFR5cGVJbmRleCIsImNvdW50IiwiZXNjYXBlIiwidG9rZW4iLCJjb25zdHJ1Y3RUb2tlblJlZ2V4Iiwib3B0cyIsInN1ZmZpeCIsIlJhbmdlRXJyb3IiLCJkb2xsYXJSZWdleCIsImRvbGxhckJpbGxzWWFsbCIsImRlZmF1bHRUb2tlblJlZ2V4IiwidHJhbnNmb3JtUGhyYXNlIiwicGhyYXNlIiwic3Vic3RpdHV0aW9ucyIsInRva2VuUmVnZXgiLCJUeXBlRXJyb3IiLCJpbnRlcnBvbGF0aW9uUmVnZXgiLCJvcHRpb25zIiwic21hcnRfY291bnQiLCJ0ZXh0cyIsImV4cHJlc3Npb24iLCJhcmd1bWVudCIsIlBvbHlnbG90IiwicGhyYXNlcyIsImN1cnJlbnRMb2NhbGUiLCJhbGxvd01pc3NpbmciLCJvbk1pc3NpbmdLZXkiLCJpbnRlcnBvbGF0aW9uIiwibmV3TG9jYWxlIiwibW9yZVBocmFzZXMiLCJwcmVmaXhlZEtleSIsInVuc2V0IiwiY2xlYXIiLCJuZXdQaHJhc2VzIiwidCIsIl8iLCJ0cmFuc2Zvcm0iLCJ3ZWJpeFBvbHlnbG90IiwiTG9jYWxlIiwiX3ZpZXciLCJzZXRMYW5nRGF0YSIsInBjb25maWciLCJwb2x5Z2xvdCIsInBvbHkiLCJzZXJ2aWNlIiwibG9jTmFtZSIsImkxOG4iLCJzZXRMb2NhbGUiLCJnZXRMYW5nIiwic2V0TGFuZyIsInVybHMiLCJNZW51IiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsImdldFNlbGVjdGVkSWQiLCJzZWxlY3QiLCJleGlzdHMiLCJiYXNlaWNvbnMiLCJnb29kIiwic2F2aW5nIiwiYmFzZXRleHQiLCJTdGF0dXMiLCJzdGF0dXMiLCJpc2Vycm9yIiwiZXhwaXJlRGVsYXkiLCJpY29ucyIsImNvbnRlbnQiLCJhcmVhIiwic2V0SFRNTCIsInN1Y2Nlc3MiLCJzZXRTdGF0dXMiLCJmYWlsIiwiZ2V0U3RhdHVzIiwiaGlkZVN0YXR1cyIsIm1vZGUiLCJyZXNwb25zZVRleHQiLCJ0cmFjayIsImRwIiwiX2lkIiwiX29iaiIsInJlbW90ZSIsImFqYXgiLCJfbW9kZSIsIl91cmwiLCJfcmVxdWVzdCIsIl9oZWFkZXJzIiwiX2ZpbGVzIiwiVGhlbWUiLCJ0aGVtZSIsImdldFRoZW1lIiwic2V0VGhlbWUiLCJsaW5rcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibG5hbWUiLCJkaXNhYmxlZCIsInNraW4iLCJjb3B5UGFyYW1zIiwiVXJsUGFyYW0iLCJvcyIsIm9nIiwidmFsIiwiVXNlciIsImxvZ2luIiwibG9nb3V0IiwiYWZ0ZXJMb2dpbiIsImFmdGVyTG9nb3V0IiwicGluZyIsIm1vZGVsIiwidXNlciIsImdldFVzZXIiLCJzZXJ2ZXIiLCJwYXNzIiwiY2FuTmF2aWdhdGUiLCJfJHJvb3QiLCJwdWJsaWMiLCJzZXRJbnRlcnZhbCIsInBsdWdpbnMiLCJsb2dvdXRVcmwiLCJsb2dpblVybCIsInJlZ2lzdGVyVXJsIiwiQXV0aG9yaXphdGlvbiIsInJlZ2lzdGVyIiwicG9zdCIsImdyb3VwcyIsInNhdmUiLCJ1cGRhdGVGcm9tUmVzcG9uc2UiLCJzY2hlbWUiLCJjcmVhdGlvbkRhdGUiLCJsYW5ndWFnZXMiLCJ0ZXN0cmVzdWx0cyIsIndvcmRzIiwiTXlBcHAiLCJkZWZhdWx0cyIsIkFQUE5BTUUiLCJWRVJTSU9OIiwiQlVJTERfQVNfTU9EVUxFIiwiUFJPRFVDVElPTiIsIm5hdiIsImpzb24iLCJhbGxvd0FjY2VzcyIsImFkZEdyb3VwRm9ybSIsInBvc2l0aW9uIiwiaGVhZCIsImVsZW1lbnRzIiwibGFiZWwiLCJtYXJnaW4iLCJjb2xzIiwiY2xpY2siLCJzYXZlR3JvdXAiLCJoaWRlV2luZG93IiwiaGlkZSIsInJ1bGVzIiwiaXNOb3RFbXB0eSIsIm1haW5XaW5kb3ciLCJzaG93V2luZG93IiwiZm9ybSIsInZhbHVlcyIsImdldFZhbHVlcyIsImFkZCIsImNsZWFyRm9ybSIsImNsZWFyVmFsaWRhdGlvbiIsImFkZFdvcmRGb3JtIiwibWFpblJvdyIsImxhYmVsV2lkdGgiLCJsYWJlbEFsaWduIiwid2lkdGgiLCJhZGRUcmFuc2xhdGlvbiIsInJvd3MiLCJoaWRkZW4iLCJoZWlnaHQiLCJwYWRkaW5nWSIsInNhdmVGb3JtIiwidHJhbnNsYXRpb25zRm9ybSIsIndvcmRGb3JtIiwiYnRuQWRkVHJhbnNsYXRpb24iLCJhbGxDb21ibyIsImZpbmRBbGxDb21ibyIsImNvbWJvIiwib25Db21ib0NoYW5nZSIsIm5ld3YiLCJvbGR2IiwiY29tYm9zQXJyIiwiYWxsTGFuZ3MiLCJwdWxsIiwic3BsaWNlIiwic2V0T3B0aW9ucyIsImVsIiwicmVtb3ZlU2VsZWN0ZWRMYW5ncyIsIml0ZW0iLCJuZXdMYW5nQXJyIiwia2V5cyIsIm1hcCIsImsiLCJ3b3JkSWQiLCJnZXRDaGlsZFZpZXdzIiwicm93c0NvdW50Iiwid29yZCIsInRyYW5zbGF0aW9uVmFsdWVzIiwidHJhbnNsYXRpb25zIiwidHIiLCJsYW5ndWFnZUlkIiwiYmF0Y2giLCJ2YWxpZGF0ZSIsImdldExpc3QiLCJzZXJpYWxpemUiLCJvbGRWYWwiLCJmaW5kIiwiZGVmaW5lIiwiY3JlYXRlVGVzdEZvcm0iLCJjcmVhdGVUZXN0IiwibGFuZ3VhZ2UiLCJmb3JtUG9wdXAiLCJncm91cElkIiwic2h1ZmZsZSIsImFycmF5Iiwic2h1ZmZsZWRBcnIiLCJudW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzY29yZSIsIndhaXREYXRhIiwid29yZHNMaXN0IiwiZmlsdGVyIiwid29yZEl0ZW0iLCJ3b3Jkc0FyciIsInRyYW5zbGF0aW9uc0FyciIsInRyYW5zbGF0aW9uIiwicGFydE9mU3BlZWNoIiwic2hvd1F1ZXN0aW9uIiwid29yZE9iaiIsInJpZ2h0QW5zd2VyIiwiY2hhbmdlQnV0dG9ucyIsImdldEhlYWQiLCJzYXZlUmVzdWx0cyIsInNob3dSZXN1bHRzIiwic2V0VHJhbnNsYXRpb25zIiwiYnV0dG9ucyIsImF1dG93aWR0aCIsImFuc3dlckFjdGlvbiIsImJvcmRlcmxlc3MiLCJwYWRkaW5nIiwiY3NzIiwicGFzc2VkRGF0ZSIsIkdyb3VwVmlldyIsImR0YWJsZSIsImNvbHVtbnMiLCJmaWxsc3BhY2UiLCJoZWFkZXIiLCJvbkNsaWNrIiwiY2FsbGJhY2siLCJyZW1vdmUiLCJleHBvcnRCdG4iLCJ0b0V4Y2VsIiwidGVzdEJ0biIsInRlc3RQb3B1cCIsImdyaWQiLCJ0ckFyciIsImxhbmdzTGlzdCIsImdldEl0ZW0iLCJsYW5nVmFsIiwiYWRkQ29sdW1zIiwiYXJyIiwidG9BcnJheSIsImluc2VydEF0IiwicmVmcmVzaENvbHVtbnMiLCJUb3BWaWV3IiwibWVudSIsImljb24iLCJwYWRkaW5nWCIsImF1dGhvcml6YXRpb24iLCJJbmRleFBhZ2UiLCJsb2dpbkZvcm0iLCJsaW5rIiwiTWFpblZpZXciLCJ0ZXN0UmVzdWx0cyIsInNvcnQiLCJtaW5XaWR0aCIsImZvcm1hdCIsImRhdGVUb1N0ciIsImFkZFdvcmQiLCJidXR0b24iLCJpbnB1dFdpZHRoIiwiYWRkR3JvdXAiLCJQcm9maWxlVmlldyIsIlJlZ2lzdGVyUGFnZSIsInJlZ2lzdGVyRm9ybSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QXhDLEVBRFMsRUFFVCxFQUFFZCxNQUFNLE1BQVIsRUFBZ0JvTSxNQUFNLFVBQXRCLEVBQWtDc1AsT0FBTyxVQUF6QyxFQUFxRDVhLE1BQU0sVUFBM0QsRUFGUyxFQUdUO0FBQ0M2YSxZQUFRLENBRFQsRUFDWUMsTUFBTSxDQUNoQjtBQUNDNWIsV0FBTSxRQURQLEVBQ2lCVyxTQUFTLGFBRDFCLEVBQ3lDbEIsT0FBTyxVQURoRCxFQUM0RDJNLE1BQU07QUFEbEUsS0FEZ0I7QUFEbEIsSUFIUztBQUpVLEdBQXJCOztBQWlCQSxTQUFPO0FBQ053UCxTQUFNLENBQ0wsRUFESyxFQUVMO0FBQ0NxQixVQUFNLENBQ0wsRUFESyxFQUVMdUgsWUFGSyxFQUdMLEVBSEs7QUFEUCxJQUZLLEVBU0wsRUFUSztBQURBLEdBQVA7QUFhQSxFOzt3QkFFRGxlLEksbUJBQU87QUFBQTs7QUFDTixPQUFLaEcsRUFBTCxDQUFRLGFBQVIsRUFBdUJVLFdBQXZCLENBQW1DLGFBQW5DLEVBQWtELFlBQU07QUFDdkQsT0FBTXNiLFNBQVMsT0FBS2hjLEVBQUwsQ0FBUSxjQUFSLEVBQXdCaWMsU0FBeEIsRUFBZjtBQUNBLE9BQU1pSCxnQkFBZ0IsSUFBSXRKLHNEQUFKLEVBQXRCOztBQUVBc0osaUJBQWNySixRQUFkLENBQXVCbUMsTUFBdkIsRUFBK0JuWCxJQUEvQixDQUFvQyxVQUFDdUMsUUFBRCxFQUFjO0FBQ2pELFFBQUlBLFFBQUosRUFBYztBQUNiLFlBQUs3SCxJQUFMLENBQVUsWUFBVjtBQUNBO0FBQ0QsSUFKRDtBQUtBLEdBVEQ7QUFVQSxFOzs7RUE5Q3dDeUYsaUQ7O0FBQXJCaWYsMkUiLCJmaWxlIjoibXlhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jb2RlYmFzZS9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zb3VyY2VzL215YXBwLmpzXCIpO1xuIiwiY2xhc3MgSmV0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3ZWJpeCkge1xyXG4gICAgICAgIHRoaXMud2ViaXhKZXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2ViaXggPSB3ZWJpeDtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9zdWJzID0ge307XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgfVxyXG4gICAgZ2V0Um9vdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdDtcclxuICAgIH1cclxuICAgIGRlc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZGV0YWNoRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVN1YnMoKTtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSB0aGlzLl9jb250YWluZXIgPSB0aGlzLmFwcCA9IHRoaXMuX3BhcmVudCA9IHRoaXMuX3Jvb3QgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgc2V0UGFyYW0oaWQsIHZhbHVlLCB1cmwpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGF0YVtpZF0gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFbaWRdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlZ21lbnQudXBkYXRlKGlkLCB2YWx1ZSwgMCk7XHJcbiAgICAgICAgICAgIGlmICh1cmwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdyhudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFBhcmFtKGlkLCBwYXJlbnQpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2RhdGFbaWRdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIgfHwgIXBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldy5nZXRQYXJhbShpZCwgcGFyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlZ21lbnQuc3VidXJsKCk7XHJcbiAgICB9XHJcbiAgICBnZXRVcmxTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlZ21lbnQudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGdldFBhcmVudFZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcclxuICAgIH1cclxuICAgICQkKGlkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBjb25zdCByb290ID0gdGhpcy5nZXRSb290KCk7XHJcbiAgICAgICAgICAgIHJldHVybiByb290LnF1ZXJ5Vmlldygob2JqID0+IChvYmouY29uZmlnLmlkID09PSBpZCB8fCBvYmouY29uZmlnLmxvY2FsSWQgPT09IGlkKSAmJlxyXG4gICAgICAgICAgICAgICAgKG9iai4kc2NvcGUgPT09IHJvb3QuJHNjb3BlKSksIFwic2VsZlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbihvYmosIG5hbWUsIGNvZGUpIHtcclxuICAgICAgICBjb25zdCBpZCA9IG9iai5hdHRhY2hFdmVudChuYW1lLCBjb2RlKTtcclxuICAgICAgICB0aGlzLl9ldmVudHMucHVzaCh7IG9iaiwgaWQgfSk7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfVxyXG4gICAgY29udGFpbnModmlldykge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3Qga2lkID0gdGhpcy5fc3Vic1trZXldLnZpZXc7XHJcbiAgICAgICAgICAgIGlmIChraWQgPT09IHZpZXcgfHwga2lkLmNvbnRhaW5zKHZpZXcpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRTdWJWaWV3KG5hbWUpIHtcclxuICAgICAgICBjb25zdCBzdWIgPSB0aGlzLmdldFN1YlZpZXdJbmZvKG5hbWUpO1xyXG4gICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1Yi5zdWJ2aWV3LnZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0U3ViVmlld0luZm8obmFtZSkge1xyXG4gICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuX3N1YnNbbmFtZSB8fCBcImRlZmF1bHRcIl07XHJcbiAgICAgICAgaWYgKHN1Yikge1xyXG4gICAgICAgICAgICByZXR1cm4geyBzdWJ2aWV3OiBzdWIsIHBhcmVudDogdGhpcyB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJfdG9wXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3Vic1tuYW1lXSA9IHsgdXJsOiBcIlwiLCBpZDogbnVsbCwgcG9wdXA6IHRydWUgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViVmlld0luZm8obmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gYSBjaGlsZCB2aWV3LCBzZWFyY2hlcyBmb3IgbmVhcmVzdCBwYXJlbnQgd2l0aCBzdWJ2aWV3XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmdldFN1YlZpZXdJbmZvKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIF9kZXRhY2hFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBldmVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgZXZlbnRzW2ldLm9iai5kZXRhY2hFdmVudChldmVudHNbaV0uaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9kZXN0cm95U3VicygpIHtcclxuICAgICAgICAvLyBkZXN0cm95IHN1YiB2aWV3c1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViVmlldyA9IHRoaXMuX3N1YnNba2V5XS52aWV3O1xyXG4gICAgICAgICAgICAvLyBpdCBwb3NzaWJsZSB0aGF0IHN1YnZpZXcgd2FzIG5vdCBsb2FkZWQgd2l0aCBhbnkgY29udGVudCB5ZXRcclxuICAgICAgICAgICAgLy8gc28gY2hlY2sgb24gbnVsbFxyXG4gICAgICAgICAgICBpZiAoc3ViVmlldykge1xyXG4gICAgICAgICAgICAgICAgc3ViVmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVzZXQgdG8gcHJldmVudCBtZW1vcnkgbGVha3NcclxuICAgICAgICB0aGlzLl9zdWJzID0ge307XHJcbiAgICB9XHJcbiAgICBfaW5pdF91cmxfZGF0YSgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9zZWdtZW50LmN1cnJlbnQoKTtcclxuICAgICAgICB0aGlzLl9kYXRhID0ge307XHJcbiAgICAgICAgdGhpcy53ZWJpeC5leHRlbmQodGhpcy5fZGF0YSwgdXJsLnBhcmFtcywgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBfZ2V0RGVmYXVsdFN1YigpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3Vicy5kZWZhdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJzLmRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5fc3Vic1trZXldO1xyXG4gICAgICAgICAgICBpZiAoIXN1Yi5icmFuY2ggJiYgc3ViLnZpZXcgJiYga2V5ICE9PSBcIl90b3BcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBzdWIudmlldy5fZ2V0RGVmYXVsdFN1YigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JvdXRlZF92aWV3KCkge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdWIgPSBwYXJlbnQuX2dldERlZmF1bHRTdWIoKTtcclxuICAgICAgICBpZiAoIXN1YiAmJiBzdWIgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyZW50Ll9yb3V0ZWRfdmlldygpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIHBhcnNlKHVybCkge1xyXG4gICAgLy8gcmVtb3ZlIHN0YXJ0aW5nIC9cclxuICAgIGlmICh1cmxbMF0gPT09IFwiL1wiKSB7XHJcbiAgICAgICAgdXJsID0gdXJsLnN1YnN0cigxKTtcclxuICAgIH1cclxuICAgIC8vIHNwbGl0IHVybCBieSBcIi9cIlxyXG4gICAgY29uc3QgcGFydHMgPSB1cmwuc3BsaXQoXCIvXCIpO1xyXG4gICAgY29uc3QgY2h1bmtzID0gW107XHJcbiAgICAvLyBmb3IgZWFjaCBwYWdlIGluIHVybFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHRlc3QgPSBwYXJ0c1tpXTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuICAgICAgICAvLyBkZXRlY3QgcGFyYW1zXHJcbiAgICAgICAgLy8gc3VwcG9ydCBvbGQgXHRcdFx0c29tZTphPWI6Yz1kXHJcbiAgICAgICAgLy8gYW5kIG5ldyBub3RhdGlvblx0XHRzb21lP2E9YiZjPWRcclxuICAgICAgICBsZXQgcG9zID0gdGVzdC5pbmRleE9mKFwiOlwiKTtcclxuICAgICAgICBpZiAocG9zID09PSAtMSkge1xyXG4gICAgICAgICAgICBwb3MgPSB0ZXN0LmluZGV4T2YoXCI/XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocG9zICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB0ZXN0LnN1YnN0cihwb3MgKyAxKS5zcGxpdCgvW1xcOlxcP1xcJl0vZyk7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBoYXNoIG9mIG5hbWVkIHBhcmFtc1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtIG9mIHBhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGNodW5rID0gcGFyYW0uc3BsaXQoXCI9XCIpO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2RjaHVua1swXV0gPSBkZWNvZGVVUklDb21wb25lbnQoZGNodW5rWzFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzdG9yZSBwYXJzZWQgdmFsdWVzXHJcbiAgICAgICAgY2h1bmtzW2ldID0ge1xyXG4gICAgICAgICAgICBwYWdlOiAocG9zID4gLTEgPyB0ZXN0LnN1YnN0cigwLCBwb3MpIDogdGVzdCksXHJcbiAgICAgICAgICAgIHBhcmFtczogcmVzdWx0LFxyXG4gICAgICAgICAgICBpc05ldzogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgcGFnZSBvYmplY3RzXHJcbiAgICByZXR1cm4gY2h1bmtzO1xyXG59XHJcbmZ1bmN0aW9uIHVybDJzdHIoc3RhY2spIHtcclxuICAgIGNvbnN0IHVybCA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBjaHVuayBvZiBzdGFjaykge1xyXG4gICAgICAgIHVybC5wdXNoKFwiL1wiICsgY2h1bmsucGFnZSk7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gb2JqMnN0cihjaHVuay5wYXJhbXMpO1xyXG4gICAgICAgIGlmIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgdXJsLnB1c2goXCI/XCIgKyBwYXJhbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1cmwuam9pbihcIlwiKTtcclxufVxyXG5mdW5jdGlvbiBvYmoyc3RyKG9iaikge1xyXG4gICAgY29uc3Qgc3RyID0gW107XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAoc3RyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzdHIucHVzaChcIiZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0ci5wdXNoKGtleSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtrZXldKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLmpvaW4oXCJcIik7XHJcbn1cblxuY2xhc3MgUm91dGUge1xyXG4gICAgY29uc3RydWN0b3Iocm91dGUsIGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5fbmV4dCA9IDE7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByb3V0ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlID0ge1xyXG4gICAgICAgICAgICAgICAgdXJsOiBwYXJzZShyb3V0ZSksXHJcbiAgICAgICAgICAgICAgICBwYXRoOiByb3V0ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBjdXJyZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4XTtcclxuICAgIH1cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUudXJsW3RoaXMuaW5kZXggKyB0aGlzLl9uZXh0XTtcclxuICAgIH1cclxuICAgIHN1YnVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmwuc2xpY2UodGhpcy5pbmRleCk7XHJcbiAgICB9XHJcbiAgICBzaGlmdCgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJvdXRlKHRoaXMucm91dGUsIHRoaXMuaW5kZXggKyB0aGlzLl9uZXh0KTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5yb3V0ZS51cmw7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaW5kZXggKyAxOyBpIDwgdXJsLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHVybFtpXS5pc05ldyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9TdHJpbmcoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gdXJsMnN0cih0aGlzLnN1YnVybCgpKTtcclxuICAgICAgICByZXR1cm4gc3RyID8gc3RyLnN1YnN0cigxKSA6IFwiXCI7XHJcbiAgICB9XHJcbiAgICBfam9pbihwYXRoLCBraWRzKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgICAgIGlmIChwYXRoID09PSBudWxsKSB7IC8vIGNoYW5nZSBvZiBwYXJhbWV0ZXJzLCByb3V0ZSBlbGVtZW50cyBhcmUgbm90IGFmZmVjdGVkXHJcbiAgICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9sZCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgICAgIHVybCA9IG9sZC5zbGljZSgwLCB0aGlzLmluZGV4ICsgKGtpZHMgPyB0aGlzLl9uZXh0IDogMCkpO1xyXG4gICAgICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybC5jb25jYXQocGFyc2UocGF0aCkpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVybC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFtpXS52aWV3ID0gb2xkW2ldLnZpZXc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkW2ldICYmIHVybFtpXS5wYWdlID09PSBvbGRbaV0ucGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybFtpXS5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcbiAgICBhcHBlbmQocGF0aCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuX2pvaW4ocGF0aCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXRoID0gdXJsMnN0cih1cmwpO1xyXG4gICAgICAgIHRoaXMucm91dGUudXJsID0gdXJsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnBhdGg7XHJcbiAgICB9XHJcbiAgICBzaG93KHBhdGgsIHZpZXcsIGtpZHMpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9qb2luKHBhdGgsIGtpZHMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVkaXJlY3QgPSB1cmwyc3RyKHVybCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0LFxyXG4gICAgICAgICAgICAgICAgY29uZmlybTogUHJvbWlzZS5yZXNvbHZlKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY29uc3QgYXBwID0gdmlldyA/IHZpZXcuYXBwIDogbnVsbDtcclxuICAgICAgICAgICAgLy8gd2hlbiBjcmVhdGluZyBhIG5ldyByb3V0ZSwgaXQgcG9zc2libGUgdGhhdCBpdCB3aWxsIG5vdCBoYXZlIGFueSBjb250ZW50XHJcbiAgICAgICAgICAgIC8vIGd1YXJkIGlzIG5vdCBuZWNlc3NhcnkgaW4gc3VjaCBjYXNlXHJcbiAgICAgICAgICAgIGlmIChhcHApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGFwcC5jYWxsRXZlbnQoXCJhcHA6Z3VhcmRcIiwgW29iai5yZWRpcmVjdCwgdmlldywgb2JqXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmouY29uZmlybS5jYXRjaCgoKSA9PiBvYmoucmVkaXJlY3QgPSBudWxsKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmoucmVkaXJlY3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWooKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLnJlZGlyZWN0ICE9PSByZWRpcmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC5zaG93KG9iai5yZWRpcmVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZS5wYXRoID0gcmVkaXJlY3Q7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlLnVybCA9IHVybDtcclxuICAgICAgICAgICAgICAgIHJlcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNpemUobikge1xyXG4gICAgICAgIHRoaXMuX25leHQgPSBuO1xyXG4gICAgfVxyXG4gICAgc3BsaXQoKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSB7XHJcbiAgICAgICAgICAgIHVybDogdGhpcy5yb3V0ZS51cmwuc2xpY2UodGhpcy5pbmRleCArIDEpLFxyXG4gICAgICAgICAgICBwYXRoOiBcIlwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocm91dGUudXJsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByb3V0ZS5wYXRoID0gdXJsMnN0cihyb3V0ZS51cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFJvdXRlKHJvdXRlLCAwKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZShuYW1lLCB2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICBjb25zdCBjaHVuayA9IHRoaXMucm91dGUudXJsW3RoaXMuaW5kZXggKyAoaW5kZXggfHwgMCldO1xyXG4gICAgICAgIGlmICghY2h1bmspIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZS51cmwucHVzaCh7IHBhZ2U6IFwiXCIsIHBhcmFtczoge30gfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZShuYW1lLCB2YWx1ZSwgaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBjaHVuay5wYWdlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjaHVuay5wYXJhbXNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXRoID0gdXJsMnN0cih0aGlzLnJvdXRlLnVybCk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgSmV0VmlldyBleHRlbmRzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoYXBwLCBjb25maWcpIHtcclxuICAgICAgICBzdXBlcihhcHAud2ViaXgpO1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgIC8vdGhpcy4kY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XHJcbiAgICB9XHJcbiAgICB1aSh1aSwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNvbmZpZy5jb250YWluZXIgfHwgdWkuY29udGFpbmVyO1xyXG4gICAgICAgIGNvbnN0IGpldHZpZXcgPSB0aGlzLmFwcC5jcmVhdGVWaWV3KHVpKTtcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKGpldHZpZXcpO1xyXG4gICAgICAgIGpldHZpZXcucmVuZGVyKGNvbnRhaW5lciwgdGhpcy5fc2VnbWVudCwgdGhpcyk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1aSAhPT0gXCJvYmplY3RcIiB8fCAodWkgaW5zdGFuY2VvZiBKZXRCYXNlKSkge1xyXG4gICAgICAgICAgICAvLyByYXcgd2ViaXggVUlcclxuICAgICAgICAgICAgcmV0dXJuIGpldHZpZXc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gamV0dmlldy5nZXRSb290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvdyhwYXRoLCBjb25maWcpIHtcclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgLy8gY29udmVydCBwYXJhbWV0ZXJzIG9iamVjdCB0byB1cmxcclxuICAgICAgICBpZiAodHlwZW9mIHBhdGggPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcGF0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJhbShrZXksIHBhdGhba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGF0aCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBkZWxpZ2F0ZSB0byBhcHAgaW4gY2FzZSBvZiByb290IHByZWZpeFxyXG4gICAgICAgICAgICBpZiAocGF0aC5zdWJzdHIoMCwgMSkgPT09IFwiL1wiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhwYXRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsb2NhbCBwYXRoLCBkbyBub3RoaW5nXHJcbiAgICAgICAgICAgIGlmIChwYXRoLmluZGV4T2YoXCIuL1wiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHBhcmVudCBwYXRoLCBjYWxsIHBhcmVudCB2aWV3XHJcbiAgICAgICAgICAgIGlmIChwYXRoLmluZGV4T2YoXCIuLi9cIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50VmlldygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuc2hvdyhwYXRoLnN1YnN0cigzKSwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcC5zaG93KFwiL1wiICsgcGF0aC5zdWJzdHIoMykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuZ2V0U3ViVmlld0luZm8oY29uZmlnLnRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWIucGFyZW50ICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1Yi5wYXJlbnQuc2hvdyhwYXRoLCBjb25maWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY29uZmlnLnRhcmdldCAmJiBjb25maWcudGFyZ2V0ICE9PSBcImRlZmF1bHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJGcmFtZUxvY2soY29uZmlnLnRhcmdldCwgc3ViLnN1YnZpZXcsIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhcIi9cIiArIHBhdGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9zaG93KHRoaXMuX3NlZ21lbnQsIHBhdGgsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgX3Nob3coc2VnbWVudCwgcGF0aCwgdmlldykge1xyXG4gICAgICAgIHJldHVybiBzZWdtZW50LnNob3cocGF0aCwgdmlldywgdHJ1ZSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRfdXJsX2RhdGEoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VybENoYW5nZSgpO1xyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VnbWVudC5yb3V0ZS5saW5rUm91dGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5nZXRSb3V0ZXIoKS5zZXQoc2VnbWVudC5yb3V0ZS5wYXRoLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDpyb3V0ZVwiLCBbc2VnbWVudC5yb3V0ZS5wYXRoXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXQoXyR2aWV3LCBfJCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIHJlYWR5KF8kdmlldywgXyR1cmwpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICBjb25maWcoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAud2ViaXgubWVzc2FnZShcIlZpZXc6Q29uZmlnIGlzIG5vdCBpbXBsZW1lbnRlZFwiKTtcclxuICAgIH1cclxuICAgIHVybENoYW5nZShfJHZpZXcsIF8kdXJsKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lLaWRzKCk7XHJcbiAgICAgICAgLy8gZGVzdHJveSBhY3R1YWwgVUlcclxuICAgICAgICB0aGlzLl9yb290LmRlc3RydWN0b3IoKTtcclxuICAgICAgICBzdXBlci5kZXN0cnVjdG9yKCk7XHJcbiAgICB9XHJcbiAgICB1c2UocGx1Z2luLCBjb25maWcpIHtcclxuICAgICAgICBwbHVnaW4odGhpcy5hcHAsIHRoaXMsIGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKCk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveUtpZHMoKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95U3VicygpO1xyXG4gICAgICAgIHRoaXMuX2RldGFjaEV2ZW50cygpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIudGFnTmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yb290LmRlc3RydWN0b3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudC5yZWZyZXNoKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcih0aGlzLl9zZWdtZW50KTtcclxuICAgIH1cclxuICAgIHJlbmRlcihyb290LCB1cmwsIHBhcmVudCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHVybCA9IG5ldyBSb3V0ZSh1cmwsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zZWdtZW50ID0gdXJsO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLl9pbml0X3VybF9kYXRhKCk7XHJcbiAgICAgICAgcm9vdCA9IHJvb3QgfHwgZG9jdW1lbnQuYm9keTtcclxuICAgICAgICBjb25zdCBfY29udGFpbmVyID0gKHR5cGVvZiByb290ID09PSBcInN0cmluZ1wiKSA/IHRoaXMud2ViaXgudG9Ob2RlKHJvb3QpIDogcm9vdDtcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyICE9PSBfY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IF9jb250YWluZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIodXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKS50aGVuKCgpID0+IHRoaXMuZ2V0Um9vdCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyKHVybCkge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnKCk7XHJcbiAgICAgICAgaWYgKGNvbmZpZy50aGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25maWcudGhlbihjZmcgPT4gdGhpcy5fcmVuZGVyX2ZpbmFsKGNmZywgdXJsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyX2ZpbmFsKGNvbmZpZywgdXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfcmVuZGVyX2ZpbmFsKGNvbmZpZywgdXJsKSB7XHJcbiAgICAgICAgLy8gZ2V0IHByZXZpb3VzIHZpZXcgaW4gdGhlIHNhbWUgc2xvdFxyXG4gICAgICAgIGxldCBzbG90ID0gbnVsbDtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gbnVsbDtcclxuICAgICAgICBsZXQgc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5fY29udGFpbmVyLnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgc2xvdCA9IHRoaXMuX2NvbnRhaW5lcjtcclxuICAgICAgICAgICAgaWYgKHNsb3QucG9wdXApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgICAgICAgICBzaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMud2ViaXguJCQoc2xvdC5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IHRoaXMuX2NvbnRhaW5lcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdmlldyBhbHJlYWR5IGRlc3Ryb3llZFxyXG4gICAgICAgIGlmICghdGhpcy5hcHAgfHwgIWNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXNwb25zZTtcclxuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5fc2VnbWVudC5jdXJyZW50KCk7XHJcbiAgICAgICAgLy8gdXNpbmcgd3JhcHBlciBvYmplY3QsIHNvIHVpIGNhbiBiZSBjaGFuZ2VkIGZyb20gYXBwOnJlbmRlciBldmVudFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHsgdWk6IHt9IH07XHJcbiAgICAgICAgdGhpcy5hcHAuY29weUNvbmZpZyhjb25maWcsIHJlc3VsdC51aSwgdGhpcy5fc3Vicyk7XHJcbiAgICAgICAgdGhpcy5hcHAuY2FsbEV2ZW50KFwiYXBwOnJlbmRlclwiLCBbdGhpcywgdXJsLCByZXN1bHRdKTtcclxuICAgICAgICByZXN1bHQudWkuJHNjb3BlID0gdGhpcztcclxuICAgICAgICAvKiBkZXN0cm95IG9sZCBIVE1MIGF0dGFjaGVkIHZpZXdzIGJlZm9yZSBjcmVhdGluZyBuZXcgb25lICovXHJcbiAgICAgICAgaWYgKCFzbG90ICYmIGN1cnJlbnQuaXNOZXcgJiYgY3VycmVudC52aWV3KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFkZGluZyBpbnNpZGUgb2YgbXVsdGl2aWV3IC0gcHJlc2VydmUgb2xkIGlkXHJcbiAgICAgICAgICAgIGlmIChzbG90ICYmICFzaG93KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGR1aSA9IGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG9sZHVpLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50Lm5hbWUgPT09IFwibXVsdGl2aWV3XCIgJiYgIXJlc3VsdC51aS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC51aS5pZCA9IG9sZHVpLmNvbmZpZy5pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9yb290ID0gdGhpcy5hcHAud2ViaXgudWkocmVzdWx0LnVpLCBjb250YWluZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBhc1dpbiA9IHRoaXMuX3Jvb3Q7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciB1cmwgYWRkZWQgdG8gaWdub3JlIHRoaXMudWkgY2FsbHNcclxuICAgICAgICAgICAgaWYgKHNob3cgJiYgYXNXaW4uc2V0UG9zaXRpb24gJiYgIWFzV2luLmlzVmlzaWJsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhc1dpbi5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY2hlY2ssIGlmIHdlIGFyZSByZXBsYWNpbmcgc29tZSBvbGRlciB2aWV3XHJcbiAgICAgICAgICAgIGlmIChzbG90KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xvdC52aWV3ICYmIHNsb3QudmlldyAhPT0gdGhpcyAmJiBzbG90LnZpZXcgIT09IHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdC52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNsb3QuaWQgPSB0aGlzLl9yb290LmNvbmZpZy5pZDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldFBhcmVudFZpZXcoKSB8fCAhdGhpcy5hcHAuYXBwKVxyXG4gICAgICAgICAgICAgICAgICAgIHNsb3QudmlldyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHdlIGhhdmUgc3ViYXBwLCBzZXQgd2hvbGUgYXBwIGFzIGEgdmlld1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIG9uIGRlc3RydWN0aW9uLCB0aGUgd2hvbGUgYXBwIHdpbGwgYmUgZGVzdHJveWVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdC52aWV3ID0gdGhpcy5hcHA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQuaXNOZXcpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQudmlldyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LmlzTmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBQcm9taXNlLnJlc29sdmUodGhpcy5faW5pdCh0aGlzLl9yb290LCB1cmwpKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0VXJsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWFkeSh0aGlzLl9yb290LCB1cmwuc3VidXJsKCkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IFByb21pc2UucmVqZWN0KGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuY2F0Y2goZXJyID0+IHRoaXMuX2luaXRFcnJvcih0aGlzLCBlcnIpKTtcclxuICAgIH1cclxuICAgIF9pbml0KHZpZXcsIHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluaXQodmlldywgdXJsLnN1YnVybCgpKTtcclxuICAgIH1cclxuICAgIF91cmxDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAuY2FsbEV2ZW50KFwiYXBwOnVybGNoYW5nZVwiLCBbdGhpcywgdGhpcy5fc2VnbWVudF0pO1xyXG4gICAgICAgIGNvbnN0IHdhaXRzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5fc3Vicykge1xyXG4gICAgICAgICAgICBjb25zdCBmcmFtZSA9IHRoaXMuX3N1YnNba2V5XTtcclxuICAgICAgICAgICAgY29uc3Qgd2FpdCA9IHRoaXMuX3JlbmRlckZyYW1lTG9jayhrZXksIGZyYW1lLCBudWxsKTtcclxuICAgICAgICAgICAgaWYgKHdhaXQpIHtcclxuICAgICAgICAgICAgICAgIHdhaXRzLnB1c2god2FpdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHdhaXRzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXJsQ2hhbmdlKHRoaXMuX3Jvb3QsIHRoaXMuX3NlZ21lbnQuc3VidXJsKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX3JlbmRlckZyYW1lTG9jayhrZXksIGZyYW1lLCBwYXRoKSB7XHJcbiAgICAgICAgLy8gaWYgc3VidmlldyBpcyBub3Qgb2NjdXBpZWQgYnkgc29tZSByZW5kZXJpbmcgeWV0XHJcbiAgICAgICAgaWYgKCFmcmFtZS5sb2NrKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHJlaXZlIGFuZCBzdG9yZSByZW5kZXJpbmcgZW5kIHByb21pc2VcclxuICAgICAgICAgICAgY29uc3QgbG9jayA9IHRoaXMuX3JlbmRlckZyYW1lKGtleSwgZnJhbWUsIHBhdGgpO1xyXG4gICAgICAgICAgICBpZiAobG9jaykge1xyXG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgbG9jayBhZnRlciBmcmFtZSByZW5kZXJpbmdcclxuICAgICAgICAgICAgICAgIC8vIGFzIHByb21pc2UuZmluYWxseSBpcyBub3Qgc3VwcG9ydGVkIGJ5ICBXZWJpeCBsZXNzZXIgdGhhbiA2LjJcclxuICAgICAgICAgICAgICAgIC8vIHVzaW5nIGEgbW9yZSB2ZXJib3NlIG5vdGF0aW9uXHJcbiAgICAgICAgICAgICAgICBmcmFtZS5sb2NrID0gbG9jay50aGVuKCgpID0+IGZyYW1lLmxvY2sgPSBudWxsLCAoKSA9PiBmcmFtZS5sb2NrID0gbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV0dXJuIHJlbmRlcmluZyBlbmQgcHJvbWlzZVxyXG4gICAgICAgIHJldHVybiBmcmFtZS5sb2NrO1xyXG4gICAgfVxyXG4gICAgX3JlbmRlckZyYW1lKGtleSwgZnJhbWUsIHBhdGgpIHtcclxuICAgICAgICAvL2RlZmF1bHQgcm91dGVcclxuICAgICAgICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2VnbWVudC5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBuZXh0IHNlZ21lbnQgaW4gdXJsLCByZW5kZXIgaXRcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCB0aGlzLl9zZWdtZW50LnNoaWZ0KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZyYW1lLnZpZXcgJiYgZnJhbWUucG9wdXApIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoZXJlIGlzIG5vIG5leHQgc2VnbWVudCwgZGVsZXRlIHRoZSBleGlzdGluZyBzdWItdmlld1xyXG4gICAgICAgICAgICAgICAgZnJhbWUudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICBmcmFtZS52aWV3ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmIG5ldyBwYXRoIHByb3ZpZGVkLCBzZXQgaXQgdG8gdGhlIGZyYW1lXHJcbiAgICAgICAgaWYgKHBhdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZnJhbWUudXJsID0gcGF0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaW4gY2FzZSBvZiByb3V0ZWQgc3ViLXZpZXdcclxuICAgICAgICBpZiAoZnJhbWUucm91dGUpIHtcclxuICAgICAgICAgICAgLy8gd2UgaGF2ZSBhIG5ldyBwYXRoIGZvciBzdWItdmlld1xyXG4gICAgICAgICAgICBpZiAocGF0aCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZyYW1lLnJvdXRlLnNob3cocGF0aCwgZnJhbWUudmlldykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVN1YlZpZXcoZnJhbWUsIGZyYW1lLnJvdXRlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGRvIG5vdCB0cmlnZ2VyIG9uQ2hhbmdlIGZvciBpc29sYXRlZCBzdWItdmlld3NcclxuICAgICAgICAgICAgaWYgKGZyYW1lLmJyYW5jaCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2aWV3ID0gZnJhbWUudmlldztcclxuICAgICAgICAvLyBpZiB2aWV3IGRvZXNuJ3QgZXhpc3RzIHlldCwgaW5pdCBpdFxyXG4gICAgICAgIGlmICghdmlldyAmJiBmcmFtZS51cmwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmcmFtZS51cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIHN0cmluZywgc28gd2UgaGF2ZSBpc29sYXRlZCBzdWJ2aWV3IHVybFxyXG4gICAgICAgICAgICAgICAgZnJhbWUucm91dGUgPSBuZXcgUm91dGUoZnJhbWUudXJsLCAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCBmcmFtZS5yb3V0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvYmplY3QsIHNvIHdlIGhhdmUgYW4gZW1iZWRlZCBzdWJ2aWV3XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZyYW1lLnVybCA9PT0gXCJmdW5jdGlvblwiICYmICEodmlldyBpbnN0YW5jZW9mIGZyYW1lLnVybCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3ID0gbmV3IGZyYW1lLnVybCh0aGlzLmFwcCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3ID0gZnJhbWUudXJsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRyaWdnZXIgb25DaGFuZ2UgZm9yIGFscmVhZHkgZXhpc3RlZCB2aWV3XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcucmVuZGVyKGZyYW1lLCAoZnJhbWUucm91dGUgfHwgdGhpcy5fc2VnbWVudCksIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9pbml0RXJyb3IodmlldywgZXJyKSB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgaWYgdmlldyBpcyBkZXN0cm95ZWQsIGlnbm9yZSBhbnkgdmlldyByZWxhdGVkIGVycm9yc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwLmVycm9yKFwiYXBwOmVycm9yOmluaXR2aWV3XCIsIFtlcnIsIHZpZXddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBfY3JlYXRlU3ViVmlldyhzdWIsIHN1YnVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcC5jcmVhdGVGcm9tVVJMKHN1YnVybC5jdXJyZW50KCksIHN1Yi52aWV3KS50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldy5yZW5kZXIoc3ViLCBzdWJ1cmwsIHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX2Rlc3Ryb3lLaWRzKCkge1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgY2hpbGQgdmlld3NcclxuICAgICAgICBjb25zdCB1aXMgPSB0aGlzLl9jaGlsZHJlbjtcclxuICAgICAgICBmb3IgKGxldCBpID0gdWlzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmICh1aXNbaV0gJiYgdWlzW2ldLmRlc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHVpc1tpXS5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVzZXQgdmFycyBmb3IgYmV0dGVyIEdDIHByb2Nlc3NpbmdcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG59XG5cbi8vIHdyYXBwZXIgZm9yIHJhdyBvYmplY3RzIGFuZCBKZXQgMS54IHN0cnVjdHNcclxuY2xhc3MgSmV0Vmlld1JhdyBleHRlbmRzIEpldFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoYXBwLCBjb25maWcpIHtcclxuICAgICAgICBzdXBlcihhcHAsIGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5fdWkgPSBjb25maWcudWk7XHJcbiAgICB9XHJcbiAgICBjb25maWcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIFN1YlJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgY29uZmlnLCBhcHApIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuYXBwO1xyXG4gICAgICAgIGEuYXBwLmdldFJvdXRlcigpLnNldChhLl9zZWdtZW50LmFwcGVuZCh0aGlzLnBhdGgpLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXRoO1xyXG4gICAgfVxyXG59XG5cbmxldCBfb25jZSA9IHRydWU7XHJcbmNsYXNzIEpldEFwcEJhc2UgZXh0ZW5kcyBKZXRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IHdlYml4ID0gKGNvbmZpZyB8fCB7fSkud2ViaXggfHwgd2luZG93LndlYml4O1xyXG4gICAgICAgIHN1cGVyKHdlYml4KTtcclxuICAgICAgICAvLyBpbml0IGNvbmZpZ1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy53ZWJpeC5leHRlbmQoe1xyXG4gICAgICAgICAgICBuYW1lOiBcIkFwcFwiLFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiBcIjEuMFwiLFxyXG4gICAgICAgICAgICBzdGFydDogXCIvaG9tZVwiXHJcbiAgICAgICAgfSwgY29uZmlnLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmFwcCA9IHRoaXMuY29uZmlnLmFwcDtcclxuICAgICAgICB0aGlzLnJlYWR5ID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZXMgPSB7fTtcclxuICAgICAgICB0aGlzLndlYml4LmV4dGVuZCh0aGlzLCB0aGlzLndlYml4LkV2ZW50U3lzdGVtKTtcclxuICAgIH1cclxuICAgIGdldFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ViU2VnbWVudC5zdWJ1cmwoKTtcclxuICAgIH1cclxuICAgIGdldFVybFN0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ViU2VnbWVudC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZ2V0U2VydmljZShuYW1lKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHRoaXMuX3NlcnZpY2VzW25hbWVdO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgb2JqID0gdGhpcy5fc2VydmljZXNbbmFtZV0gPSBvYmoodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICBzZXRTZXJ2aWNlKG5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlc1tuYW1lXSA9IGhhbmRsZXI7XHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0U3ViVmlldygpLmRlc3RydWN0b3IoKTtcclxuICAgICAgICBzdXBlci5kZXN0cnVjdG9yKCk7XHJcbiAgICB9XHJcbiAgICAvLyBjb3B5IG9iamVjdCBhbmQgY29sbGVjdCBleHRyYSBoYW5kbGVyc1xyXG4gICAgY29weUNvbmZpZyhvYmosIHRhcmdldCwgY29uZmlnKSB7XHJcbiAgICAgICAgLy8gcmF3IHVpIGNvbmZpZ1xyXG4gICAgICAgIGlmIChvYmogaW5zdGFuY2VvZiBKZXRCYXNlIHx8XHJcbiAgICAgICAgICAgICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEJhc2UpKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHsgJHN1YnZpZXc6IG9iaiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzdWJ2aWV3IHBsYWNlaG9sZGVyXHJcbiAgICAgICAgaWYgKHR5cGVvZiBvYmouJHN1YnZpZXcgIT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRTdWJWaWV3KG9iaiwgdGFyZ2V0LCBjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwcm9jZXNzIHN1Yi1wcm9wZXJ0aWVzXHJcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IChvYmogaW5zdGFuY2VvZiBBcnJheSA/IFtdIDoge30pO1xyXG4gICAgICAgIGZvciAoY29uc3QgbWV0aG9kIGluIG9iaikge1xyXG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBvYmpbbWV0aG9kXTtcclxuICAgICAgICAgICAgLy8gdmlldyBjbGFzc1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBvaW50ID09PSBcImZ1bmN0aW9uXCIgJiYgcG9pbnQucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QmFzZSkge1xyXG4gICAgICAgICAgICAgICAgcG9pbnQgPSB7ICRzdWJ2aWV3OiBwb2ludCB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwb2ludCAmJiB0eXBlb2YgcG9pbnQgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgICAgICEocG9pbnQgaW5zdGFuY2VvZiB0aGlzLndlYml4LkRhdGFDb2xsZWN0aW9uKSAmJiAhKHBvaW50IGluc3RhbmNlb2YgUmVnRXhwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBvaW50IGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFttZXRob2RdID0gbmV3IERhdGUocG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY29weUNvbmZpZyhwb2ludCwgKHBvaW50IGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9KSwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29weSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IGNvcHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBwb2ludDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgZ2V0Um91dGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRyb3V0ZXI7XHJcbiAgICB9XHJcbiAgICBjbGlja0hhbmRsZXIoZSkge1xyXG4gICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IChlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyaWdnZXIgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidHJpZ2dlclwiKTtcclxuICAgICAgICAgICAgICAgIGlmICh0cmlnZ2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yVmlldyh0YXJnZXQsIHZpZXcgPT4gdmlldy5hcHAudHJpZ2dlcih0cmlnZ2VyKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJyb3V0ZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb3V0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvclZpZXcodGFyZ2V0LCB2aWV3ID0+IHZpZXcuc2hvdyhyb3V0ZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0Um9vdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdWJWaWV3KCkuZ2V0Um9vdCgpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3N1YlNlZ21lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViVmlldygpLnJlZnJlc2goKS50aGVuKHZpZXcgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxFdmVudChcImFwcDpyb3V0ZVwiLCBbdGhpcy5nZXRVcmwoKV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxvYWRWaWV3KHVybCkge1xyXG4gICAgICAgIGNvbnN0IHZpZXdzID0gdGhpcy5jb25maWcudmlld3M7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHVybCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2xvYWRFcnJvcihcIlwiLCBuZXcgRXJyb3IoXCJXZWJpeCBKZXQ6IEVtcHR5IHVybCBzZWdtZW50XCIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh2aWV3cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2aWV3cyA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY3VzdG9tIGxvYWRpbmcgc3RyYXRlZ3lcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB2aWV3cyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJlZGVmaW5lZCBoYXNoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmlld3NbdXJsXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1cmwgPT09IFwiX2JsYW5rXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2xvYWRWaWV3RHluYW1pYyh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2xvYWRFcnJvcih1cmwsIGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjdXN0b20gaGFuZGxlciBjYW4gcmV0dXJuIHZpZXcgb3IgaXRzIHByb21pc2VcclxuICAgICAgICBpZiAoIXJlc3VsdC50aGVuKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZXQgZXJyb3IgaGFuZGxlclxyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdFxyXG4gICAgICAgICAgICAudGhlbihtb2R1bGUgPT4gbW9kdWxlLl9fZXNNb2R1bGUgPyBtb2R1bGUuZGVmYXVsdCA6IG1vZHVsZSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLl9sb2FkRXJyb3IodXJsLCBlcnIpKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgX2ZvclZpZXcodGFyZ2V0LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IHRoaXMud2ViaXguJCQodGFyZ2V0KTtcclxuICAgICAgICBpZiAodmlldykge1xyXG4gICAgICAgICAgICBoYW5kbGVyKHZpZXcuJHNjb3BlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfbG9hZFZpZXdEeW5hbWljKHVybCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlRnJvbVVSTChjaHVuaywgbm93KSB7XHJcbiAgICAgICAgbGV0IHZpZXc7XHJcbiAgICAgICAgaWYgKGNodW5rLmlzTmV3IHx8ICFjaHVuay52aWV3KSB7XHJcbiAgICAgICAgICAgIHZpZXcgPSB0aGlzLmxvYWRWaWV3KGNodW5rLnBhZ2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbih1aSA9PiB0aGlzLmNyZWF0ZVZpZXcodWksIG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXcgPSBQcm9taXNlLnJlc29sdmUoY2h1bmsudmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2aWV3O1xyXG4gICAgfVxyXG4gICAgY3JlYXRlVmlldyh1aSwgbmFtZSkge1xyXG4gICAgICAgIGxldCBvYmo7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1aSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGlmICh1aS5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRBcHBCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBVSSBjbGFzc1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB1aSh7IGFwcDogdGhpcywgbmFtZSwgcm91dGVyOiBTdWJSb3V0ZXIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodWkucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QmFzZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVUkgY2xhc3NcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdWkodGhpcywgeyBuYW1lIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gVUkgZmFjdG9yeSBmdW5jdGlvbnNcclxuICAgICAgICAgICAgICAgIHVpID0gdWkodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVpIGluc3RhbmNlb2YgSmV0QmFzZSkge1xyXG4gICAgICAgICAgICBvYmogPSB1aTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFVJIG9iamVjdFxyXG4gICAgICAgICAgICBvYmogPSBuZXcgSmV0Vmlld1Jhdyh0aGlzLCB7IG5hbWUsIHVpIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgLy8gc2hvdyB2aWV3IHBhdGhcclxuICAgIHNob3codXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMuX2NvbnRhaW5lciwgKHVybCB8fCB0aGlzLmNvbmZpZy5zdGFydCkpO1xyXG4gICAgfVxyXG4gICAgLy8gZXZlbnQgaGVscGVyc1xyXG4gICAgdHJpZ2dlcihuYW1lLCAuLi5yZXN0KSB7XHJcbiAgICAgICAgdGhpcy5hcHBseShuYW1lLCByZXN0KTtcclxuICAgIH1cclxuICAgIGFwcGx5KG5hbWUsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLmNhbGxFdmVudChuYW1lLCBkYXRhKTtcclxuICAgIH1cclxuICAgIGFjdGlvbihuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2ViaXguYmluZChmdW5jdGlvbiAoLi4ucmVzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5KG5hbWUsIHJlc3QpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb24obmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuYXR0YWNoRXZlbnQobmFtZSwgaGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICB1c2UocGx1Z2luLCBjb25maWcpIHtcclxuICAgICAgICBwbHVnaW4odGhpcywgbnVsbCwgY29uZmlnKTtcclxuICAgIH1cclxuICAgIGVycm9yKG5hbWUsIGVyKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnQobmFtZSwgZXIpO1xyXG4gICAgICAgIHRoaXMuY2FsbEV2ZW50KFwiYXBwOmVycm9yXCIsIGVyKTtcclxuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5kZWJ1Zykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyW2ldKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcltpXSBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRleHQgPSBlcltpXS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YoXCJNb2R1bGUgYnVpbGQgZmFpbGVkXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xceDFiXFxbWzAtOTtdKm0vZywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gYDxwcmUgc3R5bGU9J2ZvbnQtc2l6ZToxNnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM2ODczOyBjb2xvcjogIzAwMDsgcGFkZGluZzoxMHB4Oyc+JHt0ZXh0fTwvcHJlPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICs9IFwiPGJyPjxicj5DaGVjayBjb25zb2xlIGZvciBtb3JlIGRldGFpbHNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5tZXNzYWdlKHsgdHlwZTogXCJlcnJvclwiLCB0ZXh0OiB0ZXh0LCBleHBpcmU6IC0xIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogdHNsaW50OmVuYWJsZSAqL1xyXG4gICAgfVxyXG4gICAgLy8gcmVuZGVycyB0b3Agdmlld1xyXG4gICAgcmVuZGVyKHJvb3QsIHVybCwgcGFyZW50KSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gKHR5cGVvZiByb290ID09PSBcInN0cmluZ1wiKSA/XHJcbiAgICAgICAgICAgIHRoaXMud2ViaXgudG9Ob2RlKHJvb3QpIDpcclxuICAgICAgICAgICAgKHJvb3QgfHwgZG9jdW1lbnQuYm9keSk7XHJcbiAgICAgICAgY29uc3QgZmlyc3RJbml0ID0gIXRoaXMuJHJvdXRlcjtcclxuICAgICAgICBsZXQgcGF0aCA9IG51bGw7XHJcbiAgICAgICAgaWYgKGZpcnN0SW5pdCkge1xyXG4gICAgICAgICAgICBpZiAoX29uY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguYXR0YWNoRXZlbnQoXCJvbkNsaWNrXCIsIGUgPT4gdGhpcy5jbGlja0hhbmRsZXIoZSkpO1xyXG4gICAgICAgICAgICAgICAgX29uY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgdXJsID0gbmV3IFJvdXRlKHVybCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fc3ViU2VnbWVudCA9IHRoaXMuX2ZpcnN0X3N0YXJ0KHVybCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YlNlZ21lbnQucm91dGUubGlua1JvdXRlciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IHVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB1cmwuc3BsaXQoKS5yb3V0ZS5wYXRoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IHVybC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRvcCA9IHRoaXMuZ2V0U3ViVmlldygpO1xyXG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSB0aGlzLl9zdWJTZWdtZW50O1xyXG4gICAgICAgIGNvbnN0IHJlYWR5ID0gc2VnbWVudC5zaG93KHBhdGgsIHRvcClcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5jcmVhdGVGcm9tVVJMKHNlZ21lbnQuY3VycmVudCgpLCB0b3ApKVxyXG4gICAgICAgICAgICAudGhlbih2aWV3ID0+IHZpZXcucmVuZGVyKHJvb3QsIHNlZ21lbnQpKVxyXG4gICAgICAgICAgICAudGhlbihiYXNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnNldChzZWdtZW50LnJvdXRlLnBhdGgsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxFdmVudChcImFwcDpyb3V0ZVwiLCBbdGhpcy5nZXRVcmwoKV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gYmFzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlYWR5ID0gdGhpcy5yZWFkeS50aGVuKCgpID0+IHJlYWR5KTtcclxuICAgICAgICByZXR1cm4gcmVhZHk7XHJcbiAgICB9XHJcbiAgICBnZXRTdWJWaWV3KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdWJTZWdtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJTZWdtZW50LmN1cnJlbnQoKS52aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEpldFZpZXcodGhpcywge30pO1xyXG4gICAgfVxyXG4gICAgX2ZpcnN0X3N0YXJ0KHJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudCA9IHJvdXRlO1xyXG4gICAgICAgIGNvbnN0IGNiID0gKGEpID0+IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3coYSk7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyID0gbmV3ICh0aGlzLmNvbmZpZy5yb3V0ZXIpKGNiLCB0aGlzLmNvbmZpZywgdGhpcyk7XHJcbiAgICAgICAgLy8gc3RhcnQgYW5pbWF0aW9uIGZvciB0b3AtbGV2ZWwgYXBwXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciA9PT0gZG9jdW1lbnQuYm9keSAmJiB0aGlzLmNvbmZpZy5hbmltYXRpb24gIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5hZGRDc3Mobm9kZSwgXCJ3ZWJpeGFwcHN0YXJ0XCIpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5yZW1vdmVDc3Mobm9kZSwgXCJ3ZWJpeGFwcHN0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWJpeC5odG1sLmFkZENzcyhub2RlLCBcIndlYml4YXBwXCIpO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcm91dGUpIHtcclxuICAgICAgICAgICAgLy8gaWYgbm8gdXJsIGRlZmluZWQsIGNoZWNrIHJvdXRlciBmaXJzdFxyXG4gICAgICAgICAgICBsZXQgdXJsU3RyaW5nID0gdGhpcy4kcm91dGVyLmdldCgpO1xyXG4gICAgICAgICAgICBpZiAoIXVybFN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgdXJsU3RyaW5nID0gdGhpcy5jb25maWcuc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIuc2V0KHVybFN0cmluZywgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcm91dGUgPSBuZXcgUm91dGUodXJsU3RyaW5nLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5hcHApIHtcclxuICAgICAgICAgICAgcm91dGUuY3VycmVudCgpLnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAocm91dGUubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZSA9IHJvdXRlLnNwbGl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZSA9IG5ldyBSb3V0ZSh0aGlzLmNvbmZpZy5zdGFydCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgfVxyXG4gICAgLy8gZXJyb3IgZHVyaW5nIHZpZXcgcmVzb2x2aW5nXHJcbiAgICBfbG9hZEVycm9yKHVybCwgZXJyKSB7XHJcbiAgICAgICAgdGhpcy5lcnJvcihcImFwcDplcnJvcjpyZXNvbHZlXCIsIFtlcnIsIHVybF0pO1xyXG4gICAgICAgIHJldHVybiB7IHRlbXBsYXRlOiBcIiBcIiB9O1xyXG4gICAgfVxyXG4gICAgYWRkU3ViVmlldyhvYmosIHRhcmdldCwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gb2JqLiRzdWJ2aWV3ICE9PSB0cnVlID8gb2JqLiRzdWJ2aWV3IDogbnVsbDtcclxuICAgICAgICBjb25zdCBuYW1lID0gb2JqLm5hbWUgfHwgKHVybCA/IHRoaXMud2ViaXgudWlkKCkgOiBcImRlZmF1bHRcIik7XHJcbiAgICAgICAgdGFyZ2V0LmlkID0gb2JqLmlkIHx8IFwic1wiICsgdGhpcy53ZWJpeC51aWQoKTtcclxuICAgICAgICBjb25zdCB2aWV3ID0gY29uZmlnW25hbWVdID0ge1xyXG4gICAgICAgICAgICBpZDogdGFyZ2V0LmlkLFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIGJyYW5jaDogb2JqLmJyYW5jaCxcclxuICAgICAgICAgICAgcG9wdXA6IG9iai5wb3B1cFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHZpZXcucG9wdXAgPyBudWxsIDogdGFyZ2V0O1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEhhc2hSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIHRoaXMuX2RldGVjdFByZWZpeCgpO1xyXG4gICAgICAgIHRoaXMuY2IgPSBjYjtcclxuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9ICgpID0+IHRoaXMuY2IodGhpcy5nZXQoKSk7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvdXRlcykge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wYXJlID0gcGF0aC5zcGxpdChcIj9cIiwgMik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uZmlnLnJvdXRlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvdXRlc1trZXldID09PSBjb21wYXJlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IGtleSArIChjb21wYXJlLmxlbmd0aCA+IDEgPyBcIj9cIiArIGNvbXBhcmVbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5nZXQoKSAhPT0gcGF0aCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgdGhpcy5wcmVmaXggKyB0aGlzLnN1Zml4ICsgcGF0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYihwYXRoKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIGxldCBwYXRoID0gdGhpcy5fZ2V0UmF3KCkucmVwbGFjZSh0aGlzLnByZWZpeCwgXCJcIikucmVwbGFjZSh0aGlzLnN1Zml4LCBcIlwiKTtcclxuICAgICAgICBwYXRoID0gcGF0aCAhPT0gXCIvXCIgPyBwYXRoIDogXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5jb25maWcucm91dGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmUgPSBwYXRoLnNwbGl0KFwiP1wiLCAyKTtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb25maWcucm91dGVzW2NvbXBhcmVbMF1dO1xyXG4gICAgICAgICAgICBpZiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBwYXRoID0ga2V5ICsgKGNvbXBhcmUubGVuZ3RoID4gMSA/IFwiP1wiICsgY29tcGFyZVsxXSA6IFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXRoO1xyXG4gICAgfVxyXG4gICAgX2RldGVjdFByZWZpeCgpIHtcclxuICAgICAgICAvLyB1c2UgXCIjIVwiIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcbiAgICAgICAgY29uc3Qgc3VmaXggPSB0aGlzLmNvbmZpZy5yb3V0ZXJQcmVmaXg7XHJcbiAgICAgICAgdGhpcy5zdWZpeCA9IFwiI1wiICsgKCh0eXBlb2Ygc3VmaXggPT09IFwidW5kZWZpbmVkXCIpID8gXCIhXCIgOiBzdWZpeCk7XHJcbiAgICAgICAgdGhpcy5wcmVmaXggPSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiLCAyKVswXTtcclxuICAgIH1cclxuICAgIF9nZXRSYXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB9XHJcbn1cblxubGV0IGlzUGF0Y2hlZCA9IGZhbHNlO1xyXG5mdW5jdGlvbiBwYXRjaCh3KSB7XHJcbiAgICBpZiAoaXNQYXRjaGVkIHx8ICF3KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaXNQYXRjaGVkID0gdHJ1ZTtcclxuICAgIC8vIGN1c3RvbSBwcm9taXNlIGZvciBJRThcclxuICAgIGNvbnN0IHdpbiA9IHdpbmRvdztcclxuICAgIGlmICghd2luLlByb21pc2UpIHtcclxuICAgICAgICB3aW4uUHJvbWlzZSA9IHcucHJvbWlzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHZlcnNpb24gPSB3LnZlcnNpb24uc3BsaXQoXCIuXCIpO1xyXG4gICAgLy8gd2lsbCBiZSBmaXhlZCBpbiB3ZWJpeCA1LjNcclxuICAgIGlmICh2ZXJzaW9uWzBdICogMTAgKyB2ZXJzaW9uWzFdICogMSA8IDUzKSB7XHJcbiAgICAgICAgdy51aS5mcmVlemUgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICAvLyBkaXNhYmxlZCBiZWNhdXNlIHdlYml4IGpldCA1LjAgY2FuJ3QgaGFuZGxlIHJlc2l6ZSBvZiBzY3JvbGx2aWV3IGNvcnJlY3RseVxyXG4gICAgICAgICAgICAvLyB3LnVpLiRmcmVlemUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBoYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnRoZW4pIHtcclxuICAgICAgICAgICAgICAgIHJlcy50aGVuKGZ1bmN0aW9uIChzb21lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdy51aS4kZnJlZXplID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdy51aS5yZXNpemUoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29tZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdy51aS4kZnJlZXplID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB3LnVpLnJlc2l6ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vIGFkZGluZyB2aWV3cyBhcyBjbGFzc2VzXHJcbiAgICBjb25zdCBiYXNlQWRkID0gdy51aS5iYXNlbGF5b3V0LnByb3RvdHlwZS5hZGRWaWV3O1xyXG4gICAgY29uc3QgYmFzZVJlbW92ZSA9IHcudWkuYmFzZWxheW91dC5wcm90b3R5cGUucmVtb3ZlVmlldztcclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICBhZGRWaWV3KHZpZXcsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS53ZWJpeEpldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QganZpZXcgPSB0aGlzLiRzY29wZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN1YnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIHZpZXcgPSBqdmlldy5hcHAuY29weUNvbmZpZyh2aWV3LCB7fSwgc3Vicyk7XHJcbiAgICAgICAgICAgICAgICBiYXNlQWRkLmFwcGx5KHRoaXMsIFt2aWV3LCBpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc3Vicykge1xyXG4gICAgICAgICAgICAgICAgICAgIGp2aWV3Ll9yZW5kZXJGcmFtZShrZXksIHN1YnNba2V5XSwgbnVsbCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp2aWV3Ll9zdWJzW2tleV0gPSBzdWJzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlldy5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiYXNlQWRkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZVZpZXcoKSB7XHJcbiAgICAgICAgICAgIGJhc2VSZW1vdmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLndlYml4SmV0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzID0gdGhpcy4kc2NvcGUuX3N1YnM7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBhbGwgc3ViLXZpZXdzLCBkZXN0cm95IGFuZCBjbGVhbiB0aGUgcmVtb3ZlZCBvbmVcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN1YnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0ID0gc3Vic1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdy4kJCh0ZXN0LmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXN0LnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3Vic1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB3LmV4dGVuZCh3LnVpLmxheW91dC5wcm90b3R5cGUsIGNvbmZpZywgdHJ1ZSk7XHJcbiAgICB3LmV4dGVuZCh3LnVpLmJhc2VsYXlvdXQucHJvdG90eXBlLCBjb25maWcsIHRydWUpO1xyXG4gICAgLy8gd3JhcHBlciBmb3IgdXNpbmcgSmV0IEFwcHMgYXMgdmlld3NcclxuICAgIHcucHJvdG9VSSh7XHJcbiAgICAgICAgbmFtZTogXCJqZXRhcHBcIixcclxuICAgICAgICAkaW5pdChjZmcpIHtcclxuICAgICAgICAgICAgdGhpcy4kYXBwID0gbmV3IHRoaXMuYXBwKGNmZyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdy51aWQoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBjZmcuYm9keSA9IHsgaWQgfTtcclxuICAgICAgICAgICAgdGhpcy4kcmVhZHkucHVzaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHAucmVuZGVyKHsgaWQgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy4kYXBwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luID0gdGhpcy4kYXBwW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbiA9PT0gXCJmdW5jdGlvblwiICYmICF0aGlzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBvcmlnaW4uYmluZCh0aGlzLiRhcHApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgdy51aS5wcm94eSk7XHJcbn1cblxuY2xhc3MgSmV0QXBwIGV4dGVuZHMgSmV0QXBwQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBjb25maWcucm91dGVyID0gY29uZmlnLnJvdXRlciB8fCBIYXNoUm91dGVyO1xyXG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XHJcbiAgICAgICAgcGF0Y2godGhpcy53ZWJpeCk7XHJcbiAgICB9XHJcbiAgICBfbG9hZFZpZXdEeW5hbWljKHVybCkge1xyXG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC9cXC4vZywgXCIvXCIpO1xyXG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiamV0LXZpZXdzL1wiICsgdXJsKTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBTdG9yZVJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgY29uZmlnLCBhcHApIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZSB8fCBhcHAud2ViaXguc3RvcmFnZS5zZXNzaW9uO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IChjb25maWcuc3RvcmVOYW1lIHx8IGNvbmZpZy5pZCArIFwiOnJvdXRlXCIpO1xyXG4gICAgICAgIHRoaXMuY2IgPSBjYjtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UucHV0KHRoaXMubmFtZSwgcGF0aCk7XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zaWxlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNiKHBhdGgpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXQodGhpcy5uYW1lKTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBVcmxSb3V0ZXIgZXh0ZW5kcyBIYXNoUm91dGVyIHtcclxuICAgIF9kZXRlY3RQcmVmaXgoKSB7XHJcbiAgICAgICAgdGhpcy5wcmVmaXggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc3VmaXggPSB0aGlzLmNvbmZpZy5yb3V0ZXJQcmVmaXggfHwgXCJcIjtcclxuICAgIH1cclxuICAgIF9nZXRSYXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEVtcHR5Um91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBfJGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgaWYgKCFjb25maWcgfHwgIWNvbmZpZy5zaWxlbnQpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNiKHBhdGgpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBVbmxvYWRHdWFyZChhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgdmlldy5vbihhcHAsIGBhcHA6Z3VhcmRgLCBmdW5jdGlvbiAoXyR1cmwsIHBvaW50LCBwcm9taXNlKSB7XHJcbiAgICAgICAgaWYgKHBvaW50ID09PSB2aWV3IHx8IHBvaW50LmNvbnRhaW5zKHZpZXcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGNvbmZpZygpO1xyXG4gICAgICAgICAgICBpZiAocmVzID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5jb25maXJtID0gUHJvbWlzZS5yZWplY3QocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UuY29uZmlybSA9IHByb21pc2UuY29uZmlybS50aGVuKCgpID0+IHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxuXG4vLyAgICAgKGMpIDIwMTItMjAxOCBBaXJibmIsIEluYy5cblxuLy8gdmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xuZnVuY3Rpb24gaGFzKHN0b3JlLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdG9yZSwga2V5KTtcbn1cbi8vIHZhciBmb3JFYWNoID0gcmVxdWlyZSgnZm9yLWVhY2gnKTtcbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoaGFzKG9iaiwga2V5KSkge1xuICAgICAgaGFuZGxlci5jYWxsKChjb250ZXh0IHx8IG9iaiksIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgfVxuICB9XG59XG4vLyB2YXIgdHJpbSA9IHJlcXVpcmUoJ3N0cmluZy5wcm90b3R5cGUudHJpbScpO1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZywgJycpO1xufVxuLy8gdmFyIHdhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5mdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgbWVzc2FnZTtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cblxuICB0cnkgeyB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7IH0gY2F0Y2ggKHgpIHt9XG59XG5cbnZhciByZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xudmFyIHNwbGl0ID0gU3RyaW5nLnByb3RvdHlwZS5zcGxpdDtcblxuLy8gIyMjIyBQbHVyYWxpemF0aW9uIG1ldGhvZHNcbi8vIFRoZSBzdHJpbmcgdGhhdCBzZXBhcmF0ZXMgdGhlIGRpZmZlcmVudCBwaHJhc2UgcG9zc2liaWxpdGllcy5cbnZhciBkZWxpbWl0ZXIgPSAnfHx8fCc7XG5cbnZhciBydXNzaWFuUGx1cmFsR3JvdXBzID0gZnVuY3Rpb24gKG4pIHtcbiAgdmFyIGVuZCA9IG4gJSAxMDtcbiAgaWYgKG4gIT09IDExICYmIGVuZCA9PT0gMSkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGlmICgyIDw9IGVuZCAmJiBlbmQgPD0gNCAmJiAhKG4gPj0gMTIgJiYgbiA8PSAxNCkpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMjtcbn07XG5cbi8vIE1hcHBpbmcgZnJvbSBwbHVyYWxpemF0aW9uIGdyb3VwIHBsdXJhbCBsb2dpYy5cbnZhciBwbHVyYWxUeXBlcyA9IHtcbiAgYXJhYmljOiBmdW5jdGlvbiAobikge1xuICAgIC8vIGh0dHA6Ly93d3cuYXJhYmV5ZXMub3JnL1BsdXJhbF9Gb3Jtc1xuICAgIGlmIChuIDwgMykgeyByZXR1cm4gbjsgfVxuICAgIHZhciBsYXN0VHdvID0gbiAlIDEwMDtcbiAgICBpZiAobGFzdFR3byA+PSAzICYmIGxhc3RUd28gPD0gMTApIHJldHVybiAzO1xuICAgIHJldHVybiBsYXN0VHdvID49IDExID8gNCA6IDU7XG4gIH0sXG4gIGJvc25pYW5fc2VyYmlhbjogcnVzc2lhblBsdXJhbEdyb3VwcyxcbiAgY2hpbmVzZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgY3JvYXRpYW46IHJ1c3NpYW5QbHVyYWxHcm91cHMsXG4gIGZyZW5jaDogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4gPiAxID8gMSA6IDA7IH0sXG4gIGdlcm1hbjogZnVuY3Rpb24gKG4pIHsgcmV0dXJuIG4gIT09IDEgPyAxIDogMDsgfSxcbiAgcnVzc2lhbjogcnVzc2lhblBsdXJhbEdyb3VwcyxcbiAgbGl0aHVhbmlhbjogZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAobiAlIDEwID09PSAxICYmIG4gJSAxMDAgIT09IDExKSB7IHJldHVybiAwOyB9XG4gICAgcmV0dXJuIG4gJSAxMCA+PSAyICYmIG4gJSAxMCA8PSA5ICYmIChuICUgMTAwIDwgMTEgfHwgbiAlIDEwMCA+IDE5KSA/IDEgOiAyO1xuICB9LFxuICBjemVjaDogZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAobiA9PT0gMSkgeyByZXR1cm4gMDsgfVxuICAgIHJldHVybiAobiA+PSAyICYmIG4gPD0gNCkgPyAxIDogMjtcbiAgfSxcbiAgcG9saXNoOiBmdW5jdGlvbiAobikge1xuICAgIGlmIChuID09PSAxKSB7IHJldHVybiAwOyB9XG4gICAgdmFyIGVuZCA9IG4gJSAxMDtcbiAgICByZXR1cm4gMiA8PSBlbmQgJiYgZW5kIDw9IDQgJiYgKG4gJSAxMDAgPCAxMCB8fCBuICUgMTAwID49IDIwKSA/IDEgOiAyO1xuICB9LFxuICBpY2VsYW5kaWM6IGZ1bmN0aW9uIChuKSB7IHJldHVybiAobiAlIDEwICE9PSAxIHx8IG4gJSAxMDAgPT09IDExKSA/IDEgOiAwOyB9LFxuICBzbG92ZW5pYW46IGZ1bmN0aW9uIChuKSB7XG4gICAgdmFyIGxhc3RUd28gPSBuICUgMTAwO1xuICAgIGlmIChsYXN0VHdvID09PSAxKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGxhc3RUd28gPT09IDIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAobGFzdFR3byA9PT0gMyB8fCBsYXN0VHdvID09PSA0KSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgcmV0dXJuIDM7XG4gIH1cbn07XG5cblxuLy8gTWFwcGluZyBmcm9tIHBsdXJhbGl6YXRpb24gZ3JvdXAgdG8gaW5kaXZpZHVhbCBsYW5ndWFnZSBjb2Rlcy9sb2NhbGVzLlxuLy8gV2lsbCBsb29rIHVwIGJhc2VkIG9uIGV4YWN0IG1hdGNoLCBpZiBub3QgZm91bmQgYW5kIGl0J3MgYSBsb2NhbGUgd2lsbCBwYXJzZSB0aGUgbG9jYWxlXG4vLyBmb3IgbGFuZ3VhZ2UgY29kZSwgYW5kIGlmIHRoYXQgZG9lcyBub3QgZXhpc3Qgd2lsbCBkZWZhdWx0IHRvICdlbidcbnZhciBwbHVyYWxUeXBlVG9MYW5ndWFnZXMgPSB7XG4gIGFyYWJpYzogWydhciddLFxuICBib3NuaWFuX3NlcmJpYW46IFsnYnMtTGF0bi1CQScsICdicy1DeXJsLUJBJywgJ3NybC1SUycsICdzci1SUyddLFxuICBjaGluZXNlOiBbJ2lkJywgJ2lkLUlEJywgJ2phJywgJ2tvJywgJ2tvLUtSJywgJ2xvJywgJ21zJywgJ3RoJywgJ3RoLVRIJywgJ3poJ10sXG4gIGNyb2F0aWFuOiBbJ2hyJywgJ2hyLUhSJ10sXG4gIGdlcm1hbjogWydmYScsICdkYScsICdkZScsICdlbicsICdlcycsICdmaScsICdlbCcsICdoZScsICdoaS1JTicsICdodScsICdodS1IVScsICdpdCcsICdubCcsICdubycsICdwdCcsICdzdicsICd0ciddLFxuICBmcmVuY2g6IFsnZnInLCAndGwnLCAncHQtYnInXSxcbiAgcnVzc2lhbjogWydydScsICdydS1SVSddLFxuICBsaXRodWFuaWFuOiBbJ2x0J10sXG4gIGN6ZWNoOiBbJ2NzJywgJ2NzLUNaJywgJ3NrJ10sXG4gIHBvbGlzaDogWydwbCddLFxuICBpY2VsYW5kaWM6IFsnaXMnXSxcbiAgc2xvdmVuaWFuOiBbJ3NsLVNMJ11cbn07XG5cbmZ1bmN0aW9uIGxhbmdUb1R5cGVNYXAobWFwcGluZykge1xuICB2YXIgcmV0ID0ge307XG4gIGZvckVhY2gobWFwcGluZywgZnVuY3Rpb24gKGxhbmdzLCB0eXBlKSB7XG4gICAgZm9yRWFjaChsYW5ncywgZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgIHJldFtsYW5nXSA9IHR5cGU7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBwbHVyYWxUeXBlTmFtZShsb2NhbGUpIHtcbiAgdmFyIGxhbmdUb1BsdXJhbFR5cGUgPSBsYW5nVG9UeXBlTWFwKHBsdXJhbFR5cGVUb0xhbmd1YWdlcyk7XG4gIHJldHVybiBsYW5nVG9QbHVyYWxUeXBlW2xvY2FsZV1cbiAgICB8fCBsYW5nVG9QbHVyYWxUeXBlW3NwbGl0LmNhbGwobG9jYWxlLCAvLS8sIDEpWzBdXVxuICAgIHx8IGxhbmdUb1BsdXJhbFR5cGUuZW47XG59XG5cbmZ1bmN0aW9uIHBsdXJhbFR5cGVJbmRleChsb2NhbGUsIGNvdW50KSB7XG4gIHJldHVybiBwbHVyYWxUeXBlc1twbHVyYWxUeXBlTmFtZShsb2NhbGUpXShjb3VudCk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZSh0b2tlbikge1xuICByZXR1cm4gdG9rZW4ucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0VG9rZW5SZWdleChvcHRzKSB7XG4gIHZhciBwcmVmaXggPSAob3B0cyAmJiBvcHRzLnByZWZpeCkgfHwgJyV7JztcbiAgdmFyIHN1ZmZpeCA9IChvcHRzICYmIG9wdHMuc3VmZml4KSB8fCAnfSc7XG5cbiAgaWYgKHByZWZpeCA9PT0gZGVsaW1pdGVyIHx8IHN1ZmZpeCA9PT0gZGVsaW1pdGVyKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wiJyArIGRlbGltaXRlciArICdcIiB0b2tlbiBpcyByZXNlcnZlZCBmb3IgcGx1cmFsaXphdGlvbicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoZXNjYXBlKHByZWZpeCkgKyAnKC4qPyknICsgZXNjYXBlKHN1ZmZpeCksICdnJyk7XG59XG5cbnZhciBkb2xsYXJSZWdleCA9IC9cXCQvZztcbnZhciBkb2xsYXJCaWxsc1lhbGwgPSAnJCQnO1xudmFyIGRlZmF1bHRUb2tlblJlZ2V4ID0gLyVcXHsoLio/KVxcfS9nO1xuXG4vLyAjIyMgdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlKVxuLy9cbi8vIFRha2VzIGEgcGhyYXNlIHN0cmluZyBhbmQgdHJhbnNmb3JtcyBpdCBieSBjaG9vc2luZyB0aGUgY29ycmVjdFxuLy8gcGx1cmFsIGZvcm0gYW5kIGludGVycG9sYXRpbmcgaXQuXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnSGVsbG8sICV7bmFtZX0hJywge25hbWU6ICdTcGlrZSd9KTtcbi8vICAgICAvLyBcIkhlbGxvLCBTcGlrZSFcIlxuLy9cbi8vIFRoZSBjb3JyZWN0IHBsdXJhbCBmb3JtIGlzIHNlbGVjdGVkIGlmIHN1YnN0aXR1dGlvbnMuc21hcnRfY291bnRcbi8vIGlzIHNldC4gWW91IGNhbiBwYXNzIGluIGEgbnVtYmVyIGluc3RlYWQgb2YgYW4gT2JqZWN0IGFzIGBzdWJzdGl0dXRpb25zYFxuLy8gYXMgYSBzaG9ydGN1dCBmb3IgYHNtYXJ0X2NvdW50YC5cbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCcle3NtYXJ0X2NvdW50fSBuZXcgbWVzc2FnZXMgfHx8fCAxIG5ldyBtZXNzYWdlJywge3NtYXJ0X2NvdW50OiAxfSwgJ2VuJyk7XG4vLyAgICAgLy8gXCIxIG5ldyBtZXNzYWdlXCJcbi8vXG4vLyAgICAgdHJhbnNmb3JtUGhyYXNlKCcle3NtYXJ0X2NvdW50fSBuZXcgbWVzc2FnZXMgfHx8fCAxIG5ldyBtZXNzYWdlJywge3NtYXJ0X2NvdW50OiAyfSwgJ2VuJyk7XG4vLyAgICAgLy8gXCIyIG5ldyBtZXNzYWdlc1wiXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnJXtzbWFydF9jb3VudH0gbmV3IG1lc3NhZ2VzIHx8fHwgMSBuZXcgbWVzc2FnZScsIDUsICdlbicpO1xuLy8gICAgIC8vIFwiNSBuZXcgbWVzc2FnZXNcIlxuLy9cbi8vIFlvdSBzaG91bGQgcGFzcyBpbiBhIHRoaXJkIGFyZ3VtZW50LCB0aGUgbG9jYWxlLCB0byBzcGVjaWZ5IHRoZSBjb3JyZWN0IHBsdXJhbCB0eXBlLlxuLy8gSXQgZGVmYXVsdHMgdG8gYCdlbidgIHdpdGggMiBwbHVyYWwgZm9ybXMuXG5mdW5jdGlvbiB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUsIHRva2VuUmVnZXgpIHtcbiAgaWYgKHR5cGVvZiBwaHJhc2UgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUG9seWdsb3QudHJhbnNmb3JtUGhyYXNlIGV4cGVjdHMgYXJndW1lbnQgIzEgdG8gYmUgc3RyaW5nJyk7XG4gIH1cblxuICBpZiAoc3Vic3RpdHV0aW9ucyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHBocmFzZTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBwaHJhc2U7XG4gIHZhciBpbnRlcnBvbGF0aW9uUmVnZXggPSB0b2tlblJlZ2V4IHx8IGRlZmF1bHRUb2tlblJlZ2V4O1xuXG4gIC8vIGFsbG93IG51bWJlciBhcyBhIHBsdXJhbGl6YXRpb24gc2hvcnRjdXRcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc3Vic3RpdHV0aW9ucyA9PT0gJ251bWJlcicgPyB7IHNtYXJ0X2NvdW50OiBzdWJzdGl0dXRpb25zIH0gOiBzdWJzdGl0dXRpb25zO1xuXG4gIC8vIFNlbGVjdCBwbHVyYWwgZm9ybTogYmFzZWQgb24gYSBwaHJhc2UgdGV4dCB0aGF0IGNvbnRhaW5zIGBuYFxuICAvLyBwbHVyYWwgZm9ybXMgc2VwYXJhdGVkIGJ5IGBkZWxpbWl0ZXJgLCBhIGBsb2NhbGVgLCBhbmQgYSBgc3Vic3RpdHV0aW9ucy5zbWFydF9jb3VudGAsXG4gIC8vIGNob29zZSB0aGUgY29ycmVjdCBwbHVyYWwgZm9ybS4gVGhpcyBpcyBvbmx5IGRvbmUgaWYgYGNvdW50YCBpcyBzZXQuXG4gIGlmIChvcHRpb25zLnNtYXJ0X2NvdW50ICE9IG51bGwgJiYgcmVzdWx0KSB7XG4gICAgdmFyIHRleHRzID0gc3BsaXQuY2FsbChyZXN1bHQsIGRlbGltaXRlcik7XG4gICAgcmVzdWx0ID0gdHJpbSh0ZXh0c1twbHVyYWxUeXBlSW5kZXgobG9jYWxlIHx8ICdlbicsIG9wdGlvbnMuc21hcnRfY291bnQpXSB8fCB0ZXh0c1swXSk7XG4gIH1cblxuICAvLyBJbnRlcnBvbGF0ZTogQ3JlYXRlcyBhIGBSZWdFeHBgIG9iamVjdCBmb3IgZWFjaCBpbnRlcnBvbGF0aW9uIHBsYWNlaG9sZGVyLlxuICByZXN1bHQgPSByZXBsYWNlLmNhbGwocmVzdWx0LCBpbnRlcnBvbGF0aW9uUmVnZXgsIGZ1bmN0aW9uIChleHByZXNzaW9uLCBhcmd1bWVudCkge1xuICAgIGlmICghaGFzKG9wdGlvbnMsIGFyZ3VtZW50KSB8fCBvcHRpb25zW2FyZ3VtZW50XSA9PSBudWxsKSB7IHJldHVybiBleHByZXNzaW9uOyB9XG4gICAgLy8gRW5zdXJlIHJlcGxhY2VtZW50IHZhbHVlIGlzIGVzY2FwZWQgdG8gcHJldmVudCBzcGVjaWFsICQtcHJlZml4ZWQgcmVnZXggcmVwbGFjZSB0b2tlbnMuXG4gICAgcmV0dXJuIHJlcGxhY2UuY2FsbChvcHRpb25zW2FyZ3VtZW50XSwgZG9sbGFyUmVnZXgsIGRvbGxhckJpbGxzWWFsbCk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vICMjIyBQb2x5Z2xvdCBjbGFzcyBjb25zdHJ1Y3RvclxuZnVuY3Rpb24gUG9seWdsb3Qob3B0aW9ucykge1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMucGhyYXNlcyA9IHt9O1xuICB0aGlzLmV4dGVuZChvcHRzLnBocmFzZXMgfHwge30pO1xuICB0aGlzLmN1cnJlbnRMb2NhbGUgPSBvcHRzLmxvY2FsZSB8fCAnZW4nO1xuICB2YXIgYWxsb3dNaXNzaW5nID0gb3B0cy5hbGxvd01pc3NpbmcgPyB0cmFuc2Zvcm1QaHJhc2UgOiBudWxsO1xuICB0aGlzLm9uTWlzc2luZ0tleSA9IHR5cGVvZiBvcHRzLm9uTWlzc2luZ0tleSA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMub25NaXNzaW5nS2V5IDogYWxsb3dNaXNzaW5nO1xuICB0aGlzLndhcm4gPSBvcHRzLndhcm4gfHwgd2FybjtcbiAgdGhpcy50b2tlblJlZ2V4ID0gY29uc3RydWN0VG9rZW5SZWdleChvcHRzLmludGVycG9sYXRpb24pO1xufVxuXG4vLyAjIyMgcG9seWdsb3QubG9jYWxlKFtsb2NhbGVdKVxuLy9cbi8vIEdldCBvciBzZXQgbG9jYWxlLiBJbnRlcm5hbGx5LCBQb2x5Z2xvdCBvbmx5IHVzZXMgbG9jYWxlIGZvciBwbHVyYWxpemF0aW9uLlxuUG9seWdsb3QucHJvdG90eXBlLmxvY2FsZSA9IGZ1bmN0aW9uIChuZXdMb2NhbGUpIHtcbiAgaWYgKG5ld0xvY2FsZSkgdGhpcy5jdXJyZW50TG9jYWxlID0gbmV3TG9jYWxlO1xuICByZXR1cm4gdGhpcy5jdXJyZW50TG9jYWxlO1xufTtcblxuLy8gIyMjIHBvbHlnbG90LmV4dGVuZChwaHJhc2VzKVxuLy9cbi8vIFVzZSBgZXh0ZW5kYCB0byB0ZWxsIFBvbHlnbG90IGhvdyB0byB0cmFuc2xhdGUgYSBnaXZlbiBrZXkuXG4vL1xuLy8gICAgIHBvbHlnbG90LmV4dGVuZCh7XG4vLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbi8vICAgICB9KTtcbi8vXG4vLyBUaGUga2V5IGNhbiBiZSBhbnkgc3RyaW5nLiAgRmVlbCBmcmVlIHRvIGNhbGwgYGV4dGVuZGAgbXVsdGlwbGUgdGltZXM7XG4vLyBpdCB3aWxsIG92ZXJyaWRlIGFueSBwaHJhc2VzIHdpdGggdGhlIHNhbWUga2V5LCBidXQgbGVhdmUgZXhpc3RpbmcgcGhyYXNlc1xuLy8gdW50b3VjaGVkLlxuLy9cbi8vIEl0IGlzIGFsc28gcG9zc2libGUgdG8gcGFzcyBuZXN0ZWQgcGhyYXNlIG9iamVjdHMsIHdoaWNoIGdldCBmbGF0dGVuZWRcbi8vIGludG8gYW4gb2JqZWN0IHdpdGggdGhlIG5lc3RlZCBrZXlzIGNvbmNhdGVuYXRlZCB1c2luZyBkb3Qgbm90YXRpb24uXG4vL1xuLy8gICAgIHBvbHlnbG90LmV4dGVuZCh7XG4vLyAgICAgICBcIm5hdlwiOiB7XG4vLyAgICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiLFxuLy8gICAgICAgICBcInNpZGViYXJcIjoge1xuLy8gICAgICAgICAgIFwid2VsY29tZVwiOiBcIldlbGNvbWVcIlxuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGNvbnNvbGUubG9nKHBvbHlnbG90LnBocmFzZXMpO1xuLy8gICAgIC8vIHtcbi8vICAgICAvLyAgICduYXYuaGVsbG8nOiAnSGVsbG8nLFxuLy8gICAgIC8vICAgJ25hdi5oZWxsb19uYW1lJzogJ0hlbGxvLCAle25hbWV9Jyxcbi8vICAgICAvLyAgICduYXYuc2lkZWJhci53ZWxjb21lJzogJ1dlbGNvbWUnXG4vLyAgICAgLy8gfVxuLy9cbi8vIGBleHRlbmRgIGFjY2VwdHMgYW4gb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50LCBgcHJlZml4YCwgd2hpY2ggY2FuIGJlIHVzZWRcbi8vIHRvIHByZWZpeCBldmVyeSBrZXkgaW4gdGhlIHBocmFzZXMgb2JqZWN0IHdpdGggc29tZSBzdHJpbmcsIHVzaW5nIGRvdFxuLy8gbm90YXRpb24uXG4vL1xuLy8gICAgIHBvbHlnbG90LmV4dGVuZCh7XG4vLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbi8vICAgICB9LCBcIm5hdlwiKTtcbi8vXG4vLyAgICAgY29uc29sZS5sb2cocG9seWdsb3QucGhyYXNlcyk7XG4vLyAgICAgLy8ge1xuLy8gICAgIC8vICAgJ25hdi5oZWxsbyc6ICdIZWxsbycsXG4vLyAgICAgLy8gICAnbmF2LmhlbGxvX25hbWUnOiAnSGVsbG8sICV7bmFtZX0nXG4vLyAgICAgLy8gfVxuLy9cbi8vIFRoaXMgZmVhdHVyZSBpcyB1c2VkIGludGVybmFsbHkgdG8gc3VwcG9ydCBuZXN0ZWQgcGhyYXNlIG9iamVjdHMuXG5Qb2x5Z2xvdC5wcm90b3R5cGUuZXh0ZW5kID0gZnVuY3Rpb24gKG1vcmVQaHJhc2VzLCBwcmVmaXgpIHtcbiAgZm9yRWFjaChtb3JlUGhyYXNlcywgZnVuY3Rpb24gKHBocmFzZSwga2V5KSB7XG4gICAgdmFyIHByZWZpeGVkS2V5ID0gcHJlZml4ID8gcHJlZml4ICsgJy4nICsga2V5IDoga2V5O1xuICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5leHRlbmQocGhyYXNlLCBwcmVmaXhlZEtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGhyYXNlc1twcmVmaXhlZEtleV0gPSBwaHJhc2U7XG4gICAgfVxuICB9LCB0aGlzKTtcbn07XG5cbi8vICMjIyBwb2x5Z2xvdC51bnNldChwaHJhc2VzKVxuLy8gVXNlIGB1bnNldGAgdG8gc2VsZWN0aXZlbHkgcmVtb3ZlIGtleXMgZnJvbSBhIHBvbHlnbG90IGluc3RhbmNlLlxuLy9cbi8vICAgICBwb2x5Z2xvdC51bnNldChcInNvbWVfa2V5XCIpO1xuLy8gICAgIHBvbHlnbG90LnVuc2V0KHtcbi8vICAgICAgIFwiaGVsbG9cIjogXCJIZWxsb1wiLFxuLy8gICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIlxuLy8gICAgIH0pO1xuLy9cbi8vIFRoZSB1bnNldCBtZXRob2QgY2FuIHRha2UgZWl0aGVyIGEgc3RyaW5nIChmb3IgdGhlIGtleSksIG9yIGFuIG9iamVjdCBoYXNoIHdpdGhcbi8vIHRoZSBrZXlzIHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gdW5zZXQuXG5Qb2x5Z2xvdC5wcm90b3R5cGUudW5zZXQgPSBmdW5jdGlvbiAobW9yZVBocmFzZXMsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIG1vcmVQaHJhc2VzID09PSAnc3RyaW5nJykge1xuICAgIGRlbGV0ZSB0aGlzLnBocmFzZXNbbW9yZVBocmFzZXNdO1xuICB9IGVsc2Uge1xuICAgIGZvckVhY2gobW9yZVBocmFzZXMsIGZ1bmN0aW9uIChwaHJhc2UsIGtleSkge1xuICAgICAgdmFyIHByZWZpeGVkS2V5ID0gcHJlZml4ID8gcHJlZml4ICsgJy4nICsga2V5IDoga2V5O1xuICAgICAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRoaXMudW5zZXQocGhyYXNlLCBwcmVmaXhlZEtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGhpcy5waHJhc2VzW3ByZWZpeGVkS2V5XTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxufTtcblxuLy8gIyMjIHBvbHlnbG90LmNsZWFyKClcbi8vXG4vLyBDbGVhcnMgYWxsIHBocmFzZXMuIFVzZWZ1bCBmb3Igc3BlY2lhbCBjYXNlcywgc3VjaCBhcyBmcmVlaW5nXG4vLyB1cCBtZW1vcnkgaWYgeW91IGhhdmUgbG90cyBvZiBwaHJhc2VzIGJ1dCBubyBsb25nZXIgbmVlZCB0b1xuLy8gcGVyZm9ybSBhbnkgdHJhbnNsYXRpb24uIEFsc28gdXNlZCBpbnRlcm5hbGx5IGJ5IGByZXBsYWNlYC5cblBvbHlnbG90LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5waHJhc2VzID0ge307XG59O1xuXG4vLyAjIyMgcG9seWdsb3QucmVwbGFjZShwaHJhc2VzKVxuLy9cbi8vIENvbXBsZXRlbHkgcmVwbGFjZSB0aGUgZXhpc3RpbmcgcGhyYXNlcyB3aXRoIGEgbmV3IHNldCBvZiBwaHJhc2VzLlxuLy8gTm9ybWFsbHksIGp1c3QgdXNlIGBleHRlbmRgIHRvIGFkZCBtb3JlIHBocmFzZXMsIGJ1dCB1bmRlciBjZXJ0YWluXG4vLyBjaXJjdW1zdGFuY2VzLCB5b3UgbWF5IHdhbnQgdG8gbWFrZSBzdXJlIG5vIG9sZCBwaHJhc2VzIGFyZSBseWluZyBhcm91bmQuXG5Qb2x5Z2xvdC5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uIChuZXdQaHJhc2VzKSB7XG4gIHRoaXMuY2xlYXIoKTtcbiAgdGhpcy5leHRlbmQobmV3UGhyYXNlcyk7XG59O1xuXG5cbi8vICMjIyBwb2x5Z2xvdC50KGtleSwgb3B0aW9ucylcbi8vXG4vLyBUaGUgbW9zdC11c2VkIG1ldGhvZC4gUHJvdmlkZSBhIGtleSwgYW5kIGB0YCB3aWxsIHJldHVybiB0aGVcbi8vIHBocmFzZS5cbi8vXG4vLyAgICAgcG9seWdsb3QudChcImhlbGxvXCIpO1xuLy8gICAgID0+IFwiSGVsbG9cIlxuLy9cbi8vIFRoZSBwaHJhc2UgdmFsdWUgaXMgcHJvdmlkZWQgZmlyc3QgYnkgYSBjYWxsIHRvIGBwb2x5Z2xvdC5leHRlbmQoKWAgb3Jcbi8vIGBwb2x5Z2xvdC5yZXBsYWNlKClgLlxuLy9cbi8vIFBhc3MgaW4gYW4gb2JqZWN0IGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gcGVyZm9ybSBpbnRlcnBvbGF0aW9uLlxuLy9cbi8vICAgICBwb2x5Z2xvdC50KFwiaGVsbG9fbmFtZVwiLCB7bmFtZTogXCJTcGlrZVwifSk7XG4vLyAgICAgPT4gXCJIZWxsbywgU3Bpa2VcIlxuLy9cbi8vIElmIHlvdSBsaWtlLCB5b3UgY2FuIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlIGluIGNhc2UgdGhlIHBocmFzZSBpcyBtaXNzaW5nLlxuLy8gVXNlIHRoZSBzcGVjaWFsIG9wdGlvbiBrZXkgXCJfXCIgdG8gc3BlY2lmeSBhIGRlZmF1bHQuXG4vL1xuLy8gICAgIHBvbHlnbG90LnQoXCJpX2xpa2VfdG9fd3JpdGVfaW5fbGFuZ3VhZ2VcIiwge1xuLy8gICAgICAgXzogXCJJIGxpa2UgdG8gd3JpdGUgaW4gJXtsYW5ndWFnZX0uXCIsXG4vLyAgICAgICBsYW5ndWFnZTogXCJKYXZhU2NyaXB0XCJcbi8vICAgICB9KTtcbi8vICAgICA9PiBcIkkgbGlrZSB0byB3cml0ZSBpbiBKYXZhU2NyaXB0LlwiXG4vL1xuUG9seWdsb3QucHJvdG90eXBlLnQgPSBmdW5jdGlvbiAoa2V5LCBvcHRpb25zKSB7XG4gIHZhciBwaHJhc2UsIHJlc3VsdDtcbiAgdmFyIG9wdHMgPSBvcHRpb25zID09IG51bGwgPyB7fSA6IG9wdGlvbnM7XG4gIGlmICh0eXBlb2YgdGhpcy5waHJhc2VzW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgcGhyYXNlID0gdGhpcy5waHJhc2VzW2tleV07XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMuXyA9PT0gJ3N0cmluZycpIHtcbiAgICBwaHJhc2UgPSBvcHRzLl87XG4gIH0gZWxzZSBpZiAodGhpcy5vbk1pc3NpbmdLZXkpIHtcbiAgICB2YXIgb25NaXNzaW5nS2V5ID0gdGhpcy5vbk1pc3NpbmdLZXk7XG4gICAgcmVzdWx0ID0gb25NaXNzaW5nS2V5KGtleSwgb3B0cywgdGhpcy5jdXJyZW50TG9jYWxlLCB0aGlzLnRva2VuUmVnZXgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud2FybignTWlzc2luZyB0cmFuc2xhdGlvbiBmb3Iga2V5OiBcIicgKyBrZXkgKyAnXCInKTtcbiAgICByZXN1bHQgPSBrZXk7XG4gIH1cbiAgaWYgKHR5cGVvZiBwaHJhc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgb3B0cywgdGhpcy5jdXJyZW50TG9jYWxlLCB0aGlzLnRva2VuUmVnZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vICMjIyBwb2x5Z2xvdC5oYXMoa2V5KVxuLy9cbi8vIENoZWNrIGlmIHBvbHlnbG90IGhhcyBhIHRyYW5zbGF0aW9uIGZvciBnaXZlbiBrZXlcblBvbHlnbG90LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBoYXModGhpcy5waHJhc2VzLCBrZXkpO1xufTtcblxuLy8gZXhwb3J0IHRyYW5zZm9ybVBocmFzZVxuUG9seWdsb3QudHJhbnNmb3JtUGhyYXNlID0gZnVuY3Rpb24gdHJhbnNmb3JtKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1QaHJhc2UocGhyYXNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbGUpO1xufTtcblxudmFyIHdlYml4UG9seWdsb3QgPSBQb2x5Z2xvdDtcblxuZnVuY3Rpb24gTG9jYWxlKGFwcCwgX3ZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xyXG4gICAgbGV0IGxhbmcgPSBzdG9yYWdlID8gKHN0b3JhZ2UuZ2V0KFwibGFuZ1wiKSB8fCBcImVuXCIpIDogKGNvbmZpZy5sYW5nIHx8IFwiZW5cIik7XHJcbiAgICBmdW5jdGlvbiBzZXRMYW5nRGF0YShuYW1lLCBkYXRhLCBzaWxlbnQpIHtcclxuICAgICAgICBpZiAoZGF0YS5fX2VzTW9kdWxlKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLmRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBjb25maWcgPSB7IHBocmFzZXM6IGRhdGEgfTtcclxuICAgICAgICBpZiAoY29uZmlnLnBvbHlnbG90KSB7XHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5leHRlbmQocGNvbmZpZywgY29uZmlnLnBvbHlnbG90KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9seSA9IHNlcnZpY2UucG9seWdsb3QgPSBuZXcgd2ViaXhQb2x5Z2xvdChwY29uZmlnKTtcclxuICAgICAgICBwb2x5LmxvY2FsZShuYW1lKTtcclxuICAgICAgICBzZXJ2aWNlLl8gPSBhcHAud2ViaXguYmluZChwb2x5LnQsIHBvbHkpO1xyXG4gICAgICAgIGxhbmcgPSBuYW1lO1xyXG4gICAgICAgIGlmIChzdG9yYWdlKSB7XHJcbiAgICAgICAgICAgIHN0b3JhZ2UucHV0KFwibGFuZ1wiLCBsYW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbmZpZy53ZWJpeCkge1xyXG4gICAgICAgICAgICBjb25zdCBsb2NOYW1lID0gY29uZmlnLndlYml4W25hbWVdO1xyXG4gICAgICAgICAgICBpZiAobG9jTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgYXBwLndlYml4LmkxOG4uc2V0TG9jYWxlKGxvY05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcHAucmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRMYW5nKCkgeyByZXR1cm4gbGFuZzsgfVxyXG4gICAgZnVuY3Rpb24gc2V0TGFuZyhuYW1lLCBzaWxlbnQpIHtcclxuICAgICAgICAvLyBpZ25vcmUgc2V0TGFuZyBpZiBsb2FkaW5nIGJ5IHBhdGggaXMgZGlzYWJsZWRcclxuICAgICAgICBpZiAoY29uZmlnLnBhdGggPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IChjb25maWcucGF0aCA/IGNvbmZpZy5wYXRoICsgXCIvXCIgOiBcIlwiKSArIG5hbWU7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoXCJqZXQtbG9jYWxlcy9cIiArIHBhdGgpO1xyXG4gICAgICAgIHNldExhbmdEYXRhKG5hbWUsIGRhdGEsIHNpbGVudCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgICAgIGdldExhbmcsIHNldExhbmcsIHNldExhbmdEYXRhLCBfOiBudWxsLCBwb2x5Z2xvdDogbnVsbFxyXG4gICAgfTtcclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwibG9jYWxlXCIsIHNlcnZpY2UpO1xyXG4gICAgc2V0TGFuZyhsYW5nLCB0cnVlKTtcclxufVxuXG5mdW5jdGlvbiBzaG93KHZpZXcsIGNvbmZpZywgdmFsdWUpIHtcclxuICAgIGlmIChjb25maWcudXJscykge1xyXG4gICAgICAgIHZhbHVlID0gY29uZmlnLnVybHNbdmFsdWVdIHx8IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY29uZmlnLnBhcmFtKSB7XHJcbiAgICAgICAgdmFsdWUgPSB7IFtjb25maWcucGFyYW1dOiB2YWx1ZSB9O1xyXG4gICAgfVxyXG4gICAgdmlldy5zaG93KHZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiBNZW51KGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25zdCBmcmFtZSA9IHZpZXcuZ2V0U3ViVmlld0luZm8oKS5wYXJlbnQ7XHJcbiAgICBjb25zdCB1aSA9IHZpZXcuJCQoY29uZmlnLmlkIHx8IGNvbmZpZyk7XHJcbiAgICBsZXQgc2lsZW50ID0gZmFsc2U7XHJcbiAgICB1aS5hdHRhY2hFdmVudChcIm9uY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICBzaG93KGZyYW1lLCBjb25maWcsIHRoaXMuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB1aS5hdHRhY2hFdmVudChcIm9uYWZ0ZXJzZWxlY3RcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghc2lsZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh1aS5zZXRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWQgPSB0aGlzLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodWkuZ2V0U2VsZWN0ZWRJZCkge1xyXG4gICAgICAgICAgICAgICAgaWQgPSB1aS5nZXRTZWxlY3RlZElkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2hvdyhmcmFtZSwgY29uZmlnLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB2aWV3Lm9uKGFwcCwgYGFwcDpyb3V0ZWAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wYXJhbSkge1xyXG4gICAgICAgICAgICBuYW1lID0gdmlldy5nZXRQYXJhbShjb25maWcucGFyYW0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VnbWVudCA9IGZyYW1lLmdldFVybCgpWzFdO1xyXG4gICAgICAgICAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHNlZ21lbnQucGFnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICBzaWxlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodWkuc2V0VmFsdWUgJiYgdWkuZ2V0VmFsdWUoKSAhPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdWkuc2V0VmFsdWUobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodWkuc2VsZWN0ICYmIHVpLmV4aXN0cyhuYW1lKSAmJiB1aS5nZXRTZWxlY3RlZElkKCkgIT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHVpLnNlbGVjdChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaWxlbnQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxuXG5jb25zdCBiYXNlaWNvbnMgPSB7XHJcbiAgICBnb29kOiBcImNoZWNrXCIsXHJcbiAgICBlcnJvcjogXCJ3YXJuaW5nXCIsXHJcbiAgICBzYXZpbmc6IFwicmVmcmVzaCBmYS1zcGluXCJcclxufTtcclxuY29uc3QgYmFzZXRleHQgPSB7XHJcbiAgICBnb29kOiBcIk9rXCIsXHJcbiAgICBlcnJvcjogXCJFcnJvclwiLFxyXG4gICAgc2F2aW5nOiBcIkNvbm5lY3RpbmcuLi5cIlxyXG59O1xyXG5mdW5jdGlvbiBTdGF0dXMoYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIGxldCBzdGF0dXMgPSBcImdvb2RcIjtcclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBsZXQgaXNlcnJvciA9IGZhbHNlO1xyXG4gICAgbGV0IGV4cGlyZURlbGF5ID0gY29uZmlnLmV4cGlyZTtcclxuICAgIGlmICghZXhwaXJlRGVsYXkgJiYgZXhwaXJlRGVsYXkgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgZXhwaXJlRGVsYXkgPSAyMDAwO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGV4dHMgPSBjb25maWcudGV4dHMgfHwgYmFzZXRleHQ7XHJcbiAgICBjb25zdCBpY29ucyA9IGNvbmZpZy5pY29ucyB8fCBiYXNlaWNvbnM7XHJcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIGNvbmZpZyA9IHsgdGFyZ2V0OiBjb25maWcgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlZnJlc2goY29udGVudCkge1xyXG4gICAgICAgIGNvbnN0IGFyZWEgPSB2aWV3LiQkKGNvbmZpZy50YXJnZXQpO1xyXG4gICAgICAgIGlmIChhcmVhKSB7XHJcbiAgICAgICAgICAgIGlmICghY29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IFwiPGRpdiBjbGFzcz0nc3RhdHVzX1wiICtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiJz48c3BhbiBjbGFzcz0nd2ViaXhfaWNvbiBmYS1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbnNbc3RhdHVzXSArIFwiJz48L3NwYW4+IFwiICsgdGV4dHNbc3RhdHVzXSArIFwiPC9kaXY+XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJlYS5zZXRIVE1MKGNvbnRlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgY291bnQtLTtcclxuICAgICAgICBzZXRTdGF0dXMoXCJnb29kXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZmFpbChlcnIpIHtcclxuICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgIHNldFN0YXR1cyhcImVycm9yXCIsIGVycik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdGFydChwcm9taXNlKSB7XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgICBzZXRTdGF0dXMoXCJzYXZpbmdcIik7XHJcbiAgICAgICAgaWYgKHByb21pc2UgJiYgcHJvbWlzZS50aGVuKSB7XHJcbiAgICAgICAgICAgIHByb21pc2UudGhlbihzdWNjZXNzLCBmYWlsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhpZGVTdGF0dXMoKSB7XHJcbiAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJlZnJlc2goXCIgXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFN0YXR1cyhtb2RlLCBlcnIpIHtcclxuICAgICAgICBpZiAoY291bnQgPCAwKSB7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1vZGUgPT09IFwic2F2aW5nXCIpIHtcclxuICAgICAgICAgICAgc3RhdHVzID0gXCJzYXZpbmdcIjtcclxuICAgICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaXNlcnJvciA9IChtb2RlID09PSBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA9IGlzZXJyb3IgPyBcImVycm9yXCIgOiBcImdvb2RcIjtcclxuICAgICAgICAgICAgICAgIGlmIChpc2Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLmVycm9yKFwiYXBwOmVycm9yOnNlcnZlclwiLCBbZXJyLnJlc3BvbnNlVGV4dCB8fCBlcnJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHBpcmVEZWxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGhpZGVTdGF0dXMsIGV4cGlyZURlbGF5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0cmFjayhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZHAgPSBhcHAud2ViaXguZHAoZGF0YSk7XHJcbiAgICAgICAgaWYgKGRwKSB7XHJcbiAgICAgICAgICAgIHZpZXcub24oZHAsIFwib25BZnRlckRhdGFTZW5kXCIsIHN0YXJ0KTtcclxuICAgICAgICAgICAgdmlldy5vbihkcCwgXCJvbkFmdGVyU2F2ZUVycm9yXCIsIChfaWQsIF9vYmosIHJlc3BvbnNlKSA9PiBmYWlsKHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgIHZpZXcub24oZHAsIFwib25BZnRlclNhdmVcIiwgc3VjY2Vzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJzdGF0dXNcIiwge1xyXG4gICAgICAgIGdldFN0YXR1cyxcclxuICAgICAgICBzZXRTdGF0dXMsXHJcbiAgICAgICAgdHJhY2tcclxuICAgIH0pO1xyXG4gICAgaWYgKGNvbmZpZy5yZW1vdGUpIHtcclxuICAgICAgICB2aWV3Lm9uKGFwcC53ZWJpeCwgXCJvblJlbW90ZUNhbGxcIiwgc3RhcnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy5hamF4KSB7XHJcbiAgICAgICAgdmlldy5vbihhcHAud2ViaXgsIFwib25CZWZvcmVBamF4XCIsIChfbW9kZSwgX3VybCwgX2RhdGEsIF9yZXF1ZXN0LCBfaGVhZGVycywgX2ZpbGVzLCBwcm9taXNlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXJ0KHByb21pc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvbmZpZy5kYXRhKSB7XHJcbiAgICAgICAgdHJhY2soY29uZmlnLmRhdGEpO1xyXG4gICAgfVxyXG59XG5cbmZ1bmN0aW9uIFRoZW1lKGFwcCwgX3ZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgY29uc3Qgc3RvcmFnZSA9IGNvbmZpZy5zdG9yYWdlO1xyXG4gICAgbGV0IHRoZW1lID0gc3RvcmFnZSA/XHJcbiAgICAgICAgKHN0b3JhZ2UuZ2V0KFwidGhlbWVcIikgfHwgXCJmbGF0LWRlZmF1bHRcIilcclxuICAgICAgICA6XHJcbiAgICAgICAgICAgIChjb25maWcudGhlbWUgfHwgXCJmbGF0LWRlZmF1bHRcIik7XHJcbiAgICBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgICAgIGdldFRoZW1lKCkgeyByZXR1cm4gdGhlbWU7IH0sXHJcbiAgICAgICAgc2V0VGhlbWUobmFtZSwgc2lsZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gbmFtZS5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsbmFtZSA9IGxpbmtzW2ldLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxuYW1lID09PSBuYW1lIHx8IGxuYW1lID09PSBwYXJ0c1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rc1tpXS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua3NbaV0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcHAud2ViaXguc2tpbi5zZXQocGFydHNbMF0pO1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGNzc1xyXG4gICAgICAgICAgICBhcHAud2ViaXguaHRtbC5yZW1vdmVDc3MoZG9jdW1lbnQuYm9keSwgXCJ0aGVtZS1cIiArIHRoZW1lKTtcclxuICAgICAgICAgICAgLy8gYWRkIG5ldyBjc3NcclxuICAgICAgICAgICAgYXBwLndlYml4Lmh0bWwuYWRkQ3NzKGRvY3VtZW50LmJvZHksIFwidGhlbWUtXCIgKyBuYW1lKTtcclxuICAgICAgICAgICAgdGhlbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5wdXQoXCJ0aGVtZVwiLCBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICAgICAgYXBwLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBhcHAuc2V0U2VydmljZShcInRoZW1lXCIsIHNlcnZpY2UpO1xyXG4gICAgc2VydmljZS5zZXRUaGVtZSh0aGVtZSwgdHJ1ZSk7XHJcbn1cblxuZnVuY3Rpb24gY29weVBhcmFtcyhkYXRhLCB1cmwsIHJvdXRlKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZGF0YVtyb3V0ZVtpXV0gPSB1cmxbaSArIDFdID8gdXJsW2kgKyAxXS5wYWdlIDogXCJcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBVcmxQYXJhbShhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uc3Qgcm91dGUgPSBjb25maWcucm91dGUgfHwgY29uZmlnO1xyXG4gICAgY29uc3QgZGF0YSA9IHt9O1xyXG4gICAgdmlldy5vbihhcHAsIFwiYXBwOnVybGNoYW5nZVwiLCBmdW5jdGlvbiAoc3Vidmlldywgc2VnbWVudCkge1xyXG4gICAgICAgIGlmICh2aWV3ID09PSBzdWJ2aWV3KSB7XHJcbiAgICAgICAgICAgIGNvcHlQYXJhbXMoZGF0YSwgc2VnbWVudC5zdWJ1cmwoKSwgcm91dGUpO1xyXG4gICAgICAgICAgICBzZWdtZW50LnNpemUocm91dGUubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBvcyA9IHZpZXcuc2V0UGFyYW07XHJcbiAgICBjb25zdCBvZyA9IHZpZXcuZ2V0UGFyYW07XHJcbiAgICB2aWV3LnNldFBhcmFtID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBzaG93KSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSByb3V0ZS5pbmRleE9mKG5hbWUpO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fc2VnbWVudC51cGRhdGUoXCJcIiwgdmFsdWUsIGluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIGlmIChzaG93KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmlldy5zaG93KG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gb3MuY2FsbCh0aGlzLCBuYW1lLCB2YWx1ZSwgc2hvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZpZXcuZ2V0UGFyYW0gPSBmdW5jdGlvbiAoa2V5LCBtb2RlKSB7XHJcbiAgICAgICAgY29uc3QgdmFsID0gZGF0YVtrZXldO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvZy5jYWxsKHRoaXMsIGtleSwgbW9kZSk7XHJcbiAgICB9O1xyXG4gICAgY29weVBhcmFtcyhkYXRhLCB2aWV3LmdldFVybCgpLCByb3V0ZSk7XHJcbn1cblxuZnVuY3Rpb24gVXNlcihhcHAsIF92aWV3LCBjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IGxvZ2luID0gY29uZmlnLmxvZ2luIHx8IFwiL2xvZ2luXCI7XHJcbiAgICBjb25zdCBsb2dvdXQgPSBjb25maWcubG9nb3V0IHx8IFwiL2xvZ291dFwiO1xyXG4gICAgY29uc3QgYWZ0ZXJMb2dpbiA9IGNvbmZpZy5hZnRlckxvZ2luIHx8IGFwcC5jb25maWcuc3RhcnQ7XHJcbiAgICBjb25zdCBhZnRlckxvZ291dCA9IGNvbmZpZy5hZnRlckxvZ291dCB8fCBcIi9sb2dpblwiO1xyXG4gICAgY29uc3QgcGluZyA9IGNvbmZpZy5waW5nIHx8IDUgKiA2MCAqIDEwMDA7XHJcbiAgICBjb25zdCBtb2RlbCA9IGNvbmZpZy5tb2RlbDtcclxuICAgIGxldCB1c2VyID0gY29uZmlnLnVzZXI7XHJcbiAgICBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgICAgIGdldFVzZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U3RhdHVzKHNlcnZlcikge1xyXG4gICAgICAgICAgICBpZiAoIXNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXIgIT09IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLnN0YXR1cygpLmNhdGNoKCgpID0+IG51bGwpLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyID0gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dpbihuYW1lLCBwYXNzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5sb2dpbihuYW1lLCBwYXNzKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlciA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2Nlc3MgZGVuaWVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXBwLmNhbGxFdmVudChcImFwcDp1c2VyOmxvZ2luXCIsIFt1c2VyXSk7XHJcbiAgICAgICAgICAgICAgICBhcHAuc2hvdyhhZnRlckxvZ2luKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgICAgIHVzZXIgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWwubG9nb3V0KCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXBwLmNhbGxFdmVudChcImFwcDp1c2VyOmxvZ291dFwiLCBbXSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZnVuY3Rpb24gY2FuTmF2aWdhdGUodXJsLCBvYmopIHtcclxuICAgICAgICBpZiAodXJsID09PSBsb2dvdXQpIHtcclxuICAgICAgICAgICAgc2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICAgICAgb2JqLnJlZGlyZWN0ID0gYWZ0ZXJMb2dvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHVybCAhPT0gbG9naW4gJiYgIXNlcnZpY2UuZ2V0U3RhdHVzKCkpIHtcclxuICAgICAgICAgICAgb2JqLnJlZGlyZWN0ID0gbG9naW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJ1c2VyXCIsIHNlcnZpY2UpO1xyXG4gICAgYXBwLmF0dGFjaEV2ZW50KGBhcHA6Z3VhcmRgLCBmdW5jdGlvbiAodXJsLCBfJHJvb3QsIG9iaikge1xyXG4gICAgICAgIGlmIChjb25maWcucHVibGljICYmIGNvbmZpZy5wdWJsaWModXJsKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB1c2VyID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIG9iai5jb25maXJtID0gc2VydmljZS5nZXRTdGF0dXModHJ1ZSkudGhlbigoKSA9PiBjYW5OYXZpZ2F0ZSh1cmwsIG9iaikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FuTmF2aWdhdGUodXJsLCBvYmopO1xyXG4gICAgfSk7XHJcbiAgICBpZiAocGluZykge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHNlcnZpY2UuZ2V0U3RhdHVzKHRydWUpLCBwaW5nKTtcclxuICAgIH1cclxufVxuXG4vKlxyXG5NSVQgTGljZW5zZVxyXG5Db3B5cmlnaHQgKGMpIDIwMTkgWEIgU29mdHdhcmVcclxuKi9cclxubGV0IHdlYml4ID0gd2luZG93LndlYml4O1xyXG5pZiAod2ViaXgpIHtcclxuICAgIHBhdGNoKHdlYml4KTtcclxufVxyXG5jb25zdCBwbHVnaW5zID0ge1xyXG4gICAgVW5sb2FkR3VhcmQsIExvY2FsZSwgTWVudSwgVGhlbWUsIFVzZXIsIFN0YXR1cywgVXJsUGFyYW1cclxufTtcclxuY29uc3QgdyA9IHdpbmRvdztcclxuaWYgKCF3LlByb21pc2UpIHtcclxuICAgIHcuUHJvbWlzZSA9IHcud2ViaXgucHJvbWlzZTtcclxufVxuXG5leHBvcnQgeyBwbHVnaW5zLCBKZXRBcHAsIEpldFZpZXcsIEhhc2hSb3V0ZXIsIFN0b3JlUm91dGVyLCBVcmxSb3V0ZXIsIEVtcHR5Um91dGVyLCBTdWJSb3V0ZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpldC5qcy5tYXBcbiIsImNvbnN0IGxvZ291dFVybCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9nb3V0JztcclxuY29uc3QgbG9naW5VcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJztcclxuY29uc3QgcmVnaXN0ZXJVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZ2lzdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGhvcml6YXRpb24ge1xyXG5cdHJlZ2lzdGVyKG9iaikge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KHJlZ2lzdGVyVXJsLCBvYmopO1xyXG5cdH1cclxuXHJcblx0bG9naW4ob2JqKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLnBvc3QobG9naW5VcmwsIG9iaik7XHJcblx0fVxyXG5cclxuXHRsb2dvdXQoKSB7XHJcblx0XHRyZXR1cm4gd2ViaXguYWpheCgpLmdldChsb2dvdXRVcmwpXHJcblx0fVxyXG59IiwidmFyIG1hcCA9IHtcblx0XCIuL2VuXCI6IFwiLi9zb3VyY2VzL2xvY2FsZXMvZW4uanNcIixcblx0XCIuL2VuLmpzXCI6IFwiLi9zb3VyY2VzL2xvY2FsZXMvZW4uanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zb3VyY2VzL2xvY2FsZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJleHBvcnQgY29uc3QgZ3JvdXBzID0gbmV3IHdlYml4LkRhdGFDb2xsZWN0aW9uKHtcclxuXHR1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZ3JvdXBzLycsXHJcblx0c2F2ZToge1xyXG5cdFx0dXJsOiAncmVzdC0+aHR0cDovL2xvY2FsaG9zdDozMDAwL2dyb3Vwcy8nLFxyXG5cdFx0dXBkYXRlRnJvbVJlc3BvbnNlOiB0cnVlXHJcblx0fSxcclxuXHRzY2hlbWU6IHtcclxuXHRcdCRpbml0KG9iaikge1xyXG5cdFx0XHRvYmouY3JlYXRpb25EYXRlID0gbmV3IERhdGUob2JqLmNyZWF0aW9uRGF0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG59KTsiLCJleHBvcnQgY29uc3QgbGFuZ3VhZ2VzID0gbmV3IHdlYml4LkRhdGFDb2xsZWN0aW9uKHtcclxuXHR1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvbGFuZ3VhZ2VzLycsXHJcblx0c2F2ZToge1xyXG5cdFx0dXJsOiAncmVzdC0+aHR0cDovL2xvY2FsaG9zdDozMDAwL2xhbmd1YWdlcy8nLFxyXG5cdFx0dXBkYXRlRnJvbVJlc3BvbnNlOiB0cnVlXHJcblx0fVxyXG59KTsiLCJleHBvcnQgY29uc3QgdGVzdHJlc3VsdHMgPSBuZXcgd2ViaXguRGF0YUNvbGxlY3Rpb24oe1xyXG5cdHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90ZXN0cmVzdWx0cy8nLFxyXG5cdHNhdmU6IHtcclxuXHRcdHVybDogJ3Jlc3QtPmh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90ZXN0cmVzdWx0cy8nLFxyXG5cdFx0dXBkYXRlRnJvbVJlc3BvbnNlOiB0cnVlXHJcblx0fVxyXG59KTsiLCJleHBvcnQgY29uc3Qgd29yZHMgPSBuZXcgd2ViaXguRGF0YUNvbGxlY3Rpb24oe1xyXG5cdHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC93b3Jkcy8nLFxyXG5cdHNhdmU6IHtcclxuXHRcdHVybDogJ3Jlc3QtPmh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC93b3Jkcy8nLFxyXG5cdFx0dXBkYXRlRnJvbVJlc3BvbnNlOiB0cnVlXHJcblx0fVxyXG59KTsiLCJpbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5pbXBvcnQge0pldEFwcCwgRW1wdHlSb3V0ZXIsIEhhc2hSb3V0ZXIgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBKZXRBcHB7XHJcblx0Y29uc3RydWN0b3IoY29uZmlnKXtcclxuXHRcdGNvbnN0IGRlZmF1bHRzID0ge1xyXG5cdFx0XHRpZCBcdFx0OiBBUFBOQU1FLFxyXG5cdFx0XHR2ZXJzaW9uIDogVkVSU0lPTixcclxuXHRcdFx0cm91dGVyIFx0OiBCVUlMRF9BU19NT0RVTEUgPyBFbXB0eVJvdXRlciA6IEhhc2hSb3V0ZXIsXHJcblx0XHRcdGRlYnVnIFx0OiAhUFJPRFVDVElPTixcclxuXHRcdFx0c3RhcnQgXHQ6ICcvaW5kZXgnXHJcblx0XHR9O1xyXG5cclxuXHRcdHN1cGVyKHsgLi4uZGVmYXVsdHMsIC4uLmNvbmZpZyB9KTtcclxuXHR9XHJcbn1cclxuXHJcbmlmICghQlVJTERfQVNfTU9EVUxFKXtcclxuXHR3ZWJpeC5yZWFkeSgoKSA9PiB7XHJcblx0XHRjb25zdCBhcHAgPSBuZXcgTXlBcHAoKTtcclxuXHRcdGFwcC5hdHRhY2hFdmVudCgnYXBwOmd1YXJkJywgKHVybCwgdmlldywgbmF2KSA9PiB7XHJcblx0XHRcdGlmKHVybC5pbmRleE9mKCcvaG9tZScpICE9PSAtMSkge1xyXG5cdFx0XHRcdHdlYml4LmFqYXgoKS5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jaGVjaycpLnRoZW4oXHJcblx0XHRcdFx0XHQocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gcmVzLmpzb24oKTtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZS5hbGxvd0FjY2Vzcykge1xyXG5cdFx0XHRcdFx0XHRcdGFwcC5zaG93KCcvaW5kZXgnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZihlcnJvci5zdGF0dXMgPT0gNDAxKSB7XHJcblx0XHRcdFx0XHRcdFx0YXBwLnNob3coJy9pbmRleCcpO1xyXG5cdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0YXBwLnJlbmRlcigpO1xyXG5cdH0pO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL1wiOiBcIi4vc291cmNlcy92aWV3cy9pbmRleC5qc1wiLFxuXHRcIi4vYWRkR3JvdXBcIjogXCIuL3NvdXJjZXMvdmlld3MvYWRkR3JvdXAuanNcIixcblx0XCIuL2FkZEdyb3VwLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkZEdyb3VwLmpzXCIsXG5cdFwiLi9hZGRXb3JkXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkZFdvcmQuanNcIixcblx0XCIuL2FkZFdvcmQuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvYWRkV29yZC5qc1wiLFxuXHRcIi4vY3JlYXRlVGVzdFwiOiBcIi4vc291cmNlcy92aWV3cy9jcmVhdGVUZXN0LmpzXCIsXG5cdFwiLi9jcmVhdGVUZXN0LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2NyZWF0ZVRlc3QuanNcIixcblx0XCIuL2dyb3VwXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2dyb3VwLmpzXCIsXG5cdFwiLi9ncm91cC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9ncm91cC5qc1wiLFxuXHRcIi4vaG9tZVwiOiBcIi4vc291cmNlcy92aWV3cy9ob21lLmpzXCIsXG5cdFwiLi9ob21lLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2hvbWUuanNcIixcblx0XCIuL2luZGV4XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2luZGV4LmpzXCIsXG5cdFwiLi9pbmRleC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9pbmRleC5qc1wiLFxuXHRcIi4vbWFpblwiOiBcIi4vc291cmNlcy92aWV3cy9tYWluLmpzXCIsXG5cdFwiLi9tYWluLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL21haW4uanNcIixcblx0XCIuL3Byb2ZpbGVcIjogXCIuL3NvdXJjZXMvdmlld3MvcHJvZmlsZS5qc1wiLFxuXHRcIi4vcHJvZmlsZS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9wcm9maWxlLmpzXCIsXG5cdFwiLi9yZWdpc3RlclwiOiBcIi4vc291cmNlcy92aWV3cy9yZWdpc3Rlci5qc1wiLFxuXHRcIi4vcmVnaXN0ZXIuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVnaXN0ZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zb3VyY2VzL3ZpZXdzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCB7IGdyb3VwcyB9IGZyb20gJ21vZGVscy9ncm91cHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYWRkR3JvdXBGb3JtIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZpZXc6ICd3aW5kb3cnLFxyXG5cdFx0XHRsb2NhbElkOiAnZm9ybVBvcHVwJyxcclxuXHRcdFx0cG9zaXRpb246J2NlbnRlcicsXHJcblx0XHRcdGhlYWQ6ICdHcm91cCBuYW1lJyxcclxuXHRcdFx0Ym9keToge1xyXG5cdFx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0XHRsb2NhbElkOiAnZm9ybVZpZXcnLFxyXG5cdFx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbmFtZTogJ2dyb3VwTmFtZScsIGxhYmVsOiAnJ30sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMjAsXHJcblx0XHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgdHlwZTogJ2Zvcm0nLCB2YWx1ZTogJ1NhdmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zYXZlR3JvdXAoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlV2luZG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdDYW5jZWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nZXRSb290KCkuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0cnVsZXM6IHtcclxuXHRcdFx0XHRcdCdncm91cE5hbWUnOiB3ZWJpeC5ydWxlcy5pc05vdEVtcHR5XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHRcclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5tYWluV2luZG93ID0gdGhpcy4kJCgnZm9ybVBvcHVwJyk7XHJcblx0fVxyXG5cclxuXHRzaG93V2luZG93KCkge1xyXG5cdFx0dGhpcy5tYWluV2luZG93LnNob3coKTtcclxuXHR9XHJcblxyXG5cdGhpZGVXaW5kb3coKSB7XHJcblx0XHR0aGlzLm1haW5XaW5kb3cuaGlkZSgpO1xyXG5cdH1cclxuXHJcblx0c2F2ZUdyb3VwKCkge1xyXG5cdFx0Y29uc3QgZm9ybSA9IHRoaXMuJCQoJ2Zvcm1WaWV3Jyk7XHJcblx0XHRjb25zdCB2YWx1ZXMgPSBmb3JtLmdldFZhbHVlcygpO1xyXG5cdFx0dmFsdWVzLmNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRcclxuXHRcdGdyb3Vwcy5hZGQodmFsdWVzKTtcclxuXHRcdHRoaXMuY2xlYXJGb3JtKGZvcm0pO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJGb3JtKGZvcm0pIHtcclxuXHRcdGZvcm0uY2xlYXJWYWxpZGF0aW9uKCk7XHJcblx0XHRmb3JtLmNsZWFyKCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJ21vZGVscy9sYW5ndWFnZXMnO1xyXG5pbXBvcnQgeyB3b3JkcyB9IGZyb20gJ21vZGVscy93b3Jkcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhZGRXb3JkRm9ybSBleHRlbmRzIEpldFZpZXcge1xyXG5cclxuXHRtYWluUm93KGNvdW50LCBsYW5ncykge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bWFyZ2luOiAyMCxcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHsgdmlldzogJ2NvbWJvJywgbGFiZWw6ICdMYW5ndWFnZScsIGxhYmVsV2lkdGg6IDcyLCBsYWJlbEFsaWduOiAncmlnaHQnLCB3aWR0aDogMTgwLCBuYW1lOiBgbGFuZ3VhZ2Uke2NvdW50fWAsIG9wdGlvbnM6IHsgYm9keTogeyB0ZW1wbGF0ZTogJyN2YWx1ZSMnLCBkYXRhOiBsYW5ncyB9IH0gfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdUcmFuc2xhdGlvbicsIGxhYmVsV2lkdGg6IDgyLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiBgdHJhbnNsYXRpb24ke2NvdW50fWAgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdGlkOiAnYWRkVHJhbnNsYXRpb24nLFxyXG5cdFx0XHRcdFx0dmFsdWU6ICdBZGQgdHJhbnNsYXRpb24nLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDE0MCxcclxuXHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYWRkVHJhbnNsYXRpb24oKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRjb25maWcoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2aWV3OiAnd2luZG93JyxcclxuXHRcdFx0bG9jYWxJZDogJ2FkZFdvcmRGb3JtJyxcclxuXHRcdFx0aGVhZDogJ0FkZCB3b3JkJyxcclxuXHRcdFx0d2lkdGg6IDYwMCxcclxuXHRcdFx0cG9zaXRpb246ICdjZW50ZXInLFxyXG5cdFx0XHRib2R5OiB7XHJcblx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdFx0XHRcdGxvY2FsSWQ6ICd3b3JkRm9ybScsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIG5hbWU6ICdpZCcsIGxvY2FsSWQ6ICdpZCcsIGhpZGRlbjogdHJ1ZSB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBuYW1lOiAnZ3JvdXBJZCcsIGxvY2FsSWQ6ICdncm91cElkJywgaGlkZGVuOiB0cnVlIH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dmlldzogJ2xhYmVsJyxcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnT3JpZ2luYWwgd29yZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI0XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDIwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IHZpZXc6ICdjb21ibycsIGxhYmVsOiAnTGFuZ3VhZ2UnLCBsYWJlbFdpZHRoOiA3MiwgbGFiZWxBbGlnbjogJ3JpZ2h0Jywgd2lkdGg6IDE4MCwgbmFtZTogJ2xhbmd1YWdlSWQnLCBvcHRpb25zOiB7IGJvZHk6IHsgdGVtcGxhdGU6ICcjdmFsdWUjJywgZGF0YTogbGFuZ3VhZ2VzIH0gfSB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdXb3JkJywgbGFiZWxXaWR0aDogODIsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICd3b3JkJywgbG9jYWxJZDogJ29yaWdpbmFsV29yZCcgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eyB2aWV3OiAnY29tYm8nLCBsYWJlbDogJ1BPUycsIGxhYmVsV2lkdGg6IDQwLCBsYWJlbEFsaWduOiAncmlnaHQnLCB3aWR0aDogMTQwLCBuYW1lOiAncGFydE9mU3BlZWNoJywgb3B0aW9uczogWydOb3VuJywgJ1Byb25vdW4nLCAnVmVyYicsICdBZHZlcmInXSB9XHJcblx0XHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0XHRydWxlczoge1xyXG5cdFx0XHRcdFx0XHRcdCdsYW5ndWFnZUlkJzogd2ViaXgucnVsZXMuaXNOb3RFbXB0eSxcclxuXHRcdFx0XHRcdFx0XHQnd29yZCc6IHdlYml4LnJ1bGVzLmlzTm90RW1wdHksXHJcblx0XHRcdFx0XHRcdFx0J3BhcnRPZlNwZWVjaCc6IHdlYml4LnJ1bGVzLmlzTm90RW1wdHksXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0XHRcdFx0bG9jYWxJZDogJ3RyYW5zbGF0aW9uc0Zvcm0nLFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBuYW1lOiAnd29yZElkJywgbG9jYWxJZDogJ3dvcmRJZCcsIGhpZGRlbjogdHJ1ZSB9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHZpZXc6ICdsYWJlbCcsXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ1RyYW5zbGF0aW9ucycsXHJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI0XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm1haW5Sb3coMSwgbGFuZ3VhZ2VzKVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDIwLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nWTogMTAsXHJcblx0XHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdTYXZlJywgdHlwZTogJ2Zvcm0nLCBsb2NhbElkOiAnc2F2ZUJ0bicsIHdpZHRoOiAxMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVGb3JtKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdDYW5jZWwnLCB3aWR0aDogMTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nZXRSb290KCkuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e31cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLnRyYW5zbGF0aW9uc0Zvcm0gPSB0aGlzLiQkKCd0cmFuc2xhdGlvbnNGb3JtJyk7XHJcblx0XHR0aGlzLndvcmRGb3JtID0gdGhpcy4kJCgnd29yZEZvcm0nKTtcclxuXHRcdHRoaXMuYWRkV29yZEZvcm0gPSB0aGlzLiQkKCdhZGRXb3JkRm9ybScpO1xyXG5cdFx0dGhpcy5idG5BZGRUcmFuc2xhdGlvbiA9ICQkKCdhZGRUcmFuc2xhdGlvbicpO1xyXG5cclxuXHRcdGNvbnN0IGFsbENvbWJvID0gdGhpcy5maW5kQWxsQ29tYm8oKTtcclxuXHRcdGFsbENvbWJvLmZvckVhY2goKGNvbWJvLCBpKSA9PiB7XHJcblx0XHRcdHRoaXMub25Db21ib0NoYW5nZShjb21ibywgaSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZpbmRBbGxDb21ibygpIHtcclxuXHRcdHJldHVybiB0aGlzLiQkKCdhZGRXb3JkRm9ybScpLnF1ZXJ5Vmlldyh7IHZpZXc6ICdjb21ibycsIGxhYmVsOiAnTGFuZ3VhZ2UnIH0sICdhbGwnKTtcclxuXHR9XHJcblxyXG5cdG9uQ29tYm9DaGFuZ2UoY29tYm8sIGkpIHtcdFxyXG5cdFx0Y29tYm8uYXR0YWNoRXZlbnQoJ29uQ2hhbmdlJywgKG5ld3YsIG9sZHYpID0+IHtcclxuXHJcblx0XHRcdC8vZ2V0IGFsbCBjb21ibyBpbiBmb3JtXHJcblx0XHRcdC8vbmVlZCAgdG8gZmluZCBhbGwgY29tYm8gYWdhaW4sIGluIGNhc2UgaWYgbmV3IHdhcyBhZGRlXHJcblx0XHRcdGNvbnN0IGFsbENvbWJvID0gdGhpcy5maW5kQWxsQ29tYm8oKTtcclxuXHRcdFx0Y29uc3QgY29tYm9zQXJyID0gYWxsQ29tYm8uc2xpY2UoKTtcclxuXHRcdFx0Y29uc3QgYWxsTGFuZ3MgPSB7Li4ubGFuZ3VhZ2VzLmRhdGEucHVsbH07XHJcblx0XHRcdC8vcmVtb3ZlIGZyb20gYXJyYXkgY29tYm8gd2hlcmUgY2F1Z2h0IGV2ZW50XHJcblx0XHRcdGNvbWJvc0Fyci5zcGxpY2UoaSwgMSk7XHJcblxyXG5cdFx0XHQvL2ZvciBlYWNoIGNvbWJvIHJlbW92ZSBmcm9tIG9wdGlvbnMgbGlzdCBzZWxlY3RlZCB2YWx1ZVxyXG5cdFx0XHRcclxuXHRcdFx0Y29tYm9zQXJyLmZvckVhY2goIGVsID0+IHRoaXMuc2V0T3B0aW9ucyhlbCwgYWxsTGFuZ3MsIG5ld3YsIG9sZHYpKTtcdFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVTZWxlY3RlZExhbmdzKCkge1xyXG5cdFx0Y29uc3QgYWxsTGFuZ3MgPSB7Li4ubGFuZ3VhZ2VzLmRhdGEucHVsbH07XHJcblx0XHRjb25zdCBhbGxDb21ibyA9IHRoaXMuZmluZEFsbENvbWJvKCk7XHJcblxyXG5cdFx0YWxsQ29tYm8uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGl0ZW0uZ2V0VmFsdWUoKTtcclxuXHRcdFx0ZGVsZXRlIGFsbExhbmdzW3ZhbHVlXTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRjb25zdCBuZXdMYW5nQXJyID0gT2JqZWN0LmtleXMoYWxsTGFuZ3MpLm1hcCgoaykgPT4gYWxsTGFuZ3Nba10pO1xyXG5cdFx0cmV0dXJuIG5ld0xhbmdBcnI7XHJcblx0fVxyXG5cclxuXHRzaG93V2luZG93KGlkKSB7XHJcblx0XHR0aGlzLiQkKCdncm91cElkJykuc2V0VmFsdWUoaWQpO1xyXG5cdFx0dGhpcy5nZXRSb290KCkuc2hvdygpO1xyXG5cdFx0Y29uc3Qgd29yZElkID0gd2ViaXgudWlkKCk7XHJcblx0XHR0aGlzLiQkKCd3b3JkSWQnKS5zZXRWYWx1ZSh3b3JkSWQpO1xyXG5cdFx0dGhpcy4kJCgnaWQnKS5zZXRWYWx1ZSh3b3JkSWQpO1xyXG5cdH1cclxuXHJcblx0YWRkVHJhbnNsYXRpb24oKSB7XHJcblx0XHRjb25zdCByb3dzID0gdGhpcy50cmFuc2xhdGlvbnNGb3JtLmdldENoaWxkVmlld3MoKTtcclxuXHRcdGNvbnN0IHJvd3NDb3VudCA9IHJvd3MubGVuZ3RoO1xyXG5cdFx0Y29uc3QgdGFyZ2V0ID0gcm93c1tyb3dzQ291bnQgLSAxXTtcclxuXHJcblx0XHR3ZWJpeC51aSh7IHdpZHRoOiAxNDAgfSwgdGFyZ2V0LCB0aGlzLmJ0bkFkZFRyYW5zbGF0aW9uKTtcclxuXHJcblx0XHRjb25zdCBpbmRleCA9IHRoaXMudHJhbnNsYXRpb25zRm9ybS5nZXRDaGlsZFZpZXdzKCkubGVuZ3RoIC0gMTtcclxuXHRcdGNvbnN0IGxhbmdzID0gdGhpcy5yZW1vdmVTZWxlY3RlZExhbmdzKCk7XHJcblx0XHR0aGlzLnRyYW5zbGF0aW9uc0Zvcm0uYWRkVmlldyh0aGlzLm1haW5Sb3coaW5kZXgsIGxhbmdzKSk7XHJcblxyXG5cdFx0Y29uc3QgYWxsQ29tYm8gPSB0aGlzLmZpbmRBbGxDb21ibygpO1xyXG5cdFx0dGhpcy5vbkNvbWJvQ2hhbmdlKGFsbENvbWJvW2luZGV4XSwgaW5kZXgpO1xyXG5cdH1cclxuXHJcblx0c2F2ZUZvcm0oKSB7XHJcblx0XHRsZXQgd29yZCA9IHRoaXMud29yZEZvcm0uZ2V0VmFsdWVzKCk7XHJcblxyXG5cdFx0Y29uc3QgY291bnQgPSB0aGlzLnRyYW5zbGF0aW9uc0Zvcm0uZ2V0Q2hpbGRWaWV3cygpLmxlbmd0aCAtIDE7XHJcblx0XHRjb25zdCB0cmFuc2xhdGlvblZhbHVlcyA9IHRoaXMudHJhbnNsYXRpb25zRm9ybS5nZXRWYWx1ZXMoKTtcclxuXHJcblx0XHRsZXQgdHJhbnNsYXRpb25zID0gW107XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBjb3VudDsgaSsrKSB7XHJcblx0XHRcdGxldCB0ciA9IHtcclxuXHRcdFx0XHR3b3JkOiB0cmFuc2xhdGlvblZhbHVlc1tgdHJhbnNsYXRpb24ke2l9YF0sXHJcblx0XHRcdFx0bGFuZ3VhZ2VJZDogdHJhbnNsYXRpb25WYWx1ZXNbYGxhbmd1YWdlJHtpfWBdXHJcblx0XHRcdH07XHJcblx0XHRcdHRyYW5zbGF0aW9ucy5wdXNoKHRyKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBiYXRjaCA9IHtcclxuXHRcdFx0d29yZCxcclxuXHRcdFx0dHJhbnNsYXRpb25zXHJcblx0XHR9O1xyXG5cclxuXHRcdGlmKHRoaXMud29yZEZvcm0udmFsaWRhdGUoKSkge1xyXG5cdFx0XHR3b3Jkcy5hZGQoYmF0Y2gpO1xyXG5cdFx0XHR0aGlzLmhpZGVXaW5kb3coKTtcdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhpZGVXaW5kb3coKSB7XHJcblx0XHR0aGlzLndvcmRGb3JtLmNsZWFyVmFsaWRhdGlvbigpO1xyXG5cdFx0dGhpcy50cmFuc2xhdGlvbnNGb3JtLmNsZWFyVmFsaWRhdGlvbigpO1xyXG5cdFx0dGhpcy53b3JkRm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy50cmFuc2xhdGlvbnNGb3JtLmNsZWFyKCk7XHJcblx0XHR0aGlzLmFkZFdvcmRGb3JtLmhpZGUoKTtcclxuXHR9XHJcblxyXG5cdHNldE9wdGlvbnMoZWwsIGFsbExhbmdzLCBuZXd2LCBvbGR2KSB7XHJcblx0XHQvLyBtb3ZlIHRvIGZ1bmN0aW9uXHJcblx0XHRjb25zdCBsYW5ncyA9IGVsLmdldExpc3QoKS5zZXJpYWxpemUoKTtcclxuXHJcblx0XHQvL3JldHVybiB0byBvcHRpb25zIGxpc3QgdmFsdWUsIGlmIGl0IHdhcyB1bnNlbGVjdGVkXHJcblx0XHRpZihvbGR2KSB7XHJcblx0XHRcdGNvbnN0IG9sZFZhbCA9IGFsbExhbmdzW29sZHZdO1xyXG5cdFx0XHRsYW5ncy5wdXNoKG9sZFZhbCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaW5kZXggPSBsYW5ncy5pbmRleE9mKGxhbmdzLmZpbmQoKGl0ZW0pID0+IHtyZXR1cm4gaXRlbS5pZCA9PT0gbmV3dn0pKTtcclxuXHRcdGxhbmdzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG5cdFx0Ly9zZXQgZmlsdGVyZWQgbGlzdCBvZiBsYW5ndWFnZXNcclxuXHRcdGVsLmRlZmluZSgnb3B0aW9ucycsIGxhbmdzKTtcclxuXHRcdGVsLnJlZnJlc2goKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IHsgd29yZHMgfSBmcm9tICdtb2RlbHMvd29yZHMnO1xyXG5pbXBvcnQgeyB0ZXN0cmVzdWx0cyB9IGZyb20gJ21vZGVscy90ZXN0cmVzdWx0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjcmVhdGVUZXN0Rm9ybSBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2aWV3OiAnd2luZG93JyxcclxuXHRcdFx0bG9jYWxJZDogJ2Zvcm1Qb3B1cCcsXHJcblx0XHRcdHBvc2l0aW9uOidjZW50ZXInLFxyXG5cdFx0XHRoZWFkOiAnQ2hvb3NlIHRoZSBsYW5ndWFnZScsXHJcblx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdFx0bG9jYWxJZDogJ2Nob29zZUxhbmdGb3JtJyxcclxuXHRcdFx0XHRtYXJnaW46IDEwLFxyXG5cdFx0XHRcdHBhZGRpbmdZOiAyMCxcclxuXHRcdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsb2NhbElkOiAnY2hvb3NlTGFuZycsXHJcblx0XHRcdFx0XHRcdHZpZXc6ICdjb21ibycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICdsYW5ndWFnZSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHR2YWx1ZTogJ0Nob29zZScsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0XHRcdFx0Y2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHZhbHVlcyA9ICQkKGlkKS5nZXRQYXJlbnRWaWV3KCkuZ2V0VmFsdWVzKCk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jcmVhdGVUZXN0KHZhbHVlcy5sYW5ndWFnZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5mb3JtUG9wdXAgPSB0aGlzLiQkKCdmb3JtUG9wdXAnKTtcclxuXHRcdHRoaXMuZ3JvdXBJZCA9IHRoaXMuX2RhdGEuaWQ7XHJcblx0fVxyXG5cclxuXHRzaG93V2luZG93KGxhbmd1YWdlcykge1xyXG5cdFx0dGhpcy4kJCgnY2hvb3NlTGFuZycpLmRlZmluZSgnb3B0aW9ucycsIGxhbmd1YWdlcyk7XHJcblx0XHR0aGlzLmdldFJvb3QoKS5zaG93KCk7XHRcdFxyXG5cdH1cclxuXHJcblx0c2h1ZmZsZShhcnJheSkge1xyXG5cdFx0Y29uc3Qgc2h1ZmZsZWRBcnIgPSBbXTtcclxuXHRcdGxldCBudW0gPSBhcnJheS5sZW5ndGg7XHJcblxyXG5cdFx0Ly8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGXigKZcclxuXHRcdHdoaWxlIChudW0pIHtcclxuXHJcblx0XHRcdC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxyXG5cdFx0XHRjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcclxuXHJcblx0XHRcdC8vIElmIG5vdCBhbHJlYWR5IHNodWZmbGVkLCBtb3ZlIGl0IHRvIHRoZSBuZXcgYXJyYXkuXHJcblx0XHRcdGlmIChpIGluIGFycmF5KSB7XHJcblx0XHRcdFx0c2h1ZmZsZWRBcnIucHVzaChhcnJheVtpXSk7XHJcblx0XHRcdFx0ZGVsZXRlIGFycmF5W2ldO1xyXG5cdFx0XHRcdG51bS0tO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHNodWZmbGVkQXJyO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlVGVzdChsYW5ndWFnZSkge1xyXG5cdFx0dGhpcy5zY29yZSA9IDA7XHJcblx0XHRjb25zdCBncm91cElkID0gdGhpcy5ncm91cElkO1xyXG5cclxuXHRcdHdvcmRzLndhaXREYXRhLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHQvL2ZpbmQgd29yZHMgb2YgdGhpcyBncm91cFxyXG5cdFx0XHRsZXQgd29yZHNMaXN0ID0gd29yZHMuZmluZChpdGVtID0+IGl0ZW0uZ3JvdXBJZCA9PT0gZ3JvdXBJZCk7XHJcblxyXG5cdFx0XHQvLyBmaW5kIHdvcmRzLCB3aGljaCBoYXZlIHRyYW5zbGF0aW9ucyBvbiBzZWxlY3RlZCBsYW5ndWFnZVxyXG5cdFx0XHRcclxuXHRcdFx0d29yZHNMaXN0ID0gd29yZHNMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHdvcmRJdGVtID0gaXRlbS50cmFuc2xhdGlvbnMuZmluZCgodHIpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiB0ci5sYW5ndWFnZUlkID09PSBsYW5ndWFnZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAod29yZEl0ZW0pIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3Qgd29yZHNBcnIgPSB3b3Jkcy5zZXJpYWxpemUoKTsgLy8gY3JlYXRlIGFuIGFycmF5IG9mIGFsbCB3b3Jkc1xyXG5cdFx0XHRsZXQgdHJhbnNsYXRpb25zQXJyID0gW107XHJcblxyXG5cdFx0XHQvLyBmaW5kIGFsbCB0cmFuc2xhdGlvbnMgb24gc2VsZWN0ZWQgbGFuZ3VhZ2VcclxuXHRcdFx0d29yZHNBcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHRyYW5zbGF0aW9uID0gaXRlbS50cmFuc2xhdGlvbnMuZmluZCgodHIpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiB0ci5sYW5ndWFnZUlkID09PSBsYW5ndWFnZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAodHJhbnNsYXRpb24pIHtcclxuXHRcdFx0XHRcdC8vIGlmIG9yaWdpbmFsIG9mIHRoaXMgdHJhbnNsYXRpb24gaXMgb2YgdGhlIHNhbWUgcGFydCBvZiBzcGVlY2ggYXMgdGhlIHdvcmRcclxuXHRcdFx0XHRcdC8vIHB1c2ggaXQgdG8gYXJyYXkgb2YgdHJhbnNsYXRpb25zXHJcblx0XHRcdFx0XHR0cmFuc2xhdGlvbnNBcnIucHVzaCh0cmFuc2xhdGlvbik7XHJcblx0XHRcdFx0XHR0cmFuc2xhdGlvbi5wYXJ0T2ZTcGVlY2ggPSBpdGVtLnBhcnRPZlNwZWVjaDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0d29yZHNMaXN0ID0gdGhpcy5zaHVmZmxlKHdvcmRzTGlzdCk7IC8vbWl4IHRoZSB3b3JkcyBhcnJheVxyXG5cclxuXHRcdFx0Ly8gaWYgaW4gYXJyYXkgbW9yZSB0aGVuIDEwIHdvcmRzLCBjdXQgaXRcclxuXHRcdFx0aWYgKHdvcmRzTGlzdC5sZW5ndGggPiAxMCkge1xyXG5cdFx0XHRcdHdvcmRzTGlzdC5zcGxpY2Uod29yZHNMaXN0WzEwXSwgd29yZHNMaXN0Lmxlbmd0aCAtIDEwKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy53b3Jkc0xpc3QgPSB3b3Jkc0xpc3Q7XHJcblx0XHRcdHRoaXMudHJhbnNsYXRpb25zQXJyID0gdHJhbnNsYXRpb25zQXJyO1xyXG5cclxuXHRcdFx0dGhpcy5zaG93UXVlc3Rpb24oMCwgd29yZHNMaXN0LCB0cmFuc2xhdGlvbnNBcnIpOyBcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2hvd1F1ZXN0aW9uKG4sIHdvcmRzTGlzdCwgdHJhbnNsYXRpb25zQXJyKSB7XHJcblx0XHRpZihuIDwgd29yZHNMaXN0Lmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCB3b3JkT2JqID0gd29yZHNMaXN0W25dO1xyXG5cdFx0XHRjb25zdCByaWdodEFuc3dlciA9IHRyYW5zbGF0aW9uc0Fyci5maW5kKHRyID0+IHRyLndvcmRJZCA9PT0gd29yZE9iai5pZCk7XHJcblx0XHRcdGxldCB0cmFuc2xhdGlvbnMgPSB0cmFuc2xhdGlvbnNBcnIuZmlsdGVyKCh0cikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0ci5wYXJ0T2ZTcGVlY2ggPT09IHdvcmRPYmoucGFydE9mU3BlZWNoICYmIHRyLndvcmRJZCAhPSB3b3JkT2JqLmlkO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGlmIGluIGFycmF5IG1vcmUgdGhlbiAzIHdvcmRzLCBjdXQgaXRcclxuXHRcdFx0aWYgKHRyYW5zbGF0aW9ucy5sZW5ndGggPiAzKSB7XHJcblx0XHRcdFx0dHJhbnNsYXRpb25zLnNwbGljZSh0cmFuc2xhdGlvbnNbM10sIHRyYW5zbGF0aW9ucy5sZW5ndGggLSAzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dHJhbnNsYXRpb25zLnB1c2gocmlnaHRBbnN3ZXIpOyAvLyBhZGQgdG8gdHJhbnNsYXRpb25zIGFycmF5IGNvcnJlY3QgYW5zd2VyXHJcblx0XHRcdHRyYW5zbGF0aW9ucyA9IHRoaXMuc2h1ZmZsZSh0cmFuc2xhdGlvbnMpOyAvL21peCB0aGUgdHJhbnNsYXRpb25zIGFycmF5XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBpZCA9ICggbiA+IDApID8gICd0cmFuc2xhdGlvbnNCdXR0b25zJyA6ICdjaG9vc2VMYW5nRm9ybSc7XHJcblxyXG5cdFx0XHR0aGlzLmNoYW5nZUJ1dHRvbnMobiwgaWQsIHRyYW5zbGF0aW9ucyk7XHJcblx0XHRcdHRoaXMuZm9ybVBvcHVwLmdldEhlYWQoKS5zZXRIVE1MKHdvcmRPYmoud29yZCk7XHJcblx0XHRcdHRoaXMuJCQoJ2N1cnJlbnRXb3JkSWQnKS5zZXRWYWx1ZSh3b3JkT2JqLmlkKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNhdmVSZXN1bHRzKCk7XHJcblx0XHRcdHRoaXMuc2hvd1Jlc3VsdHMoKTtcclxuXHRcdFx0dGhpcy5mb3JtUG9wdXAuZ2V0SGVhZCgpLnNldEhUTUwoJ1lvdXIgcmVzdWx0Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zLCBuKSB7XHJcblx0XHRjb25zdCBidXR0b25zID0gW107XHJcblx0XHR0cmFuc2xhdGlvbnMuZm9yRWFjaCgodHIpID0+IHtcclxuXHRcdFx0YnV0dG9ucy5wdXNoKHtcclxuXHRcdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0XHR2YWx1ZTogdHIud29yZCxcclxuXHRcdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdFx0YXV0b3dpZHRoOiB0cnVlLFxyXG5cdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmFuc3dlckFjdGlvbih0ciwgbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGJ1dHRvbnM7XHJcblx0fVxyXG5cclxuXHRhbnN3ZXJBY3Rpb24odHJhbnNsYXRpb24sIG4pIHtcclxuXHRcdGNvbnN0IHdvcmRJZCA9IHRoaXMuJCQoJ2N1cnJlbnRXb3JkSWQnKS5nZXRWYWx1ZSgpO1xyXG5cdFx0aWYodHJhbnNsYXRpb24ud29yZElkID09PSB3b3JkSWQpIHtcclxuXHRcdFx0aWYodHJhbnNsYXRpb24ucGFydE9mU3BlZWNoID09PSAnTm91bicgfHwgdHJhbnNsYXRpb24ucGFydE9mU3BlZWNoID09PSAnVmVyYicpICB7XHJcblx0XHRcdFx0dGhpcy5zY29yZSArPSAyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc2NvcmUgKz0gMTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zaG93UXVlc3Rpb24oKytuLCB0aGlzLndvcmRzTGlzdCwgdGhpcy50cmFuc2xhdGlvbnNBcnIpO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlQnV0dG9ucyhuLCBpZCwgdHJhbnNsYXRpb25zKSB7XHJcblx0XHR3ZWJpeC51aShcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0XHRsb2NhbElkOiAndHJhbnNsYXRpb25zQnV0dG9ucycsXHJcblx0XHRcdFx0Ym9yZGVybGVzczogdHJ1ZSxcclxuXHRcdFx0XHR0eXBlOiAnY2xlYW4nLFxyXG5cdFx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZpZXc6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdFx0bG9jYWxJZDogJ2N1cnJlbnRXb3JkSWQnLFxyXG5cdFx0XHRcdFx0XHRoaWRkZW46IHRydWVcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMTAsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwLFxyXG5cdFx0XHRcdFx0XHRjb2xzOiB0aGlzLnNldFRyYW5zbGF0aW9ucyh0cmFuc2xhdGlvbnMsIG4pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aGlzLmZvcm1Qb3B1cCxcclxuXHRcdFx0dGhpcy4kJChpZClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRzaG93UmVzdWx0cygpIHtcclxuXHRcdHdlYml4LnVpKFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGFkZGluZzogMzAsXHJcblx0XHRcdFx0bWFyZ2luOiAxNSxcclxuXHRcdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRlbXBsYXRlOiB0aGlzLnNjb3JlLFxyXG5cdFx0XHRcdFx0XHRib3JkZXJsZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRjc3M6ICdjZW50ZXInXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0dmFsdWU6ICdPaycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmZvcm1Qb3B1cC5oaWRlKCk7XHRcclxuXHRcdFx0XHRcdFx0XHR0aGlzLl9wYXJlbnQucmVmcmVzaCgpO1x0XHRcdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dGhpcy5mb3JtUG9wdXAsXHJcblx0XHRcdHRoaXMuJCQoJ3RyYW5zbGF0aW9uc0J1dHRvbnMnKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHNhdmVSZXN1bHRzKCkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0ge1xyXG5cdFx0XHRwYXNzZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRncm91cElkOiB0aGlzLmdyb3VwSWQsXHJcblx0XHRcdHNjb3JlOiB0aGlzLnNjb3JlXHJcblx0XHR9O1xyXG5cdFx0dGVzdHJlc3VsdHMuYWRkKHJlc3VsdCk7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IEpldFZpZXcgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgeyBsYW5ndWFnZXMgfSBmcm9tICdtb2RlbHMvbGFuZ3VhZ2VzJztcclxuaW1wb3J0IHsgd29yZHMgfSBmcm9tICdtb2RlbHMvd29yZHMnO1xyXG5pbXBvcnQgY3JlYXRlVGVzdEZvcm0gZnJvbSAnLi9jcmVhdGVUZXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwVmlldyBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCkge1xyXG5cdFxyXG5cdFx0Y29uc3QgZHRhYmxlID0ge1xyXG5cdFx0XHR2aWV3OiAnZGF0YXRhYmxlJyxcclxuXHRcdFx0c2VsZWN0OiB0cnVlLFxyXG5cdFx0XHRsb2NhbElkOiAnd29yZHNMaXN0JyxcclxuXHRcdFx0Y29sdW1uczpbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICd3b3JkJyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ1dvcmQnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3BhcnRPZlNwZWVjaCcsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDEsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdQT1MnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3JlbW92ZUNvbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdSZW1vdmUnLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA3MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAne2NvbW1vbi50cmFzaEljb24oKX0nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbkNsaWNrOiB7XHJcblx0XHRcdFx0J3d4aS10cmFzaCc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0d2ViaXguY29uZmlybSh7XHJcblx0XHRcdFx0XHRcdHRleHQ6ICdSZW1vdmUgd29yZD8nLFxyXG5cdFx0XHRcdFx0XHRjYWxsYmFjazogKHJlc3VsdCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHdvcmRzLnJlbW92ZShpZCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLiQkKCd3b3Jkc0xpc3QnKS5yZW1vdmUoaWQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCBleHBvcnRCdG4gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR2YWx1ZTogJ0V4cG9ydCB3b3JkcycsXHJcblx0XHRcdHdpZHRoOiAxNTAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7IFxyXG5cdFx0XHRcdHdlYml4LnRvRXhjZWwodGhpcy4kJCgnd29yZHNMaXN0JykpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHRlc3RCdG4gPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdHZhbHVlOiAnVGVzdCcsXHJcblx0XHRcdHdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7IFxyXG5cdFx0XHRcdHRoaXMuY3JlYXRlVGVzdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7IFxyXG5cdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0ZHRhYmxlLCBcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb2xzOiBbdGVzdEJ0biwge30sIGV4cG9ydEJ0bl1cclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0XVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQgKCkge1xyXG5cdFx0dGhpcy50ZXN0UG9wdXAgPSB0aGlzLnVpKGNyZWF0ZVRlc3RGb3JtKTtcclxuXHJcblx0XHR3ZWJpeC5wcm9taXNlLmFsbChbIHdvcmRzLCBsYW5ndWFnZXMgXSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdGNvbnN0IGlkID0gdGhpcy5nZXRQYXJhbSgnaWQnLCB0cnVlKTtcclxuXHRcdFx0Y29uc3QgZ3JpZCA9IHRoaXMuJCQoJ3dvcmRzTGlzdCcpO1xyXG5cclxuXHRcdFx0bGV0IHdvcmRzTGlzdCA9IHdvcmRzLmZpbmQoKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gaXRlbS5ncm91cElkID09IGlkO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IHRyQXJyID0gW107XHJcblx0XHRcdGNvbnN0IGxhbmdzTGlzdCA9IFtdO1xyXG5cclxuXHRcdFx0d29yZHNMaXN0ID0gd29yZHNMaXN0Lm1hcCgod29yZCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHRyYW5zbGF0aW9ucyA9IHdvcmQudHJhbnNsYXRpb25zO1xyXG5cdFx0XHRcdHRyYW5zbGF0aW9ucy5mb3JFYWNoKCh0cikgPT4ge1xyXG5cclxuXHRcdFx0XHRcdC8vZmluZCBsYW5ndWFnZSB2YWx1ZVxyXG5cdFx0XHRcdFx0Y29uc3QgbGFuZyA9IGxhbmd1YWdlcy5nZXRJdGVtKHRyLmxhbmd1YWdlSWQpO1xyXG5cdFx0XHRcdFx0Y29uc3QgbGFuZ1ZhbCA9IGxhbmcudmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0Ly9pZiBsYW5ndWFnZSBpcyB1bmlxdWUgZm9yIHRoaXMgZ3JvdXAsIHB1c2ggdG8gYXJyXHJcblx0XHRcdFx0XHRpZih0ckFyci5pbmRleE9mKGxhbmdWYWwpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdHRyQXJyLnB1c2gobGFuZ1ZhbCk7XHJcblx0XHRcdFx0XHRcdGxhbmdzTGlzdC5wdXNoKGxhbmcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL3NldCBuZXcgcHJvcGVydHkgdG8gd29yZFxyXG5cdFx0XHRcdFx0d29yZFtsYW5nVmFsXSA9IHRyLndvcmQ7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHI7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmV0dXJuIHdvcmQ7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5sYW5nc0xpc3QgPSBsYW5nc0xpc3Q7XHJcblxyXG5cdFx0XHR0aGlzLmFkZENvbHVtcyh0ckFyciwgZ3JpZCk7XHJcblxyXG5cdFx0XHRncmlkLnBhcnNlKHdvcmRzTGlzdCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGFkZENvbHVtcyhhcnIsIGdyaWQpIHtcclxuXHRcdGNvbnN0IGNvbHVtbnMgPSB3ZWJpeC50b0FycmF5KGdyaWQuY29uZmlnLmNvbHVtbnMpO1xyXG5cdFx0YXJyLmZvckVhY2goKGxhbmcsIGkpID0+IHtcclxuXHRcdFx0Y29sdW1ucy5pbnNlcnRBdCh7XHJcblx0XHRcdFx0aWQ6IGFycltpXSxcclxuXHRcdFx0XHRoZWFkZXI6IGFycltpXSxcclxuXHRcdFx0XHRmaWxsc3BhY2U6IDFcclxuXHRcdFx0fSwgaSsxKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRncmlkLnJlZnJlc2hDb2x1bW5zKCk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVUZXN0KCkge1xyXG5cdFx0dGhpcy50ZXN0UG9wdXAuc2hvd1dpbmRvdyh0aGlzLmxhbmdzTGlzdCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3LCBwbHVnaW5zfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcFZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpe1xyXG5cdFx0Y29uc3QgaGVhZGVyID0ge1xyXG5cdFx0XHR0eXBlOidoZWFkZXInLCB0ZW1wbGF0ZTp0aGlzLmFwcC5jb25maWcubmFtZSwgY3NzOid3ZWJpeF9oZWFkZXIgYXBwX2hlYWRlcidcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbWVudSA9IHtcclxuXHRcdFx0dmlldzonbWVudScsIGlkOid0b3A6bWVudScsIFxyXG5cdFx0XHRjc3M6J2FwcF9tZW51JyxcclxuXHRcdFx0d2lkdGg6MTgwLCBsYXlvdXQ6J3knLCBzZWxlY3Q6dHJ1ZSxcclxuXHRcdFx0dGVtcGxhdGU6JzxzcGFuIGNsYXNzPVwid2ViaXhfaWNvbiAjaWNvbiNcIj48L3NwYW4+ICN2YWx1ZSMgJyxcclxuXHRcdFx0dmFsdWU6ICdIb21lJyxcclxuXHRcdFx0ZGF0YTpbXHJcblx0XHRcdFx0eyB2YWx1ZTonSG9tZScsIGlkOidtYWluJywgaWNvbjonZmFzIGZhLWhvbWUnIH0sXHJcblx0XHRcdFx0eyB2YWx1ZTonUHJvZmlsZScsIGlkOidwcm9maWxlJywgIGljb246J2ZhcyBmYS11c2VyJyB9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbG9nb3V0ID0ge1xyXG5cdFx0XHR2aWV3OididXR0b24nLCBcclxuXHRcdFx0bG9jYWxJZDonbG9nb3V0QnRuJywgXHJcblx0XHRcdHZhbHVlOidMb2dvdXQnLCBcclxuXHRcdFx0dHlwZTonZm9ybSdcclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgdWkgPSB7XHJcblx0XHRcdHR5cGU6J2NsZWFuJywgcGFkZGluZ1g6NSwgY3NzOidhcHBfbGF5b3V0JywgXHJcblx0XHRcdGNvbHM6W1xyXG5cdFx0XHRcdHsgcGFkZGluZ1g6NSwgcGFkZGluZ1k6MTAsIHJvd3M6IFsge2Nzczond2ViaXhfc2hhZG93X21lZGl1bScsIHJvd3M6W2hlYWRlciwgbWVudSwgbG9nb3V0XX0gXX0sXHJcblx0XHRcdFx0eyB2aWV3OiAncmVzaXplcicsIHdpZHRoOiA1IH0sXHJcblx0XHRcdFx0eyB0eXBlOid3aWRlJywgcGFkZGluZ1k6MTAsIHBhZGRpbmdYOjUsIHJvd3M6IFtcclxuXHRcdFx0XHRcdHsgJHN1YnZpZXc6dHJ1ZSB9IFxyXG5cdFx0XHRcdF19XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHVpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMudXNlKHBsdWdpbnMuTWVudSwgJ3RvcDptZW51Jyk7XHJcblxyXG5cdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0dGhpcy4kJCgnbG9nb3V0QnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBhcHAgPSB0aGlzLmFwcDtcclxuXHRcdFx0XHJcblx0XHRcdGF1dGhvcml6YXRpb24ubG9nb3V0KCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRpZihyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0YXBwLnNob3coJy9pbmRleCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uL2F1dGhvcml6YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCBsb2dpbkZvcm0gPSB7XHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0bG9jYWxJZDogJ2xvZ2luRm9ybScsXHJcblx0XHRcdHdpZHRoOiAzMDAsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVXNlcm5hbWUnLCBuYW1lOiAndXNlcm5hbWUnIH0sXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIHR5cGU6ICdwYXNzd29yZCcsIGxhYmVsOiAnUGFzc3dvcmQnLCBuYW1lOiAncGFzc3dvcmQnIH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bWFyZ2luOiA1LCBjb2xzOiBbXHJcblx0XHRcdFx0XHRcdHsgdmlldzogJ2J1dHRvbicsIGxvY2FsSWQ6ICdsb2dpbkJ0bicsIHZhbHVlOiAnTG9naW4nLCB0eXBlOiAnZm9ybScgfSxcclxuXHRcdFx0XHRcdFx0eyB2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdDYW5jZWwnIH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgbGluayA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdHZhbHVlOiAnQ3JlYXRlIGFuIGFjY291bnQnLFxyXG5cdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2hvdygnL3JlZ2lzdGVyJyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHsgXHJcblx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHR7fSxcclxuXHRcdFx0XHR7XHRcclxuXHRcdFx0XHRcdHJvd3M6IFtcclxuXHRcdFx0XHRcdFx0e30sXHJcblx0XHRcdFx0XHRcdGxvZ2luRm9ybSxcclxuXHRcdFx0XHRcdFx0bGluayxcclxuXHRcdFx0XHRcdFx0e31cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHt9XHJcblx0XHRcdF1cdFx0XHRcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy4kJCgnbG9naW5CdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMuJCQoJ2xvZ2luRm9ybScpLmdldFZhbHVlcygpO1xyXG5cdFx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHRcdGF1dGhvcml6YXRpb24ubG9naW4odmFsdWVzKS50aGVuKChyZXNwb25zZSkgPT4ge1x0XHJcblx0XHRcdFx0aWYgKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3coJy9ob21lL21haW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHR3ZWJpeC5tZXNzYWdlKHJlc3BvbnNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1x0XHRcdFx0XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IHsgZ3JvdXBzIH0gZnJvbSAnbW9kZWxzL2dyb3Vwcyc7XHJcbmltcG9ydCBhZGRHcm91cEZvcm0gZnJvbSAnLi9hZGRHcm91cCc7XHJcbmltcG9ydCBhZGRXb3JkRm9ybSBmcm9tICcuL2FkZFdvcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpIHtcclxuXHJcblx0XHRjb25zdCB0ZXN0UmVzdWx0cyA9IHtcclxuXHRcdFx0dmlldzogJ2RhdGF0YWJsZScsXHJcblx0XHRcdGlkOiAnZ3JvdXBMaXN0JyxcclxuXHRcdFx0c2VsZWN0OiB0cnVlLFxyXG5cdFx0XHRjb2x1bW5zOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdfaWQnLFxyXG5cdFx0XHRcdFx0aGlkZGVuOiB0cnVlLFx0XHRcdFx0XHRcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnZ3JvdXBOYW1lJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ05hbWUnXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3dvcmRzJyxcclxuXHRcdFx0XHRcdHNvcnQ6ICdpbnQnLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLFxyXG5cdFx0XHRcdFx0bWluV2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0NvdW50J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdjcmVhdGlvbkRhdGUnLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDgwLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnQ3JlYXRlZCcsXHJcblx0XHRcdFx0XHRmb3JtYXQ6IHdlYml4LkRhdGUuZGF0ZVRvU3RyKFwiJWQgJU1cIilcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAndmlld0NvbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdWaWV3JyxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogNTAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxpIGNsYXNzPVwiZmFzIGZhLWV5ZVwiPjwvaT4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRoZWFkZXI6ICdBZGQnLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA1MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAnPGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT4nXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3JlbW92ZUNvbCcsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdSZW1vdmUnLFxyXG5cdFx0XHRcdFx0Y3NzOiAnY2VudGVyJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA3MCxcclxuXHRcdFx0XHRcdHRlbXBsYXRlOiAne2NvbW1vbi50cmFzaEljb24oKX0nXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdF0sXHJcblx0XHRcdG9uQ2xpY2s6IHtcclxuXHRcdFx0XHQnZmEtZXllJzogKGUsIGlkKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNob3coYC9ob21lL2dyb3VwP2lkPSR7aWR9YCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnZmEtcGx1cyc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5hZGRXb3JkLnNob3dXaW5kb3coaWQpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J3d4aS10cmFzaCc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0d2ViaXguY29uZmlybSh7XHJcblx0XHRcdFx0XHRcdHRleHQ6ICdSZW1vdmUgZ3JvdXA/JyxcclxuXHRcdFx0XHRcdFx0Y2FsbGJhY2s6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRncm91cHMucmVtb3ZlKGlkKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYnV0dG9uID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0aWQ6ICdhZGRHcm91cCcsXHJcblx0XHRcdHZhbHVlOiAnQWRkIGdyb3VwJyxcclxuXHRcdFx0dHlwZTonZm9ybScsXHJcblx0XHRcdGlucHV0V2lkdGg6IDEwMCxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHsgdGhpcy5hZGRHcm91cC5zaG93V2luZG93KCk7IH1cclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHsgXHJcblx0XHRcdHJvd3M6IFt0ZXN0UmVzdWx0cywgYnV0dG9uXVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLmFkZEdyb3VwID0gdGhpcy51aShhZGRHcm91cEZvcm0pO1xyXG5cdFx0dGhpcy5hZGRXb3JkID0gdGhpcy51aShhZGRXb3JkRm9ybSk7XHJcblxyXG5cdFx0JCQoJ2dyb3VwTGlzdCcpLnBhcnNlKGdyb3Vwcyk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZVZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpIHtcclxuXHJcblx0XHRjb25zdCB0ZXN0UmVzdWx0cyA9IHtcclxuXHRcdFx0dmlldzogJ2RhdGF0YWJsZScsXHJcblx0XHRcdGNvbHVtbnM6W1xyXG5cdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRpZDogJ2RhdGUnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnRGF0ZScsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDEsXHJcblx0XHRcdFx0XHRtaW5XaWR0aDogMTIwXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7IFxyXG5cdFx0XHRcdFx0aWQ6ICdncm91cElkJywgICBcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0dyb3VwJyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRcdG1pbldpZHRoOiAxMjBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRpZDonIHNjb3JlJywgICAgXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdSZXN1bHQnLCAgICBcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRcdG1pbldpZHRoOiAxMjBcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHRcdGRhdGE6IFtdXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGJ1dHRvbiA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGlkOiAnY2xlYXJBbGwnLFxyXG5cdFx0XHR2YWx1ZTogJ0NsZWFyIGFsbCcsXHJcblx0XHRcdHR5cGU6J2Zvcm0nLFxyXG5cdFx0XHRpbnB1dFdpZHRoOiAxMDBcclxuXHRcdH07XHJcblxyXG5cdFx0cmV0dXJuIHsgXHJcblx0XHRcdHJvd3M6IFt0ZXN0UmVzdWx0cywgYnV0dG9uXVxyXG5cdFx0fTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uL2F1dGhvcml6YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXJQYWdlIGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCByZWdpc3RlckZvcm0gPSB7XHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0bG9jYWxJZDogJ3JlZ2lzdGVyRm9ybScsXHJcblx0XHRcdHdpZHRoOiAzMDAsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVWVybmFtZScsIG5hbWU6ICd1c2VybmFtZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgdHlwZTogJ3Bhc3N3b3JkJywgbGFiZWw6ICdQYXNzd29yZCcsIG5hbWU6ICdwYXNzd29yZCcgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtYXJnaW46IDUsIGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgbG9jYWxJZDogJ3JlZ2lzdGVyQnRuJywgdmFsdWU6ICdSZWdpc3RlcicsIHR5cGU6ICdmb3JtJ1x0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7IFxyXG5cdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0e30sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0cmVnaXN0ZXJGb3JtLFxyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHt9XHJcblx0XHRcdF1cdFx0XHRcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy4kJCgncmVnaXN0ZXJCdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMuJCQoJ3JlZ2lzdGVyRm9ybScpLmdldFZhbHVlcygpO1xyXG5cdFx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHRcdGF1dGhvcml6YXRpb24ucmVnaXN0ZXIodmFsdWVzKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93KCcvaG9tZS9tYWluJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=