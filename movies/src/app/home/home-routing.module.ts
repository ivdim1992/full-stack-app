import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './resources/home-layout/components';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
