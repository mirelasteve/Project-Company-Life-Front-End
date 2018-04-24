import { HttpClient , HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ICareers } from './../models/careers.model';
import { CareersService } from '../core/careers/careers.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit {
  @Input()
  public careers: any;
    // tslint:disable-next-line:variable-name
  public dataSource: MatTableDataSource<any>;
  private types = [
    'IT',
    'Sales',
    'Marketing',
    'Operations',
    'Other',
  ];
  private value: string = 'Clear me';
  private displayedColumns = ['title'];
  @ViewChild(MatPaginator) private paginator: MatPaginator;
  @ViewChild(MatSort) private sort: MatSort;
  constructor(private careersService: CareersService, private http: HttpClient) { }
  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
   this.careersService.getAll().subscribe( (data) => {
      this.careers =  data;
      console.log(data);
         });
  //  console.log(this.dataSource);
  }

  // public ngAfterViewInit(): void {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  public applyFilter(filterValue: string): void {
    let filterVal;
    filterVal = filterValue.trim(); // Remove whitespace
    filterVal = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterVal;
  }

}
