import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { TransferJobAdsService } from '../../../core/transfer-data/transfer-data.service';

@Component({
  selector: 'app-edit-links',
  templateUrl: './edit-links.component.html',
  styleUrls: ['./edit-links.component.scss'],
})
export class EditLinksComponent implements OnInit {
  public data: object;
  public checked: boolean = false;
  public options: any[];
  private title = new FormControl();
 // tslint:disable-next-line:no-empty
  constructor(public dialogRef: MatDialogRef<EditLinksComponent>,
              private transferJobAdsService: TransferJobAdsService ) {
    this.options = [
  {value: 'action', status: 'action'},
  {value: 'social', status: 'social'},
];
}
  public close(): void {
  this.dialogRef.close();
}

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
    this.data = this.transferJobAdsService.transferredObject;
  }

}
