import { Component, OnDestroy, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MovieListStoreFacade } from '../../+store/facades';
import { Router } from '@angular/router';
import { take, takeUntil } from 'rxjs/operators';
import { IMovie } from '@app/shared/interfaces';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  public movies$ = this.movieListStoreFacade.movies$;
  public movies: IMovie[] = [];
  private _destroyed$ = new Subject<boolean>();

  constructor(private readonly movieListStoreFacade: MovieListStoreFacade, private readonly router: Router) {}

  public ngOnInit() {
    this.movies$.pipe(takeUntil(this._destroyed$)).subscribe((movies) => (this.movies = movies));
  }
  public onViewDetails(movieId: string) {
    this.router.navigate(['movies', 'details', movieId]);
  }

  public onSelectFavoriteIcon(data: { movieId: string; setOrRemoveFromFavorites: boolean }) {
    this.movieListStoreFacade.setOrRemoveMovieIntoFavorites(data.movieId, data.setOrRemoveFromFavorites);
  }

  public ngOnDestroy() {
    this.movieListStoreFacade.deselectedGenre();
  }
}
