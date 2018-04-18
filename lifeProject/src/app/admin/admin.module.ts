import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { AdsComponent } from './ads/ads.component';
import { ApplicationsComponent } from './applications/applications.component';
import { LinksComponent } from './links/links.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  imports: [
    CommonModule,
   AdminComponent, 
   UsersComponent, 
   AdsComponent, 
   ApplicationsComponent, 
   LinksComponent, 
   ContactsComponent
  ],
  exports: [
    AdminComponent, 
    UsersComponent, 
    AdsComponent, 
    ApplicationsComponent, 
    LinksComponent, 
    ContactsComponent
  ],
})
export class AdminModule { }
