import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthStoreFacade } from '../+store/facades';
import { take, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(private readonly router: Router, private readonly authStoreFacade: AuthStoreFacade) {}

  public canActivate() {
    return this.authStoreFacade.user$.pipe(
      take(1),
      switchMap((user) => {
        if (user) {
          this.router.navigate(['home']);
          return of(false);
        }
        return of(true);
      })
    );
  }
}
