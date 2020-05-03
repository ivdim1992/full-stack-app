import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInLeftPartComponent, SignInLeftPartFooterComponent } from './containers';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SignInLeftPartComponent, SignInLeftPartFooterComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule],
  exports: [SignInLeftPartComponent]
})
export class SignInLeftPartModule {}
