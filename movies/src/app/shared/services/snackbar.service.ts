import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { ISnackBarData } from '../interfaces/snackbar-data.interface';
import { SnackbarComponent } from '../components';

@Injectable({ providedIn: 'root' })
export class SnackBarService {
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  private snackBarAutoHide = 5000;

  constructor(private matSnackBar: MatSnackBar) {}

  public open(data: ISnackBarData) {
    this.matSnackBar.openFromComponent(SnackbarComponent, {
      duration: this.snackBarAutoHide,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: data.type,
      data: { message: data.message, type: data.type, action: data.action, icon: data.icon }
    });
  }
}
