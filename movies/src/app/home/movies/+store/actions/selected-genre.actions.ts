import { createAction, props } from '@ngrx/store';
import { IGenre } from '@app/shared/interfaces';

export const select = createAction('[Movie List Module] Selected Genre', props<{ genre: IGenre }>());

export const deselect = createAction('[Movie List Module] Deselect Genre');
