import {JetView} from "webix-jet";

export default class ProfileView extends JetView{
	config() {
		const testData = [
			{ id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank:1, category:"Thriller"},
			{ id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2, category:"Crime"}
		];

		const testResults = {
			view: "datatable",
			columns:[
				{ id:"rank",    header:"",              width:50},
				{ id:"title",   header:"Film title",    width:200},
				{ id:"year",    header:"Released",      width:80},
				{ id:"votes",   header:"Votes",         width:100}
			],
			data: testData
		}

		const button = {
			view: "button",
			id: "clearAll",
			value: "Clear all",
			type:'form',
			inputWidth: 100
		}

		return { 
			rows: [testResults, button]
		};
	}
}