import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  message: string = 'hello cybersoft';

  fullName: string = '';
  email: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  changeData(name){
    console.log(name)
    this.message = name
  };
  changeInputData(fullName) {
    this.fullName = fullName
    console.log(fullName)
  }

}
