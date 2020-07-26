import { createAction, props } from '@ngrx/store';
import { IMovie } from 'src/app/shared/interfaces';
import { IFavoriteMovie } from 'src/app/shared/interfaces/favorite-movie.interface';

// API
export const getMovies = createAction('[Movie List Module] Get Movies');

export const setOrRemoveFavoriteMovie = createAction(
  '[Movie List Module] Set Or Remove Movie Into Favorites',
  props<{ movieId: string; setOrRemove: boolean }>()
);

// Success
export const getMoviesSuccess = createAction('[Movie List Module] Get Movies Success', props<{ movies: IMovie[] }>());

export const setOrRemoveFavoriteMovieSuccess = createAction(
  '[Movie List Module] Set Or Remove Movie Into Favorites Success',
  props<{ favoriteMovie: IFavoriteMovie }>()
);

// Failure
export const getMoviesFailure = createAction(
  '[Movie List Module] Get Movies Failure',
  props<{ error: { message: string } }>()
);

export const setOrRemoveFavoriteMovieFailure = createAction(
  '[Movie List Module] Set Or Remove Movie Into Favorites Failure',
  props<{ error: { message: string } }>()
);

export const clear = createAction('[Movie List Module] Clear');
