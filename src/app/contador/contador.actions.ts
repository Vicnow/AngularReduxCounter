import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Contador] Increment');
export const decrement = createAction('[Contador] Decrement');
export const reset = createAction('[Contador] Reset');
export const multiply = createAction(
    '[Contador] Multiply',props<{number:number}>()
);
export const divide = createAction(
    '[Contador] Divide',props<{number:number}>()
);


