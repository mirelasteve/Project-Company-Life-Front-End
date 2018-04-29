import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { LinksService } from '../../core/admin/links.service';

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
  constructor(public dialogRef: MatDialogRef<AddLinkComponent>, private linksService: LinksService ) {
    this.options = [
  {value: 'action', status: 'action'},
  {value: 'social', status: 'social'},
];
}
  public logForm(value: any): void {
  if (value.checked) {
    delete value.checked;
    value.hidden = 'yes';
  } else {
    delete value.checked;
  }
  console.log(value);
  this.linksService.createLinks(value);
  window.location.reload();
}
  public close(): void {
  this.dialogRef.close();
}

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {}

}
