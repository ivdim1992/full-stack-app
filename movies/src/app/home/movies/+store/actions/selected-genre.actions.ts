import { createAction, props } from '@ngrx/store';

export const select = createAction('[Movie List Module] Selected Genre', props<{ id: string; genre: string }>());

export const deselect = createAction('[Movie List Module] Deselect Genre');
