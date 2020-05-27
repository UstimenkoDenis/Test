export class UserModel {
  
    user
    id   
    name
    contacts
    
    constructor() {
      this.user = JSON.parse(localStorage.getItem('user')) 
      this.name = this.user.name  
      this.id = this.user.id
      // this.contacts = [...this.user.contacts]
      this.contacts = this.user.contacts
    }
    getName(){
      return this.name
    }
    getId() {
      return this.id
    }
    getContacts() {
      return this.contacts
    }
    setContacts(userContacts) {
     this.contacts = userContacts
     return this.contacts
    }
}