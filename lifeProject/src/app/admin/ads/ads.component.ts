import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { JobAdsService } from '../../core/admin/job-ads.service';
import { AddJobComponent } from '../add-job/add-job.component';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  private displayedColumns = ['id', 'jobTitle', 'createdAt', 'buttonView', 'buttonEdit', 'buttonDelete'];
  private dataSource: MatTableDataSource<IUserData>;

  constructor(public dialog: MatDialog, private readonly jobAdsService: JobAdsService) {
    // Create 100 users
    const usersLength: number = 100;
    const users: IUserData[] = [];
    for (let i = 1; i <= usersLength; i++) {
       users.push(createNewUser(i));
       }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
    this.jobAdsService.getAllJobAds().subscribe((data) => console.log(data));
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public applyFilter(filterValue: string): void {
    let filterVal;
    filterVal = filterValue.trim(); // Remove whitespace
    filterVal = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterVal;
  }
  public openCreateModal(): void {
    const dialogRef = this.dialog.open(AddJobComponent, {
      width: '250px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');

    });
  }
}

/** Builds and returns a new User. */
const createNewUser = (id: number): IUserData => {
  const nameValue = Math.round(Math.random() * (NAMES.length - 1));
  const name = `${NAMES[nameValue]} ${NAMES[nameValue].charAt(0)}.`;
  const length = 100;

  return {
    id: id.toString(),
    jobTitle: name,
    createdAt: Math.round(Math.random() * length).toString(),
    buttonView: 'View',
    buttonEdit: 'Edit',
    buttonDelete: 'Delete',
  };
};

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
                'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
               'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
               'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface IUserData {
  id: string;
  jobTitle: string;
  createdAt: string;
  buttonView: string;
  buttonEdit: string;
  buttonDelete: string;
}
