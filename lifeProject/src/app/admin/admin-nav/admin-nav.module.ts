import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavComponent } from './admin-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
  ],
  declarations: [
    AdminNavComponent,
  ],
  exports: [
    AdminNavComponent,
  ],
})
export class AdminNavModule { }
