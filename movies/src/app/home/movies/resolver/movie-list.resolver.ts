import { Injectable } from '@angular/core';
import { CanActivate, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MovieListStoreFacade } from '../+store/facades';
import { take, map } from 'rxjs/operators';
import { IMovie } from 'src/app/shared/interfaces';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MoviesListResolver implements CanActivate {
  constructor(private readonly movieListStoreFacade: MovieListStoreFacade) {}

  public canActivate() {
    this.movieListStoreFacade.getMovies();

    return this.movieListStoreFacade.getMoviesSuccess.pipe(
      take(1),
      map((_) => true)
    );
  }
}
