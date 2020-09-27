import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { AuthStoreFacade } from 'src/app/auth/+store/facades';
import { MovieListStoreFacade } from 'src/app/movies/movie-list/+store/facades';
import { IGenre, IMovie } from '@app/shared/interfaces';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLayoutComponent implements OnInit {
  public user$ = this.authStoreFacade.user$;
  public selectedGenre$ = this.movieListStoreFacade.selectedGenre$;
  public movies$ = this.movieListStoreFacade.movies$;

  public genresCount = {
    Comedy: 0,
    Action: 0,
    Drama: 0,
    Horror: 0,
    Fantasy: 0,
    Adventure: 0,
    Animation: 0,
    Crime: 0,
    Family: 0,
    Mystery: 0
  };

  constructor(
    private readonly authStoreFacade: AuthStoreFacade,
    private readonly movieListStoreFacade: MovieListStoreFacade
  ) {}

  public ngOnInit() {
    this.movies$.pipe(take(1)).subscribe((movies: IMovie[]) => {
      movies.forEach((movie) => {
        movie.genres.forEach((genre) => {
          switch (genre) {
            case 'Comedy':
              this.genresCount[genre]++;
              break;
            case 'Action':
              this.genresCount[genre]++;
              break;
            case 'Drama':
              this.genresCount[genre]++;
              break;
            case 'Horror':
              this.genresCount[genre]++;
              break;
            case 'Fantasy':
              this.genresCount[genre]++;
              break;
            case 'Adventure':
              this.genresCount[genre]++;
              break;
            case 'Animation':
              this.genresCount[genre]++;
              break;
          }
        });
      });
    });
  }

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
