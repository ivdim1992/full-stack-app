import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MoviesComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
