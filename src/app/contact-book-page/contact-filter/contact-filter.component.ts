import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent {
 
  nameFilter
  @Output() onChanged = new EventEmitter<string>();

  onChange(name) {
   
    this.onChanged.emit(name)
  }  
}
