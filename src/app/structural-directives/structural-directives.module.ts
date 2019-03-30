import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectivesComponent } from './structural-directives.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [StructuralDirectivesComponent, NgIfComponent, NgSwitchComponent, NgForComponent],
  exports: [StructuralDirectivesComponent, NgIfComponent, NgSwitchComponent, NgForComponent],
  imports: [
    CommonModule
  ]
  
})
export class StructuralDirectivesModule { }
