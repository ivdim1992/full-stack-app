import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { ISnackBarData } from '../../interfaces';
import { SnackBarIconTypes } from '../../enums';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackbarComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: ISnackBarData,
    public snackBarRef: MatSnackBarRef<SnackbarComponent>
  ) {}

  public close() {
    this.snackBarRef.dismissWithAction();
  }

  get getIcon() {
    switch (this.data.icon) {
      case SnackBarIconTypes.SUCCESS:
        return 'check_circle';
      case SnackBarIconTypes.ERROR:
        return 'error';
    }
  }
}
