import * as fromRoot from '../../../../+store';
import { createReducer, on, Action } from '@ngrx/store';
import { EditMovieActions } from '../actions';
import produce from 'immer';
import { IMovieInput } from 'src/app/movies/add-movie/interfaces';

export const editMovieKey = 'editMovie';

export interface EditMovieStore {
  movie: IMovieInput;
}

export const initialState: EditMovieStore = {
  movie: null
};

export interface State extends fromRoot.State {
  movie: EditMovieStore;
}

const movieDetailsReducer = createReducer(
  initialState,
  on(EditMovieActions.getMovieSuccess, (state, action) =>
    produce(state, (baseState) => {
      baseState.movie = action.movie;
    })
  ),
  on(EditMovieActions.clear, EditMovieActions.updateMovieSuccess, () => initialState)
);

export function reducer(state: EditMovieStore | undefined, action: Action) {
  return movieDetailsReducer(state, action);
}
