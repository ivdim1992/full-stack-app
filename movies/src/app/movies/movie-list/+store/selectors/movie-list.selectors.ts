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

export const getMoviesGenres = createSelector(selectAllMovies, (movies) => {
  const genresCount = {
    Comedy: 0,
    Action: 0,
    Drama: 0,
    Horror: 0,
    Fantasy: 0,
    Adventure: 0,
    Animation: 0,
    Crime: 0,
    Family: 0,
    Mystery: 0
  };
  movies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      switch (genre) {
        case 'Comedy':
          genresCount[genre]++;
          break;
        case 'Action':
          genresCount[genre]++;
          break;
        case 'Drama':
          genresCount[genre]++;
          break;
        case 'Horror':
          genresCount[genre]++;
          break;
        case 'Fantasy':
          genresCount[genre]++;
          break;
        case 'Adventure':
          genresCount[genre]++;
          break;
        case 'Animation':
          genresCount[genre]++;
          break;
        case 'Crime':
          genresCount[genre]++;
          break;
        case 'Family':
          genresCount[genre]++;
          break;
        case 'Mystery':
          genresCount[genre]++;
          break;
        default:
          break;
      }
    });
  });

  return genresCount;
});

export const MovieListSelectors = {
  getMovieListIds,
  getMoviesEntities,
  selectAllMovies,
  selectTotalMovies,
  getFilteredMovies,
  getMoviesGenres
};
