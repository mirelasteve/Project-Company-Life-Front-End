import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
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

  constructor(public dialog: MatDialog, private readonly usersService: UsersService) {}

  public ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    }
  }
