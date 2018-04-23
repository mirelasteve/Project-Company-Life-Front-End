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
      return this.http.post(this.REQUEST_DOMAIN + resource, body, { headers });
  }

  public put(resource: string, body: any, headers?: HttpHeaders): Observable<any>  {
      return this.http.put(this.REQUEST_DOMAIN + resource, body, { headers });
  }
}
