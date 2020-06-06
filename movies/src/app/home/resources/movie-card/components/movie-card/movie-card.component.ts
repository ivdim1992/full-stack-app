import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { IMovie } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent {
  @Input() public _movie: IMovie;
  @Output() public viewDetailsSelected = new EventEmitter<string>();
  @Output() public favoriteIconSelected = new EventEmitter<{ movieId: string; setOrRemoveFromFavorites: boolean }>();

  @Input() public _isInFavorite: boolean;

  constructor(private readonly cd: ChangeDetectorRef) {}

  @Input() public set isInFavorite(isInFavorite: boolean) {
    this._isInFavorite = isInFavorite;
  }

  public get isInFavorite() {
    return this._isInFavorite;
  }

  @Input() public set movie(movie: IMovie) {
    if (!movie) return;
    this._movie = movie;
    this.cd.detectChanges();
  }

  public get movie() {
    return this._movie;
  }

  public onViewDetails(movieId: string) {
    this.viewDetailsSelected.emit(movieId);
  }

  public onSelectFavoriteIcon(movieId: string) {
    this.favoriteIconSelected.emit({ movieId, setOrRemoveFromFavorites: !this.isInFavorite });
  }
}
