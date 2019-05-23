import { JetView } from 'webix-jet';
import { groups } from 'models/groups';
import addGroupForm from './addGroup';
import addWordForm from './addWord';

export default class MainView extends JetView{
	config() {

		const testResults = {
			view: 'datatable',
			id: 'groupList',
			select: true,
			columns: [
				{
					id: '_id',
					hidden: true,					
				},
				{
					id: 'groupName',
					sort: 'text',
					fillspace: 3,
					header: 'Name'
				},
				{
					id: 'words',
					sort: 'int',
					fillspace: 1,
					minWidth: 50,
					css: 'center',
					header: 'Count'
				},
				{
					id: 'viewCol',
					header: 'View',
					css: 'center',
					width: 50,
					template: '<i class="fas fa-eye"></i>'
				},
				{
					id: 'editCol',
					header: 'Add',
					css: 'center',
					width: 50,
					template: '<i class="fas fa-plus"></i>'
				},
				{
					id: 'removeCol',
					header: 'Remove',
					css: 'center',
					width: 70,
					template: '{common.trashIcon()}'
				}				
			],
			onClick: {
				'fa-eye': (e, id) => {
					const group = $$('groupList').getItem(id);
					this.show(`/home/group?id=${group._id}`);
				},
				'fa-plus': (e, id) => {
					const group = $$('groupList').getItem(id);
					this.addWord.showWindow(group._id);
				},
				'wxi-trash': (e, id) => {
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

		$$('groupList').parse(groups);

	}
}