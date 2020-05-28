import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from "@angular/core";
import {MaterialInstance, MaterialService } from '../../classes/material.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-site-layout",
  templateUrl: "./site-layout.component.html",
  styleUrls: ["./site-layout.component.scss"]
})
export class SiteLayoutComponent implements OnDestroy, AfterViewInit {

  @ViewChild('saveModal') modalRef: ElementRef
  saveModal: MaterialInstance
  
  constructor(private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute) { 

  }
  ngOnDestroy() {
    this.saveModal.destroy()
  }

  ngAfterViewInit() {
   this.saveModal = MaterialService.initModal(this.modalRef)
  }
  
  saveOrNo() {
    this.saveModal.open()
  }
  onSave() { 
    const savedUser = JSON.parse(localStorage.getItem('user')) 
    // const array = [{"1":"1"},{"2":"2"}]
    this.auth.saveUser(savedUser)
      
    this.onExit()
    this.saveModal.close()   
  }

  dontSave() {
    this.onExit()
    this.saveModal.close()
  }

  onExit(){
    this.router.navigate(['/login'])
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
  }

}
