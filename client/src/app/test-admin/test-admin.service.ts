import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TestAdminService {
	private url = '/admin';

	constructor(private http: Http) { }

	getSymposium() {
		return this.http
			.get('/symposium/59a768dec853bd1942bd5e71')
			.map(this.extractData);
	}

	getUsers() {
		return this.http
			.get(this.url + '/users')
			.map(this.extractData);
	}

	addUser() {
		console.log('addUser clicked');
		return this.http
			.get(this.url + '/user')
			.map(this.extractData);
	}

	private extractData(res: Response): any {
		let body = res.json();
		return body || [];
	}
}