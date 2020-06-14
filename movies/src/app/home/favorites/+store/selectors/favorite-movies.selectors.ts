import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromFavoriteMoviesReducer from '../reducers';
import { favoriteMoviesKey } from '../reducers';

export const selectFeature = createFeatureSelector<fromFavoriteMoviesReducer.FavoriteMoviesStore>(favoriteMoviesKey);

export const favoriteMovies = createSelector(selectFeature, (state) => state.favoriteMovies);
