import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ExpandableTableComponent } from './expandable-table-component/expandable-table.component';
import { TableModule } from '../table/table.module';

@NgModule({
  declarations: [
    ExpandableTableComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    TableModule
  ],
  exports: [
    ExpandableTableComponent
  ]
})
export class ExpandableTableModule { }
