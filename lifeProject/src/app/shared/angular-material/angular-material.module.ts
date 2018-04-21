import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDatepickerModule, MatDialog, MatDialogModule, MatDialogRef,
  MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule,
  MatPaginatorModule, MatSelectModule, MatSort, MatTableDataSource, MatTableModule, MatToolbarModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AngularMaterialComponent } from './angular-material.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  declarations: [
    AngularMaterialComponent,
    MatSort,
  ],
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSort,
    MatCheckboxModule,
  ],
})
export class AngularMaterialModule { }
