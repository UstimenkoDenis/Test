import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent {

  constructor() { }
  @Input() contacts: Object
  @Input() visibleContacts: Object
  @Output() onAdded: EventEmitter<any> = new EventEmitter()

  addContact(name: string, email: string, phone: string) {
    const id = Object.keys(this.visibleContacts).length + 1
    const newContact = {
      
      "id": id,
      "name": name,
      "email": email,
      "phone": phone
    }
    this.onAdded.emit(newContact);
  } 
}
