import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDatepickerModule, MatDialog, MatDialogModule, MatDialogRef,
  MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatNativeDateModule,
  MatPaginatorModule, MatSelectModule, MatSortModule, MatTableDataSource,
  MatTableModule, MatToolbarModule } from '@angular/material';
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
    MatSortModule,
  ],
  declarations: [
    AngularMaterialComponent,
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
    MatCheckboxModule,
    MatSortModule,
  ],
})
export class AngularMaterialModule { }
