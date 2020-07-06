import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit {
  @Input() phim:any;
  @Output() eventPhim = new EventEmitter

  constructor() { }

  ngOnInit(): void {
    console.log(this.phim)
  }
  chonPhim(){
    //đẩy phim đang chọn  ra ngoài lớp cha
    this.eventPhim.emit(this.phim)

  }

}
