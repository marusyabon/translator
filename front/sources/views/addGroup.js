import { JetView } from 'webix-jet';
import { groups } from 'models/groups';

export default class addGroupForm extends JetView {
	config() {

		return {
			view: 'window',
			localId: 'formPopup',
			position:'center',
			head: 'Group name',
			body: {
				view: 'form',
				localId: 'formView',
				elements: [
					{ view: 'text', name: 'groupName', label: ''},
					{
						margin: 20,
						cols: [
							{
								view: 'button', type: 'form', value: 'Save',
								click: () => {
									this.saveGroup();
									this.hideWindow();
								}
							},
							{
								view: 'button', value: 'Cancel',
								click: () => {
									this.getRoot().hide();
								}
							}
						]
					}
				],
				rules: {
					'groupName': webix.rules.isNotEmpty
				}
			}
		};
	}
	
	init() {
		this.mainWindow = this.$$('formPopup');
	}

	showWindow() {
		this.mainWindow.show();
	}

	hideWindow() {
		this.mainWindow.hide();
	}

	saveGroup() {
		const form = this.$$('formView');
		const values = form.getValues();
		values.creationDate = new Date();
		
		groups.add(values);
		this.clearForm(form);
	}

	clearForm(form) {
		form.clearValidation();
		form.clear();
	}
}