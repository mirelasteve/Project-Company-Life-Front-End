
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequesterService } from '../requester/requester.service';

@Injectable()
export class JobDetailsService {
  constructor(private readonly requester: RequesterService) {
   }
  public getAll(): Observable<object> {
    return this.requester.get('/api/jobads');
   }
}
