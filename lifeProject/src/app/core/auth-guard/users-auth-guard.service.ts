import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../login/login.service';

@Injectable()
export class UsersAuthGuardService implements CanActivate {

  constructor(private readonly router: Router,
              private loginService: LoginService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const check = this.loginService.isUser();
    console.log(check);
    if (!check) {
      this.router.navigateByUrl('/home');
  }
    return check;
  }
}
