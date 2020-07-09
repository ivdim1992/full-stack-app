import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { SelectedGenreActions, MovieListActions } from '../actions';
import { IGenre } from '@app/shared/interfaces';

export interface State extends EntityState<IGenre> {}

export const adapter = createEntityAdapter<IGenre>();

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(SelectedGenreActions.select, (state, action) => adapter.addOne(action.genre, state)),
  on(SelectedGenreActions.deselect, () => initialState),
  on(MovieListActions.clear, () => initialState)
);
