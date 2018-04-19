import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactsRoutingModule } from './contacts.routing.module';
import { ContactsComponent } from './contacts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    ContactsComponent,
  ],
  exports: [
    ContactsComponent,
  ]
})
export class ContactsModule { }
