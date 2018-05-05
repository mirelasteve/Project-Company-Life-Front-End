import { HttpClient , HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { CareersService } from '../core/careers/careers.service';
import { IJobAds } from '../models/job-ads';
import { ICareers } from './../models/careers.model';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent implements OnInit {
  @Input()
  public careers: any;
  public noJobAds: boolean;
  public dataSource: MatTableDataSource<IJobAds>;
  public selected: any;
  public filteredTable: any;
  public title: string;
  private types: any;
  private value: string = 'Clear me';
  private displayedColumns = ['title'];

  @ViewChild(MatPaginator) private paginator: MatPaginator;
  @ViewChild(MatSort) private sort: MatSort;
  constructor(private careersService: CareersService) { }

  public ngOnInit(): void {
    this.careersService.getAll().subscribe( (data) => {
      if (data.length === 0) {
        this.noJobAds = true;
      } else {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      }
    });
    this.careersService.getTypes().subscribe((data) => {
    this.types = data;
});
  }

  public logForm(value: any): void {
      this.filteredTable = this.careersService.filterData(value, this.dataSource);
      this.dataSource = new MatTableDataSource(this.filteredTable);
      this.dataSource.paginator = this.careers;
      this.dataSource.sort = this.sort;
  }
  public reset(): void {
    setTimeout(() => {
      window.location.reload();
      });
  }
}
