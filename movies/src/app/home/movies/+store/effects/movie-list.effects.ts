import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { MovieListActions } from '../actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { MovieListService } from '../../movie-list.service';
import { of } from 'rxjs';

@Injectable()
export class MovieListEffects {
  public readonly getMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieListActions.getMovies),
      switchMap((_) =>
        this.movieListService.getMovies().pipe(
          map((movies) => MovieListActions.getMoviesSuccess({ movies })),
          catchError((error) => of(MovieListActions.getMoviesFailure({ error })))
        )
      )
    )
  );

  constructor(private readonly actions$: Actions, private readonly movieListService: MovieListService) {}
}
