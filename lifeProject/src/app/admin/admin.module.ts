import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatToolbarModule  } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, Routes } from '@angular/router';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { SharedModule } from '../shared/shared.module';
import { AdminNavModule } from './admin-nav/admin-nav.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { AddJobComponent } from './ads/add-job/add-job.component';
import { AdsComponent } from './ads/ads.component';
import { EditJobComponent } from './ads/edit-job/edit-job.component';
import { ApplicationsComponent } from './applications/applications.component';
import { AddContactsComponent } from './contacts/add-contacts/add-contacts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditContactDetailsComponent } from './contacts/edit-contact-details/edit-contact-details.component';
import { AddLinkComponent } from './links/add-link/add-link.component';
import { EditLinksComponent } from './links/edit-links/edit-links.component';
import { LinksComponent } from './links/links.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule,
    AdminNavModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  declarations: [
   AdminComponent,
   UsersComponent,
   AdsComponent,
   ApplicationsComponent,
   LinksComponent,
   ContactsComponent,
   AddJobComponent,
   AddLinkComponent,
   AddContactsComponent,
   EditJobComponent,
   EditLinksComponent,
   EditContactDetailsComponent,
  ],
  exports: [
    AdminComponent,
    UsersComponent,
    AdsComponent,
    ApplicationsComponent,
    LinksComponent,
    ContactsComponent,
    AddJobComponent,
    AddLinkComponent,
    AddContactsComponent,
    EditJobComponent,
    EditLinksComponent,
  ],
})
export class AdminModule { }
