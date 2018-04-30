import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatToolbarModule  } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
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
