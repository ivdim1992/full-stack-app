import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { IUserInput, IUserOutput } from '@app/users/interfaces';

// API
export const getUser = createAction('[Users Module] Get User', props<{ id: string }>());

export const updateUser = createAction('[User Module] Update User', props<{ user: IUserOutput; id: string }>());

// Success
export const getUserSuccess = createAction('[User Module] Get User Success', props<{ user: IUserInput }>());

export const updateUserSuccess = createAction('[User Module] Update User Success', props<{ user: IUserInput }>());

// Failure
export const getUserFailure = createAction('[User Module] Get User Failure', props<{ error: HttpErrorResponse }>());

export const updateUserFailure = createAction(
  '[User Module] Update User Failure',
  props<{ error: HttpErrorResponse }>()
);

// Other actions

export const clearStore = createAction('[User Module] Clear Store');
