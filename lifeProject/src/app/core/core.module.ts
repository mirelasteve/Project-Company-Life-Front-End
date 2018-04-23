import { JobDetailsService } from './job-details/job-details.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JobAdsService } from './admin/job-ads.service';
import { CareersService } from './careers/careers.service';
import { RequesterService } from './requester/requester.service';

@NgModule({
  providers: [
    {provide: CareersService, useClass: CareersService },
    RequesterService,
    JobAdsService,
    JobDetailsService,
  ],
})
export class CoreModule { }
