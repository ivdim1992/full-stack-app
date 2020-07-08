import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './containers';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '@app/resources/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserStoreModule } from './+store';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    UserStoreModule
  ]
})
export class UsersModule {}
