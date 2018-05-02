import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IContactDetails } from '../../models/contact-details';
import { RequesterService } from '../requester/requester.service';

@Injectable()
export class ContactDetailsService {

  constructor(private readonly requester: RequesterService) {
  }

  public getAllContactDetails(): Observable<IContactDetails[]> {
    return this.requester.get('/api/contactdetails');
   }
  public getMapAddress(): Observable<IContactDetails[]> {
    return this.requester.get('/api/contactdetails/map');
   }
}
