import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { MovieListActions } from '../actions';
import { Store, select } from '@ngrx/store';
import * as fromMovieListReducer from '../reducers';
import { MovieListSelectors } from '../selectors';

@Injectable({ providedIn: 'root' })
export class MovieListStoreFacade {
  constructor(private readonly actions$: Actions, private readonly store: Store<fromMovieListReducer.State>) {}

  public getMoviesSuccess = this.actions$.pipe(ofType(MovieListActions.getMoviesSuccess));

  public movies$ = this.store.pipe(select(MovieListSelectors.movies));

  public getMovies() {
    this.store.dispatch(MovieListActions.getMovies());
  }

  public clear() {
    this.store.dispatch(MovieListActions.clear());
  }
}
