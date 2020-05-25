import { Router } from '@angular/router';
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
  constructor(private auth: AuthService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    this.form.disable()
    let user = this.form.value
    console.log(this.form.value)
    this.auth.getUsers()
      .then((users) => {
        if(!users.find(usr=>(usr.email === user.email))) {
           
          this.auth.setUser(user.name, user.email, user.password) 
          console.log(`Новый пользователь ${user.email} создан`)
          this.router.navigate(['/login'], {
              queryParams: {
                registered: true
              }
              
          })
          
          
        } else {
          alert("Этот пользователь уже зарегистрирован")
          this.form.enable()
        }
      })
    
  }
}
