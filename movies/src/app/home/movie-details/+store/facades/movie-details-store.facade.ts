import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { MovieDetailsActions } from '../actions';
import { Store, select } from '@ngrx/store';
import * as fromDetailsReducer from '../reducers';
import { MovieDetailsSelectors } from '../selectors';

@Injectable({ providedIn: 'root' })
export class MovieDetailsStoreFacade {
  constructor(private readonly actions$: Actions, private readonly store: Store<fromDetailsReducer.State>) {}

  public getMovieSuccess = this.actions$.pipe(ofType(MovieDetailsActions.getMovieSuccess));

  public movie$ = this.store.pipe(select(MovieDetailsSelectors.movie));

  public getMovie(movieId: string) {
    this.store.dispatch(MovieDetailsActions.getMovie({ movieId }));
  }

  public deleteMovie(movieId: string) {
    this.store.dispatch(MovieDetailsActions.deleteMovie({ movieId }));
  }

  public clear() {
    this.store.dispatch(MovieDetailsActions.clear());
  }
}
