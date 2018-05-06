import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { IJobAds } from '../../models/job-ads';
import { IJobTypes } from '../../models/job-types';
import { RequesterService } from '../requester/requester.service';

@Injectable()
export class CareersService {
  public filteredTable: any;

  constructor(private readonly requester: RequesterService) {
   }

  public getAll(): Observable<IJobAds[]> {
    return this.requester.get('/api/jobads');
   }
  public getOpenPositions(): Observable<IJobAds[]> {
    return this.requester.get('/api/jobads/open');
   }
  public getTypes(): Observable<IJobTypes[]> {
    return this.requester.get('/api/jobtypes');
   }
  public filterData(value: any, dataSource: MatTableDataSource<IJobAds>): any {
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
    let monthArg = value.createdAt.getMonth() + 1;
    const dateArr = jobCreatedAt.toString().split(' ');
    const monthsCounter = 10;
    if (monthArg < monthsCounter) {
      monthArg = `0${monthArg}`;
    } else {
      monthArg = `${monthArg}`;
    }
    const yearArg = 3;
    const dateArg = 2;
    const dateFormat = `${dateArr[yearArg]}-${monthArg}-${dateArr[dateArg]}`;
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
