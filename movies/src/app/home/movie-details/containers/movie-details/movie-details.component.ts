import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MovieDetailsStoreFacade } from '../../+store/facades';
import { MatDialog } from '@angular/material/dialog';
import { DeleteMovieDialogComponent } from '../../components';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent {
  public movie$ = this.movieDetailsStoreFacade.movie$;

  constructor(private readonly movieDetailsStoreFacade: MovieDetailsStoreFacade, private readonly dialog: MatDialog) {}

  public onEdit(movieId: string) {
    return true;
  }

  public onDelete(title: string, movieId: string) {
    this.dialog
      .open(DeleteMovieDialogComponent, {
        width: '588px',
        panelClass: 'delete-movie-dialog',
        disableClose: true,
        data: title
      })
      .afterClosed()
      .pipe(take(1))
      .subscribe((dialogRes: string) => {
        if (!dialogRes) return;

        this.movieDetailsStoreFacade.deleteMovie(movieId);
      });
  }
}
