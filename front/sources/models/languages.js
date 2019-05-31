export const languages = new webix.DataCollection({
	url: 'http://localhost:3000/languages/',
	save: {
		url: 'rest->http://localhost:3000/languages/',
		updateFromResponse: true
	}
});