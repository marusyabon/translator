import {JetView, plugins} from 'webix-jet';
import Authorization from '../authorization';

export default class TopView extends JetView{
	config(){
		const lang = this.app.getService('locale').getLang();
		const _ = this.app.getService('locale')._;

		const header = {
			type:'header', template:this.app.config.name, css:'webix_header app_header'
		};

		const menu = {
			view:'menu', id:'top:menu', 
			css:'app_menu',
			width:180, layout:'y', select:true,
			template:'<span class="webix_icon #icon#"></span> #value# ',
			value: 'Home',
			data:[
				{ value:_('Home'), id:'main', icon:'fas fa-home' },
				{ value:_('Profile'), id:'profile',  icon:'fas fa-user' }
			]
		};

		const logout = {
			view:'button', 
			localId:'logoutBtn', 
			value:_('Logout'), 
			type:'form'
		};

		const ui = {
			type:'clean', paddingX:5, css:'app_layout', 
			cols:[
				{ paddingX:5, paddingY:10, rows: [ {css:'webix_shadow_medium', rows:[header, menu, logout]} ]},
				{ view: 'resizer', width: 5 },
				{
					type: 'clean',
					rows: [
						{height: 10},
						{
							height: 30,
							cols: [
								{},
								{
									view: 'segmented', multiview: true, value: lang, name: 'lang',
									width: 80,
									options: [
										{ id: 'en', value: 'EN', width: 40 },
										{ id: 'ru', value: 'RU', width: 40 }
									],
									click: () => this.toggleLanguage(),
								}
							]
						},
						{
							type: 'wide', paddingY: 10, paddingX: 5, rows: [
								{ $subview: true }
							]
						}
					]
				}
				
			]
		};

		return ui;
	}

	init() {
		this.use(plugins.Menu, 'top:menu');

		const authorization = new Authorization();

		this.$$('logoutBtn').attachEvent('onItemClick', () => {
			const app = this.app;
			
			authorization.logout().then((response) => {
				if(response) {
					app.show('/index');
				}
			});
		});
	}

	toggleLanguage() {
		const langs = this.app.getService('locale');
		const button = this.getRoot().queryView({ name: 'lang' });
		const value = button.getValue();
		langs.setLang(value);
	}
}