import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactsService } from '../../core/admin/contacts.service';
import { IContactDetails } from '../../models/contact-details';
import { AddContactsComponent } from '../add-contacts/add-contacts.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) public sort: MatSort;

  private displayedColumns = ['id', 'name', 'value', 'isMapAddress', 'createdAt', 'edit', 'delete'];

  private dataSource: MatTableDataSource<IContactDetails>;

  constructor(public dialog: MatDialog, private readonly contactsService: ContactsService) {}

  public ngOnInit(): void {
    this.contactsService.getAllContactDetails().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    }
  public openCreateModal(): void {
      const dialogRef = this.dialog.open(AddContactsComponent, {
        width: '250px',
        height: '500px',
      });
    }
  public deleteAd(id: number): void {
      const object = {
        id,
      };
      this.contactsService.deleteContactDetails(object);
      }

  public openDialog(id: number): void {
      if (confirm('Are you sure you want to delete this link!')) {
        this.deleteAd(id);
      }
    }
  }
