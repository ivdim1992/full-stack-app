import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FavoriteMoviesStoreFacade } from '../../+store/facades';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent {
  public favoriteMovies$ = this.favoriteMoviesStoreFacade.favoriteMovies$;

  constructor(private readonly favoriteMoviesStoreFacade: FavoriteMoviesStoreFacade, private readonly router: Router) {}

  public onViewDetails(movieId: string) {
    this.router.navigate(['movies', 'details', movieId]);
  }
}
