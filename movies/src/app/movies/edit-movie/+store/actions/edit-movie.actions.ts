import { createAction, props } from '@ngrx/store';
import { IMovieOutput, IMovieInput } from '../../interfaces';

// API
export const getMovie = createAction('[Edit Movie Module] Get Movie', props<{ movieId: string }>());

export const updateMovie = createAction(
  '[Edit Movie Module] Update Movie',
  props<{ movie: IMovieOutput; movieId: string }>()
);

// Success
export const getMovieSuccess = createAction('[Edit Movie Module] Get Movie Success', props<{ movie: IMovieInput }>());

export const updateMovieSuccess = createAction(
  '[Edit Movie Module] Update Movie Success',
  props<{ movie: IMovieInput }>()
);

// Failure
export const getMovieFailure = createAction(
  '[Edit Movie Module] Get Movie Failure',
  props<{ error: { message: string } }>()
);

export const updateMovieFailure = createAction(
  '[Edit Movie Module] Update Movie Failure',
  props<{ error: { message: string } }>()
);

export const clear = createAction('[Edit Movie Module] Clear');
