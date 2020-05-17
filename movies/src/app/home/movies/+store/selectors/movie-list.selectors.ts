import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromMovieLIstReducer from '../reducers';
import { movieListKey } from '../reducers';

export const selectFeature = createFeatureSelector<fromMovieLIstReducer.MovieListStore>(movieListKey);

export const movies = createSelector(selectFeature, (state) => state.movies);
