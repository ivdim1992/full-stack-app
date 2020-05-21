import { MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';

import { SnackTypes } from '../enums';
import { SnackBarIconTypes } from '../enums';

export interface ISnackBarData {
  message: string;
  type: SnackTypes;
  icon?: SnackBarIconTypes;
  action?: string;
  duration?: number;
  verticalPosition?: MatSnackBarVerticalPosition;
  horizontalPosition?: MatSnackBarHorizontalPosition;
}
