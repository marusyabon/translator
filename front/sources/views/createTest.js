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

	createTest(language) {
		const groupId = this._data.id;

		words.waitData.then(() => {
			let wordsList = words.find((item) => {
				return item.groupId == groupId;
			});
			
			const wordsArr = words.serialize();
			
			let translationsArr = wordsArr.map((item) => {
				const translation = item.translations.find((tr) => {
					debugger
					tr.languageId == language;
				});
				return translation;
			});

			// console.log(translationsArr)

			wordsList = this.shuffle(wordsList);

			if(wordsList.length > 10) {
				wordsList.splice(wordsList[10], wordsList.length - 10);
			}

			this.showQuestion(0, wordsList);	
		});
	}

	showQuestion(n, wordsList) {
		const translations = [];
		let word;
		let id = 'chooseLangForm';

		if (n == 0) {
			word = wordsList[0].word;
			id = 'translationsButtons';
		}

		webix.ui(
			{
				localId: id,
				margin: 10,
				padding: 10,
				cols: this.setTranslations(translations)
			},		

			this.$$('formPopup'), 
			this.$$('chooseLangForm')
		);
		this.$$('formPopup').getHead().setHTML(word);
	}

	setTranslations(translations) {
		const buttons = [];
		translations.forEach((word) => {
			buttons.push({
				view: 'button',
				value: word,
				type: 'form',
				autowidth: true
			});
		});
		return buttons;
	}
}
