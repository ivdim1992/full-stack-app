import { createAction, props } from '@ngrx/store';
import { IFavoriteMovieInput } from '../../interfaces';

// API
export const getFavoriteMovies = createAction('[Favorite Module] Get Favorite Movies');

// SUCCESS
export const getFavoriteMoviesSuccess = createAction(
  '[Favorite Module] Get Favorite Movies Success',
  props<{ favMovies: IFavoriteMovieInput[] }>()
);

// FAILURE
export const getFavoriteMoviesFailure = createAction(
  '[Favorite Module] Get Favorite Movies Failure',
  props<{ error: { message: string } }>()
);

export const clear = createAction('[Favorite Module] Clear');
