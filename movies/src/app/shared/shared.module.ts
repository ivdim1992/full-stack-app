import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GLOBAL_SETTINGS } from './tokens/global-settings';
import { environment as Settings } from '../../environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth/auth-interceptor.service';
import { RouterModule } from '@angular/router';
import { SnackbarComponent } from './components';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [SnackbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [FormsModule, ReactiveFormsModule, FlexLayoutModule, RouterModule, CommonModule, MatSnackBarModule],
  providers: [
    { provide: GLOBAL_SETTINGS, useValue: Settings },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  entryComponents: [SnackbarComponent]
})
export class SharedModule {}
