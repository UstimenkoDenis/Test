import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {
 
  // @Input() nameFilter: string
  nameFilter
  @Output() onChanged = new EventEmitter<string>();
  onChange() {
    console.log(this.nameFilter)
  }

   ngOnInit(): void {

  }
  
}
