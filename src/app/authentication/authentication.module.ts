import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SingupComponent } from './singup/singup.component';
import {Routes, RouterModule, Router} from '@angular/router';

const router: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: ' signup', component:SingupComponent}
]

@NgModule({
  declarations: [SigninComponent, SingupComponent],
  imports: [
    CommonModule, RouterModule.forChild(router)
  ]
}) 
export class AuthenticationModule { }
