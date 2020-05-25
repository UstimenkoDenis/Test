import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-contact-book-page',
  templateUrl: './contact-book-page.component.html',
  styleUrls: ['./contact-book-page.component.scss']
})
export class ContactBookPageComponent implements OnInit {

  currentUser = JSON.parse(localStorage.getItem('user')) 
  currentName = this.currentUser.name
  isFilterVisible = false
  constructor() { }

  ngOnInit(): void {
   
  }
}
