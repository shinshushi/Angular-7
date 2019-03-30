import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Bt2LayoutComponent} from './bt2-layout.component';
import {Bt2HeaderComponent} from './bt2-header/bt2-header.component';
import {Bt2CarouselComponent} from './bt2-carousel/bt2-carousel.component';
import {Bt2WhatWeDoComponent} from './bt2-what-we-do/bt2-what-we-do.component';
import {Bt2ContactComponent} from './bt2-contact/bt2-contact.component';
import {Bt2ItemComponent} from './bt2-item/bt2-item.component';
import {Bt2FooterComponent} from './bt2-footer/bt2-footer.component';

@NgModule({
  declarations: [
    Bt2LayoutComponent,
    Bt2HeaderComponent,
    Bt2CarouselComponent,
    Bt2WhatWeDoComponent,
    Bt2ContactComponent,
    Bt2ItemComponent,
    Bt2FooterComponent
  ],
  exports: [
    Bt2LayoutComponent,
    Bt2HeaderComponent,
    Bt2CarouselComponent,
    Bt2WhatWeDoComponent,
    Bt2ContactComponent,
    Bt2ItemComponent,
    Bt2FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Bt2LayoutModule { }
