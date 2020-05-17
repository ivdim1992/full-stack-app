import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MoviesComponent } from './containers';
import { MoviesListResolver } from './resolver';

export const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    canActivate: [MoviesListResolver]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
