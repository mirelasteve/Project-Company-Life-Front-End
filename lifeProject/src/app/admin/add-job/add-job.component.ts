import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { JobAdsService } from '../../core/admin/job-ads.service';
import { IJobAds } from '../../models/job-ads';
import "froala-editor/js/froala_editor.pkgd.min.js";

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss'],
})
export class AddJobComponent  {
 public categories: any[];
 public options: any[];
 private minLength: number = 4;
 private maxLength: number = 256;
 private title = new FormControl ('', [Validators.required, Validators.minLength( this.minLength ), Validators.maxLength(this.maxLength)]);

 // tslint:disable-next-line:no-empty
 constructor(public dialogRef: MatDialogRef<AddJobComponent>, private jobAdsService: JobAdsService ) {
    this.categories = [
  { value: '1', viewValue: 'IT' },
  { value: '2', viewValue: 'Marketing' },
  { value: '3', viewValue: 'Sales' },
  { value: '4', viewValue: 'Operations' },
  { value: '5', viewValue: 'Other' },
];
    this.options = [
  {value: 'open', status: 'open'},
  {value: 'closed', status: 'closed'},
];
}

 public isValidTitle(form) {
  console.log(form);
  console.log(form.title);
}
 public logForm(value: IJobAds): void {
   value.jobTypeId = +value.jobTypeId;
   this.dialogRef.close();
   this.dialogRef.afterClosed().subscribe(() => {
   this.jobAdsService.createJobAds(value);
   setTimeout(() => {
    window.location.reload();
<<<<<<< HEAD
    });
   });

=======
  });
>>>>>>> b94a06b0fbf5d6be7be54c91a97c5e85030bdff9
}

 public close(): void {
  this.dialogRef.close();
}

//  public minLengthError(num: number ): string {
//    if (num < this.textLength ) {
//     return ('Title is under 4 symbols');
//    }

// }

 public onNoClick(): void {
  this.dialogRef.close();
}
}
