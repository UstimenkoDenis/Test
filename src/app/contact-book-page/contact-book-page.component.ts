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

  onSelectContact = (ev) => { 
    console.log(ev); 
  }

  onAddContact(ev): void {
   this.contacts.push(ev) 
   console.log(this.curUser)
   this.setCurUserState()
  }

  nameFilter
  getItems(){
    // if(this.nameFilter != ""){
    //   return this.curUser.contacts.filter(item=>item === this.nameFilter)
    // }
    return this.curUser.contacts  
  }

   ngOnInit(): void {
      
  }

  getName() {
    return this.curUser.name
  }
  getContacts() {
    this.curUser.getContacts()
  }

  delContact(id) {
    const indx = this.curUser.contacts.findIndex(elem => elem.id === id)
    const before = this.curUser.contacts.slice(0,indx)
    const after = this.curUser.contacts.slice(indx+1)
    const newContacts = [...before, ...after]
    this.curUser.contacts = newContacts
    
    console.log(this.curUser.contacts)

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
