import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { IJobAds } from '../../models/job-ads';
import { RequesterService } from '../requester/requester.service';

@Injectable()
export class JobAdsService {

  constructor(private readonly requester: RequesterService) {
   }

  public getAllJobAds(): Observable<IJobAds[]> {
    return this.requester.get('/api/jobads');
   }
  public createJobAds(body: object): Subscription {
    return this.requester.post('http://localhost:3001/api/jobads', body)
    .subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
    );
  }
}
