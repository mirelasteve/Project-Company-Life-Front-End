import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { JobApplicationsService } from '../../core/admin/job-applications.service';
import { IJobApplications } from '../../models/job-applications';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;
  private jobTitle: string;
  private id: string;
  private pathToStorage: string = '../../../../storage/';
  // private pathToStorage: string = 'C:/Users/ACER/Desktop/front-end-company-life/storage/';
  // private pathToStorage: string = 'http://localhost:4200/storage/';
  private displayedColumns = ['id', 'name', 'email', 'comment', 'createdAt', 'cv', 'cl'];
  private dataSource: MatTableDataSource<IJobApplications>;
  private noApplications: boolean;

  constructor(public dialog: MatDialog, private readonly jobAdsService: JobApplicationsService,
              private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {}

  public ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.jobAdsService.getAllJobApplicationsForJobAd(+this.id).subscribe((data) => {
      if (data.length === 0) {
        this.noApplications = true;
      } else {
      this.noApplications = false;
      const jobApplications = data.map((jobApp) => {
        jobApp.cv = this.sanitizer.bypassSecurityTrustResourceUrl(this.pathToStorage + jobApp.cv);
        jobApp.coverLetter = this.sanitizer.bypassSecurityTrustResourceUrl(this.pathToStorage + jobApp.coverLetter);
        return jobApp;
      });
      console.log(jobApplications);
      this.dataSource = new MatTableDataSource(jobApplications);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.jobTitle = this.dataSource.data[0].title;
    }
  });
    }
}
