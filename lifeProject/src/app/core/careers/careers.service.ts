import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IJobAds } from '../../models/job-ads';
import { RequesterService } from '../requester/requester.service';

@Injectable()
export class CareersService {
  public filteredTable: any;

  constructor(private readonly requester: RequesterService) {
   }

  public getAll(): Observable<IJobAds[]> {
    return this.requester.get('/api/jobads');
   }
  public getTypes(): Observable<object> {
    return this.requester.get('/api/jobtypes');
   }
  public filterData(value: any, dataSource: any): any {
    if (value.title) {
      this.filteredTable = dataSource.data.filter((job) => {
        if (job.title.includes(value.title)) {
          return job;
        }
      });
    } else {
      this.filteredTable = dataSource.data;
    }
    if (value.jobTypeId) {
      this.filteredTable = this.filteredTable.filter((job) => {
        if (job.jobTypeId === +value.jobTypeId) {
          return job;
        }
      });
    }
    if (value.createdAt) {
    const jobCreatedAt = value.createdAt;
    let date = value.createdAt.getMonth() + 1;
    const dateArr = jobCreatedAt.toString().split(' ');
    const monthsCounter = 10;
    if (date < monthsCounter) {
      date = `0${date}`;
    } else {
      date = `${date}`;
    }
    const dateFormat = `${dateArr[3]}-${date}-${dateArr[2]}`;
    value.createdAt = dateFormat;
    this.filteredTable = this.filteredTable.filter((job) => {
        if (job.createdAt > value.createdAt) {
          return job;
        }
      });
    }
    return this.filteredTable;
  }
}
