import { JetView } from 'webix-jet';
import { languages } from 'models/languages';
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
					id: 'partOfSpeech',
					fillspace: 1,
					header: 'POS'
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
				'wxi-trash': (e, id) => {
					webix.confirm({
						text: 'Remove word?',
						callback: (result) => {
							if (result) {
								words.remove(id)
								this.$$("wordsList").remove(id);
							}
							return false;
						}
					});
				}
			}
		};

		return { 
			rows: [dtable]
		};
	}

	init () {
		webix.promise.all([ words, languages ]).then((res) => {
			const id = this.getParam('id', true);
			const grid = this.$$('wordsList');

			let wordsList = words.find((item) => {
				return item.groupId == id;
			});

			const trArr = [];

			wordsList = wordsList.map((word) => {
				const translations = word.translations;
				translations.forEach((tr) => {

					//find language value
					let lang = languages.getItem(tr.languageId);
					lang = lang.value;

					//if language is unique for this group, push to arr
					if(trArr.indexOf(lang) == -1) {
						trArr.push(lang);
					}
					
					//set new property to word
					word[lang] = tr.word;
					return tr;
				});
				return word;
			});

			this.addColums(trArr, grid);

			grid.parse(wordsList);
		});
	}

	addColums(arr, grid) {
		const columns = webix.toArray(grid.config.columns);
		arr.forEach((lang, i) => {
			columns.insertAt({
				id: arr[i],
				header: arr[i],
				fillspace: 1
			}, i+1);
		});	
		
		grid.refreshColumns();
	}
}