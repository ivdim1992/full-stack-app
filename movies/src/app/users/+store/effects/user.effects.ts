import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { UserActions } from '../actions';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SnackBarService } from '@app/shared/services';
import { SnackTypes, SnackBarIconTypes } from '@app/shared/enums';
import { UserService } from '@app/users/user.service';

@Injectable()
export class UserEffects {
  public readonly getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUser),
      switchMap(({ id }) =>
        this.userService.getUser(id).pipe(
          map((user) => UserActions.getUserSuccess({ user })),
          catchError((error) => of(UserActions.getUserFailure({ error })))
        )
      )
    )
  );

  public readonly updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      switchMap(({ user, id }) =>
        this.userService.updateUser(user, id).pipe(
          map((resUser) => UserActions.updateUserSuccess({ user: resUser })),
          catchError((error) => of(UserActions.updateUserFailure({ error })))
        )
      )
    )
  );

  public navigateToMoviesList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.updateUserSuccess),
        tap((_) => {
          this.snackbarService.open({
            message: 'Updated user successfully',
            action: 'X',
            type: SnackTypes.SUCCESS,
            icon: SnackBarIconTypes.SUCCESS
          });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly userService: UserService,
    private readonly snackbarService: SnackBarService
  ) {}
}
