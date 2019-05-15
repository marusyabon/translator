export const words = new webix.DataCollection({
	url: "http://localhost:127.0.0.1/translatorDB/words/",
	save: "rest->http://localhost:127.0.0.1/translatorDB/words/"
});