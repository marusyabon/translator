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
			var data = recordsArr.map(function (record, i, recordsArr) {
				if (i > 0) {
					var prevRec = recordsArr[i - 1];
					if (record.score > prevRec.score) {
						n += 1;
					}
				}
				record.rating = n;
				return record;
			});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYml4LWpldC9kaXN0L2VzNi9qZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9hdXRob3JpemF0aW9uLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbG9jYWxlcyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy9tb2RlbHMvZ3JvdXBzLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvbW9kZWxzL2xhbmd1YWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL21vZGVscy90ZXN0cmVzdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL21vZGVscy93b3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL215YXBwLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9hZGRHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL2FkZFdvcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9jcmVhdGVUZXN0LmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9ob21lLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlcy92aWV3cy9tYWluLmpzIiwid2VicGFjazovLy8uL3NvdXJjZXMvdmlld3MvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzL3ZpZXdzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbIkpldEJhc2UiLCJ3ZWJpeCIsIndlYml4SmV0IiwiX2V2ZW50cyIsIl9zdWJzIiwiX2RhdGEiLCJnZXRSb290IiwiX3Jvb3QiLCJkZXN0cnVjdG9yIiwiX2RldGFjaEV2ZW50cyIsIl9kZXN0cm95U3VicyIsIl9jb250YWluZXIiLCJhcHAiLCJfcGFyZW50Iiwic2V0UGFyYW0iLCJpZCIsInZhbHVlIiwidXJsIiwiX3NlZ21lbnQiLCJ1cGRhdGUiLCJzaG93IiwiZ2V0UGFyYW0iLCJwYXJlbnQiLCJ2aWV3IiwiZ2V0UGFyZW50VmlldyIsImdldFVybCIsInN1YnVybCIsImdldFVybFN0cmluZyIsInRvU3RyaW5nIiwiJCQiLCJyb290IiwicXVlcnlWaWV3Iiwib2JqIiwiY29uZmlnIiwibG9jYWxJZCIsIiRzY29wZSIsIm9uIiwibmFtZSIsImNvZGUiLCJhdHRhY2hFdmVudCIsInB1c2giLCJjb250YWlucyIsImtleSIsImtpZCIsImdldFN1YlZpZXciLCJzdWIiLCJnZXRTdWJWaWV3SW5mbyIsInN1YnZpZXciLCJwb3B1cCIsImV2ZW50cyIsImkiLCJsZW5ndGgiLCJkZXRhY2hFdmVudCIsInN1YlZpZXciLCJfaW5pdF91cmxfZGF0YSIsImN1cnJlbnQiLCJleHRlbmQiLCJwYXJhbXMiLCJfZ2V0RGVmYXVsdFN1YiIsImRlZmF1bHQiLCJicmFuY2giLCJjaGlsZCIsIl9yb3V0ZWRfdmlldyIsInBhcnNlIiwic3Vic3RyIiwicGFydHMiLCJzcGxpdCIsImNodW5rcyIsInRlc3QiLCJyZXN1bHQiLCJwb3MiLCJpbmRleE9mIiwicGFyYW0iLCJkY2h1bmsiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYWdlIiwiaXNOZXciLCJ1cmwyc3RyIiwic3RhY2siLCJjaHVuayIsIm9iajJzdHIiLCJqb2luIiwic3RyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiUm91dGUiLCJyb3V0ZSIsImluZGV4IiwiX25leHQiLCJwYXRoIiwibmV4dCIsInNsaWNlIiwic2hpZnQiLCJyZWZyZXNoIiwiX2pvaW4iLCJraWRzIiwib2xkIiwiY29uY2F0IiwiYXBwZW5kIiwiUHJvbWlzZSIsInJlcyIsInJlaiIsInJlZGlyZWN0IiwiY29uZmlybSIsInJlc29sdmUiLCJjYWxsRXZlbnQiLCJjYXRjaCIsInRoZW4iLCJzaXplIiwibiIsIkpldFZpZXciLCJfY2hpbGRyZW4iLCJ1aSIsImNvbnRhaW5lciIsImpldHZpZXciLCJjcmVhdGVWaWV3IiwicmVuZGVyIiwidGFyZ2V0IiwiX3JlbmRlckZyYW1lTG9jayIsIl9zaG93Iiwic2VnbWVudCIsIl91cmxDaGFuZ2UiLCJsaW5rUm91dGVyIiwiZ2V0Um91dGVyIiwic2V0Iiwic2lsZW50IiwiaW5pdCIsIl8kdmlldyIsIl8kIiwicmVhZHkiLCJfJHVybCIsIm1lc3NhZ2UiLCJ1cmxDaGFuZ2UiLCJkZXN0cm95IiwiX2Rlc3Ryb3lLaWRzIiwidXNlIiwicGx1Z2luIiwidGFnTmFtZSIsIl9yZW5kZXIiLCJkb2N1bWVudCIsImJvZHkiLCJ0b05vZGUiLCJfcmVuZGVyX2ZpbmFsIiwiY2ZnIiwic2xvdCIsInJlamVjdCIsInJlc3BvbnNlIiwiY29weUNvbmZpZyIsIm9sZHVpIiwiYXNXaW4iLCJzZXRQb3NpdGlvbiIsImlzVmlzaWJsZSIsIl9pbml0IiwiX2luaXRVcmwiLCJlIiwiX2luaXRFcnJvciIsImVyciIsIndhaXRzIiwiZnJhbWUiLCJ3YWl0IiwiYWxsIiwibG9jayIsIl9yZW5kZXJGcmFtZSIsIl9jcmVhdGVTdWJWaWV3IiwiZXJyb3IiLCJjcmVhdGVGcm9tVVJMIiwidWlzIiwiSmV0Vmlld1JhdyIsIl91aSIsIlN1YlJvdXRlciIsImNiIiwiYSIsImdldCIsIl9vbmNlIiwiSmV0QXBwQmFzZSIsIndpbmRvdyIsInZlcnNpb24iLCJzdGFydCIsIl9zZXJ2aWNlcyIsIkV2ZW50U3lzdGVtIiwiX3N1YlNlZ21lbnQiLCJnZXRTZXJ2aWNlIiwic2V0U2VydmljZSIsImhhbmRsZXIiLCJwcm90b3R5cGUiLCIkc3VidmlldyIsImFkZFN1YlZpZXciLCJBcnJheSIsIm1ldGhvZCIsInBvaW50IiwiRGF0YUNvbGxlY3Rpb24iLCJSZWdFeHAiLCJEYXRlIiwiY29weSIsIiRyb3V0ZXIiLCJjbGlja0hhbmRsZXIiLCJzcmNFbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwidHJpZ2dlciIsIl9mb3JWaWV3IiwibG9hZFZpZXciLCJ2aWV3cyIsIl9sb2FkRXJyb3IiLCJFcnJvciIsIl9sb2FkVmlld0R5bmFtaWMiLCJtb2R1bGUiLCJfX2VzTW9kdWxlIiwibm93Iiwicm91dGVyIiwicmVzdCIsImFwcGx5IiwiZGF0YSIsImFjdGlvbiIsImJpbmQiLCJlciIsImRlYnVnIiwiY29uc29sZSIsInRleHQiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwidHlwZSIsImV4cGlyZSIsImZpcnN0SW5pdCIsIl9maXJzdF9zdGFydCIsInRvcCIsImJhc2UiLCJzZXRUaW1lb3V0IiwiYW5pbWF0aW9uIiwibm9kZSIsImh0bWwiLCJhZGRDc3MiLCJyZW1vdmVDc3MiLCJ1cmxTdHJpbmciLCJ0ZW1wbGF0ZSIsInVpZCIsIkhhc2hSb3V0ZXIiLCJfZGV0ZWN0UHJlZml4Iiwib25wb3BzdGF0ZSIsInJvdXRlcyIsImNvbXBhcmUiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicHJlZml4Iiwic3VmaXgiLCJfZ2V0UmF3Iiwicm91dGVyUHJlZml4IiwibG9jYXRpb24iLCJocmVmIiwiaXNQYXRjaGVkIiwicGF0Y2giLCJ3Iiwid2luIiwicHJvbWlzZSIsImZyZWV6ZSIsInNvbWUiLCIkZnJlZXplIiwicmVzaXplIiwiYmFzZUFkZCIsImJhc2VsYXlvdXQiLCJhZGRWaWV3IiwiYmFzZVJlbW92ZSIsInJlbW92ZVZpZXciLCJqdmlldyIsInN1YnMiLCJhcmd1bWVudHMiLCJsYXlvdXQiLCJwcm90b1VJIiwiJGluaXQiLCIkYXBwIiwiJHJlYWR5Iiwib3JpZ2luIiwicHJveHkiLCJKZXRBcHAiLCJyZXF1aXJlIiwiU3RvcmVSb3V0ZXIiLCJzdG9yYWdlIiwic2Vzc2lvbiIsInN0b3JlTmFtZSIsInB1dCIsIlVybFJvdXRlciIsInBhdGhuYW1lIiwiRW1wdHlSb3V0ZXIiLCJfJGNvbmZpZyIsIlVubG9hZEd1YXJkIiwiaGFzIiwic3RvcmUiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJmb3JFYWNoIiwiY29udGV4dCIsInRyaW0iLCJ3YXJuIiwieCIsIlN0cmluZyIsImRlbGltaXRlciIsInJ1c3NpYW5QbHVyYWxHcm91cHMiLCJlbmQiLCJwbHVyYWxUeXBlcyIsImFyYWJpYyIsImxhc3RUd28iLCJib3NuaWFuX3NlcmJpYW4iLCJjaGluZXNlIiwiY3JvYXRpYW4iLCJmcmVuY2giLCJnZXJtYW4iLCJydXNzaWFuIiwibGl0aHVhbmlhbiIsImN6ZWNoIiwicG9saXNoIiwiaWNlbGFuZGljIiwic2xvdmVuaWFuIiwicGx1cmFsVHlwZVRvTGFuZ3VhZ2VzIiwibGFuZ1RvVHlwZU1hcCIsIm1hcHBpbmciLCJyZXQiLCJsYW5ncyIsImxhbmciLCJwbHVyYWxUeXBlTmFtZSIsImxvY2FsZSIsImxhbmdUb1BsdXJhbFR5cGUiLCJlbiIsInBsdXJhbFR5cGVJbmRleCIsImNvdW50IiwiZXNjYXBlIiwidG9rZW4iLCJjb25zdHJ1Y3RUb2tlblJlZ2V4Iiwib3B0cyIsInN1ZmZpeCIsIlJhbmdlRXJyb3IiLCJkb2xsYXJSZWdleCIsImRvbGxhckJpbGxzWWFsbCIsImRlZmF1bHRUb2tlblJlZ2V4IiwidHJhbnNmb3JtUGhyYXNlIiwicGhyYXNlIiwic3Vic3RpdHV0aW9ucyIsInRva2VuUmVnZXgiLCJUeXBlRXJyb3IiLCJpbnRlcnBvbGF0aW9uUmVnZXgiLCJvcHRpb25zIiwic21hcnRfY291bnQiLCJ0ZXh0cyIsImV4cHJlc3Npb24iLCJhcmd1bWVudCIsIlBvbHlnbG90IiwicGhyYXNlcyIsImN1cnJlbnRMb2NhbGUiLCJhbGxvd01pc3NpbmciLCJvbk1pc3NpbmdLZXkiLCJpbnRlcnBvbGF0aW9uIiwibmV3TG9jYWxlIiwibW9yZVBocmFzZXMiLCJwcmVmaXhlZEtleSIsInVuc2V0IiwiY2xlYXIiLCJuZXdQaHJhc2VzIiwidCIsIl8iLCJ0cmFuc2Zvcm0iLCJ3ZWJpeFBvbHlnbG90IiwiTG9jYWxlIiwiX3ZpZXciLCJzZXRMYW5nRGF0YSIsInBjb25maWciLCJwb2x5Z2xvdCIsInBvbHkiLCJzZXJ2aWNlIiwibG9jTmFtZSIsImkxOG4iLCJzZXRMb2NhbGUiLCJnZXRMYW5nIiwic2V0TGFuZyIsInVybHMiLCJNZW51IiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsImdldFNlbGVjdGVkSWQiLCJzZWxlY3QiLCJleGlzdHMiLCJiYXNlaWNvbnMiLCJnb29kIiwic2F2aW5nIiwiYmFzZXRleHQiLCJTdGF0dXMiLCJzdGF0dXMiLCJpc2Vycm9yIiwiZXhwaXJlRGVsYXkiLCJpY29ucyIsImNvbnRlbnQiLCJhcmVhIiwic2V0SFRNTCIsInN1Y2Nlc3MiLCJzZXRTdGF0dXMiLCJmYWlsIiwiZ2V0U3RhdHVzIiwiaGlkZVN0YXR1cyIsIm1vZGUiLCJyZXNwb25zZVRleHQiLCJ0cmFjayIsImRwIiwiX2lkIiwiX29iaiIsInJlbW90ZSIsImFqYXgiLCJfbW9kZSIsIl91cmwiLCJfcmVxdWVzdCIsIl9oZWFkZXJzIiwiX2ZpbGVzIiwiVGhlbWUiLCJ0aGVtZSIsImdldFRoZW1lIiwic2V0VGhlbWUiLCJsaW5rcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibG5hbWUiLCJkaXNhYmxlZCIsInNraW4iLCJjb3B5UGFyYW1zIiwiVXJsUGFyYW0iLCJvcyIsIm9nIiwidmFsIiwiVXNlciIsImxvZ2luIiwibG9nb3V0IiwiYWZ0ZXJMb2dpbiIsImFmdGVyTG9nb3V0IiwicGluZyIsIm1vZGVsIiwidXNlciIsImdldFVzZXIiLCJzZXJ2ZXIiLCJwYXNzIiwiY2FuTmF2aWdhdGUiLCJfJHJvb3QiLCJwdWJsaWMiLCJzZXRJbnRlcnZhbCIsInBsdWdpbnMiLCJsb2dvdXRVcmwiLCJsb2dpblVybCIsInJlZ2lzdGVyVXJsIiwiQXV0aG9yaXphdGlvbiIsInJlZ2lzdGVyIiwicG9zdCIsImdyb3VwcyIsInNhdmUiLCJ1cGRhdGVGcm9tUmVzcG9uc2UiLCJzY2hlbWUiLCJjcmVhdGlvbkRhdGUiLCJsYW5ndWFnZXMiLCJ0ZXN0cmVzdWx0cyIsInBhc3NlZERhdGUiLCJ3b3JkcyIsIk15QXBwIiwiZGVmYXVsdHMiLCJBUFBOQU1FIiwiVkVSU0lPTiIsIkJVSUxEX0FTX01PRFVMRSIsIlBST0RVQ1RJT04iLCJuYXYiLCJqc29uIiwiYWxsb3dBY2Nlc3MiLCJhZGRHcm91cEZvcm0iLCJwb3NpdGlvbiIsImhlYWQiLCJlbGVtZW50cyIsImxhYmVsIiwibWFyZ2luIiwiY29scyIsImNsaWNrIiwic2F2ZUdyb3VwIiwiaGlkZVdpbmRvdyIsImhpZGUiLCJydWxlcyIsImlzTm90RW1wdHkiLCJtYWluV2luZG93Iiwic2hvd1dpbmRvdyIsImZvcm0iLCJ2YWx1ZXMiLCJnZXRWYWx1ZXMiLCJhZGQiLCJjbGVhckZvcm0iLCJjbGVhclZhbGlkYXRpb24iLCJhZGRXb3JkRm9ybSIsIm1haW5Sb3ciLCJsYWJlbFdpZHRoIiwibGFiZWxBbGlnbiIsIndpZHRoIiwiYWRkVHJhbnNsYXRpb24iLCJyb3dzIiwiaGlkZGVuIiwiaGVpZ2h0IiwicGFkZGluZ1kiLCJzYXZlRm9ybSIsInRyYW5zbGF0aW9uc0Zvcm0iLCJ3b3JkRm9ybSIsImJ0bkFkZFRyYW5zbGF0aW9uIiwiYWxsQ29tYm8iLCJmaW5kQWxsQ29tYm8iLCJjb21ibyIsIm9uQ29tYm9DaGFuZ2UiLCJuZXd2Iiwib2xkdiIsImNvbWJvc0FyciIsImFsbExhbmdzIiwicHVsbCIsInNwbGljZSIsInNldE9wdGlvbnMiLCJlbCIsInJlbW92ZVNlbGVjdGVkTGFuZ3MiLCJpdGVtIiwibmV3TGFuZ0FyciIsImtleXMiLCJtYXAiLCJrIiwid29yZElkIiwiZ2V0Q2hpbGRWaWV3cyIsInJvd3NDb3VudCIsIndvcmQiLCJ0cmFuc2xhdGlvblZhbHVlcyIsInRyYW5zbGF0aW9ucyIsInRyIiwibGFuZ3VhZ2VJZCIsImJhdGNoIiwidmFsaWRhdGUiLCJnZXRMaXN0Iiwic2VyaWFsaXplIiwib2xkVmFsIiwiZmluZCIsImRlZmluZSIsImNyZWF0ZVRlc3RGb3JtIiwiY3JlYXRlVGVzdCIsImxhbmd1YWdlIiwiZm9ybVBvcHVwIiwiZ3JvdXBJZCIsInNodWZmbGUiLCJhcnJheSIsInNodWZmbGVkQXJyIiwibnVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2NvcmUiLCJ3YWl0RGF0YSIsIndvcmRzTGlzdCIsImZpbHRlciIsIndvcmRJdGVtIiwid29yZHNBcnIiLCJ0cmFuc2xhdGlvbnNBcnIiLCJ0cmFuc2xhdGlvbiIsInBhcnRPZlNwZWVjaCIsInNob3dRdWVzdGlvbiIsIndvcmRPYmoiLCJyaWdodEFuc3dlciIsImNoYW5nZUJ1dHRvbnMiLCJnZXRIZWFkIiwic2F2ZVJlc3VsdHMiLCJzaG93UmVzdWx0cyIsInNldFRyYW5zbGF0aW9ucyIsImJ1dHRvbnMiLCJhdXRvd2lkdGgiLCJhbnN3ZXJBY3Rpb24iLCJib3JkZXJsZXNzIiwicGFkZGluZyIsImNzcyIsIkdyb3VwVmlldyIsImR0YWJsZSIsImNvbHVtbnMiLCJmaWxsc3BhY2UiLCJoZWFkZXIiLCJvbkNsaWNrIiwiY2FsbGJhY2siLCJyZW1vdmUiLCJleHBvcnRCdG4iLCJ0b0V4Y2VsIiwidGVzdEJ0biIsInRlc3RQb3B1cCIsImdyaWQiLCJ0ckFyciIsImxhbmdzTGlzdCIsImdldEl0ZW0iLCJsYW5nVmFsIiwiYWRkQ29sdW1zIiwiYXJyIiwidG9BcnJheSIsImluc2VydEF0IiwicmVmcmVzaENvbHVtbnMiLCJUb3BWaWV3IiwibWVudSIsImljb24iLCJwYWRkaW5nWCIsImF1dGhvcml6YXRpb24iLCJJbmRleFBhZ2UiLCJsb2dpbkZvcm0iLCJsaW5rIiwiTWFpblZpZXciLCJ0ZXN0UmVzdWx0cyIsInNvcnQiLCJtaW5XaWR0aCIsImZvcm1hdCIsImRhdGVUb1N0ciIsImFkZFdvcmQiLCJidXR0b24iLCJpbnB1dFdpZHRoIiwiYWRkR3JvdXAiLCJQcm9maWxlVmlldyIsInJlY29yZHNBcnIiLCJyZWNvcmQiLCJwcmV2UmVjIiwicmF0aW5nIiwiUmVnaXN0ZXJQYWdlIiwicmVnaXN0ZXJGb3JtIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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OGEsWUFBUSxDQURULEVBQ1lDLE1BQU0sQ0FDaEI7QUFDQzdiLFdBQU0sUUFEUCxFQUNpQlcsU0FBUyxhQUQxQixFQUN5Q2xCLE9BQU8sVUFEaEQsRUFDNEQyTSxNQUFNO0FBRGxFLEtBRGdCO0FBRGxCLElBSFM7QUFKVSxHQUFyQjs7QUFpQkEsU0FBTztBQUNOeVAsU0FBTSxDQUNMLEVBREssRUFFTDtBQUNDcUIsVUFBTSxDQUNMLEVBREssRUFFTDBILFlBRkssRUFHTCxFQUhLO0FBRFAsSUFGSyxFQVNMLEVBVEs7QUFEQSxHQUFQO0FBYUEsRTs7d0JBRUR0ZSxJLG1CQUFPO0FBQUE7O0FBQ04sT0FBS2hHLEVBQUwsQ0FBUSxhQUFSLEVBQXVCVSxXQUF2QixDQUFtQyxhQUFuQyxFQUFrRCxZQUFNO0FBQ3ZELE9BQU11YixTQUFTLE9BQUtqYyxFQUFMLENBQVEsY0FBUixFQUF3QmtjLFNBQXhCLEVBQWY7QUFDQSxPQUFNZ0gsZ0JBQWdCLElBQUl0SixzREFBSixFQUF0Qjs7QUFFQXNKLGlCQUFjckosUUFBZCxDQUF1Qm9DLE1BQXZCLEVBQStCcFgsSUFBL0IsQ0FBb0MsVUFBQ3VDLFFBQUQsRUFBYztBQUNqRCxRQUFJQSxRQUFKLEVBQWM7QUFDYixZQUFLN0gsSUFBTCxDQUFVLFlBQVY7QUFDQTtBQUNELElBSkQ7QUFLQSxHQVREO0FBVUEsRTs7O0VBOUN3Q3lGLGlEOztBQUFyQnFmLDJFIiwiZmlsZSI6Im15YXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY29kZWJhc2UvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc291cmNlcy9teWFwcC5qc1wiKTtcbiIsImNsYXNzIEpldEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iod2ViaXgpIHtcclxuICAgICAgICB0aGlzLndlYml4SmV0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLndlYml4ID0gd2ViaXg7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5fc3VicyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSB7fTtcclxuICAgIH1cclxuICAgIGdldFJvb3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XHJcbiAgICB9XHJcbiAgICBkZXN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2RldGFjaEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lTdWJzKCk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gdGhpcy5fY29udGFpbmVyID0gdGhpcy5hcHAgPSB0aGlzLl9wYXJlbnQgPSB0aGlzLl9yb290ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHNldFBhcmFtKGlkLCB2YWx1ZSwgdXJsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RhdGFbaWRdICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhW2lkXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWdtZW50LnVwZGF0ZShpZCwgdmFsdWUsIDApO1xyXG4gICAgICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRQYXJhbShpZCwgcGFyZW50KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9kYXRhW2lkXTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiIHx8ICFwYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2aWV3ID0gdGhpcy5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcuZ2V0UGFyYW0oaWQsIHBhcmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0VXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWdtZW50LnN1YnVybCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0VXJsU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWdtZW50LnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBnZXRQYXJlbnRWaWV3KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAkJChpZCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm9vdCA9IHRoaXMuZ2V0Um9vdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcm9vdC5xdWVyeVZpZXcoKG9iaiA9PiAob2JqLmNvbmZpZy5pZCA9PT0gaWQgfHwgb2JqLmNvbmZpZy5sb2NhbElkID09PSBpZCkgJiZcclxuICAgICAgICAgICAgICAgIChvYmouJHNjb3BlID09PSByb290LiRzY29wZSkpLCBcInNlbGZcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb24ob2JqLCBuYW1lLCBjb2RlKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBvYmouYXR0YWNoRXZlbnQobmFtZSwgY29kZSk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2goeyBvYmosIGlkIH0pO1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuICAgIGNvbnRhaW5zKHZpZXcpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtpZCA9IHRoaXMuX3N1YnNba2V5XS52aWV3O1xyXG4gICAgICAgICAgICBpZiAoa2lkID09PSB2aWV3IHx8IGtpZC5jb250YWlucyh2aWV3KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0U3ViVmlldyhuYW1lKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViID0gdGhpcy5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdWIuc3Vidmlldy52aWV3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFN1YlZpZXdJbmZvKG5hbWUpIHtcclxuICAgICAgICBjb25zdCBzdWIgPSB0aGlzLl9zdWJzW25hbWUgfHwgXCJkZWZhdWx0XCJdO1xyXG4gICAgICAgIGlmIChzdWIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgc3Vidmlldzogc3ViLCBwYXJlbnQ6IHRoaXMgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiX3RvcFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YnNbbmFtZV0gPSB7IHVybDogXCJcIiwgaWQ6IG51bGwsIHBvcHVwOiB0cnVlIH07XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXdJbmZvKG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIGEgY2hpbGQgdmlldywgc2VhcmNoZXMgZm9yIG5lYXJlc3QgcGFyZW50IHdpdGggc3Vidmlld1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5nZXRTdWJWaWV3SW5mbyhuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBfZGV0YWNoRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcclxuICAgICAgICBmb3IgKGxldCBpID0gZXZlbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGV2ZW50c1tpXS5vYmouZGV0YWNoRXZlbnQoZXZlbnRzW2ldLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfZGVzdHJveVN1YnMoKSB7XHJcbiAgICAgICAgLy8gZGVzdHJveSBzdWIgdmlld3NcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YlZpZXcgPSB0aGlzLl9zdWJzW2tleV0udmlldztcclxuICAgICAgICAgICAgLy8gaXQgcG9zc2libGUgdGhhdCBzdWJ2aWV3IHdhcyBub3QgbG9hZGVkIHdpdGggYW55IGNvbnRlbnQgeWV0XHJcbiAgICAgICAgICAgIC8vIHNvIGNoZWNrIG9uIG51bGxcclxuICAgICAgICAgICAgaWYgKHN1YlZpZXcpIHtcclxuICAgICAgICAgICAgICAgIHN1YlZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlc2V0IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzXHJcbiAgICAgICAgdGhpcy5fc3VicyA9IHt9O1xyXG4gICAgfVxyXG4gICAgX2luaXRfdXJsX2RhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fc2VnbWVudC5jdXJyZW50KCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHt9O1xyXG4gICAgICAgIHRoaXMud2ViaXguZXh0ZW5kKHRoaXMuX2RhdGEsIHVybC5wYXJhbXMsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgX2dldERlZmF1bHRTdWIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N1YnMuZGVmYXVsdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3Vicy5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1YiA9IHRoaXMuX3N1YnNba2V5XTtcclxuICAgICAgICAgICAgaWYgKCFzdWIuYnJhbmNoICYmIHN1Yi52aWV3ICYmIGtleSAhPT0gXCJfdG9wXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gc3ViLnZpZXcuX2dldERlZmF1bHRTdWIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF9yb3V0ZWRfdmlldygpIHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3ViID0gcGFyZW50Ll9nZXREZWZhdWx0U3ViKCk7XHJcbiAgICAgICAgaWYgKCFzdWIgJiYgc3ViICE9PSB0aGlzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcmVudC5fcm91dGVkX3ZpZXcoKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBwYXJzZSh1cmwpIHtcclxuICAgIC8vIHJlbW92ZSBzdGFydGluZyAvXHJcbiAgICBpZiAodXJsWzBdID09PSBcIi9cIikge1xyXG4gICAgICAgIHVybCA9IHVybC5zdWJzdHIoMSk7XHJcbiAgICB9XHJcbiAgICAvLyBzcGxpdCB1cmwgYnkgXCIvXCJcclxuICAgIGNvbnN0IHBhcnRzID0gdXJsLnNwbGl0KFwiL1wiKTtcclxuICAgIGNvbnN0IGNodW5rcyA9IFtdO1xyXG4gICAgLy8gZm9yIGVhY2ggcGFnZSBpbiB1cmxcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB0ZXN0ID0gcGFydHNbaV07XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XHJcbiAgICAgICAgLy8gZGV0ZWN0IHBhcmFtc1xyXG4gICAgICAgIC8vIHN1cHBvcnQgb2xkIFx0XHRcdHNvbWU6YT1iOmM9ZFxyXG4gICAgICAgIC8vIGFuZCBuZXcgbm90YXRpb25cdFx0c29tZT9hPWImYz1kXHJcbiAgICAgICAgbGV0IHBvcyA9IHRlc3QuaW5kZXhPZihcIjpcIik7XHJcbiAgICAgICAgaWYgKHBvcyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcG9zID0gdGVzdC5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gdGVzdC5zdWJzdHIocG9zICsgMSkuc3BsaXQoL1tcXDpcXD9cXCZdL2cpO1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgaGFzaCBvZiBuYW1lZCBwYXJhbXNcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbSBvZiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRjaHVuayA9IHBhcmFtLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFtkY2h1bmtbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGRjaHVua1sxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3RvcmUgcGFyc2VkIHZhbHVlc1xyXG4gICAgICAgIGNodW5rc1tpXSA9IHtcclxuICAgICAgICAgICAgcGFnZTogKHBvcyA+IC0xID8gdGVzdC5zdWJzdHIoMCwgcG9zKSA6IHRlc3QpLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHJlc3VsdCxcclxuICAgICAgICAgICAgaXNOZXc6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gcmV0dXJuIGFycmF5IG9mIHBhZ2Ugb2JqZWN0c1xyXG4gICAgcmV0dXJuIGNodW5rcztcclxufVxyXG5mdW5jdGlvbiB1cmwyc3RyKHN0YWNrKSB7XHJcbiAgICBjb25zdCB1cmwgPSBbXTtcclxuICAgIGZvciAoY29uc3QgY2h1bmsgb2Ygc3RhY2spIHtcclxuICAgICAgICB1cmwucHVzaChcIi9cIiArIGNodW5rLnBhZ2UpO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG9iajJzdHIoY2h1bmsucGFyYW1zKTtcclxuICAgICAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIHVybC5wdXNoKFwiP1wiICsgcGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXJsLmpvaW4oXCJcIik7XHJcbn1cclxuZnVuY3Rpb24gb2JqMnN0cihvYmopIHtcclxuICAgIGNvbnN0IHN0ciA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc3RyLnB1c2goXCImXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHIucHVzaChrZXkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChvYmpba2V5XSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0ci5qb2luKFwiXCIpO1xyXG59XG5cbmNsYXNzIFJvdXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHJvdXRlLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMuX25leHQgPSAxO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygcm91dGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZSA9IHtcclxuICAgICAgICAgICAgICAgIHVybDogcGFyc2Uocm91dGUpLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogcm91dGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgY3VycmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS51cmxbdGhpcy5pbmRleF07XHJcbiAgICB9XHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4ICsgdGhpcy5fbmV4dF07XHJcbiAgICB9XHJcbiAgICBzdWJ1cmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGUudXJsLnNsaWNlKHRoaXMuaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgc2hpZnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3V0ZSh0aGlzLnJvdXRlLCB0aGlzLmluZGV4ICsgdGhpcy5fbmV4dCk7XHJcbiAgICB9XHJcbiAgICByZWZyZXNoKCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMucm91dGUudXJsO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmluZGV4ICsgMTsgaSA8IHVybC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB1cmxbaV0uaXNOZXcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRvU3RyaW5nKCkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IHVybDJzdHIodGhpcy5zdWJ1cmwoKSk7XHJcbiAgICAgICAgcmV0dXJuIHN0ciA/IHN0ci5zdWJzdHIoMSkgOiBcIlwiO1xyXG4gICAgfVxyXG4gICAgX2pvaW4ocGF0aCwga2lkcykge1xyXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICBpZiAocGF0aCA9PT0gbnVsbCkgeyAvLyBjaGFuZ2Ugb2YgcGFyYW1ldGVycywgcm91dGUgZWxlbWVudHMgYXJlIG5vdCBhZmZlY3RlZFxyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvbGQgPSB0aGlzLnJvdXRlLnVybDtcclxuICAgICAgICB1cmwgPSBvbGQuc2xpY2UoMCwgdGhpcy5pbmRleCArIChraWRzID8gdGhpcy5fbmV4dCA6IDApKTtcclxuICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwuY29uY2F0KHBhcnNlKHBhdGgpKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cmwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChvbGRbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxbaV0udmlldyA9IG9sZFtpXS52aWV3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9sZFtpXSAmJiB1cmxbaV0ucGFnZSA9PT0gb2xkW2ldLnBhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmxbaV0uaXNOZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kKHBhdGgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLl9qb2luKHBhdGgsIHRydWUpO1xyXG4gICAgICAgIHRoaXMucm91dGUucGF0aCA9IHVybDJzdHIodXJsKTtcclxuICAgICAgICB0aGlzLnJvdXRlLnVybCA9IHVybDtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZS5wYXRoO1xyXG4gICAgfVxyXG4gICAgc2hvdyhwYXRoLCB2aWV3LCBraWRzKSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5fam9pbihwYXRoLCBraWRzKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlZGlyZWN0ID0gdXJsMnN0cih1cmwpO1xyXG4gICAgICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICByZWRpcmVjdCxcclxuICAgICAgICAgICAgICAgIGNvbmZpcm06IFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IHZpZXcgPyB2aWV3LmFwcCA6IG51bGw7XHJcbiAgICAgICAgICAgIC8vIHdoZW4gY3JlYXRpbmcgYSBuZXcgcm91dGUsIGl0IHBvc3NpYmxlIHRoYXQgaXQgd2lsbCBub3QgaGF2ZSBhbnkgY29udGVudFxyXG4gICAgICAgICAgICAvLyBndWFyZCBpcyBub3QgbmVjZXNzYXJ5IGluIHN1Y2ggY2FzZVxyXG4gICAgICAgICAgICBpZiAoYXBwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhcHAuY2FsbEV2ZW50KFwiYXBwOmd1YXJkXCIsIFtvYmoucmVkaXJlY3QsIHZpZXcsIG9ial0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWooKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqLmNvbmZpcm0uY2F0Y2goKCkgPT4gb2JqLnJlZGlyZWN0ID0gbnVsbCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqLnJlZGlyZWN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5yZWRpcmVjdCAhPT0gcmVkaXJlY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHAuc2hvdyhvYmoucmVkaXJlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlaigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGUucGF0aCA9IHJlZGlyZWN0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZS51cmwgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICByZXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzaXplKG4pIHtcclxuICAgICAgICB0aGlzLl9uZXh0ID0gbjtcclxuICAgIH1cclxuICAgIHNwbGl0KCkge1xyXG4gICAgICAgIGNvbnN0IHJvdXRlID0ge1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMucm91dGUudXJsLnNsaWNlKHRoaXMuaW5kZXggKyAxKSxcclxuICAgICAgICAgICAgcGF0aDogXCJcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJvdXRlLnVybC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcm91dGUucGF0aCA9IHVybDJzdHIocm91dGUudXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3V0ZShyb3V0ZSwgMCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUobmFtZSwgdmFsdWUsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgY2h1bmsgPSB0aGlzLnJvdXRlLnVybFt0aGlzLmluZGV4ICsgKGluZGV4IHx8IDApXTtcclxuICAgICAgICBpZiAoIWNodW5rKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGUudXJsLnB1c2goeyBwYWdlOiBcIlwiLCBwYXJhbXM6IHt9IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUobmFtZSwgdmFsdWUsIGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgY2h1bmsucGFnZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2h1bmsucGFyYW1zW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm91dGUucGF0aCA9IHVybDJzdHIodGhpcy5yb3V0ZS51cmwpO1xyXG4gICAgfVxyXG59XG5cbmNsYXNzIEpldFZpZXcgZXh0ZW5kcyBKZXRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcCwgY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoYXBwLndlYml4KTtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICAvL3RoaXMuJGNvbmZpZyA9IGNvbmZpZztcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG4gICAgdWkodWksIGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBjb25maWcuY29udGFpbmVyIHx8IHVpLmNvbnRhaW5lcjtcclxuICAgICAgICBjb25zdCBqZXR2aWV3ID0gdGhpcy5hcHAuY3JlYXRlVmlldyh1aSk7XHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChqZXR2aWV3KTtcclxuICAgICAgICBqZXR2aWV3LnJlbmRlcihjb250YWluZXIsIHRoaXMuX3NlZ21lbnQsIHRoaXMpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdWkgIT09IFwib2JqZWN0XCIgfHwgKHVpIGluc3RhbmNlb2YgSmV0QmFzZSkpIHtcclxuICAgICAgICAgICAgLy8gcmF3IHdlYml4IFVJXHJcbiAgICAgICAgICAgIHJldHVybiBqZXR2aWV3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGpldHZpZXcuZ2V0Um9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3cocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgICAgIC8vIGNvbnZlcnQgcGFyYW1ldGVycyBvYmplY3QgdG8gdXJsXHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXRoID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHBhdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFyYW0oa2V5LCBwYXRoW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhdGggPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZGVsaWdhdGUgdG8gYXBwIGluIGNhc2Ugb2Ygcm9vdCBwcmVmaXhcclxuICAgICAgICAgICAgaWYgKHBhdGguc3Vic3RyKDAsIDEpID09PSBcIi9cIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3cocGF0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbG9jYWwgcGF0aCwgZG8gbm90aGluZ1xyXG4gICAgICAgICAgICBpZiAocGF0aC5pbmRleE9mKFwiLi9cIikgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBwYXJlbnQgcGF0aCwgY2FsbCBwYXJlbnQgdmlld1xyXG4gICAgICAgICAgICBpZiAocGF0aC5pbmRleE9mKFwiLi4vXCIpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LnNob3cocGF0aC5zdWJzdHIoMyksIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc2hvdyhcIi9cIiArIHBhdGguc3Vic3RyKDMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzdWIgPSB0aGlzLmdldFN1YlZpZXdJbmZvKGNvbmZpZy50YXJnZXQpO1xyXG4gICAgICAgICAgICBpZiAoc3ViKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViLnBhcmVudCAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWIucGFyZW50LnNob3cocGF0aCwgY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbmZpZy50YXJnZXQgJiYgY29uZmlnLnRhcmdldCAhPT0gXCJkZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyRnJhbWVMb2NrKGNvbmZpZy50YXJnZXQsIHN1Yi5zdWJ2aWV3LCBwYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwLnNob3coXCIvXCIgKyBwYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fc2hvdyh0aGlzLl9zZWdtZW50LCBwYXRoLCB0aGlzKTtcclxuICAgIH1cclxuICAgIF9zaG93KHNlZ21lbnQsIHBhdGgsIHZpZXcpIHtcclxuICAgICAgICByZXR1cm4gc2VnbWVudC5zaG93KHBhdGgsIHZpZXcsIHRydWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0X3VybF9kYXRhKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl91cmxDaGFuZ2UoKTtcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNlZ21lbnQucm91dGUubGlua1JvdXRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHAuZ2V0Um91dGVyKCkuc2V0KHNlZ21lbnQucm91dGUucGF0aCwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcC5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3NlZ21lbnQucm91dGUucGF0aF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0KF8kdmlldywgXyQpIHtcclxuICAgICAgICAvLyBzdHViXHJcbiAgICB9XHJcbiAgICByZWFkeShfJHZpZXcsIF8kdXJsKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgY29uZmlnKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLndlYml4Lm1lc3NhZ2UoXCJWaWV3OkNvbmZpZyBpcyBub3QgaW1wbGVtZW50ZWRcIik7XHJcbiAgICB9XHJcbiAgICB1cmxDaGFuZ2UoXyR2aWV3LCBfJHVybCkge1xyXG4gICAgICAgIC8vIHN0dWJcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gc3R1YlxyXG4gICAgfVxyXG4gICAgZGVzdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLl9kZXN0cm95S2lkcygpO1xyXG4gICAgICAgIC8vIGRlc3Ryb3kgYWN0dWFsIFVJXHJcbiAgICAgICAgdGhpcy5fcm9vdC5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG4gICAgdXNlKHBsdWdpbiwgY29uZmlnKSB7XHJcbiAgICAgICAgcGx1Z2luKHRoaXMuYXBwLCB0aGlzLCBjb25maWcpO1xyXG4gICAgfVxyXG4gICAgcmVmcmVzaCgpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVybCgpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lLaWRzKCk7XHJcbiAgICAgICAgdGhpcy5fZGVzdHJveVN1YnMoKTtcclxuICAgICAgICB0aGlzLl9kZXRhY2hFdmVudHMoKTtcclxuICAgICAgICBpZiAodGhpcy5fY29udGFpbmVyLnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcm9vdC5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQucmVmcmVzaCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIodGhpcy5fc2VnbWVudCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIocm9vdCwgdXJsLCBwYXJlbnQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB1cmwgPSBuZXcgUm91dGUodXJsLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudCA9IHVybDtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5faW5pdF91cmxfZGF0YSgpO1xyXG4gICAgICAgIHJvb3QgPSByb290IHx8IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgY29uc3QgX2NvbnRhaW5lciA9ICh0eXBlb2Ygcm9vdCA9PT0gXCJzdHJpbmdcIikgPyB0aGlzLndlYml4LnRvTm9kZShyb290KSA6IHJvb3Q7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciAhPT0gX2NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIgPSBfY29udGFpbmVyO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCkudGhlbigoKSA9PiB0aGlzLmdldFJvb3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlbmRlcih1cmwpIHtcclxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZygpO1xyXG4gICAgICAgIGlmIChjb25maWcudGhlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnLnRoZW4oY2ZnID0+IHRoaXMuX3JlbmRlcl9maW5hbChjZmcsIHVybCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcl9maW5hbChjb25maWcsIHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX3JlbmRlcl9maW5hbChjb25maWcsIHVybCkge1xyXG4gICAgICAgIC8vIGdldCBwcmV2aW91cyB2aWV3IGluIHRoZSBzYW1lIHNsb3RcclxuICAgICAgICBsZXQgc2xvdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IG51bGw7XHJcbiAgICAgICAgbGV0IHNob3cgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuX2NvbnRhaW5lci50YWdOYW1lKSB7XHJcbiAgICAgICAgICAgIHNsb3QgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgICAgIGlmIChzbG90LnBvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgICAgICAgICAgc2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLndlYml4LiQkKHNsb3QuaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb250YWluZXIgPSB0aGlzLl9jb250YWluZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHZpZXcgYWxyZWFkeSBkZXN0cm95ZWRcclxuICAgICAgICBpZiAoIXRoaXMuYXBwIHx8ICFjb250YWluZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuX3NlZ21lbnQuY3VycmVudCgpO1xyXG4gICAgICAgIC8vIHVzaW5nIHdyYXBwZXIgb2JqZWN0LCBzbyB1aSBjYW4gYmUgY2hhbmdlZCBmcm9tIGFwcDpyZW5kZXIgZXZlbnRcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB7IHVpOiB7fSB9O1xyXG4gICAgICAgIHRoaXMuYXBwLmNvcHlDb25maWcoY29uZmlnLCByZXN1bHQudWksIHRoaXMuX3N1YnMpO1xyXG4gICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDpyZW5kZXJcIiwgW3RoaXMsIHVybCwgcmVzdWx0XSk7XHJcbiAgICAgICAgcmVzdWx0LnVpLiRzY29wZSA9IHRoaXM7XHJcbiAgICAgICAgLyogZGVzdHJveSBvbGQgSFRNTCBhdHRhY2hlZCB2aWV3cyBiZWZvcmUgY3JlYXRpbmcgbmV3IG9uZSAqL1xyXG4gICAgICAgIGlmICghc2xvdCAmJiBjdXJyZW50LmlzTmV3ICYmIGN1cnJlbnQudmlldykge1xyXG4gICAgICAgICAgICBjdXJyZW50LnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIGZvciBhZGRpbmcgaW5zaWRlIG9mIG11bHRpdmlldyAtIHByZXNlcnZlIG9sZCBpZFxyXG4gICAgICAgICAgICBpZiAoc2xvdCAmJiAhc2hvdykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkdWkgPSBjb250YWluZXI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBvbGR1aS5nZXRQYXJlbnRWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5uYW1lID09PSBcIm11bHRpdmlld1wiICYmICFyZXN1bHQudWkuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudWkuaWQgPSBvbGR1aS5jb25maWcuaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMuYXBwLndlYml4LnVpKHJlc3VsdC51aSwgY29udGFpbmVyKTtcclxuICAgICAgICAgICAgY29uc3QgYXNXaW4gPSB0aGlzLl9yb290O1xyXG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgdXJsIGFkZGVkIHRvIGlnbm9yZSB0aGlzLnVpIGNhbGxzXHJcbiAgICAgICAgICAgIGlmIChzaG93ICYmIGFzV2luLnNldFBvc2l0aW9uICYmICFhc1dpbi5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICAgICAgYXNXaW4uc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNoZWNrLCBpZiB3ZSBhcmUgcmVwbGFjaW5nIHNvbWUgb2xkZXIgdmlld1xyXG4gICAgICAgICAgICBpZiAoc2xvdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNsb3QudmlldyAmJiBzbG90LnZpZXcgIT09IHRoaXMgJiYgc2xvdC52aWV3ICE9PSB0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsb3Qudmlldy5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbG90LmlkID0gdGhpcy5fcm9vdC5jb25maWcuaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRQYXJlbnRWaWV3KCkgfHwgIXRoaXMuYXBwLmFwcClcclxuICAgICAgICAgICAgICAgICAgICBzbG90LnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB3ZSBoYXZlIHN1YmFwcCwgc2V0IHdob2xlIGFwcCBhcyBhIHZpZXdcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbyBvbiBkZXN0cnVjdGlvbiwgdGhlIHdob2xlIGFwcCB3aWxsIGJlIGRlc3Ryb3llZFxyXG4gICAgICAgICAgICAgICAgICAgIHNsb3QudmlldyA9IHRoaXMuYXBwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmlzTmV3KSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50LnZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC5pc05ldyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2luaXQodGhpcy5fcm9vdCwgdXJsKSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdXJsQ2hhbmdlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdFVybCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVhZHkodGhpcy5fcm9vdCwgdXJsLnN1YnVybCgpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBQcm9taXNlLnJlamVjdChlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmNhdGNoKGVyciA9PiB0aGlzLl9pbml0RXJyb3IodGhpcywgZXJyKSk7XHJcbiAgICB9XHJcbiAgICBfaW5pdCh2aWV3LCB1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbml0KHZpZXcsIHVybC5zdWJ1cmwoKSk7XHJcbiAgICB9XHJcbiAgICBfdXJsQ2hhbmdlKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLmNhbGxFdmVudChcImFwcDp1cmxjaGFuZ2VcIiwgW3RoaXMsIHRoaXMuX3NlZ21lbnRdKTtcclxuICAgICAgICBjb25zdCB3YWl0cyA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuX3N1YnMpIHtcclxuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLl9zdWJzW2tleV07XHJcbiAgICAgICAgICAgIGNvbnN0IHdhaXQgPSB0aGlzLl9yZW5kZXJGcmFtZUxvY2soa2V5LCBmcmFtZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIGlmICh3YWl0KSB7XHJcbiAgICAgICAgICAgICAgICB3YWl0cy5wdXNoKHdhaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh3YWl0cykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVybENoYW5nZSh0aGlzLl9yb290LCB0aGlzLl9zZWdtZW50LnN1YnVybCgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9yZW5kZXJGcmFtZUxvY2soa2V5LCBmcmFtZSwgcGF0aCkge1xyXG4gICAgICAgIC8vIGlmIHN1YnZpZXcgaXMgbm90IG9jY3VwaWVkIGJ5IHNvbWUgcmVuZGVyaW5nIHlldFxyXG4gICAgICAgIGlmICghZnJhbWUubG9jaykge1xyXG4gICAgICAgICAgICAvLyByZXRyZWl2ZSBhbmQgc3RvcmUgcmVuZGVyaW5nIGVuZCBwcm9taXNlXHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2sgPSB0aGlzLl9yZW5kZXJGcmFtZShrZXksIGZyYW1lLCBwYXRoKTtcclxuICAgICAgICAgICAgaWYgKGxvY2spIHtcclxuICAgICAgICAgICAgICAgIC8vIGNsZWFyIGxvY2sgYWZ0ZXIgZnJhbWUgcmVuZGVyaW5nXHJcbiAgICAgICAgICAgICAgICAvLyBhcyBwcm9taXNlLmZpbmFsbHkgaXMgbm90IHN1cHBvcnRlZCBieSAgV2ViaXggbGVzc2VyIHRoYW4gNi4yXHJcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBhIG1vcmUgdmVyYm9zZSBub3RhdGlvblxyXG4gICAgICAgICAgICAgICAgZnJhbWUubG9jayA9IGxvY2sudGhlbigoKSA9PiBmcmFtZS5sb2NrID0gbnVsbCwgKCkgPT4gZnJhbWUubG9jayA9IG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJldHVybiByZW5kZXJpbmcgZW5kIHByb21pc2VcclxuICAgICAgICByZXR1cm4gZnJhbWUubG9jaztcclxuICAgIH1cclxuICAgIF9yZW5kZXJGcmFtZShrZXksIGZyYW1lLCBwYXRoKSB7XHJcbiAgICAgICAgLy9kZWZhdWx0IHJvdXRlXHJcbiAgICAgICAgaWYgKGtleSA9PT0gXCJkZWZhdWx0XCIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlZ21lbnQubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIGEgbmV4dCBzZWdtZW50IGluIHVybCwgcmVuZGVyIGl0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgdGhpcy5fc2VnbWVudC5zaGlmdCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChmcmFtZS52aWV3ICYmIGZyYW1lLnBvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGVyZSBpcyBubyBuZXh0IHNlZ21lbnQsIGRlbGV0ZSB0aGUgZXhpc3Rpbmcgc3ViLXZpZXdcclxuICAgICAgICAgICAgICAgIGZyYW1lLnZpZXcuZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICAgICAgZnJhbWUudmlldyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9pZiBuZXcgcGF0aCBwcm92aWRlZCwgc2V0IGl0IHRvIHRoZSBmcmFtZVxyXG4gICAgICAgIGlmIChwYXRoICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZyYW1lLnVybCA9IHBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGluIGNhc2Ugb2Ygcm91dGVkIHN1Yi12aWV3XHJcbiAgICAgICAgaWYgKGZyYW1lLnJvdXRlKSB7XHJcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBuZXcgcGF0aCBmb3Igc3ViLXZpZXdcclxuICAgICAgICAgICAgaWYgKHBhdGggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmcmFtZS5yb3V0ZS5zaG93KHBhdGgsIGZyYW1lLnZpZXcpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVTdWJWaWV3KGZyYW1lLCBmcmFtZS5yb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBkbyBub3QgdHJpZ2dlciBvbkNoYW5nZSBmb3IgaXNvbGF0ZWQgc3ViLXZpZXdzXHJcbiAgICAgICAgICAgIGlmIChmcmFtZS5icmFuY2gpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmlldyA9IGZyYW1lLnZpZXc7XHJcbiAgICAgICAgLy8gaWYgdmlldyBkb2Vzbid0IGV4aXN0cyB5ZXQsIGluaXQgaXRcclxuICAgICAgICBpZiAoIXZpZXcgJiYgZnJhbWUudXJsKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZnJhbWUudXJsID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmcsIHNvIHdlIGhhdmUgaXNvbGF0ZWQgc3VidmlldyB1cmxcclxuICAgICAgICAgICAgICAgIGZyYW1lLnJvdXRlID0gbmV3IFJvdXRlKGZyYW1lLnVybCwgMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY3JlYXRlU3ViVmlldyhmcmFtZSwgZnJhbWUucm91dGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gb2JqZWN0LCBzbyB3ZSBoYXZlIGFuIGVtYmVkZWQgc3Vidmlld1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmcmFtZS51cmwgPT09IFwiZnVuY3Rpb25cIiAmJiAhKHZpZXcgaW5zdGFuY2VvZiBmcmFtZS51cmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldyA9IG5ldyBmcmFtZS51cmwodGhpcy5hcHAsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF2aWV3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlldyA9IGZyYW1lLnVybDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0cmlnZ2VyIG9uQ2hhbmdlIGZvciBhbHJlYWR5IGV4aXN0ZWQgdmlld1xyXG4gICAgICAgIGlmICh2aWV3KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aWV3LnJlbmRlcihmcmFtZSwgKGZyYW1lLnJvdXRlIHx8IHRoaXMuX3NlZ21lbnQpLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBfaW5pdEVycm9yKHZpZXcsIGVycikge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICAgIGlmIHZpZXcgaXMgZGVzdHJveWVkLCBpZ25vcmUgYW55IHZpZXcgcmVsYXRlZCBlcnJvcnNcclxuICAgICAgICAqL1xyXG4gICAgICAgIGlmICh0aGlzLmFwcCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcC5lcnJvcihcImFwcDplcnJvcjppbml0dmlld1wiLCBbZXJyLCB2aWV3XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgX2NyZWF0ZVN1YlZpZXcoc3ViLCBzdWJ1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHAuY3JlYXRlRnJvbVVSTChzdWJ1cmwuY3VycmVudCgpLCBzdWIudmlldykudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXcucmVuZGVyKHN1Yiwgc3VidXJsLCB0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9kZXN0cm95S2lkcygpIHtcclxuICAgICAgICAvLyBkZXN0cm95IGNoaWxkIHZpZXdzXHJcbiAgICAgICAgY29uc3QgdWlzID0gdGhpcy5fY2hpbGRyZW47XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHVpcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAodWlzW2ldICYmIHVpc1tpXS5kZXN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICB1aXNbaV0uZGVzdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlc2V0IHZhcnMgZm9yIGJldHRlciBHQyBwcm9jZXNzaW5nXHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcclxuICAgIH1cclxufVxuXG4vLyB3cmFwcGVyIGZvciByYXcgb2JqZWN0cyBhbmQgSmV0IDEueCBzdHJ1Y3RzXHJcbmNsYXNzIEpldFZpZXdSYXcgZXh0ZW5kcyBKZXRWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcCwgY29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoYXBwLCBjb25maWcpO1xyXG4gICAgICAgIHRoaXMuX3VpID0gY29uZmlnLnVpO1xyXG4gICAgfVxyXG4gICAgY29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91aTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBTdWJSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIGNvbmZpZywgYXBwKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gXCJcIjtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgICAgIGNvbnN0IGEgPSB0aGlzLmFwcDtcclxuICAgICAgICBhLmFwcC5nZXRSb3V0ZXIoKS5zZXQoYS5fc2VnbWVudC5hcHBlbmQodGhpcy5wYXRoKSwgeyBzaWxlbnQ6IHRydWUgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGF0aDtcclxuICAgIH1cclxufVxuXG5sZXQgX29uY2UgPSB0cnVlO1xyXG5jbGFzcyBKZXRBcHBCYXNlIGV4dGVuZHMgSmV0QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuICAgICAgICBjb25zdCB3ZWJpeCA9IChjb25maWcgfHwge30pLndlYml4IHx8IHdpbmRvdy53ZWJpeDtcclxuICAgICAgICBzdXBlcih3ZWJpeCk7XHJcbiAgICAgICAgLy8gaW5pdCBjb25maWdcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMud2ViaXguZXh0ZW5kKHtcclxuICAgICAgICAgICAgbmFtZTogXCJBcHBcIixcclxuICAgICAgICAgICAgdmVyc2lvbjogXCIxLjBcIixcclxuICAgICAgICAgICAgc3RhcnQ6IFwiL2hvbWVcIlxyXG4gICAgICAgIH0sIGNvbmZpZywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5hcHAgPSB0aGlzLmNvbmZpZy5hcHA7XHJcbiAgICAgICAgdGhpcy5yZWFkeSA9IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2VzID0ge307XHJcbiAgICAgICAgdGhpcy53ZWJpeC5leHRlbmQodGhpcywgdGhpcy53ZWJpeC5FdmVudFN5c3RlbSk7XHJcbiAgICB9XHJcbiAgICBnZXRVcmwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YlNlZ21lbnQuc3VidXJsKCk7XHJcbiAgICB9XHJcbiAgICBnZXRVcmxTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YlNlZ21lbnQudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGdldFNlcnZpY2UobmFtZSkge1xyXG4gICAgICAgIGxldCBvYmogPSB0aGlzLl9zZXJ2aWNlc1tuYW1lXTtcclxuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHRoaXMuX3NlcnZpY2VzW25hbWVdID0gb2JqKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgc2V0U2VydmljZShuYW1lLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZXNbbmFtZV0gPSBoYW5kbGVyO1xyXG4gICAgfVxyXG4gICAgZGVzdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdldFN1YlZpZXcoKS5kZXN0cnVjdG9yKCk7XHJcbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG4gICAgLy8gY29weSBvYmplY3QgYW5kIGNvbGxlY3QgZXh0cmEgaGFuZGxlcnNcclxuICAgIGNvcHlDb25maWcob2JqLCB0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgICAgIC8vIHJhdyB1aSBjb25maWdcclxuICAgICAgICBpZiAob2JqIGluc3RhbmNlb2YgSmV0QmFzZSB8fFxyXG4gICAgICAgICAgICAodHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5wcm90b3R5cGUgaW5zdGFuY2VvZiBKZXRCYXNlKSkge1xyXG4gICAgICAgICAgICBvYmogPSB7ICRzdWJ2aWV3OiBvYmogfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3VidmlldyBwbGFjZWhvbGRlclxyXG4gICAgICAgIGlmICh0eXBlb2Ygb2JqLiRzdWJ2aWV3ICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkU3ViVmlldyhvYmosIHRhcmdldCwgY29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcHJvY2VzcyBzdWItcHJvcGVydGllc1xyXG4gICAgICAgIHRhcmdldCA9IHRhcmdldCB8fCAob2JqIGluc3RhbmNlb2YgQXJyYXkgPyBbXSA6IHt9KTtcclxuICAgICAgICBmb3IgKGNvbnN0IG1ldGhvZCBpbiBvYmopIHtcclxuICAgICAgICAgICAgbGV0IHBvaW50ID0gb2JqW21ldGhvZF07XHJcbiAgICAgICAgICAgIC8vIHZpZXcgY2xhc3NcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwb2ludCA9PT0gXCJmdW5jdGlvblwiICYmIHBvaW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEJhc2UpIHtcclxuICAgICAgICAgICAgICAgIHBvaW50ID0geyAkc3VidmlldzogcG9pbnQgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocG9pbnQgJiYgdHlwZW9mIHBvaW50ID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgICAgICAgICAhKHBvaW50IGluc3RhbmNlb2YgdGhpcy53ZWJpeC5EYXRhQ29sbGVjdGlvbikgJiYgIShwb2ludCBpbnN0YW5jZW9mIFJlZ0V4cCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwb2ludCBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IG5ldyBEYXRlKHBvaW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSB0aGlzLmNvcHlDb25maWcocG9pbnQsIChwb2ludCBpbnN0YW5jZW9mIEFycmF5ID8gW10gOiB7fSksIGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvcHkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0gPSBjb3B5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFttZXRob2RdID0gcG9pbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuICAgIGdldFJvdXRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kcm91dGVyO1xyXG4gICAgfVxyXG4gICAgY2xpY2tIYW5kbGVyKGUpIHtcclxuICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSAoZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmlnZ2VyID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInRyaWdnZXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAodHJpZ2dlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvclZpZXcodGFyZ2V0LCB2aWV3ID0+IHZpZXcuYXBwLnRyaWdnZXIodHJpZ2dlcikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwicm91dGVcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAocm91dGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JWaWV3KHRhcmdldCwgdmlldyA9PiB2aWV3LnNob3cocm91dGUpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldFJvb3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViVmlldygpLmdldFJvb3QoKTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zdWJTZWdtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN1YlZpZXcoKS5yZWZyZXNoKCkudGhlbih2aWV3ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3RoaXMuZ2V0VXJsKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkVmlldyh1cmwpIHtcclxuICAgICAgICBjb25zdCB2aWV3cyA9IHRoaXMuY29uZmlnLnZpZXdzO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIGlmICh1cmwgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9sb2FkRXJyb3IoXCJcIiwgbmV3IEVycm9yKFwiV2ViaXggSmV0OiBFbXB0eSB1cmwgc2VnbWVudFwiKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAodmlld3MpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygdmlld3MgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbSBsb2FkaW5nIHN0cmF0ZWd5XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmlld3ModXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByZWRlZmluZWQgaGFzaFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZpZXdzW3VybF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsID09PSBcIl9ibGFua1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9sb2FkVmlld0R5bmFtaWModXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9sb2FkRXJyb3IodXJsLCBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3VzdG9tIGhhbmRsZXIgY2FuIHJldHVybiB2aWV3IG9yIGl0cyBwcm9taXNlXHJcbiAgICAgICAgaWYgKCFyZXN1bHQudGhlbikge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0IGVycm9yIGhhbmRsZXJcclxuICAgICAgICByZXN1bHQgPSByZXN1bHRcclxuICAgICAgICAgICAgLnRoZW4obW9kdWxlID0+IG1vZHVsZS5fX2VzTW9kdWxlID8gbW9kdWxlLmRlZmF1bHQgOiBtb2R1bGUpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5fbG9hZEVycm9yKHVybCwgZXJyKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIF9mb3JWaWV3KHRhcmdldCwgaGFuZGxlcikge1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSB0aGlzLndlYml4LiQkKHRhcmdldCk7XHJcbiAgICAgICAgaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgaGFuZGxlcih2aWV3LiRzY29wZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2xvYWRWaWV3RHluYW1pYyh1cmwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGNyZWF0ZUZyb21VUkwoY2h1bmssIG5vdykge1xyXG4gICAgICAgIGxldCB2aWV3O1xyXG4gICAgICAgIGlmIChjaHVuay5pc05ldyB8fCAhY2h1bmsudmlldykge1xyXG4gICAgICAgICAgICB2aWV3ID0gdGhpcy5sb2FkVmlldyhjaHVuay5wYWdlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odWkgPT4gdGhpcy5jcmVhdGVWaWV3KHVpLCBuYW1lKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2aWV3ID0gUHJvbWlzZS5yZXNvbHZlKGNodW5rLnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmlldztcclxuICAgIH1cclxuICAgIGNyZWF0ZVZpZXcodWksIG5hbWUpIHtcclxuICAgICAgICBsZXQgb2JqO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdWkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICBpZiAodWkucHJvdG90eXBlIGluc3RhbmNlb2YgSmV0QXBwQmFzZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVUkgY2xhc3NcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdWkoeyBhcHA6IHRoaXMsIG5hbWUsIHJvdXRlcjogU3ViUm91dGVyIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVpLnByb3RvdHlwZSBpbnN0YW5jZW9mIEpldEJhc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJIGNsYXNzXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHVpKHRoaXMsIHsgbmFtZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFVJIGZhY3RvcnkgZnVuY3Rpb25zXHJcbiAgICAgICAgICAgICAgICB1aSA9IHVpKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1aSBpbnN0YW5jZW9mIEpldEJhc2UpIHtcclxuICAgICAgICAgICAgb2JqID0gdWk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBVSSBvYmplY3RcclxuICAgICAgICAgICAgb2JqID0gbmV3IEpldFZpZXdSYXcodGhpcywgeyBuYW1lLCB1aSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuICAgIC8vIHNob3cgdmlldyBwYXRoXHJcbiAgICBzaG93KHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0aGlzLl9jb250YWluZXIsICh1cmwgfHwgdGhpcy5jb25maWcuc3RhcnQpKTtcclxuICAgIH1cclxuICAgIC8vIGV2ZW50IGhlbHBlcnNcclxuICAgIHRyaWdnZXIobmFtZSwgLi4ucmVzdCkge1xyXG4gICAgICAgIHRoaXMuYXBwbHkobmFtZSwgcmVzdCk7XHJcbiAgICB9XHJcbiAgICBhcHBseShuYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRXZlbnQobmFtZSwgZGF0YSk7XHJcbiAgICB9XHJcbiAgICBhY3Rpb24obmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlYml4LmJpbmQoZnVuY3Rpb24gKC4uLnJlc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHBseShuYW1lLCByZXN0KTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuICAgIG9uKG5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLmF0dGFjaEV2ZW50KG5hbWUsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgdXNlKHBsdWdpbiwgY29uZmlnKSB7XHJcbiAgICAgICAgcGx1Z2luKHRoaXMsIG51bGwsIGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBlcnJvcihuYW1lLCBlcikge1xyXG4gICAgICAgIHRoaXMuY2FsbEV2ZW50KG5hbWUsIGVyKTtcclxuICAgICAgICB0aGlzLmNhbGxFdmVudChcImFwcDplcnJvclwiLCBlcik7XHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUgKi9cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuZGVidWcpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcltpXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJbaV0gaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0ID0gZXJbaV0ubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dC5pbmRleE9mKFwiTW9kdWxlIGJ1aWxkIGZhaWxlZFwiKSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHgxYlxcW1swLTk7XSptL2csIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IGA8cHJlIHN0eWxlPSdmb250LXNpemU6MTZweDsgYmFja2dyb3VuZC1jb2xvcjogI2VjNjg3MzsgY29sb3I6ICMwMDA7IHBhZGRpbmc6MTBweDsnPiR7dGV4dH08L3ByZT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCArPSBcIjxicj48YnI+Q2hlY2sgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2ViaXgubWVzc2FnZSh7IHR5cGU6IFwiZXJyb3JcIiwgdGV4dDogdGV4dCwgZXhwaXJlOiAtMSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIHRzbGludDplbmFibGUgKi9cclxuICAgIH1cclxuICAgIC8vIHJlbmRlcnMgdG9wIHZpZXdcclxuICAgIHJlbmRlcihyb290LCB1cmwsIHBhcmVudCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9ICh0eXBlb2Ygcm9vdCA9PT0gXCJzdHJpbmdcIikgP1xyXG4gICAgICAgICAgICB0aGlzLndlYml4LnRvTm9kZShyb290KSA6XHJcbiAgICAgICAgICAgIChyb290IHx8IGRvY3VtZW50LmJvZHkpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0SW5pdCA9ICF0aGlzLiRyb3V0ZXI7XHJcbiAgICAgICAgbGV0IHBhdGggPSBudWxsO1xyXG4gICAgICAgIGlmIChmaXJzdEluaXQpIHtcclxuICAgICAgICAgICAgaWYgKF9vbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4LmF0dGFjaEV2ZW50KFwib25DbGlja1wiLCBlID0+IHRoaXMuY2xpY2tIYW5kbGVyKGUpKTtcclxuICAgICAgICAgICAgICAgIF9vbmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHVybCA9IG5ldyBSb3V0ZSh1cmwsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YlNlZ21lbnQgPSB0aGlzLl9maXJzdF9zdGFydCh1cmwpO1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJTZWdtZW50LnJvdXRlLmxpbmtSb3V0ZXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgIHBhdGggPSB1cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcHApIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gdXJsLnNwbGl0KCkucm91dGUucGF0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSB1cmwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0b3AgPSB0aGlzLmdldFN1YlZpZXcoKTtcclxuICAgICAgICBjb25zdCBzZWdtZW50ID0gdGhpcy5fc3ViU2VnbWVudDtcclxuICAgICAgICBjb25zdCByZWFkeSA9IHNlZ21lbnQuc2hvdyhwYXRoLCB0b3ApXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuY3JlYXRlRnJvbVVSTChzZWdtZW50LmN1cnJlbnQoKSwgdG9wKSlcclxuICAgICAgICAgICAgLnRoZW4odmlldyA9PiB2aWV3LnJlbmRlcihyb290LCBzZWdtZW50KSlcclxuICAgICAgICAgICAgLnRoZW4oYmFzZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5zZXQoc2VnbWVudC5yb3V0ZS5wYXRoLCB7IHNpbGVudDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsRXZlbnQoXCJhcHA6cm91dGVcIiwgW3RoaXMuZ2V0VXJsKCldKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJhc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZWFkeSA9IHRoaXMucmVhZHkudGhlbigoKSA9PiByZWFkeSk7XHJcbiAgICAgICAgcmV0dXJuIHJlYWR5O1xyXG4gICAgfVxyXG4gICAgZ2V0U3ViVmlldygpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3ViU2VnbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3ViU2VnbWVudC5jdXJyZW50KCkudmlldztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBKZXRWaWV3KHRoaXMsIHt9KTtcclxuICAgIH1cclxuICAgIF9maXJzdF9zdGFydChyb3V0ZSkge1xyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQgPSByb3V0ZTtcclxuICAgICAgICBjb25zdCBjYiA9IChhKSA9PiBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93KGEpO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIHRoaXMuJHJvdXRlciA9IG5ldyAodGhpcy5jb25maWcucm91dGVyKShjYiwgdGhpcy5jb25maWcsIHRoaXMpO1xyXG4gICAgICAgIC8vIHN0YXJ0IGFuaW1hdGlvbiBmb3IgdG9wLWxldmVsIGFwcFxyXG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIgPT09IGRvY3VtZW50LmJvZHkgJiYgdGhpcy5jb25maWcuYW5pbWF0aW9uICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCBub2RlID0gdGhpcy5fY29udGFpbmVyO1xyXG4gICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwuYWRkQ3NzKG5vZGUsIFwid2ViaXhhcHBzdGFydFwiKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYml4Lmh0bWwucmVtb3ZlQ3NzKG5vZGUsIFwid2ViaXhhcHBzdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ViaXguaHRtbC5hZGRDc3Mobm9kZSwgXCJ3ZWJpeGFwcFwiKTtcclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJvdXRlKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIG5vIHVybCBkZWZpbmVkLCBjaGVjayByb3V0ZXIgZmlyc3RcclxuICAgICAgICAgICAgbGV0IHVybFN0cmluZyA9IHRoaXMuJHJvdXRlci5nZXQoKTtcclxuICAgICAgICAgICAgaWYgKCF1cmxTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIHVybFN0cmluZyA9IHRoaXMuY29uZmlnLnN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnNldCh1cmxTdHJpbmcsIHsgc2lsZW50OiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJvdXRlID0gbmV3IFJvdXRlKHVybFN0cmluZywgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYXBwKSB7XHJcbiAgICAgICAgICAgIHJvdXRlLmN1cnJlbnQoKS52aWV3ID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKHJvdXRlLm5leHQoKSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGUgPSByb3V0ZS5zcGxpdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcm91dGUgPSBuZXcgUm91dGUodGhpcy5jb25maWcuc3RhcnQsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgIH1cclxuICAgIC8vIGVycm9yIGR1cmluZyB2aWV3IHJlc29sdmluZ1xyXG4gICAgX2xvYWRFcnJvcih1cmwsIGVycikge1xyXG4gICAgICAgIHRoaXMuZXJyb3IoXCJhcHA6ZXJyb3I6cmVzb2x2ZVwiLCBbZXJyLCB1cmxdKTtcclxuICAgICAgICByZXR1cm4geyB0ZW1wbGF0ZTogXCIgXCIgfTtcclxuICAgIH1cclxuICAgIGFkZFN1YlZpZXcob2JqLCB0YXJnZXQsIGNvbmZpZykge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IG9iai4kc3VidmlldyAhPT0gdHJ1ZSA/IG9iai4kc3VidmlldyA6IG51bGw7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IG9iai5uYW1lIHx8ICh1cmwgPyB0aGlzLndlYml4LnVpZCgpIDogXCJkZWZhdWx0XCIpO1xyXG4gICAgICAgIHRhcmdldC5pZCA9IG9iai5pZCB8fCBcInNcIiArIHRoaXMud2ViaXgudWlkKCk7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IGNvbmZpZ1tuYW1lXSA9IHtcclxuICAgICAgICAgICAgaWQ6IHRhcmdldC5pZCxcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICBicmFuY2g6IG9iai5icmFuY2gsXHJcbiAgICAgICAgICAgIHBvcHVwOiBvYmoucG9wdXBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB2aWV3LnBvcHVwID8gbnVsbCA6IHRhcmdldDtcclxuICAgIH1cclxufVxuXG5jbGFzcyBIYXNoUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNiLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgICAgICB0aGlzLl9kZXRlY3RQcmVmaXgoKTtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoKSA9PiB0aGlzLmNiKHRoaXMuZ2V0KCkpO1xyXG4gICAgfVxyXG4gICAgc2V0KHBhdGgsIGNvbmZpZykge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tcGFyZSA9IHBhdGguc3BsaXQoXCI/XCIsIDIpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbmZpZy5yb3V0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5yb3V0ZXNba2V5XSA9PT0gY29tcGFyZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBrZXkgKyAoY29tcGFyZS5sZW5ndGggPiAxID8gXCI/XCIgKyBjb21wYXJlWzFdIDogXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCkgIT09IHBhdGgpIHtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHRoaXMucHJlZml4ICsgdGhpcy5zdWZpeCArIHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNvbmZpZyB8fCAhY29uZmlnLnNpbGVudCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2IocGF0aCksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCgpIHtcclxuICAgICAgICBsZXQgcGF0aCA9IHRoaXMuX2dldFJhdygpLnJlcGxhY2UodGhpcy5wcmVmaXgsIFwiXCIpLnJlcGxhY2UodGhpcy5zdWZpeCwgXCJcIik7XHJcbiAgICAgICAgcGF0aCA9IHBhdGggIT09IFwiL1wiID8gcGF0aCA6IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnJvdXRlcykge1xyXG4gICAgICAgICAgICBjb25zdCBjb21wYXJlID0gcGF0aC5zcGxpdChcIj9cIiwgMik7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnLnJvdXRlc1tjb21wYXJlWzBdXTtcclxuICAgICAgICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgICAgICAgICAgcGF0aCA9IGtleSArIChjb21wYXJlLmxlbmd0aCA+IDEgPyBcIj9cIiArIGNvbXBhcmVbMV0gOiBcIlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH1cclxuICAgIF9kZXRlY3RQcmVmaXgoKSB7XHJcbiAgICAgICAgLy8gdXNlIFwiIyFcIiBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG4gICAgICAgIGNvbnN0IHN1Zml4ID0gdGhpcy5jb25maWcucm91dGVyUHJlZml4O1xyXG4gICAgICAgIHRoaXMuc3VmaXggPSBcIiNcIiArICgodHlwZW9mIHN1Zml4ID09PSBcInVuZGVmaW5lZFwiKSA/IFwiIVwiIDogc3VmaXgpO1xyXG4gICAgICAgIHRoaXMucHJlZml4ID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIiwgMilbMF07XHJcbiAgICB9XHJcbiAgICBfZ2V0UmF3KCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xyXG4gICAgfVxyXG59XG5cbmxldCBpc1BhdGNoZWQgPSBmYWxzZTtcclxuZnVuY3Rpb24gcGF0Y2godykge1xyXG4gICAgaWYgKGlzUGF0Y2hlZCB8fCAhdykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlzUGF0Y2hlZCA9IHRydWU7XHJcbiAgICAvLyBjdXN0b20gcHJvbWlzZSBmb3IgSUU4XHJcbiAgICBjb25zdCB3aW4gPSB3aW5kb3c7XHJcbiAgICBpZiAoIXdpbi5Qcm9taXNlKSB7XHJcbiAgICAgICAgd2luLlByb21pc2UgPSB3LnByb21pc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2ZXJzaW9uID0gdy52ZXJzaW9uLnNwbGl0KFwiLlwiKTtcclxuICAgIC8vIHdpbGwgYmUgZml4ZWQgaW4gd2ViaXggNS4zXHJcbiAgICBpZiAodmVyc2lvblswXSAqIDEwICsgdmVyc2lvblsxXSAqIDEgPCA1Mykge1xyXG4gICAgICAgIHcudWkuZnJlZXplID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgLy8gZGlzYWJsZWQgYmVjYXVzZSB3ZWJpeCBqZXQgNS4wIGNhbid0IGhhbmRsZSByZXNpemUgb2Ygc2Nyb2xsdmlldyBjb3JyZWN0bHlcclxuICAgICAgICAgICAgLy8gdy51aS4kZnJlZXplID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gaGFuZGxlcigpO1xyXG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy50aGVuKSB7XHJcbiAgICAgICAgICAgICAgICByZXMudGhlbihmdW5jdGlvbiAoc29tZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHcudWkuJGZyZWV6ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHcudWkucmVzaXplKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHcudWkuJGZyZWV6ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdy51aS5yZXNpemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBhZGRpbmcgdmlld3MgYXMgY2xhc3Nlc1xyXG4gICAgY29uc3QgYmFzZUFkZCA9IHcudWkuYmFzZWxheW91dC5wcm90b3R5cGUuYWRkVmlldztcclxuICAgIGNvbnN0IGJhc2VSZW1vdmUgPSB3LnVpLmJhc2VsYXlvdXQucHJvdG90eXBlLnJlbW92ZVZpZXc7XHJcbiAgICBjb25zdCBjb25maWcgPSB7XHJcbiAgICAgICAgYWRkVmlldyh2aWV3LCBpbmRleCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUud2ViaXhKZXQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGp2aWV3ID0gdGhpcy4kc2NvcGU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzID0ge307XHJcbiAgICAgICAgICAgICAgICB2aWV3ID0ganZpZXcuYXBwLmNvcHlDb25maWcodmlldywge30sIHN1YnMpO1xyXG4gICAgICAgICAgICAgICAgYmFzZUFkZC5hcHBseSh0aGlzLCBbdmlldywgaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHN1YnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBqdmlldy5fcmVuZGVyRnJhbWUoa2V5LCBzdWJzW2tleV0sIG51bGwpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdmlldy5fc3Vic1trZXldID0gc3Vic1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXcuaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmFzZUFkZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVWaWV3KCkge1xyXG4gICAgICAgICAgICBiYXNlUmVtb3ZlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS53ZWJpeEpldCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VicyA9IHRoaXMuJHNjb3BlLl9zdWJzO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgYWxsIHN1Yi12aWV3cywgZGVzdHJveSBhbmQgY2xlYW4gdGhlIHJlbW92ZWQgb25lXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdWJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVzdCA9IHN1YnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXcuJCQodGVzdC5pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVzdC52aWV3LmRlc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHN1YnNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdy5leHRlbmQody51aS5sYXlvdXQucHJvdG90eXBlLCBjb25maWcsIHRydWUpO1xyXG4gICAgdy5leHRlbmQody51aS5iYXNlbGF5b3V0LnByb3RvdHlwZSwgY29uZmlnLCB0cnVlKTtcclxuICAgIC8vIHdyYXBwZXIgZm9yIHVzaW5nIEpldCBBcHBzIGFzIHZpZXdzXHJcbiAgICB3LnByb3RvVUkoe1xyXG4gICAgICAgIG5hbWU6IFwiamV0YXBwXCIsXHJcbiAgICAgICAgJGluaXQoY2ZnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcCA9IG5ldyB0aGlzLmFwcChjZmcpO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHcudWlkKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY2ZnLmJvZHkgPSB7IGlkIH07XHJcbiAgICAgICAgICAgIHRoaXMuJHJlYWR5LnB1c2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwLnJlbmRlcih7IGlkIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuJGFwcCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbiA9IHRoaXMuJGFwcFtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW4gPT09IFwiZnVuY3Rpb25cIiAmJiAhdGhpc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gb3JpZ2luLmJpbmQodGhpcy4kYXBwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIHcudWkucHJveHkpO1xyXG59XG5cbmNsYXNzIEpldEFwcCBleHRlbmRzIEpldEFwcEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcbiAgICAgICAgY29uZmlnLnJvdXRlciA9IGNvbmZpZy5yb3V0ZXIgfHwgSGFzaFJvdXRlcjtcclxuICAgICAgICBzdXBlcihjb25maWcpO1xyXG4gICAgICAgIHBhdGNoKHRoaXMud2ViaXgpO1xyXG4gICAgfVxyXG4gICAgX2xvYWRWaWV3RHluYW1pYyh1cmwpIHtcclxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXFwuL2csIFwiL1wiKTtcclxuICAgICAgICByZXR1cm4gcmVxdWlyZShcImpldC12aWV3cy9cIiArIHVybCk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgU3RvcmVSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY2IsIGNvbmZpZywgYXBwKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gY29uZmlnLnN0b3JhZ2UgfHwgYXBwLndlYml4LnN0b3JhZ2Uuc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLm5hbWUgPSAoY29uZmlnLnN0b3JlTmFtZSB8fCBjb25maWcuaWQgKyBcIjpyb3V0ZVwiKTtcclxuICAgICAgICB0aGlzLmNiID0gY2I7XHJcbiAgICB9XHJcbiAgICBzZXQocGF0aCwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnB1dCh0aGlzLm5hbWUsIHBhdGgpO1xyXG4gICAgICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYihwYXRoKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0KHRoaXMubmFtZSk7XHJcbiAgICB9XHJcbn1cblxuY2xhc3MgVXJsUm91dGVyIGV4dGVuZHMgSGFzaFJvdXRlciB7XHJcbiAgICBfZGV0ZWN0UHJlZml4KCkge1xyXG4gICAgICAgIHRoaXMucHJlZml4ID0gXCJcIjtcclxuICAgICAgICB0aGlzLnN1Zml4ID0gdGhpcy5jb25maWcucm91dGVyUHJlZml4IHx8IFwiXCI7XHJcbiAgICB9XHJcbiAgICBfZ2V0UmF3KCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIH1cclxufVxuXG5jbGFzcyBFbXB0eVJvdXRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYiwgXyRjb25maWcpIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY2IgPSBjYjtcclxuICAgIH1cclxuICAgIHNldChwYXRoLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xyXG4gICAgICAgIGlmICghY29uZmlnIHx8ICFjb25maWcuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYihwYXRoKSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhdGg7XHJcbiAgICB9XHJcbn1cblxuZnVuY3Rpb24gVW5sb2FkR3VhcmQoYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIHZpZXcub24oYXBwLCBgYXBwOmd1YXJkYCwgZnVuY3Rpb24gKF8kdXJsLCBwb2ludCwgcHJvbWlzZSkge1xyXG4gICAgICAgIGlmIChwb2ludCA9PT0gdmlldyB8fCBwb2ludC5jb250YWlucyh2aWV3KSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBjb25maWcoKTtcclxuICAgICAgICAgICAgaWYgKHJlcyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHByb21pc2UuY29uZmlybSA9IFByb21pc2UucmVqZWN0KHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9taXNlLmNvbmZpcm0gPSBwcm9taXNlLmNvbmZpcm0udGhlbigoKSA9PiByZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cblxuLy8gICAgIChjKSAyMDEyLTIwMTggQWlyYm5iLCBJbmMuXG5cbi8vIHZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcbmZ1bmN0aW9uIGhhcyhzdG9yZSwga2V5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc3RvcmUsIGtleSk7XG59XG4vLyB2YXIgZm9yRWFjaCA9IHJlcXVpcmUoJ2Zvci1lYWNoJyk7XG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgaGFuZGxlciwgY29udGV4dCkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKGhhcyhvYmosIGtleSkpIHtcbiAgICAgIGhhbmRsZXIuY2FsbCgoY29udGV4dCB8fCBvYmopLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgIH1cbiAgfVxufVxuLy8gdmFyIHRyaW0gPSByZXF1aXJlKCdzdHJpbmcucHJvdG90eXBlLnRyaW0nKTtcbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csICcnKTtcbn1cbi8vIHZhciB3YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIG1lc3NhZ2U7XG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG5cbiAgdHJ5IHsgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpOyB9IGNhdGNoICh4KSB7fVxufVxuXG52YXIgcmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcbnZhciBzcGxpdCA9IFN0cmluZy5wcm90b3R5cGUuc3BsaXQ7XG5cbi8vICMjIyMgUGx1cmFsaXphdGlvbiBtZXRob2RzXG4vLyBUaGUgc3RyaW5nIHRoYXQgc2VwYXJhdGVzIHRoZSBkaWZmZXJlbnQgcGhyYXNlIHBvc3NpYmlsaXRpZXMuXG52YXIgZGVsaW1pdGVyID0gJ3x8fHwnO1xuXG52YXIgcnVzc2lhblBsdXJhbEdyb3VwcyA9IGZ1bmN0aW9uIChuKSB7XG4gIHZhciBlbmQgPSBuICUgMTA7XG4gIGlmIChuICE9PSAxMSAmJiBlbmQgPT09IDEpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAoMiA8PSBlbmQgJiYgZW5kIDw9IDQgJiYgIShuID49IDEyICYmIG4gPD0gMTQpKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgcmV0dXJuIDI7XG59O1xuXG4vLyBNYXBwaW5nIGZyb20gcGx1cmFsaXphdGlvbiBncm91cCBwbHVyYWwgbG9naWMuXG52YXIgcGx1cmFsVHlwZXMgPSB7XG4gIGFyYWJpYzogZnVuY3Rpb24gKG4pIHtcbiAgICAvLyBodHRwOi8vd3d3LmFyYWJleWVzLm9yZy9QbHVyYWxfRm9ybXNcbiAgICBpZiAobiA8IDMpIHsgcmV0dXJuIG47IH1cbiAgICB2YXIgbGFzdFR3byA9IG4gJSAxMDA7XG4gICAgaWYgKGxhc3RUd28gPj0gMyAmJiBsYXN0VHdvIDw9IDEwKSByZXR1cm4gMztcbiAgICByZXR1cm4gbGFzdFR3byA+PSAxMSA/IDQgOiA1O1xuICB9LFxuICBib3NuaWFuX3NlcmJpYW46IHJ1c3NpYW5QbHVyYWxHcm91cHMsXG4gIGNoaW5lc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gIGNyb2F0aWFuOiBydXNzaWFuUGx1cmFsR3JvdXBzLFxuICBmcmVuY2g6IGZ1bmN0aW9uIChuKSB7IHJldHVybiBuID4gMSA/IDEgOiAwOyB9LFxuICBnZXJtYW46IGZ1bmN0aW9uIChuKSB7IHJldHVybiBuICE9PSAxID8gMSA6IDA7IH0sXG4gIHJ1c3NpYW46IHJ1c3NpYW5QbHVyYWxHcm91cHMsXG4gIGxpdGh1YW5pYW46IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKG4gJSAxMCA9PT0gMSAmJiBuICUgMTAwICE9PSAxMSkgeyByZXR1cm4gMDsgfVxuICAgIHJldHVybiBuICUgMTAgPj0gMiAmJiBuICUgMTAgPD0gOSAmJiAobiAlIDEwMCA8IDExIHx8IG4gJSAxMDAgPiAxOSkgPyAxIDogMjtcbiAgfSxcbiAgY3plY2g6IGZ1bmN0aW9uIChuKSB7XG4gICAgaWYgKG4gPT09IDEpIHsgcmV0dXJuIDA7IH1cbiAgICByZXR1cm4gKG4gPj0gMiAmJiBuIDw9IDQpID8gMSA6IDI7XG4gIH0sXG4gIHBvbGlzaDogZnVuY3Rpb24gKG4pIHtcbiAgICBpZiAobiA9PT0gMSkgeyByZXR1cm4gMDsgfVxuICAgIHZhciBlbmQgPSBuICUgMTA7XG4gICAgcmV0dXJuIDIgPD0gZW5kICYmIGVuZCA8PSA0ICYmIChuICUgMTAwIDwgMTAgfHwgbiAlIDEwMCA+PSAyMCkgPyAxIDogMjtcbiAgfSxcbiAgaWNlbGFuZGljOiBmdW5jdGlvbiAobikgeyByZXR1cm4gKG4gJSAxMCAhPT0gMSB8fCBuICUgMTAwID09PSAxMSkgPyAxIDogMDsgfSxcbiAgc2xvdmVuaWFuOiBmdW5jdGlvbiAobikge1xuICAgIHZhciBsYXN0VHdvID0gbiAlIDEwMDtcbiAgICBpZiAobGFzdFR3byA9PT0gMSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlmIChsYXN0VHdvID09PSAyKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKGxhc3RUd28gPT09IDMgfHwgbGFzdFR3byA9PT0gNCkge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICAgIHJldHVybiAzO1xuICB9XG59O1xuXG5cbi8vIE1hcHBpbmcgZnJvbSBwbHVyYWxpemF0aW9uIGdyb3VwIHRvIGluZGl2aWR1YWwgbGFuZ3VhZ2UgY29kZXMvbG9jYWxlcy5cbi8vIFdpbGwgbG9vayB1cCBiYXNlZCBvbiBleGFjdCBtYXRjaCwgaWYgbm90IGZvdW5kIGFuZCBpdCdzIGEgbG9jYWxlIHdpbGwgcGFyc2UgdGhlIGxvY2FsZVxuLy8gZm9yIGxhbmd1YWdlIGNvZGUsIGFuZCBpZiB0aGF0IGRvZXMgbm90IGV4aXN0IHdpbGwgZGVmYXVsdCB0byAnZW4nXG52YXIgcGx1cmFsVHlwZVRvTGFuZ3VhZ2VzID0ge1xuICBhcmFiaWM6IFsnYXInXSxcbiAgYm9zbmlhbl9zZXJiaWFuOiBbJ2JzLUxhdG4tQkEnLCAnYnMtQ3lybC1CQScsICdzcmwtUlMnLCAnc3ItUlMnXSxcbiAgY2hpbmVzZTogWydpZCcsICdpZC1JRCcsICdqYScsICdrbycsICdrby1LUicsICdsbycsICdtcycsICd0aCcsICd0aC1USCcsICd6aCddLFxuICBjcm9hdGlhbjogWydocicsICdoci1IUiddLFxuICBnZXJtYW46IFsnZmEnLCAnZGEnLCAnZGUnLCAnZW4nLCAnZXMnLCAnZmknLCAnZWwnLCAnaGUnLCAnaGktSU4nLCAnaHUnLCAnaHUtSFUnLCAnaXQnLCAnbmwnLCAnbm8nLCAncHQnLCAnc3YnLCAndHInXSxcbiAgZnJlbmNoOiBbJ2ZyJywgJ3RsJywgJ3B0LWJyJ10sXG4gIHJ1c3NpYW46IFsncnUnLCAncnUtUlUnXSxcbiAgbGl0aHVhbmlhbjogWydsdCddLFxuICBjemVjaDogWydjcycsICdjcy1DWicsICdzayddLFxuICBwb2xpc2g6IFsncGwnXSxcbiAgaWNlbGFuZGljOiBbJ2lzJ10sXG4gIHNsb3ZlbmlhbjogWydzbC1TTCddXG59O1xuXG5mdW5jdGlvbiBsYW5nVG9UeXBlTWFwKG1hcHBpbmcpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBmb3JFYWNoKG1hcHBpbmcsIGZ1bmN0aW9uIChsYW5ncywgdHlwZSkge1xuICAgIGZvckVhY2gobGFuZ3MsIGZ1bmN0aW9uIChsYW5nKSB7XG4gICAgICByZXRbbGFuZ10gPSB0eXBlO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gcGx1cmFsVHlwZU5hbWUobG9jYWxlKSB7XG4gIHZhciBsYW5nVG9QbHVyYWxUeXBlID0gbGFuZ1RvVHlwZU1hcChwbHVyYWxUeXBlVG9MYW5ndWFnZXMpO1xuICByZXR1cm4gbGFuZ1RvUGx1cmFsVHlwZVtsb2NhbGVdXG4gICAgfHwgbGFuZ1RvUGx1cmFsVHlwZVtzcGxpdC5jYWxsKGxvY2FsZSwgLy0vLCAxKVswXV1cbiAgICB8fCBsYW5nVG9QbHVyYWxUeXBlLmVuO1xufVxuXG5mdW5jdGlvbiBwbHVyYWxUeXBlSW5kZXgobG9jYWxlLCBjb3VudCkge1xuICByZXR1cm4gcGx1cmFsVHlwZXNbcGx1cmFsVHlwZU5hbWUobG9jYWxlKV0oY291bnQpO1xufVxuXG5mdW5jdGlvbiBlc2NhcGUodG9rZW4pIHtcbiAgcmV0dXJuIHRva2VuLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFRva2VuUmVnZXgob3B0cykge1xuICB2YXIgcHJlZml4ID0gKG9wdHMgJiYgb3B0cy5wcmVmaXgpIHx8ICcleyc7XG4gIHZhciBzdWZmaXggPSAob3B0cyAmJiBvcHRzLnN1ZmZpeCkgfHwgJ30nO1xuXG4gIGlmIChwcmVmaXggPT09IGRlbGltaXRlciB8fCBzdWZmaXggPT09IGRlbGltaXRlcikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcIicgKyBkZWxpbWl0ZXIgKyAnXCIgdG9rZW4gaXMgcmVzZXJ2ZWQgZm9yIHBsdXJhbGl6YXRpb24nKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVnRXhwKGVzY2FwZShwcmVmaXgpICsgJyguKj8pJyArIGVzY2FwZShzdWZmaXgpLCAnZycpO1xufVxuXG52YXIgZG9sbGFyUmVnZXggPSAvXFwkL2c7XG52YXIgZG9sbGFyQmlsbHNZYWxsID0gJyQkJztcbnZhciBkZWZhdWx0VG9rZW5SZWdleCA9IC8lXFx7KC4qPylcXH0vZztcblxuLy8gIyMjIHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSlcbi8vXG4vLyBUYWtlcyBhIHBocmFzZSBzdHJpbmcgYW5kIHRyYW5zZm9ybXMgaXQgYnkgY2hvb3NpbmcgdGhlIGNvcnJlY3Rcbi8vIHBsdXJhbCBmb3JtIGFuZCBpbnRlcnBvbGF0aW5nIGl0LlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJ0hlbGxvLCAle25hbWV9IScsIHtuYW1lOiAnU3Bpa2UnfSk7XG4vLyAgICAgLy8gXCJIZWxsbywgU3Bpa2UhXCJcbi8vXG4vLyBUaGUgY29ycmVjdCBwbHVyYWwgZm9ybSBpcyBzZWxlY3RlZCBpZiBzdWJzdGl0dXRpb25zLnNtYXJ0X2NvdW50XG4vLyBpcyBzZXQuIFlvdSBjYW4gcGFzcyBpbiBhIG51bWJlciBpbnN0ZWFkIG9mIGFuIE9iamVjdCBhcyBgc3Vic3RpdHV0aW9uc2Bcbi8vIGFzIGEgc2hvcnRjdXQgZm9yIGBzbWFydF9jb3VudGAuXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnJXtzbWFydF9jb3VudH0gbmV3IG1lc3NhZ2VzIHx8fHwgMSBuZXcgbWVzc2FnZScsIHtzbWFydF9jb3VudDogMX0sICdlbicpO1xuLy8gICAgIC8vIFwiMSBuZXcgbWVzc2FnZVwiXG4vL1xuLy8gICAgIHRyYW5zZm9ybVBocmFzZSgnJXtzbWFydF9jb3VudH0gbmV3IG1lc3NhZ2VzIHx8fHwgMSBuZXcgbWVzc2FnZScsIHtzbWFydF9jb3VudDogMn0sICdlbicpO1xuLy8gICAgIC8vIFwiMiBuZXcgbWVzc2FnZXNcIlxuLy9cbi8vICAgICB0cmFuc2Zvcm1QaHJhc2UoJyV7c21hcnRfY291bnR9IG5ldyBtZXNzYWdlcyB8fHx8IDEgbmV3IG1lc3NhZ2UnLCA1LCAnZW4nKTtcbi8vICAgICAvLyBcIjUgbmV3IG1lc3NhZ2VzXCJcbi8vXG4vLyBZb3Ugc2hvdWxkIHBhc3MgaW4gYSB0aGlyZCBhcmd1bWVudCwgdGhlIGxvY2FsZSwgdG8gc3BlY2lmeSB0aGUgY29ycmVjdCBwbHVyYWwgdHlwZS5cbi8vIEl0IGRlZmF1bHRzIHRvIGAnZW4nYCB3aXRoIDIgcGx1cmFsIGZvcm1zLlxuZnVuY3Rpb24gdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlLCB0b2tlblJlZ2V4KSB7XG4gIGlmICh0eXBlb2YgcGhyYXNlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1BvbHlnbG90LnRyYW5zZm9ybVBocmFzZSBleHBlY3RzIGFyZ3VtZW50ICMxIHRvIGJlIHN0cmluZycpO1xuICB9XG5cbiAgaWYgKHN1YnN0aXR1dGlvbnMgPT0gbnVsbCkge1xuICAgIHJldHVybiBwaHJhc2U7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gcGhyYXNlO1xuICB2YXIgaW50ZXJwb2xhdGlvblJlZ2V4ID0gdG9rZW5SZWdleCB8fCBkZWZhdWx0VG9rZW5SZWdleDtcblxuICAvLyBhbGxvdyBudW1iZXIgYXMgYSBwbHVyYWxpemF0aW9uIHNob3J0Y3V0XG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHN1YnN0aXR1dGlvbnMgPT09ICdudW1iZXInID8geyBzbWFydF9jb3VudDogc3Vic3RpdHV0aW9ucyB9IDogc3Vic3RpdHV0aW9ucztcblxuICAvLyBTZWxlY3QgcGx1cmFsIGZvcm06IGJhc2VkIG9uIGEgcGhyYXNlIHRleHQgdGhhdCBjb250YWlucyBgbmBcbiAgLy8gcGx1cmFsIGZvcm1zIHNlcGFyYXRlZCBieSBgZGVsaW1pdGVyYCwgYSBgbG9jYWxlYCwgYW5kIGEgYHN1YnN0aXR1dGlvbnMuc21hcnRfY291bnRgLFxuICAvLyBjaG9vc2UgdGhlIGNvcnJlY3QgcGx1cmFsIGZvcm0uIFRoaXMgaXMgb25seSBkb25lIGlmIGBjb3VudGAgaXMgc2V0LlxuICBpZiAob3B0aW9ucy5zbWFydF9jb3VudCAhPSBudWxsICYmIHJlc3VsdCkge1xuICAgIHZhciB0ZXh0cyA9IHNwbGl0LmNhbGwocmVzdWx0LCBkZWxpbWl0ZXIpO1xuICAgIHJlc3VsdCA9IHRyaW0odGV4dHNbcGx1cmFsVHlwZUluZGV4KGxvY2FsZSB8fCAnZW4nLCBvcHRpb25zLnNtYXJ0X2NvdW50KV0gfHwgdGV4dHNbMF0pO1xuICB9XG5cbiAgLy8gSW50ZXJwb2xhdGU6IENyZWF0ZXMgYSBgUmVnRXhwYCBvYmplY3QgZm9yIGVhY2ggaW50ZXJwb2xhdGlvbiBwbGFjZWhvbGRlci5cbiAgcmVzdWx0ID0gcmVwbGFjZS5jYWxsKHJlc3VsdCwgaW50ZXJwb2xhdGlvblJlZ2V4LCBmdW5jdGlvbiAoZXhwcmVzc2lvbiwgYXJndW1lbnQpIHtcbiAgICBpZiAoIWhhcyhvcHRpb25zLCBhcmd1bWVudCkgfHwgb3B0aW9uc1thcmd1bWVudF0gPT0gbnVsbCkgeyByZXR1cm4gZXhwcmVzc2lvbjsgfVxuICAgIC8vIEVuc3VyZSByZXBsYWNlbWVudCB2YWx1ZSBpcyBlc2NhcGVkIHRvIHByZXZlbnQgc3BlY2lhbCAkLXByZWZpeGVkIHJlZ2V4IHJlcGxhY2UgdG9rZW5zLlxuICAgIHJldHVybiByZXBsYWNlLmNhbGwob3B0aW9uc1thcmd1bWVudF0sIGRvbGxhclJlZ2V4LCBkb2xsYXJCaWxsc1lhbGwpO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyAjIyMgUG9seWdsb3QgY2xhc3MgY29uc3RydWN0b3JcbmZ1bmN0aW9uIFBvbHlnbG90KG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuICB0aGlzLnBocmFzZXMgPSB7fTtcbiAgdGhpcy5leHRlbmQob3B0cy5waHJhc2VzIHx8IHt9KTtcbiAgdGhpcy5jdXJyZW50TG9jYWxlID0gb3B0cy5sb2NhbGUgfHwgJ2VuJztcbiAgdmFyIGFsbG93TWlzc2luZyA9IG9wdHMuYWxsb3dNaXNzaW5nID8gdHJhbnNmb3JtUGhyYXNlIDogbnVsbDtcbiAgdGhpcy5vbk1pc3NpbmdLZXkgPSB0eXBlb2Ygb3B0cy5vbk1pc3NpbmdLZXkgPT09ICdmdW5jdGlvbicgPyBvcHRzLm9uTWlzc2luZ0tleSA6IGFsbG93TWlzc2luZztcbiAgdGhpcy53YXJuID0gb3B0cy53YXJuIHx8IHdhcm47XG4gIHRoaXMudG9rZW5SZWdleCA9IGNvbnN0cnVjdFRva2VuUmVnZXgob3B0cy5pbnRlcnBvbGF0aW9uKTtcbn1cblxuLy8gIyMjIHBvbHlnbG90LmxvY2FsZShbbG9jYWxlXSlcbi8vXG4vLyBHZXQgb3Igc2V0IGxvY2FsZS4gSW50ZXJuYWxseSwgUG9seWdsb3Qgb25seSB1c2VzIGxvY2FsZSBmb3IgcGx1cmFsaXphdGlvbi5cblBvbHlnbG90LnByb3RvdHlwZS5sb2NhbGUgPSBmdW5jdGlvbiAobmV3TG9jYWxlKSB7XG4gIGlmIChuZXdMb2NhbGUpIHRoaXMuY3VycmVudExvY2FsZSA9IG5ld0xvY2FsZTtcbiAgcmV0dXJuIHRoaXMuY3VycmVudExvY2FsZTtcbn07XG5cbi8vICMjIyBwb2x5Z2xvdC5leHRlbmQocGhyYXNlcylcbi8vXG4vLyBVc2UgYGV4dGVuZGAgdG8gdGVsbCBQb2x5Z2xvdCBob3cgdG8gdHJhbnNsYXRlIGEgZ2l2ZW4ga2V5LlxuLy9cbi8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4vLyAgICAgfSk7XG4vL1xuLy8gVGhlIGtleSBjYW4gYmUgYW55IHN0cmluZy4gIEZlZWwgZnJlZSB0byBjYWxsIGBleHRlbmRgIG11bHRpcGxlIHRpbWVzO1xuLy8gaXQgd2lsbCBvdmVycmlkZSBhbnkgcGhyYXNlcyB3aXRoIHRoZSBzYW1lIGtleSwgYnV0IGxlYXZlIGV4aXN0aW5nIHBocmFzZXNcbi8vIHVudG91Y2hlZC5cbi8vXG4vLyBJdCBpcyBhbHNvIHBvc3NpYmxlIHRvIHBhc3MgbmVzdGVkIHBocmFzZSBvYmplY3RzLCB3aGljaCBnZXQgZmxhdHRlbmVkXG4vLyBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZSBuZXN0ZWQga2V5cyBjb25jYXRlbmF0ZWQgdXNpbmcgZG90IG5vdGF0aW9uLlxuLy9cbi8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuLy8gICAgICAgXCJuYXZcIjoge1xuLy8gICAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgICAgXCJoZWxsb19uYW1lXCI6IFwiSGVsbG8sICV7bmFtZX1cIixcbi8vICAgICAgICAgXCJzaWRlYmFyXCI6IHtcbi8vICAgICAgICAgICBcIndlbGNvbWVcIjogXCJXZWxjb21lXCJcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuLy9cbi8vICAgICBjb25zb2xlLmxvZyhwb2x5Z2xvdC5waHJhc2VzKTtcbi8vICAgICAvLyB7XG4vLyAgICAgLy8gICAnbmF2LmhlbGxvJzogJ0hlbGxvJyxcbi8vICAgICAvLyAgICduYXYuaGVsbG9fbmFtZSc6ICdIZWxsbywgJXtuYW1lfScsXG4vLyAgICAgLy8gICAnbmF2LnNpZGViYXIud2VsY29tZSc6ICdXZWxjb21lJ1xuLy8gICAgIC8vIH1cbi8vXG4vLyBgZXh0ZW5kYCBhY2NlcHRzIGFuIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCwgYHByZWZpeGAsIHdoaWNoIGNhbiBiZSB1c2VkXG4vLyB0byBwcmVmaXggZXZlcnkga2V5IGluIHRoZSBwaHJhc2VzIG9iamVjdCB3aXRoIHNvbWUgc3RyaW5nLCB1c2luZyBkb3Rcbi8vIG5vdGF0aW9uLlxuLy9cbi8vICAgICBwb2x5Z2xvdC5leHRlbmQoe1xuLy8gICAgICAgXCJoZWxsb1wiOiBcIkhlbGxvXCIsXG4vLyAgICAgICBcImhlbGxvX25hbWVcIjogXCJIZWxsbywgJXtuYW1lfVwiXG4vLyAgICAgfSwgXCJuYXZcIik7XG4vL1xuLy8gICAgIGNvbnNvbGUubG9nKHBvbHlnbG90LnBocmFzZXMpO1xuLy8gICAgIC8vIHtcbi8vICAgICAvLyAgICduYXYuaGVsbG8nOiAnSGVsbG8nLFxuLy8gICAgIC8vICAgJ25hdi5oZWxsb19uYW1lJzogJ0hlbGxvLCAle25hbWV9J1xuLy8gICAgIC8vIH1cbi8vXG4vLyBUaGlzIGZlYXR1cmUgaXMgdXNlZCBpbnRlcm5hbGx5IHRvIHN1cHBvcnQgbmVzdGVkIHBocmFzZSBvYmplY3RzLlxuUG9seWdsb3QucHJvdG90eXBlLmV4dGVuZCA9IGZ1bmN0aW9uIChtb3JlUGhyYXNlcywgcHJlZml4KSB7XG4gIGZvckVhY2gobW9yZVBocmFzZXMsIGZ1bmN0aW9uIChwaHJhc2UsIGtleSkge1xuICAgIHZhciBwcmVmaXhlZEtleSA9IHByZWZpeCA/IHByZWZpeCArICcuJyArIGtleSA6IGtleTtcbiAgICBpZiAodHlwZW9mIHBocmFzZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMuZXh0ZW5kKHBocmFzZSwgcHJlZml4ZWRLZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBocmFzZXNbcHJlZml4ZWRLZXldID0gcGhyYXNlO1xuICAgIH1cbiAgfSwgdGhpcyk7XG59O1xuXG4vLyAjIyMgcG9seWdsb3QudW5zZXQocGhyYXNlcylcbi8vIFVzZSBgdW5zZXRgIHRvIHNlbGVjdGl2ZWx5IHJlbW92ZSBrZXlzIGZyb20gYSBwb2x5Z2xvdCBpbnN0YW5jZS5cbi8vXG4vLyAgICAgcG9seWdsb3QudW5zZXQoXCJzb21lX2tleVwiKTtcbi8vICAgICBwb2x5Z2xvdC51bnNldCh7XG4vLyAgICAgICBcImhlbGxvXCI6IFwiSGVsbG9cIixcbi8vICAgICAgIFwiaGVsbG9fbmFtZVwiOiBcIkhlbGxvLCAle25hbWV9XCJcbi8vICAgICB9KTtcbi8vXG4vLyBUaGUgdW5zZXQgbWV0aG9kIGNhbiB0YWtlIGVpdGhlciBhIHN0cmluZyAoZm9yIHRoZSBrZXkpLCBvciBhbiBvYmplY3QgaGFzaCB3aXRoXG4vLyB0aGUga2V5cyB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIHVuc2V0LlxuUG9seWdsb3QucHJvdG90eXBlLnVuc2V0ID0gZnVuY3Rpb24gKG1vcmVQaHJhc2VzLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBtb3JlUGhyYXNlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBkZWxldGUgdGhpcy5waHJhc2VzW21vcmVQaHJhc2VzXTtcbiAgfSBlbHNlIHtcbiAgICBmb3JFYWNoKG1vcmVQaHJhc2VzLCBmdW5jdGlvbiAocGhyYXNlLCBrZXkpIHtcbiAgICAgIHZhciBwcmVmaXhlZEtleSA9IHByZWZpeCA/IHByZWZpeCArICcuJyArIGtleSA6IGtleTtcbiAgICAgIGlmICh0eXBlb2YgcGhyYXNlID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLnVuc2V0KHBocmFzZSwgcHJlZml4ZWRLZXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIHRoaXMucGhyYXNlc1twcmVmaXhlZEtleV07XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cbn07XG5cbi8vICMjIyBwb2x5Z2xvdC5jbGVhcigpXG4vL1xuLy8gQ2xlYXJzIGFsbCBwaHJhc2VzLiBVc2VmdWwgZm9yIHNwZWNpYWwgY2FzZXMsIHN1Y2ggYXMgZnJlZWluZ1xuLy8gdXAgbWVtb3J5IGlmIHlvdSBoYXZlIGxvdHMgb2YgcGhyYXNlcyBidXQgbm8gbG9uZ2VyIG5lZWQgdG9cbi8vIHBlcmZvcm0gYW55IHRyYW5zbGF0aW9uLiBBbHNvIHVzZWQgaW50ZXJuYWxseSBieSBgcmVwbGFjZWAuXG5Qb2x5Z2xvdC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucGhyYXNlcyA9IHt9O1xufTtcblxuLy8gIyMjIHBvbHlnbG90LnJlcGxhY2UocGhyYXNlcylcbi8vXG4vLyBDb21wbGV0ZWx5IHJlcGxhY2UgdGhlIGV4aXN0aW5nIHBocmFzZXMgd2l0aCBhIG5ldyBzZXQgb2YgcGhyYXNlcy5cbi8vIE5vcm1hbGx5LCBqdXN0IHVzZSBgZXh0ZW5kYCB0byBhZGQgbW9yZSBwaHJhc2VzLCBidXQgdW5kZXIgY2VydGFpblxuLy8gY2lyY3Vtc3RhbmNlcywgeW91IG1heSB3YW50IHRvIG1ha2Ugc3VyZSBubyBvbGQgcGhyYXNlcyBhcmUgbHlpbmcgYXJvdW5kLlxuUG9seWdsb3QucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAobmV3UGhyYXNlcykge1xuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMuZXh0ZW5kKG5ld1BocmFzZXMpO1xufTtcblxuXG4vLyAjIyMgcG9seWdsb3QudChrZXksIG9wdGlvbnMpXG4vL1xuLy8gVGhlIG1vc3QtdXNlZCBtZXRob2QuIFByb3ZpZGUgYSBrZXksIGFuZCBgdGAgd2lsbCByZXR1cm4gdGhlXG4vLyBwaHJhc2UuXG4vL1xuLy8gICAgIHBvbHlnbG90LnQoXCJoZWxsb1wiKTtcbi8vICAgICA9PiBcIkhlbGxvXCJcbi8vXG4vLyBUaGUgcGhyYXNlIHZhbHVlIGlzIHByb3ZpZGVkIGZpcnN0IGJ5IGEgY2FsbCB0byBgcG9seWdsb3QuZXh0ZW5kKClgIG9yXG4vLyBgcG9seWdsb3QucmVwbGFjZSgpYC5cbi8vXG4vLyBQYXNzIGluIGFuIG9iamVjdCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvIHBlcmZvcm0gaW50ZXJwb2xhdGlvbi5cbi8vXG4vLyAgICAgcG9seWdsb3QudChcImhlbGxvX25hbWVcIiwge25hbWU6IFwiU3Bpa2VcIn0pO1xuLy8gICAgID0+IFwiSGVsbG8sIFNwaWtlXCJcbi8vXG4vLyBJZiB5b3UgbGlrZSwgeW91IGNhbiBwcm92aWRlIGEgZGVmYXVsdCB2YWx1ZSBpbiBjYXNlIHRoZSBwaHJhc2UgaXMgbWlzc2luZy5cbi8vIFVzZSB0aGUgc3BlY2lhbCBvcHRpb24ga2V5IFwiX1wiIHRvIHNwZWNpZnkgYSBkZWZhdWx0LlxuLy9cbi8vICAgICBwb2x5Z2xvdC50KFwiaV9saWtlX3RvX3dyaXRlX2luX2xhbmd1YWdlXCIsIHtcbi8vICAgICAgIF86IFwiSSBsaWtlIHRvIHdyaXRlIGluICV7bGFuZ3VhZ2V9LlwiLFxuLy8gICAgICAgbGFuZ3VhZ2U6IFwiSmF2YVNjcmlwdFwiXG4vLyAgICAgfSk7XG4vLyAgICAgPT4gXCJJIGxpa2UgdG8gd3JpdGUgaW4gSmF2YVNjcmlwdC5cIlxuLy9cblBvbHlnbG90LnByb3RvdHlwZS50ID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xuICB2YXIgcGhyYXNlLCByZXN1bHQ7XG4gIHZhciBvcHRzID0gb3B0aW9ucyA9PSBudWxsID8ge30gOiBvcHRpb25zO1xuICBpZiAodHlwZW9mIHRoaXMucGhyYXNlc1trZXldID09PSAnc3RyaW5nJykge1xuICAgIHBocmFzZSA9IHRoaXMucGhyYXNlc1trZXldO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzLl8gPT09ICdzdHJpbmcnKSB7XG4gICAgcGhyYXNlID0gb3B0cy5fO1xuICB9IGVsc2UgaWYgKHRoaXMub25NaXNzaW5nS2V5KSB7XG4gICAgdmFyIG9uTWlzc2luZ0tleSA9IHRoaXMub25NaXNzaW5nS2V5O1xuICAgIHJlc3VsdCA9IG9uTWlzc2luZ0tleShrZXksIG9wdHMsIHRoaXMuY3VycmVudExvY2FsZSwgdGhpcy50b2tlblJlZ2V4KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhcm4oJ01pc3NpbmcgdHJhbnNsYXRpb24gZm9yIGtleTogXCInICsga2V5ICsgJ1wiJyk7XG4gICAgcmVzdWx0ID0ga2V5O1xuICB9XG4gIGlmICh0eXBlb2YgcGhyYXNlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRyYW5zZm9ybVBocmFzZShwaHJhc2UsIG9wdHMsIHRoaXMuY3VycmVudExvY2FsZSwgdGhpcy50b2tlblJlZ2V4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLyAjIyMgcG9seWdsb3QuaGFzKGtleSlcbi8vXG4vLyBDaGVjayBpZiBwb2x5Z2xvdCBoYXMgYSB0cmFuc2xhdGlvbiBmb3IgZ2l2ZW4ga2V5XG5Qb2x5Z2xvdC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gaGFzKHRoaXMucGhyYXNlcywga2V5KTtcbn07XG5cbi8vIGV4cG9ydCB0cmFuc2Zvcm1QaHJhc2VcblBvbHlnbG90LnRyYW5zZm9ybVBocmFzZSA9IGZ1bmN0aW9uIHRyYW5zZm9ybShwaHJhc2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsZSkge1xuICByZXR1cm4gdHJhbnNmb3JtUGhyYXNlKHBocmFzZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxlKTtcbn07XG5cbnZhciB3ZWJpeFBvbHlnbG90ID0gUG9seWdsb3Q7XG5cbmZ1bmN0aW9uIExvY2FsZShhcHAsIF92aWV3LCBjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcclxuICAgIGxldCBsYW5nID0gc3RvcmFnZSA/IChzdG9yYWdlLmdldChcImxhbmdcIikgfHwgXCJlblwiKSA6IChjb25maWcubGFuZyB8fCBcImVuXCIpO1xyXG4gICAgZnVuY3Rpb24gc2V0TGFuZ0RhdGEobmFtZSwgZGF0YSwgc2lsZW50KSB7XHJcbiAgICAgICAgaWYgKGRhdGEuX19lc01vZHVsZSkge1xyXG4gICAgICAgICAgICBkYXRhID0gZGF0YS5kZWZhdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwY29uZmlnID0geyBwaHJhc2VzOiBkYXRhIH07XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wb2x5Z2xvdCkge1xyXG4gICAgICAgICAgICBhcHAud2ViaXguZXh0ZW5kKHBjb25maWcsIGNvbmZpZy5wb2x5Z2xvdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBvbHkgPSBzZXJ2aWNlLnBvbHlnbG90ID0gbmV3IHdlYml4UG9seWdsb3QocGNvbmZpZyk7XHJcbiAgICAgICAgcG9seS5sb2NhbGUobmFtZSk7XHJcbiAgICAgICAgc2VydmljZS5fID0gYXBwLndlYml4LmJpbmQocG9seS50LCBwb2x5KTtcclxuICAgICAgICBsYW5nID0gbmFtZTtcclxuICAgICAgICBpZiAoc3RvcmFnZSkge1xyXG4gICAgICAgICAgICBzdG9yYWdlLnB1dChcImxhbmdcIiwgbGFuZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcud2ViaXgpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9jTmFtZSA9IGNvbmZpZy53ZWJpeFtuYW1lXTtcclxuICAgICAgICAgICAgaWYgKGxvY05hbWUpIHtcclxuICAgICAgICAgICAgICAgIGFwcC53ZWJpeC5pMThuLnNldExvY2FsZShsb2NOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXBwLnJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0TGFuZygpIHsgcmV0dXJuIGxhbmc7IH1cclxuICAgIGZ1bmN0aW9uIHNldExhbmcobmFtZSwgc2lsZW50KSB7XHJcbiAgICAgICAgLy8gaWdub3JlIHNldExhbmcgaWYgbG9hZGluZyBieSBwYXRoIGlzIGRpc2FibGVkXHJcbiAgICAgICAgaWYgKGNvbmZpZy5wYXRoID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhdGggPSAoY29uZmlnLnBhdGggPyBjb25maWcucGF0aCArIFwiL1wiIDogXCJcIikgKyBuYW1lO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXF1aXJlKFwiamV0LWxvY2FsZXMvXCIgKyBwYXRoKTtcclxuICAgICAgICBzZXRMYW5nRGF0YShuYW1lLCBkYXRhLCBzaWxlbnQpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VydmljZSA9IHtcclxuICAgICAgICBnZXRMYW5nLCBzZXRMYW5nLCBzZXRMYW5nRGF0YSwgXzogbnVsbCwgcG9seWdsb3Q6IG51bGxcclxuICAgIH07XHJcbiAgICBhcHAuc2V0U2VydmljZShcImxvY2FsZVwiLCBzZXJ2aWNlKTtcclxuICAgIHNldExhbmcobGFuZywgdHJ1ZSk7XHJcbn1cblxuZnVuY3Rpb24gc2hvdyh2aWV3LCBjb25maWcsIHZhbHVlKSB7XHJcbiAgICBpZiAoY29uZmlnLnVybHMpIHtcclxuICAgICAgICB2YWx1ZSA9IGNvbmZpZy51cmxzW3ZhbHVlXSB8fCB2YWx1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNvbmZpZy5wYXJhbSkge1xyXG4gICAgICAgIHZhbHVlID0geyBbY29uZmlnLnBhcmFtXTogdmFsdWUgfTtcclxuICAgIH1cclxuICAgIHZpZXcuc2hvdyh2YWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gTWVudShhcHAsIHZpZXcsIGNvbmZpZykge1xyXG4gICAgY29uc3QgZnJhbWUgPSB2aWV3LmdldFN1YlZpZXdJbmZvKCkucGFyZW50O1xyXG4gICAgY29uc3QgdWkgPSB2aWV3LiQkKGNvbmZpZy5pZCB8fCBjb25maWcpO1xyXG4gICAgbGV0IHNpbGVudCA9IGZhbHNlO1xyXG4gICAgdWkuYXR0YWNoRXZlbnQoXCJvbmNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgc2hvdyhmcmFtZSwgY29uZmlnLCB0aGlzLmdldFZhbHVlKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdWkuYXR0YWNoRXZlbnQoXCJvbmFmdGVyc2VsZWN0XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodWkuc2V0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlkID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVpLmdldFNlbGVjdGVkSWQpIHtcclxuICAgICAgICAgICAgICAgIGlkID0gdWkuZ2V0U2VsZWN0ZWRJZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNob3coZnJhbWUsIGNvbmZpZywgaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgdmlldy5vbihhcHAsIGBhcHA6cm91dGVgLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBcIlwiO1xyXG4gICAgICAgIGlmIChjb25maWcucGFyYW0pIHtcclxuICAgICAgICAgICAgbmFtZSA9IHZpZXcuZ2V0UGFyYW0oY29uZmlnLnBhcmFtLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlZ21lbnQgPSBmcmFtZS5nZXRVcmwoKVsxXTtcclxuICAgICAgICAgICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBzZWdtZW50LnBhZ2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgc2lsZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHVpLnNldFZhbHVlICYmIHVpLmdldFZhbHVlKCkgIT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHVpLnNldFZhbHVlKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVpLnNlbGVjdCAmJiB1aS5leGlzdHMobmFtZSkgJiYgdWkuZ2V0U2VsZWN0ZWRJZCgpICE9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB1aS5zZWxlY3QobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2lsZW50ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cblxuY29uc3QgYmFzZWljb25zID0ge1xyXG4gICAgZ29vZDogXCJjaGVja1wiLFxyXG4gICAgZXJyb3I6IFwid2FybmluZ1wiLFxyXG4gICAgc2F2aW5nOiBcInJlZnJlc2ggZmEtc3BpblwiXHJcbn07XHJcbmNvbnN0IGJhc2V0ZXh0ID0ge1xyXG4gICAgZ29vZDogXCJPa1wiLFxyXG4gICAgZXJyb3I6IFwiRXJyb3JcIixcclxuICAgIHNhdmluZzogXCJDb25uZWN0aW5nLi4uXCJcclxufTtcclxuZnVuY3Rpb24gU3RhdHVzKGFwcCwgdmlldywgY29uZmlnKSB7XHJcbiAgICBsZXQgc3RhdHVzID0gXCJnb29kXCI7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgbGV0IGlzZXJyb3IgPSBmYWxzZTtcclxuICAgIGxldCBleHBpcmVEZWxheSA9IGNvbmZpZy5leHBpcmU7XHJcbiAgICBpZiAoIWV4cGlyZURlbGF5ICYmIGV4cGlyZURlbGF5ICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGV4cGlyZURlbGF5ID0gMjAwMDtcclxuICAgIH1cclxuICAgIGNvbnN0IHRleHRzID0gY29uZmlnLnRleHRzIHx8IGJhc2V0ZXh0O1xyXG4gICAgY29uc3QgaWNvbnMgPSBjb25maWcuaWNvbnMgfHwgYmFzZWljb25zO1xyXG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBjb25maWcgPSB7IHRhcmdldDogY29uZmlnIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWZyZXNoKGNvbnRlbnQpIHtcclxuICAgICAgICBjb25zdCBhcmVhID0gdmlldy4kJChjb25maWcudGFyZ2V0KTtcclxuICAgICAgICBpZiAoYXJlYSkge1xyXG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBcIjxkaXYgY2xhc3M9J3N0YXR1c19cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzICtcclxuICAgICAgICAgICAgICAgICAgICBcIic+PHNwYW4gY2xhc3M9J3dlYml4X2ljb24gZmEtXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25zW3N0YXR1c10gKyBcIic+PC9zcGFuPiBcIiArIHRleHRzW3N0YXR1c10gKyBcIjwvZGl2PlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFyZWEuc2V0SFRNTChjb250ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzdWNjZXNzKCkge1xyXG4gICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgc2V0U3RhdHVzKFwiZ29vZFwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZhaWwoZXJyKSB7XHJcbiAgICAgICAgY291bnQtLTtcclxuICAgICAgICBzZXRTdGF0dXMoXCJlcnJvclwiLCBlcnIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc3RhcnQocHJvbWlzZSkge1xyXG4gICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgc2V0U3RhdHVzKFwic2F2aW5nXCIpO1xyXG4gICAgICAgIGlmIChwcm9taXNlICYmIHByb21pc2UudGhlbikge1xyXG4gICAgICAgICAgICBwcm9taXNlLnRoZW4oc3VjY2VzcywgZmFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0U3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoaWRlU3RhdHVzKCkge1xyXG4gICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZWZyZXNoKFwiIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRTdGF0dXMobW9kZSwgZXJyKSB7XHJcbiAgICAgICAgaWYgKGNvdW50IDwgMCkge1xyXG4gICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtb2RlID09PSBcInNhdmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IFwic2F2aW5nXCI7XHJcbiAgICAgICAgICAgIHJlZnJlc2goKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlzZXJyb3IgPSAobW9kZSA9PT0gXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSBpc2Vycm9yID8gXCJlcnJvclwiIDogXCJnb29kXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC5lcnJvcihcImFwcDplcnJvcjpzZXJ2ZXJcIiwgW2Vyci5yZXNwb25zZVRleHQgfHwgZXJyXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhwaXJlRGVsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChoaWRlU3RhdHVzLCBleHBpcmVEZWxheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJhY2soZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGRwID0gYXBwLndlYml4LmRwKGRhdGEpO1xyXG4gICAgICAgIGlmIChkcCkge1xyXG4gICAgICAgICAgICB2aWV3Lm9uKGRwLCBcIm9uQWZ0ZXJEYXRhU2VuZFwiLCBzdGFydCk7XHJcbiAgICAgICAgICAgIHZpZXcub24oZHAsIFwib25BZnRlclNhdmVFcnJvclwiLCAoX2lkLCBfb2JqLCByZXNwb25zZSkgPT4gZmFpbChyZXNwb25zZSkpO1xyXG4gICAgICAgICAgICB2aWV3Lm9uKGRwLCBcIm9uQWZ0ZXJTYXZlXCIsIHN1Y2Nlc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwic3RhdHVzXCIsIHtcclxuICAgICAgICBnZXRTdGF0dXMsXHJcbiAgICAgICAgc2V0U3RhdHVzLFxyXG4gICAgICAgIHRyYWNrXHJcbiAgICB9KTtcclxuICAgIGlmIChjb25maWcucmVtb3RlKSB7XHJcbiAgICAgICAgdmlldy5vbihhcHAud2ViaXgsIFwib25SZW1vdGVDYWxsXCIsIHN0YXJ0KTtcclxuICAgIH1cclxuICAgIGlmIChjb25maWcuYWpheCkge1xyXG4gICAgICAgIHZpZXcub24oYXBwLndlYml4LCBcIm9uQmVmb3JlQWpheFwiLCAoX21vZGUsIF91cmwsIF9kYXRhLCBfcmVxdWVzdCwgX2hlYWRlcnMsIF9maWxlcywgcHJvbWlzZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGFydChwcm9taXNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChjb25maWcuZGF0YSkge1xyXG4gICAgICAgIHRyYWNrKGNvbmZpZy5kYXRhKTtcclxuICAgIH1cclxufVxuXG5mdW5jdGlvbiBUaGVtZShhcHAsIF92aWV3LCBjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IHN0b3JhZ2UgPSBjb25maWcuc3RvcmFnZTtcclxuICAgIGxldCB0aGVtZSA9IHN0b3JhZ2UgP1xyXG4gICAgICAgIChzdG9yYWdlLmdldChcInRoZW1lXCIpIHx8IFwiZmxhdC1kZWZhdWx0XCIpXHJcbiAgICAgICAgOlxyXG4gICAgICAgICAgICAoY29uZmlnLnRoZW1lIHx8IFwiZmxhdC1kZWZhdWx0XCIpO1xyXG4gICAgY29uc3Qgc2VydmljZSA9IHtcclxuICAgICAgICBnZXRUaGVtZSgpIHsgcmV0dXJuIHRoZW1lOyB9LFxyXG4gICAgICAgIHNldFRoZW1lKG5hbWUsIHNpbGVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IG5hbWUuc3BsaXQoXCItXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlua1wiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG5hbWUgPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChsbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsbmFtZSA9PT0gbmFtZSB8fCBsbmFtZSA9PT0gcGFydHNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua3NbaV0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzW2ldLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXBwLndlYml4LnNraW4uc2V0KHBhcnRzWzBdKTtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBjc3NcclxuICAgICAgICAgICAgYXBwLndlYml4Lmh0bWwucmVtb3ZlQ3NzKGRvY3VtZW50LmJvZHksIFwidGhlbWUtXCIgKyB0aGVtZSk7XHJcbiAgICAgICAgICAgIC8vIGFkZCBuZXcgY3NzXHJcbiAgICAgICAgICAgIGFwcC53ZWJpeC5odG1sLmFkZENzcyhkb2N1bWVudC5ib2R5LCBcInRoZW1lLVwiICsgbmFtZSk7XHJcbiAgICAgICAgICAgIHRoZW1lID0gbmFtZTtcclxuICAgICAgICAgICAgaWYgKHN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UucHV0KFwidGhlbWVcIiwgbmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzaWxlbnQpIHtcclxuICAgICAgICAgICAgICAgIGFwcC5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYXBwLnNldFNlcnZpY2UoXCJ0aGVtZVwiLCBzZXJ2aWNlKTtcclxuICAgIHNlcnZpY2Uuc2V0VGhlbWUodGhlbWUsIHRydWUpO1xyXG59XG5cbmZ1bmN0aW9uIGNvcHlQYXJhbXMoZGF0YSwgdXJsLCByb3V0ZSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRhdGFbcm91dGVbaV1dID0gdXJsW2kgKyAxXSA/IHVybFtpICsgMV0ucGFnZSA6IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gVXJsUGFyYW0oYXBwLCB2aWV3LCBjb25maWcpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gY29uZmlnLnJvdXRlIHx8IGNvbmZpZztcclxuICAgIGNvbnN0IGRhdGEgPSB7fTtcclxuICAgIHZpZXcub24oYXBwLCBcImFwcDp1cmxjaGFuZ2VcIiwgZnVuY3Rpb24gKHN1YnZpZXcsIHNlZ21lbnQpIHtcclxuICAgICAgICBpZiAodmlldyA9PT0gc3Vidmlldykge1xyXG4gICAgICAgICAgICBjb3B5UGFyYW1zKGRhdGEsIHNlZ21lbnQuc3VidXJsKCksIHJvdXRlKTtcclxuICAgICAgICAgICAgc2VnbWVudC5zaXplKHJvdXRlLmxlbmd0aCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3Qgb3MgPSB2aWV3LnNldFBhcmFtO1xyXG4gICAgY29uc3Qgb2cgPSB2aWV3LmdldFBhcmFtO1xyXG4gICAgdmlldy5zZXRQYXJhbSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSwgc2hvdykge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcm91dGUuaW5kZXhPZihuYW1lKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlZ21lbnQudXBkYXRlKFwiXCIsIHZhbHVlLCBpbmRleCArIDEpO1xyXG4gICAgICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZpZXcuc2hvdyhudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9zLmNhbGwodGhpcywgbmFtZSwgdmFsdWUsIHNob3cpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2aWV3LmdldFBhcmFtID0gZnVuY3Rpb24gKGtleSwgbW9kZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IGRhdGFba2V5XTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2cuY2FsbCh0aGlzLCBrZXksIG1vZGUpO1xyXG4gICAgfTtcclxuICAgIGNvcHlQYXJhbXMoZGF0YSwgdmlldy5nZXRVcmwoKSwgcm91dGUpO1xyXG59XG5cbmZ1bmN0aW9uIFVzZXIoYXBwLCBfdmlldywgY29uZmlnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBjb25zdCBsb2dpbiA9IGNvbmZpZy5sb2dpbiB8fCBcIi9sb2dpblwiO1xyXG4gICAgY29uc3QgbG9nb3V0ID0gY29uZmlnLmxvZ291dCB8fCBcIi9sb2dvdXRcIjtcclxuICAgIGNvbnN0IGFmdGVyTG9naW4gPSBjb25maWcuYWZ0ZXJMb2dpbiB8fCBhcHAuY29uZmlnLnN0YXJ0O1xyXG4gICAgY29uc3QgYWZ0ZXJMb2dvdXQgPSBjb25maWcuYWZ0ZXJMb2dvdXQgfHwgXCIvbG9naW5cIjtcclxuICAgIGNvbnN0IHBpbmcgPSBjb25maWcucGluZyB8fCA1ICogNjAgKiAxMDAwO1xyXG4gICAgY29uc3QgbW9kZWwgPSBjb25maWcubW9kZWw7XHJcbiAgICBsZXQgdXNlciA9IGNvbmZpZy51c2VyO1xyXG4gICAgY29uc3Qgc2VydmljZSA9IHtcclxuICAgICAgICBnZXRVc2VyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFN0YXR1cyhzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgaWYgKCFzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyICE9PSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5zdGF0dXMoKS5jYXRjaCgoKSA9PiBudWxsKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXNlciA9IGRhdGE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9naW4obmFtZSwgcGFzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kZWwubG9naW4obmFtZSwgcGFzcykudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHVzZXIgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWNjZXNzIGRlbmllZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFwcC5jYWxsRXZlbnQoXCJhcHA6dXNlcjpsb2dpblwiLCBbdXNlcl0pO1xyXG4gICAgICAgICAgICAgICAgYXBwLnNob3coYWZ0ZXJMb2dpbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9nb3V0KCkge1xyXG4gICAgICAgICAgICB1c2VyID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIG1vZGVsLmxvZ291dCgpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGFwcC5jYWxsRXZlbnQoXCJhcHA6dXNlcjpsb2dvdXRcIiwgW10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGNhbk5hdmlnYXRlKHVybCwgb2JqKSB7XHJcbiAgICAgICAgaWYgKHVybCA9PT0gbG9nb3V0KSB7XHJcbiAgICAgICAgICAgIHNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgICAgIG9iai5yZWRpcmVjdCA9IGFmdGVyTG9nb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh1cmwgIT09IGxvZ2luICYmICFzZXJ2aWNlLmdldFN0YXR1cygpKSB7XHJcbiAgICAgICAgICAgIG9iai5yZWRpcmVjdCA9IGxvZ2luO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFwcC5zZXRTZXJ2aWNlKFwidXNlclwiLCBzZXJ2aWNlKTtcclxuICAgIGFwcC5hdHRhY2hFdmVudChgYXBwOmd1YXJkYCwgZnVuY3Rpb24gKHVybCwgXyRyb290LCBvYmopIHtcclxuICAgICAgICBpZiAoY29uZmlnLnB1YmxpYyAmJiBjb25maWcucHVibGljKHVybCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdXNlciA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBvYmouY29uZmlybSA9IHNlcnZpY2UuZ2V0U3RhdHVzKHRydWUpLnRoZW4oKCkgPT4gY2FuTmF2aWdhdGUodXJsLCBvYmopKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbk5hdmlnYXRlKHVybCwgb2JqKTtcclxuICAgIH0pO1xyXG4gICAgaWYgKHBpbmcpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiBzZXJ2aWNlLmdldFN0YXR1cyh0cnVlKSwgcGluZyk7XHJcbiAgICB9XHJcbn1cblxuLypcclxuTUlUIExpY2Vuc2VcclxuQ29weXJpZ2h0IChjKSAyMDE5IFhCIFNvZnR3YXJlXHJcbiovXHJcbmxldCB3ZWJpeCA9IHdpbmRvdy53ZWJpeDtcclxuaWYgKHdlYml4KSB7XHJcbiAgICBwYXRjaCh3ZWJpeCk7XHJcbn1cclxuY29uc3QgcGx1Z2lucyA9IHtcclxuICAgIFVubG9hZEd1YXJkLCBMb2NhbGUsIE1lbnUsIFRoZW1lLCBVc2VyLCBTdGF0dXMsIFVybFBhcmFtXHJcbn07XHJcbmNvbnN0IHcgPSB3aW5kb3c7XHJcbmlmICghdy5Qcm9taXNlKSB7XHJcbiAgICB3LlByb21pc2UgPSB3LndlYml4LnByb21pc2U7XHJcbn1cblxuZXhwb3J0IHsgcGx1Z2lucywgSmV0QXBwLCBKZXRWaWV3LCBIYXNoUm91dGVyLCBTdG9yZVJvdXRlciwgVXJsUm91dGVyLCBFbXB0eVJvdXRlciwgU3ViUm91dGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qZXQuanMubWFwXG4iLCJjb25zdCBsb2dvdXRVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ291dCc7XHJcbmNvbnN0IGxvZ2luVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sb2dpbic7XHJcbmNvbnN0IHJlZ2lzdGVyVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWdpc3Rlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRob3JpemF0aW9uIHtcclxuXHRyZWdpc3RlcihvYmopIHtcclxuXHRcdHJldHVybiB3ZWJpeC5hamF4KCkucG9zdChyZWdpc3RlclVybCwgb2JqKTtcclxuXHR9XHJcblxyXG5cdGxvZ2luKG9iaikge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5wb3N0KGxvZ2luVXJsLCBvYmopO1xyXG5cdH1cclxuXHJcblx0bG9nb3V0KCkge1xyXG5cdFx0cmV0dXJuIHdlYml4LmFqYXgoKS5nZXQobG9nb3V0VXJsKVxyXG5cdH1cclxufSIsInZhciBtYXAgPSB7XG5cdFwiLi9lblwiOiBcIi4vc291cmNlcy9sb2NhbGVzL2VuLmpzXCIsXG5cdFwiLi9lbi5qc1wiOiBcIi4vc291cmNlcy9sb2NhbGVzL2VuLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc291cmNlcy9sb2NhbGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiZXhwb3J0IGNvbnN0IGdyb3VwcyA9IG5ldyB3ZWJpeC5EYXRhQ29sbGVjdGlvbih7XHJcblx0dXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2dyb3Vwcy8nLFxyXG5cdHNhdmU6IHtcclxuXHRcdHVybDogJ3Jlc3QtPmh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ncm91cHMvJyxcclxuXHRcdHVwZGF0ZUZyb21SZXNwb25zZTogdHJ1ZVxyXG5cdH0sXHJcblx0c2NoZW1lOiB7XHJcblx0XHQkaW5pdChvYmopIHtcclxuXHRcdFx0b2JqLmNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKG9iai5jcmVhdGlvbkRhdGUpO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7IiwiZXhwb3J0IGNvbnN0IGxhbmd1YWdlcyA9IG5ldyB3ZWJpeC5EYXRhQ29sbGVjdGlvbih7XHJcblx0dXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xhbmd1YWdlcy8nLFxyXG5cdHNhdmU6IHtcclxuXHRcdHVybDogJ3Jlc3QtPmh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9sYW5ndWFnZXMvJyxcclxuXHRcdHVwZGF0ZUZyb21SZXNwb25zZTogdHJ1ZVxyXG5cdH1cclxufSk7IiwiZXhwb3J0IGNvbnN0IHRlc3RyZXN1bHRzID0gbmV3IHdlYml4LkRhdGFDb2xsZWN0aW9uKHtcclxuXHR1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvdGVzdHJlc3VsdHMvJyxcclxuXHRzYXZlOiB7XHJcblx0XHR1cmw6ICdyZXN0LT5odHRwOi8vbG9jYWxob3N0OjMwMDAvdGVzdHJlc3VsdHMvJyxcclxuXHRcdHVwZGF0ZUZyb21SZXNwb25zZTogdHJ1ZVxyXG5cdH0sXHJcblx0c2NoZW1lOiB7XHJcblx0XHQkaW5pdChvYmopIHtcclxuXHRcdFx0b2JqLnBhc3NlZERhdGUgPSBuZXcgRGF0ZShvYmoucGFzc2VkRGF0ZSk7XHJcblx0XHR9XHJcblx0fVxyXG59KTsiLCJleHBvcnQgY29uc3Qgd29yZHMgPSBuZXcgd2ViaXguRGF0YUNvbGxlY3Rpb24oe1xyXG5cdHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC93b3Jkcy8nLFxyXG5cdHNhdmU6IHtcclxuXHRcdHVybDogJ3Jlc3QtPmh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC93b3Jkcy8nLFxyXG5cdFx0dXBkYXRlRnJvbVJlc3BvbnNlOiB0cnVlXHJcblx0fVxyXG59KTsiLCJpbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5pbXBvcnQge0pldEFwcCwgRW1wdHlSb3V0ZXIsIEhhc2hSb3V0ZXIgfSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBKZXRBcHB7XHJcblx0Y29uc3RydWN0b3IoY29uZmlnKXtcclxuXHRcdGNvbnN0IGRlZmF1bHRzID0ge1xyXG5cdFx0XHRpZCBcdFx0OiBBUFBOQU1FLFxyXG5cdFx0XHR2ZXJzaW9uIDogVkVSU0lPTixcclxuXHRcdFx0cm91dGVyIFx0OiBCVUlMRF9BU19NT0RVTEUgPyBFbXB0eVJvdXRlciA6IEhhc2hSb3V0ZXIsXHJcblx0XHRcdGRlYnVnIFx0OiAhUFJPRFVDVElPTixcclxuXHRcdFx0c3RhcnQgXHQ6ICcvaW5kZXgnXHJcblx0XHR9O1xyXG5cclxuXHRcdHN1cGVyKHsgLi4uZGVmYXVsdHMsIC4uLmNvbmZpZyB9KTtcclxuXHR9XHJcbn1cclxuXHJcbmlmICghQlVJTERfQVNfTU9EVUxFKXtcclxuXHR3ZWJpeC5yZWFkeSgoKSA9PiB7XHJcblx0XHRjb25zdCBhcHAgPSBuZXcgTXlBcHAoKTtcclxuXHRcdGFwcC5hdHRhY2hFdmVudCgnYXBwOmd1YXJkJywgKHVybCwgdmlldywgbmF2KSA9PiB7XHJcblx0XHRcdGlmKHVybC5pbmRleE9mKCcvaG9tZScpICE9PSAtMSkge1xyXG5cdFx0XHRcdHdlYml4LmFqYXgoKS5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9jaGVjaycpLnRoZW4oXHJcblx0XHRcdFx0XHQocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gcmVzLmpzb24oKTtcclxuXHRcdFx0XHRcdFx0aWYgKCFyZXNwb25zZS5hbGxvd0FjY2Vzcykge1xyXG5cdFx0XHRcdFx0XHRcdGFwcC5zaG93KCcvaW5kZXgnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZihlcnJvci5zdGF0dXMgPT0gNDAxKSB7XHJcblx0XHRcdFx0XHRcdFx0YXBwLnNob3coJy9pbmRleCcpO1xyXG5cdFx0XHRcdFx0XHR9XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0YXBwLnJlbmRlcigpO1xyXG5cdH0pO1xyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwidmFyIG1hcCA9IHtcblx0XCIuL1wiOiBcIi4vc291cmNlcy92aWV3cy9pbmRleC5qc1wiLFxuXHRcIi4vYWRkR3JvdXBcIjogXCIuL3NvdXJjZXMvdmlld3MvYWRkR3JvdXAuanNcIixcblx0XCIuL2FkZEdyb3VwLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkZEdyb3VwLmpzXCIsXG5cdFwiLi9hZGRXb3JkXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2FkZFdvcmQuanNcIixcblx0XCIuL2FkZFdvcmQuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvYWRkV29yZC5qc1wiLFxuXHRcIi4vY3JlYXRlVGVzdFwiOiBcIi4vc291cmNlcy92aWV3cy9jcmVhdGVUZXN0LmpzXCIsXG5cdFwiLi9jcmVhdGVUZXN0LmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2NyZWF0ZVRlc3QuanNcIixcblx0XCIuL2dyb3VwXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2dyb3VwLmpzXCIsXG5cdFwiLi9ncm91cC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9ncm91cC5qc1wiLFxuXHRcIi4vaG9tZVwiOiBcIi4vc291cmNlcy92aWV3cy9ob21lLmpzXCIsXG5cdFwiLi9ob21lLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2hvbWUuanNcIixcblx0XCIuL2luZGV4XCI6IFwiLi9zb3VyY2VzL3ZpZXdzL2luZGV4LmpzXCIsXG5cdFwiLi9pbmRleC5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9pbmRleC5qc1wiLFxuXHRcIi4vbWFpblwiOiBcIi4vc291cmNlcy92aWV3cy9tYWluLmpzXCIsXG5cdFwiLi9tYWluLmpzXCI6IFwiLi9zb3VyY2VzL3ZpZXdzL21haW4uanNcIixcblx0XCIuL3Byb2ZpbGVcIjogXCIuL3NvdXJjZXMvdmlld3MvcHJvZmlsZS5qc1wiLFxuXHRcIi4vcHJvZmlsZS5qc1wiOiBcIi4vc291cmNlcy92aWV3cy9wcm9maWxlLmpzXCIsXG5cdFwiLi9yZWdpc3RlclwiOiBcIi4vc291cmNlcy92aWV3cy9yZWdpc3Rlci5qc1wiLFxuXHRcIi4vcmVnaXN0ZXIuanNcIjogXCIuL3NvdXJjZXMvdmlld3MvcmVnaXN0ZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zb3VyY2VzL3ZpZXdzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCB7IGdyb3VwcyB9IGZyb20gJ21vZGVscy9ncm91cHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYWRkR3JvdXBGb3JtIGV4dGVuZHMgSmV0VmlldyB7XHJcblx0Y29uZmlnKCkge1xyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHZpZXc6ICd3aW5kb3cnLFxyXG5cdFx0XHRsb2NhbElkOiAnZm9ybVBvcHVwJyxcclxuXHRcdFx0cG9zaXRpb246J2NlbnRlcicsXHJcblx0XHRcdGhlYWQ6ICdHcm91cCBuYW1lJyxcclxuXHRcdFx0Ym9keToge1xyXG5cdFx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0XHRsb2NhbElkOiAnZm9ybVZpZXcnLFxyXG5cdFx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbmFtZTogJ2dyb3VwTmFtZScsIGxhYmVsOiAnJ30sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMjAsXHJcblx0XHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgdHlwZTogJ2Zvcm0nLCB2YWx1ZTogJ1NhdmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zYXZlR3JvdXAoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlV2luZG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdDYW5jZWwnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nZXRSb290KCkuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0cnVsZXM6IHtcclxuXHRcdFx0XHRcdCdncm91cE5hbWUnOiB3ZWJpeC5ydWxlcy5pc05vdEVtcHR5XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxuXHRcclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5tYWluV2luZG93ID0gdGhpcy4kJCgnZm9ybVBvcHVwJyk7XHJcblx0fVxyXG5cclxuXHRzaG93V2luZG93KCkge1xyXG5cdFx0dGhpcy5tYWluV2luZG93LnNob3coKTtcclxuXHR9XHJcblxyXG5cdGhpZGVXaW5kb3coKSB7XHJcblx0XHR0aGlzLm1haW5XaW5kb3cuaGlkZSgpO1xyXG5cdH1cclxuXHJcblx0c2F2ZUdyb3VwKCkge1xyXG5cdFx0Y29uc3QgZm9ybSA9IHRoaXMuJCQoJ2Zvcm1WaWV3Jyk7XHJcblx0XHRjb25zdCB2YWx1ZXMgPSBmb3JtLmdldFZhbHVlcygpO1xyXG5cdFx0dmFsdWVzLmNyZWF0aW9uRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRcclxuXHRcdGdyb3Vwcy5hZGQodmFsdWVzKTtcclxuXHRcdHRoaXMuY2xlYXJGb3JtKGZvcm0pO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJGb3JtKGZvcm0pIHtcclxuXHRcdGZvcm0uY2xlYXJWYWxpZGF0aW9uKCk7XHJcblx0XHRmb3JtLmNsZWFyKCk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJ21vZGVscy9sYW5ndWFnZXMnO1xyXG5pbXBvcnQgeyB3b3JkcyB9IGZyb20gJ21vZGVscy93b3Jkcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhZGRXb3JkRm9ybSBleHRlbmRzIEpldFZpZXcge1xyXG5cclxuXHRtYWluUm93KGNvdW50LCBsYW5ncykge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bWFyZ2luOiAyMCxcclxuXHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdHsgdmlldzogJ2NvbWJvJywgbGFiZWw6ICdMYW5ndWFnZScsIGxhYmVsV2lkdGg6IDcyLCBsYWJlbEFsaWduOiAncmlnaHQnLCB3aWR0aDogMTgwLCBuYW1lOiBgbGFuZ3VhZ2Uke2NvdW50fWAsIG9wdGlvbnM6IHsgYm9keTogeyB0ZW1wbGF0ZTogJyN2YWx1ZSMnLCBkYXRhOiBsYW5ncyB9IH0gfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdUcmFuc2xhdGlvbicsIGxhYmVsV2lkdGg6IDgyLCBsYWJlbEFsaWduOiAncmlnaHQnLCBuYW1lOiBgdHJhbnNsYXRpb24ke2NvdW50fWAgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdGlkOiAnYWRkVHJhbnNsYXRpb24nLFxyXG5cdFx0XHRcdFx0dmFsdWU6ICdBZGQgdHJhbnNsYXRpb24nLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDE0MCxcclxuXHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYWRkVHJhbnNsYXRpb24oKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRjb25maWcoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2aWV3OiAnd2luZG93JyxcclxuXHRcdFx0bG9jYWxJZDogJ2FkZFdvcmRGb3JtJyxcclxuXHRcdFx0aGVhZDogJ0FkZCB3b3JkJyxcclxuXHRcdFx0d2lkdGg6IDYwMCxcclxuXHRcdFx0cG9zaXRpb246ICdjZW50ZXInLFxyXG5cdFx0XHRib2R5OiB7XHJcblx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdFx0XHRcdGxvY2FsSWQ6ICd3b3JkRm9ybScsXHJcblx0XHRcdFx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIG5hbWU6ICdpZCcsIGxvY2FsSWQ6ICdpZCcsIGhpZGRlbjogdHJ1ZSB9LFxyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBuYW1lOiAnZ3JvdXBJZCcsIGxvY2FsSWQ6ICdncm91cElkJywgaGlkZGVuOiB0cnVlIH0sXHJcblx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0dmlldzogJ2xhYmVsJyxcclxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsOiAnT3JpZ2luYWwgd29yZCcsXHJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI0XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW46IDIwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29sczogW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IHZpZXc6ICdjb21ibycsIGxhYmVsOiAnTGFuZ3VhZ2UnLCBsYWJlbFdpZHRoOiA3MiwgbGFiZWxBbGlnbjogJ3JpZ2h0Jywgd2lkdGg6IDE4MCwgbmFtZTogJ2xhbmd1YWdlSWQnLCBvcHRpb25zOiB7IGJvZHk6IHsgdGVtcGxhdGU6ICcjdmFsdWUjJywgZGF0YTogbGFuZ3VhZ2VzIH0gfSB9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgbGFiZWw6ICdXb3JkJywgbGFiZWxXaWR0aDogODIsIGxhYmVsQWxpZ246ICdyaWdodCcsIG5hbWU6ICd3b3JkJywgbG9jYWxJZDogJ29yaWdpbmFsV29yZCcgfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0eyB2aWV3OiAnY29tYm8nLCBsYWJlbDogJ1BPUycsIGxhYmVsV2lkdGg6IDQwLCBsYWJlbEFsaWduOiAncmlnaHQnLCB3aWR0aDogMTQwLCBuYW1lOiAncGFydE9mU3BlZWNoJywgb3B0aW9uczogWydOb3VuJywgJ1Byb25vdW4nLCAnVmVyYicsICdBZHZlcmInXSB9XHJcblx0XHRcdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0XHRydWxlczoge1xyXG5cdFx0XHRcdFx0XHRcdCdsYW5ndWFnZUlkJzogd2ViaXgucnVsZXMuaXNOb3RFbXB0eSxcclxuXHRcdFx0XHRcdFx0XHQnd29yZCc6IHdlYml4LnJ1bGVzLmlzTm90RW1wdHksXHJcblx0XHRcdFx0XHRcdFx0J3BhcnRPZlNwZWVjaCc6IHdlYml4LnJ1bGVzLmlzTm90RW1wdHksXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0XHRcdFx0bG9jYWxJZDogJ3RyYW5zbGF0aW9uc0Zvcm0nLFxyXG5cdFx0XHRcdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdFx0XHRcdHsgdmlldzogJ3RleHQnLCBuYW1lOiAnd29yZElkJywgbG9jYWxJZDogJ3dvcmRJZCcsIGhpZGRlbjogdHJ1ZSB9LFxyXG5cdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdHZpZXc6ICdsYWJlbCcsXHJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbDogJ1RyYW5zbGF0aW9ucycsXHJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI0XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm1haW5Sb3coMSwgbGFuZ3VhZ2VzKVxyXG5cdFx0XHRcdFx0XHRdXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDIwLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nWTogMTAsXHJcblx0XHRcdFx0XHRcdGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdTYXZlJywgdHlwZTogJ2Zvcm0nLCBsb2NhbElkOiAnc2F2ZUJ0bicsIHdpZHRoOiAxMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNhdmVGb3JtKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgdmFsdWU6ICdDYW5jZWwnLCB3aWR0aDogMTAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5nZXRSb290KCkuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0e31cclxuXHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLnRyYW5zbGF0aW9uc0Zvcm0gPSB0aGlzLiQkKCd0cmFuc2xhdGlvbnNGb3JtJyk7XHJcblx0XHR0aGlzLndvcmRGb3JtID0gdGhpcy4kJCgnd29yZEZvcm0nKTtcclxuXHRcdHRoaXMuYWRkV29yZEZvcm0gPSB0aGlzLiQkKCdhZGRXb3JkRm9ybScpO1xyXG5cdFx0dGhpcy5idG5BZGRUcmFuc2xhdGlvbiA9ICQkKCdhZGRUcmFuc2xhdGlvbicpO1xyXG5cclxuXHRcdGNvbnN0IGFsbENvbWJvID0gdGhpcy5maW5kQWxsQ29tYm8oKTtcclxuXHRcdGFsbENvbWJvLmZvckVhY2goKGNvbWJvLCBpKSA9PiB7XHJcblx0XHRcdHRoaXMub25Db21ib0NoYW5nZShjb21ibywgaSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZpbmRBbGxDb21ibygpIHtcclxuXHRcdHJldHVybiB0aGlzLiQkKCdhZGRXb3JkRm9ybScpLnF1ZXJ5Vmlldyh7IHZpZXc6ICdjb21ibycsIGxhYmVsOiAnTGFuZ3VhZ2UnIH0sICdhbGwnKTtcclxuXHR9XHJcblxyXG5cdG9uQ29tYm9DaGFuZ2UoY29tYm8sIGkpIHtcdFxyXG5cdFx0Y29tYm8uYXR0YWNoRXZlbnQoJ29uQ2hhbmdlJywgKG5ld3YsIG9sZHYpID0+IHtcclxuXHJcblx0XHRcdC8vZ2V0IGFsbCBjb21ibyBpbiBmb3JtXHJcblx0XHRcdC8vbmVlZCAgdG8gZmluZCBhbGwgY29tYm8gYWdhaW4sIGluIGNhc2UgaWYgbmV3IHdhcyBhZGRlXHJcblx0XHRcdGNvbnN0IGFsbENvbWJvID0gdGhpcy5maW5kQWxsQ29tYm8oKTtcclxuXHRcdFx0Y29uc3QgY29tYm9zQXJyID0gYWxsQ29tYm8uc2xpY2UoKTtcclxuXHRcdFx0Y29uc3QgYWxsTGFuZ3MgPSB7Li4ubGFuZ3VhZ2VzLmRhdGEucHVsbH07XHJcblx0XHRcdC8vcmVtb3ZlIGZyb20gYXJyYXkgY29tYm8gd2hlcmUgY2F1Z2h0IGV2ZW50XHJcblx0XHRcdGNvbWJvc0Fyci5zcGxpY2UoaSwgMSk7XHJcblxyXG5cdFx0XHQvL2ZvciBlYWNoIGNvbWJvIHJlbW92ZSBmcm9tIG9wdGlvbnMgbGlzdCBzZWxlY3RlZCB2YWx1ZVxyXG5cdFx0XHRcclxuXHRcdFx0Y29tYm9zQXJyLmZvckVhY2goIGVsID0+IHRoaXMuc2V0T3B0aW9ucyhlbCwgYWxsTGFuZ3MsIG5ld3YsIG9sZHYpKTtcdFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVTZWxlY3RlZExhbmdzKCkge1xyXG5cdFx0Y29uc3QgYWxsTGFuZ3MgPSB7Li4ubGFuZ3VhZ2VzLmRhdGEucHVsbH07XHJcblx0XHRjb25zdCBhbGxDb21ibyA9IHRoaXMuZmluZEFsbENvbWJvKCk7XHJcblxyXG5cdFx0YWxsQ29tYm8uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZSA9IGl0ZW0uZ2V0VmFsdWUoKTtcclxuXHRcdFx0ZGVsZXRlIGFsbExhbmdzW3ZhbHVlXTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRjb25zdCBuZXdMYW5nQXJyID0gT2JqZWN0LmtleXMoYWxsTGFuZ3MpLm1hcCgoaykgPT4gYWxsTGFuZ3Nba10pO1xyXG5cdFx0cmV0dXJuIG5ld0xhbmdBcnI7XHJcblx0fVxyXG5cclxuXHRzaG93V2luZG93KGlkKSB7XHJcblx0XHR0aGlzLiQkKCdncm91cElkJykuc2V0VmFsdWUoaWQpO1xyXG5cdFx0dGhpcy5nZXRSb290KCkuc2hvdygpO1xyXG5cdFx0Y29uc3Qgd29yZElkID0gd2ViaXgudWlkKCk7XHJcblx0XHR0aGlzLiQkKCd3b3JkSWQnKS5zZXRWYWx1ZSh3b3JkSWQpO1xyXG5cdFx0dGhpcy4kJCgnaWQnKS5zZXRWYWx1ZSh3b3JkSWQpO1xyXG5cdH1cclxuXHJcblx0YWRkVHJhbnNsYXRpb24oKSB7XHJcblx0XHRjb25zdCByb3dzID0gdGhpcy50cmFuc2xhdGlvbnNGb3JtLmdldENoaWxkVmlld3MoKTtcclxuXHRcdGNvbnN0IHJvd3NDb3VudCA9IHJvd3MubGVuZ3RoO1xyXG5cdFx0Y29uc3QgdGFyZ2V0ID0gcm93c1tyb3dzQ291bnQgLSAxXTtcclxuXHJcblx0XHR3ZWJpeC51aSh7IHdpZHRoOiAxNDAgfSwgdGFyZ2V0LCB0aGlzLmJ0bkFkZFRyYW5zbGF0aW9uKTtcclxuXHJcblx0XHRjb25zdCBpbmRleCA9IHRoaXMudHJhbnNsYXRpb25zRm9ybS5nZXRDaGlsZFZpZXdzKCkubGVuZ3RoIC0gMTtcclxuXHRcdGNvbnN0IGxhbmdzID0gdGhpcy5yZW1vdmVTZWxlY3RlZExhbmdzKCk7XHJcblx0XHR0aGlzLnRyYW5zbGF0aW9uc0Zvcm0uYWRkVmlldyh0aGlzLm1haW5Sb3coaW5kZXgsIGxhbmdzKSk7XHJcblxyXG5cdFx0Y29uc3QgYWxsQ29tYm8gPSB0aGlzLmZpbmRBbGxDb21ibygpO1xyXG5cdFx0dGhpcy5vbkNvbWJvQ2hhbmdlKGFsbENvbWJvW2luZGV4XSwgaW5kZXgpO1xyXG5cdH1cclxuXHJcblx0c2F2ZUZvcm0oKSB7XHJcblx0XHRsZXQgd29yZCA9IHRoaXMud29yZEZvcm0uZ2V0VmFsdWVzKCk7XHJcblxyXG5cdFx0Y29uc3QgY291bnQgPSB0aGlzLnRyYW5zbGF0aW9uc0Zvcm0uZ2V0Q2hpbGRWaWV3cygpLmxlbmd0aCAtIDE7XHJcblx0XHRjb25zdCB0cmFuc2xhdGlvblZhbHVlcyA9IHRoaXMudHJhbnNsYXRpb25zRm9ybS5nZXRWYWx1ZXMoKTtcclxuXHJcblx0XHRsZXQgdHJhbnNsYXRpb25zID0gW107XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBjb3VudDsgaSsrKSB7XHJcblx0XHRcdGxldCB0ciA9IHtcclxuXHRcdFx0XHR3b3JkOiB0cmFuc2xhdGlvblZhbHVlc1tgdHJhbnNsYXRpb24ke2l9YF0sXHJcblx0XHRcdFx0bGFuZ3VhZ2VJZDogdHJhbnNsYXRpb25WYWx1ZXNbYGxhbmd1YWdlJHtpfWBdXHJcblx0XHRcdH07XHJcblx0XHRcdHRyYW5zbGF0aW9ucy5wdXNoKHRyKTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBiYXRjaCA9IHtcclxuXHRcdFx0d29yZCxcclxuXHRcdFx0dHJhbnNsYXRpb25zXHJcblx0XHR9O1xyXG5cclxuXHRcdGlmKHRoaXMud29yZEZvcm0udmFsaWRhdGUoKSkge1xyXG5cdFx0XHR3b3Jkcy5hZGQoYmF0Y2gpO1xyXG5cdFx0XHR0aGlzLmhpZGVXaW5kb3coKTtcdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhpZGVXaW5kb3coKSB7XHJcblx0XHR0aGlzLndvcmRGb3JtLmNsZWFyVmFsaWRhdGlvbigpO1xyXG5cdFx0dGhpcy50cmFuc2xhdGlvbnNGb3JtLmNsZWFyVmFsaWRhdGlvbigpO1xyXG5cdFx0dGhpcy53b3JkRm9ybS5jbGVhcigpO1xyXG5cdFx0dGhpcy50cmFuc2xhdGlvbnNGb3JtLmNsZWFyKCk7XHJcblx0XHR0aGlzLmFkZFdvcmRGb3JtLmhpZGUoKTtcclxuXHR9XHJcblxyXG5cdHNldE9wdGlvbnMoZWwsIGFsbExhbmdzLCBuZXd2LCBvbGR2KSB7XHJcblx0XHQvLyBtb3ZlIHRvIGZ1bmN0aW9uXHJcblx0XHRjb25zdCBsYW5ncyA9IGVsLmdldExpc3QoKS5zZXJpYWxpemUoKTtcclxuXHJcblx0XHQvL3JldHVybiB0byBvcHRpb25zIGxpc3QgdmFsdWUsIGlmIGl0IHdhcyB1bnNlbGVjdGVkXHJcblx0XHRpZihvbGR2KSB7XHJcblx0XHRcdGNvbnN0IG9sZFZhbCA9IGFsbExhbmdzW29sZHZdO1xyXG5cdFx0XHRsYW5ncy5wdXNoKG9sZFZhbCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgaW5kZXggPSBsYW5ncy5pbmRleE9mKGxhbmdzLmZpbmQoKGl0ZW0pID0+IHtyZXR1cm4gaXRlbS5pZCA9PT0gbmV3dn0pKTtcclxuXHRcdGxhbmdzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG5cdFx0Ly9zZXQgZmlsdGVyZWQgbGlzdCBvZiBsYW5ndWFnZXNcclxuXHRcdGVsLmRlZmluZSgnb3B0aW9ucycsIGxhbmdzKTtcclxuXHRcdGVsLnJlZnJlc2goKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IHsgd29yZHMgfSBmcm9tICdtb2RlbHMvd29yZHMnO1xyXG5pbXBvcnQgeyB0ZXN0cmVzdWx0cyB9IGZyb20gJ21vZGVscy90ZXN0cmVzdWx0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjcmVhdGVUZXN0Rm9ybSBleHRlbmRzIEpldFZpZXcge1xyXG5cdGNvbmZpZygpIHtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR2aWV3OiAnd2luZG93JyxcclxuXHRcdFx0bG9jYWxJZDogJ2Zvcm1Qb3B1cCcsXHJcblx0XHRcdHBvc2l0aW9uOidjZW50ZXInLFxyXG5cdFx0XHRoZWFkOiAnQ2hvb3NlIHRoZSBsYW5ndWFnZScsXHJcblx0XHRcdGJvZHk6IHtcclxuXHRcdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdFx0bG9jYWxJZDogJ2Nob29zZUxhbmdGb3JtJyxcclxuXHRcdFx0XHRtYXJnaW46IDEwLFxyXG5cdFx0XHRcdHBhZGRpbmdZOiAyMCxcclxuXHRcdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsb2NhbElkOiAnY2hvb3NlTGFuZycsXHJcblx0XHRcdFx0XHRcdHZpZXc6ICdjb21ibycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICdsYW5ndWFnZSdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHRcdFx0XHR2YWx1ZTogJ0Nob29zZScsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0XHRcdFx0Y2xpY2s6IChpZCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IHZhbHVlcyA9ICQkKGlkKS5nZXRQYXJlbnRWaWV3KCkuZ2V0VmFsdWVzKCk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jcmVhdGVUZXN0KHZhbHVlcy5sYW5ndWFnZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5mb3JtUG9wdXAgPSB0aGlzLiQkKCdmb3JtUG9wdXAnKTtcclxuXHRcdHRoaXMuZ3JvdXBJZCA9IHRoaXMuX2RhdGEuaWQ7XHJcblx0fVxyXG5cclxuXHRzaG93V2luZG93KGxhbmd1YWdlcykge1xyXG5cdFx0dGhpcy4kJCgnY2hvb3NlTGFuZycpLmRlZmluZSgnb3B0aW9ucycsIGxhbmd1YWdlcyk7XHJcblx0XHR0aGlzLmdldFJvb3QoKS5zaG93KCk7XHRcdFxyXG5cdH1cclxuXHJcblx0c2h1ZmZsZShhcnJheSkge1xyXG5cdFx0Y29uc3Qgc2h1ZmZsZWRBcnIgPSBbXTtcclxuXHRcdGxldCBudW0gPSBhcnJheS5sZW5ndGg7XHJcblxyXG5cdFx0Ly8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGXigKZcclxuXHRcdHdoaWxlIChudW0pIHtcclxuXHJcblx0XHRcdC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxyXG5cdFx0XHRjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcclxuXHJcblx0XHRcdC8vIElmIG5vdCBhbHJlYWR5IHNodWZmbGVkLCBtb3ZlIGl0IHRvIHRoZSBuZXcgYXJyYXkuXHJcblx0XHRcdGlmIChpIGluIGFycmF5KSB7XHJcblx0XHRcdFx0c2h1ZmZsZWRBcnIucHVzaChhcnJheVtpXSk7XHJcblx0XHRcdFx0ZGVsZXRlIGFycmF5W2ldO1xyXG5cdFx0XHRcdG51bS0tO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHNodWZmbGVkQXJyO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlVGVzdChsYW5ndWFnZSkge1xyXG5cdFx0dGhpcy5zY29yZSA9IDA7XHJcblx0XHRjb25zdCBncm91cElkID0gdGhpcy5ncm91cElkO1xyXG5cclxuXHRcdHdvcmRzLndhaXREYXRhLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHQvL2ZpbmQgd29yZHMgb2YgdGhpcyBncm91cFxyXG5cdFx0XHRsZXQgd29yZHNMaXN0ID0gd29yZHMuZmluZChpdGVtID0+IGl0ZW0uZ3JvdXBJZCA9PT0gZ3JvdXBJZCk7XHJcblxyXG5cdFx0XHQvLyBmaW5kIHdvcmRzLCB3aGljaCBoYXZlIHRyYW5zbGF0aW9ucyBvbiBzZWxlY3RlZCBsYW5ndWFnZVxyXG5cdFx0XHRcclxuXHRcdFx0d29yZHNMaXN0ID0gd29yZHNMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHdvcmRJdGVtID0gaXRlbS50cmFuc2xhdGlvbnMuZmluZCgodHIpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiB0ci5sYW5ndWFnZUlkID09PSBsYW5ndWFnZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAod29yZEl0ZW0pIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0Y29uc3Qgd29yZHNBcnIgPSB3b3Jkcy5zZXJpYWxpemUoKTsgLy8gY3JlYXRlIGFuIGFycmF5IG9mIGFsbCB3b3Jkc1xyXG5cdFx0XHRsZXQgdHJhbnNsYXRpb25zQXJyID0gW107XHJcblxyXG5cdFx0XHQvLyBmaW5kIGFsbCB0cmFuc2xhdGlvbnMgb24gc2VsZWN0ZWQgbGFuZ3VhZ2VcclxuXHRcdFx0d29yZHNBcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHRyYW5zbGF0aW9uID0gaXRlbS50cmFuc2xhdGlvbnMuZmluZCgodHIpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiB0ci5sYW5ndWFnZUlkID09PSBsYW5ndWFnZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAodHJhbnNsYXRpb24pIHtcclxuXHRcdFx0XHRcdC8vIGlmIG9yaWdpbmFsIG9mIHRoaXMgdHJhbnNsYXRpb24gaXMgb2YgdGhlIHNhbWUgcGFydCBvZiBzcGVlY2ggYXMgdGhlIHdvcmRcclxuXHRcdFx0XHRcdC8vIHB1c2ggaXQgdG8gYXJyYXkgb2YgdHJhbnNsYXRpb25zXHJcblx0XHRcdFx0XHR0cmFuc2xhdGlvbnNBcnIucHVzaCh0cmFuc2xhdGlvbik7XHJcblx0XHRcdFx0XHR0cmFuc2xhdGlvbi5wYXJ0T2ZTcGVlY2ggPSBpdGVtLnBhcnRPZlNwZWVjaDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0d29yZHNMaXN0ID0gdGhpcy5zaHVmZmxlKHdvcmRzTGlzdCk7IC8vbWl4IHRoZSB3b3JkcyBhcnJheVxyXG5cclxuXHRcdFx0Ly8gaWYgaW4gYXJyYXkgbW9yZSB0aGVuIDEwIHdvcmRzLCBjdXQgaXRcclxuXHRcdFx0aWYgKHdvcmRzTGlzdC5sZW5ndGggPiAxMCkge1xyXG5cdFx0XHRcdHdvcmRzTGlzdC5zcGxpY2Uod29yZHNMaXN0WzEwXSwgd29yZHNMaXN0Lmxlbmd0aCAtIDEwKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy53b3Jkc0xpc3QgPSB3b3Jkc0xpc3Q7XHJcblx0XHRcdHRoaXMudHJhbnNsYXRpb25zQXJyID0gdHJhbnNsYXRpb25zQXJyO1xyXG5cclxuXHRcdFx0dGhpcy5zaG93UXVlc3Rpb24oMCwgd29yZHNMaXN0LCB0cmFuc2xhdGlvbnNBcnIpOyBcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2hvd1F1ZXN0aW9uKG4sIHdvcmRzTGlzdCwgdHJhbnNsYXRpb25zQXJyKSB7XHJcblx0XHRpZihuIDwgd29yZHNMaXN0Lmxlbmd0aCkge1xyXG5cdFx0XHRjb25zdCB3b3JkT2JqID0gd29yZHNMaXN0W25dO1xyXG5cdFx0XHRjb25zdCByaWdodEFuc3dlciA9IHRyYW5zbGF0aW9uc0Fyci5maW5kKHRyID0+IHRyLndvcmRJZCA9PT0gd29yZE9iai5pZCk7XHJcblx0XHRcdGxldCB0cmFuc2xhdGlvbnMgPSB0cmFuc2xhdGlvbnNBcnIuZmlsdGVyKCh0cikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB0ci5wYXJ0T2ZTcGVlY2ggPT09IHdvcmRPYmoucGFydE9mU3BlZWNoICYmIHRyLndvcmRJZCAhPSB3b3JkT2JqLmlkO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIGlmIGluIGFycmF5IG1vcmUgdGhlbiAzIHdvcmRzLCBjdXQgaXRcclxuXHRcdFx0aWYgKHRyYW5zbGF0aW9ucy5sZW5ndGggPiAzKSB7XHJcblx0XHRcdFx0dHJhbnNsYXRpb25zLnNwbGljZSh0cmFuc2xhdGlvbnNbM10sIHRyYW5zbGF0aW9ucy5sZW5ndGggLSAzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dHJhbnNsYXRpb25zLnB1c2gocmlnaHRBbnN3ZXIpOyAvLyBhZGQgdG8gdHJhbnNsYXRpb25zIGFycmF5IGNvcnJlY3QgYW5zd2VyXHJcblx0XHRcdHRyYW5zbGF0aW9ucyA9IHRoaXMuc2h1ZmZsZSh0cmFuc2xhdGlvbnMpOyAvL21peCB0aGUgdHJhbnNsYXRpb25zIGFycmF5XHJcblx0XHRcdFxyXG5cdFx0XHRjb25zdCBpZCA9ICggbiA+IDApID8gICd0cmFuc2xhdGlvbnNCdXR0b25zJyA6ICdjaG9vc2VMYW5nRm9ybSc7XHJcblxyXG5cdFx0XHR0aGlzLmNoYW5nZUJ1dHRvbnMobiwgaWQsIHRyYW5zbGF0aW9ucyk7XHJcblx0XHRcdHRoaXMuZm9ybVBvcHVwLmdldEhlYWQoKS5zZXRIVE1MKHdvcmRPYmoud29yZCk7XHJcblx0XHRcdHRoaXMuJCQoJ2N1cnJlbnRXb3JkSWQnKS5zZXRWYWx1ZSh3b3JkT2JqLmlkKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnNhdmVSZXN1bHRzKCk7XHJcblx0XHRcdHRoaXMuc2hvd1Jlc3VsdHMoKTtcclxuXHRcdFx0dGhpcy5mb3JtUG9wdXAuZ2V0SGVhZCgpLnNldEhUTUwoJ1lvdXIgcmVzdWx0Jyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZXRUcmFuc2xhdGlvbnModHJhbnNsYXRpb25zLCBuKSB7XHJcblx0XHRjb25zdCBidXR0b25zID0gW107XHJcblx0XHR0cmFuc2xhdGlvbnMuZm9yRWFjaCgodHIpID0+IHtcclxuXHRcdFx0YnV0dG9ucy5wdXNoKHtcclxuXHRcdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0XHR2YWx1ZTogdHIud29yZCxcclxuXHRcdFx0XHR0eXBlOiAnZm9ybScsXHJcblx0XHRcdFx0YXV0b3dpZHRoOiB0cnVlLFxyXG5cdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmFuc3dlckFjdGlvbih0ciwgbik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGJ1dHRvbnM7XHJcblx0fVxyXG5cclxuXHRhbnN3ZXJBY3Rpb24odHJhbnNsYXRpb24sIG4pIHtcclxuXHRcdGNvbnN0IHdvcmRJZCA9IHRoaXMuJCQoJ2N1cnJlbnRXb3JkSWQnKS5nZXRWYWx1ZSgpO1xyXG5cdFx0aWYodHJhbnNsYXRpb24ud29yZElkID09PSB3b3JkSWQpIHtcclxuXHRcdFx0aWYodHJhbnNsYXRpb24ucGFydE9mU3BlZWNoID09PSAnTm91bicgfHwgdHJhbnNsYXRpb24ucGFydE9mU3BlZWNoID09PSAnVmVyYicpICB7XHJcblx0XHRcdFx0dGhpcy5zY29yZSArPSAyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc2NvcmUgKz0gMTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5zaG93UXVlc3Rpb24oKytuLCB0aGlzLndvcmRzTGlzdCwgdGhpcy50cmFuc2xhdGlvbnNBcnIpO1xyXG5cdH1cclxuXHJcblx0Y2hhbmdlQnV0dG9ucyhuLCBpZCwgdHJhbnNsYXRpb25zKSB7XHJcblx0XHR3ZWJpeC51aShcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0XHRsb2NhbElkOiAndHJhbnNsYXRpb25zQnV0dG9ucycsXHJcblx0XHRcdFx0Ym9yZGVybGVzczogdHJ1ZSxcclxuXHRcdFx0XHR0eXBlOiAnY2xlYW4nLFxyXG5cdFx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHZpZXc6ICd0ZXh0JyxcclxuXHRcdFx0XHRcdFx0bG9jYWxJZDogJ2N1cnJlbnRXb3JkSWQnLFxyXG5cdFx0XHRcdFx0XHRoaWRkZW46IHRydWVcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMTAsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwLFxyXG5cdFx0XHRcdFx0XHRjb2xzOiB0aGlzLnNldFRyYW5zbGF0aW9ucyh0cmFuc2xhdGlvbnMsIG4pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aGlzLmZvcm1Qb3B1cCxcclxuXHRcdFx0dGhpcy4kJChpZClcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRzaG93UmVzdWx0cygpIHtcclxuXHRcdHdlYml4LnVpKFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGFkZGluZzogMzAsXHJcblx0XHRcdFx0bWFyZ2luOiAxNSxcclxuXHRcdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRlbXBsYXRlOiB0aGlzLnNjb3JlLFxyXG5cdFx0XHRcdFx0XHRib3JkZXJsZXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRjc3M6ICdjZW50ZXInXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0XHRcdFx0dmFsdWU6ICdPaycsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICdmb3JtJyxcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCxcclxuXHRcdFx0XHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmZvcm1Qb3B1cC5oaWRlKCk7XHRcclxuXHRcdFx0XHRcdFx0XHR0aGlzLl9wYXJlbnQucmVmcmVzaCgpO1x0XHRcdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dGhpcy5mb3JtUG9wdXAsXHJcblx0XHRcdHRoaXMuJCQoJ3RyYW5zbGF0aW9uc0J1dHRvbnMnKVxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHNhdmVSZXN1bHRzKCkge1xyXG5cdFx0Y29uc3QgcmVzdWx0ID0ge1xyXG5cdFx0XHRwYXNzZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRncm91cElkOiB0aGlzLmdyb3VwSWQsXHJcblx0XHRcdHNjb3JlOiB0aGlzLnNjb3JlXHJcblx0XHR9O1xyXG5cdFx0dGVzdHJlc3VsdHMuYWRkKHJlc3VsdCk7XHJcblx0fVxyXG59XHJcbiAiLCJpbXBvcnQgeyBKZXRWaWV3IH0gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IHsgbGFuZ3VhZ2VzIH0gZnJvbSAnbW9kZWxzL2xhbmd1YWdlcyc7XHJcbmltcG9ydCB7IHdvcmRzIH0gZnJvbSAnbW9kZWxzL3dvcmRzJztcclxuaW1wb3J0IGNyZWF0ZVRlc3RGb3JtIGZyb20gJy4vY3JlYXRlVGVzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cFZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpIHtcclxuXHRcclxuXHRcdGNvbnN0IGR0YWJsZSA9IHtcclxuXHRcdFx0dmlldzogJ2RhdGF0YWJsZScsXHJcblx0XHRcdHNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0bG9jYWxJZDogJ3dvcmRzTGlzdCcsXHJcblx0XHRcdGNvbHVtbnM6W1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnd29yZCcsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDEsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdXb3JkJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdwYXJ0T2ZTcGVlY2gnLFxyXG5cdFx0XHRcdFx0ZmlsbHNwYWNlOiAxLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUE9TJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdyZW1vdmVDb2wnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUmVtb3ZlJyxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogNzAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJ3tjb21tb24udHJhc2hJY29uKCl9J1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdFx0b25DbGljazoge1xyXG5cdFx0XHRcdCd3eGktdHJhc2gnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHdlYml4LmNvbmZpcm0oe1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiAnUmVtb3ZlIHdvcmQ/JyxcclxuXHRcdFx0XHRcdFx0Y2FsbGJhY2s6IChyZXN1bHQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHR3b3Jkcy5yZW1vdmUoaWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy4kJCgnd29yZHNMaXN0JykucmVtb3ZlKGlkKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgZXhwb3J0QnRuID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dmFsdWU6ICdFeHBvcnQgd29yZHMnLFxyXG5cdFx0XHR3aWR0aDogMTUwLFxyXG5cdFx0XHRjbGljazogKCkgPT4geyBcclxuXHRcdFx0XHR3ZWJpeC50b0V4Y2VsKHRoaXMuJCQoJ3dvcmRzTGlzdCcpKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRjb25zdCB0ZXN0QnRuID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0dHlwZTogJ2Zvcm0nLFxyXG5cdFx0XHR2YWx1ZTogJ1Rlc3QnLFxyXG5cdFx0XHR3aWR0aDogMTAwLFxyXG5cdFx0XHRjbGljazogKCkgPT4geyBcclxuXHRcdFx0XHR0aGlzLmNyZWF0ZVRlc3QoKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0cm93czogW1xyXG5cdFx0XHRcdGR0YWJsZSwgXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Y29sczogW3Rlc3RCdG4sIHt9LCBleHBvcnRCdG5dXHJcblx0XHRcdFx0fVx0XHRcdFx0XHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0ICgpIHtcclxuXHRcdHRoaXMudGVzdFBvcHVwID0gdGhpcy51aShjcmVhdGVUZXN0Rm9ybSk7XHJcblxyXG5cdFx0d2ViaXgucHJvbWlzZS5hbGwoWyB3b3JkcywgbGFuZ3VhZ2VzIF0pLnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRjb25zdCBpZCA9IHRoaXMuZ2V0UGFyYW0oJ2lkJywgdHJ1ZSk7XHJcblx0XHRcdGNvbnN0IGdyaWQgPSB0aGlzLiQkKCd3b3Jkc0xpc3QnKTtcclxuXHJcblx0XHRcdGxldCB3b3Jkc0xpc3QgPSB3b3Jkcy5maW5kKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGl0ZW0uZ3JvdXBJZCA9PSBpZDtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRjb25zdCB0ckFyciA9IFtdO1xyXG5cdFx0XHRjb25zdCBsYW5nc0xpc3QgPSBbXTtcclxuXHJcblx0XHRcdHdvcmRzTGlzdCA9IHdvcmRzTGlzdC5tYXAoKHdvcmQpID0+IHtcclxuXHRcdFx0XHRjb25zdCB0cmFuc2xhdGlvbnMgPSB3b3JkLnRyYW5zbGF0aW9ucztcclxuXHRcdFx0XHR0cmFuc2xhdGlvbnMuZm9yRWFjaCgodHIpID0+IHtcclxuXHJcblx0XHRcdFx0XHQvL2ZpbmQgbGFuZ3VhZ2UgdmFsdWVcclxuXHRcdFx0XHRcdGNvbnN0IGxhbmcgPSBsYW5ndWFnZXMuZ2V0SXRlbSh0ci5sYW5ndWFnZUlkKTtcclxuXHRcdFx0XHRcdGNvbnN0IGxhbmdWYWwgPSBsYW5nLnZhbHVlO1xyXG5cclxuXHRcdFx0XHRcdC8vaWYgbGFuZ3VhZ2UgaXMgdW5pcXVlIGZvciB0aGlzIGdyb3VwLCBwdXNoIHRvIGFyclxyXG5cdFx0XHRcdFx0aWYodHJBcnIuaW5kZXhPZihsYW5nVmFsKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHR0ckFyci5wdXNoKGxhbmdWYWwpO1xyXG5cdFx0XHRcdFx0XHRsYW5nc0xpc3QucHVzaChsYW5nKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly9zZXQgbmV3IHByb3BlcnR5IHRvIHdvcmRcclxuXHRcdFx0XHRcdHdvcmRbbGFuZ1ZhbF0gPSB0ci53b3JkO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRyO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybiB3b3JkO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMubGFuZ3NMaXN0ID0gbGFuZ3NMaXN0O1xyXG5cclxuXHRcdFx0dGhpcy5hZGRDb2x1bXModHJBcnIsIGdyaWQpO1xyXG5cclxuXHRcdFx0Z3JpZC5wYXJzZSh3b3Jkc0xpc3QpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRhZGRDb2x1bXMoYXJyLCBncmlkKSB7XHJcblx0XHRjb25zdCBjb2x1bW5zID0gd2ViaXgudG9BcnJheShncmlkLmNvbmZpZy5jb2x1bW5zKTtcclxuXHRcdGFyci5mb3JFYWNoKChsYW5nLCBpKSA9PiB7XHJcblx0XHRcdGNvbHVtbnMuaW5zZXJ0QXQoe1xyXG5cdFx0XHRcdGlkOiBhcnJbaV0sXHJcblx0XHRcdFx0aGVhZGVyOiBhcnJbaV0sXHJcblx0XHRcdFx0ZmlsbHNwYWNlOiAxXHJcblx0XHRcdH0sIGkrMSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0Z3JpZC5yZWZyZXNoQ29sdW1ucygpO1xyXG5cdH1cclxuXHJcblx0Y3JlYXRlVGVzdCgpIHtcclxuXHRcdHRoaXMudGVzdFBvcHVwLnNob3dXaW5kb3codGhpcy5sYW5nc0xpc3QpO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0VmlldywgcGx1Z2luc30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IEF1dGhvcml6YXRpb24gZnJvbSAnLi4vYXV0aG9yaXphdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BWaWV3IGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHRcdGNvbnN0IGhlYWRlciA9IHtcclxuXHRcdFx0dHlwZTonaGVhZGVyJywgdGVtcGxhdGU6dGhpcy5hcHAuY29uZmlnLm5hbWUsIGNzczond2ViaXhfaGVhZGVyIGFwcF9oZWFkZXInXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IG1lbnUgPSB7XHJcblx0XHRcdHZpZXc6J21lbnUnLCBpZDondG9wOm1lbnUnLCBcclxuXHRcdFx0Y3NzOidhcHBfbWVudScsXHJcblx0XHRcdHdpZHRoOjE4MCwgbGF5b3V0Oid5Jywgc2VsZWN0OnRydWUsXHJcblx0XHRcdHRlbXBsYXRlOic8c3BhbiBjbGFzcz1cIndlYml4X2ljb24gI2ljb24jXCI+PC9zcGFuPiAjdmFsdWUjICcsXHJcblx0XHRcdHZhbHVlOiAnSG9tZScsXHJcblx0XHRcdGRhdGE6W1xyXG5cdFx0XHRcdHsgdmFsdWU6J0hvbWUnLCBpZDonbWFpbicsIGljb246J2ZhcyBmYS1ob21lJyB9LFxyXG5cdFx0XHRcdHsgdmFsdWU6J1Byb2ZpbGUnLCBpZDoncHJvZmlsZScsICBpY29uOidmYXMgZmEtdXNlcicgfVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxvZ291dCA9IHtcclxuXHRcdFx0dmlldzonYnV0dG9uJywgXHJcblx0XHRcdGxvY2FsSWQ6J2xvZ291dEJ0bicsIFxyXG5cdFx0XHR2YWx1ZTonTG9nb3V0JywgXHJcblx0XHRcdHR5cGU6J2Zvcm0nXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IHVpID0ge1xyXG5cdFx0XHR0eXBlOidjbGVhbicsIHBhZGRpbmdYOjUsIGNzczonYXBwX2xheW91dCcsIFxyXG5cdFx0XHRjb2xzOltcclxuXHRcdFx0XHR7IHBhZGRpbmdYOjUsIHBhZGRpbmdZOjEwLCByb3dzOiBbIHtjc3M6J3dlYml4X3NoYWRvd19tZWRpdW0nLCByb3dzOltoZWFkZXIsIG1lbnUsIGxvZ291dF19IF19LFxyXG5cdFx0XHRcdHsgdmlldzogJ3Jlc2l6ZXInLCB3aWR0aDogNSB9LFxyXG5cdFx0XHRcdHsgdHlwZTond2lkZScsIHBhZGRpbmdZOjEwLCBwYWRkaW5nWDo1LCByb3dzOiBbXHJcblx0XHRcdFx0XHR7ICRzdWJ2aWV3OnRydWUgfSBcclxuXHRcdFx0XHRdfVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB1aTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLnVzZShwbHVnaW5zLk1lbnUsICd0b3A6bWVudScpO1xyXG5cclxuXHRcdGNvbnN0IGF1dGhvcml6YXRpb24gPSBuZXcgQXV0aG9yaXphdGlvbigpO1xyXG5cclxuXHRcdHRoaXMuJCQoJ2xvZ291dEJ0bicpLmF0dGFjaEV2ZW50KCdvbkl0ZW1DbGljaycsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgYXBwID0gdGhpcy5hcHA7XHJcblx0XHRcdFxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ291dCgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0aWYocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdGFwcC5zaG93KCcvaW5kZXgnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtKZXRWaWV3fSBmcm9tICd3ZWJpeC1qZXQnO1xyXG5pbXBvcnQgQXV0aG9yaXphdGlvbiBmcm9tICcuLi9hdXRob3JpemF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4UGFnZSBleHRlbmRzIEpldFZpZXd7XHJcblx0Y29uZmlnKCl7XHJcblxyXG5cdFx0Y29uc3QgbG9naW5Gb3JtID0ge1xyXG5cdFx0XHR2aWV3OiAnZm9ybScsXHJcblx0XHRcdGxvY2FsSWQ6ICdsb2dpbkZvcm0nLFxyXG5cdFx0XHR3aWR0aDogMzAwLFxyXG5cdFx0XHRlbGVtZW50czogW1xyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCBsYWJlbDogJ1VzZXJuYW1lJywgbmFtZTogJ3VzZXJuYW1lJyB9LFxyXG5cdFx0XHRcdHsgdmlldzogJ3RleHQnLCB0eXBlOiAncGFzc3dvcmQnLCBsYWJlbDogJ1Bhc3N3b3JkJywgbmFtZTogJ3Bhc3N3b3JkJyB9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG1hcmdpbjogNSwgY29sczogW1xyXG5cdFx0XHRcdFx0XHR7IHZpZXc6ICdidXR0b24nLCBsb2NhbElkOiAnbG9naW5CdG4nLCB2YWx1ZTogJ0xvZ2luJywgdHlwZTogJ2Zvcm0nIH0sXHJcblx0XHRcdFx0XHRcdHsgdmlldzogJ2J1dHRvbicsIHZhbHVlOiAnQ2FuY2VsJyB9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGxpbmsgPSB7XHJcblx0XHRcdHZpZXc6ICdidXR0b24nLFxyXG5cdFx0XHR2YWx1ZTogJ0NyZWF0ZSBhbiBhY2NvdW50JyxcclxuXHRcdFx0Y2xpY2s6ICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNob3coJy9yZWdpc3RlcicpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7IFxyXG5cdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0e30sXHJcblx0XHRcdFx0e1x0XHJcblx0XHRcdFx0XHRyb3dzOiBbXHJcblx0XHRcdFx0XHRcdHt9LFxyXG5cdFx0XHRcdFx0XHRsb2dpbkZvcm0sXHJcblx0XHRcdFx0XHRcdGxpbmssXHJcblx0XHRcdFx0XHRcdHt9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7fVxyXG5cdFx0XHRdXHRcdFx0XHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRoaXMuJCQoJ2xvZ2luQnRuJykuYXR0YWNoRXZlbnQoJ29uSXRlbUNsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB2YWx1ZXMgPSB0aGlzLiQkKCdsb2dpbkZvcm0nKS5nZXRWYWx1ZXMoKTtcclxuXHRcdFx0Y29uc3QgYXV0aG9yaXphdGlvbiA9IG5ldyBBdXRob3JpemF0aW9uKCk7XHJcblxyXG5cdFx0XHRhdXRob3JpemF0aW9uLmxvZ2luKHZhbHVlcykudGhlbigocmVzcG9uc2UpID0+IHtcdFxyXG5cdFx0XHRcdGlmIChyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93KCcvaG9tZS9tYWluJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0d2ViaXgubWVzc2FnZShyZXNwb25zZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcdFx0XHRcdFxyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgSmV0VmlldyB9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCB7IGdyb3VwcyB9IGZyb20gJ21vZGVscy9ncm91cHMnO1xyXG5pbXBvcnQgYWRkR3JvdXBGb3JtIGZyb20gJy4vYWRkR3JvdXAnO1xyXG5pbXBvcnQgYWRkV29yZEZvcm0gZnJvbSAnLi9hZGRXb3JkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5WaWV3IGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKSB7XHJcblxyXG5cdFx0Y29uc3QgdGVzdFJlc3VsdHMgPSB7XHJcblx0XHRcdHZpZXc6ICdkYXRhdGFibGUnLFxyXG5cdFx0XHRpZDogJ2dyb3VwTGlzdCcsXHJcblx0XHRcdHNlbGVjdDogdHJ1ZSxcclxuXHRcdFx0Y29sdW1uczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnX2lkJyxcclxuXHRcdFx0XHRcdGhpZGRlbjogdHJ1ZSxcdFx0XHRcdFx0XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ2dyb3VwTmFtZScsXHJcblx0XHRcdFx0XHRzb3J0OiAndGV4dCcsXHJcblx0XHRcdFx0XHRmaWxsc3BhY2U6IDMsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdOYW1lJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICd3b3JkcycsXHJcblx0XHRcdFx0XHRzb3J0OiAnaW50JyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRcdG1pbldpZHRoOiA1MCxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdDb3VudCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAnY3JlYXRpb25EYXRlJyxcclxuXHRcdFx0XHRcdHdpZHRoOiA4MCxcclxuXHRcdFx0XHRcdGhlYWRlcjogJ0NyZWF0ZWQnLFxyXG5cdFx0XHRcdFx0Zm9ybWF0OiB3ZWJpeC5EYXRlLmRhdGVUb1N0cihcIiVkICVNXCIpXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZDogJ3ZpZXdDb2wnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnVmlldycsXHJcblx0XHRcdFx0XHRjc3M6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0d2lkdGg6IDUwLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICc8aSBjbGFzcz1cImZhcyBmYS1leWVcIj48L2k+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aGVhZGVyOiAnQWRkJyxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogNTAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJzxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+J1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6ICdyZW1vdmVDb2wnLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUmVtb3ZlJyxcclxuXHRcdFx0XHRcdGNzczogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHR3aWR0aDogNzAsXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZTogJ3tjb21tb24udHJhc2hJY29uKCl9J1xyXG5cdFx0XHRcdH1cdFx0XHRcdFxyXG5cdFx0XHRdLFxyXG5cdFx0XHRvbkNsaWNrOiB7XHJcblx0XHRcdFx0J2ZhLWV5ZSc6IChlLCBpZCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93KGAvaG9tZS9ncm91cD9pZD0ke2lkfWApO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0J2ZhLXBsdXMnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuYWRkV29yZC5zaG93V2luZG93KGlkKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCd3eGktdHJhc2gnOiAoZSwgaWQpID0+IHtcclxuXHRcdFx0XHRcdHdlYml4LmNvbmZpcm0oe1xyXG5cdFx0XHRcdFx0XHR0ZXh0OiAnUmVtb3ZlIGdyb3VwPycsXHJcblx0XHRcdFx0XHRcdGNhbGxiYWNrOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Z3JvdXBzLnJlbW92ZShpZCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGNvbnN0IGJ1dHRvbiA9IHtcclxuXHRcdFx0dmlldzogJ2J1dHRvbicsXHJcblx0XHRcdGlkOiAnYWRkR3JvdXAnLFxyXG5cdFx0XHR2YWx1ZTogJ0FkZCBncm91cCcsXHJcblx0XHRcdHR5cGU6J2Zvcm0nLFxyXG5cdFx0XHRpbnB1dFdpZHRoOiAxMDAsXHJcblx0XHRcdGNsaWNrOiAoKSA9PiB7IHRoaXMuYWRkR3JvdXAuc2hvd1dpbmRvdygpOyB9XHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7IFxyXG5cdFx0XHRyb3dzOiBbdGVzdFJlc3VsdHMsIGJ1dHRvbl1cclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy5hZGRHcm91cCA9IHRoaXMudWkoYWRkR3JvdXBGb3JtKTtcclxuXHRcdHRoaXMuYWRkV29yZCA9IHRoaXMudWkoYWRkV29yZEZvcm0pO1xyXG5cclxuXHRcdCQkKCdncm91cExpc3QnKS5wYXJzZShncm91cHMpO1xyXG5cdH1cclxufSIsImltcG9ydCB7SmV0Vmlld30gZnJvbSAnd2ViaXgtamV0JztcclxuaW1wb3J0IHsgdGVzdHJlc3VsdHMgfSBmcm9tICdtb2RlbHMvdGVzdHJlc3VsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZVZpZXcgZXh0ZW5kcyBKZXRWaWV3e1xyXG5cdGNvbmZpZygpIHtcclxuXHJcblx0XHRjb25zdCB0ZXN0UmVzdWx0cyA9IHtcclxuXHRcdFx0dmlldzogJ2RhdGF0YWJsZScsXHJcblx0XHRcdGxvY2FsSWQ6ICd0ZXN0UmVzdWx0cycsXHJcblx0XHRcdGNvbHVtbnM6W1xyXG5cdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRpZDogJ3JhdGluZycsICAgIFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnUmF0aW5nJywgICAgXHJcblx0XHRcdFx0XHRtaW5XaWR0aDogODBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRpZDogJ2dyb3VwSWQnLCAgIFxyXG5cdFx0XHRcdFx0aGVhZGVyOiAnR3JvdXAnLFxyXG5cdFx0XHRcdFx0dGVtcGxhdGU6ICcjZ3JvdXBJZC5ncm91cE5hbWUjJyxcclxuXHRcdFx0XHRcdGZpbGxzcGFjZTogMSxcclxuXHRcdFx0XHRcdG1pbldpZHRoOiAxMjBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHsgXHJcblx0XHRcdFx0XHRpZDogJ3Njb3JlJywgICAgXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdSZXN1bHQnLCAgICBcclxuXHRcdFx0XHRcdG1pbldpZHRoOiA4MFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdGlkOiAncGFzc2VkRGF0ZScsXHJcblx0XHRcdFx0XHRoZWFkZXI6ICdEYXRlJyxcclxuXHRcdFx0XHRcdGZvcm1hdDogd2ViaXguRGF0ZS5kYXRlVG9TdHIoXCIlZCAlTVwiKSxcclxuXHRcdFx0XHRcdHdpZHRoOiA4MFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdFx0ZGF0YTogW11cclxuXHRcdH07XHJcblxyXG5cdFx0Y29uc3QgYnV0dG9uID0ge1xyXG5cdFx0XHR2aWV3OiAnYnV0dG9uJyxcclxuXHRcdFx0aWQ6ICdjbGVhckFsbCcsXHJcblx0XHRcdHZhbHVlOiAnQ2xlYXIgYWxsJyxcclxuXHRcdFx0dHlwZTonZm9ybScsXHJcblx0XHRcdGlucHV0V2lkdGg6IDEwMFxyXG5cdFx0fTtcclxuXHJcblx0XHRyZXR1cm4geyBcclxuXHRcdFx0cm93czogW3Rlc3RSZXN1bHRzLCBidXR0b25dXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdHRlc3RyZXN1bHRzLndhaXREYXRhLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRsZXQgbiA9IDE7XHJcblx0XHRcdGNvbnN0IHJlY29yZHNBcnIgPSB0ZXN0cmVzdWx0cy5zZXJpYWxpemUoKTtcclxuXHRcdFx0Y29uc3QgZGF0YSA9IHJlY29yZHNBcnIubWFwKChyZWNvcmQsIGksIHJlY29yZHNBcnIpID0+IHtcclxuXHRcdFx0XHRpZiAoaSA+IDApIHtcclxuXHRcdFx0XHRcdGNvbnN0IHByZXZSZWMgPSByZWNvcmRzQXJyW2kgLSAxXTtcclxuXHRcdFx0XHRcdGlmIChyZWNvcmQuc2NvcmUgPiBwcmV2UmVjLnNjb3JlKSB7XHJcblx0XHRcdFx0XHRcdG4gKz0gMTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVjb3JkLnJhdGluZyA9IG47XHJcblx0XHRcdFx0cmV0dXJuIHJlY29yZDtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHRoaXMuJCQoJ3Rlc3RSZXN1bHRzJykucGFyc2UoZGF0YSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0pldFZpZXd9IGZyb20gJ3dlYml4LWpldCc7XHJcbmltcG9ydCBBdXRob3JpemF0aW9uIGZyb20gJy4uL2F1dGhvcml6YXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0ZXJQYWdlIGV4dGVuZHMgSmV0Vmlld3tcclxuXHRjb25maWcoKXtcclxuXHJcblx0XHRjb25zdCByZWdpc3RlckZvcm0gPSB7XHJcblx0XHRcdHZpZXc6ICdmb3JtJyxcclxuXHRcdFx0bG9jYWxJZDogJ3JlZ2lzdGVyRm9ybScsXHJcblx0XHRcdHdpZHRoOiAzMDAsXHJcblx0XHRcdGVsZW1lbnRzOiBbXHJcblx0XHRcdFx0eyB2aWV3OiAndGV4dCcsIGxhYmVsOiAnVWVybmFtZScsIG5hbWU6ICd1c2VybmFtZScgfSxcclxuXHRcdFx0XHR7IHZpZXc6ICd0ZXh0JywgdHlwZTogJ3Bhc3N3b3JkJywgbGFiZWw6ICdQYXNzd29yZCcsIG5hbWU6ICdwYXNzd29yZCcgfSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtYXJnaW46IDUsIGNvbHM6IFtcclxuXHRcdFx0XHRcdFx0eyBcclxuXHRcdFx0XHRcdFx0XHR2aWV3OiAnYnV0dG9uJywgbG9jYWxJZDogJ3JlZ2lzdGVyQnRuJywgdmFsdWU6ICdSZWdpc3RlcicsIHR5cGU6ICdmb3JtJ1x0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9O1xyXG5cclxuXHRcdHJldHVybiB7IFxyXG5cdFx0XHRjb2xzOiBbXHJcblx0XHRcdFx0e30sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0cm93czogW1xyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdFx0cmVnaXN0ZXJGb3JtLFxyXG5cdFx0XHRcdFx0XHR7fSxcclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHt9XHJcblx0XHRcdF1cdFx0XHRcclxuXHRcdH07XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0dGhpcy4kJCgncmVnaXN0ZXJCdG4nKS5hdHRhY2hFdmVudCgnb25JdGVtQ2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMuJCQoJ3JlZ2lzdGVyRm9ybScpLmdldFZhbHVlcygpO1xyXG5cdFx0XHRjb25zdCBhdXRob3JpemF0aW9uID0gbmV3IEF1dGhvcml6YXRpb24oKTtcclxuXHJcblx0XHRcdGF1dGhvcml6YXRpb24ucmVnaXN0ZXIodmFsdWVzKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93KCcvaG9tZS9tYWluJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=