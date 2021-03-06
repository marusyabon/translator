import './styles/app.css';
import {JetApp, EmptyRouter, HashRouter, plugins } from 'webix-jet';

export default class MyApp extends JetApp{
	constructor(config){
		const defaults = {
			id 		: APPNAME,
			version : VERSION,
			router 	: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug 	: !PRODUCTION,
			start 	: '/index'
		};

		super({ ...defaults, ...config });
	}
}

if (!BUILD_AS_MODULE){
	webix.ready(() => {
		const app = new MyApp();
		app.use(plugins.Locale);
		app.attachEvent('app:guard', (url, view, nav) => {
			if(url.indexOf('/home') !== -1) {
				webix.ajax().get('http://localhost:3000/check').then(
					(res) => {
						const response = res.json();
						if (!response.allowAccess) {
							app.show('/index');
						}
					},
					(error) => {
						if(error.status == 401) {
							app.show('/index');
						}						
					}
				);
			}
		});

		app.render();
	});
}