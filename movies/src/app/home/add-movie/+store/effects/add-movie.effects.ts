import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CreateMovieActions } from '../actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { MoviesService } from 'src/app/home/movies/movies.service';
import { of } from 'rxjs';
import { SnackBarService } from 'src/app/shared/services/snackbar.service';
import { SnackTypes, SnackBarIconTypes } from 'src/app/shared/enums';
import { Router } from '@angular/router';

export class CreateMovieEffects {
  public readonly getMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreateMovieActions.createMovie),
      switchMap(({ movieOutput }) =>
        this.movieService.createMovie(movieOutput).pipe(
          map((movie) => CreateMovieActions.createMovieSuccess({ movie })),
          catchError((error) => of(CreateMovieActions.createMovieFailure({ error })))
        )
      )
    )
  );

  public navigateToMoviesList$ = createEffect(
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
    private readonly movieService: MoviesService,
    private readonly snackbarService: SnackBarService,
    private readonly router: Router
  ) {}
}
