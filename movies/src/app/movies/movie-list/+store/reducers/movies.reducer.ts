import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { MovieListActions } from '../actions';
import { IMovie } from 'src/app/shared/interfaces';

export interface State extends EntityState<IMovie> {}

export const adapter = createEntityAdapter<IMovie>({
  selectId: (model) => model._id
});

export const initialState: State = adapter.getInitialState({});

export const reducer = createReducer(
  initialState,
  on(MovieListActions.getMoviesSuccess, (state, action) => adapter.addMany(action.movies, state)),
  on(MovieListActions.setOrRemoveFavoriteMovieSuccess, (state, action) =>
    adapter.updateOne({ id: action.favoriteMovie._id, changes: { isFavorite: action.favoriteMovie.isFavorite } }, state)
  ),
  on(MovieListActions.clear, () => initialState)
);
