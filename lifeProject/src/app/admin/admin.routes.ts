import { Routes } from '@angular/router';
import { AddJobComponent } from './add-job/add-job.component';
import { AdminComponent } from './admin.component';
import { AdsComponent } from './ads/ads.component';
import { ApplicationsComponent } from './applications/applications.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LinksComponent } from './links/links.component';
import { UsersComponent } from './users/users.component';

export const ROUTES: Routes = [
    { path: '', component: AdminComponent },
    { path: 'users', component: UsersComponent },
    { path: 'ads', component: AdsComponent },
    { path: 'applications', component: ApplicationsComponent },
    { path: 'links', component: LinksComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'addJob', component: AddJobComponent },
  ];
