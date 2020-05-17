import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../auth.service';
import { AuthActions } from '../actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  public readonly registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerUser),
      switchMap(({ data }) =>
        this.authService.register(data).pipe(
          map((user) => AuthActions.registerUserSuccess({ user })),
          catchError((error) => of(AuthActions.registerUserFailure({ error })))
        )
      )
    )
  );

  public readonly signInUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signInUser),
      switchMap(({ data }) =>
        this.authService.signIn(data).pipe(
          map((user) => AuthActions.signInUserSuccess({ user })),
          catchError((error) => of(AuthActions.signInUserFailure({ error })))
        )
      )
    )
  );

  public readonly signOutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signOut),
      switchMap((_) =>
        this.authService.signOut().pipe(
          map(({ message }) => AuthActions.signOutSuccess({ message })),
          catchError((error) => of(AuthActions.signOutFailure({ error })))
        )
      )
    )
  );

  public readonly signOutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.signOutSuccess),
        tap((_) => this.router.navigate(['auth', 'sign-in']))
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
    private readonly router: Router
  ) {}
}
