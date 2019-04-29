import {JetView} from 'webix-jet';
import Authorization from '../authorization';

export default class RegisterPage extends JetView{
	config(){

		const registerForm = {
			view: 'form',
			localId: 'registerForm',
			width: 300,
			elements: [
				{ view: 'text', label: 'Email', name: 'email' },
				{ view: 'text', type: 'password', label: 'Password', name: 'password' },
				{
					margin: 5, cols: [
						{ 
							view: 'button', localId: 'registerBtn', value: 'Register', type: 'form'							 
						}
					]
				}
			]
		};

		return { 
			cols: [
				{},
				{
					rows: [
						{},
						registerForm,
						{},
					]
				},
				{}
			]			
		};
	}

	init() {
		this.$$('registerBtn').attachEvent('onItemClick', () => {
			const values = this.$$('registerForm').getValues();
			const user = {
				user: values
			};
			const authorization = new Authorization();

			authorization.register(user).then((response) => {
				if (response) {
					const res = response.json();
					webix.storage.session.put('token', res.user.token);
					this.show('/home/start');
				}
			});
		});
	}
}