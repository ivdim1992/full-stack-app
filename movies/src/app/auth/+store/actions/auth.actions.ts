import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/shared/interfaces/user.interface';

// API
export const registerUser = createAction(
  '[Authentication Module] Register User',
  props<{ email: string; password: string }>()
);

export const signInUser = createAction('[Authentication Module] Sign In', props<{ email: string; password: string }>());

// Success
export const registerUserSuccess = createAction(
  '[Authentication Module] Register User Success',
  props<{ user: IUser }>()
);

export const signInUserSuccess = createAction('[Authentication Module] Sign In User Success', props<{ user: IUser }>());

// Failure
export const registerUserFailure = createAction(
  '[Authentication Module] Register User Failure',
  props<{ error: { message: string } }>()
);

export const signInUserFailure = createAction(
  '[Authentication Module] Sign In User Failure',
  props<{ error: { message: string } }>()
);
