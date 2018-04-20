import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {

  private displayedColumns = ['id', 'name', 'link', 'iconLink', 'createdAt', 'buttons'];
  private dataSource: MatTableDataSource<IUserData>;

  @ViewChild(MatPaginator) private paginator: MatPaginator;
  @ViewChild(MatSort) private sort: MatSort;

  constructor() {
    // Create 100 users
    const usersLength = 100;
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
  const length = 100;

  return {
    id: id.toString(),
    name,
    link: Math.round(Math.random() * length).toString(),
    iconLink: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    createdAt: '18/04/2018',
    buttons: 'Edit Delete',
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
  link: string;
  iconLink: string;
  createdAt: string;
  buttons: string;
}
