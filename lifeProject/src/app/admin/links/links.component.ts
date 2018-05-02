import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { LinksService } from '../../core/admin/links.service';
import { TransferJobAdsService } from '../../core/transfer-data/transfer-data.service';
import { ILinks } from '../../models/links';
import { AddLinkComponent } from '../add-link/add-link.component';
import { EditLinksComponent } from './edit-links/edit-links.component';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  private displayedColumns = ['id', 'name', 'linkTarget', 'iconLink', 'type', 'hidden', 'createdAt', 'edit', 'delete'];
  private dataSource: MatTableDataSource<ILinks>;
  private noLinks: boolean;

  constructor(public dialog: MatDialog, private readonly linksService: LinksService,
              private transferJobAdsService: TransferJobAdsService) {}

  public ngOnInit(): void {
    this.linksService.getAllLinks().subscribe((data) => {
      if (data.length === 0) {
        this.noLinks = true;
      } else {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  });
    }
  public openCreateModal(): void {
      const dialogRef = this.dialog.open(AddLinkComponent, {
        width: '550px',
        height: '500px',
      });
    }
  public openEditModal(links: object ): void {
    this.transferJobAdsService.insertData(links);
    const dialogRef = this.dialog.open(EditLinksComponent, {
        width: '250px',
        height: '500px',
      });
    }
  public deleteAd(id: number): void {
      const object = {
        id,
      };
      this.linksService.deleteLinks(object);
      }

  public openDialog(id: number): void {
      if (confirm('Are you sure you want to delete this link!')) {
        this.deleteAd(id);
        setTimeout(() => {
          window.location.reload();
        });
      }
    }

  }
