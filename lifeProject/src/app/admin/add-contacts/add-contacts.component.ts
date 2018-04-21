import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.scss'],
})
export class AddContactsComponent implements OnInit {

  public checked: boolean = false;
  private title = new FormControl();
 // tslint:disable-next-line:no-empty
  constructor(public dialogRef: MatDialogRef<AddContactsComponent> ) {
}
  public close(): void {
  this.dialogRef.close();
}

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {}

}
