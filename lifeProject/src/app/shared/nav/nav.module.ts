import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DialogComponent, LoginModalComponent } from './login-modal/login-modal.component';
import { NavComponent } from './nav.component';
import { RegisterComponent, RegistrationComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
  ],
  declarations: [
    NavComponent,
    DialogComponent,
    LoginModalComponent,
    RegisterComponent,
    RegistrationComponent,
  ],
  exports: [
    NavComponent,
    DialogComponent,
    LoginModalComponent,
    RegisterComponent,
    RegistrationComponent,
  ],
  entryComponents: [DialogComponent, RegistrationComponent],
})
export class NavModule { }
