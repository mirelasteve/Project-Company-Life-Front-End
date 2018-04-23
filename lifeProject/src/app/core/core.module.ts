import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CareersService } from './careers.service';
// import { RequesterService } from './requester/requester.service';

@NgModule({
  providers: [
    {provide: CareersService, useClass: CareersService },
    // {provide: RequesterService,  useClass: RequesterService}
  ],
})
export class CoreModule { }
