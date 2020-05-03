import { Routes, RouterModule } from '@angular/router';
import { SignInLayoutComponent } from './resources/sign-in-layout/containers';
import { SignInComponent, RegisterComponent } from './containers';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: SignInLayoutComponent,
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
