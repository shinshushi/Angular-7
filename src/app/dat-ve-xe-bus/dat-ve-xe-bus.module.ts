import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVeXeBusComponent } from './dat-ve-xe-bus.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';

@NgModule({
  declarations: [DatVeXeBusComponent, DanhSachGheComponent, ItemGheComponent],
  exports: [DatVeXeBusComponent, DanhSachGheComponent, ItemGheComponent],
  imports: [
    CommonModule
  ]
})
export class DatVeXeBusModule { }
