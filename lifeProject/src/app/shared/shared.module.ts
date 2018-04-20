import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarModule } from 'angular-bootstrap-md';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NavModule } from './nav';

@NgModule({
  imports: [
    CommonModule,
    NavModule,
    AngularMaterialModule,
  ],
  declarations: [],
  exports: [
    NavModule,
    AngularMaterialModule,
  ],
})
export class SharedModule { }
