import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-ngfor-ngclass',
  templateUrl: './baitap-ngfor-ngclass.component.html',
  styleUrls: ['./baitap-ngfor-ngclass.component.scss']
})
export class BaitapNgforNgclassComponent implements OnInit {

  dsSP:any = [];
  constructor() { }

  ngOnInit() {
  }

  themSanPham(maSP, tenSP, gia){
    let objSP = {
      maSP : maSP,
      tenSP: tenSP,
      gia: gia
    }
    this.dsSP.push(objSP);
    console.log(this.dsSP);
  }
}
