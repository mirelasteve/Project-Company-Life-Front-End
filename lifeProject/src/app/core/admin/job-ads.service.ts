import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequesterService } from '../requester/requester.service';

@Injectable()
export class JobAdsService {

  constructor(private readonly requester: RequesterService) {
   }

  public getAllJobAds(): Observable<object> {
    return this.requester.get('/api/jobads');
   }
}
