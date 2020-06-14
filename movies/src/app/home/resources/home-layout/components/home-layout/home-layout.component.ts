import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthStoreFacade } from 'src/app/auth/+store/facades';
import { MovieListStoreFacade } from 'src/app/home/movies/+store/facades';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLayoutComponent {
  public user$ = this.authStoreFacade.user$;

  constructor(
    private readonly authStoreFacade: AuthStoreFacade,
    private readonly movieListStoreFacade: MovieListStoreFacade
  ) {}

  public onSignOut() {
    this.authStoreFacade.signOut();
  }

  public onSelectGenre(data: { id: string; genre: string }) {
    this.movieListStoreFacade.deselectedGenre();
    this.movieListStoreFacade.selectedGenre(data.id, data.genre);
  }

  public onClear() {
    this.movieListStoreFacade.deselectedGenre();
  }
}
