import { Params, Data, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface ISerializedRouterState {
  url: string;
  queryParams: Params;
  params: Params;
  data: Data;
}

export const mergeRouteParams = (
  route: ActivatedRouteSnapshot,
  getter: (r: ActivatedRouteSnapshot) => Params
): Params => {
  if (!route) {
    return {};
  }

  const currentParams = getter(route);
  const primaryChild = route.children.find((c) => c.outlet === 'primary') || route.firstChild;

  return { ...currentParams, ...mergeRouteParams(primaryChild, getter) };
};

export const mergeRouteData = (route: ActivatedRouteSnapshot): Data => {
  if (!route) {
    return {};
  }

  const currentData = route.data;
  const primaryChild = route.children.find((c) => c.outlet === 'primary') || route.firstChild;
  return { ...currentData, ...mergeRouteData(primaryChild) };
};

export class CustomRouterSerializer implements RouterStateSerializer<ISerializedRouterState> {
  public serialize(routerState: RouterStateSnapshot): ISerializedRouterState {
    return {
      url: routerState.url || '/',
      params: mergeRouteParams(routerState.root, (r) => r.params),
      queryParams: mergeRouteParams(routerState.root, (r) => r.queryParams),
      data: mergeRouteData(routerState.root)
    };
  }
}
