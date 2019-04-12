import "./styles/app.css";
import {JetApp, EmptyRouter, HashRouter } from "webix-jet";

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	: !PRODUCTION,
			start 	: "/index"
		};

		super({ ...defaults, ...config });
	}
}

if (!BUILD_AS_MODULE){
	webix.ready(() => {
		const app = new MyApp();
		webix.attachEvent('onBeforeAjax', (mode, url, data, request, headers) => {
			const token = webix.storage.session.get('token');
			headers['authorization'] = token ? `Token ${token}` : null;
		});
		app.attachEvent('app:guard', (url, view, nav) => {
			// webix.ajax().get('http://localhost:3000/user').then((userStatus) => {
			// 	if (url === '' && !userStatus.allowAccess) {
			// 		nav.redirect = '/';
			// 	}
			// });
		});

		app.render();
	});
}