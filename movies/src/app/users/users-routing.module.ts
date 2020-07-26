import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './containers';
import { HomeLayoutComponent } from '../movies/resources/home-layout/components';
import { UserResolver } from './resolver';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: ':id',
        component: UserDetailsComponent,
        canActivate: [UserResolver]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
