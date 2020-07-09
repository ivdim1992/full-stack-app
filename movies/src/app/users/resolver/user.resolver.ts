import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { UserStoreFacade } from '../+store/facades';

@Injectable({ providedIn: 'root' })
export class UserResolver implements CanActivate {
  constructor(private readonly userStoreFacade: UserStoreFacade) {}

  public canActivate(route: ActivatedRouteSnapshot) {
    const id = route.params.id;

    this.userStoreFacade.getUser(id);

    return this.userStoreFacade.getUserSuccess.pipe(
      take(1),
      map((_) => true)
    );
  }
}
