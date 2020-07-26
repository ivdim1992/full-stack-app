import * as fromRoot from '../../../../+store';
import { createReducer, on, Action } from '@ngrx/store';
import { FavoriteMoviesActions } from '../actions';
import produce from 'immer';
import { IFavoriteMovieInput } from '../../interfaces';

export const favoriteMoviesKey = 'favoriteMovies';

export interface FavoriteMoviesStore {
  favoriteMovies: IFavoriteMovieInput[];
}

export const initialState: FavoriteMoviesStore = {
  favoriteMovies: []
};

export interface State extends fromRoot.State {
  favoriteMovies: FavoriteMoviesStore;
}

const favoriteMoviesReducer = createReducer(
  initialState,
  on(FavoriteMoviesActions.getFavoriteMoviesSuccess, (state, action) =>
    produce(state, (baseState) => {
      baseState.favoriteMovies = action.favMovies;
    })
  ),
  on(FavoriteMoviesActions.clear, () => initialState)
);

export function reducer(state: FavoriteMoviesStore | undefined, action: Action) {
  return favoriteMoviesReducer(state, action);
}
