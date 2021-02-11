import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthStoreFacade } from 'src/app/auth/+store/facades';
import { MovieListStoreFacade } from 'src/app/movies/movie-list/+store/facades';
import { IGenre, IMovie } from '@app/shared/interfaces';
import { take, takeUntil } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {
  public user$ = this.authStoreFacade.user$;
  public selectedGenre$ = this.movieListStoreFacade.selectedGenre$;
  public movies$ = this.movieListStoreFacade.movies$;
  public moviesGenres$ = this.movieListStoreFacade.moviesGenres$;

  constructor(
    private readonly authStoreFacade: AuthStoreFacade,
    private readonly movieListStoreFacade: MovieListStoreFacade
  ) {}

  public onSignOut() {
    this.authStoreFacade.signOut();
  }

  public onSelectGenre(genre: IGenre) {
    this.movieListStoreFacade.deselectedGenre();
    this.movieListStoreFacade.selectedGenre(genre);
  }

  public onClear() {
    this.movieListStoreFacade.deselectedGenre();
  }
}
