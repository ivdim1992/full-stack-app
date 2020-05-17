import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { MovieListStoreFacade } from '../../+store/facades';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit, OnDestroy {
  public movies$ = this.movieListStoreFacade.movies$;

  constructor(private readonly movieListStoreFacade: MovieListStoreFacade) {}

  ngOnInit(): void {}

  public ngOnDestroy() {
    this.movieListStoreFacade.clear();
  }
}
