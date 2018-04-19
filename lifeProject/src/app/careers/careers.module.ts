import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersRoutingModule } from './careers.routing.module';
import { FormsModule } from '@angular/forms';
import { JobDetailsComponent } from './job-details/job-details.component';
import { CareersComponent } from './careers.component';
import { SharedModule } from '../shared/shared.module';

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
  ],
  exports: [
    CareersComponent,
    JobDetailsComponent,
  ]
})
export class CareersModule { }
