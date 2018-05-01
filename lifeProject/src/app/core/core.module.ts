import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactsService } from './admin/contacts.service';
import { JobAdsService } from './admin/job-ads.service';
import { JobApplicationsService } from './admin/job-applications.service';
import { LinksService } from './admin/links.service';
import { UsersService } from './admin/users.service';
import { AdminAuthGuardService } from './auth-guard/admin-auth-guard.service';
import { UsersAuthGuardService } from './auth-guard/users-auth-guard.service';
import { CareersService } from './careers/careers.service';
import { ContactDetailsService } from './contacts/contacts.service';
import { CreateApplicationService } from './job-application/create-application.service';
import { JobDetailsService } from './job-details/job-details.service';
import { LoginService } from './login/login.service';
import { RequesterService } from './requester/requester.service';
import { TransferJobAdsService } from './transfer-data/transfer-data.service';
import { RegisterUsersService } from './users/users.service';

@NgModule({
  providers: [
    {provide: CareersService, useClass: CareersService },
    RequesterService,
    JobAdsService,
    JobApplicationsService,
    LinksService,
    ContactsService,
    JobDetailsService,
    CreateApplicationService,
    TransferJobAdsService,
    UsersService,
    RegisterUsersService,
    LoginService,
    ContactDetailsService,
    UsersAuthGuardService,
    AdminAuthGuardService,
  ],
})
export class CoreModule { }
