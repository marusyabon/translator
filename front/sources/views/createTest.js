import { JetView } from 'webix-jet';
import { words } from 'models/words';
import { testresults } from 'models/testresults';

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

	init() {
		this.formPopup = this.$$('formPopup');
		this.groupId = this._data.id;
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
		const groupId = this.groupId;

		words.waitData.then(() => {
			//find words of this group
			let wordsList = words.find(item => item.groupId === groupId);

			// find words, which have translations on selected language
			
			wordsList = wordsList.filter((item) => {
				const wordItem = item.translations.find((tr) => {
					return tr.languageId === language;
				});
				if (wordItem) {
					return true;
				}
				return false;
			});
			
			const wordsArr = words.serialize(); // create an array of all words
			let translationsArr = [];

			// find all translations on selected language
			wordsArr.forEach((item) => {
				const translation = item.translations.find((tr) => {
					return tr.languageId === language;
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
			const rightAnswer = translationsArr.find(tr => tr.wordId === wordObj.id);
			let translations = translationsArr.filter((tr) => {
				return tr.partOfSpeech === wordObj.partOfSpeech && tr.wordId != wordObj.id;
			});

			// if in array more then 3 words, cut it
			if (translations.length > 3) {
				translations.splice(translations[3], translations.length - 3);
			}
			
			translations.push(rightAnswer); // add to translations array correct answer
			translations = this.shuffle(translations); //mix the translations array
			
			const id = ( n > 0) ?  'translationsButtons' : 'chooseLangForm';

			this.changeButtons(n, id, translations);
			this.formPopup.getHead().setHTML(wordObj.word);
			this.$$('currentWordId').setValue(wordObj.id);
		}
		else {
			this.saveResults();
			this.showResults();
			this.formPopup.getHead().setHTML('Your result');
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
		const wordId = this.$$('currentWordId').getValue();
		if(translation.wordId === wordId) {
			if(translation.partOfSpeech === 'Noun' || translation.partOfSpeech === 'Verb')  {
				this.score += 2;
			}
			else {
				this.score += 1;
			}
		}
		this.showQuestion(++n, this.wordsList, this.translationsArr);
	}

	changeButtons(n, id, translations) {
		webix.ui(
			{
				view: 'form',
				localId: 'translationsButtons',
				borderless: true,
				type: 'clean',
				elements: [
					{
						view: 'text',
						localId: 'currentWordId',
						hidden: true
					},
					{						
						margin: 10,
						padding: 10,
						cols: this.setTranslations(translations, n)
					}
				]
			},
			this.formPopup,
			this.$$(id)
		);
	}

	showResults() {
		webix.ui(
			{
				padding: 30,
				margin: 15,
				rows: [
					{
						template: this.score,
						borderless: true,
						css: 'center'
					},
					{
						view: 'button',
						value: 'Ok',
						type: 'form',
						width: 100,
						click: () => {
							this.formPopup.hide();	
							this._parent.refresh();			
						}
					}
				]
			},

			this.formPopup,
			this.$$('translationsButtons')
		);
	}

	saveResults() {
		const result = {
			passedDate: new Date(),
			groupId: this.groupId,
			score: this.score
		};
		testresults.add(result);
	}
}
 