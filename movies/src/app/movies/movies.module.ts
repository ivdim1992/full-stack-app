import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { GenreComponent, HeaderComponent, HomeLayoutComponent, SideNavComponent } from './resources/components';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent, HomeLayoutComponent, GenreComponent, SideNavComponent],
  imports: [CommonModule, MoviesRoutingModule, MatIconModule, SharedModule, FlexLayoutModule, MatButtonModule]
})
export class MoviesModule {}
