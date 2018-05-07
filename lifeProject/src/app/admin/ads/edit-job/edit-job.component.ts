import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { JobAdsService } from '../../../core/admin/job-ads.service';
import { JobApplicationsService } from '../../../core/admin/job-applications.service';
import { CareersService } from '../../../core/careers/careers.service';
import { TransferJobAdsService } from '../../../core/transfer-data/transfer-data.service';
import { IJobAds } from '../../../models/job-ads';
import { AddJobComponent } from '../add-job/add-job.component';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss'],
})
export class EditJobComponent implements OnInit {
  public data: any;
  // tslint:disable-next-line:no-empty
  public categories: any[];
  public options: any[];
  public jobApplication: any = {};
  public id: number;
  private textLength: number = 4;
  private test: string = 'value';
  private title = new FormControl ('', [Validators.required, Validators.minLength( this.textLength )]);

  constructor(public dialogRef: MatDialogRef<AddJobComponent>, private jobAdsService: JobAdsService,
              private transferJobAdsService: TransferJobAdsService,
              private jobApplicationsService: JobApplicationsService,
              private careersService: CareersService) {

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
 // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
    this.data = this.transferJobAdsService.transferredObject;
    const category = this.categories.filter((x) => +(x.value) === this.data.jobTypeId);
    this.data.type = category[0].viewValue;
  }

  public logForm(value: IJobAds): void {
   if (isNaN(value.jobTypeId)) {
     value.jobTypeId = this.data.jobTypeId;
   }
   value.id = this.data.id;
   value.jobTypeId = +value.jobTypeId;
   this.jobAdsService.updateJobAds(value);
   this.jobApplication.title = value.title;
   this.id = value.id;
   this.dialogRef.close();
   this.dialogRef.afterClosed().subscribe(() => {
   this.jobApplicationsService.updateJobApplication(this.jobApplication, this.id);
   setTimeout(() => {
    window.location.reload();
    });
   });

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
