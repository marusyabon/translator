export const testresults = new webix.DataCollection({
	url: 'http://localhost:3000/testresults/',
	save: {
		url: 'rest->http://localhost:3000/testresults/',
		updateFromResponse: true
	},
	scheme: {
		$init(obj) {
			obj.passedDate = new Date(obj.passedDate);
		}
	}
});