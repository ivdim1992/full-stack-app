import { Injectable } from '@angular/core';
import { UserActions } from '../actions';
import { Store, select } from '@ngrx/store';
import * as fromUserReducer from '../reducers';
import { Actions, ofType } from '@ngrx/effects';
import { UserSelectors } from '../selectors';
import { IUserOutput } from '@app/users/interfaces';

@Injectable({ providedIn: 'root' })
export class UserStoreFacade {
  constructor(private readonly actions$: Actions, private readonly store: Store<fromUserReducer.State>) {}

  public getUserSuccess = this.actions$.pipe(ofType(UserActions.getUserSuccess));

  public user$ = this.store.pipe(select(UserSelectors.user));

  public getUser(id: string) {
    this.store.dispatch(UserActions.getUser({ id }));
  }

  public updateUser(id: string, user: IUserOutput) {
    this.store.dispatch(UserActions.updateUser({ user, id }));
  }

  public clear() {
    this.store.dispatch(UserActions.clearStore());
  }
}
