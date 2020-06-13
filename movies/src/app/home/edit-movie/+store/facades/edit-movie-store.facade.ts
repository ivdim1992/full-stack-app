import { Injectable } from '@angular/core';
import { EditMovieActions } from '../actions';
import { Store, select } from '@ngrx/store';
import * as fromEditMovieReducer from '../reducers';
import { EditMovieSelectors } from '../selectors';
import { IMovieOutput } from '../../interfaces';
import { Actions, ofType } from '@ngrx/effects';

@Injectable({ providedIn: 'root' })
export class EditMovieStoreFacade {
  constructor(private readonly actions$: Actions, private readonly store: Store<fromEditMovieReducer.State>) {}

  public getMovieSuccess = this.actions$.pipe(ofType(EditMovieActions.getMovieSuccess));

  public movie$ = this.store.pipe(select(EditMovieSelectors.movie));

  public getMovie(movieId: string) {
    this.store.dispatch(EditMovieActions.getMovie({ movieId }));
  }

  public updateMovie(movieId: string, movie: IMovieOutput) {
    this.store.dispatch(EditMovieActions.updateMovie({ movie, movieId }));
  }

  public clear() {
    this.store.dispatch(EditMovieActions.clear());
  }
}
