import {JetView} from 'webix-jet';
import Authorization from '../authorization';

export default class IndexPage extends JetView{
	config(){

		const loginForm = {
			view: 'form',
			localId: 'loginForm',
			width: 300,
			elements: [
				{ view: 'text', label: 'Email', name: 'email' },
				{ view: 'text', type: 'password', label: 'Password', name: 'password' },
				{
					margin: 5, cols: [
						{ view: 'button', localId: 'loginBtn', value: 'Login', type: 'form' },
						{ view: 'button', value: 'Cancel' }
					]
				}
			]
		};

		const link = {
			view: 'button',
			value: 'Create an account',
			click: () => {
				this.show('/register');
			}
		};

		return { 
			cols: [
				{},
				{	
					rows: [
						{},
						loginForm,
						link,
						{}
					]
				},
				{}
			]			
		};
	}

	init() {
		this.$$('loginBtn').attachEvent('onItemClick', () => {
			const values = this.$$('loginForm').getValues();
			const user = {
				user: values
			};
			const authorization = new Authorization();

			authorization.login(user).then((response) => {	
				if (response) {
					this.show('/home/start');
				}
				else {
					webix.message(response);
				}
			});				
		});
	}
}