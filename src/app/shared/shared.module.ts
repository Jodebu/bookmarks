import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { ExpandableTableModule } from './expandable-table/expandable-table.module';
import { TableModule } from './table/table.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    AngularMaterialModule,
    NavBarModule,
    ExpandableTableModule,
    TableModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    AngularMaterialModule,
    NavBarModule,
    ExpandableTableModule,
    TableModule,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
