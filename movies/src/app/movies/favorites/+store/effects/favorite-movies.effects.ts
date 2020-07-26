import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { FavoriteMoviesActions } from '../actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { MoviesService } from '@app/movies/movie-list/movies.service';

@Injectable()
export class FavoriteMoviesEffects {
  public readonly getFavoriteMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FavoriteMoviesActions.getFavoriteMovies),
      switchMap((_) =>
        this.moviesService.getFavoriteMovies().pipe(
          map((favMovies) => FavoriteMoviesActions.getFavoriteMoviesSuccess({ favMovies })),
          catchError((error) => of(FavoriteMoviesActions.getFavoriteMoviesFailure({ error })))
        )
      )
    )
  );

  constructor(private readonly actions$: Actions, private readonly moviesService: MoviesService) {}
}
