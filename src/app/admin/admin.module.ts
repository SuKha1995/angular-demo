import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { MovieComponent } from './movie/movie.component';

import {Routes, RouterModule} from '@angular/router';
import { AdminComponent } from './admin.component';

const router: Routes = [
 {path: '' , component: AdminComponent,
 children: [
   {path: '' , redirectTo: 'user', pathMatch: 'full'},
    {path: 'user' , component: UserComponent},
    {path: 'movie' , component: MovieComponent}
 ]}
]



@NgModule({
  declarations: [UserComponent, MovieComponent, AdminComponent],
  imports: [
    CommonModule, RouterModule.forChild(router)
  ]
}) 
export class AdminModule { }
