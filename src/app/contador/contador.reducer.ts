import { Action, createReducer, on } from "@ngrx/store";
import * as actions from "./contador.actions";

export const initialState = 20;

const _counterReducer = createReducer(initialState,
    on(actions.increment,   state => state + 1),
    on(actions.decrement,   state => state - 1),
    on(actions.multiply,    (state,{number}) => state * number),
    on(actions.divide,      (state,{number}) => state / number),
    on(actions.reset,       state => initialState),
);

export function contadorReducer(state:number = initialState, action:Action) {
    return _counterReducer(state, action);
  }