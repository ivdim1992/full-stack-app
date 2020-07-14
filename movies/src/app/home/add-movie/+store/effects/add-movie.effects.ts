import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CreateMovieActions } from '../actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { MoviesService } from '@app/home/movies/movies.service';
import { SnackBarService } from '@app/shared/services';
import { SnackTypes, SnackBarIconTypes } from '@app/shared/enums';

@Injectable()
export class CreateMovieEffects {
  public readonly createMovie$ = createEffect(() =>
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

  // public readonly createPoster$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(CreateMovieActions.createMovie),
  //     switchMap(({ movieOutput }) =>
  //       this.movieService.uploadPoster(movieOutput.poster).pipe(
  //         map((poster) => CreateMovieActions.createPosterSuccess({ poster, movieOutput })),
  //         catchError((error) => of(CreateMovieActions.createPosterFailure({ error })))
  //       )
  //     )
  //   )
  // );

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
    private readonly movieService: MoviesService,
    private readonly snackbarService: SnackBarService,
    private readonly router: Router
  ) {}
}
