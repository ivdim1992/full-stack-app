import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IMovie } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent {
  @Input() public movie: IMovie;
  @Output() public viewDetailsSelected = new EventEmitter<string>();

  public onViewDetails(movieId: string) {
    this.viewDetailsSelected.emit(movieId);
  }
}
