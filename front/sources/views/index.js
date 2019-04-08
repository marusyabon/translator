import {JetView} from "webix-jet";

export default class IndexPage extends JetView{
	config(){

		const loginForm = {
			view: "form",
			id: "log_form",
			width: 300,
			elements: [
				{ view: "text", label: "Email", name: "email" },
				{ view: "text", type: "password", label: "Password", name: "password" },
				{
					margin: 5, cols: [
						{ 
							view: "button", value: "Login", type: "form",
							click: () => {
								const values = $$("log_form").getValues();
								const user = {
									user: values
								};
								const app = this.app;

								webix.ajax().post('http://localhost:3000/login', user, function (response) {
									if(response) {
										app.show("/home/start");
									}
								});					
							} 
						},
						{ view: "button", value: "Cancel" }
					]
				}
			]
		};

		const link = {
			view: "button",
			value: "Create an account",
			click: () => {
				this.show('/register');
			}
		}

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
}