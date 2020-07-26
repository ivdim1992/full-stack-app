import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromFavoriteMoviesReducer from '../reducers';
import { favoriteMoviesKey } from '../reducers';
import { SelectedGenreSelectors } from '@app/movies/movie-list/+store/selectors';

export const selectFeature = createFeatureSelector<fromFavoriteMoviesReducer.FavoriteMoviesStore>(favoriteMoviesKey);

export const favoriteMovies = createSelector(selectFeature, (state) => state.favoriteMovies);

export const getFilteredMovies = createSelector(SelectedGenreSelectors.genres, favoriteMovies, (genres, movies) => {
  if (genres.length > 0) {
    return movies.filter((movie) => movie.genres.includes(genres[0].genre));
  }
  return movies;
});
