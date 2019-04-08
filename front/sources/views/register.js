import {JetView} from "webix-jet";

export default class RegisterPage extends JetView{
	config(){

		const registerForm = {
			view: "form",
			id: "reg_form",
			width: 300,
			elements: [
				{ view: "text", label: "Email", name: "email" },
				{ view: "text", type: "password", label: "Password", name: "password" },
				{
					margin: 5, cols: [
						{ 
							view: "button", value: "Register", type: "form",
							click: () => {
								const values = $$("log_form").getValues();
								const user = {
									user: values
								};
								const app = this.app;
 
								webix.ajax().post('http://localhost:3000/register', user, function (response) {
									if(response) {
										app.show("/home/start");
									}
								});						
							} 
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
}