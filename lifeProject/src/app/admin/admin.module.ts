import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatToolbarModule  } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, Routes } from '@angular/router';
import { FroalaViewModule, FroalaEditorModule } from 'angular-froala-wysiwyg';
import { SharedModule } from '../shared/shared.module';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { AddJobComponent } from './add-job/add-job.component';
import { AddLinkComponent } from './add-link/add-link.component';
import "froala-editor/js/froala_editor.pkgd.min.js";
import { AdminNavModule } from './admin-nav/admin-nav.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { AdsComponent } from './ads/ads.component';
import { EditJobComponent } from './ads/edit-job/edit-job.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditContactDetailsComponent } from './contacts/edit-contact-details/edit-contact-details.component';
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
