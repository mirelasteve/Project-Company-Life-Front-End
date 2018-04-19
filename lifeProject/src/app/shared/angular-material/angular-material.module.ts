import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialComponent } from './angular-material.component';
import { MatToolbarModule, MatTableModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule, MatPaginatorModule, MatDividerModule, MatMenuModule, MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDialog, MatDialogRef, MatSort, MatTableDataSource } from '@angular/material';

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
  ]
})
export class AngularMaterialModule { }
