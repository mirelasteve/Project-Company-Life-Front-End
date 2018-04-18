import { Inject, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogRef } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DialogComponent, LoginModalComponent } from './login-modal/login-modal.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent, RegistrationComponent } from './register/register.component';

const routes = [
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: NavComponent },
  {path: 'contact', component: ContactComponent },

 ];
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    NavComponent,
    LoginModalComponent,
    RegisterComponent,
    RegistrationComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    NoopAnimationsModule,
    MDBBootstrapModule.forRoot(),

    RouterModule.forRoot(routes),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  entryComponents: [DialogComponent, RegistrationComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
