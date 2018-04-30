import { Component, OnInit } from '@angular/core';
import { ContactDetailsService } from '../core/contacts/contacts.service';
import { IContactDetails } from '../models/contact-details';

@Component({
  selector: 'app-contact',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  private contactDetails: IContactDetails[];
  constructor(private contactsService: ContactDetailsService) {

  }
  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
    this.contactsService.getAllContactDetails().subscribe((data) => {
      this.contactDetails = data;
      console.log(this.contactDetails);
    });
  }
}
