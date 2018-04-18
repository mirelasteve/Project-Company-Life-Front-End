import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {

  ngOnInit() {
  }
  types = [
    'IT',
    'Sales',
    'Marketing',
    'Operations',
    'Other',
  ]
  value: string = 'Clear me';

  displayedColumns = ['title'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 22; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    name: name,
  };
}

/** Constants used to fill up our data base. */
const NAMES = ['JavaScript Software Development Engineer', 'Customer Care Expert with Chinese', 
'JUNIOR TOOLS PROGRAMMER', 'TOOLS PROGRAMMER', 'Scrum Master with German', 'ERP Dynamics Subject Matter Expert',
  'Senior Java Developer', 'PHP Developer', 'System Administrator', 'Backup & Recovery IT Specialist for International IT Hub', 
  'Web Developer', 'Test Engineer',
  'Junior Software Tester', 'SAP FICO Analyst', 'Senior JavaScript Developer'];

export interface UserData {
  name: string;
}
