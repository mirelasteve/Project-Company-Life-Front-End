import { CreateApplicationService } from './../../core/job-application/create-application.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.scss']
})
export class JobApplicationComponent implements OnInit {

  public values: string;
  public title: any;
  public urlId: any;
  public firstName: string;
  public lastName: string;
  public comment: string;
  public userId: number | 4 ;
  public cv: string;
  public cl: string;
  public email: string | 'email@abv.bg';
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private createService: CreateApplicationService) {
    this.title = this.activatedRoute.snapshot.paramMap.get('title');
   }

  public ngOnInit() {
  }
  public submitApp() {
    this.createService.createApplication({
      userId: 5,
      title: this.activatedRoute.snapshot.paramMap.get('title'),
      firstName: this.firstName,
      lastName: this.lastName,
      comment: this.comment,
      cv: this.cv,
      coverLetter: this.cl,
      email: 'email@abv.bg',
      jobId: this.activatedRoute.snapshot.paramMap.get('id')});
        }
}


