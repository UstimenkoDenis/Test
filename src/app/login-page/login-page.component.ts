import { Component, OnInit } from "@angular/core";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';

import {MaterialService} from '../shared/classes/material.service'
import { AuthService } from './../shared/services/auth.service';

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

   
  }
  onSubmit() {
   this.form.disable()
    let user = this.form.value
    this.auth.getUsers()
      .then((users) => {
       const currentUser = users.find(usr=>(usr.email === user.email)&&(usr.password === user.password) )
        if(users.find(usr=>(usr.email === user.email)&&(usr.password === user.password) )) {
           
          console.log("Вы вошли")
          this.router.navigate(['/book'])
           
          localStorage.setItem('user', JSON.stringify(currentUser))
        } else {
          MaterialService.toast("Неверные данные")
          
          this.form.enable()
         }
      }) 
                  
   
  }
}
