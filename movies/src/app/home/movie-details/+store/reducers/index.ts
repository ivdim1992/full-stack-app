import { IMovie } from 'src/app/shared/interfaces';
import * as fromRoot from '../../../../+store';
import { createReducer, on, Action } from '@ngrx/store';
import { MovieDetailsActions } from '../actions';
import produce from 'immer';

export const movieDetailsKey = 'movieDetails';

export interface MovieDetailsStore {
  movie: IMovie;
}

export const initialState: MovieDetailsStore = {
  movie: null
};

export interface State extends fromRoot.State {
  movie: MovieDetailsStore;
}

const movieDetailsReducer = createReducer(
  initialState,
  on(MovieDetailsActions.getMovieSuccess, (state, action) =>
    produce(state, (baseState) => {
      baseState.movie = action.movie;
    })
  ),
  on(MovieDetailsActions.clear, MovieDetailsActions.deleteMovieSuccess, () => initialState)
);

export function reducer(state: MovieDetailsStore | undefined, action: Action) {
  return movieDetailsReducer(state, action);
}
