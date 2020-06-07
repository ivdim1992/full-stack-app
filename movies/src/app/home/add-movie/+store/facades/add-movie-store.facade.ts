import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { CreateMovieActions } from '../actions';
import { Store } from '@ngrx/store';
import * as fromCreateMovieReducer from '../reducers';
import { IMovieOutput } from '../../interfaces';

@Injectable({ providedIn: 'root' })
export class CreateMovieStoreFacade {
  constructor(private readonly actions$: Actions, private readonly store: Store<fromCreateMovieReducer.State>) {}

  public createMovieSuccess$ = this.actions$.pipe(ofType(CreateMovieActions.createMovieSuccess));

  public createMovie(movieOutput: IMovieOutput) {
    this.store.dispatch(CreateMovieActions.createMovie({ movieOutput }));
  }

  public clear() {
    this.store.dispatch(CreateMovieActions.clear());
  }
}
