import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterUploadComponent } from './components';
import { NgxFileDropModule } from 'ngx-file-drop';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PosterUploadComponent],
  imports: [CommonModule, NgxFileDropModule, MatIconModule, FlexLayoutModule],
  exports: [PosterUploadComponent]
})
export class PosterUploadModule {}
