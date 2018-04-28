import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IJobAds } from '../../models/job-ads';

@Injectable()
export class RequesterService {

  private REQUEST_DOMAIN = 'http://localhost:3001';

  constructor(private readonly http: HttpClient) { }

  public get(resource: string, headers?: HttpHeaders): Observable<any>  {
      return this.http.get(this.REQUEST_DOMAIN + resource, { headers });
  }

  public post(resource: string, body: any, headers?: HttpHeaders): Observable<any>  {
      return this.http.post(resource, body, {
          headers: new HttpHeaders().set('Content-type', 'application/json'),
    });
  }

  public put(resource: string, body: any, headers?: HttpHeaders): Observable<any>  {
      return this.http.put(resource, body, {
        headers: new HttpHeaders().set('Content-type', 'application/json'),
  });
  }

  public delete(resource: string, httpOptions: any): Observable<any>  {
    return this.http.delete(resource, httpOptions);
}
}
