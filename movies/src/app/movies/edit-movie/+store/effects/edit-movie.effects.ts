import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EditMovieActions } from '../actions';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { MoviesService } from '@app/movies/movie-list/movies.service';
import { SnackBarService } from '@app/shared/services';
import { SnackTypes, SnackBarIconTypes } from '@app/shared/enums';

@Injectable()
export class EditMovieEffects {
  public readonly getMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditMovieActions.getMovie),
      switchMap(({ movieId }) =>
        this.moviesService.getMovie(movieId).pipe(
          map((movie) => EditMovieActions.getMovieSuccess({ movie })),
          catchError((error) => of(EditMovieActions.getMovieFailure({ error })))
        )
      )
    )
  );

  public readonly updateMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EditMovieActions.updateMovie),
      switchMap(({ movie, movieId }) =>
        this.moviesService.updateMovie(movie, movieId).pipe(
          map((resMovie) => EditMovieActions.updateMovieSuccess({ movie: resMovie })),
          catchError((error) => of(EditMovieActions.updateMovieFailure({ error })))
        )
      )
    )
  );

  public navigateToMoviesList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EditMovieActions.updateMovieSuccess),
        tap((_) => {
          this.snackbarService.open({
            message: 'Updated successfully',
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
