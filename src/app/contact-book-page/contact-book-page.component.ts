import {Input, Component, OnInit} from '@angular/core';


import {UserModel} from '../shared/classes/userModel'
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-contact-book-page',
  templateUrl: './contact-book-page.component.html',
  styleUrls: ['./contact-book-page.component.scss']
})
export class ContactBookPageComponent implements OnInit {

  curUser = new UserModel();
  contacts = this.curUser.contacts;
  

  isFilterVisible = false
  isAddVisible = false
     
  constructor(){
  
  }
 
  setCurUserState(){
    localStorage.setItem('user', JSON.stringify(this.curUser))
  }

  onAddContact(ev): void {
   
    this.contacts.push(ev)
        this.setCurUserState()
        console.log(this.contacts)
  }
  
  delContact(id) {
    const indx = this.contacts.findIndex(elem => elem.id === id)
    this.contacts.splice(indx,1)
    this.setCurUserState()
    console.log(this.contacts)
  }

  onFilterContact(ev) {   
    
    this.visibleContacts = this.searchContacts(this.contacts, ev)
  }
  
  visibleContacts = this.contacts

  searchContacts(contacts, term) {
    console.log(term)
    
    if(term.length === 0) {
      return contacts
    }
    return  contacts.filter((contact)=>{
        return contact.name.indexOf(term) > -1
      })
    
  }

  ngOnInit(): void {
   const Lcontacts = this.curUser.getContacts;
    console.log(Lcontacts)  
  }

  getName() {
    return this.curUser.name
  }
  getContacts() {
    this.curUser.getContacts()
  }

  editContact(ev) {
    const index = this.contacts.findIndex(elem => elem.id ===ev.id)
    this.curUser.contacts.splice(index,1, ev)  
    this.setCurUserState()
  }
}
