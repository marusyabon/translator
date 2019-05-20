import { JetView } from 'webix-jet';
import { groups } from 'models/groups';
import addGroupForm from './addGroup';
import addWordForm from './addWord';

export default class MainView extends JetView{
	config() {

		const testResults = {
			view: 'datatable',
			localId: 'groupList',
			columns: [
				{
					id: 'groupName',
					sort: 'text',
					fillspace: 3,
					header: 'Name'
				},
				{
					id: 'wordsCount',
					sort: 'int',
					fillspace: 1,
					minWidth: 50,
					css: 'text_right',
					header: 'Count'
				},
				{
					id: 'editCol',
					header: '',
					width: 50,
					template: '<i class="fas fa-plus"></i>'
				},
				{
					id: 'removeCol',
					header: '',
					width: 50,
					template: '{common.trashIcon()}'
				}				
			],
			onClick: {
				'fa-plus': (e, id) => {
					this.addWord.showWindow(id);
				},
				'wxi-trash': function (e, id) {
					webix.confirm({
						text: 'Remove group?',
						callback: function (result) {
							if (result) {
								groups.remove(id);
							}
							return false;
						}
					});
				}
			}
		};

		const button = {
			view: 'button',
			id: 'addGroup',
			value: 'Add group',
			type:'form',
			inputWidth: 100,
			click: () => { this.addGroup.showWindow(); }
		};

		return { 
			rows: [testResults, button]
		};
	}

	init() {
		this.addGroup = this.ui(addGroupForm);
		this.addWord = this.ui(addWordForm);

		this.$$('groupList').parse(groups);

	}
}