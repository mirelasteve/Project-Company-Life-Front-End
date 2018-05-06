import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { UsersService } from '../admin/users.service';
import { RequesterService } from '../requester/requester.service';

@Injectable()
export class RegisterUsersService {
  public dataUser;
  constructor(private readonly requester: RequesterService) { }

  public registerUser(data: object): Subscription {
    console.log(data);
    return this.requester.post('http://localhost:3001/api/register', data).subscribe(
      (res) => {
        this.dataUser= data;
        console.log(data);
        console.log(res);
      },
      (err) => {
        alert("This user is already register!")
        console.log(err);
      },
    );
   }
  public getAllUsers(): Observable<any> {
    return this.requester.get('/api/users');
   }
  public checkForUser(email:string) {
        this.getAllUsers()
     .subscribe((data) =>
    data.forEach((obj) => {
      console.log(email,obj.email, obj.password);

    }),
    );

   }
}
