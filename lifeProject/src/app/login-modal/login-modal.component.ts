import {Component, Inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {


  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    console.log('clicked');
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '150px',
      width: '350px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
         });
  }

}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>, ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

}

