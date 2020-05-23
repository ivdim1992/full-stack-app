import { createAction, props } from '@ngrx/store';
import { IMovie } from 'src/app/shared/interfaces';

// API
export const getMovie = createAction('[Movie Details Module] Get Movie', props<{ movieId: string }>());

export const deleteMovie = createAction('[Movie Details Module] Delete Movie', props<{ movieId: string }>());

// Success
export const getMovieSuccess = createAction('[Movie Details Module] Get Movie Success', props<{ movie: IMovie }>());

export const deleteMovieSuccess = createAction('[Movie Details Module] Delete Movie Success');
// Failure
export const getMovieFailure = createAction(
  '[Movie Details Module] Get Movie Failure',
  props<{ error: { message: string } }>()
);

export const DeleteMovieFailure = createAction(
  '[Movie Details Module] Delete Movie Failure',
  props<{ error: { message: string } }>()
);

export const clear = createAction('[Movie Details Module] Clear');
