import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FavoritesComponent } from './containers';
import { FavoriteMoviesResolver } from './resolver';

export const routes: Routes = [
  {
    path: '',
    component: FavoritesComponent,
    canActivate: [FavoriteMoviesResolver]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule {}
