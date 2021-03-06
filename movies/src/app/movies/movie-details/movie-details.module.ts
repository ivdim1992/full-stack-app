import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsComponent } from './containers';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { SharedModule } from 'src/app/shared';
import { MatButtonModule } from '@angular/material/button';
import { DeleteMovieDialogComponent } from './components';
import { MatDialogModule } from '@angular/material/dialog';
import { MovieDetailsStoreModule } from './+store';

@NgModule({
  declarations: [MovieDetailsComponent, DeleteMovieDialogComponent],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    MovieDetailsStoreModule,
    SharedModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [DeleteMovieDialogComponent]
})
export class MovieDetailsModule {}
