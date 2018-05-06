import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CareersService } from '../../core/careers/careers.service';
import { JobDetailsService } from '../../core/job-details/job-details.service';
import { LoginService } from '../../core/login/login.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  private jobs: any;
  private urlId: string;
  private isAdmin: boolean;
  constructor(private jobDetailService: JobDetailsService, private activatedRoute: ActivatedRoute,
              private loginService: LoginService) {}

  public ngOnInit(): void {
    this.jobDetailService.getAll().subscribe( (data) => {
      this.jobs =  data;
         });
    this.urlId = this.activatedRoute.snapshot.paramMap.get('id');
    this.isAdmin = this.loginService.isAdmin();
  }
  }
