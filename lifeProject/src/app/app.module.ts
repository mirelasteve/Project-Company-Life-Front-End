import { Inject, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatNativeDateModule, MatInputModule, MatTableModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginModalComponent, DialogComponent } from './login-modal/login-modal.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent, RegistrationComponent } from './register/register.component';
import { CareersComponent } from './careers/careers.component';
import { AppRoutingModule } from './app.routing.module';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { JobDetailsComponent } from './job-details/job-details.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { AdsComponent } from './admin/ads/ads.component';
import { ApplicationsComponent } from './admin/applications/applications.component';
import { ContactsComponent } from './admin/contacts/contacts.component';
import { LinksComponent } from './admin/links/links.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    AdsComponent,
    ApplicationsComponent,
    LinksComponent,
    ContactsComponent,
    AppComponent,
    DialogComponent,
    NavComponent,
    LoginModalComponent,
    RegisterComponent,
    RegistrationComponent,
    CareersComponent,
    ContactComponent,
    JobDetailsComponent,
    HomeComponent,
  ],
  imports: [
    MatTableModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatPaginatorModule,
    MatGridListModule,
    MatDividerModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    NoopAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatInputModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  entryComponents: [DialogComponent, RegistrationComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
