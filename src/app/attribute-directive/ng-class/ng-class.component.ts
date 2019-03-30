import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {

  public hasColor:boolean = true;
  public hasFontSize:boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
