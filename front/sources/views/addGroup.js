import { JetView } from 'webix-jet';
import { groups } from 'models/groups';

export default class addGroupForm extends JetView {
	config() {

		return {
			view: 'window',
			localId: 'formPopup',
			position:'center',
			head: 'New group',
			body: {
				view: 'form',
				localId: 'formView',
				elements: [
					{ view: 'text', name: 'groupName', label: 'Group name', labelPosition: 'top', labelAlign: 'center' },
					{
						view: 'button', type: 'form', localId: 'newWord', value: 'Add word',
						click: () => {
							// this.addWord();
						}
					},
					{
						margin: 20,
						cols: [
							{
								view: 'button', type: 'form', localId: 'finishBtn', value: 'Finish',
								click: () => {
									this.saveForm();
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
				]
			}
		};
	}

	showWindow(id) {
		this.getRoot().show();
	}

	saveForm() {
		const form = this.$$('formView');
		const values = form.getValues();

		groups.add(values);
		this.$$('formPopup').hide();
	}
}