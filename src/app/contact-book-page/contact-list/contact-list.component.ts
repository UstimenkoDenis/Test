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

  onSelect(item: any) {
    this.onSelection.emit(item);
 }
 
//  onSelectUser(item: any) {
//   //here you would have item object.
// }


  constructor() {

  }
  ngOnInit(): void {
    console.log(this.contacts)
  }

}
