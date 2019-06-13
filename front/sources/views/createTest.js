import { JetView } from 'webix-jet';

export default class createTestForm extends JetView {
	config() {

		return {
			view: 'window',
			localId: 'formPopup',
			position:'center',
			head: false,
			body: {
				template: 'test'
			}
		};
	}

	showWindow(id, languages, words) {
		this.createTest(id, languages, words);
		this.getRoot().show();		
	}

	createTest(id, languages, words) {
		const wordsList = words.find((item) => {
			return item.groupId == id;
		});

		const word = wordsList[Math.floor(Math.random()*wordsList.length)];
	}
}
