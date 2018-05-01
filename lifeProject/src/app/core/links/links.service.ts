import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ILinks } from '../../models/links';
import { RequesterService } from '../requester/requester.service';

@Injectable()
export class MainPageLinksService {

  constructor(private readonly requester: RequesterService) {
  }
  public getSocialLinks(): Observable<ILinks[]> {
    return this.requester.get('/api/links/homepage/social');
   }

  public getActionLinks(): Observable<ILinks[]> {
    return this.requester.get('/api/links/homepage/action');
   }

}
