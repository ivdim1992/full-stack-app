import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { MovieListActions } from '../actions';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MoviesService } from '../../movies.service';
import { SnackBarService } from '@app/shared/services';
import { SnackBarIconTypes, SnackTypes } from '@app/shared/enums';
import { Router } from '@angular/router';

@Injectable()
export class MovieListEffects {
  public readonly getMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieListActions.getMovies),
      switchMap((_) =>
        this.moviesService.getMovies().pipe(
          map((movies) => MovieListActions.getMoviesSuccess({ movies })),
          catchError((error) => of(MovieListActions.getMoviesFailure({ error })))
        )
      )
    )
  );

  public readonly setOrRemoveMovieIntoFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieListActions.setOrRemoveFavoriteMovie),
      switchMap(({ movieId, setOrRemove }) =>
        this.moviesService.setOrRemoveFromFavorites(movieId, setOrRemove).pipe(
          map((favoriteMovie) => MovieListActions.setOrRemoveFavoriteMovieSuccess({ favoriteMovie })),
          catchError((error) => of(MovieListActions.setOrRemoveFavoriteMovieFailure({ error })))
        )
      )
    )
  );

  public readonly showSnackbar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieListActions.getMoviesFailure),
        tap(({ error }) => {
          this.snackbarService.open({
            message: error.message,
            action: 'X',
            type: SnackTypes.ERROR,
            icon: SnackBarIconTypes.ERROR
          });
          return this.router.navigate(['auth', 'sign-in']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly moviesService: MoviesService,
    private readonly snackbarService: SnackBarService,
    private readonly router: Router
  ) {}
}
