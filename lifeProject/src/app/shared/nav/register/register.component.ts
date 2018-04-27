
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule,  NgModel } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatIconRegistry} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { RegisterUsersService } from '../../../core/users/users.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  {

  constructor(public dialog: MatDialog) { }
  // public ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  private openRegister(): void {
    console.log('clicked');
    const dialogRef = this.dialog.open(RegistrationComponent, {
      height: '100px',
      width: '4000px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
         });
  }

}

// tslint:disable-next-line:max-classes-per-file
@Component ({
  selector: 'app-reg',
  templateUrl: './register.component.html',
})
export class RegistrationComponent {
  public email: string;
  public password: string;
  constructor(public dialogRef: MatDialogRef<RegistrationComponent>, private http: HttpClient,
              private activatedRoute: ActivatedRoute, private userService: RegisterUsersService ) {
    // dialogRef.disableClose = true;
   }
  public noClick(): void {
    this.dialogRef.close();
  }
  public reg(): void {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe((result) => {
      console.log(
        {email: this.email,
         password: this.password,
         isAdmin: 'no' },
    );
      this.userService.registerUser({email: this.email,
                                     password: this.password,
                                     isAdmin: null});

    });
  }

}
