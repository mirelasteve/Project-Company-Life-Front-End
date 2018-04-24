import { Routes } from '@angular/router';
import { CareersComponent } from './careers.component';
import { JobApplicationComponent } from './job-application/job-application.component';
import { JobDetailsComponent } from './job-details/job-details.component';

export const ROUTES: Routes = [
    { path: '', component: CareersComponent },
    { path: 'jobs/:id', component: JobDetailsComponent },
    {path: 'jobs/:id/job-application/:title', component: JobApplicationComponent},
  ];
