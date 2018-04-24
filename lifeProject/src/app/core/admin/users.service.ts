import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IUsers } from '../../models/users';
import { RequesterService } from '../requester/requester.service';

@Injectable()
export class UsersService {

  constructor(private readonly requester: RequesterService) {
  }
  public getAllUsers(): Observable<IUsers[]> {
    return this.requester.get('/api/users');
   }
}
