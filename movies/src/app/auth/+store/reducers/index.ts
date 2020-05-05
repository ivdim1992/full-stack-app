import * as fromRoot from '../../../+store';
import { createReducer, on, Action } from '@ngrx/store';
import { AuthActions } from '../actions';
import produce from 'immer';
import { IUser } from 'src/app/shared/interfaces/user.interface';

export const authKey = 'auth';

export interface AuthState {
  user: IUser;
}

export const initialState: AuthState = {
  user: null
};

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const authReducer = createReducer(
  initialState,
  on(AuthActions.signInUserSuccess, AuthActions.registerUserSuccess, (state, action) =>
    produce(state, (baseState) => {
      baseState.user = action.user;
    })
  )
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
