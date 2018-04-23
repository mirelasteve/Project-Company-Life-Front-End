import { AppConfig } from './../config/app.config';

import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ICareers } from '../models/careers.model';
import 'rxjs/add/operator/map';

@Injectable()
export class CareersService {
  public  careers: ICareers[];
  public NAMES: string[];
  public data: object;
  constructor(private httpClient: HttpClient, private appConfig: AppConfig) {
     }
  public getAll(): Observable<ICareers[]> {
    return  this.httpClient.get(`${this.appConfig.apiUrl}/jobads`)
    .map(x => <ICareers[]>(x));  }

}
