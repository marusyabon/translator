import { JetView } from 'webix-jet';
import { groups } from 'models/groups';
import addGroupForm from './addGroup';
import addWordForm from './addWord';

export default class MainView extends JetView{
	config() {
		const _ = this.app.getService("locale")._;
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
					id: 'creationDate',
					width: 80,
					header: 'Created',
					format: webix.Date.dateToStr("%d %M")
				},
				{
					id: 'viewCol',
					header: 'View',
					css: 'center',
					width: 50,
					template: '<i class="fas fa-eye"></i>'
				},
				{
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
					this.show(`/home/group?id=${id}`);
				},
				'fa-plus': (e, id) => {
					this.addWord.showWindow(id);
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
			value: _('Add_group'),
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