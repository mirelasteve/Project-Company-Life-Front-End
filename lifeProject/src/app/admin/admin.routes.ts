import { Routes } from '@angular/router';
import { AdminAuthGuardService } from '../core/auth-guard/admin-auth-guard.service';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { AddJobComponent } from './add-job/add-job.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { AdminComponent } from './admin.component';
import { AdsComponent } from './ads/ads.component';
import { EditJobComponent } from './ads/edit-job/edit-job.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditContactDetailsComponent } from './contacts/edit-contact-details/edit-contact-details.component';
import { EditLinksComponent } from './links/edit-links/edit-links.component';
import { LinksComponent } from './links/links.component';
import { UsersComponent } from './users/users.component';

export const ROUTES: Routes = [
    { path: '', component: AdminComponent, canActivate: [AdminAuthGuardService] },
    { path: 'users', component: UsersComponent, canActivate: [AdminAuthGuardService] },
    { path: 'ads', component: AdsComponent, canActivate: [AdminAuthGuardService] },
    { path: 'applications/:id', component: ApplicationsComponent, canActivate: [AdminAuthGuardService] },
    { path: 'links', component: LinksComponent, canActivate: [AdminAuthGuardService] },
    { path: 'contacts', component: ContactsComponent, canActivate: [AdminAuthGuardService] },
    { path: 'addJobs', component: AddJobComponent, canActivate: [AdminAuthGuardService] },
    { path: 'addLinks', component: AddLinkComponent, canActivate: [AdminAuthGuardService] },
    { path: 'addContacts', component: AddContactsComponent, canActivate: [AdminAuthGuardService] },
    { path: 'editJobs', component: EditJobComponent, canActivate: [AdminAuthGuardService] },
    { path: 'editLinks', component: EditLinksComponent, canActivate: [AdminAuthGuardService] },
    { path: 'editContacts', component: EditContactDetailsComponent, canActivate: [AdminAuthGuardService] },
  ];
