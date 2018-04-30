import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { JobApplicationsService } from '../../core/admin/job-applications.service';
import { IJobApplications } from '../../models/job-applications';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {
  public jobTitle: string;
  public id: string;
  // public cvLink: string;
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  private displayedColumns = ['id', 'name', 'email', 'comment', 'createdAt', 'cv', 'cl'];
  private dataSource: MatTableDataSource<IJobApplications>;
  private noApplications: boolean;

  constructor(public dialog: MatDialog, private readonly jobAdsService: JobApplicationsService,
              private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.jobAdsService.getAllJobApplicationsForJobAd(+this.id).subscribe((data) => {
      if (data.length === 0) {
        this.noApplications = true;
      } else {
      this.noApplications = false;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.jobTitle = this.dataSource.data[0].title;
    }
  });
    }
}
