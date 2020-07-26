import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EditMovieComponent } from './containers';
import { EditMovieResolver } from './resolver';

export const routes: Routes = [
  {
    path: ':id',
    component: EditMovieComponent,
    canActivate: [EditMovieResolver]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditMovieRoutingModule {}
