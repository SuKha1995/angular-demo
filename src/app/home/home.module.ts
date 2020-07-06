import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailComponent } from './detail/detail.component';
import { NewsComponent } from './news/news.component';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home.component';

const router: Routes = [
  {path: '' , component: HomeComponent,
  children: [
    {path:'', component: HomePageComponent},
    {path: 'detail/:maPhim' , component: DetailComponent},
    {path: 'news', component: NewsComponent}
  ]}
]



@NgModule({
  declarations: [HomePageComponent, DetailComponent, NewsComponent, HomeComponent],
  imports: [
    CommonModule, RouterModule.forChild(router)
  ] 
})
export class HomeModule { }
