import { Component, OnInit, Input } from '@angular/core';
//import { getHashes } from 'crypto';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {

  @Input() ghe;
  duocChon = false;
  constructor() { }

  ngOnInit() {
  }

  gheDuocChon(){
    this.duocChon = !this.duocChon;
  }

}
