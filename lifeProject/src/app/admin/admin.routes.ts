import { Routes } from '@angular/router';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { AddJobComponent } from './add-job/add-job.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { AdminComponent } from './admin.component';
import { AdsComponent } from './ads/ads.component';
import { EditJobComponent } from './ads/edit-job/edit-job.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditLinksComponent } from './links/edit-links/edit-links.component';
import { LinksComponent } from './links/links.component';
import { UsersComponent } from './users/users.component';

export const ROUTES: Routes = [
    { path: '', component: AdminComponent },
    { path: 'users', component: UsersComponent },
    { path: 'ads', component: AdsComponent },
    { path: 'applications', component: ApplicationsComponent },
    { path: 'links', component: LinksComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'addJobs', component: AddJobComponent },
    { path: 'addLinks', component: AddLinkComponent },
    { path: 'addContacts', component: AddContactsComponent },
    { path: 'editJobs', component: EditJobComponent },
    { path: 'editLinks', component: EditLinksComponent },
  ];
