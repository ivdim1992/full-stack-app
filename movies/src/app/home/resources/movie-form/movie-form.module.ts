import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieFormComponent } from './components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/resources/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SelectModule } from '../select';

@NgModule({
  declarations: [MovieFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, FormsModule, FlexLayoutModule, SelectModule],
  exports: [MovieFormComponent]
})
export class MovieFormModule {}
