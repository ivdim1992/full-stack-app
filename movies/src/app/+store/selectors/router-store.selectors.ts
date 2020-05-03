import { createSelector } from '@ngrx/store';
import { getRouterState } from '../reducers';

const getRouterSnapshot = createSelector(getRouterState, (routerReducerState) => routerReducerState.state);

export const RouterStoreSelectors = {
  getRouterSnapshot,
  getRouterState
};
