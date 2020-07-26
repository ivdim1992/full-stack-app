import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { FavoriteMoviesStoreFacade } from '../+store/facades';

@Injectable({ providedIn: 'root' })
export class FavoriteMoviesResolver implements CanActivate {
  constructor(private readonly favoriteMoviesStoreFacade: FavoriteMoviesStoreFacade) {}

  public canActivate() {
    this.favoriteMoviesStoreFacade.getFavoriteMovies();

    return this.favoriteMoviesStoreFacade.getFavoriteMoviesSuccess.pipe(
      take(1),
      map((_) => true)
    );
  }
}
