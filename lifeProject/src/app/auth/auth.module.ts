import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RegisterComponent } from '../shared/nav/register/register.component';
import { SharedModule } from './../shared/shared.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [RegisterComponent, LoginComponent]
})
export class AuthModule { }
