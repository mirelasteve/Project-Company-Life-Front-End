import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { JobAdsService } from '../../core/admin/job-ads.service';
import { IJobAds } from '../../models/job-ads';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss'],
})
export class AddJobComponent  {
 public categories: any[];
 public options: any[];
 private textLength: number = 4;
 private title = new FormControl ('', [Validators.required, Validators.minLength( this.textLength )]);

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

 public logForm(value: IJobAds): void {
   value.jobTypeId = +value.jobTypeId;
   console.log(value);
   this.jobAdsService.createJobAds(value);
}

 public close(): void {
  this.dialogRef.close();
}

 public minLengthError(num: number ): string {
   if (num < this.textLength ) {
    return ('Title is under 4 symbols');
   }

}

 public onNoClick(): void {
  this.dialogRef.close();
}
}
