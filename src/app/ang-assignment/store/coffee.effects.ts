import { catchError, map, mergeMap } from 'rxjs/operators';
import { Injectable } from "@angular/core";

import { CoffeeActionTypes,CoffeeAction,GetCoffee, GetCoffeeSuccess, GetCoffeeFail } from "./coffee.actions";
import { CoffeeService } from "../coffee.service";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';

@Injectable()
export class coffeeEffects {

	constructor(private coffeeService: CoffeeService,
				private actions$: Actions) {}

	@Effect()
		getCoffee$ = this.actions$.pipe(
			ofType<GetCoffee>(CoffeeActionTypes.GET_COFFEE),
			mergeMap(
				() => this.coffeeService.getCoffeeList()
				.pipe(
					map(items => {
						return new GetCoffeeSuccess(items)
					}),
					catchError(error => of(new GetCoffeeFail(error))
					)
				)
			),
		)

}