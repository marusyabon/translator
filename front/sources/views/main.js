import { JetView } from 'webix-jet';
import { groups } from 'models/groups';
import addGroupForm from './addGroup';

export default class MainView extends JetView{
	config() {

		const testResults = {
			view: 'datatable',
			localId: 'groupList',
			autoConfig: true
		};

		const button = {
			view: 'button',
			id: 'addGroup',
			value: 'Add group',
			type:'form',
			inputWidth: 100,
			click: () => { this.actForm.showWindow(); }
		};

		return { 
			rows: [testResults, button]
		};
	}

	init() {
		this.actForm = this.ui(addGroupForm);

		this.$$('groupList').parse(groups);

	}
}