import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { MovieListActions, SelectedGenreActions } from '../actions';
import { Store, select } from '@ngrx/store';
import * as fromMovieListReducer from '../reducers';
import { MovieListSelectors, SelectedGenreSelectors } from '../selectors';
import { IGenre } from '@app/shared/interfaces';

@Injectable({ providedIn: 'root' })
export class MovieListStoreFacade {
  constructor(private readonly actions$: Actions, private readonly store: Store<fromMovieListReducer.State>) {}

  public getMoviesSuccess = this.actions$.pipe(ofType(MovieListActions.getMoviesSuccess));

  public selectedGenre$ = this.store.pipe(select(SelectedGenreSelectors.genres));
  public movies$ = this.store.pipe(select(MovieListSelectors.getFilteredMovies));
  public moviesGenres$ = this.store.pipe(select(MovieListSelectors.getMoviesGenres));

  public readonly selectedGenresMap$ = this.store.pipe(select(SelectedGenreSelectors.genreEntities));

  public getMovies() {
    this.store.dispatch(MovieListActions.getMovies());
  }

  public selectedGenre(genre: IGenre) {
    this.store.dispatch(SelectedGenreActions.select({ genre }));
  }

  public deselectedGenre() {
    this.store.dispatch(SelectedGenreActions.deselect());
  }

  public setOrRemoveMovieIntoFavorites(movieId: string, setOrRemove: boolean) {
    this.store.dispatch(MovieListActions.setOrRemoveFavoriteMovie({ movieId, setOrRemove }));
  }

  public clear() {
    this.store.dispatch(MovieListActions.clear());
  }
}
