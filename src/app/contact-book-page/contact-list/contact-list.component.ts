import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor() { }
  currentUser = JSON.parse(localStorage.getItem('user')) 
  contacts = [...this.currentUser.contacts]
  ngOnInit(): void {
    
    console.log(this.currentUser)
  }

}
