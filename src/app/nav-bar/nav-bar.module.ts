import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { NavBarComponent } from './component/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
