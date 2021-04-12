import { Contact } from '../contact';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog';

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
 

