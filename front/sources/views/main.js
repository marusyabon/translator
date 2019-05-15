import {JetView} from "webix-jet";
import { groups } from "models/groups";
import addGroupForm from "./addGroup";

export default class MainView extends JetView{
	config() {

		const groupsList = {
			view: "datatable",
			localId: "groupList",
		}

		const button = {
			view: "button",
			id: "addGroup",
			value: "Add group",
			type:'form',
			inputWidth: 100,
			click: () => { this.addGroupForm.showWindow(); }
		}

		return { 
			rows: [groupsList, button]
		};
	}

	addGroup
	init() {
		this.$$("groupList").sync(groups);
		this.addGroupForm = this.ui(addGroupForm);
	}
}