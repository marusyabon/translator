import {JetView} from 'webix-jet';
import { groups } from 'models/groups';
import { words } from 'models/words';

export default class GroupView extends JetView{
	config() {
	
		const dtable = {
			view: 'datatable',
			select: true,
			localId: 'wordsList',
			columns:[
				{
					id: 'word',
					fillspace: 1,
					header: 'Word'
				},
				{
					id: 'translation',
					fillspace: 1,
					header: 'Translation'
				},
				{
					id: 'partOfSpeech',
					fillspace: 1,
					header: 'Part of speech'
				},
				{
					id: 'editCol',
					header: 'Edit',
					css: 'center',
					width: 50,
					template: '<i class="fas fa-pen"></i>'
				},
				{
					id: 'removeCol',
					header: 'Remove',
					css: 'center',
					width: 70,
					template: '{common.trashIcon()}'
				}
			]
		};

		return { 
			rows: [dtable]
		};
	}

	init () {
		webix.promise.all([ words, groups ]).then((res) => {
			const id = this.getParam("id", true);

			let wordsList = words.find((item) => {
				return item.groupId == id;
			});

			this.$$('wordsList').parse(wordsList);
		});
	}
}