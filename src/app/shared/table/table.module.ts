import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { TableComponent } from './component/table.component';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
exports: [
  TableComponent
]
})
export class TableModule { }
