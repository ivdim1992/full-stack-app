import { createSelector } from '@ngrx/store';
import { fromSelectedGenreReducer, getMovieListState } from '../reducers';

const getGenreEntities = createSelector(getMovieListState, (state) => state.selectedGenre);

const {
  selectIds: genreIds,
  selectEntities: genreEntities,
  selectAll: genres,
  selectTotal: genresTotal
} = fromSelectedGenreReducer.adapter.getSelectors(getGenreEntities);

export const SelectedGenreSelectors = {
  genreIds,
  genreEntities,
  genres,
  genresTotal
};
