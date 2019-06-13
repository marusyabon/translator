import { JetView } from 'webix-jet';
import { languages } from 'models/languages';
import { words } from 'models/words';

export default class addWordForm extends JetView {

	mainRow(count, langs) {
		return {
			margin: 20,
			cols: [
				{ view: 'combo', label: 'Language', labelWidth: 72, labelAlign: 'right', width: 180, name: `language${count}`, options: { body: { template: '#value#', data: langs } } },
				{ view: 'text', label: 'Translation', labelWidth: 82, labelAlign: 'right', name: `translation${count}` },
				{
					view: 'button',
					id: 'addTranslation',
					value: 'Add translation',
					type: 'form',
					width: 140,
					click: () => {
						this.addTranslation();
					}
				}
			]
		};
	}

	config() {
		return {
			view: 'window',
			localId: 'addWordForm',
			head: 'Add word',
			width: 600,
			position: 'center',
			body: {
				rows: [
					{
						view: 'form',
						localId: 'wordForm',
						elements: [
							{ view: 'text', name: 'id', localId: 'id', hidden: true },
							{ view: 'text', name: 'groupId', localId: 'groupId', hidden: true },
							{
								view: 'label',
								label: 'Original word',
								height: 24
							},
							{
								margin: 20,
								cols: [
									{ view: 'combo', label: 'Language', labelWidth: 72, labelAlign: 'right', width: 180, name: 'languageId', options: { body: { template: '#value#', data: languages } } },
									{ view: 'text', label: 'Word', labelWidth: 82, labelAlign: 'right', name: 'word', localId: 'originalWord' },
									{ view: 'combo', label: 'POS', labelWidth: 40, labelAlign: 'right', width: 140, name: 'partOfSpeech', options: ['Noun', 'Pronoun', 'Verb', 'Adverb'] }
								]
							}
						],
						rules: {
							'languageId': webix.rules.isNotEmpty,
							'word': webix.rules.isNotEmpty,
							'partOfSpeech': webix.rules.isNotEmpty,
						}
					},
					{
						view: 'form',
						localId: 'translationsForm',
						elements: [
							{ view: 'text', name: 'wordId', localId: 'wordId', hidden: true },
							{
								view: 'label',
								label: 'Translations',
								height: 24
							},
							this.mainRow(1, languages)
						]
					},
					{
						margin: 20,
						paddingY: 10,
						cols: [
							{},
							{
								view: 'button', value: 'Save', type: 'form', localId: 'saveBtn', width: 100,
								click: () => {
									this.saveForm();
								}
							},
							{
								view: 'button', value: 'Cancel', width: 100,
								click: () => {
									this.getRoot().hide();
								}
							},
							{}
						]
					}
				]
			}
		};
	}

	init() {
		const allCombo = this.findAllCombo();
		allCombo.forEach((combo, i) => {
			this.onComboChange(combo, i);
		});
	}

	findAllCombo() {
		return this.$$('addWordForm').queryView({ view: 'combo', label: 'Language' }, 'all');
	}

	onComboChange(combo, i) {	
		combo.attachEvent('onChange', (newv, oldv) => {

			//get all combo in form
			//need  to find all combo again, in case if new was adde
			const allCombo = this.findAllCombo();
			const combosArr = allCombo.slice();
			const allLangs = {...languages.data.pull};
			//remove from array combo where caught event
			combosArr.splice(i, 1);

			//for each combo remove from options list selected value
			
			combosArr.forEach((comboEl) => {
				const langs = comboEl.getList().serialize();

				//return to options list value, if it was unselected
				if(oldv) {
					const oldVal = allLangs[oldv];
					langs.push(oldVal);
				}

				const index = langs.indexOf(langs.find((item) => {return item.id == newv}));
				langs.splice(index, 1);

				//set filtered list of languages
				comboEl.define('options', langs);
				comboEl.refresh();
			});	
		});
	}

	removeSelectedLangs() {
		const allLangs = {...languages.data.pull};
		const allCombo = this.findAllCombo();

		allCombo.forEach((item) => {
			const value = item.getValue();
			delete allLangs[value];
		});
		
		const newLangArr = Object.keys(allLangs).map((k) => allLangs[k]);
		return newLangArr;
	}

	showWindow(id) {
		this.$$('groupId').setValue(id);
		this.getRoot().show();
		const wordId = webix.uid();
		this.$$('wordId').setValue(wordId);
		this.$$('id').setValue(wordId);
	}

	addTranslation() {
		const form = this.$$('translationsForm');
		const rows = form.getChildViews();
		const rowsCount = rows.length;
		const target = rows[rowsCount - 1];

		webix.ui({ width: 140 }, target, $$('addTranslation'));

		const index = form.getChildViews().length - 1;
		const langs = this.removeSelectedLangs();
		form.addView(this.mainRow(index, langs));

		const allCombo = this.findAllCombo();
		this.onComboChange(allCombo[index], index);
	}

	saveForm() {
		const wordForm = this.$$('wordForm');
		let word = wordForm.getValues();
		const translationsForm = this.$$('translationsForm');

		const count = translationsForm.getChildViews().length - 1;
		const translationValues = translationsForm.getValues();

		let translations = [];

		for (let i = 1; i < count; i++) {
			let tr = {
				word: translationValues[`translation${i}`],
				languageId: translationValues[`language${i}`]
			};
			translations.push(tr);
		}

		const batch = {
			word: word,
			translations: translations
		};

		if(wordForm.validate()) {
			words.add(batch);
			wordForm.clearValidation();
			translationsForm.clearValidation();
			wordForm.clear();
			translationsForm.clear();
			this.$$('addWordForm').hide();
		}

	}
}