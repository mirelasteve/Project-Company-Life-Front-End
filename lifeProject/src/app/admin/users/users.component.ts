import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { JobApplicationsService } from '../../core/admin/job-applications.service';
import { UsersService } from '../../core/admin/users.service';
import { IUsers } from '../../models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;
  private displayedColumns = ['id', 'email', 'createdAt', 'role', 'numberOfJobApplications'];

  private dataSource: MatTableDataSource<IUsers>;
  private allJobApplications: any;
  private jobApplications: object = {};

  constructor(public dialog: MatDialog, private readonly usersService: UsersService,
              private readonly jobApplicationsService: JobApplicationsService) {}

  public ngOnInit(): void {
    this.jobApplicationsService.getAllJobApplications().subscribe((data) => {
      this.allJobApplications = data;
      this.allJobApplications.forEach((app) => {
        if (!this.jobApplications[app.userId]) {
          this.jobApplications[app.userId] = 1;
        } else {
        this.jobApplications[app.userId] += 1;
        }
      });
    });

    this.usersService.getAllUsers().subscribe((data) => {
      const usersData = data.map((element) => {
        element.numberOfJobApplications = this.jobApplications[element.id];
        if (typeof element.numberOfJobApplications === 'undefined') {
          element.numberOfJobApplications = null;
        }
        return element;
      });
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    }
  }
