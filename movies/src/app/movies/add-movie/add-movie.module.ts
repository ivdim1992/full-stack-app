import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMovieComponent } from './containers';
import { AddMovieRoutingModule } from './add-movie-routing.module';
import { CreateMovieStoreModule } from './+store';
import { MovieFormModule } from '../resources/movie-form';
import { SelectModule } from '../resources/select';
import { FileUploadModule } from 'ng2-file-upload';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AddMovieComponent],
  imports: [
    CommonModule,
    AddMovieRoutingModule,
    CreateMovieStoreModule,
    MovieFormModule,
    SelectModule,
    FileUploadModule,
    MatIconModule
  ]
})
export class AddMovieModule {}
