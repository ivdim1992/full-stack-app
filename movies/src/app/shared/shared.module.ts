import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GLOBAL_SETTINGS } from './tokens/global-settings';
import { environment as Settings } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule],
  exports: [FormsModule, ReactiveFormsModule, FlexLayoutModule],
  providers: [{ provide: GLOBAL_SETTINGS, useValue: Settings }]
})
export class SharedModule {}
