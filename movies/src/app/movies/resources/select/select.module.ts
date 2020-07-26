import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent, OptionComponent } from './components';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SelectComponent, OptionComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [SelectComponent, OptionComponent]
})
export class SelectModule {}
