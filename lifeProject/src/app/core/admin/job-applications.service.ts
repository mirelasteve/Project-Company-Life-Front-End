import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IJobApplications } from '../../models/job-applications';
import { RequesterService } from '../requester/requester.service';

@Injectable()
export class JobApplicationsService {

  constructor(private readonly requester: RequesterService) {
  }
  public getAllJobApplications(): Observable<IJobApplications[]> {
    return this.requester.get('/api/jobapplications/3');
   }
}
