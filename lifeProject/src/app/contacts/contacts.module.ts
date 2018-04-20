import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts.routing.module';

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
  ],
})
export class ContactsModule { }
