import { JetView } from 'webix-jet';
import { groups } from 'models/groups';
import { words } from 'models/words';
import { languages } from 'models/languages';

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

	showWindow(id) {
		this.getRoot().show();
	}
}