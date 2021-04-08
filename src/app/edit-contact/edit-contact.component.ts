import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../contact';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  
  newContactForm: FormGroup; 
  contact: Contact;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditContactComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.contact = data;
    }

  ngOnInit(): void {
    this.newContactForm = this.formBuilder.group({
      id: [this.contact.id],
      picture: [this.contact.picture],
      name: [this.contact.name, [Validators.required]],
      lastname: [this.contact.lastname],
      nickname: [this.contact.nickname],
      phonenumber: [this.contact.phonenumber],
      email: [this.contact.email],
      company: [this.contact.company],
      jobtitle: [this.contact.jobtitle],
      birthday: [this.contact.birthday],
      address: [this.contact.address],
      notes: [this.contact.notes],
      checkbox: [this.contact.checkbox],
      favorite: [this.contact.favorite]
      });
  }


  onSubmit() {
    this.dialogRef.close(this.newContactForm.value);
  }


}

