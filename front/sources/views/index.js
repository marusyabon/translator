import {JetView} from "webix-jet";

export default class IndexPage extends JetView{
	config(){

		const loginForm = {
			view: "form",
			id: "log_form",
			width: 300,
			elements: [
				{ view: "text", label: "Email", name: "username" },
				{ view: "text", type: "password", label: "Password", name: "password" },
				{
					margin: 5, cols: [
						{ 
							view: "button", value: "Login", type: "form",
							click: () => {
								const values = $$("log_form").getValues();

								webix.ajax().post('http://localhost:3000/login', values, function (response) {
									webix.message(response);
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