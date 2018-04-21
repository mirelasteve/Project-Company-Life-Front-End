import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss'],
})
export class AddLinkComponent implements OnInit {
  public checked: boolean = false;
  public options: any[];
  private title = new FormControl();
 // tslint:disable-next-line:no-empty
  constructor(public dialogRef: MatDialogRef<AddLinkComponent> ) {
    this.options = [
  {value: 'action', status: 'action'},
  {value: 'social', status: 'social'},
];

}
  public close(): void {
  this.dialogRef.close();
}

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {}

}
