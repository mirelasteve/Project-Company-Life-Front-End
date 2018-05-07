import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { LinksService } from '../../../core/admin/links.service';
import { TransferJobAdsService } from '../../../core/transfer-data/transfer-data.service';

@Component({
  selector: 'app-edit-links',
  templateUrl: './edit-links.component.html',
  styleUrls: ['./edit-links.component.scss'],
})
export class EditLinksComponent implements OnInit {
  private data: any;
  private checked: boolean = false;
  private options: any[];
  private title = new FormControl();

  constructor(public dialogRef: MatDialogRef<EditLinksComponent>,
              private transferJobAdsService: TransferJobAdsService,
              private linksService: LinksService ) {
    this.options = [
  {value: 'action', status: 'action'},
  {value: 'social', status: 'social'},
];
}
  public close(): void {
  this.dialogRef.close();
}

  public ngOnInit(): void {
    this.data = this.transferJobAdsService.transferredObject;
  }

  public logForm(value: any): void {
    value.id = this.data.id;
    if (value.checked) {
      delete value.checked;
      value.hidden = 'yes';
    } else {
      value.hidden = null;
      delete value.checked;
    }
    this.linksService.updateLinks(value);
    setTimeout(() => {
      window.location.reload();
    });
  }
}
