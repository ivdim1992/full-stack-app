import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromMovieDetailsReducer from '../reducers';
import { movieDetailsKey } from '../reducers';

export const selectFeature = createFeatureSelector<fromMovieDetailsReducer.MovieDetailsStore>(movieDetailsKey);

export const movie = createSelector(selectFeature, (state) => state.movie);
