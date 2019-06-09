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
						this.addTranslation()
					}
				}
			]
		}
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
						]
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
			const allCombo = this.findAllCombo();
			const combosArr = allCombo.slice();

			//remove from array combo where caught event
			combosArr.splice(i, 1);

			//for each combo remove from options list selected value
			combosArr.forEach((comboEl) => {
				const allLangs = {...languages.data.pull};
				let langs = comboEl.getList();
				langs = langs.data.pull;
				
				console.log(langs[newv])

				if(oldv) {
					const oldVal = allLangs[oldv];
					langs[oldv] = oldVal;
				}

				delete langs[newv];
			
				const newLangArr = Object.keys(langs).map((k) => langs[k]);

				comboEl.define('options', { body: { template: '#value#', data: newLangArr } });
				comboEl.refresh();
			});			
		});
	}

	removeSelectedOptions() {
		const allCombo = this.findAllCombo();
		const newLang = {...languages.data.pull};

		allCombo.forEach((item) => {
			const value = item.getValue();
			delete newLang[value];
		});

		const newLangArr = Object.keys(newLang).map((k) => newLang[k]);
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
		const count = form.getChildViews().length - 1;
		const langs = this.removeSelectedOptions();
		form.addView(this.mainRow(count, langs));

		const allCombo = this.findAllCombo();
		this.onComboChange(allCombo[count], count);
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

		words.add(batch);

		wordForm.clearValidation();
		translationsForm.clearValidation();
		wordForm.clear();
		translationsForm.clear();
		this.$$('addWordForm').hide();
	}
}