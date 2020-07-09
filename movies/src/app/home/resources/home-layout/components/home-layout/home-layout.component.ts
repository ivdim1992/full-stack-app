import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthStoreFacade } from 'src/app/auth/+store/facades';
import { MovieListStoreFacade } from 'src/app/home/movies/+store/facades';
import { IGenre } from '@app/shared/interfaces';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLayoutComponent {
  public user$ = this.authStoreFacade.user$;
  public selectedGenre$ = this.movieListStoreFacade.selectedGenre$;

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
