import * as fromRouter from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, Action, createFeatureSelector } from '@ngrx/store';
import { localStorageSync } from '../../../../node_modules/ngrx-store-localstorage';
import { InjectionToken } from '@angular/core';
import { ISerializedRouterState } from '../router-serializer/router-serializer';

export const routerStateKey = 'router';

export interface State {
  router: fromRouter.RouterReducerState;
}

// tslint:disable-next-line: no-any
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['auth'], rehydrate: true })(reducer);
}

export const metaReducers = [localStorageSyncReducer];

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
  factory: () => ({
    router: fromRouter.routerReducer
  })
});

export const getRouterState = createFeatureSelector<State, fromRouter.RouterReducerState<ISerializedRouterState>>(
  routerStateKey
);
