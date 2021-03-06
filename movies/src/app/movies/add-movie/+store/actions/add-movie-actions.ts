import { createAction, props } from '@ngrx/store';
import { IMovieInput } from '../../interfaces';

// API
export const createMovie = createAction('[Create Movie Module] Create Movie', props<{ movieOutput: IMovieInput }>());

// Success
export const createMovieSuccess = createAction(
  '[Create Movie Module] Create Movie Success',
  props<{ movie: IMovieInput }>()
);

// Failure
export const createMovieFailure = createAction(
  '[Create Movie Module] Get Movie Failure',
  props<{ error: { message: string } }>()
);

export const clear = createAction('[Create Movie Module] Clear');
