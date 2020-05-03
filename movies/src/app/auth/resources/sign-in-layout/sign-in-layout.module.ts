import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInLayoutComponent } from './containers';
import { SignInLeftPartModule } from '../sign-in-left-part';
import { SignInRightPartModule } from '../sign-in-right-part';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SignInLayoutComponent],
  imports: [CommonModule, SignInLeftPartModule, SignInRightPartModule, FlexLayoutModule],
  exports: [SignInLayoutComponent]
})
export class SignInLayoutModule {}
