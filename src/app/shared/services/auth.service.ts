import { Injectable } from '@angular/core';

import { User } from './../interfaces';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
}) 
export class AuthService {
    
    _apiBase = 'http://localhost:5000';

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok){
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
        
    }
    async getUsers() {
      return await this.getResource(`/users/`)  
        
    }
    async getUser(id) {
        return await this.getResource(`/users/${id}`)  
          
    }
   
    async setUser(name, email, password) {
        const number = await this.getUserNumber();
        const newUser = {
            id: number,
            name,
            email: email,
            password: password,
            contacts: [
                {
                    "id": 1,
                    "name": "Денис Устименко",
                    "email": "ustimenkodenis@mail.ru",
                    "phone": "+79635560362",
                    "website": "https://github.com/UstimenkoDenis"
                    
                },
                {
                    "id": 1,
                    "name": "Денис Устименко",
                    "email": "ustimenkodenis@mail.ru",
                    "phone": "+79635560362",
                    "website": "https://github.com/UstimenkoDenis"
                },
                {
                    "id": 1,
                    "name": "Денис Устименко",
                    "email": "ustimenkodenis@mail.ru",
                    "phone": "+79635560362",
                    "website": "https://github.com/UstimenkoDenis"
                }
            ]
        };
        const response = await fetch(`${this._apiBase}/users/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newUser)
        });
        if(!response.ok){
            throw new Error('json error');
        }
        // localStorage.setItem('auth-token', newUser)
    }
    async getUserNumber() {
        const res = await this.getResource('/users/')
        const userNumber = res.length+1;
      return userNumber;
    }
       
    // logout() {
    //     this.setToken(null)
    //     localStorage.clear()
    // }
    
}