!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/codebase/",n(n.s=7)}([function(t,e,n){"use strict";n.d(e,"d",function(){return B}),n.d(e,"b",function(){return m}),n.d(e,"c",function(){return h}),n.d(e,"a",function(){return y});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=function(){function t(e){s(this,t),this.webixJet=!0,this.webix=e,this._events=[],this._subs={},this._data={}}return t.prototype.getRoot=function(){return this._root},t.prototype.destructor=function(){this._detachEvents(),this._destroySubs(),this._events=this._container=this.app=this._parent=this._root=null},t.prototype.setParam=function(t,e,n){this._data[t]!==e&&(this._data[t]=e,this._segment.update(t,e,0),n&&this.show(null))},t.prototype.getParam=function(t,e){var n=this._data[t];if(void 0!==n||!e)return n;var r=this.getParentView();return r?r.getParam(t,e):void 0},t.prototype.getUrl=function(){return this._segment.suburl()},t.prototype.getUrlString=function(){return this._segment.toString()},t.prototype.getParentView=function(){return this._parent},t.prototype.$$=function(t){if("string"==typeof t){var e=this.getRoot();return e.queryView(function(n){return(n.config.id===t||n.config.localId===t)&&n.$scope===e.$scope},"self")}return t},t.prototype.on=function(t,e,n){var r=t.attachEvent(e,n);return this._events.push({obj:t,id:r}),r},t.prototype.contains=function(t){for(var e in this._subs){var n=this._subs[e].view;if(n===t||n.contains(t))return!0}return!1},t.prototype.getSubView=function(t){var e=this.getSubViewInfo(t);if(e)return e.subview.view},t.prototype.getSubViewInfo=function(t){var e=this._subs[t||"default"];return e?{subview:e,parent:this}:"_top"===t?(this._subs[t]={url:"",id:null,popup:!0},this.getSubViewInfo(t)):this._parent?this._parent.getSubViewInfo(t):null},t.prototype._detachEvents=function(){for(var t=this._events,e=t.length-1;e>=0;e--)t[e].obj.detachEvent(t[e].id)},t.prototype._destroySubs=function(){for(var t in this._subs){var e=this._subs[t].view;e&&e.destructor()}this._subs={}},t.prototype._init_url_data=function(){var t=this._segment.current();this._data={},this.webix.extend(this._data,t.params,!0)},t.prototype._getDefaultSub=function(){if(this._subs.default)return this._subs.default;for(var t in this._subs){var e=this._subs[t];if(!e.branch&&e.view&&"_top"!==t){var n=e.view._getDefaultSub();if(n)return n}}},t.prototype._routed_view=function(){var t=this.getParentView();if(!t)return!0;var e=t._getDefaultSub();return!(!e&&e!==this)&&t._routed_view()},t}();function a(t){"/"===t[0]&&(t=t.substr(1));for(var e=t.split("/"),n=[],r=0;r<e.length;r++){var i=e[r],o={},s=i.indexOf(":");if(-1===s&&(s=i.indexOf("?")),-1!==s){var u=i.substr(s+1).split(/[\:\?\&]/g),a=Array.isArray(u),c=0;for(u=a?u:u[Symbol.iterator]();;){var p;if(a){if(c>=u.length)break;p=u[c++]}else{if((c=u.next()).done)break;p=c.value}var f=p.split("=");o[f[0]]=decodeURIComponent(f[1])}}n[r]={page:s>-1?i.substr(0,s):i,params:o,isNew:!0}}return n}function c(t){var e=[],n=t,r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(i>=n.length)break;o=n[i++]}else{if((i=n.next()).done)break;o=i.value}var s=o;e.push("/"+s.page);var u=p(s.params);u&&e.push("?"+u)}return e.join("")}function p(t){var e=[];for(var n in t)e.length&&e.push("&"),e.push(n+"="+encodeURIComponent(t[n]));return e.join("")}var f=function(){function t(e,n){s(this,t),this._next=1,this.route="string"==typeof e?{url:a(e),path:e}:e,this.index=n}return t.prototype.current=function(){return this.route.url[this.index]},t.prototype.next=function(){return this.route.url[this.index+this._next]},t.prototype.suburl=function(){return this.route.url.slice(this.index)},t.prototype.shift=function(){return new t(this.route,this.index+this._next)},t.prototype.refresh=function(){for(var t=this.route.url,e=this.index+1;e<t.length;e++)t[e].isNew=!0},t.prototype.toString=function(){var t=c(this.suburl());return t?t.substr(1):""},t.prototype._join=function(t,e){var n=this.route.url;if(null===t)return n;var r=this.route.url;if(n=r.slice(0,this.index+(e?this._next:0)),t){n=n.concat(a(t));for(var i=0;i<n.length;i++)r[i]&&(n[i].view=r[i].view),r[i]&&n[i].page===r[i].page&&(n[i].isNew=!1)}return n},t.prototype.append=function(t){var e=this._join(t,!0);return this.route.path=c(e),this.route.url=e,this.route.path},t.prototype.show=function(t,e,n){var r=this,i=this._join(t,n);return new Promise(function(t,n){var o=c(i),s={url:i,redirect:o,confirm:Promise.resolve()},u=e?e.app:null;if(u&&!u.callEvent("app:guard",[s.redirect,e,s]))return void n();s.confirm.catch(function(){return s.redirect=null}).then(function(){if(null!==s.redirect){if(s.redirect!==o)return u.show(s.redirect),void n();r.route.path=o,r.route.url=i,t()}else n()})})},t.prototype.size=function(t){this._next=t},t.prototype.split=function(){var e={url:this.route.url.slice(this.index+1),path:""};return e.url.length&&(e.path=c(e.url)),new t(e,0)},t.prototype.update=function(t,e,n){var r=this.route.url[this.index+(n||0)];if(!r)return this.route.url.push({page:"",params:{}}),this.update(t,e,n);""===t?r.page=e:r.params[t]=e,this.route.path=c(this.route.url)},t}(),h=function(t){function e(n,r){s(this,e);var o=i(this,t.call(this,n.webix));return o.app=n,o._children=[],o}return o(e,t),e.prototype.ui=function(t,e){var n=(e=e||{}).container||t.container,i=this.app.createView(t);return this._children.push(i),i.render(n,this._segment,this),"object"!==(void 0===t?"undefined":r(t))||t instanceof u?i:i.getRoot()},e.prototype.show=function(t,e){if(e=e||{},"object"===(void 0===t?"undefined":r(t))){for(var n in t)this.setParam(n,t[n]);t=null}else{if("/"===t.substr(0,1))return this.app.show(t);if(0===t.indexOf("./")&&(t=t.substr(2)),0===t.indexOf("../")){var i=this.getParentView();return i?i.show(t.substr(3),e):this.app.show("/"+t.substr(3))}var o=this.getSubViewInfo(e.target);if(o){if(o.parent!==this)return o.parent.show(t,e);if(e.target&&"default"!==e.target)return this._renderFrameLock(e.target,o.subview,t)}else if(t)return this.app.show("/"+t)}return this._show(this._segment,t,this)},e.prototype._show=function(t,e,n){var r=this;return t.show(e,n,!0).then(function(){return r._init_url_data(),r._urlChange()}).then(function(){t.route.linkRouter&&(r.app.getRouter().set(t.route.path,{silent:!0}),r.app.callEvent("app:route",[t.route.path]))})},e.prototype.init=function(t,e){},e.prototype.ready=function(t,e){},e.prototype.config=function(){this.app.webix.message("View:Config is not implemented")},e.prototype.urlChange=function(t,e){},e.prototype.destroy=function(){},e.prototype.destructor=function(){this.destroy(),this._destroyKids(),this._root.destructor(),t.prototype.destructor.call(this)},e.prototype.use=function(t,e){t(this.app,this,e)},e.prototype.refresh=function(){this.getUrl();return this.destroy(),this._destroyKids(),this._destroySubs(),this._detachEvents(),this._container.tagName&&this._root.destructor(),this._segment.refresh(),this._render(this._segment)},e.prototype.render=function(t,e,n){var r=this;"string"==typeof e&&(e=new f(e,0)),this._segment=e,this._parent=n,this._init_url_data();var i="string"==typeof(t=t||document.body)?this.webix.toNode(t):t;return this._container!==i?(this._container=i,this._render(e)):this._urlChange().then(function(){return r.getRoot()})},e.prototype._render=function(t){var e=this,n=this.config();return n.then?n.then(function(n){return e._render_final(n,t)}):this._render_final(n,t)},e.prototype._render_final=function(t,e){var n=this,r=null,i=null,o=!1;if(this._container.tagName?i=this._container:(r=this._container).popup?(i=document.body,o=!0):i=this.webix.$$(r.id),!this.app||!i)return Promise.reject(null);var s=void 0,u=this._segment.current(),a={ui:{}};this.app.copyConfig(t,a.ui,this._subs),this.app.callEvent("app:render",[this,e,a]),a.ui.$scope=this,!r&&u.isNew&&u.view&&u.view.destructor();try{if(r&&!o){var c=i,p=c.getParentView();p&&"multiview"===p.name&&!a.ui.id&&(a.ui.id=c.config.id)}this._root=this.app.webix.ui(a.ui,i);var f=this._root;o&&f.setPosition&&!f.isVisible()&&f.show(),r&&(r.view&&r.view!==this&&r.view!==this.app&&r.view.destructor(),r.id=this._root.config.id,this.getParentView()||!this.app.app?r.view=this:r.view=this.app),u.isNew&&(u.view=this,u.isNew=!1),s=Promise.resolve(this._init(this._root,e)).then(function(){return n._urlChange().then(function(){return n._initUrl=null,n.ready(n._root,e.suburl())})})}catch(t){s=Promise.reject(t)}return s.catch(function(t){return n._initError(n,t)})},e.prototype._init=function(t,e){return this.init(t,e.suburl())},e.prototype._urlChange=function(){var t=this;this.app.callEvent("app:urlchange",[this,this._segment]);var e=[];for(var n in this._subs){var r=this._subs[n],i=this._renderFrameLock(n,r,null);i&&e.push(i)}return Promise.all(e).then(function(){return t.urlChange(t._root,t._segment.suburl())})},e.prototype._renderFrameLock=function(t,e,n){if(!e.lock){var r=this._renderFrame(t,e,n);r&&(e.lock=r.then(function(){return e.lock=null},function(){return e.lock=null}))}return e.lock},e.prototype._renderFrame=function(t,e,n){var r=this;if("default"===t){if(this._segment.next())return this._createSubView(e,this._segment.shift());e.view&&e.popup&&(e.view.destructor(),e.view=null)}if(null!==n&&(e.url=n),e.route){if(null!==n)return e.route.show(n,e.view).then(function(){return r._createSubView(e,e.route)});if(e.branch)return}var i=e.view;if(!i&&e.url){if("string"==typeof e.url)return e.route=new f(e.url,0),this._createSubView(e,e.route);"function"!=typeof e.url||i instanceof e.url||(i=new e.url(this.app,"")),i||(i=e.url)}if(i)return i.render(e,e.route||this._segment,this)},e.prototype._initError=function(t,e){return this.app&&this.app.error("app:error:initview",[e,t]),!0},e.prototype._createSubView=function(t,e){var n=this;return this.app.createFromURL(e.current(),t.view).then(function(r){return r.render(t,e,n)})},e.prototype._destroyKids=function(){for(var t=this._children,e=t.length-1;e>=0;e--)t[e]&&t[e].destructor&&t[e].destructor();this._children=[]},e}(u),l=function(t){function e(n,r){s(this,e);var o=i(this,t.call(this,n,r));return o._ui=r.ui,o}return o(e,t),e.prototype.config=function(){return this._ui},e}(h),d=function(){function t(e,n,r){s(this,t),this.path="",this.app=r}return t.prototype.set=function(t,e){this.path=t;var n=this.app;n.app.getRouter().set(n._segment.append(this.path),{silent:!0})},t.prototype.get=function(){return this.path},t}(),v=!0,g=function(t){function e(n){s(this,e);var r=(n||{}).webix||window.webix,o=i(this,t.call(this,r));return o.config=o.webix.extend({name:"App",version:"1.0",start:"/home"},n,!0),o.app=o.config.app,o.ready=Promise.resolve(),o._services={},o.webix.extend(o,o.webix.EventSystem),o}return o(e,t),e.prototype.getUrl=function(){return this._subSegment.suburl()},e.prototype.getUrlString=function(){return this._subSegment.toString()},e.prototype.getService=function(t){var e=this._services[t];return"function"==typeof e&&(e=this._services[t]=e(this)),e},e.prototype.setService=function(t,e){this._services[t]=e},e.prototype.destructor=function(){this.getSubView().destructor(),t.prototype.destructor.call(this)},e.prototype.copyConfig=function(t,e,n){if((t instanceof u||"function"==typeof t&&t.prototype instanceof u)&&(t={$subview:t}),void 0!==t.$subview)return this.addSubView(t,e,n);for(var i in e=e||(t instanceof Array?[]:{}),t){var o=t[i];if("function"==typeof o&&o.prototype instanceof u&&(o={$subview:o}),!o||"object"!==(void 0===o?"undefined":r(o))||o instanceof this.webix.DataCollection||o instanceof RegExp)e[i]=o;else if(o instanceof Date)e[i]=new Date(o);else{var s=this.copyConfig(o,o instanceof Array?[]:{},n);null!==s&&(e[i]=s)}}return e},e.prototype.getRouter=function(){return this.$router},e.prototype.clickHandler=function(t){if(t){var e=t.target||t.srcElement;if(e&&e.getAttribute){var n=e.getAttribute("trigger");n&&this._forView(e,function(t){return t.app.trigger(n)});var r=e.getAttribute("route");r&&this._forView(e,function(t){return t.show(r)})}}},e.prototype.getRoot=function(){return this.getSubView().getRoot()},e.prototype.refresh=function(){var t=this;return this._subSegment?this.getSubView().refresh().then(function(e){return t.callEvent("app:route",[t.getUrl()]),e}):Promise.resolve(null)},e.prototype.loadView=function(t){var e=this,n=this.config.views,r=null;if(""===t)return Promise.resolve(this._loadError("",new Error("Webix Jet: Empty url segment")));try{n&&"string"==typeof(r="function"==typeof n?n(t):n[t])&&(t=r,r=null),r||(r="_blank"===t?{}:this._loadViewDynamic(t))}catch(e){r=this._loadError(t,e)}return r.then||(r=Promise.resolve(r)),r=r.then(function(t){return t.__esModule?t.default:t}).catch(function(n){return e._loadError(t,n)})},e.prototype._forView=function(t,e){var n=this.webix.$$(t);n&&e(n.$scope)},e.prototype._loadViewDynamic=function(t){return null},e.prototype.createFromURL=function(t,e){var n=this;return t.isNew||!t.view?this.loadView(t.page).then(function(t){return n.createView(t,name)}):Promise.resolve(t.view)},e.prototype.createView=function(t,n){if("function"==typeof t){if(t.prototype instanceof e)return new t({app:this,name:n,router:d});if(t.prototype instanceof u)return new t(this,{name:n});t=t(this)}return t instanceof u?t:new l(this,{name:n,ui:t})},e.prototype.show=function(t){return this.render(this._container,t||this.config.start)},e.prototype.trigger=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this.apply(t,n)},e.prototype.apply=function(t,e){this.callEvent(t,e)},e.prototype.action=function(t){return this.webix.bind(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];this.apply(t,n)},this)},e.prototype.on=function(t,e){this.attachEvent(t,e)},e.prototype.use=function(t,e){t(this,null,e)},e.prototype.error=function(t,e){if(this.callEvent(t,e),this.callEvent("app:error",e),this.config.debug)for(var n=0;n<e.length;n++)if(console.error(e[n]),e[n]instanceof Error){var r=e[n].message;0===r.indexOf("Module build failed")?(r=r.replace(/\x1b\[[0-9;]*m/g,""),document.body.innerHTML="<pre style='font-size:16px; background-color: #ec6873; color: #000; padding:10px;'>"+r+"</pre>"):(r+="<br><br>Check console for more details",this.webix.message({type:"error",text:r,expire:-1}))}},e.prototype.render=function(t,e,n){var r=this;this._container="string"==typeof t?this.webix.toNode(t):t||document.body;var i=null;!this.$router?(v&&(this.webix.attachEvent("onClick",function(t){return r.clickHandler(t)}),v=!1),"string"==typeof e&&(e=new f(e,0)),this._subSegment=this._first_start(e),this._subSegment.route.linkRouter=!0):i="string"==typeof e?e:this.app?e.split().route.path:e.toString();var o=this.getSubView(),s=this._subSegment,u=s.show(i,o).then(function(){return r.createFromURL(s.current(),o)}).then(function(e){return e.render(t,s)}).then(function(t){return r.$router.set(s.route.path,{silent:!0}),r.callEvent("app:route",[r.getUrl()]),t});return this.ready=this.ready.then(function(){return u}),u},e.prototype.getSubView=function(){return this._subSegment?this._subSegment.current().view:new h(this,{})},e.prototype._first_start=function(t){var e=this;this._segment=t;if(this.$router=new this.config.router(function(t){return setTimeout(function(){e.show(t)},1)},this.config,this),this._container===document.body&&!1!==this.config.animation){var n=this._container;this.webix.html.addCss(n,"webixappstart"),setTimeout(function(){e.webix.html.removeCss(n,"webixappstart"),e.webix.html.addCss(n,"webixapp")},10)}if(t)this.app&&(t.current().view=this,t=t.next()?t.split():new f(this.config.start,0));else{var r=this.$router.get();r||(r=this.config.start,this.$router.set(r,{silent:!0})),t=new f(r,0)}return t},e.prototype._loadError=function(t,e){return this.error("app:error:resolve",[e,t]),{template:" "}},e.prototype.addSubView=function(t,e,n){var r=!0!==t.$subview?t.$subview:null,i=t.name||(r?this.webix.uid():"default");return e.id=t.id||"s"+this.webix.uid(),(n[i]={id:e.id,url:r,branch:t.branch,popup:t.popup}).popup?null:e},e}(u),y=function(){function t(e,n){var r=this;s(this,t),this.config=n||{},this._detectPrefix(),this.cb=e,window.onpopstate=function(){return r.cb(r.get())}}return t.prototype.set=function(t,e){var n=this;if(this.config.routes){var r=t.split("?",2);for(var i in this.config.routes)if(this.config.routes[i]===r[0]){t=i+(r.length>1?"?"+r[1]:"");break}}this.get()!==t&&window.history.pushState(null,null,this.prefix+this.sufix+t),e&&e.silent||setTimeout(function(){return n.cb(t)},1)},t.prototype.get=function(){var t=this._getRaw().replace(this.prefix,"").replace(this.sufix,"");if(t="/"!==t?t:"",this.config.routes){var e=t.split("?",2),n=this.config.routes[e[0]];n&&(t=n+(e.length>1?"?"+e[1]:""))}return t},t.prototype._detectPrefix=function(){var t=this.config.routerPrefix;this.sufix="#"+(void 0===t?"!":t),this.prefix=document.location.href.split("#",2)[0]},t.prototype._getRaw=function(){return document.location.href},t}(),w=!1;function b(t){if(!w&&t){w=!0;var e=window;e.Promise||(e.Promise=t.promise);var n=t.version.split(".");10*n[0]+1*n[1]<53&&(t.ui.freeze=function(e){var n=e();return n&&n.then?n.then(function(e){return t.ui.$freeze=!1,t.ui.resize(),e}):(t.ui.$freeze=!1,t.ui.resize()),n});var i=t.ui.baselayout.prototype.addView,o=t.ui.baselayout.prototype.removeView,s={addView:function(t,e){var n=this;if(!this.$scope||!this.$scope.webixJet)return i.apply(this,arguments);var o=function(){var r=n.$scope,o={};t=r.app.copyConfig(t,{},o),i.apply(n,[t,e]);var s=function(t){r._renderFrame(t,o[t],null).then(function(){r._subs[t]=o[t]})};for(var u in o)s(u);return{v:t.id}}();return"object"===(void 0===o?"undefined":r(o))?o.v:void 0},removeView:function(){if(o.apply(this,arguments),this.$scope&&this.$scope.webixJet){var e=this.$scope._subs;for(var n in e){var r=e[n];t.$$(r.id)||(r.view.destructor(),delete e[n])}}}};t.extend(t.ui.layout.prototype,s,!0),t.extend(t.ui.baselayout.prototype,s,!0),t.protoUI({name:"jetapp",$init:function(e){this.$app=new this.app(e);var n=t.uid().toString();for(var r in e.body={id:n},this.$ready.push(function(){this.$app.render({id:n})}),this.$app){var i=this.$app[r];"function"!=typeof i||this[r]||(this[r]=i.bind(this.$app))}}},t.ui.proxy)}}var m=function(t){function e(n){s(this,e),n.router=n.router||y;var r=i(this,t.call(this,n));return b(r.webix),r}return o(e,t),e.prototype._loadViewDynamic=function(t){return t=t.replace(/\./g,"/"),n(9)("./"+t)},e}(g);(function(){function t(e,n,r){s(this,t),this.storage=n.storage||r.webix.storage.session,this.name=n.storeName||n.id+":route",this.cb=e}t.prototype.set=function(t,e){var n=this;this.storage.put(this.name,t),e&&e.silent||setTimeout(function(){return n.cb(t)},1)},t.prototype.get=function(){return this.storage.get(this.name)}})(),function(t){function e(){return s(this,e),i(this,t.apply(this,arguments))}o(e,t),e.prototype._detectPrefix=function(){this.prefix="",this.sufix=this.config.routerPrefix||""},e.prototype._getRaw=function(){return document.location.pathname}}(y),function(){function t(e,n){s(this,t),this.path="",this.cb=e}t.prototype.set=function(t,e){var n=this;this.path=t,e&&e.silent||setTimeout(function(){return n.cb(t)},1)},t.prototype.get=function(){return this.path}}();function _(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function x(t,e,n){for(var r in t)_(t,r)&&e.call(n||t,t[r],r,t)}function S(t){t="Warning: "+t,"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(t){}}var E=String.prototype.replace,j=String.prototype.split,P="||||",$=function(t){var e=t%10;return 11!==t&&1===e?0:2<=e&&e<=4&&!(t>=12&&t<=14)?1:2},O={arabic:function(t){if(t<3)return t;var e=t%100;return e>=3&&e<=10?3:e>=11?4:5},bosnian_serbian:$,chinese:function(){return 0},croatian:$,french:function(t){return t>1?1:0},german:function(t){return 1!==t?1:0},russian:$,lithuanian:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=9&&(t%100<11||t%100>19)?1:2},czech:function(t){return 1===t?0:t>=2&&t<=4?1:2},polish:function(t){if(1===t)return 0;var e=t%10;return 2<=e&&e<=4&&(t%100<10||t%100>=20)?1:2},icelandic:function(t){return t%10!=1||t%100==11?1:0},slovenian:function(t){var e=t%100;return 1===e?0:2===e?1:3===e||4===e?2:3}},k={arabic:["ar"],bosnian_serbian:["bs-Latn-BA","bs-Cyrl-BA","srl-RS","sr-RS"],chinese:["id","id-ID","ja","ko","ko-KR","lo","ms","th","th-TH","zh"],croatian:["hr","hr-HR"],german:["fa","da","de","en","es","fi","el","he","hi-IN","hu","hu-HU","it","nl","no","pt","sv","tr"],french:["fr","tl","pt-br"],russian:["ru","ru-RU"],lithuanian:["lt"],czech:["cs","cs-CZ","sk"],polish:["pl"],icelandic:["is"],slovenian:["sl-SL"]};function V(t){var e,n=(e={},x(k,function(t,n){x(t,function(t){e[t]=n})}),e);return n[t]||n[j.call(t,/-/,1)[0]]||n.en}function C(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}var R=/\$/g,T="$$",U=/%\{(.*?)\}/g;function L(t,e,n,r){if("string"!=typeof t)throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");if(null==e)return t;var i=t,o=r||U,s="number"==typeof e?{smart_count:e}:e;if(null!=s.smart_count&&i){var u=j.call(i,P);i=(u[function(t,e){return O[V(t)](e)}(n||"en",s.smart_count)]||u[0]).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}return i=E.call(i,o,function(t,e){return _(s,e)&&null!=s[e]?E.call(s[e],R,T):t})}function I(t){var e=t||{};this.phrases={},this.extend(e.phrases||{}),this.currentLocale=e.locale||"en";var n=e.allowMissing?L:null;this.onMissingKey="function"==typeof e.onMissingKey?e.onMissingKey:n,this.warn=e.warn||S,this.tokenRegex=function(t){var e=t&&t.prefix||"%{",n=t&&t.suffix||"}";if(e===P||n===P)throw new RangeError('"'+P+'" token is reserved for pluralization');return new RegExp(C(e)+"(.*?)"+C(n),"g")}(e.interpolation)}I.prototype.locale=function(t){return t&&(this.currentLocale=t),this.currentLocale},I.prototype.extend=function(t,e){x(t,function(t,n){var i=e?e+"."+n:n;"object"===(void 0===t?"undefined":r(t))?this.extend(t,i):this.phrases[i]=t},this)},I.prototype.unset=function(t,e){"string"==typeof t?delete this.phrases[t]:x(t,function(t,n){var i=e?e+"."+n:n;"object"===(void 0===t?"undefined":r(t))?this.unset(t,i):delete this.phrases[i]},this)},I.prototype.clear=function(){this.phrases={}},I.prototype.replace=function(t){this.clear(),this.extend(t)},I.prototype.t=function(t,e){var n,r,i=null==e?{}:e;if("string"==typeof this.phrases[t])n=this.phrases[t];else if("string"==typeof i._)n=i._;else if(this.onMissingKey){r=(0,this.onMissingKey)(t,i,this.currentLocale,this.tokenRegex)}else this.warn('Missing translation for key: "'+t+'"'),r=t;return"string"==typeof n&&(r=L(n,i,this.currentLocale,this.tokenRegex)),r},I.prototype.has=function(t){return _(this.phrases,t)},I.transformPhrase=function(t,e,n){return L(t,e,n)};var A=I;function F(t,e,n){if(e.urls)n=e.urls[n]||n;else if(e.param){var r;(r={})[e.param]=n,n=r}t.show(n)}var M={good:"check",error:"warning",saving:"refresh fa-spin"},D={good:"Ok",error:"Error",saving:"Connecting..."};function N(t,e,n){for(var r=0;r<n.length;r++)t[n[r]]=e[r+1]?e[r+1].page:""}var z=window.webix;z&&b(z);var B={UnloadGuard:function(t,e,n){e.on(t,"app:guard",function(t,r,i){if(r===e||r.contains(e)){var o=n();i.confirm=!1===o?Promise.reject(o):i.confirm.then(function(){return o})}})},Locale:function(t,e,r){var i=(r=r||{}).storage,o=i?i.get("lang")||"en":r.lang||"en";function s(e,n,s){n.__esModule&&(n=n.default);var u={phrases:n};r.polyglot&&t.webix.extend(u,r.polyglot);var c=a.polyglot=new A(u);if(c.locale(e),a._=t.webix.bind(c.t,c),o=e,i&&i.put("lang",o),r.webix){var p=r.webix[e];p&&t.webix.i18n.setLocale(p)}return s?Promise.resolve():t.refresh()}function u(t,e){if(!1!==r.path){var i=(r.path?r.path+"/":"")+t;s(t,n(10)("./"+i),e)}}var a={getLang:function(){return o},setLang:u,setLangData:s,_:null,polyglot:null};t.setService("locale",a),u(o,!0)},Menu:function(t,e,n){var r=e.getSubViewInfo().parent,i=e.$$(n.id||n),o=!1;i.attachEvent("onchange",function(){o||F(r,n,this.getValue())}),i.attachEvent("onafterselect",function(){if(!o){var t=null;i.setValue?t=this.getValue():i.getSelectedId&&(t=i.getSelectedId()),F(r,n,t)}}),e.on(t,"app:route",function(){var t="";if(n.param)t=e.getParam(n.param,!0);else{var s=r.getUrl()[1];s&&(t=s.page)}t&&(o=!0,i.setValue&&i.getValue()!==t?i.setValue(t):i.select&&i.exists(t)&&i.getSelectedId()!==t&&i.select(t),o=!1)})},Theme:function(t,e,n){var r=(n=n||{}).storage,i=r?r.get("theme")||"flat-default":n.theme||"flat-default",o={getTheme:function(){return i},setTheme:function(e,n){for(var o=e.split("-"),s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var a=s[u].getAttribute("title");a&&(a===e||a===o[0]?s[u].disabled=!1:s[u].disabled=!0)}t.webix.skin.set(o[0]),t.webix.html.removeCss(document.body,"theme-"+i),t.webix.html.addCss(document.body,"theme-"+e),i=e,r&&r.put("theme",e),n||t.refresh()}};t.setService("theme",o),o.setTheme(i,!0)},User:function(t,e,n){var r=(n=n||{}).login||"/login",i=n.logout||"/logout",o=n.afterLogin||t.config.start,s=n.afterLogout||"/login",u=n.ping||3e5,a=n.model,c=n.user,p={getUser:function(){return c},getStatus:function(t){return t?a.status().catch(function(){return null}).then(function(t){c=t}):null!==c},login:function(e,n){return a.login(e,n).then(function(e){if(c=e,!e)throw new Error("Access denied");t.callEvent("app:user:login",[c]),t.show(o)})},logout:function(){return c=null,a.logout().then(function(e){return t.callEvent("app:user:logout",[]),e})}};function f(t,e){t===i?(p.logout(),e.redirect=s):t===r||p.getStatus()||(e.redirect=r)}t.setService("user",p),t.attachEvent("app:guard",function(t,e,r){return!(!n.public||!n.public(t))||(void 0===c&&(r.confirm=p.getStatus(!0).then(function(){return f(t,r)})),f(t,r))}),u&&setInterval(function(){return p.getStatus(!0)},u)},Status:function(t,e,n){var r="good",i=0,o=!1,s=n.expire;s||!1===s||(s=2e3);var u=n.texts||D,a=n.icons||M;function c(t){var i=e.$$(n.target);i&&(t||(t="<div class='status_"+r+"'><span class='webix_icon fa-"+a[r]+"'></span> "+u[r]+"</div>"),i.setHTML(t))}function p(){i--,d("good")}function f(t){i--,d("error",t)}function h(t){i++,d("saving"),t&&t.then&&t.then(p,f)}function l(){0===i&&c(" ")}function d(e,n){i<0&&(i=0),"saving"===e?(r="saving",c()):(o="error"===e,0===i&&(r=o?"error":"good",o?t.error("app:error:server",[n.responseText||n]):s&&setTimeout(l,s),c()))}function v(n){var r=t.webix.dp(n);r&&(e.on(r,"onAfterDataSend",h),e.on(r,"onAfterSaveError",function(t,e,n){return f(n)}),e.on(r,"onAfterSave",p))}"string"==typeof n&&(n={target:n}),t.setService("status",{getStatus:function(){return r},setStatus:d,track:v}),n.remote&&e.on(t.webix,"onRemoteCall",h),n.ajax&&e.on(t.webix,"onBeforeAjax",function(t,e,n,r,i,o,s){h(s)}),n.data&&v(n.data)},UrlParam:function(t,e,n){var r=n.route||n,i={};e.on(t,"app:urlchange",function(t,n){e===t&&(N(i,n.suburl(),r),n.size(r.length+1))});var o=e.setParam,s=e.getParam;e.setParam=function(t,n,s){var u=r.indexOf(t);return u>=0?(i[t]=n,this._segment.update("",n,u+1),s?e.show(null):void 0):o.call(this,t,n,s)},e.getParam=function(t,e){var n=i[t];return void 0!==n?n:s.call(this,t,e)},N(i,e.getUrl(),r)}},K=window;K.Promise||(K.Promise=K.webix.promise)},function(t,e,n){"use strict";var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return t.prototype.register=function(t){return webix.ajax().post("http://localhost:3000/register",t)},t.prototype.login=function(t){return webix.ajax().post("http://localhost:3000/login",t)},t.prototype.logout=function(){return webix.ajax().get("http://localhost:3000/logout")},t}();e.a=r},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(1);var o=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.config=function(){var t=this;return{cols:[{},{rows:[{},{view:"form",localId:"loginForm",width:300,elements:[{view:"text",label:"Username",name:"username"},{view:"text",type:"password",label:"Password",name:"password"},{margin:5,cols:[{view:"button",localId:"loginBtn",value:"Login",type:"form"},{view:"button",value:"Cancel"}]}]},{view:"button",value:"Create an account",click:function(){t.show("/register")}},{}]},{}]}},e.prototype.init=function(){var t=this;this.$$("loginBtn").attachEvent("onItemClick",function(){var e=t.$$("loginForm").getValues();(new i.a).login(e).then(function(e){e?t.show("/home/start"):webix.message(e)})})},e}(r.c);e.default=o},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(1);var o=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.config=function(){return{type:"clean",paddingX:5,css:"app_layout",cols:[{paddingX:5,paddingY:10,rows:[{css:"webix_shadow_medium",rows:[{type:"header",template:this.app.config.name,css:"webix_header app_header"},{view:"menu",id:"top:menu",css:"app_menu",width:180,layout:"y",select:!0,template:'<span class="webix_icon #icon#"></span> #value# ',value:"Dashboard",data:[{value:"Dashboard",id:"start",icon:"wxi-columns"},{value:"Data",id:"data",icon:"wxi-pencil"}]},{view:"button",localId:"logoutBtn",value:"Logout",type:"form"}]}]},{view:"resizer",width:5},{type:"wide",paddingY:10,paddingX:5,rows:[{$subview:!0}]}]}},e.prototype.init=function(){var t=this;this.use(r.d.Menu,"top:menu");var e=new i.a;this.$$("logoutBtn").attachEvent("onItemClick",function(){var n=t.app;e.logout().then(function(t){t&&n.show("/index")})})},e}(r.c);e.default=o},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(1);var o=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.config=function(){return{cols:[{},{rows:[{},{view:"form",localId:"registerForm",width:300,elements:[{view:"text",label:"Uername",name:"username"},{view:"text",type:"password",label:"Password",name:"password"},{margin:5,cols:[{view:"button",localId:"registerBtn",value:"Register",type:"form"}]}]},{}]},{}]}},e.prototype.init=function(){var t=this;this.$$("registerBtn").attachEvent("onItemClick",function(){var e=t.$$("registerForm").getValues();(new i.a).register(e).then(function(e){e&&t.show("/home/start")})})},e}(r.c);e.default=o},function(t,e){},function(t,e,n){"use strict";n.r(e);var r=n(0),i=new webix.DataCollection({data:[{id:1,title:"The Shawshank Redemption",year:1994,votes:678790,rating:9.2,rank:1},{id:2,title:"The Godfather",year:1972,votes:511495,rating:9.2,rank:2},{id:3,title:"The Godfather: Part II",year:1974,votes:319352,rating:9,rank:3},{id:4,title:"The Good, the Bad and the Ugly",year:1966,votes:213030,rating:8.9,rank:4},{id:5,title:"My Fair Lady",year:1964,votes:533848,rating:8.9,rank:5},{id:6,title:"12 Angry Men",year:1957,votes:164558,rating:8.9,rank:6}]});var o=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.config=function(){return{view:"datatable",autoConfig:!0,css:"webix_shadow_medium"}},e.prototype.init=function(t){t.parse(i)},e}(r.c);e.default=o},function(t,e,n){"use strict";n.r(e);n(8);var r=n(0),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};var o=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o={id:"webix-jet-app",version:"1.1.0",router:r.a,debug:!1,start:"/index"};return function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,i({},o,n)))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(r.b);e.default=o,webix.ready(function(){var t=new o;t.attachEvent("app:guard",function(e,n,r){-1!==e.indexOf("/home")&&webix.ajax().get("http://localhost:3000/check").then(function(e){e.json().allowAccess||t.show("/index")},function(e){401==e.status&&t.show("/index")})}),t.render()})},function(t,e,n){},function(t,e,n){var r={"./":2,"./data":6,"./data.js":6,"./home":3,"./home.js":3,"./index":2,"./index.js":2,"./register":4,"./register.js":4};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id=9},function(t,e,n){var r={"./en":5,"./en.js":5};function i(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=o,t.exports=i,i.id=10}]);