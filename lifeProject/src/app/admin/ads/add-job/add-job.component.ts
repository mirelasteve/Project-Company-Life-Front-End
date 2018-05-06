import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import { JobAdsService } from '../../../core/admin/job-ads.service';
import { CareersService } from '../../../core/careers/careers.service';
import { IJobAds } from '../../../models/job-ads';
import { IJobTypes } from '../../../models/job-types';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss'],
})
export class AddJobComponent  {
 public categories: IJobTypes[];
 public options: any[];
 private minLength: number = 4;
 private maxLength: number = 256;
 private title = new FormControl ('', [Validators.required, Validators.minLength( this.minLength ), Validators.maxLength(this.maxLength)]);

 constructor(public dialogRef: MatDialogRef<AddJobComponent>, private jobAdsService: JobAdsService,
             private careersService: CareersService ) {
    this.careersService.getTypes().subscribe((data) => {
      this.categories = data;
    });
    this.options = [
  {value: 'open', status: 'open'},
  {value: 'closed', status: 'closed'},
];
}

 public logForm(value: IJobAds): void {
   value.jobTypeId = +value.jobTypeId;
   this.dialogRef.close();
   this.dialogRef.afterClosed().subscribe(() => {
   this.jobAdsService.createJobAds(value);
   setTimeout(() => {
    window.location.reload();
    });
   });
}

 public close(): void {
  this.dialogRef.close();
}

 public onNoClick(): void {
  this.dialogRef.close();
}
}
