import { Coffee } from "../coffee.model";
import { CoffeeActionTypes, CoffeeAction } from "./coffee.actions";

export interface State {
    coffees: Coffee[],
    loading: boolean,
    error: string
}

const initialState: State = {
	coffees: [],
	loading: false,
	error: ''
}

export function CoffeeReducer (state = initialState, action: CoffeeAction) {
	switch(action.type) {
		case CoffeeActionTypes.GET_COFFEE:
			return {
				...state,
				loading: true
			}
		
		case CoffeeActionTypes.GET_COFFEE_SUCCESS:
			return {
				...state,
				coffees: action.payload,
            	loading: false
			}	

		case CoffeeActionTypes.GET_COFFEE_FAIL:
			return {
				...state,
				error: action.payload,
            	loading: false
			}

		default: 
			return state;
	}
}