import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { MovieDetailsStoreFacade } from '../+store/facades';

@Injectable({ providedIn: 'root' })
export class MovieDetailsResolver implements CanActivate {
  constructor(private readonly movieDetailsStoreFacade: MovieDetailsStoreFacade) {}

  public canActivate(route: ActivatedRouteSnapshot) {
    const movieId = route.params.id;

    this.movieDetailsStoreFacade.getMovie(movieId);

    return this.movieDetailsStoreFacade.getMovieSuccess.pipe(
      take(1),
      map((_) => true)
    );
  }
}
