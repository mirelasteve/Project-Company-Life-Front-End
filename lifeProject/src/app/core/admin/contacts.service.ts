import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { IContactDetails } from '../../models/contact-details';
import { RequesterService } from '../requester/requester.service';

@Injectable()
export class ContactsService {

  constructor(private readonly requester: RequesterService) {
  }
  public getAllContactDetails(): Observable<IContactDetails[]> {
    return this.requester.get('/api/contactdetails');
  }
  public createContactDetails(body: object): Subscription {
    console.log(body);
    return this.requester.post('http://localhost:3001/api/contactdetails', body)
    .subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
    );
  }

  public updateContactDetails(body: object): Subscription {
    return this.requester.put('http://localhost:3001/api/contactdetails', body)
    .subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
    );
  }

  public deleteContactDetails(body: object): Subscription {
    const httpOptions = {
      headers: new HttpHeaders ({ 'Content-Type': 'application/json' }), body };
    return this.requester.delete('http://localhost:3001/api/contactdetails', httpOptions)
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
