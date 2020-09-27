import { Routes, RouterModule } from '@angular/router';
import { SignInComponent, RegisterComponent } from './containers';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './guard';
import { SignInLayoutComponent } from './resources/components';

const routes: Routes = [
  {
    path: '',
    component: SignInLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'sign-in'
      },
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
