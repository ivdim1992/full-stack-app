import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent, RegisterComponent } from './containers';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared';
import { MaterialModule } from '../resources/material';
import { SignInFormComponent, RegisterFormComponent } from './components';
import { SignInLayoutComponent, SignInLeftPartFooterComponent, SignInRightPartComponent } from './resources/components';
import { SignInLeftPartComponent } from './resources/components/sign-in-left-part/sign-in-left-part.component';

@NgModule({
  declarations: [
    SignInComponent,
    RegisterComponent,
    SignInFormComponent,
    RegisterFormComponent,
    SignInLayoutComponent,
    SignInLeftPartComponent,
    SignInLeftPartFooterComponent,
    SignInRightPartComponent
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule, MaterialModule]
})
export class AuthModule {}
