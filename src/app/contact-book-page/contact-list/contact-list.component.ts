import { Component, OnInit } from '@angular/core';

import {UserModel} from '../../shared/classes/userModel'
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

 curUser = new UserModel()
 contacts = this.curUser.getContacts()
 constructor(){
  this.contacts.push({id:"23"})
 }
     
  ngOnInit(): void {
  }
  

}
