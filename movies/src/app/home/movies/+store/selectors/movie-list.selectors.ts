import { createSelector } from '@ngrx/store';
import { fromMoviesReducer, getMovieListState } from '../reducers';
import { SelectedGenreSelectors } from './selected-genre.selectors';

const getMovieListEntities = createSelector(getMovieListState, (state) => state.movies);

const {
  selectIds: getMovieListIds,
  selectEntities: getMoviesEntities,
  selectAll: selectAllMovies,
  selectTotal: selectTotalMovies
} = fromMoviesReducer.adapter.getSelectors(getMovieListEntities);

export const getFilteredMovies = createSelector(SelectedGenreSelectors.genres, selectAllMovies, (genres, movies) => {
  if (genres.length > 0) {
    return movies.filter((movie) => movie.genres.includes(genres[0].genre));
  }
  return movies;
});

export const MovieListSelectors = {
  getMovieListIds,
  getMoviesEntities,
  selectAllMovies,
  selectTotalMovies,
  getFilteredMovies
};
