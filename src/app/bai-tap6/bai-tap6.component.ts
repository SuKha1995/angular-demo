import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap6',
  templateUrl: './bai-tap6.component.html',
  styleUrls: ['./bai-tap6.component.scss']
})
export class BaiTap6Component implements OnInit {

  dssp:any[]=[
    {maSP: 1,tenSP: 'iphone',gia: 250000},
    {maSP: 1,tenSP: 'iphone',gia: 250000},
    {maSP: 1,tenSP: 'iphone',gia: 250000}
  
  
  ]
  

  constructor() { }

  ngOnInit(): void {
  }
  themSanPham(maSP:string, tenSP:string, gia:string){
    const sanPham= {maSP, tenSP,gia}
    this.dssp.push(sanPham)
  }

}
