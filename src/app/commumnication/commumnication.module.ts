import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommumnicationComponent } from './commumnication.component';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { PhimComponent } from './phim/phim.component';



@NgModule({
  declarations: [CommumnicationComponent, DanhSachPhimComponent, PhimComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CommumnicationComponent
  ]
})
export class CommumnicationModule { }
