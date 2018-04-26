import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ILinks } from '../../models/links';
import { RequesterService } from '../requester/requester.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class LinksService {

  constructor(private readonly requester: RequesterService) {
  }
  public getAllLinks(): Observable<ILinks[]> {
    return this.requester.get('/api/links');
   }

  public createLinks(body: object): Subscription {
    return this.requester.post('http://localhost:3001/api/links', body)
    .subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
    );
  }
  public deleteLinks(body: object): Subscription {
    const httpOptions = {
      headers: new HttpHeaders ({ 'Content-Type': 'application/json' }), body };
    return this.requester.delete('http://localhost:3001/api/links', httpOptions)
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
