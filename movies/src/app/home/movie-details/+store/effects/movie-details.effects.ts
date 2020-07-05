import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { MovieDetailsActions } from '../actions';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { MoviesService } from '@app/home/movies/movies.service';
import { SnackBarService } from '@app/shared/services';
import { SnackBarIconTypes, SnackTypes } from '@app/shared/enums';

@Injectable()
export class MovieDetailsEffects {
  public readonly getMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieDetailsActions.getMovie),
      switchMap(({ movieId }) =>
        this.moviesService.getMovie(movieId).pipe(
          map((movie) => MovieDetailsActions.getMovieSuccess({ movie })),
          catchError((error) => of(MovieDetailsActions.getMovieFailure({ error })))
        )
      )
    )
  );

  public readonly deleteMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieDetailsActions.deleteMovie),
      switchMap(({ movieId }) =>
        this.moviesService.deleteMovie(movieId).pipe(
          map((_) => MovieDetailsActions.deleteMovieSuccess()),
          catchError((error) => of(MovieDetailsActions.deleteMovieFailure({ error })))
        )
      )
    )
  );

  public navigateToMoviesList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieDetailsActions.deleteMovieSuccess),
        tap((_) => {
          this.snackbarService.open({
            message: 'Deleted successfully',
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
    private readonly moviesService: MoviesService,
    private readonly router: Router,
    private readonly snackbarService: SnackBarService
  ) {}
}
