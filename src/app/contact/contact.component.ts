import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ContactItem } from '../model/contactItem';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  formContact: FormGroup;
  item: ContactItem = new ContactItem();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    localStorage['page'] = 'Contact';

    this.formContact = this.fb.group({
      sujet: [this.item.sujet, Validators.required ], 
      email: [this.item.email, [ Validators.required, Validators.email ] ],
      message: this.item.message
    });
  }

  onSubmit() {
    if (this.formContact.dirty && this.formContact.valid) {
      alert(`Sujet: ${this.item.sujet} Email: ${this.item.email}`);
    }
  }
}
