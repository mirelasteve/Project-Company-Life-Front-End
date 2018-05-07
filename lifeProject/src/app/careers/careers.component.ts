import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CareersService } from '../core/careers/careers.service';
import { LoginService } from '../core/login/login.service';
import { IJobAds } from '../models/job-ads';
import { IJobTypes } from '../models/job-types';
import { ICareers } from './../models/careers.model';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit {
  @Input()
  private noJobAds: boolean;
  private dataSource: MatTableDataSource<IJobAds>;
  private filteredTable: IJobAds[];
  private title: string;
  private types: object;
  private displayedColumns = ['title', 'description', 'status', 'createdAt', 'addType'];
  private isAdmin: boolean;

  @ViewChild(MatPaginator) private paginator: MatPaginator;
  @ViewChild(MatSort) private sort: MatSort;
  constructor(private careersService: CareersService, private loginService: LoginService) { }

  public ngOnInit(): void {
    this.getData();
}

  private getData(): void {
    this.isAdmin = this.loginService.isAdmin();

    if (this.isAdmin) {
      this.careersService.getAll().subscribe( (data) => {
        if (data.length === 0) {
          this.noJobAds = true;
        } else {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        }
      });
    } else {
      this.careersService.getOpenPositions().subscribe((data) => {
        if (data.length === 0) {
          this.noJobAds = true;
        } else {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        }
      });
    }
    this.careersService.getTypes().subscribe((data) => {
    this.types = data;
});
  }

  private filterFields(value: any): void {
      this.filteredTable = this.careersService.filterData(value, this.dataSource);
      this.dataSource = new MatTableDataSource(this.filteredTable);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  private reset(): void {
    setTimeout(() => {
      window.location.reload();
      });
  }
}
