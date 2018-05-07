import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ContactsService } from '../../../core/admin/contacts.service';
import { LinksService } from '../../../core/admin/links.service';
import { TransferJobAdsService } from '../../../core/transfer-data/transfer-data.service';

@Component({
  selector: 'app-edit-contact-details',
  templateUrl: './edit-contact-details.component.html',
  styleUrls: ['./edit-contact-details.component.scss'],
})
export class EditContactDetailsComponent implements OnInit {

  private data: any;
  private title = new FormControl();

  constructor(public dialogRef: MatDialogRef<EditContactDetailsComponent>,
              private transferJobAdsService: TransferJobAdsService,
              private contactsService: ContactsService ) {
}
  public ngOnInit(): void {
    this.data = this.transferJobAdsService.transferredObject;
  }
  public close(): void {
    this.dialogRef.close();
  }
  public logForm(value: any): void {
    value.id = this.data.id;
    if (value.checked) {
      delete value.checked;
      value.isMapAddress = 'yes';
    } else {
      value.isMapAddress = null;
      delete value.checked;
    }
    this.contactsService.updateContactDetails(value);
    setTimeout(() => {
      window.location.reload();
    });
  }
}
