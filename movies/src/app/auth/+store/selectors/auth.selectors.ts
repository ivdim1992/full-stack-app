import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAuthReducer from '../reducers';
import { authKey } from '../reducers';

export const selectFeature = createFeatureSelector<fromAuthReducer.AuthState>(authKey);

export const selectUser = createSelector(selectFeature, (state) => state.user);
