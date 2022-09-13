import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Coffee } from './coffee.model';

@Injectable({ providedIn: 'root' })
export class CoffeeService {
	
	constructor(private http: HttpClient) {}

	private API_PATH = `https://random-data-api.com/api/coffee/random_coffee?size=50&is_json=true`;
	private API_PATH1 = `https://random-data-api.com/api/coffee/random_coffee?size=50`;
   

	getCoffee(): Observable<Coffee[]> {
		return this.http
		  .get<Coffee[]>(
			`${this.API_PATH1}`
		  ).pipe(
			map((data) => {
				const coffees : Coffee[] = [];
				for(let key in data) {
					coffees.push({...data[key]});
				}
				return coffees;
			})
		  )
	  }

	getCoffeeList() {
		return this.http.get<Coffee[]>(`${this.API_PATH1}`);
	  }

	  //Pagination call method
	getCoffeeList1(): Observable<Coffee> {
	return this.http.get<Coffee>(`${this.API_PATH1}`);
	}
  }