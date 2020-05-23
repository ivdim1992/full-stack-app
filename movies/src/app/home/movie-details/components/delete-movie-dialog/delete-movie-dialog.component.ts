import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-movie-dialog',
  templateUrl: './delete-movie-dialog.component.html',
  styleUrls: ['./delete-movie-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteMovieDialogComponent {
  constructor(
    public readonly dialogRef: MatDialogRef<DeleteMovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public readonly data: string
  ) {}

  public onCancel() {
    this.dialogRef.close();
  }
}
