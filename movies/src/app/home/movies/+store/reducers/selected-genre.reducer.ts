import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { SelectedGenreActions } from '../actions';

export interface State extends EntityState<{ id: string; genre: string }> {}

export const adapter = createEntityAdapter<{ id: string; genre: string }>();

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(SelectedGenreActions.select, (state, action) => adapter.addOne(action, state)),
  on(SelectedGenreActions.deselect, () => initialState)
);
