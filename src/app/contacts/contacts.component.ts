import { Component, OnInit, ViewChild, Directive } from '@angular/core';
import { Contact } from '../contact';

import { ContactService } from '../contact.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogConfig} from '@angular/material/dialog';
import { NewContactComponent } from '../new-contact/new-contact.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { sortBy } from 'sort-by-typescript';
import {SelectionModel} from '@angular/cdk/collections';
import { ConfirmationDeleteContactComponent } from '../confirmation-delete-contact/confirmation-delete-contact.component';




@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  selectedContact?: Contact;
  newContact?: Contact;

  //panel para borrar
  isOpen = false;


  constructor(
    private contactService: ContactService, 
    private dialogNewContact: MatDialog,
    private dialogEditContact: MatDialog,
    private ConfirmationDeleteContactComponent: MatDialog
    ) { }

  ngOnInit() {
    this.getContacts();
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

  getContacts(): void {
    this.contactService.getContacts()
        .subscribe(contacts => {
          this.contacts = contacts;
          this.contacts = this.contacts.sort(sortBy('name'));
          this.dataSource.data = contacts;
        } );
  }

  delete(contact: Contact): void {
    this.contacts = this.contacts.filter(h => h !== contact);
    this.contactService.deleteContact(contact.id).subscribe();
    this.selection.clear()
    this.dataSource.data = this.contacts;
    this.isOpen = false;

  }

  favorite(contact: Contact):void {
    this.contacts = this.contacts.filter(h => h !== contact);
    console.log(contact.favorite);
    contact.favorite = !contact.favorite;
    this.contactService.updateContact(contact).subscribe();
  }

  displayedColumns: string[] = ['checkbox', 'picture', 'name', 'email', 'phoneNumber', 'favorite', 'delete'];
  dataSource = new MatTableDataSource<Contact>();
  
  //checkbox
  selection = new SelectionModel<Contact>(true, []); //parametros allowMultiSelect, initialSelection


  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  selectAll () {
    this.dataSource.data.forEach(row => this.selection.select(row));
  }

  deselectAll() {
    this.selection.clear();
    this.isOpen = false;
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Contact): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  displayDeleteBar() {
    if(this.selection.selected.length > 0) {
      this.isOpen = true; 
      return this.isOpen
    }
    else {
      this.isOpen = false;
      return this.isOpen
    }
  }


  hideDeleteBar() {
    this.isOpen = false;
    this.selection.clear();
  }

  deleteAllSelected() {
    console.log(this.selection.selected.length);
    for (let i of this.selection.selected) {
      this.delete(i);
    }
    this.selection.clear()
    this.isOpen = false;

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addNewContact(contact: Contact): void {
    this.contactService.addContact( contact )
      .subscribe(contact => {
        this.contacts.push(contact);
        this.contacts = this.contacts.sort(sortBy('name'));
        this.dataSource.data = this.contacts;
      });
  }

  updateContact(contact:Contact):void {
    this.contactService.updateContact(contact)
      .subscribe(contact => { 
        console.log("aca",contact);
       });
  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height= '500px';
    dialogConfig.width= '400px';
    dialogConfig.hasBackdrop = true;
    const dialogRef = this.dialogNewContact.open(NewContactComponent, dialogConfig);
    

    dialogRef.afterClosed().subscribe(result => {
      if (result)
      {
        this.newContact = result
        this.addNewContact(this.newContact);
      }
      });
  }

  editContactDialog(contact:Contact): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height= '500px';
    dialogConfig.width= '400px';
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = contact;

    this.contacts = this.contacts.filter(h => h !== contact);
    this.contactService.deleteContact(contact.id).subscribe();

    const dialogRef = this.dialogEditContact.open(EditContactComponent, dialogConfig); 

    dialogRef.afterClosed().subscribe(result => {
      if (result)
      {
        this.addNewContact(result);
        this.contacts = this.contacts.sort(sortBy('name'));
        this.dataSource.data = this.contacts;
      }
      });
  }

  confirmationDelete(contact?: Contact) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = contact;
    dialogConfig.hasBackdrop = true;

    const dialogRef = this.ConfirmationDeleteContactComponent.open(ConfirmationDeleteContactComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result === "true" && typeof contact === 'undefined') {
        this.deleteAllSelected();
      }
      else if (result === "true" && typeof contact !== 'undefined') {
        this.delete(contact);
      }
    });
  }
  
}