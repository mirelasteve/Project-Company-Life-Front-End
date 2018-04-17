import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openRegister(): void {
    console.log('clicked');
    const dialogRef = this.dialog.open(RegistrationComponent, {

      height: '180px',
      width: '350px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
         });
  }
  ngOnInit() {
  }
}
@Component ({
  selector: 'app-reg',
  templateUrl: './register.component.html',
})
export class RegistrationComponent {
  constructor(public dialogRef: MatDialogRef<RegistrationComponent>, ) {
    dialogRef.disableClose = true;
   }
  noClick(): void {
    this.dialogRef.close();
  }
}
