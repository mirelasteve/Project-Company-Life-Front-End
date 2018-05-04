import { LoginService } from './../../../core/login/login.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
      height: '400px',
      width: '400px',
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
  styleUrls: ['./register.component.scss'],
})
export class RegistrationComponent {
  public email: string;
  public password: string;
  public repeatPassword: string;
  constructor(public dialogRef: MatDialogRef<RegistrationComponent>, private http: HttpClient,
              private activatedRoute: ActivatedRoute, private userService: RegisterUsersService,
              private loginService: LoginService, private toastr: ToastrService ) {
    // dialogRef.disableClose = true;
   }
  public isValidEmail(name: string): boolean {
    const nameMatch = this.email;
    const result = nameMatch
        // tslint:disable-next-line:max-line-length
        .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g);
    const maxLength = 1024;
    if (result && name.length < maxLength) {
      return true;
    } else {
      return false;
    }
}
  public isValidPassword(pass: string): boolean {
    const validMinLength = 7;
    const validMaxLength = 255;
    const passMatch = pass;
    console.log(pass, passMatch);
    const result = passMatch.match(/(?=.*\d)(?=.*[A-Z])(?=.*\W).{8,8}/g);
    if (pass.length > validMinLength && pass.length < validMaxLength && result) {
              return true;
  }    else {
              return false;
  }
}
  public areSame(): boolean {
  if (this.password === this.repeatPassword) {

    return true;
  }  else {
    return false;
  }
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
                                     isAdmin: null}).add(()=>{
                                      this.loginService.login( {email: this.email,
                                        password: this.password},
                                                                { observe: 'response', responseType: 'json' })
                                                                      .subscribe((x: {token: string}) => {
                                                console.log(x.token);
                                                localStorage.setItem('access_token', x.token);
                                                localStorage.setItem('user_name', this.email);
                                                setTimeout(() => {
                                                  window.location.reload();
                                                });
                                               // this.navComponent.ngOnInit();

                                                             });
                                     })



    });
  }
}
