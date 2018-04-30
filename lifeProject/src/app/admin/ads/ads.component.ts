import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { JobAdsService } from '../../core/admin/job-ads.service';
import { TransferJobAdsService } from '../../core/transfer-data/transfer-data.service';
import { IJobAds } from '../../models/job-ads';
import { AddJobComponent } from '../add-job/add-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  private displayedColumns = ['id', 'title', 'createdAt', 'view', 'edit', 'delete', 'job-applications'];
  private dataSource: MatTableDataSource<IJobAds>;
  private noJobAds: boolean;

  constructor(public dialog: MatDialog, private readonly jobAdsService: JobAdsService,
              private transferJobAdsService: TransferJobAdsService) {
              }

  public ngOnInit(): void {
    this.jobAdsService.getAllJobAds().subscribe((data) => {
      if (data.length === 0) {
        this.noJobAds = true;
      } else {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      }
    });
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
  }
  public openEditModal(jobAd: object): void {
    this.transferJobAdsService.insertData(jobAd);
    const dialogRef = this.dialog.open(EditJobComponent, {
      width: '250px',
      height: '500px',
    });
  }
  public deleteAd(id: number): void {
    const object = {
      id,
    };
    this.jobAdsService.deleteJobAd(object);
    }

  public openDialog(id: number): void {
    if (confirm('Are you sure you want to delete this job ad!')) {
      this.deleteAd(id);
      window.location.reload();
    }
  }
}
