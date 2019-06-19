import { JetView } from 'webix-jet';
import { words } from 'models/words';

export default class createTestForm extends JetView {
	config() {

		return {
			view: 'window',
			localId: 'formPopup',
			position:'center',
			head: 'Choose the language',
			body: {
				view: 'form',
				localId: 'chooseLangForm',
				margin: 10,
				paddingY: 20,
				elements: [
					{
						localId: 'chooseLang',
						view: 'combo',
						name: 'language'
					},
					{
						view: 'button',
						value: 'Choose',
						type: 'form',
						click: (id) => {
							const values = $$(id).getParentView().getValues();
							this.createTest(values.language);
						}
					}
				]
			}
		};
	}

	showWindow(languages) {
		this.$$('chooseLang').define('options', languages);
		this.getRoot().show();		
	}

	createTest(language) {
		const groupId = this._data.id;
		words.waitData.then(() => {
			let wordsList = words.find((item) => {
				return item.groupId == groupId;
			});

			wordsList = this.shuffle(wordsList);

			if(wordsList.length > 10) {
				wordsList.splice(wordsList[10], wordsList.length - 10);
			};

			wordsList.forEach(() => {

			});

			webix.ui(this.testForm(), $$('chooseLangForm'));
		});
	}

	shuffle(array) {
		const shuffledArr = [];
		let num = array.length;

		// While there remain elements to shuffle…
		while (num) {

			// Pick a remaining element…
			const i = Math.floor(Math.random() * array.length);

			// If not already shuffled, move it to the new array.
			if (i in array) {
				shuffledArr.push(array[i]);
				delete array[i];
				num--;
			}
		}

		return shuffledArr;
	}

	testForm() {
		return {
			margin: 10,
			cols: [

			]
		}
	}
}
