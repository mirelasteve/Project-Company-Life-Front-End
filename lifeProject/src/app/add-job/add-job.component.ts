import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {  MatDialog MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss'],
})
export class AddJobComponent  {
 public categories: any[];
 public options: any[];
 public title = new FormControl ('', [Validators.required, Validators.minLength( 4 )]);

 // tslint:disable-next-line:no-empty
 constructor(public dialogRef: MatDialogRef<AddJobComponentDialog> ) {
    this.categories = [
  { value: 'accounting', viewValue: 'Accounting' },
  { value: 'agriculture', viewValue: 'Agriculture' },
  { value: 'banking', viewValue: 'Banking' },
  { value: 'education', viewValue: 'Education' },
  { value: 'farming', viewValue: 'Farming' },
  { value: 'foodandbevarage', viewValue: 'Food and Bevarage' },
  { value: 'healthcare', viewValue: 'Health Care' },
  { value: 'it', viewValue: 'IT' },
  { value: 'logistics', viewValue: 'Logistics' },
  { value: 'marketing', viewValue: 'Marketing' },
  { value: 'pharmacy', viewValue: 'Pharmacy' },
  { value: 'socialworkers', viewValue: 'Social Workers' },
  { value: 'transportation', viewValue: 'Transportation' },
  { value: 'volunteer', viewValue: 'Volunteering' },
  { value: 'warehouse', viewValue: 'Warehousing' },
];
    this.options =[
  {value: 'active', status: 'active'},
  {value: 'inactive', status: 'inactive'},
];

}
 public minLengthError(num: number ): string {
   if(num < 4){
    return ('Title is under 4 symbols');
   }

}

 public onNoClick(): void {
  this.dialogRef.close();
}
}
 // tslint:disable-next-line:no-empty


