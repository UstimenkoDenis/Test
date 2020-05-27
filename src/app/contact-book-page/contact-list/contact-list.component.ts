import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import {UserModel} from '../../shared/classes/userModel'
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Object
  @Output() onSelection: EventEmitter<any> = new EventEmitter();
  @Output() onDelete:EventEmitter<any> = new EventEmitter();

  delete(indx){
    const id = this.contacts[indx].id
    this.onDelete.emit(id)
    console.log(id)
  }

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.contacts)
  }

}
