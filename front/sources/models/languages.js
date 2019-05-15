export const languages = new webix.DataCollection({
	url: "http://localhost:127.0.0.1/translatorDB/languages/",
	save: "rest->http://localhost:127.0.0.1/translatorDB/languages/"
});