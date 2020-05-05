import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { AuthActions } from '../actions';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../reducers';
import { AuthSelectors } from '../selectors';

@Injectable({ providedIn: 'root' })
export class AuthStoreFacade {
  constructor(private readonly actions$: Actions, private readonly store: Store<fromAuth.State>) {}

  public user$ = this.store.pipe(select(AuthSelectors.selectUser));

  public signIn(email: string, password: string) {
    this.store.dispatch(AuthActions.signInUser({ email, password }));
  }

  public register(email: string, password: string) {
    this.store.dispatch(AuthActions.registerUser({ email, password }));
  }
}
