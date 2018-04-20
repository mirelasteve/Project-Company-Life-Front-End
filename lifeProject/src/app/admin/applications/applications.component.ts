import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss'],
})
export class ApplicationsComponent implements OnInit {

  @ViewChild(MatPaginator) private paginator: MatPaginator;
  @ViewChild(MatSort) private sort: MatSort;

  private displayedColumns = ['id', 'name', 'comment', 'createdAt', 'buttons'];
  private dataSource: MatTableDataSource<IUserData>;

  constructor() {
    // Create 100 users
    const usersLength = 100;
    const users: IUserData[] = [];
    for (let i = 1; i <= usersLength; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
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
}

/** Builds and returns a new User. */
const createNewUser = (id: number): IUserData => {
  const nameValue = Math.round(Math.random() * (NAMES.length - 1));
  const name = `${NAMES[nameValue]} ${NAMES[nameValue].charAt(0)}.`;
  const length = 100;

  return {
    id: id.toString(),
    name,
    comment: Math.round(Math.random() * length).toString(),
    createdAt: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    buttons: 'Download CV Download Cover Letter',
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
  name: string;
  comment: string;
  createdAt: string;
  buttons: string;
}
