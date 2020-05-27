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

  nameFilter
  getItems(){
    // if(this.nameFilter != ""){
    //   return this.curUser.contacts.filter(item=>item === this.nameFilter)
    // }
    return this.curUser.contacts  
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

  editContact(id, name, email, phone) {

    const index = this.curUser.contacts.findIndex(elem => elem.id === id)
    this.curUser.contacts.splice(index,1, {
      "id": id,
      "name": name,
      "email": email,
      "phone": phone
    })

    // addContact(name, email, phone) {
    
    //   console.log(newContact)
    // }
  }
}
