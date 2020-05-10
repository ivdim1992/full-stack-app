import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutModule } from './resources/home-layout';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeLayoutModule, HomeRoutingModule]
})
export class HomeModule {}
