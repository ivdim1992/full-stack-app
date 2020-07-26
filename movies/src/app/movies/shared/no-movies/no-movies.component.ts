import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-no-movies',
  templateUrl: './no-movies.component.html',
  styleUrls: ['./no-movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoMoviesComponent {}
