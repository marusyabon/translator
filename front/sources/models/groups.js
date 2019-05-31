export const groups = new webix.DataCollection({
	url: 'http://localhost:3000/groups/',
	save: {
		url: 'rest->http://localhost:3000/groups/',
		updateFromResponse: true
	}
});