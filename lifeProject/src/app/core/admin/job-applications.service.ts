import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { IJobApplications } from '../../models/job-applications';
import { RequesterService } from '../requester/requester.service';

@Injectable()
export class JobApplicationsService {

  constructor(private readonly requester: RequesterService) {
  }
  public getAllJobApplications(): Observable<IJobApplications[]> {
    return this.requester.get('/api/jobapplications');
   }
  public getAllJobApplicationsForJobAd(id: number): Observable<IJobApplications[]> {
    return this.requester.get('/api/jobapplications/' + id);
   }
  public updateJobApplication(body: object, id: number): Subscription {
    return this.requester.put('http://localhost:3001/api/jobapplications/' + id, body)
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
