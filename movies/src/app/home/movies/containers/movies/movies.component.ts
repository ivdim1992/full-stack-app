import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { MovieListStoreFacade } from '../../+store/facades';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnDestroy {
  public movies$ = this.movieListStoreFacade.movies$;

  constructor(private readonly movieListStoreFacade: MovieListStoreFacade, private readonly router: Router) {}

  public onViewDetails(movieId: string) {
    this.router.navigate(['movies', 'details', movieId]);
  }

  public onSelectFavoriteIcon(data: { movieId: string; setOrRemoveFromFavorites: boolean }) {
    this.movieListStoreFacade.setOrRemoveMovieIntoFavorites(data.movieId, data.setOrRemoveFromFavorites);
  }

  public ngOnDestroy() {
    this.movieListStoreFacade.clear();
    this.movieListStoreFacade.deselectedGenre();
  }
}
