import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
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

export const ROUTES: Routes = [
    { path: '', component: AdminComponent},
    { path: 'users', component: UsersComponent},
    { path: 'ads', component: AdsComponent},
    { path: 'applications/:id', component: ApplicationsComponent},
    { path: 'links', component: LinksComponent},
    { path: 'contacts', component: ContactsComponent},
    { path: 'addJobs', component: AddJobComponent},
    { path: 'addLinks', component: AddLinkComponent},
    { path: 'addContacts', component: AddContactsComponent},
    { path: 'editJobs', component: EditJobComponent},
    { path: 'editLinks', component: EditLinksComponent},
    { path: 'editContacts', component: EditContactDetailsComponent},
  ];
