import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CareersService } from '../../core/careers/careers.service';
import { JobDetailsService } from '../../core/job-details/job-details.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  public jobs: any;
  public urlId: string;
  constructor(private jobDetailService: JobDetailsService, private http: HttpClient, private activatedRoute: ActivatedRoute) {}
  public ngOnInit(): void {
    this.jobDetailService.getAll().subscribe( (data) => {
      this.jobs =  data;
      // console.log(data);
         });
    this.urlId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.urlId);
  }
  }
