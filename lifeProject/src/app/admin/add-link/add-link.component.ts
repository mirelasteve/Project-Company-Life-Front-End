import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import  {MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { LinksService } from '../../core/admin/links.service';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.scss'],
})
export class AddLinkComponent implements OnInit {
  public checked: boolean = false;
  public options: any[];
  public icons: any[];
  private title = new FormControl();
 // tslint:disable-next-line:no-empty
  constructor(public dialogRef: MatDialogRef<AddLinkComponent>, private linksService: LinksService ) {

    //  [{value:'facebook'},
    //  {value:'tweeter'},
    //  {value:'skype'},
    //  {value:'slack'},
    //  {value:'youtube'} ];
    this.options = [
  {value: 'action', status: 'action'},
  {value: 'social', status: 'social'},
];
}
  public ngOnInit(): void {
  this.linksService.getAllLinks().subscribe((data) => {
    this.icons = data;
    console.log(this.icons);
});
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
  setTimeout(()=> {
    window.location.reload();
  });
  // window.location.reload();
}
  public close(): void {
  this.dialogRef.close();
}

  // tslint:disable-next-line:no-empty

}
