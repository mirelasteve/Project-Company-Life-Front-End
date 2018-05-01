import { Routes } from '@angular/router';
import { AdminAuthGuardService } from '../core/auth-guard/admin-auth-guard.service';
import { UsersAuthGuardService } from '../core/auth-guard/users-auth-guard.service';
import { CareersComponent } from './careers.component';
import { JobApplicationComponent } from './job-application/job-application.component';
import { JobDetailsComponent } from './job-details/job-details.component';

export const ROUTES: Routes = [
    { path: '', component: CareersComponent },
    { path: 'jobs/:id', component: JobDetailsComponent, canActivate: [UsersAuthGuardService] },
    { path: 'jobs/:id/job-application/:title', component: JobApplicationComponent, canActivate: [UsersAuthGuardService]},
  ];
