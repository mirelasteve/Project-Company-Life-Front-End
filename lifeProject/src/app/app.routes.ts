import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { JobDetailsComponent } from './job-details/job-details.component';

export const ROUTES: Routes = [
    { path: 'home', component: AppComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'contact', component: ContactComponent, pathMatch: 'full' },
    { path: 'careers', children: [
      { path: '', component: CareersComponent, pathMatch: 'full' },
      { path: 'jobs/1', component: JobDetailsComponent }
    ]
  },
  ];
