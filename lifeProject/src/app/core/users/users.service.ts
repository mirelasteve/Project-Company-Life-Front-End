import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { RequesterService } from '../requester/requester.service';

@Injectable()
export class UsersService {

  constructor(private readonly requester: RequesterService) { }
  public registerUser(data: object): Subscription {
    console.log(data);
    return this.requester.post('http://localhost:3001/api/register', data).subscribe(
      (res) => {
        console.log(data);
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
    );
   }
}
