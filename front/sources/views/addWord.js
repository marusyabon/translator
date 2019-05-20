import { JetView } from 'webix-jet';
import { groups } from 'models/groups';
import { languages } from 'models/languages';
import { words } from 'models/words';

export default class addWordForm extends JetView {
	config() {
		return {
			view: 'window',
			localId: 'addWordForm',
			head: 'Add word',
			width: 600,
			height: 400,
			position:'center',
			body: {
				view: 'form',
				localId: 'formView',
				elements: [
					{ view: 'text', name: 'groupId', localId: 'groupId', hidden: true},
					{
						view: 'label', 
						label: 'Original word',
						height: 24
					},
					{
						margin: 20,
						cols: [
							{ view: 'combo', label: 'Language', labelAlign: 'right', width: 160, name: 'originalLanguage', options: { body: { template: '#value#', data: languages } } },
							{ view: 'text', label: 'Word', labelWidth: 85, labelAlign: 'right', name: 'originalWord', localId: 'originalWord' },
							{ width: 140 }
						]
					},	
					{ height: 10 },
					{
						view: 'label',
						label: 'Translations',
						height: 24
					},				
					{
						margin: 20,
						cols: [
							{ view: 'combo', label: 'Language', labelAlign: 'right', width: 160, name: 'language', options: { body: { template: '#value#', data: languages } } },
							{ view: 'text', label: 'Translation', labelWidth: 85, labelAlign: 'right', name: 'translation' },
							{
								view: 'button',
								id: 'addTranslation',
								value: 'Add translation',
								type:'form',
								width: 140
							}
						]
					},					
					{ height: 10 },
					{
						margin: 20,
						cols: [
							{},
							{
								view: 'button', value: 'Save', type: 'form', localId: 'saveBtn', width: 100,
								click: () => {
									this.saveForm();
								}
							},
							{
								view: 'button', value: 'Cancel', width: 100,
								click: () => {
									this.getRoot().hide();
								}
							},
							{}
						]
					}
				]
			}
		};
	}

	showWindow(id) {
		this.$$('groupId').setValue(id)
		this.getRoot().show();
	}

	saveForm() {
		const form = this.$$('formView');
		const values = form.getValues();
		
		const originalWord = {
			id: webix.uid(),
			word: values.originalWord,
			groupId: values.groupId,
			languageId: values.originalLanguage
		}
		console.log(originalWord);

		words.add(originalWord);

		form.clearValidation();
		form.clear();
		this.$$('addWordForm').hide();
	}
}