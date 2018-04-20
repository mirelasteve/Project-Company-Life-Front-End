import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit {

  private types = [
    'IT',
    'Sales',
    'Marketing',
    'Operations',
    'Other',
  ];

  private value: string = 'Clear me';

  private displayedColumns = ['title'];
  private dataSource: MatTableDataSource<IUserData>;

  @ViewChild(MatPaginator) private paginator: MatPaginator;
  @ViewChild(MatSort) private sort: MatSort;

  constructor() {
    // Create 100 users
    const usersLength = 22;
    const users: IUserData[] = [];
    for (let i = 1; i <= usersLength; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */

  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
  }

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
}

/** Builds and returns a new User. */
const createNewUser = (id: number): IUserData => {
  const nameValue = Math.round(Math.random() * (NAMES.length - 1));
  const name = `${NAMES[nameValue]} ${NAMES[nameValue].charAt(0)}.`;

  return {
    name,
  };
};

/** Constants used to fill up our data base. */
const NAMES = ['JavaScript Software Development Engineer', 'Customer Care Expert with Chinese',
               'JUNIOR TOOLS PROGRAMMER', 'TOOLS PROGRAMMER', 'Scrum Master with German', 'ERP Dynamics Subject Matter Expert',
               'Senior Java Developer', 'PHP Developer', 'System Administrator',
               'Backup & Recovery IT Specialist for International IT Hub',
               'Web Developer', 'Test Engineer',
               'Junior Software Tester', 'SAP FICO Analyst', 'Senior JavaScript Developer'];

export interface IUserData {
  name: string;
}
