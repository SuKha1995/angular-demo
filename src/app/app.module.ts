import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import {Baitap1Module} from './baitap1/baitap1.module';
import {Baitap2Module} from './baitap2/baitap2.module';
import {DataBindingModule} from './data-binding/data-binding.module';
import {DirectivesModule} from './directives/directives.module';
import {BaiTap6Module} from './bai-tap6/bai-tap6.module';
import {BaiTap5Module} from './bai-tap5/bai-tap5.module';
import {CommumnicationModule} from './commumnication/commumnication.module';
import { BaiTap8Module } from './bai-tap8/bai-tap8.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module'
import { HomeModule } from './home/home.module';
import {Routes, Router, RouterModule} from '@angular/router';
import { AdminModule } from './admin/admin.module';
import {AuthenticationModule} from './authentication/authentication.module'
import { SigninComponent } from './authentication/signin/signin.component';
import { SingupComponent } from './authentication/singup/singup.component';
import {HttpClientModule} from '@angular/common/http';

const router: Routes = [
  {path: '' , loadChildren: ()=> HomeModule},
  {path: 'admin', loadChildren:()=> AdminModule},
  // {path: '*' , component: NotFound}
]

@NgModule({
  declarations: [ //khai báo component
    AppComponent,
    DemoComponent,
   
  ],
  imports: [ //khai báo module
    BrowserModule, Baitap1Module, Baitap2Module,DataBindingModule,DirectivesModule,BaiTap6Module,BaiTap5Module,CommumnicationModule,
    BaiTap8Module,
    BrowserAnimationsModule,SharedModule,HttpClientModule,
    
    RouterModule.forRoot(router),
    // HomeModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
