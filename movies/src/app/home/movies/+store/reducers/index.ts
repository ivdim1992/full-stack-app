import { IMovie } from 'src/app/shared/interfaces';
import * as fromRoot from '../../../../+store';
import { createReducer, on, Action } from '@ngrx/store';
import { MovieListActions } from '../actions';
import produce from 'immer';

export const movieListKey = 'movieList';

export interface MovieListStore {
  movies: IMovie[];
}

export const initialState: MovieListStore = {
  movies: []
};

export interface State extends fromRoot.State {
  movies: MovieListStore;
}

const movieListReducer = createReducer(
  initialState,
  on(MovieListActions.getMoviesSuccess, (state, action) =>
    produce(state, (baseState) => {
      baseState.movies = action.movies;
    })
  ),
  on(MovieListActions.clear, () => initialState)
);

export function reducer(state: MovieListStore | undefined, action: Action) {
  return movieListReducer(state, action);
}
