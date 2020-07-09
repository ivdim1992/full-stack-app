import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromUserReducer from '../reducers';
import { userKey } from '../reducers';

export const selectFeature = createFeatureSelector<fromUserReducer.UserStore>(userKey);

export const user = createSelector(selectFeature, (state) => state.user);
