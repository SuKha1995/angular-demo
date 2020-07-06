import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap2Component } from './baitap2.component';
import { HerderComponent } from './herder/herder.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { SliderComponent } from './slider/slider.component';
import { IndexContentComponent } from './index-content/index-content.component';
import { ItemsComponent } from './items/items.component';



@NgModule({
  declarations: [Baitap2Component, HerderComponent, FooterComponent, IndexComponent, SliderComponent, IndexContentComponent, ItemsComponent],
  imports: [
    CommonModule
  ],
  exports:[Baitap2Component]
})
export class Baitap2Module { }
