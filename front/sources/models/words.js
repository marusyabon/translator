export const words = new webix.DataCollection({
	url: 'http://localhost:3000/words/',
	save: {
		url: 'rest->http://localhost:3000/words/',
		updateFromResponse: true
	}
});