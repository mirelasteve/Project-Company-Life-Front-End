import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactsService } from './admin/contacts.service';
import { JobAdsService } from './admin/job-ads.service';
import { JobApplicationsService } from './admin/job-applications.service';
import { LinksService } from './admin/links.service';
import { UsersService } from './admin/users.service';
import { CareersService } from './careers/careers.service';
import { JobDetailsService } from './job-details/job-details.service';
import { RequesterService } from './requester/requester.service';

@NgModule({
  providers: [
    {provide: CareersService, useClass: CareersService },
    RequesterService,
    JobAdsService,
    JobApplicationsService,
    LinksService,
    ContactsService,
    UsersService,
    JobDetailsService,
  ],
})
export class CoreModule { }
