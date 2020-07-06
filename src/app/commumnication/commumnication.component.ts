import { Component, OnInit ,ViewChild} from '@angular/core';
import{DanhSachPhimComponent} from './danh-sach-phim/danh-sach-phim.component'

@Component({
  selector: 'app-commumnication',
  templateUrl: './commumnication.component.html',
  styleUrls: ['./commumnication.component.scss']
})
export class CommumnicationComponent implements OnInit {

  @ViewChild(DanhSachPhimComponent) listMovie: DanhSachPhimComponent;


  constructor() { }

  ngOnInit(): void {
  }
  themPhim(maPhim,tenPhim,gia,hinhAnh){
    this.listMovie.danhSachPhim.push({maPhim,tenPhim,gia,hinhAnh})
  }

}
