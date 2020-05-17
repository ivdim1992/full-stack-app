import { createAction, props } from '@ngrx/store';
import { IMovie } from 'src/app/shared/interfaces';

// API
export const getMovies = createAction('[Movie List Module] Get Movies');

// Success
export const getMoviesSuccess = createAction('[Movie List Module] Get Movies Success', props<{ movies: IMovie[] }>());

// Failure
export const getMoviesFailure = createAction(
  '[Movie List Module] Get Movies Failure',
  props<{ error: { message: string } }>()
);

export const clear = createAction('[Movie List Module] Clear');
