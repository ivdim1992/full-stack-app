import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMovieComponent } from './containers';
import { AddMovieRoutingModule } from './add-movie-routing.module';
import { MaterialModule } from 'src/app/resources/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AddMovieComponent],
  imports: [CommonModule, AddMovieRoutingModule, MaterialModule, ReactiveFormsModule, FlexLayoutModule]
})
export class AddMovieModule {}
