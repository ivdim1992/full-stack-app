import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieFormComponent } from './components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SelectModule } from '../select';
import { MaterialModule } from '@app/resources/material';
import { PosterUploadModule } from '../poster-upload';

@NgModule({
  declarations: [MovieFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    SelectModule,
    PosterUploadModule
  ],
  exports: [MovieFormComponent]
})
export class MovieFormModule {}
