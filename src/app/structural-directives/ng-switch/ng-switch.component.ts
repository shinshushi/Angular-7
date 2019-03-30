import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {
  public dkSwitch:string = "red";
  constructor() { }

  ngOnInit() {
  }
  ChangeColor(value){
    this.dkSwitch = value;
  }

}
