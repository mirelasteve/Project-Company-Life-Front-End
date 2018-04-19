import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'angular-bootstrap-md';
import { NavModule } from './nav';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    NavModule,
    AngularMaterialModule
  ],
  declarations: [],
  exports: [
    NavModule,
    AngularMaterialModule,
  ]
})
export class SharedModule { }
