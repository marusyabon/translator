import { JetView } from 'webix-jet';
import { groups } from 'models/groups';
import { languages } from 'models/languages';

export default class addGroupForm extends JetView {
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
					{
						cols: [
							{ view: 'combo', label: 'Language', name: 'originalLanguage', options: { body: { template: '#value#', data: languages } } },
							{ view: 'text', label: 'Word', name: 'originalWord', localId: 'originalWord' },
							{ width: 100 }
						]
					},					
					{
						cols: [
							{ view: 'combo', label: 'Language', name: 'language', options: { body: { template: '#value#', data: languages } } },
							{ view: 'text', label: 'Translation', name: 'translation' },
							{
								view: 'button',
								id: 'addGroup',
								value: 'Add translation',
								type:'form',
								inputWidth: 100
							}
						]
					},					
					{
						margin: 20,
						cols: [
							{
								view: 'button', type: 'form', localId: 'saveBtn',
								click: () => {
									// this.saveForm();
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
}