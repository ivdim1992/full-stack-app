import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, tap, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../../auth.service';
import { AuthActions } from '../actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { SnackBarService } from '@app/shared/services';
import { SnackTypes, SnackBarIconTypes } from '@app/shared/enums';

@Injectable()
export class AuthEffects {
  public readonly registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerUser),
      exhaustMap(({ data }) =>
        this.authService.register(data).pipe(
          map(({ message }) => AuthActions.registerUserSuccess({ message })),
          catchError((error) => of(AuthActions.registerUserFailure({ error: error.error.message })))
        )
      )
    )
  );

  public readonly signInUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signInUser),
      exhaustMap(({ data }) =>
        this.authService.signIn(data).pipe(
          map((user) => AuthActions.signInUserSuccess({ user })),
          catchError((error) => of(AuthActions.signInUserFailure({ error: error.error.message })))
        )
      )
    )
  );

  public readonly signOutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signOut),
      exhaustMap((_) =>
        this.authService.signOut().pipe(
          map(({ message }) => AuthActions.signOutSuccess({ message })),
          catchError((error) => of(AuthActions.signOutFailure({ error })))
        )
      )
    )
  );

  public readonly showSnackbar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.signInUserFailure, AuthActions.registerUserFailure),
        tap(({ error }) => {
          this.snackbarService.open({
            message: error,
            action: 'X',
            type: SnackTypes.ERROR,
            icon: SnackBarIconTypes.ERROR
          });
        })
      ),
    { dispatch: false }
  );

  public readonly signOutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.signOutSuccess),
        tap((_) => this.router.navigate(['auth', 'sign-in']))
      ),
    { dispatch: false }
  );

  public readonly registerSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.registerUserSuccess),
        tap((value: { message: string }) => {
          this.snackbarService.open({
            message: value.message,
            action: 'X',
            type: SnackTypes.SUCCESS,
            icon: SnackBarIconTypes.SUCCESS
          });
          this.router.navigate(['auth', 'sign-in']);
        })
      ),
    { dispatch: false }
  );

  public readonly signInSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.signInUserSuccess),
        tap((_) => this.router.navigate(['movies']))
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly snackbarService: SnackBarService
  ) {}
}
