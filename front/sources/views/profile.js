import {JetView} from 'webix-jet';
import { testresults } from 'models/testresults';

export default class ProfileView extends JetView{
	config() {

		const testResults = {
			view: 'datatable',
			localId: 'testResults',
			columns:[
				{ 
					id: 'rating',    
					header: 'Rating',    
					minWidth: 80
				},
				{ 
					id: 'groupId',   
					header: 'Group',
					template: '#groupId.groupName#',
					fillspace: 1,
					minWidth: 120
				},
				{ 
					id: 'score',    
					header: 'Result',    
					minWidth: 80
				},
				{ 
					id: 'passedDate',
					header: 'Date',
					format: webix.Date.dateToStr("%d %M"),
					width: 80
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

	init() {
		testresults.waitData.then(() => {
			let n = 1;
			const recordsArr = testresults.serialize();
			const data = recordsArr.map((record, i, recordsArr) => {
				if (i > 0) {
					const prevRec = recordsArr[i - 1];
					if (record.score > prevRec.score) {
						n += 1;
					}
				}
				record.rating = n;
				return record;
			});
			this.$$('testResults').parse(data);
		});
	}
}