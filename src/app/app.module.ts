import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Bt1LayoutComponent } from './bt1-layout/bt1-layout.component';
import { Bt1HeaderComponent } from './bt1-layout/bt1-header/bt1-header.component';
import { Bt1ContentsComponent } from './bt1-layout/bt1-contents/bt1-contents.component';
import { Bt1SidebarComponent } from './bt1-layout/bt1-sidebar/bt1-sidebar.component';
import { Bt1FooterComponent } from './bt1-layout/bt1-footer/bt1-footer.component';
import {Bt2LayoutModule} from './bt2-layout/bt2-layout.module';
import {DataBindingModule} from './data-binding/data-binding.module';
import {StructuralDirectivesModule} from './structural-directives/structural-directives.module';
import {BaitapNgifModule} from './baitap-ngif/baitap-ngif.module';
import {AttributeDirectiveModule} from './attribute-directive/attribute-directive.module';
import {BaitapNgforNgclassModule} from './baitap-ngfor-ngclass/baitap-ngfor-ngclass.module';
import {NgContentModule} from './ng-content/ng-content.module';
import {InteractionModule} from './interaction/interaction.module';
import {DatVeXeBusModule} from './dat-ve-xe-bus/dat-ve-xe-bus.module';

@NgModule({
  declarations: [
    AppComponent,
    Bt1LayoutComponent,
    Bt1HeaderComponent,
    Bt1ContentsComponent,
    Bt1SidebarComponent,
    Bt1FooterComponent,
  ],
  imports: [
    BrowserModule,
    Bt2LayoutModule,
    DataBindingModule,
    StructuralDirectivesModule,
    BaitapNgifModule,
    AttributeDirectiveModule,
    BaitapNgforNgclassModule,
    NgContentModule,
    InteractionModule,
    DatVeXeBusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
