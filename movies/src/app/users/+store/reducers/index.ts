import * as fromRoot from '../../../+store';
import { createReducer, on, Action } from '@ngrx/store';
import { UserActions } from '../actions';
import produce from 'immer';
import { IUserInput } from '@app/users/interfaces';

export const userKey = 'users';

export interface UserStore {
  user: IUserInput;
}

export const initialState: UserStore = {
  user: null
};

export interface State extends fromRoot.State {
  user: UserStore;
}

const movieDetailsReducer = createReducer(
  initialState,
  on(UserActions.getUserSuccess, (state, action) =>
    produce(state, (baseState) => {
      baseState.user = action.user;
    })
  ),
  on(UserActions.clearStore, () => initialState)
);

export function reducer(state: UserStore | undefined, action: Action) {
  return movieDetailsReducer(state, action);
}
