import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DialogComponent } from './login-modal/login-modal.component';
import { RegistrationComponent } from './register/register.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
 export class NavComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
  }

  private openDialog(): void {
    console.log('clicked');
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      height: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
         });
  }
  private openRegister(): void {
    console.log('clicked');
    const dialogRef = this.dialog.open(RegistrationComponent, {
      height: '150px',
      width: '350px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
         });
  }
}
