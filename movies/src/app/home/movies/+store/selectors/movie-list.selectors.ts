import { createSelector } from '@ngrx/store';
import { fromMoviesReducer, getMovieListState } from '../reducers';
import { MovieListActions } from '../actions';
import { take } from 'rxjs/operators';

const getMovieListEntities = createSelector(getMovieListState, (state) => state.movies);

const {
  selectIds: getMovieListIds,
  selectEntities: getMoviesEntities,
  selectAll: selectAllMovies,
  selectTotal: selectTotalMovies
} = fromMoviesReducer.adapter.getSelectors(getMovieListEntities);

export const MovieListSelectors = {
  getMovieListIds,
  getMoviesEntities,
  selectAllMovies,
  selectTotalMovies
};
