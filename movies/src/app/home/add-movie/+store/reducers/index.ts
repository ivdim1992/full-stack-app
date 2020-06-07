import * as fromRoot from '../../../../+store';
import { createReducer, on, Action } from '@ngrx/store';
import { CreateMovieActions } from '../actions';
import produce from 'immer';
import { IMovieInput } from '../../interfaces';

export const createMovieKey = 'createMovie';

export interface CreateMovieStore {
  movie: IMovieInput;
}

export const initialState: CreateMovieStore = {
  movie: null
};

export interface State extends fromRoot.State {
  movie: CreateMovieStore;
}

const createMovieReducer = createReducer(
  initialState,
  on(CreateMovieActions.createMovieSuccess, (state, action) =>
    produce(state, (baseState) => {
      baseState.movie = action.movie;
    })
  ),
  on(CreateMovieActions.clear, () => initialState)
);

export function reducer(state: CreateMovieStore | undefined, action: Action) {
  return createMovieReducer(state, action);
}
