import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { LinksService } from '../../core/admin/links.service';
import { ILinks } from '../../models/links';
import { AddLinkComponent } from '../add-link/add-link.component';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  private displayedColumns = ['id', 'name', 'link', 'iconLink', 'type', 'createdAt', 'edit', 'delete'];
  private dataSource: MatTableDataSource<ILinks>;

  constructor(public dialog: MatDialog, private readonly linksService: LinksService) {}

  public ngOnInit(): void {
    this.linksService.getAllLinks().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    }
  public openCreateModal(): void {
      const dialogRef = this.dialog.open(AddLinkComponent, {
        width: '250px',
        height: '500px',
      });
    }
  }
