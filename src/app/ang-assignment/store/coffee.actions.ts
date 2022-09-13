import { Action, createAction, props } from "@ngrx/store";
import { Coffee } from "../coffee.model";

export enum CoffeeActionTypes {
    GET_COFFEE = '[COFFEE] Get Coffee',
    GET_COFFEE_SUCCESS = '[COFFEE] Get Coffee Success',
    GET_COFFEE_FAIL = '[COFFEE] Get Coffee Fail'
}

export class GetCoffee implements Action {
    readonly type = CoffeeActionTypes.GET_COFFEE;
}

export class GetCoffeeSuccess implements Action {
    readonly type = CoffeeActionTypes.GET_COFFEE_SUCCESS;
    constructor(public payload: Coffee[]){}
}

export class GetCoffeeFail implements Action {
    readonly type = CoffeeActionTypes.GET_COFFEE_FAIL;
    constructor(public payload: any) {}
}

export type CoffeeAction = 
	GetCoffee | GetCoffeeSuccess | GetCoffeeFail;