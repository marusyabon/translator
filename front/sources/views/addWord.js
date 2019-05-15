import { JetView } from "webix-jet";
import { groups } from "models/groups";
import { languages } from "models/languages";

export default class addGroupForm extends JetView {
	config() {
		return {
			view: "window",
			localId: "addWordForm",
			head: "Add word",
			width: 600,
			height: 400,
			position:"center",
			body: {
				view: "form",
				localId: "formView",
				elements: [
					{
						cols: [
							{ view: "combo", label: "Language", name: "originalLanguage", options: { body: { template: "#value#", data: languages } } },
							{ view: "text", label: "Word", name: "originalWord", localId: "originalWord" },
							{ width: 100 }
						]
					},					
					{
						cols: [
							{ view: "combo", label: "Language", name: "language", options: { body: { template: "#value#", data: languages } } },
							{ view: "text", label: "Translation", name: "translation" },
							{
								view: "button",
								id: "addGroup",
								value: "Add translation",
								type:'form',
								inputWidth: 100
							}
						]
					},					
					{
						margin: 20,
						cols: [
							{
								view: "button", type: "form", localId: "saveBtn",
								click: () => {
									this.saveForm();
								}
							},
							{
								view: "button", value: _("Cancel"),
								click: () => {
									this.getRoot().hide();
								}
							}
						]
					}
				]
			}
		};
	}

	showWindow(id) {
		let formView = this.$$("formView");

		if (id && activities.exists(id)) {
			this.$$("saveBtn").setValue(_("Save"));
			this.$$("formPopup").getHead().setHTML(_("Edit activity"));

			let values = webix.copy(activities.getItem(id));

			let dateTime = values.DueDate;

			values._Date = dateTime;
			values._Time = dateTime;

			formView.setValues(values);
		}

		else {
			this.$$("saveBtn").setValue(_("Add"));
			this.$$("formPopup").getHead().setHTML(_("Add activity"));

			// check if contact card is open

			let _groupId = this.getParam("id", true);
			if (_groupId) {
				this.$$("groupId").setValue(_groupId);
			}
		}
		
		this.getRoot().show();
	}

	saveForm() {
		let formView = this.$$("formView");
		const values = formView.getValues();
		
		let h = values._Time.getHours(),
			m = values._Time.getMinutes();
			
		values.DueDate = values._Date;
		values.DueDate.setHours(h, m);


		if (formView.validate()) {
			values.id ? activities.updateItem(values.id, values) : activities.add(values);
			
			formView.clearValidation();
			formView.clear();
			this.$$("formPopup").hide();
		}
	}
}