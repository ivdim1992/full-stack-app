import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { FavoriteMoviesActions } from '../actions';
import { Store, select } from '@ngrx/store';
import * as fromFavoriteMoviesReducer from '../reducers';
import { FavoriteMoviesSelectors } from '../selectors';

@Injectable({ providedIn: 'root' })
export class FavoriteMoviesStoreFacade {
  constructor(private readonly actions$: Actions, private readonly store: Store<fromFavoriteMoviesReducer.State>) {}

  public getFavoriteMoviesSuccess = this.actions$.pipe(ofType(FavoriteMoviesActions.getFavoriteMoviesSuccess));

  public favoriteMovies$ = this.store.pipe(select(FavoriteMoviesSelectors.getFilteredMovies));

  public getFavoriteMovies() {
    this.store.dispatch(FavoriteMoviesActions.getFavoriteMovies());
  }

  public clear() {
    this.store.dispatch(FavoriteMoviesActions.clear());
  }
}
