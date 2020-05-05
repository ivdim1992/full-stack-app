import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { AuthService } from '../../auth.service';
import { AuthActions } from '../actions';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  public readonly registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerUser),
      switchMap(({ email, password }) =>
        this.authService.register(email, password).pipe(
          map((user) => AuthActions.registerUserSuccess({ user })),
          catchError((error) => of(AuthActions.registerUserFailure({ error })))
        )
      )
    )
  );

  public readonly signInUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signInUser),
      switchMap(({ email, password }) =>
        this.authService.signIn(email, password).pipe(
          map((user) => AuthActions.signInUserSuccess({ user })),
          catchError((error) => of(AuthActions.signInUserFailure({ error })))
        )
      )
    )
  );

  constructor(private readonly actions$: Actions, private readonly authService: AuthService) {}
}
