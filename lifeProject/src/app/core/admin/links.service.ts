import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ILinks } from '../../models/links';
import { RequesterService } from '../requester/requester.service';

@Injectable()
export class LinksService {

  constructor(private readonly requester: RequesterService) {
  }
  public getAllLinks(): Observable<ILinks[]> {
    return this.requester.get('/api/links');
   }

}
