
// import { HttpClient } from '@angular/common/http';
// import { Injectable, OnInit } from '@angular/core';
// import { HttpModule } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import { ICareers } from '../../models/careers.model';
// import { AppConfig } from '../../config/app.config';

// @Injectable()
// export class CareersService {
//   public  careers: ICareers[];
//   public NAMES: string[];
//   public data: object;
//   constructor(private httpClient: HttpClient, private appConfig: AppConfig) {
//      }
//   public getAll(): Observable<ICareers[]> {
//     return  this.httpClient.get(`${this.appConfig.apiUrl}/jobads`)
//     .map(x => <ICareers[]>(x));  }

// }

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequesterService } from '../requester/requester.service';

@Injectable()
export class CareersService {

  constructor(private readonly requester: RequesterService) {
   }

  public getAll(): Observable<object> {
    return this.requester.get('/api/jobads');
   }
}
