import * as fromRoot from '../../../../+store';
import { Action, createFeatureSelector, ActionReducerMap, combineReducers } from '@ngrx/store';
import * as fromMoviesReducer from './movies.reducer';

export { fromMoviesReducer };
export const movieListKey = 'movieList';

export interface IMovieListState {
  movies: fromMoviesReducer.State;
}

export interface State extends fromRoot.State {
  movieList: IMovieListState;
}

const reducersMap: ActionReducerMap<IMovieListState> = {
  movies: fromMoviesReducer.reducer
};

export function reducers(state: IMovieListState | undefined, action: Action) {
  return combineReducers(reducersMap)(state, action);
}

export const getMovieListState = createFeatureSelector<State, IMovieListState>(movieListKey);
