import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { EditMovieStoreFacade } from '../+store/facades';

@Injectable({ providedIn: 'root' })
export class EditMovieResolver implements CanActivate {
  constructor(private readonly editMovieStoreFacade: EditMovieStoreFacade) {}

  public canActivate(route: ActivatedRouteSnapshot) {
    const movieId = route.params.id;

    this.editMovieStoreFacade.getMovie(movieId);

    return this.editMovieStoreFacade.getMovieSuccess.pipe(
      take(1),
      map((_) => true)
    );
  }
}
