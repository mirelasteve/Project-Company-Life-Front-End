import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../../core/login/login.service';
import { NavComponent } from '../nav.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {

  constructor(public dialog: MatDialog) {}
  public openDialog(): void {
    console.log('clicked');
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '150px',
      width: '350px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
         });
  }

}
// tslint:disable-next-line:max-classes-per-file
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
})
export class DialogComponent {
  public username;
  public password;
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              // public navComponent: NavComponent,
              private http: HttpClient,
              private activatedRoute: ActivatedRoute,
              private loginService: LoginService,
              private toastr: ToastrService,
              private router: Router) { }
  private login(): void {
    this.dialogRef.close();
    this.dialogRef.afterClosed().subscribe((result) => {
      console.log(
        {name: this.username, password: this.password },
    );
      this.loginService.login( {email: this.username, password: this.password },
                               { observe: 'response', responseType: 'json' })
                               .subscribe((x: HttpResponse<{token: string}>) => {

        localStorage.setItem('access_token', x.token);
        localStorage.setItem('user_name', this.username);
        // this.navComponent.ngOnInit();

                      },
                                          (err: HttpErrorResponse) => {
          // tslint:disable-next-line:no-magic-numbers
          if (err.status === 302) {
            this.toastr.error(err.error.err);
          }
        });

    });


  }
  private reload(){
    // location.replace('/');
  }
  private onNoClick(): void {
    this.dialogRef.close();
  }

}
