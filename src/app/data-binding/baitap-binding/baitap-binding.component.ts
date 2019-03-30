import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-binding',
  templateUrl: './baitap-binding.component.html',
  styleUrls: ['./baitap-binding.component.scss']
})
export class BaitapBindingComponent implements OnInit {

  public email:string = "";
  public fullName:string = "";
  constructor() { }

  ngOnInit() {
  }
  Submit(param){
    this.fullName = param.value;
  }

}
