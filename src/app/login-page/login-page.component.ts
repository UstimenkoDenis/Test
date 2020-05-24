import { Component, OnInit } from "@angular/core";
import {FormGroup, FormControl, Validators} from '@angular/forms';

import { AuthService } from './../shared/services/auth.service';
@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent implements OnInit {

  form: FormGroup;
  constructor(private auth: AuthService ) { }

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
        if(users.find(usr=>(usr.email === user.email)&&(usr.password === user.password) )) {
           
          console.log("Вы вошли")
         
          
         } else {
          console.log("Вы не вошли")
          this.form.enable()
         }
      })             
   
  }
}
