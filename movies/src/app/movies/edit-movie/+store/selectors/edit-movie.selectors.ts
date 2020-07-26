import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromEditMovieReducer from '../reducers';
import { editMovieKey } from '../reducers';

export const selectFeature = createFeatureSelector<fromEditMovieReducer.EditMovieStore>(editMovieKey);

export const movie = createSelector(selectFeature, (state) => state.movie);
