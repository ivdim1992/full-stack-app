import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CreateMovieActions } from '../actions';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SnackBarService } from '@app/shared/services';
import { SnackTypes, SnackBarIconTypes } from '@app/shared/enums';

@Injectable()
export class CreateMovieEffects {
  public readonly createMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreateMovieActions.createMovie),
      map(({ movieOutput }) => CreateMovieActions.createMovieSuccess({ movie: movieOutput }))
    )
  );

  public readonly navigateToMoviesList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CreateMovieActions.createMovieSuccess),
        tap((_) => {
          this.snackbarService.open({
            message: 'Created successfully',
            action: 'X',
            type: SnackTypes.SUCCESS,
            icon: SnackBarIconTypes.SUCCESS
          });
          return this.router.navigate(['movies', 'list']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly snackbarService: SnackBarService,
    private readonly router: Router
  ) {}
}
