import { createSelector } from '@ngrx/store';
import { fromMoviesReducer, getMovieListState } from '../reducers';

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
