import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { CareersService } from '../../core/careers/careers.service';
import { JobDetailsService } from '../../core/job-details/job-details.service';
import { LoginService } from '../../core/login/login.service';
import { RegisterComponent, RegistrationComponent } from '../../shared/nav/register/register.component';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  private register: RegisterComponent;
  private jobs: any;
  private urlId: string;
  private isAdmin: boolean;
  private isUser: boolean;
  constructor(private jobDetailService: JobDetailsService, private activatedRoute: ActivatedRoute,
              private loginService: LoginService,
              public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.jobDetailService.getAll().subscribe( (data) => {
      this.jobs =  data;
         });
    this.urlId = this.activatedRoute.snapshot.paramMap.get('id');
    this.isUser = this.loginService.isUser();

    this.isAdmin = this.loginService.isAdmin();
  }
  private reg(){
    const dialogRef = this.dialog.open(RegistrationComponent, {
      height: '400px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
         });
  }
  }

