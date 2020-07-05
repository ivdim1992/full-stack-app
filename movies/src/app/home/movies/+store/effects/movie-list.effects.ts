import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { MovieListActions } from '../actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { MoviesService } from '../../movies.service';

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

  constructor(private readonly actions$: Actions, private readonly moviesService: MoviesService) {}
}
