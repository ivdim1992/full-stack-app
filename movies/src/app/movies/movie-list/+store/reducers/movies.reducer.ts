import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { MovieListActions } from '../actions';
import { IMovie } from 'src/app/shared/interfaces';
import { MovieDetailsActions } from '@app/movies/movie-details/+store/actions';
import { EditMovieActions } from '@app/movies/edit-movie/+store/actions';

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
  on(MovieDetailsActions.deleteMovieSuccess, (state, { movieId }) => adapter.removeOne(movieId, state)),
  on(EditMovieActions.updateMovieSuccess, (state, { movie }) =>
    adapter.updateOne({ id: movie._id, changes: { ...movie } }, state)
  ),
  on(MovieListActions.clear, () => initialState)
);
