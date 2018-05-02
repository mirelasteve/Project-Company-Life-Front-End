import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ContactDetailsService } from '../core/contacts/contacts.service';
import { IContactDetails } from '../models/contact-details';

@Component({
  selector: 'app-contact',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  private contactDetails: IContactDetails[];
  private mapAddress: SafeResourceUrl;
  private address: any;
  private defaultAddress: string = 'Sofia';
  private map: SafeResourceUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBNOoc8b6pkhimpyTk_TsMnXFIuDF18TTo&q=';
  constructor(private contactsService: ContactDetailsService,
              private sanitizer: DomSanitizer) {

  }

  public ngOnInit(): void {
    this.contactsService.getAllContactDetails().subscribe((data) => {
      this.contactDetails = data;
    });
    this.contactsService.getMapAddress().subscribe((data) => {
      this.address = data;
      if (this.address) {
        this.address = this.address.value.replace(/\s/g, '');
        this.address = `${this.map}${this.address}`;
        this.mapAddress = this.sanitizer.bypassSecurityTrustResourceUrl(this.address);
      } else {
        this.address = `${this.map}${this.defaultAddress}`;
        this.mapAddress = this.sanitizer.bypassSecurityTrustResourceUrl(this.address);
      }
    });
  }
}
