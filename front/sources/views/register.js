import {JetView} from "webix-jet";

export default class RegisterPage extends JetView{
	config(){

		const registerForm = {
			view: "form",
			id: "reg_form",
			width: 300,
			elements: [
				{ view: "text", label: "Email", name: "username" },
				{ view: "text", type: "password", label: "Password", name: "password" },
				{
					margin: 5, cols: [
						{ 
							view: "button", value: "Register", type: "form",
							click: () => {
								const values = $$("reg_form").getValues();

								webix.ajax().post('http://localhost:3000/signup', values, function (response) {
									webix.message(response);
								});

								if(response) {
									this.show('/home');
								}								
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