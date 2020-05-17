import { createAction, props } from '@ngrx/store';
import { IAuth, IUser } from 'src/app/shared/interfaces';

// API
export const registerUser = createAction('[Authentication Module] Register User', props<{ data: IAuth }>());

export const signInUser = createAction('[Authentication Module] Sign In User', props<{ data: IAuth }>());

export const signOut = createAction('[Authentication Module] Sign Out User');

// Success
export const registerUserSuccess = createAction(
  '[Authentication Module] Register User Success',
  props<{ user: IUser }>()
);

export const signInUserSuccess = createAction('[Authentication Module] Sign In User Success', props<{ user: IUser }>());

export const signOutSuccess = createAction(
  '[Authentication Module] Sign Out User Success',
  props<{ message: string }>()
);

// Failure
export const registerUserFailure = createAction(
  '[Authentication Module] Register User Failure',
  props<{ error: { message: string } }>()
);

export const signInUserFailure = createAction(
  '[Authentication Module] Sign In User Failure',
  props<{ error: { message: string } }>()
);

export const signOutFailure = createAction(
  '[Authentication Module] Sign Out User Failure',
  props<{ error: { message: string } }>()
);
