import { createAction, props } from '@ngrx/store';
import { IMovieOutput, IMovieInput } from '../../interfaces';

// API
export const createMovie = createAction('[Create Movie Module] Create Movie', props<{ movieOutput: IMovieOutput }>());

// Success
export const createMovieSuccess = createAction(
  '[Create Movie Module] Create Movie Success',
  props<{ movie: IMovieInput }>()
);

export const createPosterSuccess = createAction(
  '[Create Movie Module] Create Poster Success',
  props<{ poster: string; movieOutput: IMovieOutput }>()
);

// Failure
export const createMovieFailure = createAction(
  '[Create Movie Module] Get Movie Failure',
  props<{ error: { message: string } }>()
);

export const createPosterFailure = createAction(
  '[Create Movie Module] Create Poster Failure',
  props<{ error: { message: string } }>()
);
export const clear = createAction('[Create Movie Module] Clear');
