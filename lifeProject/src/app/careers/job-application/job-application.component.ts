import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute } from '@angular/router';
import { FileDropDirective, FileSelectDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { CreateApplicationService } from './../../core/job-application/create-application.service';

const URL = 'C:/Users/ACER/Desktop/frond-end-company-life-storage';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.scss'],
})
export class JobApplicationComponent implements OnInit {
  // public uploader: FileUploader = new FileUploader({url: URL});
  public values: string;
  public title: any;
  public urlId: any;
  public firstName: string;
  public lastName: string;
  public comment: string;
  public userId: number ;
  public cv: string;
  public cl: string;
  public email: string | 'email@abv.bg';
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private createService: CreateApplicationService) {
    this.title = this.activatedRoute.snapshot.paramMap.get('title');
   }

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
    // console.log(this.uploader.options.url)
    
  }
  public logForm(value: any): void {
    console.log(value);
    this.createService.createApplication(value);
 }
//   public submitApp(): void {
//     // this.createService.createApplication({
//       userId: 5,
//       title: this.activatedRoute.snapshot.paramMap.get('title'),
//       firstName: this.firstName,
//       lastName: this.lastName,
//       comment: this.comment,
//       email: 'email@abv.bg',
//       jobId: this.activatedRoute.snapshot.paramMap.get('id')
//     // });
//     }
}
