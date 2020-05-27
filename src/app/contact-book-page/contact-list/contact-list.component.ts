import {MaterialInstance, MaterialService } from './../../shared/classes/material.service';
import { Component, EventEmitter, OnInit, Input, Output, ViewChild, ElementRef, OnDestroy, AfterViewInit} from '@angular/core';

import {UserModel} from '../../shared/classes/userModel'
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() contacts: Object
  @Output() onSelection: EventEmitter<any> = new EventEmitter();
  @Output() onDelete:EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();

  @ViewChild('modal') modalRef: ElementRef
  modal: MaterialInstance

  delete(indx){
    const id = this.contacts[indx].id
    this.onDelete.emit(id)
  }

  ngOnInit(): void {
    console.log(this.contacts)
  }
  ngOnDestroy() {
    this.modal.destroy()
  }

  ngAfterViewInit() {
   this.modal = MaterialService.initModal(this.modalRef)
  }
  
  openModal(name, indx) {
    this.indxUser = indx
    this.usrName = name
    console.log(name)
    this.modal.open()

  }
  indxUser:number
  usrName: string

  submit(name, email, phone) {
    
    console.log(this.indxUser)
    const id = this.contacts[this.indxUser].id
    const modContact = {
      
      "id": id,
      "name": name,
      "email": email,
      "phone": phone
    }
    this.onEdit.emit(modContact)
    this.modal.close()
   
  }
  cancel() {
    this.modal.close()
  }

}
