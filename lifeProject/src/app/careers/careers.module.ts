
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CareersComponent } from './careers.component';
import { CareersRoutingModule } from './careers.routing.module';
import { JobApplicationComponent } from './job-application/job-application.component';
import { JobDetailsComponent } from './job-details/job-details.component';

import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    CareersRoutingModule,
    FormsModule,
    SharedModule,

  ],
  declarations: [
    CareersComponent,
    JobDetailsComponent,
    JobApplicationComponent,
  ],
  exports: [
    CareersComponent,
    JobDetailsComponent,
  ],
})
export class CareersModule { }
