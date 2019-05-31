import {JetView} from 'webix-jet';

export default class ProfileView extends JetView{
	config() {

		const testResults = {
			view: 'datatable',
			columns:[
				{ 
					id: 'date',
					header: 'Date',
					fillspace: 1,
					minWidth: 120
				},
				{ 
					id: 'groupId',   
					header: 'Group',
					fillspace: 1,
					minWidth: 120
				},
				{ 
					id:' score',    
					header: 'Result',    
					fillspace: 1,
					minWidth: 120
				}
			],
			data: []
		};

		const button = {
			view: 'button',
			id: 'clearAll',
			value: 'Clear all',
			type:'form',
			inputWidth: 100
		};

		return { 
			rows: [testResults, button]
		};
	}
}