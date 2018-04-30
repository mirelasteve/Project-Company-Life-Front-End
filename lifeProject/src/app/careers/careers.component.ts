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
import { ICareers } from './../models/careers.model';
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
  public selected: any;
  public filter: any;
  private types = [
    'IT',
    'Sales',
    'Marketing',
    'Operations',
    'Other',
  ];
  private value: string = 'Clear me';
  private displayedColumns = ['title', 'id'];

  @ViewChild(MatPaginator) private paginator: MatPaginator;
  @ViewChild(MatSort) private sort: MatSort;
  constructor(private careersService: CareersService, private http: HttpClient) { }
  // tslint:disable-next-line:no-empty
  public ngOnInit(): void {
   this.careersService.getAll().subscribe( (data) => {
      this.careers =  data;
         });
   }
  public ngAfterViewInit(): void {
    this.careersService.getAll().subscribe( (data) => {
      this.careers =  data;
      this.careers.map( (key)=> {
        if(key.jobTypeId) {
         key.jobTypeId = key.jobTypeId.toLocaleString();
          console.log(typeof key.jobTypeId);
        }
      } );
      this.careers = new MatTableDataSource(this.careers);
      this.careers.sort = this.sort;
      this.careers.paginator = this.paginator;
         });
     }
  public getType():void{
    console.log(this.selected);
    if(this.selected){
      this.careersService.getTypes().subscribe((type) => {
      console.log(type);
        Object.values(type).map((obj) =>
        {
          console.log(obj);
          this.careers.filter = obj.id.toString();
          this.ngOnInit();
          // if(obj.name === this.selected) {
          //   console.log(obj.id);
          //   this.careers = new MatTableDataSource(this.careers);
          //   this.careers.filter = obj.id.toString();
          // }
          });
        });
      }
    else {
        return this.ngOnInit();
      }


}

  public applyFilter(filterValue: string) {
        this.careersService.getAll().subscribe( (data) => {
        this.careers =  data;
        this.careers = new MatTableDataSource(this.careers);
        let filterVal;
        filterVal = filterValue.trim(); // Remove whitespace
        filterVal = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.careers.filter = filterVal;
         });

  }

}
