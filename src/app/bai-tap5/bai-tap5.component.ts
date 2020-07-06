import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap5',
  templateUrl: './bai-tap5.component.html',
  styleUrls: ['./bai-tap5.component.scss']
})
export class BaiTap5Component implements OnInit {
  name:string = 'Login';
  isLogin:boolean = false;
  
  


  constructor() { }

  ngOnInit(): void {
  }
  dangNhap(useName:string, passWord:string){
    if(useName === 'cybersoft' && passWord === 'cybersoft'){
      this.isLogin = true;
      this.name = 'PhamKha';
      

    }
  };
  dangXuat(){
    this.isLogin = false
    
  }

}
