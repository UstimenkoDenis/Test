import { Component, OnInit } from "@angular/core";
import {FormGroup, FormControl, Validators} from '@angular/forms';

import { AuthService } from './../shared/services/auth.service';
@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"]
})
export class RegisterPageComponent implements OnInit {

  form: FormGroup;
  constructor(private auth: AuthService) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }
  onSubmit() {
    this.form.disable()
    this.auth.getUsers()
      .then((users) => {
        if(!users.find(usr=>(usr.email === this.form.value.email))) {
           
          this.auth.setUser(this.form.value.email, this.form.value.password) 
          
        } else {
          alert("Этот пользователь уже зарегистрирован")
          this.form.enable()
        }
      })
    
  }
}
