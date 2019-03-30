import { Component, OnInit, ViewChildren, QueryList, ViewChild, ElementRef } from '@angular/core';
import {ItemPhimComponent} from '../item-phim/item-phim.component';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.scss']
})
export class DanhSachPhimComponent implements OnInit {
  @ViewChildren(ItemPhimComponent) tagListItemPhim: QueryList<ItemPhimComponent>;
  //DOM trong angular
  @ViewChild('maphim') inputMaPhim: ElementRef;

  danhSachPhim = [
    {maPhim: 1, tenPhim: "Minions", gia: "85000", hinhAnh:"/assets/images/minions.jpg"},
    {maPhim: 2, tenPhim: "Home", gia: "85000", hinhAnh:"/assets/images/home.jpg"},
    {maPhim: 3, tenPhim: "Harvie", gia: "85000", hinhAnh:"/assets/images/harvie.jpg"},
    {maPhim: 4, tenPhim: "Insideout", gia: "85000", hinhAnh:"/assets/images/insideout.jpg"},
  ];
  danhSachLike = [
    {maPhim: 1, tenPhim: "Minions", soLike: 0},
    {maPhim: 2, tenPhim: "Home", soLike: 0},
    {maPhim: 3, tenPhim: "Harvie", soLike: 0},
    {maPhim: 4, tenPhim: "Insideout", soLike: 0},
  ];
  constructor() { }

  ngOnInit() {
  }

  like(movie){
    // this.danhSachLike.map(item => {
    //   if(item.maPhim === movie.maPhim){
    //     item.soLike++;
    //   }
    // })
    let phim = this.danhSachLike.find(item => item.maPhim === movie.maPhim);
    phim.soLike++;
  }
  themPhim(movie){
    this.danhSachPhim.push(movie);
    console.log(this.danhSachPhim);
  }

  viewChildren(){
    let maPhim = this.inputMaPhim.nativeElement.value;
    maPhim = parseInt(maPhim);
    this.tagListItemPhim.map(item => {
      if(item.movie.maPhim === maPhim){
        item.movie.gia = 100000;
      }
    })
  }

}
