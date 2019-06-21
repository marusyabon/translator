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
		this.score = 0;
		const groupId = this._data.id;

		words.waitData.then(() => {
			//find words of this group
			let wordsList = words.find((item) => {
				return item.groupId == groupId;
			});

			// find words, which have translations on selected language
			wordsList = wordsList.filter((item) => {
				if (item.translations.find((tr) => {
					return tr.languageId == language;
				})) {
					return item;
				}
			});
			
			const wordsArr = words.serialize(); // create an array of all words
			let translationsArr = [];

			// find all translations on selected language
			wordsArr.forEach((item) => {
				const translation = item.translations.find((tr) => {
					return tr.languageId == language;
				});
				if (translation) {
					// if original of this translation is of the same part of speech as the word
					// push it to array of translations
					translationsArr.push(translation);
					translation.partOfSpeech = item.partOfSpeech;
				}
			});
			
			wordsList = this.shuffle(wordsList); //mix the words array

			// if in array more then 10 words, cut it
			if (wordsList.length > 10) {
				wordsList.splice(wordsList[10], wordsList.length - 10);
			}

			this.wordsList = wordsList;
			this.translationsArr = translationsArr;

			this.showQuestion(0, wordsList, translationsArr); 
		});
	}

	showQuestion(n, wordsList, translationsArr) {
		if(n < wordsList.length) {
			const wordObj = wordsList[n];
			const rightAnswer = translationsArr.find((tr) => {
				if(tr.wordId == wordObj.id) {
					tr.isCorrect = true;
					return tr;
				}
			});
			let translations = translationsArr.filter((tr) => {
				return tr.partOfSpeech == wordObj.partOfSpeech && tr.wordId != wordObj.id;
			});

			// if in array more then 3 words, cut it
			if (translations.length > 3) {
				translations.splice(translations[3], translations.length - 3);
			}
			
			translations.push(rightAnswer); // add to translations array correct answer
			translations = this.shuffle(translations); //mix the translations array
			
			const id = ( n > 0) ?  'translationsButtons' : 'chooseLangForm';

			webix.ui(
				{
					localId: 'translationsButtons',
					margin: 10,
					padding: 10,
					cols: this.setTranslations(translations, n)
				},

				this.$$('formPopup'),
				this.$$(id)
			);
			this.$$('formPopup').getHead().setHTML(wordObj.word);
		}
		else {
			webix.ui(
				{
					template: this.score
				},

				this.$$('formPopup'),
				this.$$('translationsButtons')
			);
			this.$$('formPopup').getHead().setHTML('Your result');
		}
	}

	setTranslations(translations, n) {
		const buttons = [];
		translations.forEach((tr) => {
			buttons.push({
				view: 'button',
				value: tr.word,
				type: 'form',
				autowidth: true,
				click: () => {
					this.answerAction(tr, n);
				}
			});
		});
		return buttons;
	}

	answerAction(translation, n) {
		if(translation.isCorrect) {
			if(translation.partOfSpeech == 'Noun' || translation.partOfSpeech == 'Verb')  {
				this.score = this.score + 2;
			}
			else {
				this.score = this.score + 1;
			}
		}
		this.showQuestion(++n, this.wordsList, this.translationsArr);
	}
}
