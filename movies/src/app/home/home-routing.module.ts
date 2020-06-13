import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './resources/home-layout/components';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list',
        loadChildren: () => import('./movies/movies.module').then((m) => m.MoviesModule)
      },
      {
        path: 'favorites',
        loadChildren: () => import('./favorites/favorites.module').then((m) => m.FavoritesModule)
      },
      {
        path: 'details',
        loadChildren: () => import('./movie-details/movie-details.module').then((m) => m.MovieDetailsModule)
      },
      {
        path: 'add',
        loadChildren: () => import('./add-movie/add-movie.module').then((m) => m.AddMovieModule)
      },
      {
        path: 'edit',
        loadChildren: () => import('./edit-movie/edit-movie.module').then((m) => m.EditMovieModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
