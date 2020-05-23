import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieDetailsResolver } from './resolver';
import { MovieDetailsComponent } from './containers';

export const routes: Routes = [
  {
    path: ':id',
    component: MovieDetailsComponent,
    canActivate: [MovieDetailsResolver]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieDetailsRoutingModule {}
