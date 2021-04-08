import { Contact } from '../contact';

import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {
  newContactForm: FormGroup; 
  contact: Contact;
 
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewContactComponent>) { };
   
  ngOnInit() {
    this.newContactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastname: [''],
      nickname: [''],
      phonenumber: [''],
      email: [''],
      company: [''],
      jobtitle: [''],
      birthday: [''],
      address: [''],
      notes: ['']
      })
  }

  onSubmit() {
    this.dialogRef.close(this.newContactForm.value);
  }

}
 

