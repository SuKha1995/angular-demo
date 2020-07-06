import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  isShow: boolean = true;
  isLogin: boolean =false;
  color:string = 'red';
  dssv:any[] = [
    {hoTen: 'kha', lop: 'fe39'},
    {hoTen: 'yen', lop: 'fe39'},
    {hoTen: 'trang', lop: 'fe39'},
    {hoTen: 'linh', lop: 'fe39'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isShow = !this.isShow
  };
  dangNhap(){
    this.isLogin = true;
  };
  dangXuat(){
    this.isLogin = false
  }

}
