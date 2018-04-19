import { Routes } from '@angular/router';
import { AddJobComponent } from './add-job/add-job.component';
import { AppComponent } from './app.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { AdsComponent } from './admin/ads/ads.component';
import { ApplicationsComponent } from './admin/applications/applications.component';
import { ContactsComponent } from './admin/contacts/contacts.component';
import { LinksComponent } from './admin/links/links.component';
import { HomeComponent } from './home/home.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'contact', component: ContactComponent},
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    { path: 'careers', children: [
      { path: '', component: CareersComponent, pathMatch: 'full' },
      { path: 'jobs/1', component: JobDetailsComponent },
    ]},
    { path: 'admin', children: [
      { path: '', component: AdminComponent },
      { path: 'users', component: UsersComponent },
      { path: 'ads', component: AdsComponent },
      { path: 'applications', component: ApplicationsComponent },
      { path: 'links', component: LinksComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'addJob', component: AddJobComponent },
  ]},
  ];
