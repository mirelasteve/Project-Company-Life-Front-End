import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

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
 constructor(public dialogRef: MatDialogRef<AddJobComponent> ) {
    this.categories = [
  { value: 'it', viewValue: 'IT' },
  { value: 'marketing', viewValue: 'Marketing' },
  { value: 'sales', viewValue: 'Sales' },
  { value: 'operations', viewValue: 'Operations' },
  { value: 'other', viewValue: 'Other' },
];
    this.options =[
  {value: 'open', status: 'open'},
  {value: 'closed', status: 'closed'},
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

