import {Component, OnInit} from '@angular/core';

import {UserModel} from '../shared/classes/userModel'

@Component({
  selector: 'app-contact-book-page',
  templateUrl: './contact-book-page.component.html',
  styleUrls: ['./contact-book-page.component.scss']
})
export class ContactBookPageComponent implements OnInit {

  isFilterVisible = false
  isAddVisible = false
  curUser = new UserModel()
  curUserName = this.curUser.getName()
  ngOnInit(): void {
   
  }
}
