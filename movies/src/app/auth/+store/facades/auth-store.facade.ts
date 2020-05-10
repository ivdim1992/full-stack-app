import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { AuthActions } from '../actions';
import { Store, select } from '@ngrx/store';
import * as fromAuth from '../reducers';
import { AuthSelectors } from '../selectors';
import { IAuth } from 'src/app/shared/interfaces';

@Injectable({ providedIn: 'root' })
export class AuthStoreFacade {
  constructor(private readonly actions$: Actions, private readonly store: Store<fromAuth.State>) {}

  public user$ = this.store.pipe(select(AuthSelectors.selectUser));

  public signIn(data: IAuth) {
    this.store.dispatch(AuthActions.signInUser({ data }));
  }

  public register(data: IAuth) {
    this.store.dispatch(AuthActions.registerUser({ data }));
  }
}
