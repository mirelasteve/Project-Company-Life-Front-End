import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { RequesterService } from '../requester/requester.service';
@Injectable()
export class CreateApplicationService {

  constructor(private readonly requester: RequesterService) { }
  public createApplication(data: any): Subscription {
    return this.requester.postFiles('http://localhost:3001/api/jobapplications', data).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
    );
   }

}
