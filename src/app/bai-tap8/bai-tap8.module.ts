import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTap8Component } from './bai-tap8.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';



@NgModule({
  declarations: [BaiTap8Component, DanhSachGheComponent, GheComponent],
  imports: [
    CommonModule
  ],
  exports:[
    BaiTap8Component
  ]
})
export class BaiTap8Module { }
