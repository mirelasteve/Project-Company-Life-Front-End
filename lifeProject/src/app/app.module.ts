import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatButtonModule } from '@angular/material/button';
import { NgModule, Input, Inject,  NO_ERRORS_SCHEMA } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginModalComponent, DialogComponent } from './login-modal/login-modal.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ViewChild } from '@angular/core/src/metadata/di';
import { RegisterComponent, RegistrationComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    NavComponent,
    LoginModalComponent,
    RegisterComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    NoopAnimationsModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  entryComponents: [DialogComponent, RegistrationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
