const logoutUrl = 'http://localhost:3000/logout';
const loginUrl = 'http://localhost:3000/login';
const registerUrl = 'http://localhost:3000/register';

export default class Authorization {
	register(obj) {
		return webix.ajax().post(registerUrl, obj);
	}

	login(obj) {
		return webix.ajax().post(loginUrl, obj);
	}

	logout() {
		return webix.ajax().get(logoutUrl)
	}
}