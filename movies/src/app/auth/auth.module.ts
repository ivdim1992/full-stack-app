import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInLayoutModule } from './resources/sign-in-layout/sign-in-layout.module';
import { SignInComponent, RegisterComponent } from './containers';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared';
import { MaterialModule } from '../resources/material';
import { SignInFormComponent, RegisterFormComponent } from './components';

@NgModule({
  declarations: [SignInComponent, RegisterComponent, SignInFormComponent, RegisterFormComponent],
  imports: [CommonModule, SignInLayoutModule, AuthRoutingModule, SharedModule, MaterialModule]
})
export class AuthModule {}
