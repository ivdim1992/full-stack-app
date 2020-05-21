import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IMovie } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent implements OnInit {
  @Input() public movie: IMovie;
  public mouseOvered: boolean;
  constructor() {}

  public ngOnInit(): void {}
}
